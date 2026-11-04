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
console.log('PASS: original 800 questions preserved; 28 knowledge blocks; 63 adapted questions; total 863; source and topic links verified.');
