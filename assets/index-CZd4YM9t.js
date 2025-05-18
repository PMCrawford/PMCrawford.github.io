import{initializeApp as _c}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const yc=["as if!","booyah!","talk to the hand","whatever!","all that and a bag of chips","da bomb","home skillet","what's the 411?","you go, girl!","raise the roof","don't go there","take a chill pill","wassup?!","no duh","I know, right?","off the hook","my bad","word","mad props","not even!","scrub alert","you got served","gettin' jiggy wit it","hella cool","smell ya later","fo' shizzle","bling bling","sup dawg","you trippin'","tight!","aiight","true dat","phat","I'm outtie","so fetch","OMG Becky!","n'sync 4ever","don't hate","talk to the hand","oh snap!","you wish","LOLZ","PSYCH!","I’m like, whatever","the struggle is real","sweet!","gag me with a spoon","you down?","right on","yo homes","total bummer","not cool, bro","I'm totally buggin'","no diggity","freakin' awesome","cray cray","I’m AOL away","brb","peace out","later skater","catch ya on the flip side","word up","kickin’ it","ride or die","let’s bounce","don’t have a cow, man","cowabunga!","that’s wack","don’t be a poser","old school","majorly lame","I’m so sure","trippin’ hard","you’re such a dweeb","righteous!","no way!","totes","get real","deal with it","meh","so last season","you’re buggin'","whoa!","what a riot","get over it","don’t even go there","cool beans","this is fly","you da man","let’s roll","grindin’","busted!","that’s hot","girl power","just chillin’","don’t touch that dial","u got it dude","zip it!","you feel me?","gettin’ crunk","yo yo yo","who let the dogs out?","nailed it","whatever floats your boat","sick moves","this party’s bumpin’","blingin’","it’s all good","shut the front door","what’s crackin’?","YOLO (before it was cool)","backstreet’s back","you can’t sit with us","I want my MTV","I’ll be back","I’m the bomb dot com","betamax rules","that’s tight","don’t be salty","this is how we do it","high five!","I pity the fool","I ain't mad atcha","sup homeslice","WTF mate?","everything’s gravy","srsly?","talkin’ smack","time to bounce","you’re harshin’ my vibe","not the boss of me","OMG no way!","flippin’ sweet","peace, love, and tie-dye","you cray","fo real","holla!","big pimpin’","don’t play","rock on!","oh em gee","you just got punk’d","that’s my jam","pop lock and drop it","2 legit 2 quit","you know it!","quit frontin’","you got the juice now","whatever major loser","this is how I roll","you ain't ready","I can't even","shwing!","so random","foolish mortal","fully loaded","total drama","hey now!","I'm vibin’","can’t touch this"],Ec=["peace out","later skater","smell ya later","catch ya on the flip side","I’m outtie","TTYL","gotta bounce","brb","talk soon!","see ya, wouldn’t wanna be ya","be easy","I’m ghost","stay cool","signing off","don’t be a stranger","bye for now","holla back","take it easy","don’t forget to write","safe travels","keep it real","hit me up","don’t get lost","farewell amigo","hasta la vista, baby"],vc=()=>{};var xo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Tc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|c>>4;let I=(c&15)<<2|f>>6,C=f&63;h||(C=64,a||(I=64)),r.push(e[m],e[y],e[I],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Wa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Tc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||y==null)throw new Ic;const I=o<<2|c>>4;if(r.push(I),f!==64){const C=c<<4&240|f>>2;if(r.push(C),y!==64){const V=f<<6&192|y;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wc=function(n){const t=Wa(n);return Ya.encodeByteArray(t,!0)},mr=function(n){return wc(n).replace(/\./g,"")},Ac=function(n){try{return Ya.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=()=>Rc().__FIREBASE_DEFAULTS__,Cc=()=>{if(typeof process>"u"||typeof xo>"u")return;const n=xo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ac(n[1]);return t&&JSON.parse(t)},zs=()=>{try{return vc()||bc()||Cc()||Pc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sc=n=>{var t,e;return(e=(t=zs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Vc=n=>{const t=Sc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Xa=()=>{var n;return(n=zs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n){return n.endsWith(".cloudworkstations.dev")}async function Nc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[mr(JSON.stringify(e)),mr(JSON.stringify(a)),""].join(".")}const pn={};function Oc(){const n={prod:[],emulator:[]};for(const t of Object.keys(pn))pn[t]?n.emulator.push(t):n.prod.push(t);return n}function xc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Mo=!1;function Ja(n,t){if(typeof window>"u"||typeof document>"u"||!Gs(window.location.host)||pn[n]===t||pn[n]||Mo)return;pn[n]=t;function e(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=Oc().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,C){I.setAttribute("width","24"),I.setAttribute("id",C),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function f(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Mo=!0,a()},I}function m(I,C){I.setAttribute("id",C),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function y(){const I=xc(r),C=e("text"),V=document.getElementById(C)||document.createElement("span"),N=e("learnmore"),S=document.getElementById(N)||document.createElement("a"),B=e("preprendIcon"),U=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const $=I.element;c($),m(S,N);const X=f();h(U,B),$.append(U,V,S,X),document.body.appendChild($)}o?(V.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lc(){var n;const t=(n=zs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fc(){return!Lc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uc(){try{return typeof indexedDB=="object"}catch{return!1}}function Bc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="FirebaseError";class Ge extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=qc,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?jc(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ge(s,c,r)}}function jc(n,t){return n.replace($c,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const $c=/\{\$([^}]+)}/g;function pr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Lo(o)&&Lo(a)){if(!pr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Lo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){return n&&n._delegate?n._delegate:n}class vn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Dc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hc(t))try{this.getOrInitializeService({instanceIdentifier:pe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pe){return this.instances.has(t)}getOptions(t=pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=pe){return this.component?this.component.multipleInstances?t:pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gc(n){return n===pe?void 0:n}function Hc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new zc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Qc={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Wc=G.INFO,Yc={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Xc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Yc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tu{constructor(t){this.name=t,this._logLevel=Wc,this._logHandler=Xc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const Jc=(n,t)=>t.some(e=>n instanceof e);let Fo,Uo;function Zc(){return Fo||(Fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function th(){return Uo||(Uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eu=new WeakMap,Is=new WeakMap,nu=new WeakMap,fs=new WeakMap,Hs=new WeakMap;function eh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Jt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&eu.set(e,n)}).catch(()=>{}),Hs.set(t,n),t}function nh(n){if(Is.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,t)}let ws={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||nu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function rh(n){ws=n(ws)}function sh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ms(this),t,...e);return nu.set(r,t.sort?t.sort():[t]),Jt(r)}:th().includes(n)?function(...t){return n.apply(ms(this),t),Jt(eu.get(this))}:function(...t){return Jt(n.apply(ms(this),t))}}function ih(n){return typeof n=="function"?sh(n):(n instanceof IDBTransaction&&nh(n),Jc(n,Zc())?new Proxy(n,ws):n)}function Jt(n){if(n instanceof IDBRequest)return eh(n);if(fs.has(n))return fs.get(n);const t=ih(n);return t!==n&&(fs.set(n,t),Hs.set(t,n)),t}const ms=n=>Hs.get(n);function oh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Jt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Jt(a.result),h.oldVersion,h.newVersion,Jt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const ah=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],ps=new Map;function Bo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ps.get(t))return ps.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=uh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ah.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ps.set(t,o),o}rh(n=>({...n,get:(t,e,r)=>Bo(t,e)||n.get(t,e,r),has:(t,e)=>!!Bo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ch(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ch(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const As="@firebase/app",qo="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new tu("@firebase/app"),hh="@firebase/app-compat",dh="@firebase/analytics-compat",fh="@firebase/analytics",mh="@firebase/app-check-compat",ph="@firebase/app-check",gh="@firebase/auth",_h="@firebase/auth-compat",yh="@firebase/database",Eh="@firebase/data-connect",vh="@firebase/database-compat",Th="@firebase/functions",Ih="@firebase/functions-compat",wh="@firebase/installations",Ah="@firebase/installations-compat",Rh="@firebase/messaging",bh="@firebase/messaging-compat",Ch="@firebase/performance",Ph="@firebase/performance-compat",Sh="@firebase/remote-config",Vh="@firebase/remote-config-compat",Dh="@firebase/storage",Nh="@firebase/storage-compat",kh="@firebase/firestore",Oh="@firebase/vertexai",xh="@firebase/firestore-compat",Mh="firebase",Lh="11.7.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]",Fh={[As]:"fire-core",[hh]:"fire-core-compat",[fh]:"fire-analytics",[dh]:"fire-analytics-compat",[ph]:"fire-app-check",[mh]:"fire-app-check-compat",[gh]:"fire-auth",[_h]:"fire-auth-compat",[yh]:"fire-rtdb",[Eh]:"fire-data-connect",[vh]:"fire-rtdb-compat",[Th]:"fire-fn",[Ih]:"fire-fn-compat",[wh]:"fire-iid",[Ah]:"fire-iid-compat",[Rh]:"fire-fcm",[bh]:"fire-fcm-compat",[Ch]:"fire-perf",[Ph]:"fire-perf-compat",[Sh]:"fire-rc",[Vh]:"fire-rc-compat",[Dh]:"fire-gcs",[Nh]:"fire-gcs-compat",[kh]:"fire-fst",[xh]:"fire-fst-compat",[Oh]:"fire-vertex","fire-js":"fire-js",[Mh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,Uh=new Map,bs=new Map;function jo(n,t){try{n.container.addComponent(t)}catch(e){Gt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function _r(n){const t=n.name;if(bs.has(t))return Gt.debug(`There were multiple attempts to register component ${t}.`),!1;bs.set(t,n);for(const e of gr.values())jo(e,n);for(const e of Uh.values())jo(e,n);return!0}function Bh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function qh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Za("app","Firebase",jh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=Lh;function Gh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(e||(e=Xa()),!e)throw Zt.create("no-options");const o=gr.get(s);if(o){if(pr(e,o.options)&&pr(r,o.config))return o;throw Zt.create("duplicate-app",{appName:s})}const a=new Kc(s);for(const h of bs.values())a.addComponent(h);const c=new $h(e,r,a);return gr.set(s,c),c}function Hh(n=Rs){const t=gr.get(n);if(!t&&n===Rs&&Xa())return Gh();if(!t)throw Zt.create("no-app",{appName:n});return t}function gn(n,t,e){var r;let s=(r=Fh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gt.warn(c.join(" "));return}_r(new vn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="firebase-heartbeat-database",Qh=1,Tn="firebase-heartbeat-store";let gs=null;function ru(){return gs||(gs=oh(Kh,Qh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),gs}async function Wh(n){try{const e=(await ru()).transaction(Tn),r=await e.objectStore(Tn).get(su(n));return await e.done,r}catch(t){if(t instanceof Ge)Gt.warn(t.message);else{const e=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(e.message)}}}async function $o(n,t){try{const r=(await ru()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,su(n)),await r.done}catch(e){if(e instanceof Ge)Gt.warn(e.message);else{const r=Zt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(r.message)}}}function su(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=1024,Xh=30;class Jh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new td(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Xh){const a=ed(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zo(),{heartbeatsToSend:r,unsentEntries:s}=Zh(this._heartbeatsCache.heartbeats),o=mr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Gt.warn(e),""}}}function zo(){return new Date().toISOString().substring(0,10)}function Zh(n,t=Yh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Go(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Go(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class td{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uc()?Bc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Wh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Go(n){return mr(JSON.stringify({version:2,heartbeats:n})).length}function ed(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){_r(new vn("platform-logger",t=>new lh(t),"PRIVATE")),_r(new vn("heartbeat",t=>new Jh(t),"PRIVATE")),gn(As,qo,n),gn(As,qo,"esm2017"),gn("fire-js","")}nd("");var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,iu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(E,T,A){for(var _=Array(arguments.length-2),At=2;At<arguments.length;At++)_[At-2]=arguments[At];return p.prototype[T].apply(E,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,g){g||(g=0);var E=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)E[T]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(T=0;16>T;++T)E[T]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],T=v.g[2];var A=v.g[3],_=p+(A^g&(T^A))+E[0]+3614090360&4294967295;p=g+(_<<7&4294967295|_>>>25),_=A+(T^p&(g^T))+E[1]+3905402710&4294967295,A=p+(_<<12&4294967295|_>>>20),_=T+(g^A&(p^g))+E[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(p^T&(A^p))+E[3]+3250441966&4294967295,g=T+(_<<22&4294967295|_>>>10),_=p+(A^g&(T^A))+E[4]+4118548399&4294967295,p=g+(_<<7&4294967295|_>>>25),_=A+(T^p&(g^T))+E[5]+1200080426&4294967295,A=p+(_<<12&4294967295|_>>>20),_=T+(g^A&(p^g))+E[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(p^T&(A^p))+E[7]+4249261313&4294967295,g=T+(_<<22&4294967295|_>>>10),_=p+(A^g&(T^A))+E[8]+1770035416&4294967295,p=g+(_<<7&4294967295|_>>>25),_=A+(T^p&(g^T))+E[9]+2336552879&4294967295,A=p+(_<<12&4294967295|_>>>20),_=T+(g^A&(p^g))+E[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(p^T&(A^p))+E[11]+2304563134&4294967295,g=T+(_<<22&4294967295|_>>>10),_=p+(A^g&(T^A))+E[12]+1804603682&4294967295,p=g+(_<<7&4294967295|_>>>25),_=A+(T^p&(g^T))+E[13]+4254626195&4294967295,A=p+(_<<12&4294967295|_>>>20),_=T+(g^A&(p^g))+E[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=g+(p^T&(A^p))+E[15]+1236535329&4294967295,g=T+(_<<22&4294967295|_>>>10),_=p+(T^A&(g^T))+E[1]+4129170786&4294967295,p=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(p^g))+E[6]+3225465664&4294967295,A=p+(_<<9&4294967295|_>>>23),_=T+(p^g&(A^p))+E[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^p&(T^A))+E[0]+3921069994&4294967295,g=T+(_<<20&4294967295|_>>>12),_=p+(T^A&(g^T))+E[5]+3593408605&4294967295,p=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(p^g))+E[10]+38016083&4294967295,A=p+(_<<9&4294967295|_>>>23),_=T+(p^g&(A^p))+E[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^p&(T^A))+E[4]+3889429448&4294967295,g=T+(_<<20&4294967295|_>>>12),_=p+(T^A&(g^T))+E[9]+568446438&4294967295,p=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(p^g))+E[14]+3275163606&4294967295,A=p+(_<<9&4294967295|_>>>23),_=T+(p^g&(A^p))+E[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^p&(T^A))+E[8]+1163531501&4294967295,g=T+(_<<20&4294967295|_>>>12),_=p+(T^A&(g^T))+E[13]+2850285829&4294967295,p=g+(_<<5&4294967295|_>>>27),_=A+(g^T&(p^g))+E[2]+4243563512&4294967295,A=p+(_<<9&4294967295|_>>>23),_=T+(p^g&(A^p))+E[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=g+(A^p&(T^A))+E[12]+2368359562&4294967295,g=T+(_<<20&4294967295|_>>>12),_=p+(g^T^A)+E[5]+4294588738&4294967295,p=g+(_<<4&4294967295|_>>>28),_=A+(p^g^T)+E[8]+2272392833&4294967295,A=p+(_<<11&4294967295|_>>>21),_=T+(A^p^g)+E[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^p)+E[14]+4259657740&4294967295,g=T+(_<<23&4294967295|_>>>9),_=p+(g^T^A)+E[1]+2763975236&4294967295,p=g+(_<<4&4294967295|_>>>28),_=A+(p^g^T)+E[4]+1272893353&4294967295,A=p+(_<<11&4294967295|_>>>21),_=T+(A^p^g)+E[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^p)+E[10]+3200236656&4294967295,g=T+(_<<23&4294967295|_>>>9),_=p+(g^T^A)+E[13]+681279174&4294967295,p=g+(_<<4&4294967295|_>>>28),_=A+(p^g^T)+E[0]+3936430074&4294967295,A=p+(_<<11&4294967295|_>>>21),_=T+(A^p^g)+E[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^p)+E[6]+76029189&4294967295,g=T+(_<<23&4294967295|_>>>9),_=p+(g^T^A)+E[9]+3654602809&4294967295,p=g+(_<<4&4294967295|_>>>28),_=A+(p^g^T)+E[12]+3873151461&4294967295,A=p+(_<<11&4294967295|_>>>21),_=T+(A^p^g)+E[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=g+(T^A^p)+E[2]+3299628645&4294967295,g=T+(_<<23&4294967295|_>>>9),_=p+(T^(g|~A))+E[0]+4096336452&4294967295,p=g+(_<<6&4294967295|_>>>26),_=A+(g^(p|~T))+E[7]+1126891415&4294967295,A=p+(_<<10&4294967295|_>>>22),_=T+(p^(A|~g))+E[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~p))+E[5]+4237533241&4294967295,g=T+(_<<21&4294967295|_>>>11),_=p+(T^(g|~A))+E[12]+1700485571&4294967295,p=g+(_<<6&4294967295|_>>>26),_=A+(g^(p|~T))+E[3]+2399980690&4294967295,A=p+(_<<10&4294967295|_>>>22),_=T+(p^(A|~g))+E[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~p))+E[1]+2240044497&4294967295,g=T+(_<<21&4294967295|_>>>11),_=p+(T^(g|~A))+E[8]+1873313359&4294967295,p=g+(_<<6&4294967295|_>>>26),_=A+(g^(p|~T))+E[15]+4264355552&4294967295,A=p+(_<<10&4294967295|_>>>22),_=T+(p^(A|~g))+E[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~p))+E[13]+1309151649&4294967295,g=T+(_<<21&4294967295|_>>>11),_=p+(T^(g|~A))+E[4]+4149444226&4294967295,p=g+(_<<6&4294967295|_>>>26),_=A+(g^(p|~T))+E[11]+3174756917&4294967295,A=p+(_<<10&4294967295|_>>>22),_=T+(p^(A|~g))+E[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=g+(A^(T|~p))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,E=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=g;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(E[T++]=v.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<p;)if(E[T++]=v[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var E=0;32>E;E+=8)v[g++]=this.g[p]>>>E&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function a(v,p){this.h=p;for(var g=[],E=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;E&&A==p||(g[T]=A,E=!1)}this.g=g}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return S(f(-v));for(var p=[],g=1,E=0;v>=g;E++)p[E]=v/g|0,g*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return S(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),E=y,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),_=parseInt(v.substring(T,T+A),p);8>A?(A=f(Math.pow(p,A)),E=E.j(A).add(f(_))):(E=E.j(g),E=E.add(f(_)))}return E}var y=h(0),I=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-S(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var E=this.i(g);v+=(0<=E?E:4294967296+E)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(N(this))return"-"+S(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,E="";;){var T=X(g,p).g;g=B(g,T.j(p));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=T,V(g))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=B(this,v),N(v)?-1:V(v)?0:1};function S(v){for(var p=v.g.length,g=[],E=0;E<p;E++)g[E]=~v.g[E];return new a(g,~v.h).add(I)}n.abs=function(){return N(this)?S(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0,T=0;T<=p;T++){var A=E+(this.i(T)&65535)+(v.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=_>>>16,A&=65535,_&=65535,g[T]=_<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function B(v,p){return v.add(S(p))}n.j=function(v){if(V(this)||V(v))return y;if(N(this))return N(v)?S(this).j(S(v)):S(S(this).j(v));if(N(v))return S(this.j(S(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],E=0;E<2*p;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var A=this.i(E)>>>16,_=this.i(E)&65535,At=v.i(T)>>>16,st=v.i(T)&65535;g[2*E+2*T]+=_*st,U(g,2*E+2*T),g[2*E+2*T+1]+=A*st,U(g,2*E+2*T+1),g[2*E+2*T+1]+=_*At,U(g,2*E+2*T+1),g[2*E+2*T+2]+=A*At,U(g,2*E+2*T+2)}for(E=0;E<p;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=p;E<2*p;E++)g[E]=0;return new a(g,0)};function U(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function $(v,p){this.g=v,this.h=p}function X(v,p){if(V(p))throw Error("division by zero");if(V(v))return new $(y,y);if(N(v))return p=X(S(v),p),new $(S(p.g),S(p.h));if(N(p))return p=X(v,S(p)),new $(S(p.g),p.h);if(30<v.g.length){if(N(v)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var g=I,E=p;0>=E.l(v);)g=Ct(g),E=Ct(E);var T=J(g,1),A=J(E,1);for(E=J(E,2),g=J(g,2);!V(E);){var _=A.add(E);0>=_.l(v)&&(T=T.add(g),A=_),E=J(E,1),g=J(g,1)}return p=B(v,T.j(p)),new $(T,p)}for(T=y;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=f(g),_=A.j(p);N(_)||0<_.l(v);)g-=E,A=f(g),_=A.j(p);V(A)&&(A=I),T=T.add(A),v=B(v,_)}return new $(T,v)}n.A=function(v){return X(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)&v.i(E);return new a(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)|v.i(E);return new a(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)^v.i(E);return new a(g,this.h^v.h)};function Ct(v){for(var p=v.g.length+1,g=[],E=0;E<p;E++)g[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(g,v.h)}function J(v,p){var g=p>>5;p%=32;for(var E=v.g.length-g,T=[],A=0;A<E;A++)T[A]=0<p?v.i(A+g)>>>p|v.i(A+g+1)<<32-p:v.i(A+g);return new a(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,te=a}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ou,hn,au,ur,Cs,uu,lu,cu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof tr=="object"&&tr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var w=i[d];if(!(w in l))break t;l=l[w]}i=i[i.length-1],d=l[i],u=u(d),u!=d&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,d=!1,w={next:function(){if(!d&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function y(i,u,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,d),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function I(i,u,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,I.apply(null,arguments)}function C(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function V(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,w,R){for(var D=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)D[Q-2]=arguments[Q];return u.prototype[w].apply(d,D)}}function N(i){const u=i.length;if(0<u){const l=Array(u);for(let d=0;d<u;d++)l[d]=i[d];return l}return[]}function S(i,u){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const w=i.length||0,R=d.length||0;i.length=w+R;for(let D=0;D<R;D++)i[w+D]=d[D]}else i.push(d)}}class B{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function X(i){return X[" "](i),i}X[" "]=function(){};var Ct=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function J(i,u,l){for(const d in i)u.call(l,i[d],d,i)}function v(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,u){let l,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(l in d)i[l]=d[l];for(let R=0;R<g.length;R++)l=g[R],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function T(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function A(i){c.setTimeout(()=>{throw i},0)}function _(){var i=Z;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class At{constructor(){this.h=this.g=null}add(u,l){const d=st.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var st=new B(()=>new Rt,i=>i.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let at,et=!1,Z=new At,Vt=()=>{const i=c.Promise.resolve(void 0);at=()=>{i.then(qt)}};var qt=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(l){A(l)}var u=st;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}et=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var Fl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function Ye(i,u){if(pt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Ct){t:{try{X(u.nodeName);var w=!0;break t}catch{}w=!1}w||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ul[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ye.aa.h.call(this)}}V(Ye,pt);var Ul={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),Bl=0;function ql(i,u,l,d,w){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=w,this.key=++Bl,this.da=this.fa=!1}function Mn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ln(i){this.src=i,this.g={},this.h=0}Ln.prototype.add=function(i,u,l,d,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=Gr(i,u,d,w);return-1<D?(u=i[D],l||(u.fa=!1)):(u=new ql(u,this.src,R,!!d,w),u.fa=l,i.push(u)),u};function zr(i,u){var l=u.type;if(l in i.g){var d=i.g[l],w=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=w)&&Array.prototype.splice.call(d,w,1),R&&(Mn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Gr(i,u,l,d){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==d)return w}return-1}var Hr="closure_lm_"+(1e6*Math.random()|0),Kr={};function xi(i,u,l,d,w){if(Array.isArray(u)){for(var R=0;R<u.length;R++)xi(i,u[R],l,d,w);return null}return l=Fi(l),i&&i[xn]?i.K(u,l,f(d)?!!d.capture:!1,w):jl(i,u,l,!1,d,w)}function jl(i,u,l,d,w,R){if(!u)throw Error("Invalid event type");var D=f(w)?!!w.capture:!!w,Q=Wr(i);if(Q||(i[Hr]=Q=new Ln(i)),l=Q.add(u,l,d,D,R),l.proxy)return l;if(d=$l(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Fl||(w=D),w===void 0&&(w=!1),i.addEventListener(u.toString(),d,w);else if(i.attachEvent)i.attachEvent(Li(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function $l(){function i(l){return u.call(i.src,i.listener,l)}const u=zl;return i}function Mi(i,u,l,d,w){if(Array.isArray(u))for(var R=0;R<u.length;R++)Mi(i,u[R],l,d,w);else d=f(d)?!!d.capture:!!d,l=Fi(l),i&&i[xn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=Gr(R,l,d,w),-1<l&&(Mn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=Wr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Gr(u,l,d,w)),(l=-1<i?u[i]:null)&&Qr(l))}function Qr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[xn])zr(u.i,i);else{var l=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(l,d,i.capture):u.detachEvent?u.detachEvent(Li(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=Wr(u))?(zr(l,i),l.h==0&&(l.src=null,u[Hr]=null)):Mn(i)}}}function Li(i){return i in Kr?Kr[i]:Kr[i]="on"+i}function zl(i,u){if(i.da)i=!0;else{u=new Ye(u,this);var l=i.listener,d=i.ha||i.src;i.fa&&Qr(i),i=l.call(d,u)}return i}function Wr(i){return i=i[Hr],i instanceof Ln?i:null}var Yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fi(i){return typeof i=="function"?i:(i[Yr]||(i[Yr]=function(u){return i.handleEvent(u)}),i[Yr])}function gt(){Nt.call(this),this.i=new Ln(this),this.M=this,this.F=null}V(gt,Nt),gt.prototype[xn]=!0,gt.prototype.removeEventListener=function(i,u,l,d){Mi(this,i,u,l,d)};function It(i,u){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new pt(u,i);else if(u instanceof pt)u.target=u.target||i;else{var w=u;u=new pt(d,i),E(u,w)}if(w=!0,l)for(var R=l.length-1;0<=R;R--){var D=u.g=l[R];w=Fn(D,d,!0,u)&&w}if(D=u.g=i,w=Fn(D,d,!0,u)&&w,w=Fn(D,d,!1,u)&&w,l)for(R=0;R<l.length;R++)D=u.g=l[R],w=Fn(D,d,!1,u)&&w}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],d=0;d<l.length;d++)Mn(l[d]);delete i.g[u],i.h--}}this.F=null},gt.prototype.K=function(i,u,l,d){return this.i.add(String(i),u,!1,l,d)},gt.prototype.L=function(i,u,l,d){return this.i.add(String(i),u,!0,l,d)};function Fn(i,u,l,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==l){var Q=D.listener,ht=D.ha||D.src;D.fa&&zr(i.i,D),w=Q.call(ht,d)!==!1&&w}}return w&&!d.defaultPrevented}function Ui(i,u,l){if(typeof i=="function")l&&(i=I(i,l));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Bi(i){i.g=Ui(()=>{i.g=null,i.i&&(i.i=!1,Bi(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Gl extends Nt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Bi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(i){Nt.call(this),this.h=i,this.g={}}V(Xe,Nt);var qi=[];function ji(i){J(i.g,function(u,l){this.g.hasOwnProperty(l)&&Qr(u)},i),i.g={}}Xe.prototype.N=function(){Xe.aa.N.call(this),ji(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=c.JSON.stringify,Hl=c.JSON.parse,Kl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Jr(){}Jr.prototype.h=null;function $i(i){return i.h||(i.h=i.i())}function zi(){}var Je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zr(){pt.call(this,"d")}V(Zr,pt);function ts(){pt.call(this,"c")}V(ts,pt);var ce={},Gi=null;function Un(){return Gi=Gi||new gt}ce.La="serverreachability";function Hi(i){pt.call(this,ce.La,i)}V(Hi,pt);function Ze(i){const u=Un();It(u,new Hi(u))}ce.STAT_EVENT="statevent";function Ki(i,u){pt.call(this,ce.STAT_EVENT,i),this.stat=u}V(Ki,pt);function wt(i){const u=Un();It(u,new Ki(u,i))}ce.Ma="timingevent";function Qi(i,u){pt.call(this,ce.Ma,i),this.size=u}V(Qi,pt);function tn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function en(){this.g=!0}en.prototype.xa=function(){this.g=!1};function Ql(i,u,l,d,w,R){i.info(function(){if(i.g)if(R)for(var D="",Q=R.split("&"),ht=0;ht<Q.length;ht++){var H=Q[ht].split("=");if(1<H.length){var _t=H[0];H=H[1];var yt=_t.split("_");D=2<=yt.length&&yt[1]=="type"?D+(_t+"="+H+"&"):D+(_t+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+u+`
`+l+`
`+D})}function Wl(i,u,l,d,w,R,D){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+u+`
`+l+`
`+R+" "+D})}function Re(i,u,l,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xl(i,l)+(d?" "+d:"")})}function Yl(i,u){i.info(function(){return"TIMEOUT: "+u})}en.prototype.info=function(){};function Xl(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var w=d[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return Xr(l)}catch{return u}}var Bn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},es;function qn(){}V(qn,Jr),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},es=new qn;function Qt(i,u,l,d){this.j=i,this.i=u,this.l=l,this.R=d||1,this.U=new Xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yi}function Yi(){this.i=null,this.g="",this.h=!1}var Xi={},ns={};function rs(i,u,l){i.L=1,i.v=Gn(jt(u)),i.m=l,i.P=!0,Ji(i,null)}function Ji(i,u){i.F=Date.now(),jn(i),i.A=jt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),fo(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Yi,i.g=Do(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Gl(I(i.Y,i,i.g),i.O)),u=i.U,l=i.g,d=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(qi[0]=w.toString()),w=qi);for(var R=0;R<w.length;R++){var D=xi(l,w[R],d||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Ze(),Ql(i.i,i.u,i.A,i.l,i.R,i.m)}Qt.prototype.ca=function(i){i=i.target;const u=this.M;u&&$t(i)==3?u.j():this.Y(i)},Qt.prototype.Y=function(i){try{if(i==this.g)t:{const yt=$t(this.g);var u=this.g.Ba();const Pe=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||vo(this.g)))){this.J||yt!=4||u==7||(u==8||0>=Pe?Ze(3):Ze(2)),ss(this);var l=this.g.Z();this.X=l;e:if(Zi(this)){var d=vo(this.g);i="";var w=d.length,R=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),nn(this);var D="";break e}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==w-1)});d.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,Wl(this.i,this.u,this.A,this.l,this.R,yt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ht=this.g;if((Q=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Q)){var H=Q;break e}}H=null}if(l=H)Re(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,l);else{this.o=!1,this.s=3,wt(12),he(this),nn(this);break t}}if(this.P){l=!0;let kt;for(;!this.J&&this.C<D.length;)if(kt=Jl(this,D),kt==ns){yt==4&&(this.s=4,wt(14),l=!1),Re(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Xi){this.s=4,wt(15),Re(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Re(this.i,this.l,kt,null),is(this,kt);if(Zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||D.length!=0||this.h.h||(this.s=1,wt(16),l=!1),this.o=this.o&&l,!l)Re(this.i,this.l,D,"[Invalid Chunked Response]"),he(this),nn(this);else if(0<D.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),hs(_t),_t.M=!0,wt(11))}}else Re(this.i,this.l,D,null),is(this,D);yt==4&&he(this),this.o&&!this.J&&(yt==4?Co(this.j,this):(this.o=!1,jn(this)))}else pc(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),he(this),nn(this)}}}catch{}finally{}};function Zi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Jl(i,u){var l=i.C,d=u.indexOf(`
`,l);return d==-1?ns:(l=Number(u.substring(l,d)),isNaN(l)?Xi:(d+=1,d+l>u.length?ns:(u=u.slice(d,d+l),i.C=d+l,u)))}Qt.prototype.cancel=function(){this.J=!0,he(this)};function jn(i){i.S=Date.now()+i.I,to(i,i.I)}function to(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=tn(I(i.ba,i),u)}function ss(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Qt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Yl(this.i,this.A),this.L!=2&&(Ze(),wt(17)),he(this),this.s=2,nn(this)):to(this,this.S-i)};function nn(i){i.j.G==0||i.J||Co(i.j,i)}function he(i){ss(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,ji(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function is(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||os(l.h,i))){if(!i.K&&os(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Xn(l),Wn(l);else break t;cs(l),wt(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=tn(I(l.Za,l),6e3));if(1>=ro(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else fe(l,11)}else if((i.K||l.g==i)&&Xn(l),!U(u))for(w=l.Da.g.parse(u),u=0;u<w.length;u++){let H=w[u];if(l.T=H[0],H=H[1],l.G==2)if(H[0]=="c"){l.K=H[1],l.ia=H[2];const _t=H[3];_t!=null&&(l.la=_t,l.j.info("VER="+l.la));const yt=H[4];yt!=null&&(l.Aa=yt,l.j.info("SVER="+l.Aa));const Pe=H[5];Pe!=null&&typeof Pe=="number"&&0<Pe&&(d=1.5*Pe,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const kt=i.g;if(kt){const Zn=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zn){var R=d.h;R.g||Zn.indexOf("spdy")==-1&&Zn.indexOf("quic")==-1&&Zn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(as(R,R.h),R.h=null))}if(d.D){const ds=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ds&&(d.ya=ds,Y(d.I,d.D,ds))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var D=i;if(d.qa=Vo(d,d.J?d.ia:null,d.W),D.K){so(d.h,D);var Q=D,ht=d.L;ht&&(Q.I=ht),Q.B&&(ss(Q),jn(Q)),d.g=D}else Ro(d);0<l.i.length&&Yn(l)}else H[0]!="stop"&&H[0]!="close"||fe(l,7);else l.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?fe(l,7):ls(l):H[0]!="noop"&&l.l&&l.l.ta(H),l.v=0)}}Ze(4)}catch{}}var Zl=class{constructor(i,u){this.g=i,this.map=u}};function eo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function no(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ro(i){return i.h?1:i.g?i.g.size:0}function os(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function as(i,u){i.g?i.g.add(u):i.h=u}function so(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}eo.prototype.cancel=function(){if(this.i=io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function io(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return N(i.i)}function tc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,d=0;d<l;d++)u.push(i[d]);return u}u=[],l=0;for(d in i)u[l++]=i[d];return u}function ec(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const d in i)u[l++]=d;return u}}}function oo(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=ec(i),d=tc(i),w=d.length,R=0;R<w;R++)u.call(void 0,d[R],l&&l[R],i)}var ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nc(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),w=null;if(0<=d){var R=i[l].substring(0,d);w=i[l].substring(d+1)}else R=i[l];u(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function de(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof de){this.h=i.h,$n(this,i.j),this.o=i.o,this.g=i.g,zn(this,i.s),this.l=i.l;var u=i.i,l=new on;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),uo(this,l),this.m=i.m}else i&&(u=String(i).match(ao))?(this.h=!1,$n(this,u[1]||"",!0),this.o=rn(u[2]||""),this.g=rn(u[3]||"",!0),zn(this,u[4]),this.l=rn(u[5]||"",!0),uo(this,u[6]||"",!0),this.m=rn(u[7]||"")):(this.h=!1,this.i=new on(null,this.h))}de.prototype.toString=function(){var i=[],u=this.j;u&&i.push(sn(u,lo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(sn(u,lo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(sn(l,l.charAt(0)=="/"?ic:sc,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",sn(l,ac)),i.join("")};function jt(i){return new de(i)}function $n(i,u,l){i.j=l?rn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function zn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function uo(i,u,l){u instanceof on?(i.i=u,uc(i.i,i.h)):(l||(u=sn(u,oc)),i.i=new on(u,i.h))}function Y(i,u,l){i.i.set(u,l)}function Gn(i){return Y(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function rn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function sn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,rc),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function rc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var lo=/[#\/\?@]/g,sc=/[#\?:]/g,ic=/[#\?]/g,oc=/[#\?@]/g,ac=/#/g;function on(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Wt(i){i.g||(i.g=new Map,i.h=0,i.i&&nc(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=on.prototype,n.add=function(i,u){Wt(this),this.i=null,i=be(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function co(i,u){Wt(i),u=be(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function ho(i,u){return Wt(i),u=be(i,u),i.g.has(u)}n.forEach=function(i,u){Wt(this),this.g.forEach(function(l,d){l.forEach(function(w){i.call(u,w,d,this)},this)},this)},n.na=function(){Wt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let d=0;d<u.length;d++){const w=i[d];for(let R=0;R<w.length;R++)l.push(u[d])}return l},n.V=function(i){Wt(this);let u=[];if(typeof i=="string")ho(this,i)&&(u=u.concat(this.g.get(be(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Wt(this),this.i=null,i=be(this,i),ho(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function fo(i,u,l){co(i,u),0<l.length&&(i.i=null,i.g.set(be(i,u),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var d=u[l];const R=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var w=R;D[d]!==""&&(w+="="+encodeURIComponent(String(D[d]))),i.push(w)}}return this.i=i.join("&")};function be(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function uc(i,u){u&&!i.j&&(Wt(i),i.i=null,i.g.forEach(function(l,d){var w=d.toLowerCase();d!=w&&(co(this,d),fo(this,w,l))},i)),i.j=u}function lc(i,u){const l=new en;if(c.Image){const d=new Image;d.onload=C(Yt,l,"TestLoadImage: loaded",!0,u,d),d.onerror=C(Yt,l,"TestLoadImage: error",!1,u,d),d.onabort=C(Yt,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=C(Yt,l,"TestLoadImage: timeout",!1,u,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function cc(i,u){const l=new en,d=new AbortController,w=setTimeout(()=>{d.abort(),Yt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(w),R.ok?Yt(l,"TestPingServer: ok",!0,u):Yt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),Yt(l,"TestPingServer: error",!1,u)})}function Yt(i,u,l,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(l)}catch{}}function hc(){this.g=new Kl}function dc(i,u,l){const d=l||"";try{oo(i,function(w,R){let D=w;f(w)&&(D=Xr(w)),u.push(d+R+"="+encodeURIComponent(D))})}catch(w){throw u.push(d+"type="+encodeURIComponent("_badmap")),w}}function Hn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(Hn,Jr),Hn.prototype.g=function(){return new Kn(this.l,this.j)},Hn.prototype.i=function(i){return function(){return i}}({});function Kn(i,u){gt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Kn,gt),n=Kn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,un(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function mo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?an(this):un(this),this.readyState==3&&mo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,an(this))},n.Qa=function(i){this.g&&(this.response=i,an(this))},n.ga=function(){this.g&&an(this)};function an(i){i.readyState=4,i.l=null,i.j=null,i.v=null,un(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function un(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Kn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function po(i){let u="";return J(i,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function us(i,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=po(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Y(i,u,l))}function nt(i){gt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(nt,gt);var fc=/^https?$/i,mc=["POST","PUT"];n=nt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():es.g(),this.v=this.o?$i(this.o):$i(es),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){go(this,R);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)l.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),w=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(mc,u,void 0))||d||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of l)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){go(this,R)}};function go(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,_o(i),Qn(i)}function _o(i){i.A||(i.A=!0,It(i,"complete"),It(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,It(this,"complete"),It(this,"abort"),Qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yo(this):this.bb())},n.bb=function(){yo(this)};function yo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||$t(i)!=4||i.Z()!=2)){if(i.u&&$t(i)==4)Ui(i.Ea,0,i);else if(It(i,"readystatechange"),$t(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=D===0){var w=String(i.D).match(ao)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),d=!fc.test(w?w.toLowerCase():"")}l=d}if(l)It(i,"complete"),It(i,"success");else{i.m=6;try{var R=2<$t(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",_o(i)}}finally{Qn(i)}}}}function Qn(i,u){if(i.g){Eo(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||It(i,"ready");try{l.onreadystatechange=d}catch{}}}function Eo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function $t(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Hl(u)}};function vo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function pc(i){const u={};i=(i.g&&2<=$t(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(U(i[d]))continue;var l=T(i[d]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[w]||[];u[w]=R,R.push(l)}v(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ln(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function To(i){this.Aa=0,this.i=[],this.j=new en,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ln("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ln("baseRetryDelayMs",5e3,i),this.cb=ln("retryDelaySeedMs",1e4,i),this.Wa=ln("forwardChannelMaxRetries",2,i),this.wa=ln("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new eo(i&&i.concurrentRequestLimit),this.Da=new hc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=To.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,d){wt(0),this.W=i,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Vo(this,null,this.W),Yn(this)};function ls(i){if(Io(i),i.G==3){var u=i.U++,l=jt(i.I);if(Y(l,"SID",i.K),Y(l,"RID",u),Y(l,"TYPE","terminate"),cn(i,l),u=new Qt(i,i.j,u),u.L=2,u.v=Gn(jt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Do(u.j,null),u.g.ea(u.v)),u.F=Date.now(),jn(u)}So(i)}function Wn(i){i.g&&(hs(i),i.g.cancel(),i.g=null)}function Io(i){Wn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Xn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Yn(i){if(!no(i.h)&&!i.s){i.s=!0;var u=i.Ga;at||Vt(),et||(at(),et=!0),Z.add(u,i),i.B=0}}function gc(i,u){return ro(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=tn(I(i.Ga,i,u),Po(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new Qt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Ao(this,w,u),l=jt(this.I),Y(l,"RID",i),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),cn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(po(R)))+"&"+u:this.m&&us(l,this.m,R)),as(this.h,w),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",u),Y(l,"SID","null"),w.T=!0,rs(w,l,null)):rs(w,l,u),this.G=2}}else this.G==3&&(i?wo(this,i):this.i.length==0||no(this.h)||wo(this))};function wo(i,u){var l;u?l=u.l:l=i.U++;const d=jt(i.I);Y(d,"SID",i.K),Y(d,"RID",l),Y(d,"AID",i.T),cn(i,d),i.m&&i.o&&us(d,i.m,i.o),l=new Qt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Ao(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),as(i.h,l),rs(l,d,u)}function cn(i,u){i.H&&J(i.H,function(l,d){Y(u,d,l)}),i.l&&oo({},function(l,d){Y(u,d,l)})}function Ao(i,u,l){l=Math.min(i.i.length,l);var d=i.l?I(i.l.Na,i.l,i):null;t:{var w=i.i;let R=-1;for(;;){const D=["count="+l];R==-1?0<l?(R=w[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let Q=!0;for(let ht=0;ht<l;ht++){let H=w[ht].g;const _t=w[ht].map;if(H-=R,0>H)R=Math.max(0,w[ht].g-100),Q=!1;else try{dc(_t,D,"req"+H+"_")}catch{d&&d(_t)}}if(Q){d=D.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,d}function Ro(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;at||Vt(),et||(at(),et=!0),Z.add(u,i),i.v=0}}function cs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=tn(I(i.Fa,i),Po(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,bo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=tn(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Wn(this),bo(this))};function hs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function bo(i){i.g=new Qt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=jt(i.qa);Y(u,"RID","rpc"),Y(u,"SID",i.K),Y(u,"AID",i.T),Y(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Y(u,"TO",i.ja),Y(u,"TYPE","xmlhttp"),cn(i,u),i.m&&i.o&&us(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Gn(jt(u)),l.m=null,l.P=!0,Ji(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Wn(this),cs(this),wt(19))};function Xn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Co(i,u){var l=null;if(i.g==u){Xn(i),hs(i),i.g=null;var d=2}else if(os(i.h,u))l=u.D,so(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;d=Un(),It(d,new Qi(d,l)),Yn(i)}else Ro(i);else if(w=u.s,w==3||w==0&&0<u.X||!(d==1&&gc(i,u)||d==2&&cs(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),w){case 1:fe(i,5);break;case 4:fe(i,10);break;case 3:fe(i,6);break;default:fe(i,2)}}}function Po(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function fe(i,u){if(i.j.info("Error code "+u),u==2){var l=I(i.fb,i),d=i.Xa;const w=!d;d=new de(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$n(d,"https"),Gn(d),w?lc(d.toString(),l):cc(d.toString(),l)}else wt(2);i.G=0,i.l&&i.l.sa(u),So(i),Io(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function So(i){if(i.G=0,i.ka=[],i.l){const u=io(i.h);(u.length!=0||i.i.length!=0)&&(S(i.ka,u),S(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function Vo(i,u,l){var d=l instanceof de?jt(l):new de(l);if(d.g!="")u&&(d.g=u+"."+d.g),zn(d,d.s);else{var w=c.location;d=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var R=new de(null);d&&$n(R,d),u&&(R.g=u),w&&zn(R,w),l&&(R.l=l),d=R}return l=i.D,u=i.ya,l&&u&&Y(d,l,u),Y(d,"VER",i.la),cn(i,d),d}function Do(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new nt(new Hn({eb:l})):new nt(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function No(){}n=No.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Jn(){}Jn.prototype.g=function(i,u){return new Pt(i,u)};function Pt(i,u){gt.call(this),this.g=new To(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!U(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ce(this)}V(Pt,gt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){ls(this.g)},Pt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Xr(i),i=l);u.i.push(new Zl(u.Ya++,i)),u.G==3&&Yn(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,ls(this.g),delete this.g,Pt.aa.N.call(this)};function ko(i){Zr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(ko,Zr);function Oo(){ts.call(this),this.status=1}V(Oo,ts);function Ce(i){this.g=i}V(Ce,No),Ce.prototype.ua=function(){It(this.g,"a")},Ce.prototype.ta=function(i){It(this.g,new ko(i))},Ce.prototype.sa=function(i){It(this.g,new Oo)},Ce.prototype.ra=function(){It(this.g,"b")},Jn.prototype.createWebChannel=Jn.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,cu=function(){return new Jn},lu=function(){return Un()},uu=ce,Cs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bn.NO_ERROR=0,Bn.TIMEOUT=8,Bn.HTTP_ERROR=6,ur=Bn,Wi.COMPLETE="complete",au=Wi,zi.EventType=Je,Je.OPEN="a",Je.CLOSE="b",Je.ERROR="c",Je.MESSAGE="d",gt.prototype.listen=gt.prototype.K,hn=zi,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,ou=nt}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});const Ko="@firebase/firestore",Qo="4.7.14";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He="11.7.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new tu("@firebase/firestore");function De(){return ye.logLevel}function O(n,...t){if(ye.logLevel<=G.DEBUG){const e=t.map(Ks);ye.debug(`Firestore (${He}): ${n}`,...e)}}function Ht(n,...t){if(ye.logLevel<=G.ERROR){const e=t.map(Ks);ye.error(`Firestore (${He}): ${n}`,...e)}}function Le(n,...t){if(ye.logLevel<=G.WARN){const e=t.map(Ks);ye.warn(`Firestore (${He}): ${n}`,...e)}}function Ks(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,hu(n,r,e)}function hu(n,t,e){let r=`FIRESTORE (${He}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ht(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||hu(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Ge{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class sd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class id{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new vt(t)}}class od{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ad{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new od(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ud{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Wo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ld(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function Ps(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return q(r,s);{const o=fu(),a=cd(o.encode(Yo(n,e)),o.encode(Yo(t,e)));return a!==0?a:q(r,s)}}e+=r>65535?2:1}return q(n.length,t.length)}function Yo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function cd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return q(n[e],t[e]);return q(n.length,t.length)}function Fe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=-62135596800,Jo=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(t){return ut.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Jo);return new ut(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Xo)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jo}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Xo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new ut(0,0))}static max(){return new L(new ut(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="__name__";class Mt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Mt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Mt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=Mt.isNumericId(t),s=Mt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Mt.extractNumericId(t).compare(Mt.extractNumericId(e)):Ps(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return te.fromString(t.substring(4,t.length-2))}}class W extends Mt{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const hd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Mt{construct(t,e,r){return new ft(t,e,r)}static isValidIdentifier(t){return hd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zo}static keyField(){return new ft([Zo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(e)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(W.fromString(t))}static fromName(t){return new x(W.fromString(t).popFirst(5))}static empty(){return new x(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new W(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=-1;function dd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new ut(e+1,0):new ut(e,r));return new se(s,x.empty(),t)}function fd(n){return new se(n.readTime,n.key,In)}class se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new se(L.min(),x.empty(),In)}static max(){return new se(L.max(),x.empty(),In)}}function md(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==pd)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function _d(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Qe(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Sr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-1;function Vr(n){return n==null}function yr(n){return n===0&&1/n==-1/0}function yd(n){return typeof n=="number"&&Number.isInteger(n)&&!yr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="";function Ed(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ta(t)),t=vd(n.get(e),t);return ta(t)}function vd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case pu:e+="";break;default:e+=o}}return e}function ta(n){return n+pu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ve(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function gu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new er(this.root,t,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new er(this.root,t,this.comparator,!0)}}class er{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new dt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new na(this.data.getIterator())}getIteratorFrom(t){return new na(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class na{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new lt(ft.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _u("Invalid base64 string: "+o):o}}(t);return new mt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Td=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Td.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function oe(n){return typeof n=="string"?mt.fromBase64String(n):mt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="server_timestamp",Eu="__type__",vu="__previous_value__",Tu="__local_write_time__";function Dr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Eu])===null||e===void 0?void 0:e.stringValue)===yu}function Nr(n){const t=n.mapValue.fields[vu];return Dr(t)?Nr(t):t}function wn(n){const t=ie(n.mapValue.fields[Tu].timestampValue);return new ut(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,e,r,s,o,a,c,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const Er="(default)";class An{constructor(t,e){this.projectId=t,this.database=e||Er}static empty(){return new An("","")}get isDefaultDatabase(){return this.database===Er}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="__type__",wd="__max__",nr={mapValue:{}},wu="__vector__",vr="value";function ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dr(n)?4:Rd(n)?9007199254740991:Ad(n)?10:11:M(28295,{value:n})}function Ut(n,t){if(n===t)return!0;const e=ae(n);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return wn(n).isEqual(wn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ie(s.timestampValue),c=ie(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return oe(s.bytesValue).isEqual(oe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),c=rt(o.doubleValue);return a===c?yr(a)===yr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],Ut);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ea(a)!==ea(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ut(a[h],c[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function Rn(n,t){return(n.values||[]).find(e=>Ut(e,t))!==void 0}function Ue(n,t){if(n===t)return 0;const e=ae(n),r=ae(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ra(n.timestampValue,t.timestampValue);case 4:return ra(wn(n),wn(t));case 5:return Ps(n.stringValue,t.stringValue);case 6:return function(o,a){const c=oe(o),h=oe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=q(c[f],h[f]);if(m!==0)return m}return q(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=q(rt(o.latitude),rt(a.latitude));return c!==0?c:q(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return sa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,m;const y=o.fields||{},I=a.fields||{},C=(c=y[vr])===null||c===void 0?void 0:c.arrayValue,V=(h=I[vr])===null||h===void 0?void 0:h.arrayValue,N=q(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:sa(C,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===nr.mapValue&&a===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(a===nr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const I=Ps(h[y],m[y]);if(I!==0)return I;const C=Ue(c[h[y]],f[m[y]]);if(C!==0)return C}return q(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function ra(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ie(n),r=ie(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function sa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ue(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function Be(n){return Ss(n)}function Ss(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return oe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ss(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ss(e.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function lr(n){switch(ae(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Nr(n);return t?16+lr(t):16;case 5:return 2*n.stringValue.length;case 6:return oe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+lr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ve(r.fields,(o,a)=>{s+=o.length+lr(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function Tr(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Vs(n){return!!n&&"integerValue"in n}function Ws(n){return!!n&&"arrayValue"in n}function ia(n){return!!n&&"nullValue"in n}function oa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cr(n){return!!n&&"mapValue"in n}function Ad(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Iu])===null||e===void 0?void 0:e.stringValue)===wu}function _n(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ve(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=_n(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_n(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Rd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.value=t}static empty(){return new Dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!cr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_n(e)}setAll(t){let e=ft.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=_n(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());cr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];cr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ve(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Dt(_n(this.value))}}function Au(n){const t=[];return ve(n.fields,(e,r)=>{const s=new ft([e]);if(cr(r)){const o=Au(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,L.min(),L.min(),L.min(),Dt.empty(),0)}static newFoundDocument(t,e,r,s){return new Tt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,L.min(),L.min(),Dt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,L.min(),L.min(),Dt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e){this.position=t,this.inclusive=e}}function aa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Ue(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ua(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ut(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e="asc"){this.field=t,this.dir=e}}function bd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{}class ot extends Ru{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Pd(t,e,r):e==="array-contains"?new Dd(t,r):e==="in"?new Nd(t,r):e==="not-in"?new kd(t,r):e==="array-contains-any"?new Od(t,r):new ot(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Sd(t,r):new Vd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ue(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Ru{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new xt(t,e)}matches(t){return bu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function bu(n){return n.op==="and"}function Cu(n){return Cd(n)&&bu(n)}function Cd(n){for(const t of n.filters)if(t instanceof xt)return!1;return!0}function Ds(n){if(n instanceof ot)return n.field.canonicalString()+n.op.toString()+Be(n.value);if(Cu(n))return n.filters.map(t=>Ds(t)).join(",");{const t=n.filters.map(e=>Ds(e)).join(",");return`${n.op}(${t})`}}function Pu(n,t){return n instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&Ut(r.value,s.value)}(n,t):n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Pu(a,s.filters[c]),!0):!1}(n,t):void M(19439)}function Su(n){return n instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${Be(e.value)}`}(n):n instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(Su).join(" ,")+"}"}(n):"Filter"}class Pd extends ot{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sd extends ot{constructor(t,e){super(t,"in",e),this.keys=Vu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vd extends ot{constructor(t,e){super(t,"not-in",e),this.keys=Vu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Vu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class Dd extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ws(e)&&Rn(e.arrayValue,this.value)}}class Nd extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rn(this.value.arrayValue,e)}}class kd extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Rn(this.value.arrayValue,e)}}class Od extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ws(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Rn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function la(n,t=null,e=[],r=[],s=null,o=null,a=null){return new xd(n,t,e,r,s,o,a)}function Ys(n){const t=F(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ds(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Be(r)).join(",")),t.Ie=e}return t.Ie}function Xs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!bd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Pu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ua(n.startAt,t.startAt)&&ua(n.endAt,t.endAt)}function Ns(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Md(n,t,e,r,s,o,a,c){return new Te(n,t,e,r,s,o,a,c)}function Js(n){return new Te(n)}function ca(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zs(n){return n.collectionGroup!==null}function xe(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new lt(ft.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new bn(o,r))}),e.has(ft.keyField().canonicalString())||t.Ee.push(new bn(ft.keyField(),r))}return t.Ee}function Lt(n){const t=F(n);return t.de||(t.de=Ld(t,xe(n))),t.de}function Ld(n,t){if(n.limitType==="F")return la(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new bn(s.field,o)});const e=n.endAt?new qe(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qe(n.startAt.position,n.startAt.inclusive):null;return la(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ks(n,t){const e=n.filters.concat([t]);return new Te(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ir(n,t,e){return new Te(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function kr(n,t){return Xs(Lt(n),Lt(t))&&n.limitType===t.limitType}function Du(n){return`${Ys(Lt(n))}|lt:${n.limitType}`}function Ne(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Su(s)).join(", ")}]`),Vr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Be(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Be(s)).join(",")),`Target(${r})`}(Lt(n))}; limitType=${n.limitType})`}function Or(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of xe(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const f=aa(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,xe(r),s)||r.endAt&&!function(a,c,h){const f=aa(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,xe(r),s))}(n,t)}function Fd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nu(n){return(t,e)=>{let r=!1;for(const s of xe(n)){const o=Ud(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ud(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ue(h,f):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return gu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new tt(x.comparator);function Kt(){return Bd}const ku=new tt(x.comparator);function dn(...n){let t=ku;for(const e of n)t=t.insert(e.key,e);return t}function Ou(n){let t=ku;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ge(){return yn()}function xu(){return yn()}function yn(){return new Ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const qd=new tt(x.comparator),jd=new lt(x.comparator);function j(...n){let t=jd;for(const e of n)t=t.add(e);return t}const $d=new lt(q);function zd(){return $d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(t)?"-0":t}}function Mu(n){return{integerValue:""+n}}function Gd(n,t){return yd(t)?Mu(t):ti(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this._=void 0}}function Hd(n,t,e){return n instanceof Cn?function(s,o){const a={fields:{[Eu]:{stringValue:yu},[Tu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Dr(o)&&(o=Nr(o)),o&&(a.fields[vu]=o),{mapValue:a}}(e,t):n instanceof Pn?Fu(n,t):n instanceof Sn?Uu(n,t):function(s,o){const a=Lu(s,o),c=ha(a)+ha(s.Re);return Vs(a)&&Vs(s.Re)?Mu(c):ti(s.serializer,c)}(n,t)}function Kd(n,t,e){return n instanceof Pn?Fu(n,t):n instanceof Sn?Uu(n,t):e}function Lu(n,t){return n instanceof wr?function(r){return Vs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Cn extends xr{}class Pn extends xr{constructor(t){super(),this.elements=t}}function Fu(n,t){const e=Bu(t);for(const r of n.elements)e.some(s=>Ut(s,r))||e.push(r);return{arrayValue:{values:e}}}class Sn extends xr{constructor(t){super(),this.elements=t}}function Uu(n,t){let e=Bu(t);for(const r of n.elements)e=e.filter(s=>!Ut(s,r));return{arrayValue:{values:e}}}class wr extends xr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function ha(n){return rt(n.integerValue||n.doubleValue)}function Bu(n){return Ws(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e){this.field=t,this.transform=e}}function Wd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Pn&&s instanceof Pn||r instanceof Sn&&s instanceof Sn?Fe(r.elements,s.elements,Ut):r instanceof wr&&s instanceof wr?Ut(r.Re,s.Re):r instanceof Cn&&s instanceof Cn}(n.transform,t.transform)}class Yd{constructor(t,e){this.version=t,this.transformResults=e}}class zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zt}static exists(t){return new zt(void 0,t)}static updateTime(t){return new zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Mr{}function qu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new $u(n.key,zt.none()):new Dn(n.key,n.data,zt.none());{const e=n.data,r=Dt.empty();let s=new lt(ft.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new we(n.key,r,new Ot(s.toArray()),zt.none())}}function Xd(n,t,e){n instanceof Dn?function(s,o,a){const c=s.value.clone(),h=fa(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof we?function(s,o,a){if(!hr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=fa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ju(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function En(n,t,e,r){return n instanceof Dn?function(o,a,c,h){if(!hr(o.precondition,a))return c;const f=o.value.clone(),m=ma(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof we?function(o,a,c,h){if(!hr(o.precondition,a))return c;const f=ma(o.fieldTransforms,h,a),m=a.data;return m.setAll(ju(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,c){return hr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Jd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Lu(r.transform,s||null);o!=null&&(e===null&&(e=Dt.empty()),e.set(r.field,o))}return e||null}function da(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fe(r,s,(o,a)=>Wd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Dn extends Mr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class we extends Mr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ju(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function fa(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Kd(a,c,e[s]))}return r}function ma(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Hd(o,a,t))}return r}class $u extends Mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zd extends Mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Xd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=xu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=qu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(e,r)=>da(e,r))&&Fe(this.baseMutations,t.baseMutations,(e,r)=>da(e,r))}}class ei{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return qd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ei(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,z;function rf(n){switch(n){case b.OK:return M(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function zu(n){if(n===void 0)return Ht("GRPC error has no .code"),b.UNKNOWN;switch(n){case it.OK:return b.OK;case it.CANCELLED:return b.CANCELLED;case it.UNKNOWN:return b.UNKNOWN;case it.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case it.INTERNAL:return b.INTERNAL;case it.UNAVAILABLE:return b.UNAVAILABLE;case it.UNAUTHENTICATED:return b.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case it.NOT_FOUND:return b.NOT_FOUND;case it.ALREADY_EXISTS:return b.ALREADY_EXISTS;case it.PERMISSION_DENIED:return b.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case it.ABORTED:return b.ABORTED;case it.OUT_OF_RANGE:return b.OUT_OF_RANGE;case it.UNIMPLEMENTED:return b.UNIMPLEMENTED;case it.DATA_LOSS:return b.DATA_LOSS;default:return M(39323,{code:n})}}(z=it||(it={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new te([4294967295,4294967295],0);function pa(n){const t=fu().encode(n),e=new iu;return e.update(t),new Uint8Array(e.digest())}function ga(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,r],0),new te([s,o],0)]}class ni{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new fn(`Invalid padding: ${e}`);if(r<0)throw new fn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new fn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new fn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=te.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(te.fromNumber(r)));return s.compare(sf)===1&&(s=new te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=pa(t),[r,s]=ga(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ni(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.pe===0)return;const e=pa(t),[r,s]=ga(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Nn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Lr(L.min(),s,new tt(q),Kt(),j())}}class Nn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Nn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class Gu{constructor(t,e){this.targetId=t,this.Ce=e}}class Hu{constructor(t,e,r=mt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class _a{constructor(){this.Fe=0,this.Me=ya(),this.xe=mt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=j(),e=j(),r=j();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new Nn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=ya()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,K(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class of{constructor(t){this.ze=t,this.je=new Map,this.He=Kt(),this.Je=rr(),this.Ye=rr(),this.Ze=new tt(q)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(Ns(o))if(r===0){const a=new x(o.path);this.tt(e,a,Tt.newNoDocument(a,L.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const c=this.ct(t),h=c?this.lt(c,t,a):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=oe(r).toUint8Array()}catch(h){if(h instanceof _u)return Le("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ni(a,s,o)}catch(h){return Le(h instanceof fn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&Ns(c.target)){const h=new x(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Tt.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=j();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new Lr(t,e,this.Ze,this.He,r);return this.He=Kt(),this.Je=rr(),this.Ye=rr(),this.Ze=new tt(q),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new _a,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new lt(q),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new lt(q),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new _a),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function rr(){return new tt(x.comparator)}function ya(){return new tt(x.comparator)}const af={asc:"ASCENDING",desc:"DESCENDING"},uf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lf={and:"AND",or:"OR"};class cf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Os(n,t){return n.useProto3Json||Vr(t)?t:{value:t}}function Ar(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ku(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hf(n,t){return Ar(n,t.toTimestamp())}function Ft(n){return K(!!n,49232),L.fromTimestamp(function(e){const r=ie(e);return new ut(r.seconds,r.nanos)}(n))}function ri(n,t){return xs(n,t).canonicalString()}function xs(n,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Qu(n){const t=W.fromString(n);return K(Zu(t),10190,{key:t.toString()}),t}function Ms(n,t){return ri(n.databaseId,t.path)}function _s(n,t){const e=Qu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Yu(e))}function Wu(n,t){return ri(n.databaseId,t)}function df(n){const t=Qu(n);return t.length===4?W.emptyPath():Yu(t)}function Ls(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yu(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ea(n,t,e){return{name:Ms(n,t),fields:e.value.mapValue.fields}}function ff(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(K(m===void 0||typeof m=="string",58123),mt.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),mt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const m=f.code===void 0?b.UNKNOWN:zu(f.code);return new k(m,f.message||"")}(a);e=new Hu(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=_s(n,r.document.name),o=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):L.min(),c=new Dt({mapValue:{fields:r.document.fields}}),h=Tt.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];e=new dr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=_s(n,r.document),o=r.readTime?Ft(r.readTime):L.min(),a=Tt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new dr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=_s(n,r.document),o=r.removedTargetIds||[];e=new dr([],o,s,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new nf(s,o),c=r.targetId;e=new Gu(c,a)}}return e}function mf(n,t){let e;if(t instanceof Dn)e={update:Ea(n,t.key,t.value)};else if(t instanceof $u)e={delete:Ms(n,t.key)};else if(t instanceof we)e={update:Ea(n,t.key,t.data),updateMask:wf(t.fieldMask)};else{if(!(t instanceof Zd))return M(16599,{ft:t.type});e={verify:Ms(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Cn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Sn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wr)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw M(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:hf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function pf(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Ft(s.updateTime):Ft(o);return a.isEqual(L.min())&&(a=Ft(o)),new Yd(a,s.transformResults||[])}(e,t))):[]}function gf(n,t){return{documents:[Wu(n,t.path)]}}function _f(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Wu(n,s);const o=function(f){if(f.length!==0)return Ju(xt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(I){return{field:ke(I.field),direction:vf(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Os(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:s}}function yf(n){let t=df(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const I=Xu(y);return I instanceof xt&&Cu(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(I=>function(V){return new bn(Oe(V.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(e.orderBy));let c=null;e.limit&&(c=function(y){let I;return I=typeof y=="object"?y.value:y,Vr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(y){const I=!!y.before,C=y.values||[];return new qe(C,I)}(e.startAt));let f=null;return e.endAt&&(f=function(y){const I=!y.before,C=y.values||[];return new qe(C,I)}(e.endAt)),Md(t,s,a,o,c,"F",h,f)}function Ef(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Oe(e.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Oe(e.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Oe(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Oe(e.unaryFilter.field);return ot.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return ot.create(Oe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(r=>Xu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function vf(n){return af[n]}function Tf(n){return uf[n]}function If(n){return lf[n]}function ke(n){return{fieldPath:n.canonicalString()}}function Oe(n){return ft.fromServerFormat(n.fieldPath)}function Ju(n){return n instanceof ot?function(e){if(e.op==="=="){if(oa(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NAN"}};if(ia(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(oa(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NAN"}};if(ia(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ke(e.field),op:Tf(e.op),value:e.value}}}(n):n instanceof xt?function(e){const r=e.getFilters().map(s=>Ju(s));return r.length===1?r[0]:{compositeFilter:{op:If(e.op),filters:r}}}(n):M(54877,{filter:n})}function wf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e,r,s,o=L.min(),a=L.min(),c=mt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.wt=t}}function Rf(n){const t=yf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ir(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.yn=new Cf}addToCollectionParentIndex(t,e){return this.yn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(se.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Cf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new lt(W.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new lt(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tl=41943040;class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(tl,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new je(0)}static ir(){return new je(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="LruGarbageCollector",Pf=1048576;function Ia([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class Sf{constructor(t){this.cr=t,this.buffer=new lt(Ia),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ia(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Vf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){O(Ta,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Qe(e)?O(Ta,"Ignoring IndexedDB error during garbage collection: ",e):await Ke(e)}await this.Ir(3e5)})}}class Df{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Sr.le);const r=new Sf(e);return this.Er.forEachTarget(t,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(t,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Er.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(va)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),va):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let r,s,o,a,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s))).next(y=>(r=y,c=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(f=Date.now(),De()<=G.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function Nf(n,t){return new Df(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.changes=new Ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&En(r.mutation,s,Ot.empty(),ut.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const s=ge();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=dn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ge();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=Kt();const a=yn(),c=function(){return yn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof we)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),En(m.mutation,f,m.mutation.getFieldMask(),ut.now())):a.set(f.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var y;return c.set(f,new Of(m,(y=a.get(f))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(t,e){const r=yn();let s=new tt((a,c)=>a-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Ot.empty();m=c.applyToLocalView(f,m),r.set(h,m);const y=(s.get(c.batchId)||j()).add(h);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,y=xu();m.forEach(I=>{if(!o.has(I)){const C=qu(e.get(I),r.get(I));C!==null&&y.set(I,C),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,y))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Zs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ge());let c=In,h=o;return a.next(f=>P.forEach(f,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{h=h.insert(m,I)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(m=>({batchId:c,changes:Ou(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=dn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=dn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const f=function(y,I){return new Te(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Tt.newInvalidDocument(m)))});let c=dn();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&En(m.mutation,f,Ot.empty(),ut.now()),Or(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return P.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(s){return{name:s.name,query:Rf(s.bundledQuery),readTime:Ft(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.overlays=new tt(x.comparator),this.Or=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ge();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ge(),o=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new tt((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=ge(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ge(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return P.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ef(e,r));let o=this.Or.get(e);o===void 0&&(o=j(),this.Or.set(e,o)),this.Or.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.Nr=new lt(ct.Br),this.Lr=new lt(ct.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Qr(new ct(t,e))}$r(t,e){t.forEach(r=>this.removeReference(r,e))}Ur(t){const e=new x(new W([])),r=new ct(e,t),s=new ct(e,t+1),o=[];return this.Lr.forEachInRange([r,s],a=>{this.Qr(a),o.push(a.key)}),o}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new x(new W([])),r=new ct(e,t),s=new ct(e,t+1);let o=j();return this.Lr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ct(t,0),r=this.Nr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return x.comparator(t.key,e.key)||q(t.Gr,e.Gr)}static kr(t,e){return q(t.Gr,e.Gr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new lt(ct.Br)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tf(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.zr=this.zr.add(new ct(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Hr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Qs:this.Jn-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),s=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,s],a=>{const c=this.jr(a.Gr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(q);return e.forEach(s=>{const o=new ct(s,0),a=new ct(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,a],c=>{r=r.add(c.Gr)})}),P.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new ct(new x(o),0);let c=new lt(q);return this.zr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Gr)),!0)},a),P.resolve(this.Jr(c))}Jr(t){const e=[];return t.forEach(r=>{const s=this.jr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return P.forEach(e.mutations,s=>{const o=new ct(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.zr=r})}Xn(t){}containsKey(t,e){const r=new ct(e,0),s=this.zr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t){this.Zr=t,this.docs=function(){return new tt(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Zr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=Kt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Kt();const a=e.path,c=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||md(fd(m),r)<=0||(s.has(m.key)||Or(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}Xr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new qf(this)}getSize(t){return P.resolve(this.size)}}class qf extends kf{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.vr.addEntry(t,s)):this.vr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this.persistence=t,this.ei=new Ie(e=>Ys(e),Xs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ti=0,this.ni=new si,this.targetCount=0,this.ri=je.rr()}forEachTarget(t,e){return this.ei.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ti&&(this.ti=e),P.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new je(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.ar(e),P.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ei.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ei.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.ei.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.ni.qr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.ni.$r(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ni.Wr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e){this.ii={},this.overlays={},this.si=new Sr(0),this.oi=!1,this.oi=!0,this._i=new Ff,this.referenceDelegate=t(this),this.ai=new jf(this),this.indexManager=new bf,this.remoteDocumentCache=function(s){return new Bf(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new Af(e),this.ci=new Mf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Lf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ii[t.toKey()];return r||(r=new Uf(e,this.referenceDelegate),this.ii[t.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,r){O("MemoryPersistence","Starting transaction:",t);const s=new $f(this.si.next());return this.referenceDelegate.li(),r(s).next(o=>this.referenceDelegate.hi(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Pi(t,e){return P.or(Object.values(this.ii).map(r=>()=>r.containsKey(t,e)))}}class $f extends gd{constructor(t){super(),this.currentSequenceNumber=t}}class ii{constructor(t){this.persistence=t,this.Ti=new si,this.Ii=null}static Ei(t){return new ii(t)}get di(){if(this.Ii)return this.Ii;throw M(60996)}addReference(t,e,r){return this.Ti.addReference(r,e),this.di.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Ti.removeReference(r,e),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const s=x.fromPath(r);return this.Ai(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return P.or([()=>P.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Rr{constructor(t,e){this.persistence=t,this.Ri=new Ie(r=>Ed(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Nf(this,e)}static Ei(t,e){return new Rr(t,e)}li(){}hi(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}Vr(t){let e=0;return this.Ar(t,r=>{e++}).next(()=>e)}Ar(t,e){return P.forEach(this.Ri,(r,s)=>this.gr(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Xr(t,a=>this.gr(t,a,e).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),P.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=lr(t.data.value)),e}gr(t,e,r){return P.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.Ri.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ls=r,this.hs=s}static Ps(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new oi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Fc()?8:_d(Mc())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Vs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zf;return this.fs(t,e,a).next(c=>{if(o.result=c,this.Is)return this.gs(t,e,a,c.size)})}).next(()=>o.result)}gs(t,e,r,s){return r.documentReadCount<this.Es?(De()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),P.resolve()):(De()<=G.DEBUG&&O("QueryEngine","Query:",Ne(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(De()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Lt(e))):P.resolve())}Rs(t,e){if(ca(e))return P.resolve(null);let r=Lt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ir(e,null,"F"),r=Lt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=j(...o);return this.As.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ps(e,c);return this.ys(e,f,a,h.readTime)?this.Rs(t,Ir(e,null,"F")):this.ws(t,f,e,h)}))})))}Vs(t,e,r,s){return ca(e)||s.isEqual(L.min())?P.resolve(null):this.As.getDocuments(t,r).next(o=>{const a=this.ps(e,o);return this.ys(e,a,r,s)?P.resolve(null):(De()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ne(e)),this.ws(t,a,e,dd(s,In)).next(c=>c))})}ps(t,e){let r=new lt(Nu(t));return e.forEach((s,o)=>{Or(t,o)&&(r=r.add(o))}),r}ys(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}fs(t,e,r){return De()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.As.getDocumentsMatchingQuery(t,e,se.min(),r)}ws(t,e,r,s){return this.As.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="LocalStore",Hf=3e8;class Kf{constructor(t,e,r,s){this.persistence=t,this.bs=e,this.serializer=s,this.Ss=new tt(q),this.Ds=new Ie(o=>Ys(o),Xs),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(r)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xf(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function Qf(n,t,e,r){return new Kf(n,t,e,r)}async function nl(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Fs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=j();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ms:f,removedBatchIds:a,addedBatchIds:c}))})})}function Wf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const y=f.batch,I=y.keys();let C=P.resolve();return I.forEach(V=>{C=C.next(()=>m.getEntry(h,V)).next(N=>{const S=f.docVersions.get(V);K(S!==null,48541),N.version.compareTo(S)<0&&(y.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),m.addEntry(N)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=j();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function rl(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function Yf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Cs.newChangeBuffer({trackRemovals:!0});s=e.Ss;const c=[];t.targetChanges.forEach((m,y)=>{const I=s.get(y);if(!I)return;c.push(e.ai.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.ai.addMatchingKeys(o,m.addedDocuments,y)));let C=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?C=C.withResumeToken(mt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(y,C),function(N,S,B){return N.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Hf?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(I,C,m)&&c.push(e.ai.updateTargetData(o,C))});let h=Kt(),f=j();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Xf(o,a,t.documentUpdates).next(m=>{h=m.xs,f=m.Os})),!r.isEqual(L.min())){const m=e.ai.getLastRemoteSnapshotVersion(o).next(y=>e.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ss=s,o))}function Xf(n,t,e){let r=j(),s=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Kt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):O(ai,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{xs:a,Os:s}})}function Jf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Qs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Zf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.ai.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.ai.allocateTargetId(r).next(a=>(s=new Xt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(r.targetId,r),e.Ds.set(t,r.targetId)),r})}async function Fs(n,t,e){const r=F(n),s=r.Ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Qe(a))throw a;O(ai,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ss=r.Ss.remove(t),r.Ds.delete(s.target)}function wa(n,t,e){const r=F(n);let s=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const y=F(h),I=y.Ds.get(m);return I!==void 0?P.resolve(y.Ss.get(I)):y.ai.getTargetData(f,m)}(r,a,Lt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.bs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:j())).next(c=>(tm(r,Fd(t),c),{documents:c,Ns:o})))}function tm(n,t,e){let r=n.vs.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(t,r)}class Aa{constructor(){this.activeTargetIds=zd()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class em{constructor(){this.So=new Aa,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,r){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Aa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="ConnectivityMonitor";class ba{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){O(Ra,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){O(Ra,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function Us(){return sr===null?sr=function(){return 268435456+Math.round(2147483648*Math.random())}():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="RestConnection",rm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sm{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Er?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(t,e,r,s,o){const a=Us(),c=this.$o(t,e.toUriEncodedString());O(ys,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(h,s,o);const{host:f}=new URL(c),m=Gs(f);return this.Ko(t,c,h,r,m).then(y=>(O(ys,`Received RPC '${t}' ${a}: `,y),y),y=>{throw Le(ys,`RPC '${t}' ${a} failed with error: `,y,"url: ",c,"request:",r),y})}Wo(t,e,r,s,o,a){return this.Qo(t,e,r,s,o)}Uo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+He}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}$o(t,e){const r=rm[t];return`${this.Lo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class om extends sm{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,r,s,o){const a=Us();return new Promise((c,h)=>{const f=new ou;f.setWithCredentials(!0),f.listenOnce(au.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ur.NO_ERROR:const y=f.getResponseJson();O(Et,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),c(y);break;case ur.TIMEOUT:O(Et,`RPC '${t}' ${a} timed out`),h(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case ur.HTTP_ERROR:const I=f.getStatus();if(O(Et,`RPC '${t}' ${a} failed with status:`,I,"response text:",f.getResponseText()),I>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C==null?void 0:C.error;if(V&&V.status&&V.message){const N=function(B){const U=B.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(U)>=0?U:b.UNKNOWN}(V.status);h(new k(N,V.message))}else h(new k(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new k(b.UNAVAILABLE,"Connection failed."));break;default:M(9055,{s_:t,streamId:a,o_:f.getLastErrorCode(),__:f.getLastError()})}}finally{O(Et,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);O(Et,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,r,15)})}a_(t,e,r){const s=Us(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=cu(),c=lu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Uo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");O(Et,`Creating RPC '${t}' stream ${s}: ${m}`,h);const y=a.createWebChannel(m,h);let I=!1,C=!1;const V=new im({Go:S=>{C?O(Et,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(I||(O(Et,`Opening RPC '${t}' stream ${s} transport.`),y.open(),I=!0),O(Et,`RPC '${t}' stream ${s} sending:`,S),y.send(S))},zo:()=>y.close()}),N=(S,B,U)=>{S.listen(B,$=>{try{U($)}catch(X){setTimeout(()=>{throw X},0)}})};return N(y,hn.EventType.OPEN,()=>{C||(O(Et,`RPC '${t}' stream ${s} transport opened.`),V.t_())}),N(y,hn.EventType.CLOSE,()=>{C||(C=!0,O(Et,`RPC '${t}' stream ${s} transport closed`),V.r_())}),N(y,hn.EventType.ERROR,S=>{C||(C=!0,Le(Et,`RPC '${t}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),V.r_(new k(b.UNAVAILABLE,"The operation could not be completed")))}),N(y,hn.EventType.MESSAGE,S=>{var B;if(!C){const U=S.data[0];K(!!U,16349);const $=U,X=($==null?void 0:$.error)||((B=$[0])===null||B===void 0?void 0:B.error);if(X){O(Et,`RPC '${t}' stream ${s} received error:`,X);const Ct=X.status;let J=function(g){const E=it[g];if(E!==void 0)return zu(E)}(Ct),v=X.message;J===void 0&&(J=b.INTERNAL,v="Unknown error status: "+Ct+" with message "+X.message),C=!0,V.r_(new k(J,v)),y.close()}else O(Et,`RPC '${t}' stream ${s} received:`,U),V.i_(U)}}),N(c,uu.STAT_EVENT,S=>{S.stat===Cs.PROXY?O(Et,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===Cs.NOPROXY&&O(Et,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.n_()},0),V}}function Es(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){return new cf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.bi=t,this.timerId=e,this.u_=r,this.c_=s,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,e-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="PersistentStream";class il{constructor(t,e,r,s,o,a,c,h){this.bi=t,this.R_=r,this.V_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new sl(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Ht(e.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===e&&this.B_(r,s)},r=>{t(()=>{const s=new k(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(t,e){const r=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return O(Ca,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(O(Ca,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class am extends il{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=ff(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Ft(a.readTime):L.min()}(t);return this.listener.Q_(e,r)}U_(t){const e={};e.database=Ls(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ns(h)?{documents:gf(o,h)}:{query:_f(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ku(o,a.resumeToken);const f=Os(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=Ar(o,a.snapshotVersion.toTimestamp());const f=Os(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Ef(this.serializer,t);r&&(e.labels=r),this.F_(e)}K_(t){const e={};e.database=Ls(this.serializer),e.removeTarget=t,this.F_(e)}}class um extends il{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=pf(t.writeResults,t.commitTime),r=Ft(t.commitTime);return this.listener.j_(r,e)}H_(){const t={};t.database=Ls(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>mf(this.serializer,r))};this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{}class cm extends lm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Qo(t,xs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(b.UNKNOWN,o.toString())})}Wo(t,e,r,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Wo(t,xs(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(b.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class hm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Ht(e),this.ea=!1):O("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="RemoteStore";class dm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(a=>{r.enqueueAndForget(async()=>{Ae(this)&&(O(Ee,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.aa.add(4),await kn(f),f.la.set("Unknown"),f.aa.delete(4),await Ur(f)}(this))})}),this.la=new hm(r,s)}}async function Ur(n){if(Ae(n))for(const t of n.ua)await t(!0)}async function kn(n){for(const t of n.ua)await t(!1)}function ol(n,t){const e=F(n);e._a.has(t.targetId)||(e._a.set(t.targetId,t),hi(e)?ci(e):We(e).b_()&&li(e,t))}function ui(n,t){const e=F(n),r=We(e);e._a.delete(t),r.b_()&&al(e,t),e._a.size===0&&(r.b_()?r.v_():Ae(e)&&e.la.set("Unknown"))}function li(n,t){if(n.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}We(n).U_(t)}function al(n,t){n.ha.Ke(t),We(n).K_(t)}function ci(n){n.ha=new of({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n._a.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),We(n).start(),n.la.ta()}function hi(n){return Ae(n)&&!We(n).w_()&&n._a.size>0}function Ae(n){return F(n).aa.size===0}function ul(n){n.ha=void 0}async function fm(n){n.la.set("Online")}async function mm(n){n._a.forEach((t,e)=>{li(n,t)})}async function pm(n,t){ul(n),hi(n)?(n.la.ia(t),ci(n)):n.la.set("Unknown")}async function gm(n,t,e){if(n.la.set("Online"),t instanceof Hu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s._a.delete(c),s.ha.removeTarget(c))}(n,t)}catch(r){O(Ee,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await br(n,r)}else if(t instanceof dr?n.ha.Xe(t):t instanceof Gu?n.ha.ot(t):n.ha.nt(t),!e.isEqual(L.min()))try{const r=await rl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.ha.It(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o._a.get(f);m&&o._a.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=o._a.get(h);if(!m)return;o._a.set(h,m.withResumeToken(mt.EMPTY_BYTE_STRING,m.snapshotVersion)),al(o,h);const y=new Xt(m.target,h,f,m.sequenceNumber);li(o,y)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){O(Ee,"Failed to raise snapshot:",r),await br(n,r)}}async function br(n,t,e){if(!Qe(t))throw t;n.aa.add(1),await kn(n),n.la.set("Offline"),e||(e=()=>rl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(Ee,"Retrying IndexedDB access"),await e(),n.aa.delete(1),await Ur(n)})}function ll(n,t){return t().catch(e=>br(n,e,t))}async function Br(n){const t=F(n),e=ue(t);let r=t.oa.length>0?t.oa[t.oa.length-1].batchId:Qs;for(;_m(t);)try{const s=await Jf(t.localStore,r);if(s===null){t.oa.length===0&&e.v_();break}r=s.batchId,ym(t,s)}catch(s){await br(t,s)}cl(t)&&hl(t)}function _m(n){return Ae(n)&&n.oa.length<10}function ym(n,t){n.oa.push(t);const e=ue(n);e.b_()&&e.W_&&e.G_(t.mutations)}function cl(n){return Ae(n)&&!ue(n).w_()&&n.oa.length>0}function hl(n){ue(n).start()}async function Em(n){ue(n).H_()}async function vm(n){const t=ue(n);for(const e of n.oa)t.G_(e.mutations)}async function Tm(n,t,e){const r=n.oa.shift(),s=ei.from(r,t,e);await ll(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Br(n)}async function Im(n,t){t&&ue(n).W_&&await async function(r,s){if(function(a){return rf(a)&&a!==b.ABORTED}(s.code)){const o=r.oa.shift();ue(r).D_(),await ll(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Br(r)}}(n,t),cl(n)&&hl(n)}async function Pa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),O(Ee,"RemoteStore received new credentials");const r=Ae(e);e.aa.add(3),await kn(e),r&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await Ur(e)}async function wm(n,t){const e=F(n);t?(e.aa.delete(2),await Ur(e)):t||(e.aa.add(2),await kn(e),e.la.set("Unknown"))}function We(n){return n.Pa||(n.Pa=function(e,r,s){const o=F(e);return o.Y_(),new am(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{jo:fm.bind(null,n),Jo:mm.bind(null,n),Zo:pm.bind(null,n),Q_:gm.bind(null,n)}),n.ua.push(async t=>{t?(n.Pa.D_(),hi(n)?ci(n):n.la.set("Unknown")):(await n.Pa.stop(),ul(n))})),n.Pa}function ue(n){return n.Ta||(n.Ta=function(e,r,s){const o=F(e);return o.Y_(),new um(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:Em.bind(null,n),Zo:Im.bind(null,n),z_:vm.bind(null,n),j_:Tm.bind(null,n)}),n.ua.push(async t=>{t?(n.Ta.D_(),await Br(n)):(await n.Ta.stop(),n.oa.length>0&&(O(Ee,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new di(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fi(n,t){if(Ht("AsyncQueue",`${t}: ${n}`),Qe(n))return new k(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{static emptySet(t){return new Me(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=dn(),this.sortedSet=new tt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Me;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.Ia=new tt(x.comparator)}track(t){const e=t.doc.key,r=this.Ia.get(e);r?t.type!==0&&r.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&r.type!==1?this.Ia=this.Ia.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Ia=this.Ia.remove(e):t.type===1&&r.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,Ea:r}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,r)=>{t.push(r)}),t}}class $e{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new $e(t,e,Me.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class Rm{constructor(){this.queries=Va(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=Va(),o.forEach((a,c)=>{for(const h of c.Ra)h.onError(r)})})(this,new k(b.ABORTED,"Firestore shutting down"))}}function Va(){return new Ie(n=>Du(n),kr)}async function dl(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Va()&&t.ma()&&(r=2):(o=new Am,r=t.ma()?0:1);try{switch(r){case 0:o.Aa=await e.onListen(s,!0);break;case 1:o.Aa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=fi(a,`Initialization of query '${Ne(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.Ra.push(t),t.ga(e.onlineState),o.Aa&&t.pa(o.Aa)&&mi(e)}async function fl(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Ra.indexOf(t);a>=0&&(o.Ra.splice(a,1),o.Ra.length===0?s=t.ma()?0:1:!o.Va()&&t.ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function bm(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Ra)c.pa(s)&&(r=!0);a.Aa=s}}r&&mi(e)}function Cm(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Ra)o.onError(e);r.queries.delete(t)}function mi(n){n.fa.forEach(t=>{t.next()})}var Bs,Da;(Da=Bs||(Bs={})).ya="default",Da.Cache="cache";class ml{constructor(t,e,r){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new $e(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const r=e!=="Offline";return(!this.options.Fa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=$e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==Bs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.key=t}}class gl{constructor(t){this.key=t}}class Pm{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=j(),this.mutatedKeys=j(),this.Ua=Nu(t),this.Ka=new Me(this.Ua)}get Wa(){return this.qa}Ga(t,e){const r=e?e.za:new Sa,s=e?e.Ka:this.Ka;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,y)=>{const I=s.get(m),C=Or(this.query,y)?y:null,V=!!I&&this.mutatedKeys.has(I.key),N=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let S=!1;I&&C?I.data.isEqual(C.data)?V!==N&&(r.track({type:3,doc:C}),S=!0):this.ja(I,C)||(r.track({type:2,doc:C}),S=!0,(h&&this.Ua(C,h)>0||f&&this.Ua(C,f)<0)&&(c=!0)):!I&&C?(r.track({type:0,doc:C}),S=!0):I&&!C&&(r.track({type:1,doc:I}),S=!0,(h||f)&&(c=!0)),S&&(C?(a=a.add(C),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ka:a,za:r,ys:c,mutatedKeys:o}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const a=t.za.da();a.sort((m,y)=>function(C,V){const N=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:S})}};return N(C)-N(V)}(m.type,y.type)||this.Ua(m.doc,y.doc)),this.Ha(r),s=s!=null&&s;const c=e&&!s?this.Ja():[],h=this.$a.size===0&&this.current&&!s?1:0,f=h!==this.Qa;return this.Qa=h,a.length!==0||f?{snapshot:new $e(this.query,t.Ka,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Sa,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=j(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const e=[];return t.forEach(r=>{this.$a.has(r)||e.push(new gl(r))}),this.$a.forEach(r=>{t.has(r)||e.push(new pl(r))}),e}Xa(t){this.qa=t.Ns,this.$a=j();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return $e.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const pi="SyncEngine";class Sm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Vm{constructor(t){this.key=t,this.tu=!1}}class Dm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new Ie(c=>Du(c),kr),this.iu=new Map,this.su=new Set,this.ou=new tt(x.comparator),this._u=new Map,this.au=new si,this.uu={},this.cu=new Map,this.lu=je.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Nm(n,t,e=!0){const r=Il(n);let s;const o=r.ru.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.eu()):s=await _l(r,t,e,!0),s}async function km(n,t){const e=Il(n);await _l(e,t,!0,!1)}async function _l(n,t,e,r){const s=await Zf(n.localStore,Lt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Om(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ol(n.remoteStore,s),c}async function Om(n,t,e,r,s){n.Pu=(y,I,C)=>async function(N,S,B,U){let $=S.view.Ga(B);$.ys&&($=await wa(N.localStore,S.query,!1).then(({documents:v})=>S.view.Ga(v,$)));const X=U&&U.targetChanges.get(S.targetId),Ct=U&&U.targetMismatches.get(S.targetId)!=null,J=S.view.applyChanges($,N.isPrimaryClient,X,Ct);return ka(N,S.targetId,J.Ya),J.snapshot}(n,y,I,C);const o=await wa(n.localStore,t,!0),a=new Pm(t,o.Ns),c=a.Ga(o.documents),h=Nn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);ka(n,e,f.Ya);const m=new Sm(t,e,a);return n.ru.set(t,m),n.iu.has(e)?n.iu.get(e).push(t):n.iu.set(e,[t]),f.snapshot}async function xm(n,t,e){const r=F(n),s=r.ru.get(t),o=r.iu.get(s.targetId);if(o.length>1)return r.iu.set(s.targetId,o.filter(a=>!kr(a,t))),void r.ru.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ui(r.remoteStore,s.targetId),qs(r,s.targetId)}).catch(Ke)):(qs(r,s.targetId),await Fs(r.localStore,s.targetId,!0))}async function Mm(n,t){const e=F(n),r=e.ru.get(t),s=e.iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ui(e.remoteStore,r.targetId))}async function Lm(n,t,e){const r=zm(n);try{const s=await function(a,c){const h=F(a),f=ut.now(),m=c.reduce((C,V)=>C.add(V.key),j());let y,I;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=Kt(),N=j();return h.Cs.getEntries(C,m).next(S=>{V=S,V.forEach((B,U)=>{U.isValidDocument()||(N=N.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,V)).next(S=>{y=S;const B=[];for(const U of c){const $=Jd(U,y.get(U.key).overlayedDocument);$!=null&&B.push(new we(U.key,$,Au($.value.mapValue),zt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,B,c)}).next(S=>{I=S;const B=S.applyToLocalDocumentSet(y,N);return h.documentOverlayCache.saveOverlays(C,S.batchId,B)})}).then(()=>({batchId:I.batchId,changes:Ou(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let f=a.uu[a.currentUser.toKey()];f||(f=new tt(q)),f=f.insert(c,h),a.uu[a.currentUser.toKey()]=f}(r,s.batchId,e),await On(r,s.changes),await Br(r.remoteStore)}catch(s){const o=fi(s,"Failed to persist write");e.reject(o)}}async function yl(n,t){const e=F(n);try{const r=await Yf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e._u.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?K(a.tu,14607):s.removedDocuments.size>0&&(K(a.tu,42227),a.tu=!1))}),await On(e,r,t)}catch(r){await Ke(r)}}function Na(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ru.forEach((o,a)=>{const c=a.view.ga(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let f=!1;h.queries.forEach((m,y)=>{for(const I of y.Ra)I.ga(c)&&(f=!0)}),f&&mi(h)}(r.eventManager,t),s.length&&r.nu.Q_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Fm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r._u.get(t),o=s&&s.key;if(o){let a=new tt(x.comparator);a=a.insert(o,Tt.newNoDocument(o,L.min()));const c=j().add(o),h=new Lr(L.min(),new Map,new tt(q),a,c);await yl(r,h),r.ou=r.ou.remove(o),r._u.delete(t),gi(r)}else await Fs(r.localStore,t,!1).then(()=>qs(r,t,e)).catch(Ke)}async function Um(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Wf(e.localStore,t);vl(e,r,null),El(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await On(e,s)}catch(s){await Ke(s)}}async function Bm(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(y=>(K(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(f,y))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);vl(r,t,e),El(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await On(r,s)}catch(s){await Ke(s)}}function El(n,t){(n.cu.get(t)||[]).forEach(e=>{e.resolve()}),n.cu.delete(t)}function vl(n,t,e){const r=F(n);let s=r.uu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.uu[r.currentUser.toKey()]=s}}function qs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.iu.get(t))n.ru.delete(r),e&&n.nu.Tu(r,e);n.iu.delete(t),n.isPrimaryClient&&n.au.Ur(t).forEach(r=>{n.au.containsKey(r)||Tl(n,r)})}function Tl(n,t){n.su.delete(t.path.canonicalString());const e=n.ou.get(t);e!==null&&(ui(n.remoteStore,e),n.ou=n.ou.remove(t),n._u.delete(e),gi(n))}function ka(n,t,e){for(const r of e)r instanceof pl?(n.au.addReference(r.key,t),qm(n,r)):r instanceof gl?(O(pi,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,t),n.au.containsKey(r.key)||Tl(n,r.key)):M(19791,{Iu:r})}function qm(n,t){const e=t.key,r=e.path.canonicalString();n.ou.get(e)||n.su.has(r)||(O(pi,"New document in limbo: "+e),n.su.add(r),gi(n))}function gi(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const t=n.su.values().next().value;n.su.delete(t);const e=new x(W.fromString(t)),r=n.lu.next();n._u.set(r,new Vm(e)),n.ou=n.ou.insert(e,r),ol(n.remoteStore,new Xt(Lt(Js(e.path)),r,"TargetPurposeLimboResolution",Sr.le))}}async function On(n,t,e){const r=F(n),s=[],o=[],a=[];r.ru.isEmpty()||(r.ru.forEach((c,h)=>{a.push(r.Pu(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const y=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(f){s.push(f);const y=oi.Ps(h.targetId,f);o.push(y)}}))}),await Promise.all(a),r.nu.Q_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>P.forEach(f,I=>P.forEach(I.ls,C=>m.persistence.referenceDelegate.addReference(y,I.targetId,C)).next(()=>P.forEach(I.hs,C=>m.persistence.referenceDelegate.removeReference(y,I.targetId,C)))))}catch(y){if(!Qe(y))throw y;O(ai,"Failed to update sequence numbers: "+y)}for(const y of f){const I=y.targetId;if(!y.fromCache){const C=m.Ss.get(I),V=C.snapshotVersion,N=C.withLastLimboFreeSnapshotVersion(V);m.Ss=m.Ss.insert(I,N)}}}(r.localStore,o))}async function jm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){O(pi,"User change. New user:",t.toKey());const r=await nl(e.localStore,t);e.currentUser=t,function(o,a){o.cu.forEach(c=>{c.forEach(h=>{h.reject(new k(b.CANCELLED,a))})}),o.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await On(e,r.Ms)}}function $m(n,t){const e=F(n),r=e._u.get(t);if(r&&r.tu)return j().add(r.key);{let s=j();const o=e.iu.get(t);if(!o)return s;for(const a of o){const c=e.ru.get(a);s=s.unionWith(c.view.Wa)}return s}}function Il(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=yl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$m.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Fm.bind(null,t),t.nu.Q_=bm.bind(null,t.eventManager),t.nu.Tu=Cm.bind(null,t.eventManager),t}function zm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Um.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bm.bind(null,t),t}class Cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fr(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return Qf(this.persistence,new Gf,t.initialUser,this.serializer)}Ru(t){return new el(ii.Ei,this.serializer)}Au(t){return new em}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cr.provider={build:()=>new Cr};class Gm extends Cr{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){K(this.persistence.referenceDelegate instanceof Rr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Vf(r,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new el(r=>Rr.Ei(r,e),this.serializer)}}class js{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Na(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jm.bind(null,this.syncEngine),await wm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Rm}()}createDatastore(t){const e=Fr(t.databaseInfo.databaseId),r=function(o){return new om(o)}(t.databaseInfo);return function(o,a,c,h){return new cm(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new dm(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Na(this.syncEngine,e,0),function(){return ba.C()?new ba:new nm}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,m){const y=new Dm(s,o,a,c,h,f);return m&&(y.hu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);O(Ee,"RemoteStore shutting down."),o.aa.add(5),await kn(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}js.provider={build:()=>new js};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Ht("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="FirestoreClient";class Hm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=mu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O(le,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(le,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=fi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function vs(n,t){n.asyncQueue.verifyOperationInProgress(),O(le,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Oa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Km(n);O(le,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Pa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Pa(t.remoteStore,s)),n._onlineComponents=t}async function Km(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(le,"Using user provided OfflineComponentProvider");try{await vs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await vs(n,new Cr)}}else O(le,"Using default OfflineComponentProvider"),await vs(n,new Gm(void 0));return n._offlineComponents}async function Al(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(le,"Using user provided OnlineComponentProvider"),await Oa(n,n._uninitializedComponentsProvider._online)):(O(le,"Using default OnlineComponentProvider"),await Oa(n,new js))),n._onlineComponents}function Qm(n){return Al(n).then(t=>t.syncEngine)}async function $s(n){const t=await Al(n),e=t.eventManager;return e.onListen=Nm.bind(null,t.syncEngine),e.onUnlisten=xm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=km.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Mm.bind(null,t.syncEngine),e}function Wm(n,t,e={}){const r=new ee;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new wl({next:I=>{m.yu(),a.enqueueAndForget(()=>fl(o,y)),I.fromCache&&h.source==="server"?f.reject(new k(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(I)},error:I=>f.reject(I)}),y=new ml(c,m,{includeMetadataChanges:!0,Fa:!0});return dl(o,y)}(await $s(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n,t,e){if(!e)throw new k(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ym(n,t,e,r){if(t===!0&&r===!0)throw new k(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ma(n){if(!x.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function La(n){if(x.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function _e(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qr(n);throw new k(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="firestore.googleapis.com",Fa=!0;class Ua{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cl,this.ssl=Fa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Fa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=tl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Pf)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ym("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class jr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rd;switch(r.type){case"firstParty":return new ad(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Ja("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=xa.get(e);r&&(O("ComponentProvider","Removing Datastore"),xa.delete(e),r.terminate())}(this),Promise.resolve()}}function Xm(n,t,e,r={}){var s;n=_e(n,jr);const o=Gs(t),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;a.host!==Cl&&a.host!==h&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!pr(f,c)&&(n._setSettings(f),o&&(Nc(`https://${h}`),Ja("Firestore",!0)),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=vt.MOCK_USER;else{m=kc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new vt(I)}n._authCredentials=new sd(new du(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Bt(this.firestore,t,this._query)}}class St{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class ne extends Bt{constructor(t,e,r){super(t,e,Js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new x(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Ba(n,t,...e){if(n=re(n),bl("collection","path",t),n instanceof jr){const r=W.fromString(t,...e);return La(r),new ne(n,null,r)}{if(!(n instanceof St||n instanceof ne))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return La(r),new ne(n.firestore,null,r)}}function Jm(n,t,...e){if(n=re(n),arguments.length===1&&(t=mu.newId()),bl("doc","path",t),n instanceof jr){const r=W.fromString(t,...e);return Ma(r),new St(n,null,new x(r))}{if(!(n instanceof St||n instanceof ne))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return Ma(r),new St(n.firestore,n instanceof ne?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="AsyncQueue";class ja{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new sl(this,"async_queue_retry"),this.ju=()=>{const r=Es();r&&O(qa,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=t;const e=Es();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=Es();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new ee;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Qe(t))throw t;O(qa,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(r=>{throw this.Ku=r,this.Wu=!1,Ht("INTERNAL UNHANDLED ERROR: ",$a(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=e,e}enqueueAfterDelay(t,e,r){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const s=di.createAndSchedule(this,t,e,r,o=>this.Xu(o));return this.Uu.push(s),s}Ju(){this.Ku&&M(47125,{ec:$a(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function $a(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Vn extends jr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ja,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ja(t),this._firestoreClient=void 0,await t}}}function Zm(n,t){const e=typeof n=="object"?n:Hh(),r=typeof n=="string"?n:Er,s=Bh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Vc("firestore");o&&Xm(s,...o)}return s}function _i(n){if(n._terminated)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tp(n),n._firestoreClient}function tp(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,m){return new Id(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Rl(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Hm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ze(mt.fromBase64String(t))}catch(e){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ze(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=/^__.*__$/;class np{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new we(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dn(t,this.data,e,this.fieldTransforms)}}function Pl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{oc:n})}}class Ii{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new Ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:r,cc:!1});return s.lc(t),s}hc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Pr(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(Pl(this.oc)&&ep.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class rp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Fr(t)}dc(t,e,r,s=!1){return new Ii({oc:t,methodName:e,Ec:r,path:ft.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wi(n){const t=n._freezeSettings(),e=Fr(n._databaseId);return new rp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sp(n,t,e,r,s,o={}){const a=n.dc(o.merge||o.mergeFields?2:0,t,e,s);Nl("Data must be an object, but it was:",a,r);const c=Vl(r,a);let h,f;if(o.merge)h=new Ot(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const I=ip(t,y,e);if(!a.contains(I))throw new k(b.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);ap(m,I)||m.push(I)}h=new Ot(m),f=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,f=a.fieldTransforms;return new np(new Dt(c),h,f)}class Ai extends Ei{_toFieldTransform(t){return new Qd(t.path,new Cn)}isEqual(t){return t instanceof Ai}}function Sl(n,t,e,r=!1){return Ri(e,n.dc(r?4:3,t))}function Ri(n,t){if(Dl(n=re(n)))return Nl("Unsupported field value:",t,n),Vl(n,t);if(n instanceof Ei)return function(r,s){if(!Pl(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Ri(c,s.Pc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ut.fromDate(r);return{timestampValue:Ar(s.serializer,o)}}if(r instanceof ut){const o=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ar(s.serializer,o)}}if(r instanceof vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ze)return{bytesValue:Ku(s.serializer,r._byteString)};if(r instanceof St){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ri(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ti)return function(a,c){return{mapValue:{fields:{[Iu]:{stringValue:wu},[vr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw c.Tc("VectorValues must only contain numeric values.");return ti(c.serializer,f)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${qr(r)}`)}(n,t)}function Vl(n,t){const e={};return gu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(n,(r,s)=>{const o=Ri(s,t.uc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Dl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof vi||n instanceof ze||n instanceof St||n instanceof Ei||n instanceof Ti)}function Nl(n,t,e){if(!Dl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=qr(e);throw r==="an object"?t.Tc(n+" a custom object"):t.Tc(n+" "+r)}}function ip(n,t,e){if((t=re(t))instanceof yi)return t._internalPath;if(typeof t=="string")return kl(n,t);throw Pr("Field path arguments must be of type string or ",n,!1,void 0,e)}const op=new RegExp("[~\\*/\\[\\]]");function kl(n,t,e){if(t.search(op)>=0)throw Pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new yi(...t.split("."))._internalPath}catch{throw Pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Pr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(b.INVALID_ARGUMENT,c+n+h)}function ap(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new up(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ci("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class up extends bi{data(){return super.data()}}function Ci(n,t){return typeof t=="string"?kl(n,t):t instanceof yi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pi{}class $r extends Pi{}function Se(n,t,...e){let r=[];t instanceof Pi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Vi).length,c=o.filter(h=>h instanceof Si).length;if(a>1||a>0&&c>0)throw new k(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Si extends $r{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Si(t,e,r)}_apply(t){const e=this._parse(t);return xl(t._query,e),new Bt(t.firestore,t.converter,ks(t._query,e))}_parse(t){const e=wi(t.firestore);return function(o,a,c,h,f,m,y){let I;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new k(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ka(y,m);const V=[];for(const N of y)V.push(Ha(h,o,N));I={arrayValue:{values:V}}}else I=Ha(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ka(y,m),I=Sl(c,a,y,m==="in"||m==="not-in");return ot.create(f,m,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Vi extends Pi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Vi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:xt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)xl(a,h),a=ks(a,h)}(t._query,e),new Bt(t.firestore,t.converter,ks(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Di extends $r{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Di(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bn(o,a)}(t._query,this._field,this._direction);return new Bt(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Te(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Ve(n,t="asc"){const e=t,r=Ci("orderBy",n);return Di._create(r,e)}class Ni extends $r{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ni(t,e,r)}_apply(t){return new Bt(t.firestore,t.converter,Ir(t._query,this._limit,this._limitType))}}function ir(n){return Ni._create("limit",n,"F")}class ki extends $r{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ki(t,e,r)}_apply(t){const e=lp(t,this.type,this._docOrFields,this._inclusive);return new Bt(t.firestore,t.converter,function(s,o){return new Te(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,o,s.endAt)}(t._query,e))}}function Ga(...n){return ki._create("startAfter",n,!1)}function lp(n,t,e,r){if(e[0]=re(e[0]),e[0]instanceof bi)return function(o,a,c,h,f){if(!h)throw new k(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const m=[];for(const y of xe(o))if(y.field.isKeyField())m.push(Tr(a,h.key));else{const I=h.data.field(y.field);if(Dr(I))throw new k(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+y.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(I===null){const C=y.field.canonicalString();throw new k(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${C}' (used as the orderBy) does not exist.`)}m.push(I)}return new qe(m,f)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=wi(n.firestore);return function(a,c,h,f,m,y){const I=a.explicitOrderBy;if(m.length>I.length)throw new k(b.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const C=[];for(let V=0;V<m.length;V++){const N=m[V];if(I[V].field.isKeyField()){if(typeof N!="string")throw new k(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof N}`);if(!Zs(a)&&N.indexOf("/")!==-1)throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${N}' contains a slash.`);const S=a.path.child(W.fromString(N));if(!x.isDocumentKey(S))throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const B=new x(S);C.push(Tr(c,B))}else{const S=Sl(h,f,N);C.push(S)}}return new qe(C,y)}(n._query,n.firestore._databaseId,s,t,e,r)}}function Ha(n,t,e){if(typeof(e=re(e))=="string"){if(e==="")throw new k(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zs(t)&&e.indexOf("/")!==-1)throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(W.fromString(e));if(!x.isDocumentKey(r))throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tr(n,new x(r))}if(e instanceof St)return Tr(n,e._key);throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qr(e)}.`)}function Ka(n,t){if(!Array.isArray(n)||n.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xl(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class cp{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ve(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[vr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>rt(a.doubleValue));return new Ti(o)}convertGeoPoint(t){return new vi(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Nr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(wn(t));default:return null}}convertTimestamp(t){const e=ie(t);return new ut(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=W.fromString(t);K(Zu(r),9688,{name:t});const s=new An(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(e)||Ht(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ml extends bi{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ci("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class fr extends Ml{data(t={}){return super.data(t)}}class Ll{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new fr(this._firestore,this._userDataWriter,r.key,r,new mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new fr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new fr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:dp(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}class Oi extends cp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ze(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new St(this.firestore,null,e)}}function Ts(n){n=_e(n,Bt);const t=_e(n.firestore,Vn),e=_i(t),r=new Oi(t);return Ol(n._query),Wm(e,n._query).then(s=>new Ll(t,r,n,s))}function or(n,t){const e=_e(n.firestore,Vn),r=Jm(n),s=hp(n.converter,t);return mp(e,[sp(wi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function fp(n,...t){var e,r,s;n=re(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||za(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(za(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),t[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let h,f,m;if(n instanceof St)f=_e(n.firestore,Vn),m=Js(n._key.path),h={next:y=>{t[a]&&t[a](pp(f,n,y))},error:t[a+1],complete:t[a+2]};else{const y=_e(n,Bt);f=_e(y.firestore,Vn),m=y._query;const I=new Oi(f);h={next:C=>{t[a]&&t[a](new Ll(f,I,y,C))},error:t[a+1],complete:t[a+2]},Ol(n._query)}return function(I,C,V,N){const S=new wl(N),B=new ml(C,S,V);return I.asyncQueue.enqueueAndForget(async()=>dl(await $s(I),B)),()=>{S.yu(),I.asyncQueue.enqueueAndForget(async()=>fl(await $s(I),B))}}(_i(f),m,c,h)}function mp(n,t){return function(r,s){const o=new ee;return r.asyncQueue.enqueueAndForget(async()=>Lm(await Qm(r),s,o)),o.promise}(_i(n),t)}function pp(n,t,e){const r=e.docs.get(t._key),s=new Oi(n);return new Ml(n,s,t._key,r,new mn(e.hasPendingWrites,e.fromCache),t.converter)}function ar(){return new Ai("serverTimestamp")}(function(t,e=!0){(function(s){He=s})(zh),_r(new vn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Vn(new id(r.getProvider("auth-internal")),new ud(a,r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),gn(Ko,Qo,t),gn(Ko,Qo,"esm2017")})();const gp={apiKey:"AIzaSyC-witEf8tEuC5ZGOTlvX00QletwcVMl6g",authDomain:"phils-corner.firebaseapp.com",projectId:"phils-corner",storageBucket:"phils-corner.firebasestorage.app",messagingSenderId:"211606223114",appId:"1:211606223114:web:8b63fb9e90fc4eaab662f3"},_p=_c(gp),Qa=Zm(_p);document.addEventListener("DOMContentLoaded",()=>{const n=new Audio("/sounds/aim-send.wav"),t=new Audio("/sounds/aim-receive.wav"),e=new Audio("/sounds/signon.mp3"),r=document.getElementById("aim-start"),s=document.getElementById("aim-username"),o=document.getElementById("aim-login"),a=document.getElementById("aim-chat-area"),c=Ba(Qa,"aim_chat"),h=document.getElementById("chat-form"),f=document.getElementById("chat-input"),m=document.getElementById("chat-box");let y="",I="",C=new Set,V=null;r==null||r.addEventListener("click",async()=>{const st=s.value.trim();if(!st)return;y=st,I=crypto.randomUUID(),o.style.display="none",a.style.display="block",e.play();const Rt=Se(c,Ve("timestamp"));V=fp(Rt,at=>{at.docChanges().forEach(et=>{if(et.type==="added"){const Z=et.doc.data();if(Z.sessionId!==I)return;const Vt=document.createElement("div");Vt.className=Z.sender===y?"chat-you":"chat-bot",Vt.textContent=`${Z.sender}: ${Z.message}`,m.appendChild(Vt),m.scrollTop=m.scrollHeight,Z.sender!==y&&!C.has(et.doc.id)&&t.play()}})}),setTimeout(async()=>{const at=await or(c,{sender:"SmarterChild",message:`Hey ${y}! I'm SmarterChild. What do you want to talk about?`,timestamp:ar(),sessionId:I});C.add(at.id)},1500)}),h==null||h.addEventListener("submit",async st=>{st.preventDefault();const Rt=f.value.trim();if(!Rt||!y)return;n.play();const at=await or(c,{sender:y,message:Rt,timestamp:ar(),sessionId:I});C.add(at.id),f.value="",setTimeout(async()=>{const et=yp(Rt),Z=await or(c,{sender:"SmarterChild",message:et,timestamp:ar(),sessionId:I});C.add(Z.id)},800+Math.random()*1e3)}),window.addEventListener("beforeunload",()=>{V&&V()});const N=3,S=Ba(Qa,"guestbook"),B=document.getElementById("guestbook-form"),U=document.getElementById("guestbook-name"),$=document.getElementById("guestbook-emotion"),X=document.getElementById("guestbook-entry"),Ct=document.getElementById("guestbook-messages"),J=document.getElementById("pagination"),v=document.getElementById("prev-page"),p=document.getElementById("next-page");let g=0,E=1,T=[];const A=J&&v&&p;J&&(J.style.display="none",J.style.justifyContent="space-between"),v&&(v.style.display="none");async function _(){if(!A)return;const st=Se(S,Ve("timestamp","desc")),at=(await Ts(st)).size;E=Math.max(1,Math.ceil(at/N)),J.style.display=at>N?"flex":"none",T=[];let et=null;for(let Z=0;Z<E;Z++){let Vt;Z===0?Vt=Se(S,Ve("timestamp","desc"),ir(N)):Vt=Se(S,Ve("timestamp","desc"),Ga(et),ir(N));const qt=await Ts(Vt);qt.empty||(T.push(qt.docs[0]),et=qt.docs[qt.docs.length-1])}}async function At(st){if(!A||st<0||st>=E)return;g=st;let Rt;if(st===0)Rt=Se(S,Ve("timestamp","desc"),ir(N));else{const et=T[st];if(!et)return;Rt=Se(S,Ve("timestamp","desc"),Ga(et),ir(N))}const at=await Ts(Rt);Ct&&(Ct.innerHTML="",at.empty||at.forEach(et=>{var Nt;const Z=et.data(),Vt=((Nt=Z.timestamp)==null?void 0:Nt.toDate().toLocaleString())||"(no time)",qt=document.createElement("div");qt.innerHTML=`
          <p><strong>${Z.name||"Anonymous"}</strong> (${Z.emotion||"feeling...?"}) at ${Vt}:</p>
          <p>${Z.message}</p>
          <hr>
        `,Ct.appendChild(qt)}),v&&(v.disabled=g===0,v.style.display=g===0?"none":"inline-block"),p&&(p.disabled=g>=E-1))}B==null||B.addEventListener("submit",async st=>{st.preventDefault();const Rt=U.value.trim(),at=$.value,et=X.value.trim();if(et)try{await or(S,{name:Rt,emotion:at,message:et,timestamp:ar()}),U.value="",$.value="",X.value="",await _(),await At(0)}catch(Z){console.error("Error adding message:",Z),alert("Failed to add your message: "+Z.message)}}),v&&v.addEventListener("click",()=>{g>0&&At(g-1)}),p&&p.addEventListener("click",()=>{g<E-1&&At(g+1)}),_().then(()=>At(0))});function yp(n){const t=n.toLowerCase(),e=["hey","hi","hello","yo","sup"],r=["?","what","why","how","who","when","where"],s=["sad","tired","bored","lonely"],o=["happy","excited","yay","awesome"],a=["love","crush","date","boyfriend","girlfriend"];return["bye","goodbye","see ya","later","ttyl","cya","farewell"].some(h=>t.includes(h))?me(Ec):e.some(h=>t.includes(h))?me(["yo yo yo!","what’s crackin’?","hey hey!","sup dawg?","how YOU doin’?"]):r.some(h=>t.includes(h))?me(["hmm good question...","I was just thinking about that!","no clue, dude","you tell me 😏","maybe ask Jeeves?"]):s.some(h=>t.includes(h))?me(["bummer 😢","same here","want me to play a sad playlist?","*virtual hug*","feelin' those 00s vibes"]):o.some(h=>t.includes(h))?me(["awesome!","totally rad 😄","party time!","let’s celebrate!","high five!"]):a.some(h=>t.includes(h))?me(["aww, cute 💖","you crushing hard?","omg tell me everything","heart eyes 😍","classic 00s romance!"]):me(yc)}function me(n){return n[Math.floor(Math.random()*n.length)]}
