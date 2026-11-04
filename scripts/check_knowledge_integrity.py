#!/usr/bin/env python3
"""Guard structural integrity of the Soft Exam learning chapters.

This check protects existing topic/note/question inventory and identifies accidental
deletions or desynchronization between the JSON source and browser JS bundle.

It cannot prove factual completeness against the fourth-edition textbook:
that requires an independent, source-by-source editorial review.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"

# Minimums captured on 2026-11-04 from the already published website.
# Existing chapter 2 SDN additions are included, without removing original rows.
# Each tuple = (min_topics, min_questions, min_blocks, min_item_rows).
BASELINE = {
    2: (11, 46, 44, 129),
    3: (8, 17, 31, 96),
    4: (8, 20, 36, 119),
    5: (20, 45, 70, 216),
    6: (17, 25, 43, 128),
    7: (6, 30, 23, 70),
    8: (15, 52, 49, 139),
    9: (22, 48, 22, 90),
    10: (23, 27, 23, 91),
    11: (19, 33, 19, 82),
    12: (17, 30, 17, 69),
    13: (27, 48, 27, 87),
    14: (18, 28, 18, 57),
    15: (25, 52, 25, 79),
    16: (21, 35, 21, 65),
    17: (19, 29, 19, 63),
    18: (28, 56, 28, 99),
    19: (20, 29, 20, 66),
    20: (22, 25, 22, 79),
    21: (24, 24, 24, 85),
    22: (16, 23, 16, 53),
    23: (22, 20, 22, 78),
    24: (21, 18, 21, 68),
}
REQUIRED_SDN_ACRONYMS = ("NBI", "SBI", "A-CPI", "D-CPI", "CPI")

errors = []
print("Knowledge integrity check: 24 chapters, page content and question bank")
chapter_1 = json.loads((DATA / "chapter01.json").read_text(encoding="utf-8"))
catalog = (DATA / "catalog.js").read_text(encoding="utf-8")
content = (DATA / "content.js").read_text(encoding="utf-8")
ch1_topics = set(re.findall(r"\{id:'(1\.\d+\.\d+)',title:", catalog))
ch1_notes = set(re.findall(r"'(1\.\d+\.\d+)'\s*:\s*\{", content))
if len(ch1_topics) < 15 or len(ch1_notes) < 15 or (ch1_topics - ch1_notes):
    errors.append("Chapter 1: missing original topic notes")
if len(chapter_1.get("questions", [])) < 40:
    errors.append("Chapter 1: fewer than 40 original questions")
print(f"01  topics={len(ch1_topics):>2} notes={len(ch1_notes):>2} questions={len(chapter_1.get('questions', [])):>2}")

total_topics, total_questions = len(ch1_topics), len(chapter_1.get("questions", []))
for n, (min_topics, min_questions, min_blocks, min_rows) in BASELINE.items():
    stem = f"chapter{n:02d}"
    document = json.loads((DATA / f"{stem}.json").read_text(encoding="utf-8"))
    browser_text = (DATA / f"{stem}.js").read_text(encoding="utf-8")
    match = re.search(r"\bwindow\.EXAM_CH\d+\s*=\s*(\{.*\})\s*;?\s*$", browser_text, flags=re.S)
    if not match:
        errors.append(f"Chapter {n}: browser JavaScript data cannot be parsed")
        continue
    browser = json.loads(match.group(1))
    if document != browser:
        errors.append(f"Chapter {n}: .js and .json have different knowledge content")

    topics = [item["id"] for sec in document.get("sections", []) for item in sec.get("children", [])]
    notes = document.get("notes", {})
    questions = document.get("questions", [])
    blocks = [block for note in notes.values() for block in note.get("blocks", [])]
    rows = sum(len(block.get("items", [])) for block in blocks)
    missing = sorted(set(topics) - set(notes))
    if missing:
        errors.append(f"Chapter {n}: topics without notes: {', '.join(missing)}")
    if len(topics) < min_topics:
        errors.append(f"Chapter {n}: lost topic(s); found {len(topics)}, minimum {min_topics}")
    if len(questions) < min_questions:
        errors.append(f"Chapter {n}: lost questions; found {len(questions)}, minimum {min_questions}")
    if len(blocks) < min_blocks or rows < min_rows:
        errors.append(f"Chapter {n}: note detail count decreased: blocks={len(blocks)}, rows={rows}")
    if any(not note.get("blocks") for note in notes.values()):
        errors.append(f"Chapter {n}: empty knowledge block(s)")
    if n == 2:
        sdn_text = json.dumps(notes.get("2.1.2", {}), ensure_ascii=False)
        for keyword in REQUIRED_SDN_ACRONYMS:
            if keyword not in sdn_text:
                errors.append(f"Chapter 2 SDN: acronym {keyword} was removed")
    total_topics += len(topics)
    total_questions += len(questions)
    print(f"{n:02d}  topics={len(topics):>2} notes={len(notes):>2} questions={len(questions):>2} blocks={len(blocks):>2} rows={rows:>3}")

print(f"Total: topics={total_topics}, questions={total_questions}")
if errors:
    print("\n" + "\n".join("ERROR " + issue for issue in errors), file=sys.stderr)
    sys.exit(1)
print("PASS: inventory protected; this is a structural check, not a textbook fact audit.")
