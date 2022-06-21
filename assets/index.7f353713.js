var H=Object.defineProperty;var C=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var k=(n,e,t)=>e in n?H(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_=(n,e)=>{for(var t in e||(e={}))q.call(e,t)&&k(n,t,e[t]);if(C)for(var t of C(e))G.call(e,t)&&k(n,t,e[t]);return n};var p=(n,e,t)=>(k(n,typeof e!="symbol"?e+"":e,t),t);import{u as Z,c as O,a as U,F as K,d as E,b as W,r as L,I as X,e as Y,f as Q,g as ee,o as f,h as x,i as d,w as c,j as A,k as N,l as g,m as S,n as y,p as I,t as te,q as $,s as m,v as F,x as b,y as se,z as ne,A as ie,R as oe,B as re,C as ae,D as le,E as ce,G as ue}from"./vendor.cbd434a5.js";const pe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};pe();const de=n=>btoa(unescape(encodeURIComponent(n))),ve=n=>decodeURIComponent(escape(atob(n))),M=n=>Z(`https://data.jsdelivr.com/v1/package/npm/${n}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,j=(n,e,t="")=>{const s=e?`@${e}`:"";return`https://unpkg.com/${n}${s}${t}`},fe=()=>{const n=M("vue");return O(()=>{var e;return(e=n.value)==null?void 0:e.filter(t=>U(t,"3.2.34",">="))})},me=()=>{const n=M("vue-devui");return O(()=>{var e;return(e=n.value)==null?void 0:e.filter(t=>U(t,"1.0.0-rc.5",">="))})},he="modulepreload",R={},ge="./",P=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${ge}${s}`,s in R)return;R[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":he,i||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),i)return new Promise((a,l)=>{r.addEventListener("load",a),r.addEventListener("error",l)})})).then(()=>e())};var _e=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue DevUI Starter</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
`,ye=`import { createApp } from 'vue'
import DevUI from 'vue-devui'
import 'vue-devui/style.css'

import App from './App.vue'

createApp(App).use(DevUI).mount('#app')
`,Ie=`{
  "name": "devui-starter",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.0",
    "vue-devui": "latest"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.1.0",
    "@vue/compiler-sfc": "^3.2.0",
    "vite": "^2.7.13"
  }
}
`,be=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
`,je=`# Vue DevUI Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

\`\`\`sh
pnpm i
pnpm run dev
\`\`\`
`;const De=async n=>{const e=["devui.js","import-map.json"],{default:t}=await P(()=>import("./jszip.min.e44410ec.js").then(function(a){return a.j}),["assets/jszip.min.e44410ec.js","assets/vendor.cbd434a5.js"]),s=new t;s.file("index.html",_e),s.file("package.json",Ie),s.file("vite.config.js",be),s.file("README.md",je);const i=s.folder("src");i==null||i.file("main.js",ye);const o=n.getFiles();for(const a in o){if(e.includes(a))continue;let l=o[a];a==="App.vue"&&(l=l.replace(`import { setupDevui } from './devui.js'
`,"").replace(`// don't remove
`,"").replace(`setupDevui()
`,"")),i==null||i.file(a,l)}const r=await s.generateAsync({type:"blob"});K.exports.saveAs(r,"vue-devui-starter.zip")},we={class:"flex justify-between p-2"},ke=S("h1",{class:"text-base"}," DevUI Playground ",-1),xe=y(" Download "),Se=y(" Share "),Ve=y(" GitHub "),Ce=E({props:{store:null},setup(n){const e=n,{success:t,warning:s}=W(),i=async()=>{if(!navigator.clipboard){s("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},o=L({Vue:{name:"Vue",vers:fe(),activeVer:e.store.versions.Vue,isLoading:!1},DevUI:{name:"DevUI",vers:me(),activeVer:e.store.versions.DevUI,isLoading:!1}}),r=async(a,l)=>{o[a].isLoading=!0,await e.store.setVersion(a,l),o[a].isLoading=!1};return(a,l)=>{const T=X,B=Y,V=Q,z=$,w=ee;return f(),x("div",we,[ke,d(V,null,{default:c(()=>[(f(!0),x(A,null,N(g(o),u=>(f(),I(z,{key:u.name,spinning:u.isLoading},{default:c(()=>[d(V,null,{default:c(()=>[y(te(u.name)+": ",1),d(B,{value:u.activeVer,"onUpdate:value":[v=>u.activeVer=v,v=>r(u.name,v)],class:"min-w-32",searchable:!0},{default:c(()=>[(f(!0),x(A,null,N(u.vers,v=>(f(),I(T,{key:v,label:v,value:v},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)]),_:2},1032,["spinning"]))),128)),d(w,{onClick:l[0]||(l[0]=u=>g(De)(n.store))},{default:c(()=>[xe]),_:1}),d(w,{mode:"text",onClick:i},{default:c(()=>[Se]),_:1}),d(w,{mode:"link",href:"https://github.com/brenner8023/devui-playground",target:"_blank",rel:"noopener noreferrer"},{default:c(()=>[Ve]),_:1})]),_:1})])}}}),D="devui.js",Oe=`
import { getCurrentInstance } from 'vue'
import DevUI from 'vue-devui'

const install = (app) => {
  app.use(DevUI)
};

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '#DEVUI_CSS_HREF#'
  document.body.appendChild(link)
}

export const setupDevui = () => {
  const instance = getCurrentInstance()
  instance.appContext.app.use({ install })
  loadCss()
};`,h="App.vue",J=`<template>
  <h1>
    Hello, DevUI!
  </h1>
  <d-button variant="solid" style="margin-right: 8px">Primary</d-button>
  <d-button :disabled="true">Disabled</d-button>
</template>

<script setup lang="ts">
import { setupDevui } from './devui.js'

// don't remove
setupDevui()
<\/script>`,Ue=n=>{const{Vue:e,DevUI:t}=n;return{"vue-devui":{pkg:"vue-devui",version:t,file:"/vue-devui.es.js"},vue:{pkg:"vue",version:e,file:"/dist/vue.esm-browser.js"},"vue-router":{pkg:"vue-router",version:"latest",file:"/dist/vue-router.esm-browser.js"},"@floating-ui/dom":{pkg:"@floating-ui/dom",version:"latest",file:"/dist/floating-ui.dom.esm.js"},"@floating-ui/core":{pkg:"@floating-ui/core",version:"latest",file:"/dist/floating-ui.core.esm.js"},"@vueuse/core":{pkg:"@vueuse/core",version:"latest",file:"/index.mjs"},"@vue/devtools-api":{pkg:"@vue/devtools-api",version:"latest",file:"/lib/esm/index.js"},"@vueuse/shared":{pkg:"@vueuse/shared",version:"latest",file:"/index.mjs"},"vue-demi":{pkg:"vue-demi",version:"latest",file:"/lib/index.mjs"}}},Ee=(n="")=>{let e={[h]:new m(h,J)};if(n)try{e={};const t=JSON.parse(ve(n));for(const s of Object.keys(t))e[s]=new m(s,t[s])}catch(t){console.log(t),console.log("Json parse error: src/repl-store/index.ts")}return e},Le=n=>{const e=j("@vue/compiler-sfc",n,"/dist/compiler-sfc.esm-browser.js"),t=j("@vue/runtime-dom",n,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Ae=n=>{const e=_({},Ue(n));return Object.fromEntries(Object.entries(e).map(([t,s])=>[t,j(s.pkg,s.version,s.file)]))};class Ne{constructor({serializedState:e="",versions:t={Vue:"latest",DevUI:"latest"}}){p(this,"state");p(this,"compiler");p(this,"options");p(this,"versions");p(this,"initialShowOutput",!1);p(this,"initialOutputMode","preview");p(this,"pendingCompiler",null);const s=Ee(e),i=s[h]?h:Object.keys(s)[0];this.state=L({mainFile:i,files:s,activeFile:s[i],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new m("import-map.json",JSON.stringify({imports:{}},null,2)))}async initStore(){await this.setVueVersion(this.versions.Vue),await this.setDevuiVersion(this.versions.DevUI),F(()=>b(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==h&&b(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new m(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=h){const s={};t===h&&!e[t]&&(s[t]=new m(t,J));for(const[i,o]of Object.entries(e))s[i]=new m(i,o);for(const i of Object.values(s))await b(this,i);this.state.mainFile=t,this.state.files=s,this.initImportMap(),this.setActive(t)}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}serialize(){const e=Object.entries(this.getFiles()).filter(([s])=>s!==D).map(([s,i])=>{if(s==="import-map.json")try{const o=JSON.stringify(this.getImportMap());return[s,o]}catch{}return[s,i]}),t=JSON.stringify(Object.fromEntries(e));return`#${de(t)}`}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}addDeps(){const e=this.getImportMap();e.imports=_(_({},e.imports),Ae(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"DevUI":await this.setDevuiVersion(t),b(this,this.state.files[D]);break;case"Vue":await this.setVueVersion(t);break}}async setDevuiVersion(e){this.versions.DevUI=e;const t=j("vue-devui",e,"/style.css");this.state.files[D]=new m(D,Oe.replace("#DEVUI_CSS_HREF#",t),!0),this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:s}=Le(e);this.pendingCompiler=P(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=s,this.versions.Vue=e,this.addDeps()}}var $e=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t};const Fe=n=>(re("data-v-e2dcf550"),n=n(),ae(),n),Me=Fe(()=>S("div",{class:"ixp-height-full"},null,-1)),Re={class:"flex flex-col ixp-height-full"},Pe=E({setup(n){const e=se(!0),t=new Ne({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),F(()=>history.replaceState({},"",t.serialize())),(s,i)=>{const o=$,r=Ce,a=ne;return f(),I(a,null,{default:c(()=>[e.value?(f(),I(o,{key:0,tip:"loading..."},{default:c(()=>[Me]),_:1})):ie("",!0),S("div",Re,[d(r,{store:g(t)},null,8,["store"]),d(g(oe),{class:"grow","auto-resize":"","show-compile-output":"",store:g(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var Je=$e(Pe,[["__scopeId","data-v-e2dcf550"]]);le(ce);ue(Je).mount("#app");
