(()=>{
  'use strict';
  const STORE = 'gao-xiang-study-v1';
  const BUILTINS = {1:{title:'信息化发展',sections:window.EXAM_SECTIONS,notes:window.EXAM_NOTES,questions:window.EXAM_CH1.questions,highlights:window.EXAM_CH1.highlights},2:window.EXAM_CH2,3:window.EXAM_CH3,4:window.EXAM_CH4,5:window.EXAM_CH5,6:window.EXAM_CH6,7:window.EXAM_CH7,8:window.EXAM_CH8,9:window.EXAM_CH9,10:window.EXAM_CH10,11:window.EXAM_CH11,12:window.EXAM_CH12,13:window.EXAM_CH13,14:window.EXAM_CH14,15:window.EXAM_CH15,16:window.EXAM_CH16,17:window.EXAM_CH17,18:window.EXAM_CH18,19:window.EXAM_CH19,20:window.EXAM_CH20,21:window.EXAM_CH21,22:window.EXAM_CH22,23:window.EXAM_CH23,24:window.EXAM_CH24};
  const ESSAY_BANK=[
    {id:'e13',chapter:13,title:'论信息系统项目的资源管理',page:3,source:'讲义标注：2023年下半年第4批',points:['介绍真实项目背景和本人承担的工作','解释资源管理基本过程','比较实物资源和团队资源获取及控制的差异','结合项目说明实际做法与经验']},
    {id:'e14',chapter:14,title:'论信息系统项目的沟通管理',page:43,source:'讲义提供的论文模拟题',points:['以真实项目及职责为背景','结合三个沟通过程和主要输出说明实际做法','列出干系人并制定有针对性的沟通管理计划','用干系人参与度评估矩阵分析规划与监督沟通']},
    {id:'e15',chapter:15,title:'论信息系统项目的风险管理',page:3,source:'讲义标注：2023年上半年',points:['介绍真实项目和个人职责','阐述风险识别和风险应对的实际做法','展示风险登记册内容及其逐步完善的过程']},
    {id:'e16a',chapter:16,title:'论信息系统项目的采购管理',page:3,source:'讲义标注：2020年下半年',points:['描述项目背景与职责','说明采购管理的各过程','如采用招投标，论述招投标流程和管理体会']},
    {id:'e16b',chapter:16,title:'论信息系统项目的招投标管理',page:4,source:'讲义标注：2021年下半年',points:['介绍项目背景与职责','论述招投标管理过程','编制招标文件评分表','说明投标文件编制和递交的注意事项']},
    {id:'e16c',chapter:16,title:'论信息系统项目的合同管理',page:5,source:'讲义标注：2023年下半年第3批',points:['描述真实项目背景与职责','论述合同管理过程与主要内容','编制项目合同主要条款','结合项目实际说明合同管理做法与心得']}
    ,{id:'e17a',chapter:17,title:'论信息系统项目的干系人管理（权力/利益）',page:3,source:'讲义标注：2022年上半年',points:['简述真实项目背景及自身职责','阐述干系人管理四个过程','比较干系人、沟通和需求管理','列举干系人并分析权力/利益方格及管理策略','总结干系人参与的实际做法']}
    ,{id:'e17b',chapter:17,title:'论信息系统项目的干系人管理（参与度矩阵）',page:4,source:'讲义标注：2023年下半年第1批',points:['介绍真实项目经历','说明干系人管理四个过程','依据参与度评估矩阵分析并分类管理项目干系人','结合案例说明管理措施与心得']}
    ,{id:'e18a',chapter:18,title:'论信息系统项目的工作绩效域',page:3,source:'讲义标注：2023年下半年第2批',points:['介绍真实项目背景和本人工作','论述项目工作绩效域的绩效要点','说明哪些项目工作绩效活动应重点管理']}
    ,{id:'e18b',chapter:18,title:'论信息系统项目的交付绩效域',page:4,source:'讲义标注：2025年上半年第1批',points:['结合真实项目说明交付绩效域重点','按五大过程组说明与其他绩效域的协同','提出各过程组可用于检查交付的度量指标']}
    ,{id:'e18c',chapter:18,title:'论信息系统项目的不确定性绩效域',page:5,source:'讲义标注：2025年上半年第2批',points:['列出该绩效域预期目标','说明其与其他七大绩效域的关系','用真实项目列出不确定性及应对方式']}
  ];
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
      EXAM_CATALOG:window.EXAM_CATALOG, EXAM_CHAPTERS:window.EXAM_CHAPTERS, EXAM_SECTIONS:window.EXAM_SECTIONS,essayPrompts:ESSAY_BANK,selectedEssayPromptId:'e13',
      state:readStore(),EXAM_VISUALS:window.EXAM_VISUALS||[],visualFocusId:'',visualTypeFilter:'all',activeView:'home',sidebarOpen:false,selectedChapter:1,selectedTopic:'1.1.1',readingTab:'course',openSectionGroups:['1.1','1.2','1.3','1.4','1.5'],
      evmValues:{pv:80,ev:70,ac:90,bac:200},evmForecastMode:'typical',stakeholderPower:8,stakeholderInterest:8,domainFocus:0,changeFocus:0,versionStatus:'draft',opmLevel:3,communicationPeople:12,riskCalc:{chance:0.45,gain:80,threatChance:0.25,loss:30,investment:0},procCalc:{targetCost:200,targetFee:20,actualCost:230,sellerShare:30,ceiling:260},networkDurations:{A:3,B:4,C:5,D:2,E:4,F:3},
      mathTab:'econ',mathTabs:[{id:'econ',icon:'∑',label:'工程经济'},{id:'lp',icon:'▱',label:'线性规划'},{id:'vogel',icon:'⇄',label:'伏格尔法'},{id:'hungarian',icon:'▦',label:'匈牙利法'},{id:'path',icon:'⌁',label:'最短路径'},{id:'game',icon:'◇',label:'博弈论'},{id:'decision',icon:'≋',label:'决策分析'}],
      mathCapital:100,mathRate:10,mathYears:3,mathCashflows:'40,40,40,40',mathC1:5,mathC2:4,vogelStep:0,hungarianStage:0,
      gameMatrix:[[8,4,6],[6,2,5],[7,5,9]],decisionMatrix:[[15,6,12],[4,18,10],[10,8,14]],
      swotFocus:0,swotItems:[{code:'S',name:'优势 Strengths',sub:'内部 · 有利因素',detail:'组织已有的资源、能力、品牌等优势。'},{code:'W',name:'劣势 Weaknesses',sub:'内部 · 不利因素',detail:'资源不足、能力短板、流程瓶颈等限制。'},{code:'O',name:'机会 Opportunities',sub:'外部 · 有利因素',detail:'市场增长、新技术发展、政策支持等外部机会。'},{code:'T',name:'威胁 Threats',sub:'外部 · 不利因素',detail:'竞争加剧、环境变化和法规风险等外部威胁。'}],
      managementMode:'4p',managementFocus:0,marketing4P:[{code:'P1',name:'产品 Product',detail:'品类与价值定位'},{code:'P2',name:'价格 Price',detail:'定价、费用与折扣'},{code:'P3',name:'渠道 Place',detail:'分销、渠道与触达'},{code:'P4',name:'促销 Promotion',detail:'传播、广告与活动'}],seciItems:[{code:'S',name:'社会化',detail:'隐性→隐性'},{code:'E',name:'外化',detail:'隐性→显性'},{code:'C',name:'组合',detail:'显性→显性'},{code:'I',name:'内化',detail:'显性→隐性'}],
      lawFocus:0,lawMilestones:[{value:'≥5天',title:'招标文件发售期',category:'招投标',detail:'讲义强调招标文件发售日期一般不得少于5日；注意适用项目和现行规定。'},{value:'≥20天',title:'文件发出至投标截止',category:'招投标',detail:'依法必须招标项目中，讲义所引法条要求从招标文件开始发出之日起至投标截止日止不少于20日。'},{value:'≥15天',title:'招标文件必要澄清',category:'招投标',detail:'可能影响投标文件编制的招标文件澄清或者修改，一般须在投标截止至少15日前通知。'},{value:'≤30天',title:'确定后签订书面合同',category:'招投标／政府采购',detail:'讲义列出中标通知书或成交通知书发出后，依法按约定的事项签订书面合同的期限。'},{value:'≥15年',title:'政府采购文件保存',category:'政府采购',detail:'讲义引用政府采购法规定：采购文件自采购结束之日起至少保存十五年。'}],
      practiceFilter:'all',practiceSectionFilter:'all',drillIndex:0,mapIndex:0,zoomMap:false, searchQuery:'',
      pastYear:'全部',examCount:20,examActive:(()=>{try{return JSON.parse(localStorage.getItem(EXAM_STORE)||'null')}catch(e){return null}})(),examIndex:0,remainingSeconds:0,now:Date.now(),lastExamReport:null,
      importMessage:'',importError:false,toast:'',mapNames:['全章思维导图','信息与信息系统','信息化与新基建','工业互联网与车联网','现代化创新发展','数字经济与元宇宙','数字政府与数字生态','数字化转型与智慧转移'],
      navMain:[{id:'home',label:'学习总览',icon:'home'},{id:'chapters',label:'章节管理',icon:'layers'},{id:'knowledge',label:'知识点学习',icon:'book'},{id:'maps',label:'知识图解',icon:'map'},{id:'practice',label:'章节练习',icon:'clipboard'},{id:'exam',label:'模拟考试',icon:'timer'}],
      navResources:[{id:'pastpapers',label:'历年真题',icon:'file'},{id:'wrong',label:'错题本',icon:'alert'},{id:'favorites',label:'我的收藏',icon:'star'},{id:'cases',label:'案例分析',icon:'file'},{id:'essays',label:'论文训练',icon:'pen'},{id:'progress',label:'学习统计',icon:'chart'}],
      quickActions:[{view:'knowledge',name:'知识点学习',desc:'全24章知识点已录入',icon:'book',tone:'lilac'},{view:'practice',name:'章节练习',desc:'800 道配套与自测题',icon:'clipboard',tone:'peach'},{view:'maps',name:'图解实验室',desc:'426 张原创图解',icon:'map',tone:'mint'},{view:'wrong',name:'错题复习',desc:'精准查漏补缺',icon:'alert',tone:'blue'}]
    }},
    computed:{
      viewTitle(){return ({home:'学习总览',chapters:'章节管理',knowledge:'知识点学习',maps:'知识图解',practice:'章节练习',pastpapers:'历年真题',wrong:'错题本',favorites:'我的收藏',exam:'模拟考试',cases:'案例分析',essays:'论文训练',progress:'学习统计',settings:'数据与设置',search:'全站搜索'})[this.activeView]||'备考中心'},
      todayLabel(){return new Date().toLocaleDateString('zh-CN',{year:'numeric',month:'long',day:'numeric',weekday:'long'})},
      chapterCardSummary(id){const d=this.state.importedChapters[id]||BUILTINS[id];const topics=(d?.sections||[]).flatMap(s=>s.children||[]).length,qs=(d?.questions||[]).length,vs=this.EXAM_VISUALS.filter(x=>x.chapterId===id).length;return d?topics+' 个知识小节 · '+qs+' 道习题 · '+vs+' 张图解':'目录已建立，待录入';},
      chapterTitle(){return this.EXAM_CHAPTERS.find(c=>c.id===this.selectedChapter)?.name||'未知章节'},
      stakeholderStrategy(){
        const power=Number(this.stakeholderPower)>=6, interest=Number(this.stakeholderInterest)>=6;
        return power?(interest?{name:'重点管理',detail:'高权力、高利益：密切协作、优先处理诉求'}:{name:'令其满意',detail:'高权力、低利益：保持满意，不必过度打扰'}):(interest?{name:'随时告知',detail:'低权力、高利益：定期同步进展、收集反馈'}:{name:'适度监督',detail:'低权力、低利益：监测变化并按需沟通'});
      },
      domainCards(){return [
        {name:'干系人',goal:'建立高效关系、目标认同、干系人满意',check:'参与连续性、满意度、行为和相关风险',link:'规划、交付、度量'},
        {name:'团队',goal:'共享责任、建立高绩效团队、提升领导力',check:'信任协作、适应性与领导风格',link:'干系人、项目工作、开发方法'},
        {name:'开发方法与生命周期',goal:'方法符合产品、价值紧密关联、交付节奏适宜',check:'产品质量、变更成本、交付节奏',link:'规划、交付、不确定性'},
        {name:'规划',goal:'有条理推进、系统交付、适度详尽、可调整',check:'绩效偏差、计划整体性与适宜性',link:'开发方法、项目工作、度量'},
        {name:'项目工作',goal:'高效执行、沟通、资源、采购、变更与学习',check:'状态报告、利用率、采购和变更效果',link:'规划、干系人、团队、交付'},
        {name:'交付',goal:'战略一致、实现预期成果与价值、需求清楚',check:'项目完成度、收益、满意度与质量',link:'规划、项目工作、度量'},
        {name:'度量',goal:'了解项目状况、支持决策、及时纠偏',check:'有效指标、趋势、度量结果和报告',link:'规划、项目工作、交付'},
        {name:'不确定性',goal:'理解环境，管理风险、模糊与复杂，利用储备',check:'风险应对、机会利用、储备使用',link:'开发方法、规划、交付'}
      ];},
      changeSteps(){return [
        {name:'提出申请',detail:'提出书面申请并登记，说明背景、理由和预期效果'},
        {name:'初步审查',detail:'检查完整性、必要性和申请是否合理'},
        {name:'方案论证',detail:'分析技术、进度、成本、范围、质量和风险影响'},
        {name:'变更审查',detail:'交由授权评审机构或CCB决定批准、否决或延期'},
        {name:'通知并实施',detail:'通知相关方，配置资源并按批准方案实施'},
        {name:'实施监控',detail:'跟踪实施状态和偏差，保留必要记录'},
        {name:'效果评估',detail:'验证是否达到变更目标和验收标准'},
        {name:'变更收尾',detail:'更新基准、文档和配置项，完成记录归档'}
      ];},
      versionExamples(){return [
        {id:'draft',name:'草稿',format:'0.YZ',example:'0.01 → 0.02',hint:'未经评审，草稿数字按修改增加'},
        {id:'formal',name:'正式',format:'X.Y',example:'1.0 → 1.1',hint:'通过评审后才可标为正式'},
        {id:'changing',name:'修改',format:'X.YZ',example:'1.11 → 1.12',hint:'修改中临时版本，复审通过回到正式'}
      ];},
      selectedVersion(){return this.versionExamples.find(x=>x.id===this.versionStatus)||this.versionExamples[0];},
      opmLevels(){return [
        {name:'初始或临时',detail:'初步活动，实践不统一，靠个人经验完成'},
        {name:'项目层级采用',detail:'各项目有自己的方法和计划，可重复程度提升'},
        {name:'组织定义',detail:'组织统一标准方法和裁剪规则'},
        {name:'量化管理',detail:'通过度量和性能预测驱动过程管理'},
        {name:'持续优化',detail:'根据数据和创新不断优化组织能力'}
      ];},
      mathFinance(){return window.ExamMathLab.timeValue(this.mathCapital,this.mathRate,this.mathYears,this.mathCashflows);},
      mathLinear(){return window.ExamMathLab.linear(this.mathC1,this.mathC2);},
      vogelResult(){return window.ExamMathLab.vogel([[3,11,7,6],[1,9,2,8],[7,4,10,5]],[300,500,200],[400,100,300,200]);},
      vogelShownAllocation(){return this.vogelStep>0?this.vogelResult.steps[Math.min(this.vogelStep,this.vogelResult.steps.length)-1].allocation:this.vogelResult.matrix.map(row=>row.map(()=>0));},
      mathAssignment(){return window.ExamMathLab.assignment([[13,6,8,9],[6,11,5,8],[7,9,5,8],[8,6,7,12]]);},
      hungarianShown(){return this.hungarianStage===0?this.mathAssignment.original:this.hungarianStage===1?this.mathAssignment.rowReduced:this.mathAssignment.reduced;},
      mathRoute(){return window.ExamMathLab.shortestPath();},
      mathGame(){return window.ExamMathLab.game(this.gameMatrix.map(row=>row.map(x=>Number(x)||0)));},
      mathDecision(){return window.ExamMathLab.decision(this.decisionMatrix.map(row=>row.map(x=>Number(x)||0)));},
      communicationChannels(){
        const n=Math.max(2,Math.min(500,Math.floor(Number(this.communicationPeople)||2)));
        return {people:n,channels:n*(n-1)/2,additional:n};
      },
      riskCalcResult(){
        const x=this.riskCalc, clamp=v=>Math.max(0,Math.min(1,Number(v)||0));
        const positive=clamp(x.chance)*Math.max(0,Number(x.gain)||0);
        const negative=clamp(x.threatChance)*Math.max(0,Number(x.loss)||0);
        const investment=Math.max(0,Number(x.investment)||0);
        return {positive,negative,investment,net:positive-negative-investment};
      },
      procurementCalcResult(){
        const x=this.procCalc;
        const target=Math.max(0,Number(x.targetCost)||0),fee=Math.max(0,Number(x.targetFee)||0),actual=Math.max(0,Number(x.actualCost)||0);
        const sellerShare=Math.min(100,Math.max(0,Number(x.sellerShare)||0))/100,ceiling=Math.max(0,Number(x.ceiling)||0);
        const incentiveFee=fee+(target-actual)*sellerShare;
        const cpif=actual+incentiveFee;
        const fpif=Math.min(cpif,ceiling);
        return {cpif,fpif,fee:incentiveFee,sellerProfitCpif:cpif-actual,sellerProfitFpif:fpif-actual,buyerShare:1-sellerShare};
      },
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
      allChapterData(){return Object.keys(BUILTINS).concat(Object.keys(this.state.importedChapters)).map(Number).filter((x,i,a)=>a.indexOf(x)===i).sort((a,b)=>a-b).map(id=>({id,...(this.state.importedChapters[id]||BUILTINS[id])})).filter(x=>x.sections)},
      allQuestions(){return this.allChapterData.flatMap(x=>x.questions||[])},
      currentChapterVisuals(){return this.EXAM_VISUALS.filter(v=>Number(v.chapterId)===this.selectedChapter)},
      featuredChapterVisuals(){return Array.from({length:24},(_,i)=>this.EXAM_VISUALS.find(v=>v.chapterId===i+1&&v.featured)).filter(Boolean)},
      visualTypeOptions(){const vs=this.currentChapterVisuals;const counts=new Map();vs.forEach(v=>{const key=v.kind;counts.set(key,(counts.get(key)||0)+1)});return [{key:'all',label:'全部图解',count:vs.length},...Array.from(counts,([key,count])=>({key,label:window.EXAM_VISUAL_TYPE_LABELS?.[key]||key,count}))]},
      filteredChapterVisuals(){return this.currentChapterVisuals.filter(v=>this.visualTypeFilter==='all'||v.kind===this.visualTypeFilter)},
      topicVisuals(){return this.currentChapterVisuals.filter(v=>v.topicId===this.selectedTopic)},
      sectionVisuals(){return this.currentChapterVisuals.filter(v=>v.topicId?.split('.').slice(0,2).join('.')===this.selectedTopic.split('.').slice(0,2).join('.'))},
      visibleVisualDiagram(){return this.filteredChapterVisuals.find(v=>v.id===this.visualFocusId)||this.filteredChapterVisuals[0]||null},
      visualChapterStats(){return this.allChapterData.map(d=>{const topics=(d.sections||[]).flatMap(x=>x.children||[]),qs=d.questions||[],answered=qs.filter(q=>this.state.answers[q.id]),mastered=topics.filter(t=>this.state.mastered.includes(t.id)).length,correct=answered.filter(q=>this.state.answers[q.id]?.correct).length;return {id:d.id,name:d.title,topics:topics.length,mastered,mastery:topics.length?Math.round(mastered/topics.length*100):0,answered:answered.length,accuracy:answered.length?Math.round(correct/answered.length*100):0}})},
      allHighlights(){return this.allChapterData.flatMap(x=>x.highlights||[])},
      allTopics(){return this.allChapterData.flatMap(x=>(x.sections||[]).flatMap(s=>s.children||[]))},
      currentChapterData(){return this.state.importedChapters[this.selectedChapter]||BUILTINS[this.selectedChapter]||null},
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
      isChapterReady(id){return !!(this.state.importedChapters[id]||BUILTINS[id])},
      getQuestionYear(q){const text=String(q.sourceLabel||'');if(/2025|25年|25上|25下/.test(text))return '2025';if(/2024|24上|24下/.test(text))return '2024';if(/2023|23上|23下/.test(text))return '2023';return ''},
      favoriteTitle(id){if(id.startsWith('topic:'))return this.topicTitle(id.slice(6));const point=this.allHighlights.find(p=>p.id===id);return point?'必背考点 '+point.number+' · '+point.text.slice(0,20):id},
      openSavedKnowledge(id){if(id.startsWith('topic:'))this.openKnowledge(id.slice(6));else{const p=this.allHighlights.find(x=>x.id===id);if(!p)return;const data=this.state.importedChapters[Number(p.id.split('-')[0].slice(1))]||BUILTINS[Number(p.id.split('-')[0].slice(1))];const sec=data?.sections?.find(x=>x.id===p.sectionId);if(!sec)return;this.openKnowledge(sec.children[0].id);this.readingTab='highlights'}},
      goToQuestion(q){this.selectedChapter=q.chapterId;this.practiceSectionFilter='all';this.navigate('practice');this.drillIndex=Math.max(0,this.filteredQuestions.findIndex(x=>x.id===q.id))},
      topicTitle(id){return this.allTopics.find(x=>x.id===id)?.title||''},
      navigate(view){this.activeView=view;this.sidebarOpen=false;this.lastExamReport=view==='exam'?this.lastExamReport:null;
        if(view==='wrong')this.practiceFilter='wrong';else if(view==='favorites')this.practiceFilter='favorite';else if(view==='practice')this.practiceFilter='all';
        if(['wrong','favorites','practice'].includes(view)){this.drillIndex=0;if(view!=='practice')this.practiceSectionFilter='all';}
        window.scrollTo(0,0);if(location.hash!==`#/${view}`)location.hash=`/${view}`},
      openVisualInMaps(id){const v=this.EXAM_VISUALS.find(x=>x.id===id);if(!v)return;this.selectedChapter=v.chapterId;this.visualTypeFilter='all';this.visualFocusId=v.id;this.navigate('maps')},
      groupMasteryPercent(group){const chapterNames=new Set(group.chapters||[]);const items=this.allChapterData.filter(d=>chapterNames.has(d.title)).flatMap(d=>d.sections||[]).flatMap(sec=>sec.children||[]);return items.length?Math.round(items.filter(t=>this.state.mastered.includes(t.id)).length/items.length*100):0},
      mathNode(id){return window.ExamMathLab.routeNodes.find(n=>n.id===id);},
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
      selectEssayPrompt(prompt){
        if(this.state.essayDraft.title && this.state.essayDraft.title!==prompt.title && this.state.essayDraft.body && !confirm('更换论文题目不会清空正文，但会修改草稿标题。是否继续？'))return;
        this.selectedEssayPromptId=prompt.id;this.state.essayDraft.title=prompt.title;
        this.notify('已选择论文训练题目：第'+prompt.chapter+'章');
      },
      downloadText(name,text){const blob=new Blob([text||''],{type:'text/plain;charset=utf-8'});downloadBlob(name+'-'+new Date().toLocaleDateString('sv-SE')+'.txt',blob)},
      exportProgress(){saveJSON('高项学习记录-'+new Date().toLocaleDateString('sv-SE')+'.json',{app:'soft-exam-study',version:1,exportedAt:new Date().toISOString(),data:this.state})},
      downloadTemplate(){saveJSON('第21章-导入模板.json',{chapterId:21,title:'项目管理科学基础',sections:[{id:'21.1',title:'第一节示例',children:[{id:'21.1.1',title:'知识点示例',page:1}]}],notes:{'21.1.1':{lead:'请替换成整理后的讲义内容',page:1,blocks:[{title:'基础概念',type:'concept',items:[['知识点名称','知识点解释']]}],tip:'速记口诀'}} ,questions:[{id:'q21-01',number:1,chapterId:21,sectionId:'21.1.1',title:'示例题目（请选择正确答案）',options:['选项A','选项B','选项C','选项D'],answer:'A',explanation:'示例解析',sourceLabel:'自编示例',sourcePage:1}]})},
      validateImported(obj){const id=Number(obj?.chapterId);if(!Number.isInteger(id)||id<1||id>24)throw Error('chapterId 必须是 1–24 的整数');if(!Array.isArray(obj.sections))throw Error('缺少 sections 数组');const expected=this.EXAM_CHAPTERS.find(c=>c.id===id);if(obj.title&&obj.title!==expected.name)throw Error('章节标题和教材目录不一致：应为'+expected.name);let ids=new Set();for(const s of obj.sections){if(!s.id||!Array.isArray(s.children))throw Error('每节必须有 id 和 children 数组');for(const t of s.children){if(!t.id||!t.title||ids.has(t.id))throw Error('知识小节缺少 id/title 或编号重复');ids.add(t.id)}}if(obj.questions&&!Array.isArray(obj.questions))throw Error('questions 必须是数组');const qids=new Set();for(const q of obj.questions||[]){if(!q.id||!q.title||!Array.isArray(q.options)||q.options.length!==4||!['A','B','C','D'].includes(q.answer)||qids.has(q.id))throw Error('题目格式无效：需要 id/title/options[4]/answer');if(!ids.has(q.sectionId))throw Error('题目 '+q.id+' 的 sectionId 未出现在章节目录');qids.add(q.id)}return{id,title:expected.name,sections:obj.sections,notes:obj.notes&&typeof obj.notes==='object'?obj.notes:{},questions:(obj.questions||[]).map((q,i)=>({...q,chapterId:id,number:q.number||i+1}))}},
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
