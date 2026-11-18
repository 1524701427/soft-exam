/* 高项研习社 · v6 图解覆盖
 * 只从当前知识点已有笔记构建结构导图；不引用邻近小节、不编造讲义事实。
 * 既有 426 张专题图始终优先，本文件仅供无对应图时的阅读页使用。
 */
(function(){
  'use strict';
  const cache=new Map();
  const clean=value=>String(value===null||value===undefined?'':value).replace(/\s+/g,' ').trim();
  const short=(value,max=125)=>{
    const s=clean(value);
    return s.length>max?s.slice(0,max-1)+'…':s;
  };
  const labelFrom=item=>{
    if(Array.isArray(item))return clean(item[0]);
    if(item&&typeof item==='object')return clean(item.label||item.name||item.title);
    return clean(item);
  };
  const detailFrom=item=>{
    if(Array.isArray(item))return clean(item[1]);
    if(item&&typeof item==='object')return clean(item.detail||item.description||item.text);
    return '';
  };
  const blockSummary=b=>{
    if(b.text)return short(b.text,180);
    const items=Array.isArray(b.items)?b.items:[];
    if(!items.length)return '';
    if(b.type==='chips'){
      const names=items.map(labelFrom).filter(Boolean);
      return names.join('、');
    }
    if(b.type==='steps'){
      const names=items.map(labelFrom).filter(Boolean);
      const details=items.map(detailFrom).filter(Boolean);
      return short(names.join(' → ')+(details.length?'；'+details.slice(0,2).join('；'):''),180);
    }
    return short(items.slice(0,3).map(x=>[labelFrom(x),detailFrom(x)].filter(Boolean).join('：')).join('；'),180);
  };
  const examples={
    '1.1.1':{
      kind:'mindmap',title:'信息：一张图分清四类考点',
      subtitle:'信息本质、熵与信息、11 项主要特征、7 项质量属性不可混为一谈',
      center:'信息',
      items:[
        {label:'信息的本质',detail:'信息以物质为载体传递、反映事物状态；信息不是物质，也不是能量。'},
        {label:'熵与信息',detail:'讲义表述：熵是系统无序程度的度量；信息是系统有序程度的度量。'},
        {label:'11 项主要特征',detail:'客观性、普遍性、无限性、动态性、相对性、依附性、变换性、传递性、层次性、系统性、转化性。'},
        {label:'7 项质量属性',detail:'精确性、完整性、可靠性、及时性、经济性、可验证性、安全性。'}
      ],
      insight:'考试易混点：信息的“主要特征”和信息的“质量属性”是两组不同的清单。'
    }
  };
  function buildLessonVisual(topicId,title,note){
    if(!topicId||!note||!Array.isArray(note.blocks)||!note.blocks.length)return null;
    if(cache.has(topicId)&&cache.get(topicId).note===note)return cache.get(topicId).diagram;
    let diagram;
    if(examples[topicId]){
      const v=examples[topicId];
      diagram={...v,items:v.items.map(item=>({...item}))};
    }else{
      const blocks=note.blocks.filter(b=>b&&b.title&&(
        (Array.isArray(b.items)&&b.items.length)||clean(b.text)
      ));
      if(blocks.length>=2){
        // 不将分组关系误画为先后因果：mindmap 仅表示本节知识分类。
        const items=blocks.slice(0,6).map(b=>({
          label:clean(b.title),detail:blockSummary(b)
        })).filter(item=>item.label&&item.detail);
        if(items.length>=2){
          diagram={
            kind:'mindmap',title:clean(title)+' · 知识地图',
            subtitle:'根据本节原有笔记整理的知识结构；点击分支查看要点',
            center:clean(title)||'本节要点',items,
            insight:clean(note.tip)||'图示为知识分类，不代表先后顺序；完整原文见下方考点笔记。'
          };
        }
      }
      if(!diagram){
        const b=blocks.find(x=>['steps','concept'].includes(x.type)&&x.items.length>=2);
        if(b){
          diagram={
            kind:b.type==='steps'?'path':'compare',
            title:clean(b.title),
            subtitle:'直接依据本节现有知识点生成，完整细节请结合下方笔记核对',
            center:clean(title),
            items:b.items.slice(0,7).map(x=>({label:labelFrom(x),detail:short(detailFrom(x),185)})).filter(x=>x.label),
            insight:clean(note.tip)||'本图依据本节知识点整理，未展示的内容以笔记原文为准。'
          };
          if(b.items.length>7)diagram.insight+='（图示仅展示前 7 项。）';
        }
      }
    }
    if(!diagram)return null;
    diagram={
      id:'lesson-study-map-'+topicId.replace(/[^\d.-]/g,'-'),
      topicId,chapterId:Number(topicId.split('.')[0]),
      icon:'✦',formatLabel:diagram.kind==='mindmap'?'知识导图':'要点图解',
      ...diagram,
      generatedFromNotes:!examples[topicId]
    };
    cache.set(topicId,{note,diagram});
    return diagram;
  }
  window.EXAM_BUILD_LESSON_VISUAL=buildLessonVisual;
})();
