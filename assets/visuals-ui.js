/* 纯 SVG + CSS 交互图形组件。不加载图表 CDN，GitHub Pages 可离线使用。 */
window.ExamVisualComponent = {
  name:'ExamVisual',
  props:{diagram:{type:Object,required:true},dense:{type:Boolean,default:false}},
  emits:['navigate'],
  data(){return {selectedIndex:0}},
  computed:{
    activeItem(){return this.diagram.items?.[this.selectedIndex]||this.diagram.items?.[0]||{}},
    wheelSize(){return this.diagram.items?.length||1},
    cycleGradient(){
      const c=['#446ee9','#32b7ab','#ffb054','#a484e8','#ff7fa0','#5aaad9','#6ab978','#e9a87d'];
      const n=this.diagram.items.length,each=100/n;
      const seg=[];
      for(let i=0;i<n;i++){
        const a=(i*each).toFixed(3),b=((i+1)*each-.9).toFixed(3),end=((i+1)*each).toFixed(3);
        seg.push(`${c[i%c.length]} ${a}% ${b}%`);
        seg.push(`#f2f5fc ${b}% ${end}%`);
      }
      return `conic-gradient(${seg.join(',')})`;
    },
    tabularRows(){return this.diagram.rows || (this.diagram.items||[]).map(x=>[x.label,x.detail])},
    chartMax(){return Math.max(1,...(this.diagram.series||[]).flatMap(x=>x.values||[]))*1.12},
    sourceLabel(){return this.diagram.sourcePage?'资料：'+(this.diagram.sourceDocument||'章节讲义')+' · P'+this.diagram.sourcePage:'章节知识结构整理'}
  },
  watch:{'diagram.id'(){this.selectedIndex=0}},
  methods:{
    select(i){this.selectedIndex=i},
    wheelStyle(i){const n=this.wheelSize,angle=-Math.PI/2+i*Math.PI*2/n;return {left:(50+39*Math.cos(angle))+'%',top:(50+35*Math.sin(angle))+'%'}},
    nodeNumber(i){return String(i+1).padStart(2,'0')},
    seriesLine(values){return values.map((v,i)=>(65+i*675/(values.length-1))+','+(247-Number(v)*200/this.chartMax)).join(' ')}
  },
  template:`
  <section class="exam-visual" :class="['visual-kind-'+diagram.kind,{'is-dense':dense}]" :aria-label="diagram.title">
    <div class="visual-head">
      <div class="visual-symbol" aria-hidden="true">{{diagram.icon||'✳'}}</div>
      <div class="visual-heading"><div class="visual-eyebrow">{{diagram.featured?'✦ 章节重点专题 · ':'知识图解 · '}}{{diagram.formatLabel||'交互图解'}} · {{diagram.items.length}} 个要点</div><h3>{{diagram.title}}</h3><p>{{diagram.subtitle}}</p></div>
      <span class="visual-page">{{sourceLabel}}</span>
    </div>
    <div class="visual-canvas" :class="'visual-canvas-'+diagram.kind">
      <!-- 场景示意：真实的车/路/城/工厂/云均由轻量 SVG 原创绘制 -->
      <div v-if="diagram.kind==='scene'" class="vd-scene-layout">
        <div class="vd-scene-board" :class="'scene-'+(diagram.scene||'vehicle')">
          <svg viewBox="0 0 860 360" role="img" :aria-label="diagram.title" preserveAspectRatio="xMidYMid meet">
            <defs><linearGradient id="vdSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcefff"/><stop offset="1" stop-color="#f8fcff"/></linearGradient></defs>
            <rect width="860" height="360" rx="19" fill="url(#vdSky)"/>
            <g v-if="diagram.scene==='vehicle'">
              <circle cx="95" cy="70" r="39" fill="#fff4d8"/>
              <path d="M0 255Q150 209 340 225T680 205T860 212V360H0Z" fill="#b9dcce"/>
              <path d="M-20 310Q270 220 520 267T885 249" stroke="#53687e" stroke-width="92" fill="none"/>
              <path d="M-20 310Q270 220 520 267T885 249" stroke="#fff1ab" stroke-width="3.5" stroke-dasharray="19 16" fill="none"/>
              <path d="M332 150V112M309 126L332 93L355 126M322 110L342 110" stroke="#7188ad" stroke-width="3" fill="none"/>
              <path d="M287 108Q332 65 377 108M300 119Q332 85 364 119" stroke="#2aa9a8" stroke-width="3" fill="none"/>
              <g transform="translate(134 212)"><rect x="0" y="25" rx="13" width="142" height="43" fill="#2869a5"/><path d="M28 25L50 0H110L133 25Z" fill="#4a88bc"/><path d="M54 8H101L113 23H42Z" fill="#cfeaf5"/><circle cx="32" cy="70" r="15" fill="#2e4055"/><circle cx="111" cy="70" r="15" fill="#2e4055"/></g>
              <g transform="translate(487 207) scale(.82)"><rect x="0" y="25" rx="14" width="150" height="44" fill="#f09d63"/><path d="M26 25L48 0H111L138 25Z" fill="#dc7e55"/><path d="M52 9H108L120 24H41Z" fill="#e8f5fc"/><circle cx="32" cy="69" r="16" fill="#2e4055"/><circle cx="120" cy="69" r="16" fill="#2e4055"/></g>
              <g transform="translate(668 147)"><rect x="0" y="0" width="7" height="110" rx="2" fill="#708ca1"/><rect x="-12" y="1" width="31" height="67" rx="9" fill="#243957"/><circle cx="4" cy="15" r="7" fill="#fa776d"/><circle cx="4" cy="34" r="7" fill="#f9d572"/><circle cx="4" cy="54" r="7" fill="#6fd2a6"/></g>
              <g transform="translate(742 220)"><circle cx="0" cy="0" r="11" fill="#f4b9a3"/><path d="M0 11L-1 48M-1 28L-19 42M-1 30L14 42M-1 48L-12 68M-1 48L15 68" stroke="#54699a" stroke-width="8" stroke-linecap="round" fill="none"/></g>
              <g transform="translate(681 40)"><rect width="120" height="82" rx="14" fill="#fff" stroke="#b4d5ef" stroke-width="2"/><rect x="14" y="17" width="92" height="11" rx="5" fill="#d2e5f5"/><rect x="14" y="38" width="64" height="8" rx="3" fill="#b8d7ef"/><circle cx="95" cy="58" r="9" fill="#44c0ac"/><path d="M50 95Q60 75 85 93" stroke="#5a9fd6" stroke-width="3" stroke-dasharray="4 5" fill="none"/></g>
              <path d="M273 250Q354 187 485 237" stroke="#00a9a0" stroke-width="3" stroke-dasharray="8 8" fill="none"/><path d="M414 235l10-8-14-1" fill="#00a9a0"/>
            </g>
            <g v-else-if="diagram.scene==='city'">
              <path d="M0 297H860V360H0" fill="#cfdfdb"/><path d="M0 318H860" stroke="#667b90" stroke-width="53"/><path d="M0 318H860" stroke="#fff3bf" stroke-width="2" stroke-dasharray="18 18"/>
              <g v-for="(b,i) in [0,1,2,3,4,5,6]" :key="i" :transform="'translate('+(40+i*115)+' '+(154-(i%3)*32)+')'"><rect width="85" :height="140+(i%3)*32" rx="5" fill="#a8c9d9" :stroke="i%2?'#7aa7ba':'#94b4c8'"/><rect v-for="j in 12" :key="j" :x="12+(j%3)*23" :y="15+Math.floor(j/3)*29" width="12" height="15" fill="#eaf8fa" opacity=".85"/></g>
              <g transform="translate(746 184)"><rect width="8" height="110" fill="#6b839c"/><rect x="-12" y="10" rx="5" width="31" height="66" fill="#344b60"/><circle cx="3" cy="27" r="7" fill="#fa7464"/><circle cx="3" cy="44" r="7" fill="#f6d16c"/><circle cx="3" cy="62" r="7" fill="#7aca96"/></g>
              <path d="M340 76Q440-20 543 77" stroke="#7eb2d6" stroke-width="4" stroke-dasharray="8 8" fill="none"/><path d="M425 87Q443 62 461 87" stroke="#26baa7" stroke-width="4" fill="none"/>
              <g transform="translate(368 41)"><rect width="144" height="72" rx="12" fill="#fff" stroke="#b8dbe8"/><path d="M20 51L47 32L79 40L118 17" stroke="#4e86cc" stroke-width="4" fill="none"/><circle cx="117" cy="18" r="6" fill="#20ada1"/></g>
            </g>
            <g v-else-if="diagram.scene==='factory'">
              <rect x="0" y="315" width="860" height="45" fill="#d9e5dd"/>
              <g transform="translate(64 112)"><path d="M0 200V80L93 120V80L190 120V60L280 113V200Z" fill="#aac4cf" stroke="#7fadb8" stroke-width="2"/><rect x="23" y="148" width="51" height="39" rx="3" fill="#d6f0f2"/><rect x="112" y="149" width="51" height="39" rx="3" fill="#d6f0f2"/><rect x="208" y="148" width="51" height="39" rx="3" fill="#d6f0f2"/><path d="M30 79V12H60V94M226 66V0H251V80" fill="#9bb9c5"/></g>
              <g transform="translate(330 212)"><rect width="140" height="72" rx="9" fill="#6a89a3"/><rect x="12" y="14" width="110" height="14" rx="3" fill="#d8eaf0"/><circle cx="28" cy="51" r="8" fill="#5cdbc1"/><circle cx="58" cy="51" r="8" fill="#7bc7e0"/><circle cx="87" cy="51" r="8" fill="#ffc771"/></g>
              <g transform="translate(580 75)"><rect width="198" height="183" rx="22" fill="#e2eefb" stroke="#8db8d9" stroke-width="3"/><rect x="28" y="32" width="140" height="43" rx="9" fill="#fff"/><rect x="28" y="94" width="140" height="58" rx="9" fill="#fff"/><path d="M46 54h70M46 112h87M46 129h57" stroke="#65a0ce" stroke-width="7" stroke-linecap="round"/><circle cx="149" cy="54" r="7" fill="#4ac4a6"/></g>
              <path d="M450 245Q530 245 600 160" stroke="#37ab9e" stroke-width="4" stroke-dasharray="9 8" fill="none"/>
            </g>
            <g v-else>
              <path d="M0 290Q150 235 290 270T860 258V360H0Z" fill="#cde7dc"/>
              <g transform="translate(42 172)"><rect width="175" height="104" rx="14" fill="#a8bcd8"/><rect x="29" y="17" width="117" height="69" rx="7" fill="#f1f9ff"/><path d="M50 101h75" stroke="#647c9e" stroke-width="9" stroke-linecap="round"/></g>
              <path d="M300 190Q330 105 400 138Q439 58 510 94Q570 72 608 129Q680 131 686 186Z" fill="#fff" stroke="#91bddd" stroke-width="4"/>
              <g transform="translate(445 165)"><rect width="128" height="34" rx="9" fill="#86afd2"/><rect y="44" width="128" height="34" rx="9" fill="#9fc6dc"/><rect y="88" width="128" height="34" rx="9" fill="#bdd8e8"/><circle cx="105" cy="16" r="5" fill="#7de3a6"/><circle cx="105" cy="60" r="5" fill="#7de3a6"/></g>
              <path d="M245 237Q303 197 363 209" stroke="#58b4ac" stroke-dasharray="10 8" stroke-width="4" fill="none"/>
              <rect x="712" y="173" width="102" height="113" rx="11" fill="#edf3ff" stroke="#86add4"/><rect x="730" y="197" width="66" height="58" rx="7" fill="#87bbd6"/><circle cx="766" cy="267" r="6" fill="#92cbbb"/>
            </g>
          </svg>
          <button v-for="(item,i) in diagram.items" :key="i" class="vd-scene-pin" :class="{'picked':selectedIndex===i}" :style="{left:(item.x|| (10+i*12))+'%',top:(item.y||50)+'%'}" @click="select(i)" :aria-pressed="selectedIndex===i"><b>{{i+1}}</b><span>{{item.label}}</span></button>
        </div>
      </div>
      <!-- 可排序理解的分层对照表 -->
      <div v-else-if="diagram.kind==='table'" class="vd-table-wrap" role="group" :aria-label="diagram.title"><table class="vd-table"><thead><tr><th v-for="(col,i) in (diagram.columns||['要点','记忆内容'])" :key="i">{{col}}</th></tr></thead><tbody><tr v-for="(r,i) in tabularRows" :key="i" @click="select(Math.min(i,diagram.items.length-1))" :class="{'picked':selectedIndex===i}" tabindex="0" @keydown.enter="select(Math.min(i,diagram.items.length-1))"><td v-for="(cell,j) in r" :key="j"><strong v-if="j===0">{{cell}}</strong><span v-else>{{cell}}</span></td></tr></tbody></table></div>
      <!-- 树状知识框架 -->
      <div v-else-if="diagram.kind==='tree'" class="vd-tree"><div class="vd-tree-root"><small>上层目标 / 核心主题</small><strong>{{diagram.center||diagram.title}}</strong></div><div class="vd-tree-branches"><button v-for="(item,i) in diagram.items" :key="i" class="vd-tree-leaf" :class="{'picked':selectedIndex===i}" @click="select(i)" :aria-pressed="selectedIndex===i"><span>0{{i+1}}</span><strong>{{item.label}}</strong><small>{{item.detail}}</small></button></div></div>
      <!-- 纵轴/横轴的四象限信息矩阵 -->
      <div v-else-if="diagram.kind==='matrix'" class="vd-matrix"><div class="vd-matrix-axisY">{{diagram.axisY||'重要程度 ↑'}}</div><div class="vd-matrix-cells"><button v-for="(item,i) in diagram.items" :key="i" :class="['vd-quadrant','q'+i,{'picked':selectedIndex===i}]" @click="select(i)" :aria-pressed="selectedIndex===i"><small>0{{i+1}}</small><strong>{{item.label}}</strong><span>{{item.detail}}</span></button></div><div class="vd-matrix-axisX">{{diagram.axisX||'相对维度 →'}}</div></div>
      <!-- 风险 3×3 概率影响矩阵 -->
      <div v-else-if="diagram.kind==='heatmap'" class="vd-heatmap"><div class="vd-heat-caption">概率 ↑</div><div class="vd-heat-grid"><template v-for="(line,r) in diagram.cells" :key="r"><button v-for="(v,c) in line" :key="r+'-'+c" :class="['vd-heat-cell','level-'+v,{'picked':selectedIndex===r*3+c}]" @click="select(r*3+c)" :aria-pressed="selectedIndex===r*3+c"><span>{{diagram.yLabels?.[r]}} · {{diagram.xLabels?.[c]}}</span><strong>{{v}}</strong></button></template></div><div class="vd-heat-bottom"><span v-for="s in diagram.xLabels" :key="s">{{s}}</span><small>影响 →</small></div></div>
      <!-- 泳道，重点展示不同职责主体 -->
      <div v-else-if="diagram.kind==='swimlane'" class="vd-swimlane"><div v-for="(lane,i) in (diagram.lanes||[{label:'流程主线',steps:diagram.items.map(x=>x.label)}])" :key="i" class="vd-lane"><div class="vd-lane-label"><span>{{String(i+1).padStart(2,'0')}}</span><strong>{{lane.label}}</strong></div><div class="vd-lane-track"><button v-for="(s,j) in lane.steps" :key="j" :class="{'picked':selectedIndex===(j%diagram.items.length)}" @click="select(j%diagram.items.length)"><small>{{j+1}}</small>{{s}}</button></div></div></div>
      <!-- 时间轴/生命周期 -->
      <div v-else-if="diagram.kind==='timeline'" class="vd-timeline"><button v-for="(item,i) in diagram.items" :key="i" class="vd-time-point" :class="{'picked':selectedIndex===i}" @click="select(i)" :aria-pressed="selectedIndex===i"><span class="vd-time-marker">{{String(i+1).padStart(2,'0')}}</span><div><strong>{{item.label}}</strong><small>{{item.detail}}</small></div></button></div>
      <!-- RACI 的角色列及颜色语义 -->
      <div v-else-if="diagram.kind==='raci'" class="vd-raci"><div class="vd-raci-legend"><span><b class="raci-R">R</b>执行</span><span><b class="raci-A">A</b>最终负责</span><span><b class="raci-C">C</b>咨询</span><span><b class="raci-I">I</b>知会</span></div><div class="vd-table-wrap"><table class="vd-table"><thead><tr><th v-for="x in (diagram.columns||['RACI 角色','含义'])" :key="x">{{x}}</th></tr></thead><tbody><tr v-for="(r,i) in tabularRows" :key="i"><td v-for="(c,j) in r" :key="j"><b v-if="['R','A','C','I'].includes(c)" :class="'raci-'+c" class="vd-raci-chip">{{c}}</b><span v-else>{{c}}</span></td></tr></tbody></table></div></div>
      <!-- CPM 式活动横条：纯示例数据 -->
      <div v-else-if="diagram.kind==='gantt'" class="vd-gantt"><div class="vd-gantt-ticks"><span v-for="n in 12" :key="n">{{n-1}}</span></div><div class="vd-gantt-row" v-for="(a,i) in diagram.activities" :key="i"><strong>{{a.label}}</strong><div class="vd-gantt-track"><div class="vd-gantt-bar" :class="{'picked':selectedIndex===i}" :style="{left:(a.start/12*100)+'%',width:(a.duration/12*100)+'%'}" @click="select(i)"><span>{{a.duration}}期</span></div></div></div><small class="vd-gantt-note">刻度表示示例周期，不代表实际项目日期。</small></div>
      <!-- 网络图：连线来自教学模型，不从业务无依据地推断依赖 -->
      <div v-else-if="diagram.kind==='topology'" class="vd-topology"><svg viewBox="0 0 850 380" role="group" :aria-label="diagram.title"><line v-for="(e,i) in (diagram.edges||[])" :key="'e'+i" :x1="diagram.nodes[e[0]].x*7.7+40" :y1="diagram.nodes[e[0]].y*3.3+25" :x2="diagram.nodes[e[1]].x*7.7+40" :y2="diagram.nodes[e[1]].y*3.3+25" stroke="#aac6db" stroke-width="2.3" stroke-dasharray="7 4"/><g v-for="(n,i) in diagram.nodes" :key="i" @click="select(i)" tabindex="0" role="button" @keydown.enter="select(i)" :aria-label="n.label" :transform="'translate('+(n.x*7.7+40)+','+(n.y*3.3+25)+')'" :class="{'picked':selectedIndex===i}"><rect x="-66" y="-21" width="132" height="42" rx="13" fill="#fff" stroke="#a6c9de" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="12" font-weight="650" fill="#325778">{{n.label}}</text></g><g v-if="diagram.center"><rect x="348" y="162" width="155" height="53" rx="18" fill="#236c96"/><text x="426" y="194" text-anchor="middle" fill="#fff" font-size="14">{{diagram.center}}</text></g></svg></div>
      <!-- 质量鱼骨图：潜在原因聚合 -->
      <div v-else-if="diagram.kind==='fishbone'" class="vd-fishbone"><svg viewBox="0 0 820 320" role="img" :aria-label="diagram.title"><path d="M55 160H700M700 160L674 146M700 160L674 174" stroke="#688eae" stroke-width="4" stroke-linecap="round" fill="none"/><path v-for="n in 3" :key="n" :d="'M'+(100+n*138)+' 160l-65 -105'" stroke="#7ea8c4" stroke-width="3" fill="none"/><path v-for="n in 3" :key="n+3" :d="'M'+(100+n*138)+' 160l-65 105'" stroke="#7ea8c4" stroke-width="3" fill="none"/><g v-for="(item,i) in diagram.items" :key="i" :transform="'translate('+(45+(i%3)*140)+','+(i<3?40:274)+')'"><rect x="-18" y="-12" width="124" height="33" rx="10" :fill="selectedIndex===i?'#d6ecfd':'#fff'" stroke="#95bad6"/><text x="44" y="8" text-anchor="middle" font-size="11" fill="#31516f">{{item.label.split(' ')[0]}}</text></g><rect x="695" y="117" width="118" height="86" rx="13" fill="#2c7095"/><text x="754" y="153" text-anchor="middle" fill="white" font-size="13">问题 / 结果</text><text x="754" y="176" text-anchor="middle" fill="white" font-size="11">鱼头 →</text></svg><div class="vd-fishbone-choices"><button v-for="(item,i) in diagram.items" :key="i" :class="{'picked':selectedIndex===i}" @click="select(i)">{{item.label}}</button></div></div>
      <!-- V 型开发 / 测试对应 -->
      <div v-else-if="diagram.kind==='vmodel'" class="vd-vmodel"><svg viewBox="0 0 760 290" role="img" :aria-label="diagram.title"><path d="M80 45L380 268L680 45" stroke="#7da1ce" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M80 45L380 268" stroke="#4c83c4" stroke-width="8" stroke-linecap="round" stroke-dasharray="13 11" fill="none"/><path d="M380 268L680 45" stroke="#26ab9b" stroke-width="8" stroke-linecap="round" stroke-dasharray="13 11" fill="none"/><circle cx="380" cy="268" r="12" fill="#2c729c"/><text x="380" y="258" text-anchor="middle" font-size="12" fill="#345a81">实现 / 编码</text><text x="110" y="23" font-size="13" fill="#2e688d">开发分析 ←</text><text x="541" y="23" font-size="13" fill="#278475">→ 验证测试</text><line v-for="n in 4" :key="n" :x1="110+(n-1)*75" :y1="67+(n-1)*54" :x2="650-(n-1)*75" :y2="67+(n-1)*54" stroke="#aac0d3" stroke-width="1.8" stroke-dasharray="6 5"/></svg><div class="vd-vmodel-rows"><button v-for="(item,i) in diagram.items" :key="i" :class="{'picked':selectedIndex===i}" @click="select(i)">{{item.label}}</button></div></div>
      <!-- 多系列数据趋势，示例数据显著标示 -->
      <div v-else-if="diagram.kind==='linechart'" class="vd-linechart"><svg viewBox="0 0 780 298" role="img" :aria-label="diagram.title"><line x1="65" y1="247" x2="740" y2="247" stroke="#a2bad0" stroke-width="2"/><line x1="65" y1="45" x2="65" y2="247" stroke="#a2bad0" stroke-width="2"/><line v-for="i in 4" :key="i" x1="65" :y1="247-i*50" x2="740" :y2="247-i*50" stroke="#e0eaf2" stroke-width="1" stroke-dasharray="7 5"/><g v-for="(s,i) in diagram.series" :key="i"><polyline :points="seriesLine(s.values)" fill="none" :stroke="s.color" :stroke-width="selectedIndex===i?5:3" stroke-linecap="round" stroke-linejoin="round"/><circle v-for="(v,j) in s.values" :key="j" :cx="65+j*(675/(s.values.length-1))" :cy="247-v*200/chartMax" r="5" :fill="s.color" stroke="white" stroke-width="1.5"/></g><text v-for="(l,i) in diagram.xLabels" :key="i" :x="65+i*(675/(diagram.xLabels.length-1))" y="275" text-anchor="middle" font-size="11" fill="#678098">{{l}}</text></svg><div class="vd-line-legend"><button v-for="(s,i) in diagram.series" :key="i" :class="{'picked':selectedIndex===i}" @click="select(i)"><i :style="{background:s.color}"></i>{{s.name}}</button></div><small>数据说明：本图为教学示例，不表示任何真实工程的测量结果。</small></div>
      <!-- 考试公式比普通长段落更易记忆 -->
      <div v-else-if="diagram.kind==='formula'" class="vd-formula-grid"><button v-for="(item,i) in diagram.items" :key="i" :class="{'picked':selectedIndex===i}" @click="select(i)" :aria-pressed="selectedIndex===i"><span>公式 0{{i+1}}</span><strong>{{item.label}}</strong><code>{{item.detail}}</code></button></div>

      <div v-else-if="diagram.kind==='path'" class="visual-flow" role="group" :aria-label="diagram.title">
        <button v-for="(step,i) in diagram.items" :key="i" class="visual-flow-node" :class="{'picked':selectedIndex===i}" @click="select(i)" :aria-pressed="selectedIndex===i"><b>{{nodeNumber(i)}}</b><strong>{{step.label}}</strong><span>{{i===diagram.items.length-1?'完成':'下一步 →'}}</span></button>
      </div>
      <div v-else-if="diagram.kind==='compare'" class="visual-compare" role="group" :aria-label="diagram.title">
        <button v-for="(item,i) in diagram.items" :key="i" class="visual-compare-card" :class="['visual-tone-'+(i%5),{'picked':selectedIndex===i}]" :aria-pressed="selectedIndex===i" @click="select(i)"><span class="compare-number">{{nodeNumber(i)}}</span><strong>{{item.label}}</strong><span class="compare-preview">{{item.detail}}</span><span class="compare-more">点选查看重点 ↗</span></button>
      </div>
      <div v-else-if="diagram.kind==='layers'" class="visual-stack" role="group" :aria-label="diagram.title">
        <button v-for="(item,i) in diagram.items" :key="i" class="visual-stack-layer" :class="['visual-tone-'+(i%5),{'picked':selectedIndex===i}]" @click="select(i)" :aria-pressed="selectedIndex===i"><span class="layer-index">{{nodeNumber(i)}}</span><strong>{{item.label}}</strong><span class="layer-desc">{{item.detail}}</span></button>
      </div>
      <div v-else-if="diagram.kind==='cycle'" class="visual-cycle-layout"><div class="visual-cycle-donut" :style="{background:cycleGradient}"><div class="visual-cycle-hole"><small>持续循环</small><strong>{{diagram.center||diagram.title}}</strong><span>↻</span></div></div><div class="visual-cycle-steps" role="group" :aria-label="diagram.title"><button v-for="(item,i) in diagram.items" :key="i" :class="['visual-tone-'+(i%5),{'picked':selectedIndex===i}]" @click="select(i)" :aria-pressed="selectedIndex===i"><span>{{nodeNumber(i)}}</span><strong>{{item.label}}</strong></button></div></div>
      <div v-else-if="diagram.kind==='triangle'" class="visual-triangle-layout"><svg class="visual-triangle-svg" viewBox="0 0 500 305" role="img" :aria-label="diagram.title"><defs><linearGradient :id="'triGradient-'+diagram.id" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e0eaff"/><stop offset="100%" stop-color="#d5f5ee"/></linearGradient></defs><polygon points="250,25 465,275 35,275" :fill="'url(#triGradient-'+diagram.id+')'" stroke="#8aa2d5" stroke-width="2.5"/><polygon points="250,79 405,258 95,258" fill="none" stroke="#ffffff" stroke-opacity=".85" stroke-width="3" stroke-dasharray="7 6"/><text x="250" y="205" text-anchor="middle" class="triangle-core">{{diagram.center||'协同发展'}}</text><circle cx="250" cy="25" r="13" fill="#4d75de"/><circle cx="465" cy="275" r="13" fill="#39b3a9"/><circle cx="35" cy="275" r="13" fill="#f6ad61"/></svg><div class="visual-triangle-key" role="group" :aria-label="diagram.title"><button v-for="(item,i) in diagram.items" :key="i" :class="['visual-tone-'+i,{'picked':selectedIndex===i}]" @click="select(i)" :aria-pressed="selectedIndex===i"><span>{{String.fromCharCode(65+i)}}</span><strong>{{item.label}}</strong></button></div></div>
      <div v-else-if="diagram.kind==='pyramid'" class="visual-pyramid" role="group" :aria-label="diagram.title"><button v-for="(item,i) in diagram.items" :key="i" class="visual-pyramid-level" :class="['visual-tone-'+(i%5),{'picked':selectedIndex===i}]" :style="{width:(46+i*13)+'%'}" @click="select(i)" :aria-pressed="selectedIndex===i"><strong>{{item.label}}</strong></button></div>
      <div v-else-if="diagram.kind==='wheel'" class="visual-wheel"><div class="visual-wheel-connector" aria-hidden="true"></div><div class="visual-wheel-core"><span>核心结构</span><strong>{{diagram.center||'知识体系'}}</strong><small>{{diagram.items.length}} 个模块</small></div><button v-for="(item,i) in diagram.items" :key="i" class="visual-wheel-item" :class="['visual-tone-'+(i%5),{'picked':selectedIndex===i}]" :style="wheelStyle(i)" @click="select(i)" :aria-pressed="selectedIndex===i"><span>{{nodeNumber(i)}}</span><strong>{{item.label}}</strong></button></div>
    </div>
    <div class="visual-detail" aria-live="polite"><span class="visual-detail-icon">{{nodeNumber(selectedIndex)}}</span><div><strong>{{activeItem.label}}</strong><p>{{activeItem.detail}}</p></div></div>
    <div class="visual-foot"><p><span aria-hidden="true">✦</span> {{diagram.insight}}</p><button @click="$emit('navigate',diagram.topicId)">学习对应知识点 <span aria-hidden="true">↗</span></button></div>
  </section>
  `
};
