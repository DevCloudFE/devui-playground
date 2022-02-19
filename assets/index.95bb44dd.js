var q=Object.defineProperty;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var D=(n,e,t)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_=(n,e)=>{for(var t in e||(e={}))H.call(e,t)&&D(n,t,e[t]);if(C)for(var t of C(e))G.call(e,t)&&D(n,t,e[t]);return n};var p=(n,e,t)=>(D(n,typeof e!="symbol"?e+"":e,t),t);import{u as Z,c as O,a as U,F as K,d as E,b as W,r as L,I as X,e as Y,f as Q,g as ee,o as f,h as w,i as d,w as l,j as A,k as $,l as g,m as k,n as y,p as I,t as te,q as N,s as m,v as M,x,y as se,z as ne,A as ie,R as oe,B as re,C as ae,D as ce,E as le,G as ue}from"./vendor.cbd434a5.js";const pe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};pe();const de=n=>btoa(unescape(encodeURIComponent(n))),ve=n=>decodeURIComponent(escape(atob(n))),F=n=>Z(`https://data.jsdelivr.com/v1/package/npm/${n}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,b=(n,e,t="")=>{const s=e?`@${e}`:"";return`https://unpkg.com/${n}${s}${t}`},fe=()=>{const n=F("vue");return O(()=>{var e;return(e=n.value)==null?void 0:e.filter(t=>U(t,"3.2.0",">="))})},me=()=>{const n=F("vue-devui");return O(()=>{var e;return(e=n.value)==null?void 0:e.filter(t=>U(t,"1.0.0-beta.1",">="))})},he="modulepreload",P={},ge="./",R=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${ge}${s}`,s in P)return;P[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":he,i||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),i)return new Promise((a,c)=>{r.addEventListener("load",a),r.addEventListener("error",c)})})).then(()=>e())};var _e=`<!DOCTYPE html>
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
`;const De=async n=>{const e=["devui.js","import-map.json"],{default:t}=await R(()=>import("./jszip.min.e44410ec.js").then(function(a){return a.j}),["assets/jszip.min.e44410ec.js","assets/vendor.cbd434a5.js"]),s=new t;s.file("index.html",_e),s.file("package.json",Ie),s.file("vite.config.js",be),s.file("README.md",je);const i=s.folder("src");i==null||i.file("main.js",ye);const o=n.getFiles();for(const a in o){if(e.includes(a))continue;let c=o[a];a==="App.vue"&&(c=c.replace(`import { setupDevui } from './devui.js'
`,"").replace(`// don't remove
`,"").replace(`setupDevui()
`,"")),i==null||i.file(a,c)}const r=await s.generateAsync({type:"blob"});K.exports.saveAs(r,"vue-devui-starter.zip")},we={class:"flex justify-between p-2"},ke=k("h1",{class:"text-base"}," DevUI Playground ",-1),xe=y(" Download "),Se=y(" Share "),Ve=y(" GitHub "),Ce=E({props:{store:null},setup(n){const e=n,{success:t,warning:s}=W(),i=async()=>{if(!navigator.clipboard){s("navigator.clipboard is undefined");return}await navigator.clipboard.writeText(location.href),t("Current URL has been copied to clipboard.")},o=L({Vue:{name:"Vue",vers:fe(),activeVer:e.store.versions.Vue,isLoading:!1},DevUI:{name:"DevUI",vers:me(),activeVer:e.store.versions.DevUI,isLoading:!1}}),r=async(a,c)=>{o[a].isLoading=!0,await e.store.setVersion(a,c),o[a].isLoading=!1};return(a,c)=>{const T=X,B=Y,V=Q,z=N,j=ee;return f(),w("div",we,[ke,d(V,null,{default:l(()=>[(f(!0),w(A,null,$(g(o),u=>(f(),I(z,{key:u.name,spinning:u.isLoading},{default:l(()=>[d(V,null,{default:l(()=>[y(te(u.name)+": ",1),d(B,{value:u.activeVer,"onUpdate:value":[v=>u.activeVer=v,v=>r(u.name,v)],class:"min-w-32",searchable:!0},{default:l(()=>[(f(!0),w(A,null,$(u.vers,v=>(f(),I(T,{key:v,label:v,value:v},null,8,["label","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1024)]),_:2},1032,["spinning"]))),128)),d(j,{onClick:c[0]||(c[0]=u=>g(De)(n.store))},{default:l(()=>[xe]),_:1}),d(j,{mode:"text",onClick:i},{default:l(()=>[Se]),_:1}),d(j,{mode:"link",href:"https://github.com/brenner8023/devui-playground",target:"_blank",rel:"noopener noreferrer"},{default:l(()=>[Ve]),_:1})]),_:1})])}}}),S="devui.js",Oe=`
import { getCurrentInstance } from 'vue'
import DevUI from 'vue-devui'

const install = (app) => {
  app.use(DevUI)
};

const loadCss = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '${b("vue-devui","1.0.0-beta.14","/style.css")}'
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
  <d-button style="margin-right: 8px">Primary</d-button>
  <d-button :disabled="true">Disabled</d-button>
</template>

<script setup lang="ts">
import { setupDevui } from './devui.js'

// don't remove
setupDevui()
<\/script>`,Ue=n=>{const{Vue:e,DevUI:t}=n;return{"vue-devui":{pkg:"vue-devui",version:t,file:"/vue-devui.es.js"},vue:{pkg:"vue",version:e,file:"/dist/vue.esm-browser.js"}}},Ee=(n="")=>{let e={[h]:new m(h,J)};if(n)try{e={};const t=JSON.parse(ve(n));for(const s of Object.keys(t))e[s]=new m(s,t[s])}catch(t){console.log(t),console.log("Json parse error: src/repl-store/index.ts")}return e},Le=n=>{const e=b("@vue/compiler-sfc",n,"/dist/compiler-sfc.esm-browser.js"),t=b("@vue/runtime-dom",n,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},Ae=n=>{const e=_({},Ue(n));return Object.fromEntries(Object.entries(e).map(([t,s])=>[t,b(s.pkg,s.version,s.file)]))};class $e{constructor({serializedState:e="",versions:t={Vue:"3.2.29",DevUI:"latest"}}){p(this,"state");p(this,"compiler");p(this,"options");p(this,"versions");p(this,"initialShowOutput",!1);p(this,"initialOutputMode","preview");p(this,"pendingCompiler",null);const s=Ee(e),i=s[h]?h:Object.keys(s)[0];this.state=L({mainFile:i,files:s,activeFile:s[i],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new m("import-map.json",JSON.stringify({imports:{}},null,2)))}async initStore(){await this.setVueVersion(this.versions.Vue),this.state.files[S]=new m(S,Oe,!0),M(()=>x(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==h&&x(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new m(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){(window==null?void 0:window.confirm(`Confirm to delete ${e}?`))&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=h){const s={};t===h&&!e[t]&&(s[t]=new m(t,J));for(const[i,o]of Object.entries(e))s[i]=new m(i,o);for(const i of Object.values(s))await x(this,i);this.state.mainFile=t,this.state.files=s,this.initImportMap(),this.setActive(t)}setImportMap(e){try{this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}catch(t){this.state.errors=[`stringify error in import-map.json: ${t.message}`]}}serialize(){const e=Object.entries(this.getFiles()).filter(([s])=>s!==S).map(([s,i])=>{if(s==="import-map.json")try{const o=JSON.stringify(this.getImportMap());return[s,o]}catch{}return[s,i]}),t=JSON.stringify(Object.fromEntries(e));return`#${de(t)}`}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}addDeps(){const e=this.getImportMap();e.imports=_(_({},e.imports),Ae(this.versions)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"DevUI":await this.setDevuiVersion(t);break;case"Vue":await this.setVueVersion(t);break}}async setDevuiVersion(e){this.versions.DevUI=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:s}=Le(e);this.pendingCompiler=R(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=s,this.versions.Vue=e,this.addDeps()}}var Ne=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t};const Me=n=>(re("data-v-e2dcf550"),n=n(),ae(),n),Fe=Me(()=>k("div",{class:"ixp-height-full"},null,-1)),Pe={class:"flex flex-col ixp-height-full"},Re=E({setup(n){const e=se(!0),t=new $e({serializedState:location.hash.slice(1)});return t.initStore().then(()=>{e.value=!1}),M(()=>history.replaceState({},"",t.serialize())),(s,i)=>{const o=N,r=Ce,a=ne;return f(),I(a,null,{default:l(()=>[e.value?(f(),I(o,{key:0,tip:"loading..."},{default:l(()=>[Fe]),_:1})):ie("",!0),k("div",Pe,[d(r,{store:g(t)},null,8,["store"]),d(g(oe),{class:"grow","auto-resize":"","show-compile-output":"",store:g(t),"clear-console":!1},null,8,["store"])])]),_:1})}}});var Je=Ne(Re,[["__scopeId","data-v-e2dcf550"]]);ce(le);ue(Je).mount("#app");
