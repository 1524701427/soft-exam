(()=>{
"use strict";
const topics=window.CASE_BANK||[];
const all=topics.flatMap(t=>t.cards.map(c=>({...c,groupId:t.id,groupName:t.name,source:t.source,reference:t.reference})));
const storeKey="gao-xiang-cases-v1";
let saved={favorites:[],mastered:[],practiceHistory:[]};
try{saved={...saved,...JSON.parse(localStorage.getItem(storeKey)||"{}")}}catch(_){}
const state={topic:"all",filter:"all",query:"",caseName:"all",shown:80,view:"library",quizIndex:0,quizReveal:false,quizIds:[],expanded:new Set()};
function reportEmbeddedNav(){
 if(document.documentElement.classList.contains('is-embedded')&&window.parent!==window)
 window.parent.postMessage({type:'gao-xiang-embed-nav-state',target:'casebook',view:state.view,topic:state.topic},location.origin);
}
const el=id=>document.getElementById(id);
const esc=s=>String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const clean=s=>String(s||"").replace(/江山老师\s*QQ\/VX[^。]+/g,"").replace(/[]/g,"· ").replace(/(?:[\/]V|X:|(?<![A-Za-z])Q)\s*$/g,"").replace(/(?:\b(?:9|16|66|07|91)\b)\s*$/g,"").replace(/(?:序\s*问题(?:要点|描述)?|编\s*问题描述|【问题\s*\d+\s*】|表格\s*序)\s*[\s\S]*$/g,"").replace(/(?:[-–]\s*\d+\s*[-–])\s*$/g,"").trim();
const short=(s,n)=>{s=clean(s);return s.length>n?s.slice(0,n).replace(/[，、：；,;]\s*$/,"")+"…":s};
const byId=new Map(all.map(x=>[x.id,x]));
const unique=x=>[...new Set(x)];
const isFav=id=>saved.favorites.includes(id);
const isDone=id=>saved.mastered.includes(id);
function persist(){localStorage.setItem(storeKey,JSON.stringify(saved))}
function toggle(key,id){let a=saved[key];saved[key]=a.includes(id)?a.filter(x=>x!==id):[...a,id];persist();renderStats();renderCards();renderTopbar()}
function setView(view){state.view=view;el("main-library").hidden=view!=="library";el("main-method").hidden=view!=="method";el("main-practice").hidden=view!=="practice";el("main-favorites").hidden=view!=="favorites";document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("selected",b.dataset.view===view));if(view==="favorites")renderFavorites();if(view==="practice")renderQuiz();reportEmbeddedNav();window.scrollTo({top:0,behavior:"smooth"});if(document.documentElement.classList.contains("is-embedded"))window.parent.postMessage({type:"gao-xiang-embed-top"},location.origin)}
function setTopic(id){state.topic=id;state.caseName="all";state.shown=80;el("topic-select").value=id;document.querySelectorAll("[data-topic]").forEach(x=>x.classList.toggle("selected",x.dataset.topic===id));if(state.view!=="library")setView("library");renderCases();renderCards();renderTopbar();reportEmbeddedNav();}
function renderGroups(){
const nav=el("topic-nav");nav.innerHTML='<button type="button" data-topic="all" class="group-button selected"><span class="group-dot">✦</span><span>全部领域</span><b>'+all.length+'</b></button>'+topics.map((t,i)=>'<button type="button" class="group-button" data-topic="'+t.id+'"><span class="group-dot">'+String(i+1).padStart(2,"0")+'</span><span>'+esc(t.name)+'</span><b>'+t.cards.length+'</b></button>').join("");
nav.querySelectorAll("[data-topic]").forEach(b=>b.addEventListener("click",()=>setTopic(b.dataset.topic)));
el("topic-select").innerHTML='<option value="all">全部领域 · '+all.length+' 条</option>'+topics.map(t=>'<option value="'+t.id+'">'+esc(t.name)+' · '+t.cards.length+'</option>').join("");
el("topic-select").addEventListener("change",e=>setTopic(e.target.value));
const grid=el("topic-grid");grid.innerHTML=topics.map((t,i)=>'<button type="button" class="domain-card" data-topic="'+t.id+'"><span class="domain-number">0'+(i+1)+' / TOPIC</span><strong>'+esc(t.name)+'</strong><span class="domain-meta">'+t.cards.length+' 个找错点 · '+esc(t.reference)+'</span><span class="domain-arrow">↗</span></button>').join("");
grid.querySelectorAll("[data-topic]").forEach(b=>b.addEventListener("click",()=>setTopic(b.dataset.topic)));
}
function activeCards(){
const q=state.query.toLocaleLowerCase().trim();
return all.filter(c=>{
if(state.topic!=="all"&&c.groupId!==state.topic)return false;
if(state.caseName!=="all"&&c.caseName!==state.caseName)return false;
if(state.filter==="favorite"&&!isFav(c.id))return false;
if(state.filter==="mastered"&&!isDone(c.id))return false;
if(state.filter==="unmastered"&&isDone(c.id))return false;
if(!q)return true;
return [c.title,c.clue,c.fix,c.groupName,c.caseName].some(s=>String(s||"").toLocaleLowerCase().includes(q))
})}
function renderCases(){
const select=el("case-filter"),group=state.topic==="all"?all:all.filter(c=>c.groupId===state.topic);
const cases=unique(group.map(c=>c.caseName)).filter(x=>x&&x!=="综合案例").sort((a,b)=>parseInt(a.replace(/\D/g,""))-parseInt(b.replace(/\D/g,"")));
select.innerHTML='<option value="all">全部案例编号</option>'+cases.map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join(""); select.value=state.caseName;
}
function cardHtml(c,i){
 const favorite=isFav(c.id),mastered=isDone(c.id);
 const clue=clean(c.clue)||"讲义未单独提取题干依据，请对照对应案例核查。";
 const fix=clean(c.fix)||"请结合对应知识领域的计划、执行、检查及变更控制要求完善。";
 const ref=esc(c.caseName)+" · PDF 第 "+Number(c.page)+" 页";
 return '<article class="mistake-list-row'+(mastered?' is-mastered':'')+'" role="row" id="card-'+esc(c.id)+'">'+
   '<div class="mistake-list-problem" role="cell">'+
     '<div class="mistake-item-title"><span class="mistake-no">'+String(i+1).padStart(2,"0")+'</span><strong>'+esc(clean(c.title))+'</strong></div>'+
     '<div class="mistake-list-meta"><span class="meta-tag">'+esc(c.groupName)+'</span><span>'+ref+'</span></div>'+
     '<div class="mistake-list-actions">'+
       '<button type="button" data-fav="'+esc(c.id)+'" aria-label="'+(favorite?'取消收藏：':'收藏：')+esc(c.title)+'" class="'+(favorite?'marked':'')+'">'+(favorite?'★ 已收藏':'☆ 收藏')+'</button>'+
       '<button type="button" data-done="'+esc(c.id)+'" aria-label="'+(mastered?'取消已掌握：':'标记掌握：')+esc(c.title)+'" class="'+(mastered?'complete':'')+'">'+(mastered?'✓ 已掌握':'○ 标记掌握')+'</button>'+
     '</div>'+
   '</div>'+
   '<div class="mistake-list-evidence" role="cell"><span class="mistake-mobile-label">题干依据</span><p>'+esc(clue)+'</p></div>'+
   '<div class="mistake-list-solution" role="cell"><span class="mistake-mobile-label">正确做法</span><p>'+esc(fix)+'</p></div>'+
 '</article>';
}
function registerCardEvents(root){
 root.querySelectorAll("[data-fav]").forEach(b=>b.addEventListener("click",()=>toggle("favorites",b.dataset.fav)));
 root.querySelectorAll("[data-done]").forEach(b=>b.addEventListener("click",()=>toggle("mastered",b.dataset.done)));
}
function renderCards(){
const cards=activeCards(),root=el("cards-list");root.innerHTML='<div class="mistake-list-head" role="row"><span role="columnheader">错误点 / 资料定位</span><span role="columnheader">题干依据</span><span role="columnheader">正确做法</span></div>'+cards.slice(0,state.shown).map(cardHtml).join("");
registerCardEvents(root);
el("result-count").textContent="筛选结果 "+cards.length+" 条 · 已展示 "+Math.min(cards.length,state.shown)+" 条";
el("load-more").hidden=cards.length<=state.shown;el("load-more").textContent="继续加载剩余 "+Math.max(0,cards.length-state.shown)+" 条 ↓";
el("empty-result").hidden=cards.length!==0;
}
function renderStats(){
el("stat-cards").textContent=all.length;el("stat-domains").textContent=topics.length;
el("stat-mastered").textContent=saved.mastered.length;el("stat-favs").textContent=saved.favorites.length;
el("progress-value").textContent=Math.round(saved.mastered.length/Math.max(1,all.length)*100)+"%";
el("progress-fill").style.width=(saved.mastered.length/Math.max(1,all.length)*100)+"%";
}
function renderTopbar(){
el("current-domain").textContent=state.topic==="all"?"全部领域":topics.find(t=>t.id===state.topic)?.name||"全部领域";
el("domain-summary").textContent=state.topic==="all"?"按领域分类、按案例检索，将每一个错误点练成熟练的判断。":topics.find(t=>t.id===state.topic)?.source+" · "+topics.find(t=>t.id===state.topic)?.reference;
}
const METHOD=[
{signal:"一个人决定 / 直接安排",bad:"关键工作未经充分参与、评审或授权审批",correct:"组织相关人员共同分析，明确责任人与审批权限；必要时提交变更控制机构。"},
{signal:"只有口头通知 / 电话沟通",bad:"正式决策、变更和验收缺乏书面证据及可追溯记录",correct:"形成正式纪要、通知单和确认记录，及时分发并跟进反馈。"},
{signal:"边做边改 / 未批准先施工",bad:"范围基线不清，变更未走受控流程",correct:"先申请、评估影响、按权限审批；批准后实施、验证、更新基准和配置。"},
{signal:"计划只写进度 / 全凭经验",bad:"管理计划不完整，缺少标准、指标和控制机制",correct:"编制项目管理计划及所需子计划，设置量化标准和检查办法。"},
{signal:"直到交付才发现问题",bad:"质量控制或绩效监控滞后，未开展阶段性评审",correct:"建立阶段检查、监测预警、缺陷记录、整改验证与升级机制。"},
{signal:"只选最低报价 / 领导推荐",bad:"采购或可行性决策缺少多维论证",correct:"评估资质、技术、质量、成本、交付和风险，保留比选记录。"},
{signal:"不同版本 / 文档与代码不一致",bad:"配置项标识、基线、版本审计及发布管理存在缺失",correct:"建立受控配置库和权限管理，执行变更控制与配置审计。"},
{signal:"未识别关键人员 / 外包 / 突发事件",bad:"风险识别范围不全，缺少责任人和预案",correct:"更新风险登记册，评估概率和影响，制定应对策略并持续监控。"}
];
function renderMethod(){
el("method-grid").innerHTML=METHOD.map((m,i)=>'<article class="method-card"><span class="step-id">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(m.signal)+'</h3><p><b>可能存在：</b>'+esc(m.bad)+'</p><p><b>改正方向：</b>'+esc(m.correct)+'</p></article>').join("");
}
function renderFavorites(){
const ids=saved.favorites.map(id=>byId.get(id)).filter(Boolean);
const root=el("favorite-list");
if(!ids.length){root.innerHTML='<div class="empty-box">还没有收藏内容。回到找错题库，点击每张卡片的「收藏」即可在这里集中复习。</div>';return}
root.innerHTML=ids.map(c=>'<div class="favorite-row"><div><span>'+esc(c.groupName)+' / '+esc(c.caseName)+'</span><strong>'+esc(c.title)+'</strong><p>'+esc(short(c.fix,110))+'</p></div><button data-remove="'+esc(c.id)+'">取消收藏</button></div>').join("");
root.querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{toggle("favorites",b.dataset.remove);renderFavorites()}));
}
function chooseQuiz(){
let pool=all.filter(c=>c.clue&&c.clue.length>=12&&c.fix&&c.fix.length>=12);
if(state.topic!=="all")pool=pool.filter(c=>c.groupId===state.topic);
pool=pool.slice().sort(()=>Math.random()-.5);
state.quizIds=pool.slice(0,15).map(c=>c.id);state.quizIndex=0;state.quizReveal=false;renderQuiz();
}
function renderQuiz(){
if(!state.quizIds.length){chooseQuiz();return}
const c=byId.get(state.quizIds[state.quizIndex]);if(!c){chooseQuiz();return}
el("quiz-progress").textContent="题目 "+(state.quizIndex+1)+" / "+state.quizIds.length;
el("quiz-domain").textContent=c.groupName+" · "+c.caseName+" · PDF第 "+c.page+" 页";
el("quiz-clue").textContent=clean(c.clue)||"从给定案例背景中辨识管理缺陷。";
el("quiz-answer").hidden=!state.quizReveal;
el("quiz-answer").innerHTML='<span class="detail-eyebrow">可参考的错误描述</span><h3>'+esc(c.title)+'</h3><span class="detail-eyebrow">规范的改错方向</span><p>'+esc(short(c.fix,280))+'</p>';
el("quiz-reveal").textContent=state.quizReveal?"收起答案":"揭晓找错与改错思路";
el("quiz-next").disabled=state.quizIndex>=state.quizIds.length-1;
el("quiz-prev").disabled=state.quizIndex<=0;
}
function bind(){
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
el("search-field").addEventListener("input",e=>{state.query=e.target.value;state.shown=80;renderCards()});
el("filter-select").addEventListener("change",e=>{state.filter=e.target.value;state.shown=80;renderCards()});
el("case-filter").addEventListener("change",e=>{state.caseName=e.target.value;state.shown=80;renderCards()});
el("load-more").addEventListener("click",()=>{state.shown+=80;renderCards()});
el("clear-filters").addEventListener("click",()=>{state.query="";state.filter="all";state.caseName="all";state.shown=80;el("search-field").value="";el("filter-select").value="all";renderCases();renderCards()});
el("quiz-new").addEventListener("click",chooseQuiz);
el("quiz-reveal").addEventListener("click",()=>{state.quizReveal=!state.quizReveal;renderQuiz()});
el("quiz-next").addEventListener("click",()=>{state.quizIndex=Math.min(state.quizIds.length-1,state.quizIndex+1);state.quizReveal=false;renderQuiz()});
el("quiz-prev").addEventListener("click",()=>{state.quizIndex=Math.max(0,state.quizIndex-1);state.quizReveal=false;renderQuiz()});
el("copy-template").addEventListener("click",async()=>{const str="存在问题：题干中【引用关键事实】，说明项目在【相应管理过程】方面存在【具体错误】。\\n正确做法：应由【责任人】按照【计划/标准/流程】，先【识别与评估】，再【审批与执行】，最后【记录、监督、验证并更新相关文件】。";try{await navigator.clipboard.writeText(str);el("copy-template").textContent="✓ 已复制";setTimeout(()=>el("copy-template").textContent="复制答题框架",1800)}catch(_){el("copy-template").textContent="复制未成功，请手动选择文本"}});
el("hero-start").addEventListener("click",()=>{setView("library");el("search-field").focus()});
el("hero-practice").addEventListener("click",()=>setView("practice"));
}
renderGroups();renderStats();renderTopbar();renderCases();renderCards();renderMethod();bind();
window.addEventListener('message',e=>{
 if(e.origin!==location.origin||e.source!==window.parent||e.data?.type!=='gao-xiang-embed-command'||e.data.target!=='casebook')return;
 if(e.data.action==='topic'&&(e.data.topic==='all'||topics.some(t=>t.id===e.data.topic)))setTopic(e.data.topic);
 if(e.data.action==='view'&&['library','method','practice','favorites'].includes(e.data.view)){
   if(e.data.view==='library'&&e.data.topic==='all'&&state.topic!=='all')setTopic('all');
   setView(e.data.view);
 }
});
})();
