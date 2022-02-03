var D=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var _=(i,e,t)=>e in i?D(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,f=(i,e)=>{for(var t in e||(e={}))L.call(e,t)&&_(i,t,e[t]);if(k)for(var t of k(e))$.call(e,t)&&_(i,t,e[t]);return i};var a=(i,e,t)=>(_(i,typeof e!="symbol"?e+"":e,t),t);import{r as N,F as c,w as x,c as g,d as y,o as m,a as I,u as C,R as E,b as M,I as V,e as R,f as U,g as p,h as d,i as w,j as S,k as F,l as P,m as A,n as B,p as J,q as T,s as q,t as z,v as H}from"./vendor.f98ffc12.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};G();const K="modulepreload",j={},W="/",X=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${W}${s}`,s in j)return;j[s]=!0;const o=s.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":K,o||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),o)return new Promise((u,v)=>{r.addEventListener("load",u),r.addEventListener("error",v)})})).then(()=>e())},Q=i=>btoa(unescape(encodeURIComponent(i))),Y=i=>decodeURIComponent(escape(atob(i))),h=(i,e,t="")=>{const s=e?`@${e}`:"";return`https://unpkg.com/${i}${s}${t}`},b="devui.js",Z=`
import { getCurrentInstance } from 'vue'
import DevUI from 'vue-devui'

const install = (app) => {
  app.use(DevUI)
};

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '${h("vue-devui","1.0.0-beta.14","/style.css")}'
  document.body.appendChild(link)
}

export const setupDevui = () => {
  const instance = getCurrentInstance()
  instance.appContext.app.use({ install })
  loadCss()
};`,l="App.vue",O=`<template>
  <h1>
    Hello, DevUI!
  </h1>
  <d-button
    :showLoading="showLoading"
    @click="handleClick">
    click me!
  </d-button>
</template>

<script setup lang="ts">
import { setupDevui } from './devui.js'
import { ref, onBeforeUnmount } from 'vue'

// don't remove
setupDevui()

const showLoading = ref(false)
const timerId = ref<number | null>(null)
const handleClick = () => {
  showLoading.value = true;
  timerId.value = window?.setTimeout(() => {
    showLoading.value = false;
  }, 2000);
}

onBeforeUnmount(() => {
  timerId.value && window?.clearTimeout(timerId.value)
})
<\/script>`,ee=i=>{const{vue:e,devui:t}=i;return{"vue-devui":{pkg:"vue-devui",version:t,file:"/vue-devui.es.js"},vue:{pkg:"vue",version:e,file:"/dist/vue.esm-browser.js"}}},te=(i="")=>{let e={[l]:new c(l,O)};if(i)try{e={};const t=JSON.parse(Y(i));for(const s of Object.keys(t))e[s]=new c(s,t[s])}catch(t){console.log(t),console.log("Json parse error: src/repl-store/index.ts")}return e},se=i=>{const e=h("@vue/compiler-sfc",i,"/dist/compiler-sfc.esm-browser.js"),t=h("@vue/runtime-dom",i,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},ie=i=>{const e=f({},ee(i));return Object.fromEntries(Object.entries(e).map(([t,s])=>[t,h(s.pkg,s.version,s.file)]))};class oe{constructor({serializedState:e="",versions:t={vue:"3.2.29",devui:"1.0.0-beta.14"}}){a(this,"state");a(this,"compiler");a(this,"options");a(this,"versions");a(this,"initialShowOutput",!1);a(this,"initialOutputMode","preview");a(this,"pendingCompiler",null);let s=te(e),o=s[l]?l:Object.keys(s)[0];this.state=N({mainFile:o,files:s,activeFile:s[o],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new c("import-map.json",JSON.stringify({imports:{}},null,2)))}async initStore(){await this.setVueVersion(this.versions.vue),this.state.files[b]=new c(b,Z,!0),x(()=>g(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==l&&g(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new c(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=l){const s={};t===l&&!e[t]&&(s[t]=new c(t,O));for(const[o,n]of Object.entries(e))s[o]=new c(o,n);for(const o of Object.values(s))await g(this,o);this.state.mainFile=t,this.state.files=s,this.initImportMap(),this.setActive(t)}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}serialize(){const e=Object.entries(this.getFiles()).filter(([s])=>s!==b).map(([s,o])=>{if(s==="import-map.json")try{const n=JSON.stringify(this.getImportMap());return[s,n]}catch{}return[s,o]}),t=JSON.stringify(Object.fromEntries(e));return`#${Q(t)}`}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}addDeps(){const e=this.getImportMap();e.imports=f(f({},e.imports),ie(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"devui":await this.setDevuiVersion(t);break;case"vue":await this.setVueVersion(t);break}}async setDevuiVersion(e){this.versions.devui=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:s}=se(e);this.pendingCompiler=X(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=s,this.versions.vue=e,this.addDeps()}}const ne=y({emits:["init-success"],setup(i,{emit:e}){const t=new oe({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e("init-success")}),x(()=>history.replaceState({},"",t.serialize())),(s,o)=>(m(),I(C(E),{"auto-resize":"","show-compile-output":"",store:C(t),"clear-console":!1},null,8,["store"]))}}),re={class:"flex justify-between p-2"},ae=w("h1",{class:"text-base"}," DevUI Playground ",-1),ce=S(" Share "),le=S(" GitHub "),ue=y({setup(i){const{success:e,warning:t}=M(),s=async()=>{if(!navigator.clipboard){t("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),e("Current URL has been copied to clipboard.")};return(o,n)=>{const r=V,u=R;return m(),U("div",re,[ae,p(u,null,{default:d(()=>[p(r,{mode:"text",onClick:s},{default:d(()=>[ce]),_:1}),p(r,{mode:"link",href:"https://github.com/brenner8023/devui-playground",target:"_blank",rel:"noopener noreferrer"},{default:d(()=>[le]),_:1})]),_:1})])}}});var pe=(i,e)=>{const t=i.__vccOpts||i;for(const[s,o]of e)t[s]=o;return t};const de=i=>(J("data-v-94835346"),i=i(),T(),i),fe=de(()=>w("div",{class:"ixp-height-full"},null,-1)),me={class:"flex flex-col ixp-height-full"},he=y({setup(i){const e=F(!0),t=()=>{e.value=!1};return(s,o)=>{const n=P,r=ue,u=ne,v=A;return m(),I(v,null,{default:d(()=>[e.value?(m(),I(n,{key:0,tip:"loading..."},{default:d(()=>[fe]),_:1})):B("",!0),w("div",me,[p(r),p(u,{class:"grow",onInitSuccess:o[0]||(o[0]=_e=>t())})])]),_:1})}}});var ve=pe(he,[["__scopeId","data-v-94835346"]]);q(z);H(ve).mount("#app");
