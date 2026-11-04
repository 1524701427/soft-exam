/* 高项研习社 第21章独立计算练习：数学算法均在前端本地运行，不需要外部网络 */
(function(){'use strict';
const sum = a => a.reduce((v,x)=>v+x,0);
const round = (x,n=2)=>Number.isFinite(x)?Number(x.toFixed(n)):null;
function timeValue(P,rate,years,flows){
  const p=Number(P), r=Number(rate)/100,n=Number(years);
  if(!Number.isFinite(p)||!Number.isFinite(r)||!Number.isFinite(n)||r<=-1||n<0||n>100) return null;
  const amounts=String(flows||'').split(/[，,、\s]+/).map(Number).filter(Number.isFinite);
  const discounted=amounts.map((v,i)=>v/Math.pow(1+r,i+1));
  let cumulative=-p,prior=-p,staticPayback=null;
  for(let i=0;i<amounts.length;i++){prior=cumulative;cumulative+=amounts[i];if(staticPayback===null&&cumulative>=0&&amounts[i]>0)staticPayback=i+(-prior)/amounts[i];}
  return {single:round(p*(1+n*r)),compound:round(p*Math.pow(1+r,n)),present:round(p/Math.pow(1+r,n)),npv:round(-p+sum(discounted)),discounted:discounted.map(x=>round(x)),cashflows:amounts,payback:staticPayback===null?null:round(staticPayback)};
}
function linear(c1,c2){
  const a=Number(c1),b=Number(c2),vertices=[[0,0],[4,0],[2,2],[0,3]];
  const values=vertices.map(([x,y])=>({x,y,z:round(a*x+b*y)}));
  const high=Math.max(...values.map(p=>p.z));return {vertices:values,max:high,optimal:values.filter(p=>Math.abs(p.z-high)<1e-9)};
}
function vogel(costs,supply,demand){
 const matrix=costs.map(x=>x.slice());const supply0=supply.slice(),demand0=demand.slice(),a=supply.slice(),b=demand.slice(),m=a.length,n=b.length;
 if(matrix.length!==m||matrix.some(x=>x.length!==n||x.some(v=>!Number.isFinite(v)||v<0))||sum(a)!==sum(b)||a.some(v=>v<0)||b.some(v=>v<0))return {error:'供需不平衡或费用矩阵无效，请调整输入。'};
 const allocation=Array.from({length:m},()=>Array(n).fill(0)),steps=[];
 let iterations=0;
 while(a.some(v=>v>0)&&iterations++<m*n+5){
  const candidates=[];
  for(let i=0;i<m;i++)if(a[i]>0){let cols=b.map((v,j)=>v>0?j:-1).filter(j=>j>=0);let sorted=cols.slice().sort((j,k)=>matrix[i][j]-matrix[i][k]);if(sorted.length)candidates.push({type:'row',k:i,penalty:sorted.length>1?matrix[i][sorted[1]]-matrix[i][sorted[0]]:matrix[i][sorted[0]],cell:{i,j:sorted[0]},cost:matrix[i][sorted[0]]});}
  for(let j=0;j<n;j++)if(b[j]>0){let rows=a.map((v,i)=>v>0?i:-1).filter(i=>i>=0);let sorted=rows.slice().sort((i,k)=>matrix[i][j]-matrix[k][j]);if(sorted.length)candidates.push({type:'col',k:j,penalty:sorted.length>1?matrix[sorted[1]][j]-matrix[sorted[0]][j]:matrix[sorted[0]][j],cell:{i:sorted[0],j},cost:matrix[sorted[0]][j]});}
  if(!candidates.length)break;
  candidates.sort((u,v)=>v.penalty-u.penalty||u.cost-v.cost||Math.min(a[v.cell.i],b[v.cell.j])-Math.min(a[u.cell.i],b[u.cell.j]));
  const best=candidates[0],{i,j}=best.cell,count=Math.min(a[i],b[j]);if(count<=0)break;
  allocation[i][j]+=count;a[i]-=count;b[j]-=count;
  steps.push({round:steps.length+1,penalty:best.penalty,axis:(best.type==='row'?'仓库':'需求列')+(best.k+1),row:i,col:j,quantity:count,cost:matrix[i][j],total:count*matrix[i][j],allocation:allocation.map(x=>x.slice()),remainingSupply:a.slice(),remainingDemand:b.slice()});
 }
 const total=sum(allocation.flatMap((row,i)=>row.map((v,j)=>v*matrix[i][j])));
 return {allocation,supply:supply0,demand:demand0,total,steps,balance:sum(a)+sum(b),matrix};
}
function assignment(matrix){
 const n=matrix.length;
 if(n<1||n>7||matrix.some(row=>row.length!==n||row.some(v=>!Number.isFinite(v))))return {error:'只支持1—7阶方阵'};
 const rowMin=matrix.map(row=>Math.min(...row));const rowReduced=matrix.map((row,i)=>row.map(v=>v-rowMin[i]));
 const colMin=matrix[0].map((_,j)=>Math.min(...rowReduced.map(row=>row[j])));
 const reduced=rowReduced.map(row=>row.map((v,j)=>v-colMin[j]));
 let min=Infinity,solution=[];
 const used=new Set(),chosen=[];
 function search(i,total){if(i===n){if(total<min){min=total;solution=chosen.slice();}return;}for(let j=0;j<n;j++)if(!used.has(j)){used.add(j);chosen.push(j);search(i+1,total+matrix[i][j]);chosen.pop();used.delete(j);}}
 search(0,0);
 return {original:matrix,rowMin,colMin,rowReduced,reduced,solution,total:min,terms:solution.map((j,i)=>({row:i,col:j,cost:matrix[i][j]})),method:'通过全排列穷举验证最优分配（7阶以内）'};
}
const routeNodes=[{id:'V1',x:46,y:148},{id:'V2',x:170,y:50},{id:'V3',x:170,y:156},{id:'V4',x:170,y:257},{id:'V5',x:320,y:50},{id:'V6',x:320,y:156},{id:'V7',x:320,y:257},{id:'V8',x:459,y:156}];
// 以用户上传第21章最短路径图 V1→V8 示例重绘的有向网络。V1→V2→V5→V6→V8=12。
const routeEdges=[['V1','V2',2],['V1','V3',8],['V1','V4',1],['V2','V5',1],['V2','V3',6],['V5','V3',5],['V5','V6',3],['V3','V6',1],['V4','V7',9],['V7','V8',3],['V6','V8',6],['V3','V7',8]];
function shortestPath(edges=routeEdges,from='V1',to='V8'){
 const nodes=[...new Set(edges.flatMap(x=>x.slice(0,2)))],dist=Object.fromEntries(nodes.map(n=>[n,Infinity])),prev={},unvisited=new Set(nodes);
 dist[from]=0;
 while(unvisited.size){let u=[...unvisited].reduce((a,b)=>dist[a]<=dist[b]?a:b);if(dist[u]===Infinity)break;unvisited.delete(u);if(u===to)break;
  for(const [v,w,c] of edges)if(v===u&&unvisited.has(w)&&dist[u]+c<dist[w]){dist[w]=dist[u]+c;prev[w]=u;}}
 const path=[];if(Number.isFinite(dist[to])){let p=to;while(p){path.unshift(p);p=prev[p];}}const marked=path.slice(1).map((p,i)=>path[i]+'-'+p);
 return {from,to,distance:Number.isFinite(dist[to])?dist[to]:null,path,marked,dist,edges,nodes:routeNodes};
}
function game(matrix){const rows=matrix.map(r=>Math.min(...r)),cols=matrix[0].map((_,j)=>Math.max(...matrix.map(r=>r[j]))),maximin=Math.max(...rows),minimax=Math.min(...cols);
 let saddle=[];if(maximin===minimax){for(let i=0;i<matrix.length;i++)for(let j=0;j<matrix[i].length;j++)if(matrix[i][j]===maximin&&rows[i]===maximin&&cols[j]===minimax)saddle.push({row:i,col:j});}
 return {matrix,rowMin:rows,colMax:cols,maximin,minimax,saddle,hasSaddle:!!saddle.length};}
function decision(matrix){const optimistic=matrix.map(r=>Math.max(...r)),pessimistic=matrix.map(r=>Math.min(...r)),mean=matrix.map(r=>sum(r)/r.length);
 const colBest=matrix[0].map((_,j)=>Math.max(...matrix.map(r=>r[j]))),regrets=matrix.map(row=>row.map((v,j)=>colBest[j]-v)),maxRegret=regrets.map(row=>Math.max(...row));
 const pickMax=arr=>arr.map((v,i)=>({i,v})).filter(x=>x.v===Math.max(...arr)).map(x=>x.i+1);
 const pickMin=arr=>arr.map((v,i)=>({i,v})).filter(x=>x.v===Math.min(...arr)).map(x=>x.i+1);
 return {optimistic,pessimistic,mean:mean.map(x=>round(x)),regrets,maxRegret,optimism:pickMax(optimistic),pessimism:pickMax(pessimistic),equallyLikely:pickMax(mean),minimaxRegret:pickMin(maxRegret)};
}
window.ExamMathLab={timeValue,linear,vogel,assignment,shortestPath,game,decision,routeEdges,routeNodes};
})();
