(()=>{
'use strict';
if(!document.documentElement.classList.contains('is-embedded')||window.parent===window)return;
let lastHeight=0,scheduled=false;
const targetOrigin=location.origin;
const measure=()=>{
  scheduled=false;
  const main=document.querySelector('main');
  const h=Math.ceil(Math.max(
    document.body?.scrollHeight||0,
    document.documentElement?.scrollHeight||0,
    main?main.getBoundingClientRect().bottom+window.scrollY+32:0
  ));
  if(h>=180&&Math.abs(h-lastHeight)>2){
    lastHeight=h;
    window.parent.postMessage({type:'gao-xiang-embed-resize',height:h},targetOrigin);
  }
};
const requestMeasure=()=>{
  if(scheduled)return;scheduled=true;
  requestAnimationFrame(measure);
};
window.addEventListener('load',requestMeasure);
window.addEventListener('resize',requestMeasure);
window.addEventListener('pageshow',requestMeasure);
if(typeof ResizeObserver!=='undefined'){
  const ro=new ResizeObserver(requestMeasure);
  ro.observe(document.body);
  const main=document.querySelector('main');if(main)ro.observe(main);
}
if(typeof MutationObserver!=='undefined'){
  const mo=new MutationObserver(requestMeasure);
  mo.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['hidden','style','class']});
}
requestMeasure();
})();
