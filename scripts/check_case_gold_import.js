#!/usr/bin/env node
'use strict';
/**
 * 2026案例金色考点独立补充校验。
 * 原24章内容不被覆盖；扫描来源未确认的题目不得猜答入库。
 */
const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..'),sandbox={window:{}};
vm.createContext(sandbox);
function run(p){vm.runInContext(fs.readFileSync(path.join(root,p),'utf8'),sandbox,{filename:p,timeout:5000})}
run('data/catalog.js');run('data/content.js');
for(let i=1;i<=24;i++)run('data/chapter'+String(i).padStart(2,'0')+'.js');
const original=new Map(),originalQuestions=new Map();
for(let n=1;n<=24;n++){
  const ch=sandbox.window['EXAM_CH'+n];
  assert(ch,'Chapter '+n+' missing');
  originalQuestions.set(n,ch.questions.length);
  if(ch.notes)for(const [id,note] of Object.entries(ch.notes))original.set(n+':'+id,JSON.stringify(note.blocks));
}
const originalTotal=[...originalQuestions.values()].reduce((a,b)=>a+b,0);
assert.strictEqual(originalTotal,800,'Original 800 questions must be preserved');
run('data/case-gold-2026-notes.js');
run('data/case-gold-2026-questions.js');
const newQuestions=[],afterTotal=[...originalQuestions].reduce((total,[ch,count])=>total+sandbox.window['EXAM_CH'+ch].questions.length,0);
assert.strictEqual(afterTotal,863,'Total after import expected 863, got '+afterTotal);
for(let n=1;n<=24;n++){
  const chapter=sandbox.window['EXAM_CH'+n],before=originalQuestions.get(n);
  assert(chapter.questions.length>=before,'Existing question removed');
  newQuestions.push(...chapter.questions.slice(before));
}
assert.strictEqual(newQuestions.length,63,'Need 63 genuinely added questions');
assert.strictEqual(new Set(newQuestions.map(q=>q.id)).size,63,'Duplicate IDs');
for(const q of newQuestions){
  assert(q.id.startsWith('gold26-'),'Unexpected ID '+q.id);
  assert(q.kind.includes('改编')&&q.sourceLabel.includes('PDF第'),'Missing source label '+q.id);
  assert(q.sourcePage>=1&&q.sourcePage<=476,'Invalid PDF page '+q.id);
  assert(Array.isArray(q.options)&&q.options.length===4&&q.options.every(x=>typeof x==='string'&&x.length>0),'Missing options '+q.id);
  assert('ABCD'.includes(q.answer)&&q.answer.length===1,'Invalid correct answer '+q.id);
  assert(q.title.length>12&&q.explanation.length>10,'Empty question/explanation '+q.id);
  assert(sandbox.window['EXAM_CH'+q.chapterId].notes[q.sectionId],'Topic not found '+q.id);
}
let addedBlocks=0;
for(const [key,before] of original){
 const [n,id]=key.split(':');
 const blocks=sandbox.window['EXAM_CH'+n].notes[id].blocks;
 const previous=JSON.parse(before);
 assert.strictEqual(JSON.stringify(blocks.slice(0,previous.length)),before,'Original knowledge was altered '+key);
 addedBlocks+=blocks.length-previous.length;
}
assert.strictEqual(addedBlocks,28,'Expected 28 appended knowledge blocks, got '+addedBlocks);
for(let n=1;n<=24;n++){const qs=sandbox.window['EXAM_CH'+n].questions;const ids=qs.map(x=>x.id);assert.strictEqual(new Set(ids).size,ids.length,'Duplicate IDs in chapter '+n)}
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const f of ['data/case-gold-2026-notes.js','data/case-gold-2026-questions.js','assets/app.js'])assert(index.includes(f),'index.html not loading '+f);
assert(index.indexOf('data/chapter24.js')<index.indexOf('data/case-gold-2026-notes.js'),'Supplement must load after chapter data');
assert(index.indexOf('data/case-gold-2026-questions.js')<index.indexOf('assets/app.js'),'Questions must load before Vue app');

run('cases/data/gold-questions.js');
const caseItems=sandbox.window.CASE_GOLD_OPEN_2026;
assert(Array.isArray(caseItems)&&caseItems.length===10,'Expected 10 sourced short-answer cases');
for(const [i,c] of caseItems.entries()){
 assert(c.topic&&c.title&&c.scenario,'Missing case statement '+(i+1));
 assert(c.page>=1&&c.page<=476,'Invalid case page '+(i+1));
 assert(Array.isArray(c.points)&&c.points.length>=3,'Missing case-answer points '+(i+1));
}
const caseHTML=fs.readFileSync(path.join(root,'cases/index.html'),'utf8');
assert(caseHTML.includes('id="main-gold"')&&caseHTML.includes('data-view="gold"'),'Casebook gold tab is unavailable');
assert(caseHTML.includes('cases/data/gold-questions.js')||caseHTML.includes('./data/gold-questions.js'),'Casebook script missing');
const mainHTML=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(mainHTML.includes("openCaseSection('gold')"),'Root side navigation missing case-gold tab');
for(const file of ['cases/app.js','assets/app.js','data/case-gold-2026-notes.js','data/case-gold-2026-questions.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});

/* 文件补充只追加：任何章节原正文、金色考点补充或习题不能被替换。 */
const originalWithCases=new Map();
for(let n=1;n<=24;n++){
  const ch=sandbox.window['EXAM_CH'+n];
  for(const [section,note] of Object.entries(ch.notes||{}))
    originalWithCases.set(n+':'+section,JSON.stringify(note.blocks));
}
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/project-doc-examples-2026.json'),'utf8'));
assert(Array.isArray(manifest.groups)&&manifest.groups.length===58,'Expected 58 groups');
const wanted=new Map();let expectedDocs=0;
for(const g of manifest.groups){
 assert(g.chapter>=3&&g.chapter<=24,'Invalid chapter '+g.chapter);
 assert(sandbox.window['EXAM_CH'+g.chapter].notes[g.sectionId],'Missing target section '+g.chapter+'/'+g.sectionId);
 const k=g.chapter+':'+g.sectionId;
 assert(!wanted.has(k),'Duplicate document example group '+k);
 wanted.set(k,g.rows.length);
 for(const row of g.rows){
  assert(row.kind&&row.name&&row.contents&&row.example&&row.process,'Incomplete document content '+k);
  expectedDocs++;
 }
}
assert.strictEqual(expectedDocs,103,'Expected 103 document examples');
run('data/project-doc-examples-2026.js');
assert.strictEqual(sandbox.window.EXAM_DOC_EXAMPLES_2026.documents,103,'Document count mismatch');
assert.strictEqual(sandbox.window.EXAM_DOC_EXAMPLES_2026.groups,58,'Group count mismatch');
assert.strictEqual(sandbox.window.EXAM_DOC_EXAMPLES_2026.chapters.length,22,'Relevant chapter count mismatch');
for(const [key,before] of originalWithCases){
 const [chapter,section]=key.split(':');
 const blocks=sandbox.window['EXAM_CH'+chapter].notes[section].blocks;
 const previous=JSON.parse(before);
 assert.strictEqual(JSON.stringify(blocks.slice(0,previous.length)),before,'Existing notes modified '+key);
 const appended=blocks.slice(previous.length);
 assert.strictEqual(appended.length,wanted.has(key)?1:0,'Unexpected block count '+key);
 if(appended.length){
  assert(appended[0].documentExampleKey&&appended[0].type==='concept','Invalid example block '+key);
  assert(Array.isArray(appended[0].items)&&appended[0].items.length===wanted.get(key),'Document sample count missing '+key);
 }
}
const totalAfterDoc=[...originalQuestions].reduce((total,[n,_])=>total+sandbox.window['EXAM_CH'+n].questions.length,0);
assert.strictEqual(totalAfterDoc,863,'Document examples must not change question count');
assert(index.includes('data/project-doc-examples-2026.js'),'Document example script not loaded');
assert(index.indexOf('data/project-doc-examples-2026.js')<index.indexOf('assets/app.js'),'Document examples must load before app');
assert(index.includes('chapterDocExampleTopics')&&index.includes('document-example-text'),'Chapter document UI missing');
console.log('PASS: 800 original and 63 adapted questions; 28 case blocks; 10 open-answer cases; 58 document groups and 103 examples across 22 chapters; UI verified.');
