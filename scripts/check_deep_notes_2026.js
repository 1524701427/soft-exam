/* 编排一致性：原有章节和原题不改动，检查新增精讲落点及站点资源引用。 */
const fs=require('fs');
const path=require('path');
const assert=require('assert/strict');
const root=path.resolve(__dirname,'..');
const load=p=>fs.readFileSync(path.join(root,p),'utf8');
const deep=load('data/deep-exam-notes-2026.js');
new Function(deep); // 校验脚本语法
const match=deep.match(/const ITEMS=(\[[\s\S]*?\]);\nconst stats=/);
assert(match,'无法解析补充考点列表');
const list=JSON.parse(match[1]);
assert(list.length>=30,'精讲条目不足30');
assert.equal(new Set(list.map(x=>x.ch)).size,24,'应覆盖24章');
const seen=new Set();
for(const item of list){
  const key=item.ch+':'+item.id;
  assert(!seen.has(key),'考点重复: '+key);seen.add(key);
  assert(item.title&&Array.isArray(item.rows)&&item.rows.length>=4,'考点结构过于简略: '+key);
  assert(item.rows.every(r=>Array.isArray(r)&&r.length===2&&r[0]&&r[1]),'考点条目无标签或说明: '+key);
  if(item.ch===1) assert(load('data/content.js').includes("'"+item.id+"'")||load('data/content.js').includes('"'+item.id+'"'),'第一章知识点不存在: '+key);
  else {
    const doc=JSON.parse(load('data/chapter'+String(item.ch).padStart(2,'0')+'.json'));
    assert(doc.notes?.[item.id]?.blocks?.length,'章节精讲落点不存在: '+key);
  }
}
const index=load('index.html');
for(const file of ['assets/study-ui-v4.css','data/deep-exam-notes-2026.js']){
  assert(index.includes(file),'主站未引入资源 '+file);assert(fs.existsSync(path.join(root,file)),'缺少资源 '+file);
}
for(const dir of ['calculations','cases','challenge'])
  assert(load(dir+'/index.html').includes('../assets/module-ui-v4.css'),'专题未统一样式 '+dir);
console.log('设计及考点校验通过：'+list.length+'条精讲 / 24章 / 3个专题样式。');
