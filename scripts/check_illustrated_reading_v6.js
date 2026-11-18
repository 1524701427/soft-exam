/* v6 图解发布前验证：只使用原考点、旧图保持优先、三类资源加载顺序正确。 */
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const load=p=>fs.readFileSync(path.join(root,p),'utf8');
const ctx=vm.createContext({window:{}});
vm.runInContext(load('data/content.js'),ctx,{filename:'data/content.js'});
vm.runInContext(load('data/catalog.js'),ctx,{filename:'data/catalog.js'});
vm.runInContext(load('data/visuals.js'),ctx,{filename:'data/visuals.js'});
vm.runInContext(load('assets/lesson-diagrams-v6.js'),ctx,{filename:'assets/lesson-diagrams-v6.js'});
const factory=ctx.window.EXAM_BUILD_LESSON_VISUAL;
assert.equal(typeof factory,'function','缺少考点导图生成函数');
const old=ctx.window.EXAM_VISUALS;
assert(old.length>=426,'原有图解数据意外丢失');
assert(!old.some(x=>x.topicId==='1.1.1'),'测试预期变更：1.1.1 曾无匹配图');
assert(old.some(x=>x.topicId==='1.1.2'),'既有第一章生命周期图丢失');

const note=ctx.window.EXAM_NOTES['1.1.1'];
const map=factory('1.1.1','信息',note);
assert.equal(map.kind,'mindmap');
assert.equal(map.topicId,'1.1.1');
assert.equal(map.items.length,4);
assert(map.items.find(x=>x.label.includes('11'))?.detail.includes('客观性'));
assert(map.items.find(x=>x.label.includes('7'))?.detail.includes('精确性'));
assert.equal(factory('1.1.1','信息',note),map,'重复渲染图解未复用');
assert.equal(factory('1.1.1','信息',null),null,'没有教材笔记时不应虚构知识图');
assert.equal(factory('1.1.1','信息',{}),null,'缺少块内容时不应生成空图');

const chapters=[];
for(let i=2;i<=24;i++){
 const file='data/chapter'+String(i).padStart(2,'0')+'.json';
 const d=JSON.parse(load(file));
 chapters.push(d);
}
const sample=chapters.map((ch,index)=>{
 const entry=Object.entries(ch.notes||{}).find(([id,n])=>Array.isArray(n.blocks)&&n.blocks.length>=2&&
      !old.some(v=>v.topicId===id));
 return entry&&{chapter:index+2,entry};
}).find(Boolean);
assert(sample,'缺少其他章节的自动导图测试样例');
const [topicId,otherNote]=sample.entry;
const other=factory(topicId,'本章知识点',otherNote);
assert(other&&other.items?.length>=2,'其他章节笔记导图生成失败：'+topicId);
assert.equal(other.chapterId,sample.chapter,'生成图解跨章节归属异常');
assert(other.items.every(item=>item.label&&item.detail),'图解分支不完整');

// 全量覆盖检测：一章也不能仅有文本、没有图解。
const originalTopics=new Set(old.map(v=>v.topicId));
const allChapters=[{sections:ctx.window.EXAM_SECTIONS,notes:ctx.window.EXAM_NOTES},...chapters];
assert.equal(allChapters.length,24,'章数不完整');
const coverage={chapters:0,topics:0,original:0,generated:0,empty:0};
const coverageRows=[];
for(let ch=1;ch<=24;ch++){
 const data=allChapters[ch-1];
 assert(Array.isArray(data.sections)&&data.sections.length>0,'第'+ch+'章目录为空');
 const topics=data.sections.flatMap(s=>s.children||[]);
 assert(topics.length>0,'第'+ch+'章没有知识点');
 let manual=0,automatic=0,missing=[];
 for(const t of topics){
  assert(t.id,'第'+ch+'章知识点缺少ID');
  if(originalTopics.has(t.id)){manual++;continue}
  const built=factory(t.id,t.title,data.notes?.[t.id]);
  if(!built){missing.push(t.id);continue}
  assert.equal(built.chapterId,ch,'自动图解章节归属错误：'+t.id);
  assert.equal(built.topicId,t.id,'自动图解对应错误：'+t.id);
  assert(built.items?.length>=2,'自动图解不足两个知识分支：'+t.id);
  assert(built.items.every(item=>item.label&&item.detail),'自动图解节点为空：'+t.id);
  automatic++;
 }
 assert.equal(missing.length,0,'第'+ch+'章仍有无图解知识点：'+missing.join(', '));
 coverage.chapters++;
 coverage.topics+=topics.length;
 coverage.original+=manual;
 coverage.generated+=automatic;
 coverage.empty+=missing.length;
 coverageRows.push('第'+ch+'章：'+topics.length+'节（专题'+manual+' / 笔记导图'+automatic+'）');
}
assert(coverage.topics>=400,'知识点覆盖范围意外缩减');
assert(coverage.original>0&&coverage.generated>0,'专题图解或自动导图缺失');
assert.equal(coverage.original+coverage.generated,coverage.topics,'知识点图解覆盖未达100%');

const app=load('assets/app.js');
assert(app.includes('if(exact.length)return exact;'),'必须优先显示原有人工整理的图解');
assert(app.includes('EXAM_BUILD_LESSON_VISUAL'),'阅读页缺失知识导图回退逻辑');
new Function(app);
new Function(load('assets/visuals-ui.js'));
assert(load('assets/visuals-ui.js').includes("diagram.kind==='mindmap'"),'未注册知识导图渲染分支');
const index=load('index.html');
const ordered=['data/visuals.js','assets/visuals-ui.js','data/deep-exam-notes-2026.js',
 'assets/lesson-diagrams-v6.js','assets/app.js'];
const positions=ordered.map(file=>{const at=index.indexOf(file);assert(at>=0,'HTML 未加载 '+file);return at});
assert(positions.every((pos,i)=>i===0||pos>positions[i-1]),'图解依赖加载顺序错误');
for(const file of ['assets/illustrated-reading-v6.css','assets/lesson-diagrams-v6.js'])
 assert(index.includes(file)&&fs.existsSync(path.join(root,file)),'新增资源不存在：'+file);
assert(index.includes('先看图，再理解知识点'),'章节学习页未启用图解导读');
assert(index.includes('class="chapter-map-panel"'),'没有渲染所有章节的知识路线图');
assert(index.includes('v-for="(sec,i) in currentChapterSections"'),'章节知识路线没有绑定真实课程目录');
assert(index.includes("@click=\"selectTopic(sec.children?.[0]?.id)\""),'章节地图模块入口未绑定知识点跳转');
const ui=load('assets/illustrated-reading-v6.css');
assert(ui.includes('.chapter-map-panel')&&ui.includes('.chapter-map-stop'),'章节地图缺少样式');


console.log('24章全量检查通过：'+JSON.stringify(coverage)+'\n'+coverageRows.join('\n')+'\n原专题图未覆盖时才采用本节笔记导图；交互章节路线图与脚本顺序均校验通过。');
