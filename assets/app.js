(()=>{
  'use strict';
  const STORE = 'gao-xiang-study-v1';
  const BUILTINS = {1:{title:'信息化发展',sections:window.EXAM_SECTIONS,notes:window.EXAM_NOTES,questions:window.EXAM_CH1.questions,highlights:window.EXAM_CH1.highlights},2:window.EXAM_CH2,3:window.EXAM_CH3,4:window.EXAM_CH4,5:window.EXAM_CH5,6:window.EXAM_CH6,7:window.EXAM_CH7,8:window.EXAM_CH8,9:window.EXAM_CH9,10:window.EXAM_CH10,11:window.EXAM_CH11,12:window.EXAM_CH12};
  const EXAM_STORE='gao-xiang-exam-v1';
  const EMPTY = () => ({mastered:[],starred:[],bookmarked:[],wrongIds:[],answers:{},notes:{},exams:[],essayDraft:{title:'',body:''},caseDraft:{title:'',material:'',answer:''},importedChapters:{},dailyActivity:{},settings:{dark:false}});
  function readStore(){try{const s=JSON.parse(localStorage.getItem(STORE)||'{}');const def=EMPTY();for(const k in def){if(s[k]!==undefined && s[k]!==null && typeof s[k]===typeof def[k]) def[k]=s[k];}def.essayDraft=Object.assign({title:'',body:''},def.essayDraft);def.caseDraft=Object.assign({title:'',material:'',answer:''},def.caseDraft);def.settings=Object.assign({dark:false},def.settings);return def;}catch(e){return EMPTY();}}
  const ICONS={
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8M8 11h5"/>',
    map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6zM9 3v15M15 6v15"/>',
    clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5M9 10h6M9 14h6"/>',
    alert:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 17h.01"/>',
    star:'<path d="m12 2 3.2 6.6 7.3 1-5.3 5.2 1.3 7.2-6.5-3.4-6.5 3.4 1.3-7.2-5.3-5.2 7.3-1z"/>',
    'star-fill':'<path fill="currentColor" stroke="currentColor" d="m12 2 3.2 6.6 7.3 1-5.3 5.2 1.3 7.2-6.5-3.4-6.5 3.4 1.3-7.2-5.3-5.2 7.3-1z"/>',
    timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9 2h6M12 5V2M18.5 6.5l1.5-1.5"/>',
    file:'<path d="M5 2h9l5 5v15H5zM14 2v6h5M8 12h8M8 16h8"/>',
    pen:'<path d="m14 4 6 6-11 11H3v-6zM12 6l6 6"/>',
    chart:'<path d="M4 20h16M6 16V9M12 16V4M18 16v-6"/>',
    layers:'<path d="m12 2 10 6-10 6L2 8zM2 12l10 6 10-6M2 16l10 6 10-6"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M10 2h4l.6 2.3 1.6.9 2.3-.7 2 3.5-1.7 1.6v1.8l1.7 1.6-2 3.5-2.3-.7-1.6.9L14 20h-4l-.6-2.3-1.6-.9-2.3.7-2-3.5 1.7-1.6v-1.8L3.5 9l2-3.5 2.3.7 1.6-.9z"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 10h18"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
    moon:'<path d="M20.9 13A9 9 0 0 1 11 3.1a9 9 0 1 0 9.9 9.9z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    'arrow-right':'<path d="M4 12h16m-7-7 7 7-7 7"/>',
    'arrow-up-right':'<path d="M5 19 19 5M8 5h11v11"/>',
    'chevron-down':'<path d="m6 9 6 6 6-6"/>',
    'chevron-left':'<path d="m15 18-6-6 6-6"/>',
    'chevron-right':'<path d="m9 18 6-6-6-6"/>',
    upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 17v4h16v-4"/>',
    download:'<path d="M12 3v13m-5-5 5 5 5-5M4 17v4h16v-4"/>',
    external:'<path d="M14 4h6v6M20 4 10 14M20 14v6H4V4h6"/>',
    check:'<path d="m4 12 5 5L20 6"/>',
    'check-circle':'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    x:'<path d="M6 6 18 18M18 6 6 18"/>',
    refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9A7 7 0 0 1 18 6l2 1M4 17l2 1a7 7 0 0 0 12.4-3"/>',
    maximize:'<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>',
    info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>'
  };
  function saveJSON(filename,obj){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json;charset=utf-8'});downloadBlob(filename,blob);}
  function downloadBlob(filename,blob){const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  const app=Vue.createApp({
    data(){return {
      EXAM_CATALOG:window.EXAM_CATALOG, EXAM_CHAPTERS:window.EXAM_CHAPTERS, EXAM_SECTIONS:window.EXAM_SECTIONS,
      state:readStore(),EXAM_VISUALS:window.EXAM_VISUALS||[],visualFocusId:'',activeView:'home',sidebarOpen:false,selectedChapter:1,selectedTopic:'1.1.1',readingTab:'course',openSectionGroups:['1.1','1.2','1.3','1.4','1.5'],
      evmValues:{pv:80,ev:70,ac:90,bac:200},evmForecastMode:'typical',networkDurations:{A:3,B:4,C:5,D:2,E:4,F:3},practiceFilter:'all',practiceSectionFilter:'all',drillIndex:0,mapIndex:0,zoomMap:false, searchQuery:'',
      pastYear:'全部',examCount:20,examActive:(()=>{try{return JSON.parse(localStorage.getItem(EXAM_STORE)||'null')}catch(e){return null}})(),examIndex:0,remainingSeconds:0,now:Date.now(),lastExamReport:null,
      importMessage:'',importError:false,toast:'',mapNames:['全章思维导图','信息与信息系统','信息化与新基建','工业互联网与车联网','现代化创新发展','数字经济与元宇宙','数字政府与数字生态','数字化转型与智慧转移'],
      navMain:[{id:'home',label:'学习总览',icon:'home'},{id:'chapters',label:'章节管理',icon:'layers'},{id:'knowledge',label:'知识点学习',icon:'book'},{id:'maps',label:'知识图解',icon:'map'},{id:'practice',label:'章节练习',icon:'clipboard'},{id:'exam',label:'模拟考试',icon:'timer'}],
      navResources:[{id:'pastpapers',label:'历年真题',icon:'file'},{id:'wrong',label:'错题本',icon:'alert'},{id:'favorites',label:'我的收藏',icon:'star'},{id:'cases',label:'案例分析',icon:'file'},{id:'essays',label:'论文训练',icon:'pen'},{id:'progress',label:'学习统计',icon:'chart'}],
      quickActions:[{view:'knowledge',name:'知识点学习',desc:'前十二章知识点已录入',icon:'book',tone:'lilac'},{view:'practice',name:'章节练习',desc:'413 道配套题',icon:'clipboard',tone:'peach'},{view:'maps',name:'图解实验室',desc:'184 张可交互图解',icon:'map',tone:'mint'},{view:'wrong',name:'错题复习',desc:'精准查漏补缺',icon:'alert',tone:'blue'}]
    }},
    computed:{
      viewTitle(){return ({home:'学习总览',chapters:'章节管理',knowledge:'知识点学习',maps:'知识图解',practice:'章节练习',pastpapers:'历年真题',wrong:'错题本',favorites:'我的收藏',exam:'模拟考试',cases:'案例分析',essays:'论文训练',progress:'学习统计',settings:'数据与设置',search:'全站搜索'})[this.activeView]||'备考中心'},
      todayLabel(){return new Date().toLocaleDateString('zh-CN',{year:'numeric',month:'long',day:'numeric',weekday:'long'})},
      chapterTitle(){return this.EXAM_CHAPTERS.find(c=>c.id===this.selectedChapter)?.name||'未知章节'},
      evmResult(){
        const x=this.evmValues, pv=Number(x.pv)||0,ev=Number(x.ev)||0,ac=Number(x.ac)||0,bac=Number(x.bac)||0;
        const cpi=ac>0?ev/ac:null,spi=pv>0?ev/pv:null;
        const eac=this.evmForecastMode==='typical'?(cpi&&cpi>0?bac/cpi:null):(ac+bac-ev);
        const etc=eac===null?null:eac-ac;
        const tcpi=(bac-ac)>0?(bac-ev)/(bac-ac):null;
        return {pv,ev,ac,bac,cv:ev-ac,sv:ev-pv,cpi,spi,eac,etc,vac:eac===null?null:bac-eac,tcpi};
      },
      networkSchedule(){
        const defs=[{id:'A',pre:[],x:72,y:75},{id:'B',pre:[],x:72,y:208},{id:'C',pre:['A'],x:345,y:75},{id:'D',pre:['A','B'],x:345,y:208},{id:'E',pre:['C'],x:610,y:75},{id:'F',pre:['D','E'],x:820,y:150}];
        const byId={};
        for(const d of defs){let duration=Math.min(99,Math.max(1,Number(this.networkDurations[d.id])||1));let es=Math.max(0,...d.pre.map(p=>byId[p].ef));byId[d.id]={...d,duration,es,ef:es+duration};}
        const total=Math.max(...Object.values(byId).map(a=>a.ef));
        for(const d of defs.slice().reverse()){
          const successors=defs.filter(x=>x.pre.includes(d.id));
          const lf=successors.length?Math.min(...successors.map(x=>byId[x.id].ls)):total;
          Object.assign(byId[d.id],{lf,ls:lf-byId[d.id].duration,slack:lf-byId[d.id].ef});
        }
        const links=defs.flatMap(d=>d.pre.map(p=>{const a=byId[p],b=byId[d.id];return {id:p+'-'+d.id,d:'M '+(a.x+45)+' '+a.y+' C '+(a.x+120)+' '+a.y+', '+(b.x-110)+' '+b.y+', '+(b.x-45)+' '+b.y,critical:a.slack===0&&b.slack===0&&a.ef===b.es}}));
        return {nodes:defs.map(d=>byId[d.id]),links,total};
      },
      allChapterData(){return Object.keys(BUILTINS).concat(Object.keys(this.state.importedChapters)).map(Number).filter((x,i,a)=>a.indexOf(x)===i).sort((a,b)=>a-b).map(id=>({id,...(BUILTINS[id]||this.state.importedChapters[id])})).filter(x=>x.sections)},
      allQuestions(){return this.allChapterData.flatMap(x=>x.questions||[])},
      currentChapterVisuals(){return this.EXAM_VISUALS.filter(v=>Number(v.chapterId)===this.selectedChapter)},
      topicVisuals(){return this.currentChapterVisuals.filter(v=>v.topicId===this.selectedTopic)},
      sectionVisuals(){return this.currentChapterVisuals.filter(v=>v.topicId?.split('.').slice(0,2).join('.')===this.selectedTopic.split('.').slice(0,2).join('.'))},
      visibleVisualDiagram(){return this.currentChapterVisuals.find(v=>v.id===this.visualFocusId)||this.currentChapterVisuals[0]||null},
      visualChapterStats(){return this.allChapterData.map(d=>{const topics=(d.sections||[]).flatMap(x=>x.children||[]),qs=d.questions||[],answered=qs.filter(q=>this.state.answers[q.id]),mastered=topics.filter(t=>this.state.mastered.includes(t.id)).length,correct=answered.filter(q=>this.state.answers[q.id]?.correct).length;return {id:d.id,name:d.title,topics:topics.length,mastered,mastery:topics.length?Math.round(mastered/topics.length*100):0,answered:answered.length,accuracy:answered.length?Math.round(correct/answered.length*100):0}})},
      allHighlights(){return this.allChapterData.flatMap(x=>x.highlights||[])},
      allTopics(){return this.allChapterData.flatMap(x=>(x.sections||[]).flatMap(s=>s.children||[]))},
      currentChapterData(){return BUILTINS[this.selectedChapter]||this.state.importedChapters[this.selectedChapter]||null},
      currentChapterSections(){return this.currentChapterData?.sections||[]},
      currentChapterTopicList(){return this.currentChapterSections.flatMap(s=>s.children||[])},
      currentNote(){return this.currentChapterData?.notes?.[this.selectedTopic]},
      currentTopicTitle(){return this.topicTitle(this.selectedTopic)},
      currentTopicPage(){return this.currentNote?.page || this.currentChapterTopicList.find(t=>t.id===this.selectedTopic)?.page || 1},
      currentSectionHighlights(){const main=this.selectedTopic.split('.').slice(0,2).join('.');return this.allHighlights.filter(p=>p.sectionId===main && Number(p.id?.split('-')[0]?.slice(1))===this.selectedChapter)},
      prevTopic(){const idx=this.currentChapterTopicList.findIndex(t=>t.id===this.selectedTopic);return idx>0?this.currentChapterTopicList[idx-1].id:''},
      nextTopic(){const idx=this.currentChapterTopicList.findIndex(t=>t.id===this.selectedTopic);return idx>=0 && idx<this.currentChapterTopicList.length-1?this.currentChapterTopicList[idx+1].id:''},
      masteredCount(){return this.allTopics.filter(t=>this.state.mastered.includes(t.id)).length},
      masteryPercent(){return this.allTopics.length?Math.round(this.masteredCount/this.allTopics.length*100):0},
      chapterMasteryPercent(){return this.currentChapterTopicList.length?Math.round(this.currentChapterTopicList.filter(t=>this.state.mastered.includes(t.id)).length/this.currentChapterTopicList.length*100):0},
      answeredCount(){return Object.keys(this.state.answers).length},
      correctCount(){return Object.values(this.state.answers).filter(a=>a.correct).length},
      answerAccuracy(){return this.answeredCount?Math.round(this.correctCount/this.answeredCount*100):0},
      availableChapterCount(){return this.allChapterData.length},
      recommendedTopic(){return this.allTopics.find(t=>!this.state.mastered.includes(t.id))?.id||'1.1.1'},
      currentChapterHighlights(){return (this.currentChapterData?.highlights||[])},
      dashboardStats(){return [
        {label:'已掌握知识小节',caption:'已录入 '+this.allTopics.length+' 节',value:this.masteredCount,unit:' / '+this.allTopics.length,tone:'lilac',icon:'book'},
        {label:'已练习题目',caption:'题库共 '+this.allQuestions.length+' 题',value:this.answeredCount,unit:' 题',tone:'blue',icon:'clipboard'},
        {label:'练习正确率',caption:'最近一次作答',value:this.answerAccuracy,unit:'%',tone:'mint',icon:'chart'},
        {label:'待复习错题',caption:'有错题就有进步',value:this.state.wrongIds.length,unit:' 题',tone:'peach',icon:'alert'}]},
      filteredQuestions(){let qs=this.allQuestions.filter(q=>Number(q.chapterId)===this.selectedChapter);if(this.practiceFilter==='wrong')qs=qs.filter(q=>this.state.wrongIds.includes(q.id));if(this.practiceFilter==='favorite')qs=qs.filter(q=>this.state.bookmarked.includes(q.id));if(this.practiceFilter==='unanswered')qs=qs.filter(q=>!this.state.answers[q.id]);if(this.practiceFilter==='marked')qs=qs.filter(q=>q.kind==='资料标记真题'||/\d{2}/.test(String(q.sourceLabel||'')));if(this.practiceSectionFilter!=='all')qs=qs.filter(q=>q.sectionId===this.practiceSectionFilter);return qs},
      currentDrillQ(){return this.filteredQuestions[Math.min(this.drillIndex,this.filteredQuestions.length-1)]},
      examCountOptions(){const len=this.allQuestions.length;return [10,20,40].filter(n=>n<=len).concat(len<10&&len>0?[len]:[])},
      examQuestionObjects(){return (this.examActive?.questions||[]).map(id=>this.allQuestions.find(q=>q.id===id)).filter(Boolean)},
      currentExamQ(){return this.examQuestionObjects[this.examIndex]},
      yearTaggedQuestions(){return this.allQuestions.filter(q=>['2023','2024','2025'].includes(this.getQuestionYear(q)))},
      displayedYearQuestions(){return this.yearTaggedQuestions.filter(q=>this.pastYear==='全部'||this.getQuestionYear(q)===this.pastYear)},
      searchResults(){const q=this.searchQuery.trim().toLowerCase();if(!q)return[];const arr=[];
        for(const c of this.EXAM_CHAPTERS){if((`${c.id} ${c.name} ${c.group}`).toLowerCase().includes(q))arr.push({type:'chapter',id:c.id,title:`第 ${c.id} 章 ${c.name}`,desc:c.group})}
        for(const data of this.allChapterData){for(const s of data.sections||[]){for(const t of s.children){const lead=data.notes?.[t.id]?.lead||'';if((t.title+' '+t.id+' '+lead).toLowerCase().includes(q))arr.push({type:'topic',id:t.id,title:t.id+' '+t.title,desc:lead})}}}
        for(const p of this.allHighlights){if(p.text.toLowerCase().includes(q))arr.push({type:'point',id:p.id,title:'必背考点 '+p.number,desc:p.text.slice(0,145)})}
        for(const x of this.allQuestions){if(x.title.toLowerCase().includes(q))arr.push({type:'question',id:x.id,title:'练习第 '+x.number+' 题',desc:x.title.slice(0,130)})}
        return arr.slice(0,100)}
    },
    watch:{
      'state.settings.dark':{immediate:true,handler(value){this.$nextTick(()=>document.getElementById('app')?.classList.toggle('dark-mode',!!value))}},
      state:{deep:true,handler(v){try{localStorage.setItem(STORE,JSON.stringify(v))}catch(e){this.notify('本地存储空间不足，请导出备份')}}},
      examActive:{deep:true,handler(v){try{if(v)localStorage.setItem(EXAM_STORE,JSON.stringify(v));else localStorage.removeItem(EXAM_STORE)}catch(e){}}},
      filteredQuestions(){if(this.drillIndex>=this.filteredQuestions.length)this.drillIndex=Math.max(0,this.filteredQuestions.length-1)}
    },
    methods:{
      displayNum(n){return n===null||!Number.isFinite(n)?'—':Number(n).toFixed(2).replace(/\.00$/,'')},
      icon(name){return `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.book}</svg>`},
      notify(message){this.toast=message;clearTimeout(this._toastTimer);this._toastTimer=setTimeout(()=>this.toast='',2700)},
      getChapterId(name){return this.EXAM_CHAPTERS.find(c=>c.name===name)?.id||0},
      isChapterReady(id){return !!(BUILTINS[id]||this.state.importedChapters[id])},
      getQuestionYear(q){const text=String(q.sourceLabel||'');if(/2025|25年|25上|25下/.test(text))return '2025';if(/2024|24上|24下/.test(text))return '2024';if(/2023|23上|23下/.test(text))return '2023';return ''},
      favoriteTitle(id){if(id.startsWith('topic:'))return this.topicTitle(id.slice(6));const point=this.allHighlights.find(p=>p.id===id);return point?'必背考点 '+point.number+' · '+point.text.slice(0,20):id},
      openSavedKnowledge(id){if(id.startsWith('topic:'))this.openKnowledge(id.slice(6));else{const p=this.allHighlights.find(x=>x.id===id);if(!p)return;const data=this.state.importedChapters[Number(p.id.split('-')[0].slice(1))]||BUILTINS[Number(p.id.split('-')[0].slice(1))];const sec=data?.sections?.find(x=>x.id===p.sectionId);if(!sec)return;this.openKnowledge(sec.children[0].id);this.readingTab='highlights'}},
      goToQuestion(q){this.selectedChapter=q.chapterId;this.practiceSectionFilter='all';this.navigate('practice');this.drillIndex=Math.max(0,this.filteredQuestions.findIndex(x=>x.id===q.id))},
      topicTitle(id){return this.allTopics.find(x=>x.id===id)?.title||''},
      navigate(view){this.activeView=view;this.sidebarOpen=false;this.lastExamReport=view==='exam'?this.lastExamReport:null;
        if(view==='wrong')this.practiceFilter='wrong';else if(view==='favorites')this.practiceFilter='favorite';else if(view==='practice')this.practiceFilter='all';
        if(['wrong','favorites','practice'].includes(view)){this.drillIndex=0;if(view!=='practice')this.practiceSectionFilter='all';}
        window.scrollTo(0,0);if(location.hash!==`#/${view}`)location.hash=`/${view}`},
      openVisualInMaps(id){const v=this.EXAM_VISUALS.find(x=>x.id===id);if(!v)return;this.selectedChapter=v.chapterId;this.visualFocusId=v.id;this.navigate('maps')},
      groupMasteryPercent(group){const chapterNames=new Set(group.chapters||[]);const items=this.allChapterData.filter(d=>chapterNames.has(d.title)).flatMap(d=>d.sections||[]).flatMap(sec=>sec.children||[]);return items.length?Math.round(items.filter(t=>this.state.mastered.includes(t.id)).length/items.length*100):0},
      openChapter(id){this.selectedChapter=id;this.practiceSectionFilter='all';this.selectedTopic=this.currentChapterTopicList[0]?.id||'';this.openSectionGroups=this.currentChapterSections.map(s=>s.id);this.readingTab='course';this.navigate('knowledge')},
      openKnowledge(id){this.selectedChapter=Number(id?.split('.')[0])||1;this.selectedTopic=id||'1.1.1';this.openSectionGroups=this.currentChapterSections.map(s=>s.id);this.readingTab='course';this.navigate('knowledge')},
      toggleSectionCollapse(id){if(this.openSectionGroups.includes(id))this.openSectionGroups=this.openSectionGroups.filter(x=>x!==id);else this.openSectionGroups.push(id)},
      recordActivity(){const d=new Date().toLocaleDateString('sv-SE');this.state.dailyActivity[d]=(this.state.dailyActivity[d]||0)+1},
      toggleMastery(id){if(this.state.mastered.includes(id)){this.state.mastered=this.state.mastered.filter(x=>x!==id);this.notify('已取消掌握标记')}else{this.state.mastered.push(id);this.recordActivity();this.notify('已标记掌握，继续保持！')}},
      toggleStar(id){if(this.state.starred.includes(id))this.state.starred=this.state.starred.filter(x=>x!==id);else this.state.starred.push(id)},
      toggleBookmark(id){if(this.state.bookmarked.includes(id))this.state.bookmarked=this.state.bookmarked.filter(x=>x!==id);else this.state.bookmarked.push(id)},
      openPdf(page){this.notify('公开版未包含原版 PDF；资料对应原讲义第 '+Number(page||1)+' 页，请在有授权的本地版本查阅。')},
      answerFor(id){return this.state.answers[id]||null},
      optionClass(q,letter){const a=this.answerFor(q.id);return a?{'option-correct':q.answer===letter,'option-wrong':a.selected===letter&&!a.correct,'option-disabled':true}:{'option-selected':false}},
      answerDrill(q,letter){if(this.answerFor(q.id))return;const correct=q.answer===letter;this.state.answers[q.id]={selected:letter,correct,at:new Date().toISOString()};if(!correct&&!this.state.wrongIds.includes(q.id))this.state.wrongIds.push(q.id);this.recordActivity()},
      redoDrill(q){delete this.state.answers[q.id]},
      resolveWrong(id){this.state.wrongIds=this.state.wrongIds.filter(x=>x!==id);this.notify('已移出错题本')},
      performSearch(){this.navigate('search')},
      openSearchResult(r){if(r.type==='chapter')this.openChapter(r.id);else if(r.type==='topic')this.openKnowledge(r.id);else if(r.type==='point'){const p=this.allHighlights.find(x=>x.id===r.id);if(!p)return;const num=Number(p.id.split('-')[0].slice(1));const data=this.state.importedChapters[num]||BUILTINS[num];const sec=data?.sections?.find(x=>x.id===p.sectionId);if(!sec)return;this.openKnowledge(sec.children[0].id);this.readingTab='highlights'}else if(r.type==='question'){const q=this.allQuestions.find(x=>x.id===r.id);this.selectedChapter=q.chapterId;this.practiceFilter='all';this.practiceSectionFilter='all';this.navigate('practice');this.drillIndex=this.filteredQuestions.findIndex(x=>x.id===q.id)}},
      startExam(){const qs=[...this.allQuestions];if(!qs.length){this.notify('暂无可用习题');return;}for(let i=qs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[qs[i],qs[j]]=[qs[j],qs[i]]}const count=Math.min(this.examCount,qs.length);this.examActive={questions:qs.slice(0,count).map(q=>q.id),picks:{},startedAt:Date.now(),durationSeconds:Math.ceil(count*1.5)*60};this.examIndex=0;this.lastExamReport=null;this.tickExam()},
      tickExam(){this.now=Date.now();if(this.examActive){this.remainingSeconds=Math.max(0,Math.ceil((this.examActive.startedAt+this.examActive.durationSeconds*1000-this.now)/1000));if(this.remainingSeconds===0)this.finishExam()}},
      formatTime(n){n=Math.max(0,Math.floor(n||0));return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`},
      finishExam(){if(!this.examActive)return;const xs=this.examQuestionObjects;if(!xs.length){this.examActive=null;return;}const picks=this.examActive.picks;const correct=xs.filter(q=>picks[q.id]===q.answer).length;const used=Math.min(this.examActive.durationSeconds,Math.round((Date.now()-this.examActive.startedAt)/1000));const record={id:Date.now(),finishedAt:new Date().toISOString(),score:Math.round(correct/xs.length*100),correct,total:xs.length,usedSeconds:used,items:xs.map(q=>({id:q.id,title:q.title,selected:picks[q.id]||'',answer:q.answer,correct:picks[q.id]===q.answer,explanation:q.explanation||''}))};for(const item of record.items){if(!item.correct&&!this.state.wrongIds.includes(item.id))this.state.wrongIds.push(item.id)}this.state.exams.push({id:record.id,finishedAt:record.finishedAt,score:record.score,correct:record.correct,total:record.total});this.recordActivity();this.examActive=null;this.lastExamReport=record;this.notify('交卷完成，成绩已保存')},
      downloadText(name,text){const blob=new Blob([text||''],{type:'text/plain;charset=utf-8'});downloadBlob(name+'-'+new Date().toLocaleDateString('sv-SE')+'.txt',blob)},
      exportProgress(){saveJSON('高项学习记录-'+new Date().toLocaleDateString('sv-SE')+'.json',{app:'soft-exam-study',version:1,exportedAt:new Date().toISOString(),data:this.state})},
      downloadTemplate(){saveJSON('第13章-导入模板.json',{chapterId:13,title:'资源管理',sections:[{id:'13.1',title:'第一节示例',children:[{id:'13.1.1',title:'知识点示例',page:1}]}],notes:{'13.1.1':{lead:'请替换成整理后的讲义内容',page:1,blocks:[{title:'基础概念',type:'concept',items:[['知识点名称','知识点解释']]}],tip:'速记口诀'}} ,questions:[{id:'q9-01',number:1,chapterId:9,sectionId:'13.1.1',title:'示例题目（请选择正确答案）',options:['选项A','选项B','选项C','选项D'],answer:'A',explanation:'示例解析',sourceLabel:'自编示例',sourcePage:1}]})},
      validateImported(obj){const id=Number(obj?.chapterId);if(!Number.isInteger(id)||id<13||id>24)throw Error('chapterId 必须是 13–24 的整数（第1–12章已内置）');if(!Array.isArray(obj.sections))throw Error('缺少 sections 数组');const expected=this.EXAM_CHAPTERS.find(c=>c.id===id);if(obj.title&&obj.title!==expected.name)throw Error('章节标题和教材目录不一致：应为'+expected.name);let ids=new Set();for(const s of obj.sections){if(!s.id||!Array.isArray(s.children))throw Error('每节必须有 id 和 children 数组');for(const t of s.children){if(!t.id||!t.title||ids.has(t.id))throw Error('知识小节缺少 id/title 或编号重复');ids.add(t.id)}}if(obj.questions&&!Array.isArray(obj.questions))throw Error('questions 必须是数组');const qids=new Set();for(const q of obj.questions||[]){if(!q.id||!q.title||!Array.isArray(q.options)||q.options.length!==4||!['A','B','C','D'].includes(q.answer)||qids.has(q.id))throw Error('题目格式无效：需要 id/title/options[4]/answer');if(!ids.has(q.sectionId))throw Error('题目 '+q.id+' 的 sectionId 未出现在章节目录');qids.add(q.id)}return{id,title:expected.name,sections:obj.sections,notes:obj.notes&&typeof obj.notes==='object'?obj.notes:{},questions:(obj.questions||[]).map((q,i)=>({...q,chapterId:id,number:q.number||i+1}))}},
      importDataFile(e){const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const obj=JSON.parse(reader.result);const x=this.validateImported(obj);this.state.importedChapters[x.id]={title:x.title,sections:x.sections,notes:x.notes,questions:x.questions};this.importError=false;this.importMessage=`已导入第 ${x.id} 章「${x.title}」：${x.sections.length} 个大节、${x.questions.length} 道练习题。`;this.notify('章节导入成功')}catch(err){this.importError=true;this.importMessage='导入失败：'+err.message}};reader.readAsText(file);e.target.value=''},
      importProgress(e){const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const obj=JSON.parse(reader.result);if(obj.app!=='soft-exam-study'||!obj.data||!Array.isArray(obj.data.mastered))throw Error('不是有效的高项学习记录备份');if(!confirm('导入将替换当前学习记录。是否继续？'))return;this.state=Object.assign(EMPTY(),obj.data);this.state.essayDraft=Object.assign({title:'',body:''},this.state.essayDraft);this.state.caseDraft=Object.assign({title:'',material:'',answer:''},this.state.caseDraft);this.notify('学习记录恢复成功')}catch(err){this.notify('导入失败：'+err.message)}};reader.readAsText(file);e.target.value=''},
      clearProgress(){if(!confirm('确定清空全部答题、错题、笔记及导入章节吗？此操作不可撤销，建议先导出备份。'))return;this.state=EMPTY();this.examActive=null;this.lastExamReport=null;this.notify('已清空学习记录')}
    },
    mounted(){const view=(location.hash||'').replace(/^#\//,'');const valid=['home','chapters','knowledge','maps','practice','pastpapers','wrong','favorites','exam','cases','essays','progress','settings','search'];if(valid.includes(view)){this.activeView=view;if(view==='wrong')this.practiceFilter='wrong';if(view==='favorites')this.practiceFilter='favorite'}this._ticker=setInterval(()=>{if(this.examActive)this.tickExam()},1000);if(this.examActive)this.tickExam();window.addEventListener('hashchange',this._hashHandler=()=>{const v=(location.hash||'').replace(/^#\//,'');if(valid.includes(v)&&v!==this.activeView)this.navigate(v)})},
    beforeUnmount(){clearInterval(this._ticker);clearTimeout(this._toastTimer);window.removeEventListener('hashchange',this._hashHandler)}
  });
  app.component('exam-visual',window.ExamVisualComponent);
  app.mount('#app');
})();
