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
    sourceLabel(){return this.diagram.sourcePage?'资料：'+(this.diagram.sourceDocument||'章节讲义')+' · P'+this.diagram.sourcePage:'章节知识结构整理'}
  },
  watch:{'diagram.id'(){this.selectedIndex=0}},
  methods:{
    select(i){this.selectedIndex=i},
    wheelStyle(i){const n=this.wheelSize,angle=-Math.PI/2+i*Math.PI*2/n;return {left:(50+39*Math.cos(angle))+'%',top:(50+35*Math.sin(angle))+'%'}},
    nodeNumber(i){return String(i+1).padStart(2,'0')}
  },
  template:`
  <section class="exam-visual" :class="['visual-kind-'+diagram.kind,{'is-dense':dense}]" :aria-label="diagram.title">
    <div class="visual-head">
      <div class="visual-symbol" aria-hidden="true">✳</div>
      <div class="visual-heading"><div class="visual-eyebrow">知识图解 · {{diagram.items.length}} 个要点</div><h3>{{diagram.title}}</h3><p>{{diagram.subtitle}}</p></div>
      <span class="visual-page">{{sourceLabel}}</span>
    </div>
    <div class="visual-canvas" :class="'visual-canvas-'+diagram.kind">
      <div v-if="diagram.kind==='path'" class="visual-flow" role="group" :aria-label="diagram.title">
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
