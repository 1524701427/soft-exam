(function(){'use strict';
const D=window.EXAM_CALC_DATA,C=window.CalcCore;
const KEY='gao-xiang-calculations-v1';
function readAttempts(){try{const s=JSON.parse(localStorage.getItem(KEY)||'{}');return s&&typeof s==='object'&&!Array.isArray(s)?s:{}}catch(e){return {}}}
const initialNetwork=()=>[
 {id:'A',deps:'',duration:2,resources:2,delay:0},
 {id:'B',deps:'A',duration:4,resources:3,delay:0},
 {id:'C',deps:'A',duration:5,resources:4,delay:0},
 {id:'D',deps:'A',duration:3,resources:2,delay:0},
 {id:'E',deps:'B',duration:4,resources:3,delay:0},
 {id:'F',deps:'C,D',duration:4,resources:4,delay:0},
 {id:'G',deps:'E,F',duration:3,resources:3,delay:0},
 {id:'H',deps:'G',duration:3,resources:2,delay:0}
];
const tools=[
 {key:'network',symbol:'◈',label:'关键路径 / 资源',desc:'编辑活动及紧前关系，实时求关键路径、六标时与每期人数。'},
 {key:'pert',symbol:'μ',label:'三点估算 PERT',desc:'输入乐观、最可能和悲观工期，查看期望值、方差与完工概率近似。'},
 {key:'evm',symbol:'∑',label:'挣值分析 EVM',desc:'PV、EV、AC、BAC 四个参数一次算全，并区分典型/非典型偏差。'},
 {key:'contract',symbol:'¥',label:'CPIF 合同付款',desc:'目标成本、费用、分摊比例 → 买方付款与卖方利润。'},
 {key:'channel',symbol:'↗',label:'沟通渠道',desc:'按项目中独立参与者的人数，计算潜在双向沟通渠道。'},
 {key:'emv',symbol:'◇',label:'风险 / 决策 EMV',desc:'用不同情景的收益、损失及概率计算期望货币价值。'},
 {key:'break',symbol:'◎',label:'盈亏平衡',desc:'根据固定成本和单位边际贡献计算盈亏平衡销量。'},
 {key:'makebuy',symbol:'⇄',label:'自制与外购',desc:'两套固定与变动成本方案实时对比。'}
];
Vue.createApp({
 data(){return{
  groups:D.groups,lessons:D.lessons,problems:D.problems,tools,
  tabs:[{key:'home',label:'专题课程'},{key:'formulas',label:'公式速查'},{key:'tools',label:'计算练习台'},{key:'training',label:'专项训练'}],
  tab:'home',lessonId:'01',lessonFilter:'all',practiceLesson:'all',formulaQuery:'',formulaGroup:'all',
  attempts:readAttempts(),inputs:{},revealed:{},tool:'network',
  networkRows:initialNetwork(),pertFields:{o:1,m:4,p:7,deadline:5},evmFields:{pv:65,ev:53,ac:52,bac:100},evmMode:'typical',
  contractFields:{target:100,fee:10,actual:90,percent:70},channelPeople:8,emvFields:{p:25,gain:-9000,loss:0},breakFields:{fixed:200,price:25,variable:15},buyFields:{qty:200,makeFixed:600,makeVariable:12,buyFixed:0,buyVariable:17},
  lessonFilters:[{key:'all',label:'全部'},{key:'schedule',label:'进度'},{key:'cost',label:'成本'},{key:'combined',label:'综合'},{key:'essentials',label:'小计算'}]
 }},
 computed:{
  currentLesson(){return this.lessons.find(l=>l.id===this.lessonId)||this.lessons[0]},
  lessonProblems(){return this.problems.filter(q=>q.lesson===this.lessonId)},
  filteredLessons(){return this.lessons.filter(l=>this.lessonFilter==='all'||l.group===this.lessonFilter)},
  answeredCount(){return Object.keys(this.attempts).filter(id=>this.problems.some(q=>q.id===id)).length},
  correctCount(){return Object.entries(this.attempts).filter(([id,v])=>v?.correct&&this.problems.some(q=>q.id===id)).length},
  completedLessons(){return this.lessons.filter(l=>this.problems.some(q=>q.lesson===l.id&&this.attempts[q.id])).length},
  prevLesson(){const n=this.lessons.findIndex(l=>l.id===this.lessonId);return n>0?this.lessons[n-1].id:null},
  nextLesson(){const n=this.lessons.findIndex(l=>l.id===this.lessonId);return n>=0&&n<this.lessons.length-1?this.lessons[n+1].id:null},
  allFormulas(){return this.lessons.flatMap(l=>l.formulas.map(f=>({lesson:l.id,group:l.group,title:f[0],formula:f[1],source:f[2]})))},
  filteredFormulas(){const q=this.formulaQuery.trim().toLowerCase();return this.allFormulas.filter(f=>(this.formulaGroup==='all'||this.formulaGroup===f.group)&&(!q||[f.title,f.formula,f.source,f.lesson].join(' ').toLowerCase().includes(q)))},
  trainingProblems(){return this.problems.filter(q=>this.practiceLesson==='all'||q.lesson===this.practiceLesson)},
  toolInfo(){return this.tools.find(t=>t.key===this.tool)||this.tools[0]},
  relevantToolLessons(){return this.lessons.filter(l=>l.tool===this.tool).slice(0,4)},
  networkResult(){return C.network(this.networkRows)},
  networkTicks(){const d=this.networkResult.duration||0;if(d<=0)return[0];const step=Math.max(1,Math.ceil(d/14));let ticks=[];for(let i=0;i<=d;i+=step)ticks.push(i);if(ticks.at(-1)!==d)ticks.push(d);return ticks},
  pertResult(){return C.pert(this.pertFields.o,this.pertFields.m,this.pertFields.p,this.pertFields.deadline)},
  bellPath(){let a=[];for(let k=0;k<=100;k++){const x=k/100*700,z=(k/100)*8-4,y=164-136*Math.exp(-z*z/2);a.push((k?'L':'M')+x.toFixed(2)+' '+y.toFixed(2))}return a.join(' ')},
  bellArea(){return this.bellPath+' L 700 164 L 0 164 Z'},
  deadlineX(){if(this.pertResult.error||!Number.isFinite(this.pertResult.z))return 350;return Math.min(694,Math.max(6,350+this.pertResult.z/4*350))},
  evmResult(){return C.evm(this.evmFields.pv,this.evmFields.ev,this.evmFields.ac,this.evmFields.bac,this.evmMode)},
  contractResult(){return C.cpif(this.contractFields.target,this.contractFields.fee,this.contractFields.actual,this.contractFields.percent)},
  channelCount(){return C.channel(this.channelPeople)},
  emvResult(){return C.emv(this.emvFields.p,this.emvFields.gain,this.emvFields.loss)},
  breakResult(){return C.breakeven(this.breakFields.fixed,this.breakFields.price,this.breakFields.variable)},
  buyResult(){return C.makeBuy(this.buyFields.qty,this.buyFields.makeFixed,this.buyFields.makeVariable,this.buyFields.buyFixed,this.buyFields.buyVariable)}
 },
 methods:{
  setTab(key){this.tab=key;if(document.documentElement.classList.contains('is-embedded'))window.parent.postMessage({type:'gao-xiang-embed-top'},location.origin);if(key!=='lesson'&&location.search.includes('lesson='))history.replaceState(null,'',location.pathname+(document.documentElement.classList.contains('is-embedded')?'?embed=1':''));try{window.scrollTo({top:0,behavior:'smooth'})}catch(e){}},
  openLesson(id){if(!this.lessons.some(l=>l.id===id))return;this.lessonId=id;this.setTab('lesson');history.replaceState(null,'',location.pathname+(document.documentElement.classList.contains('is-embedded')?'?embed=1&lesson=':'?lesson=')+id)},
  groupIcon(id){return({schedule:'⌁',cost:'¥',combined:'▥',essentials:'∑'})[id]||'◇'},
  lessonProblemCount(id){return this.problems.filter(q=>q.lesson===id).length},
  isLessonPracticed(id){return this.problems.some(q=>q.lesson===id&&this.attempts[q.id])},
  grade(q){let raw=String(this.inputs[q.id]??'').trim();const match=raw.replace(/,/g,'').match(/[-+]?\d+(?:\.\d+)?/);if(!match){alert('请先填写计算结果，例如 17 或 -1500');return}let value=Number(match[0]),correct=Math.abs(value-Number(q.answer))<=Number(q.tolerance||0)+1e-7;this.attempts[q.id]={value:raw,correct,at:Date.now()};this.revealed[q.id]=true;try{localStorage.setItem(KEY,JSON.stringify(this.attempts))}catch(e){}},
  format(n){if(n===null||n===undefined||Number.isNaN(Number(n)))return'—';if(n===Infinity)return'∞';if(n===-Infinity)return'−∞';return String(C.round(Number(n),2))},
  addNetwork(){const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';const id=[...letters].find(l=>!this.networkRows.some(r=>r.id===l));if(id)this.networkRows.push({id,deps:'',duration:2,resources:1,delay:0});else alert('最多添加至 Z 号活动')},
  removeNetwork(id){this.networkRows=this.networkRows.filter(r=>r.id!==id);for(const a of this.networkRows){a.deps=a.deps.split(/[,，、]/).map(x=>x.trim()).filter(x=>x!==id).join(',')}},
  resourceWidth(v){const r=this.networkResult,m=Math.max(1,r.originalPeak,r.adjustedPeak);return 100*Number(v)/m},
  resetTool(){switch(this.tool){case'network':this.networkRows=initialNetwork();break;case'pert':this.pertFields={o:1,m:4,p:7,deadline:5};break;case'evm':this.evmFields={pv:65,ev:53,ac:52,bac:100};this.evmMode='typical';break;case'contract':this.contractFields={target:100,fee:10,actual:90,percent:70};break;case'channel':this.channelPeople=8;break;case'emv':this.emvFields={p:25,gain:-9000,loss:0};break;case'break':this.breakFields={fixed:200,price:25,variable:15};break;case'makebuy':this.buyFields={qty:200,makeFixed:600,makeVariable:12,buyFixed:0,buyVariable:17};break;}}
 },
 mounted(){const u=new URLSearchParams(location.search).get('lesson');if(u&&this.lessons.some(l=>l.id===u)){this.lessonId=u;this.tab='lesson'} }
}).mount('#calc-app');
})();
