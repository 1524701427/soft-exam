/* 计算专题独立算法内核，不访问主站学习数据。 */
(function(g){'use strict';
const finite=(v)=>Number.isFinite(Number(v))?Number(v):NaN;
const round=(n,d=2)=>Number.isFinite(n)?Math.round((n+Number.EPSILON)*10**d)/10**d:null;
const div=(a,b)=>b===0?null:a/b;
function network(inputs){
  const rows=inputs.map((r,i)=>({id:String(r.id||'').trim().toUpperCase(),duration:finite(r.duration),resources:finite(r.resources??0),delay:finite(r.delay??0),deps:String(r.deps||'').toUpperCase().split(/[,，、;；\s]+/).filter(Boolean),order:i}));
  if(!rows.length)return {error:'至少需要一项活动'};
  const by={};
  for(const r of rows){
    if(!/^[A-Z][A-Z0-9]*$/.test(r.id))return {error:'活动编号只能使用英文字母开头的字母数字组合'};
    if(by[r.id])return {error:'活动编号重复：'+r.id};
    if(!Number.isFinite(r.duration)||r.duration<0||!Number.isFinite(r.resources)||r.resources<0||!Number.isFinite(r.delay)||r.delay<0)return {error:r.id+' 的工期、资源或延后天数必须是非负数字'};
    by[r.id]=r;r.next=[];r.es=0;r.ef=0;r.ls=0;r.lf=0;r.tf=0;r.ff=0;
  }
  for(const r of rows){for(const d of r.deps){if(!by[d])return {error:r.id+' 的紧前活动 '+d+' 不存在'};if(d===r.id)return {error:'不能自己依赖自己：'+r.id};by[d].next.push(r.id)}}
  const inc=Object.fromEntries(rows.map(r=>[r.id,r.deps.length]));
  let queue=rows.filter(r=>inc[r.id]===0).map(r=>r.id),seq=[];
  while(queue.length){const id=queue.shift(),r=by[id];seq.push(r);r.ef=r.es+r.duration;for(const n of r.next){by[n].es=Math.max(by[n].es,r.ef);if(--inc[n]===0)queue.push(n)}}
  if(seq.length!==rows.length)return {error:'活动依赖关系中存在环，无法计算关键路径'};
  const duration=Math.max(...rows.map(r=>r.ef),0);
  for(const r of [...seq].reverse()){
    r.lf=r.next.length?Math.min(...r.next.map(n=>by[n].ls)):duration;
    r.ls=r.lf-r.duration;
    r.tf=round(r.ls-r.es,6);
    r.ff=round((r.next.length?Math.min(...r.next.map(n=>by[n].es)):duration)-r.ef,6);
    r.isCritical=Math.abs(r.tf)<1e-7;
    r.actualStart=r.es+r.delay;
    r.actualEnd=r.actualStart+r.duration;
  }
  let paths=[];
  function walk(r,p){if(paths.length>=40)return;const next=r.next.map(id=>by[id]).filter(n=>n.isCritical&&Math.abs(n.es-r.ef)<1e-7);if(!next.length){if(Math.abs(r.ef-duration)<1e-7)paths.push([...p,r.id].join(' → '));return}for(const n of next)walk(n,[...p,r.id])}
  for(const r of seq.filter(x=>!x.deps.length&&x.isCritical&&x.es===0))walk(r,[]);
  const invalid=rows.filter(r=>r.next.some(n=>by[n].actualStart+1e-8<r.actualEnd)).map(r=>r.id);
  const samples=Math.ceil(duration)+1;
  let before=[],after=[];
  if(samples<=300){for(let t=0;t<duration;t++){
    const b=rows.filter(r=>r.es<=t&&r.ef>t).reduce((s,r)=>s+r.resources,0);
    const a=rows.filter(r=>r.actualStart<=t&&r.actualEnd>t).reduce((s,r)=>s+r.resources,0);
    before.push(b);after.push(a);
  }}
  return {error:null,duration,rows:seq,criticalPaths:paths,before,after,originalPeak:before.length?Math.max(...before):0,adjustedPeak:after.length?Math.max(...after):0,invalid,round};
}
function pert(o,m,p,deadline){o=finite(o);m=finite(m);p=finite(p);deadline=finite(deadline);if(![o,m,p,deadline].every(Number.isFinite)||o>m||m>p||o<0)return {error:'须满足 0 ≤ 乐观时间 ≤ 最可能时间 ≤ 悲观时间，且填写目标工期'};const mean=(o+4*m+p)/6,sigma=(p-o)/6,z=sigma===0?(deadline>=mean?Infinity:-Infinity):(deadline-mean)/sigma;return {mean,sigma,variance:sigma*sigma,deadline,z,probability:sigma===0?(deadline>=mean?1:0):normalCDF(z)}}
function normalCDF(z){if(z===Infinity)return 1;if(z===-Infinity)return 0;const x=Math.abs(z),t=1/(1+0.2316419*x),poly=((((1.330274429*t-1.821255978)*t+1.781477937)*t-0.356563782)*t+0.319381530)*t;const value=1-Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)*poly;return z>=0?value:1-value}
function evm(pv,ev,ac,bac,mode){pv=finite(pv);ev=finite(ev);ac=finite(ac);bac=finite(bac);if(![pv,ev,ac,bac].every(Number.isFinite)||[pv,ev,ac,bac].some(x=>x<0))return {error:'参数必须为非负数'};const cpi=div(ev,ac),spi=div(ev,pv),cv=ev-ac,sv=ev-pv,remaining=bac-ev;const etc=mode==='typical'?(cpi===null||cpi===0?null:remaining/cpi):remaining;const eac=etc===null?null:ac+etc;const vac=eac===null?null:bac-eac;return{pv,ev,ac,bac,cv,sv,cpi,spi,etc,eac,vac,tcpi:div(remaining,bac-ac),cost:cv>=0?'节约或持平':'超支',schedule:sv>=0?'提前或持平':'落后'}}
function cpif(target,fee,actual,buyerPercent){const t=finite(target),f=finite(fee),a=finite(actual),p=finite(buyerPercent)/100;if(![t,f,a,p].every(Number.isFinite)||t<0||f<0||a<0||p<0||p>1)return {error:'请填写非负金额，买方分摊比例为 0–100%'};const payment=t+f+(a-t)*p;return{payment,profit:payment-a,buyerShare:p,delta:a-t}}
function channel(n){const k=finite(n);return Number.isInteger(k)&&k>=0?k*(k-1)/2:null}
function breakeven(fixed,price,variable){const [f,p,v]=[fixed,price,variable].map(finite);if(![f,p,v].every(Number.isFinite)||f<0||p<0||v<0||p<=v)return {error:'售价必须大于单位变动成本，且各值不为负'};return{quantity:f/(p-v),integerQuantity:Math.ceil(f/(p-v)),margin:p-v}}
function makeBuy(q,makeFixed,makeVar,buyFixed,buyVar){const v=[q,makeFixed,makeVar,buyFixed,buyVar].map(finite);if(v.some(x=>!Number.isFinite(x)||x<0))return{error:'请填写非负数'};const [n,mf,mv,bf,bv]=v;const make=mf+mv*n,buy=bf+bv*n;return{make,buy,choice:make===buy?'成本相同':make<buy?'自制':'外购',boundary:mv===bv?null:(bf-mf)/(mv-bv)}}
function emv(p,gain,loss){let k=finite(p)/100,a=finite(gain),b=finite(loss);if(![k,a,b].every(Number.isFinite)||k<0||k>1)return{error:'概率须在 0–100% 之间'};return{value:k*a+(1-k)*b}}
g.CalcCore={round,network,pert,normalCDF,evm,cpif,channel,breakeven,makeBuy,emv};
})(window);
