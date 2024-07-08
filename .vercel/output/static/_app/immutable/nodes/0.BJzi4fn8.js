import{c as I,P as O,a as _}from"../chunks/public.B7ljx6MO.js";import{s as P,U as F,V as $,W as D,X as M,x as z}from"../chunks/scheduler._B5voGmU.js";import{S as H,i as K,a as X,t as G}from"../chunks/index.BJGwIB0l.js";import{b as W}from"../chunks/entry.CtAQ9h6v.js";const R="0.4.0";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var V=Z,J=Q,Y=Object.prototype.toString,y=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Z(t,n){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var e={},r=n||{},i=r.decode||ee,s=0;s<t.length;){var a=t.indexOf("=",s);if(a===-1)break;var l=t.indexOf(";",s);if(l===-1)l=t.length;else if(l<a){s=t.lastIndexOf(";",a-1)+1;continue}var o=t.slice(s,a).trim();if(e[o]===void 0){var c=t.slice(a+1,l).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1)),e[o]=ne(c,i)}s=l+1}return e}function Q(t,n,e){var r=e||{},i=r.encode||te;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!y.test(t))throw new TypeError("argument name is invalid");var s=i(n);if(s&&!y.test(s))throw new TypeError("argument val is invalid");var a=t+"="+s;if(r.maxAge!=null){var l=r.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(l)}if(r.domain){if(!y.test(r.domain))throw new TypeError("option domain is invalid");a+="; Domain="+r.domain}if(r.path){if(!y.test(r.path))throw new TypeError("option path is invalid");a+="; Path="+r.path}if(r.expires){var o=r.expires;if(!re(o)||isNaN(o.valueOf()))throw new TypeError("option expires is invalid");a+="; Expires="+o.toUTCString()}if(r.httpOnly&&(a+="; HttpOnly"),r.secure&&(a+="; Secure"),r.partitioned&&(a+="; Partitioned"),r.priority){var c=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(c){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var u=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(u){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a}function ee(t){return t.indexOf("%")!==-1?decodeURIComponent(t):t}function te(t){return encodeURIComponent(t)}function re(t){return Y.call(t)==="[object Date]"||t instanceof Date}function ne(t,n){try{return n(t)}catch{return t}}function S(){return typeof window<"u"&&typeof window.document<"u"}const w={path:"/",sameSite:"lax",httpOnly:!1,maxAge:60*60*24*365*1e3},ae=3180,ie=/^(.*)[.](0|[1-9][0-9]*)$/;function p(t,n){if(t===n)return!0;const e=t.match(ie);return!!(e&&e[1]===n)}function N(t,n,e){const r=ae;let i=encodeURIComponent(n);if(i.length<=r)return[{name:t,value:n}];const s=[];for(;i.length>0;){let a=i.slice(0,r);const l=a.lastIndexOf("%");l>r-3&&(a=a.slice(0,l));let o="";for(;a.length>0;)try{o=decodeURIComponent(a);break}catch(c){if(c instanceof URIError&&a.at(-3)==="%"&&a.length>3)a=a.slice(0,a.length-3);else throw c}s.push(o),i=i.slice(a.length)}return s.map((a,l)=>({name:`${t}.${l}`,value:a}))}async function C(t,n){const e=await n(t);if(e)return e;let r=[];for(let i=0;;i++){const s=`${t}.${i}`,a=await n(s);if(!a)break;r.push(a)}return r.length>0?r.join(""):null}const A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),U=` 	
\r=`.split(""),oe=(()=>{const t=new Array(128);for(let n=0;n<t.length;n+=1)t[n]=-1;for(let n=0;n<U.length;n+=1)t[U[n].charCodeAt(0)]=-2;for(let n=0;n<A.length;n+=1)t[A[n].charCodeAt(0)]=n;return t})();function B(t){const n=[];let e=0,r=0;if(ce(t,s=>{for(e=e<<8|s,r+=8;r>=6;){const a=e>>r-6&63;n.push(A[a]),r-=6}}),r>0)for(e=e<<6-r,r=6;r>=6;){const s=e>>r-6&63;n.push(A[s]),r-=6}return n.join("")}function T(t){const n=[],e=a=>{n.push(String.fromCodePoint(a))},r={utf8seq:0,codepoint:0};let i=0,s=0;for(let a=0;a<t.length;a+=1){const l=t.charCodeAt(a),o=oe[l];if(o>-1)for(i=i<<6|o,s+=6;s>=8;)le(i>>s-8&255,r,e),s-=8;else{if(o===-2)continue;throw new Error(`Invalid Base64-URL character "${t.at(a)}" at position ${a}`)}}return n.join("")}function se(t,n){if(t<=127){n(t);return}else if(t<=2047){n(192|t>>6),n(128|t&63);return}else if(t<=65535){n(224|t>>12),n(128|t>>6&63),n(128|t&63);return}else if(t<=1114111){n(240|t>>18),n(128|t>>12&63),n(128|t>>6&63),n(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function ce(t,n){for(let e=0;e<t.length;e+=1){let r=t.charCodeAt(e);if(r>55295&&r<=56319){const i=(r-55296)*1024&65535;r=(t.charCodeAt(e+1)-56320&65535|i)+65536,e+=1}se(r,n)}}function le(t,n,e){if(n.utf8seq===0){if(t<=127){e(t);return}for(let r=1;r<6;r+=1)if(!(t>>7-r&1)){n.utf8seq=r;break}if(n.utf8seq===2)n.codepoint=t&31;else if(n.utf8seq===3)n.codepoint=t&15;else if(n.utf8seq===4)n.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");n.utf8seq-=1}else if(n.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");n.codepoint=n.codepoint<<6|t&63,n.utf8seq-=1,n.utf8seq===0&&e(n.codepoint)}}const b="base64-";function q(t,n){const e=t.cookies??null,r=t.cookieEncoding,i={},s={};let a,l;if(e)if("get"in e){const o=async c=>{const u=c.flatMap(h=>[h,...Array.from({length:5}).map((f,g)=>`${h}.${g}`)]),d=[];for(let h=0;h<u.length;h+=1){const f=await e.get(u[h]);!f&&typeof f!="string"||d.push({name:u[h],value:f})}return d};if(a=async c=>await o(c),"set"in e&&"remove"in e)l=async c=>{for(let u=0;u<c.length;u+=1){const{name:d,value:h,options:f}=c[u];h?await e.set(d,h,f):await e.remove(d,f)}};else if(n)l=async()=>{console.warn("@supabase/ssr: createServerClient was configured without set and remove cookie methods, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness. Consider switching to the getAll and setAll cookie methods instead of get, set and remove which are deprecated and can be difficult to use correctly.")};else throw new Error("@supabase/ssr: createBrowserClient requires configuring a getAll and setAll cookie method (deprecated: alternatively both get, set and remove can be used)")}else if("getAll"in e)if(a=async()=>await e.getAll(),"setAll"in e)l=e.setAll;else if(n)l=async()=>{console.warn("@supabase/ssr: createServerClient was configured without the setAll cookie method, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness.")};else throw new Error("@supabase/ssr: createBrowserClient requires configuring both getAll and setAll cookie methods (deprecated: alternatively both get, set and remove can be used)");else throw new Error(`@supabase/ssr: ${n?"createServerClient":"createBrowserClient"} requires configuring getAll and setAll cookie methods (deprecated: alternatively use get, set and remove).${S()?" As this is called in a browser runtime, consider removing the cookies option object to use the document.cookie API automatically.":""}`);else if(!n&&S()){const o=()=>{const c=V(document.cookie);return Object.keys(c).map(u=>({name:u,value:c[u]}))};a=()=>o(),l=c=>{c.forEach(({name:u,value:d,options:h})=>{document.cookie=J(u,d,h)})}}else{if(n)throw new Error("@supabase/ssr: createServerClient must be initialized with cookie options that specify getAll and setAll functions (deprecated, not recommended: alternatively use get, set and remove)");a=()=>[],l=()=>{throw new Error("@supabase/ssr: createBrowserClient in non-browser runtimes (including Next.js pre-rendering mode) was not initialized cookie options that specify getAll and setAll functions (deprecated: alternatively use get, set and remove), but they were needed")}}return n?{getAll:a,setAll:l,setItems:i,removedItems:s,storage:{isServer:!0,getItem:async o=>{if(typeof i[o]=="string")return i[o];if(s[o])return null;const c=await a([o]),u=await C(o,async h=>{const f=(c==null?void 0:c.find(({name:g})=>g===h))||null;return f?f.value:null});if(!u)return null;let d=u;return u.startsWith(b)&&(d=T(u.substring(b.length))),d},setItem:async(o,c)=>{o.endsWith("-code-verifier")&&await L({getAll:a,setAll:l,setItems:{[o]:c},removedItems:{}},{cookieOptions:(t==null?void 0:t.cookieOptions)??null,cookieEncoding:r}),i[o]=c,delete s[o]},removeItem:async o=>{delete i[o],s[o]=!0}}}:{getAll:a,setAll:l,setItems:i,removedItems:s,storage:{isServer:!1,getItem:async o=>{const c=await a([o]),u=await C(o,async h=>{const f=(c==null?void 0:c.find(({name:g})=>g===h))||null;return f?f.value:null});if(!u)return null;let d=u;return u.startsWith(b)&&(d=T(u.substring(b.length))),d},setItem:async(o,c)=>{const u=await a([o]),d=(u==null?void 0:u.map(({name:m})=>m))||[],h=new Set(d.filter(m=>p(m,o)));let f=c;r==="base64url"&&(f=b+B(c));const g=N(o,f);g.forEach(({name:m})=>{h.delete(m)});const k={...w,...t==null?void 0:t.cookieOptions,maxAge:0},E={...w,...t==null?void 0:t.cookieOptions,maxAge:w.maxAge};delete k.name,delete E.name;const v=[...[...h].map(m=>({name:m,value:"",options:k})),...g.map(({name:m,value:j})=>({name:m,value:j,options:E}))];v.length>0&&await l(v)},removeItem:async o=>{const c=await a([o]),d=((c==null?void 0:c.map(({name:f})=>f))||[]).filter(f=>p(f,o)),h={...w,...t==null?void 0:t.cookieOptions,maxAge:0};delete h.name,d.length>0&&await l(d.map(f=>({name:f,value:"",options:h})))}}}}async function L({getAll:t,setAll:n,setItems:e,removedItems:r},i){const s=i.cookieEncoding,a=i.cookieOptions??null,l=await t([...e?Object.keys(e):[],...r?Object.keys(r):[]]),o=(l==null?void 0:l.map(({name:f})=>f))||[],c=Object.keys(r).flatMap(f=>o.filter(g=>p(g,f))),u=Object.keys(e).flatMap(f=>{const g=new Set(o.filter(v=>p(v,f)));let k=e[f];s==="base64url"&&(k=b+B(k));const E=N(f,k);return E.forEach(v=>{g.delete(v.name)}),c.push(...g),E}),d={...w,...a,maxAge:0},h={...w,...a,maxAge:w.maxAge};delete d.name,delete h.name,await n([...c.map(f=>({name:f,value:"",options:d})),...u.map(({name:f,value:g})=>({name:f,value:g,options:h}))])}let x;function ue(t,n,e){var a,l;const r=(e==null?void 0:e.isSingleton)===!0||(!e||!("isSingleton"in e))&&S();if(r&&x)return x;const{storage:i}=q({...e,cookieEncoding:(e==null?void 0:e.cookieEncoding)??"base64url"},!1),s=I(t,n,{...e,global:{...e==null?void 0:e.global,headers:{...(a=e==null?void 0:e.global)==null?void 0:a.headers,"X-Client-Info":`supabase-ssr/${R}`}},auth:{...e==null?void 0:e.auth,...(l=e==null?void 0:e.cookieOptions)!=null&&l.name?{storageKey:e.cookieOptions.name}:null,flowType:"pkce",autoRefreshToken:S(),detectSessionInUrl:S(),persistSession:!0,storage:i}});return r&&(x=s),s}function fe(t,n,e){var c,u;const{storage:r,getAll:i,setAll:s,setItems:a,removedItems:l}=q({...e,cookieEncoding:(e==null?void 0:e.cookieEncoding)??"base64url"},!0),o=I(t,n,{...e,global:{...e==null?void 0:e.global,headers:{...(c=e==null?void 0:e.global)==null?void 0:c.headers,"X-Client-Info":`supabase-ssr/${R}`}},auth:{...(u=e==null?void 0:e.cookieOptions)!=null&&u.name?{storageKey:e.cookieOptions.name}:null,...e==null?void 0:e.auth,flowType:"pkce",autoRefreshToken:!1,detectSessionInUrl:!1,persistSession:!0,storage:r}});return o.auth.onAuthStateChange(async d=>{(Object.keys(a).length>0||Object.keys(l).length>0)&&(d==="SIGNED_IN"||d==="TOKEN_REFRESHED"||d==="USER_UPDATED"||d==="SIGNED_OUT")&&await L({getAll:i,setAll:s,setItems:a,removedItems:l},{cookieOptions:(e==null?void 0:e.cookieOptions)??null,cookieEncoding:(e==null?void 0:e.cookieEncoding)??"base64url"})}),o}const de=async({data:t,depends:n,fetch:e})=>{n("supabase:auth");const r=S()?ue(_,O,{global:{fetch:e}}):fe(_,O,{global:{fetch:e},cookies:{getAll(){return t.cookies}}}),{data:{session:i}}=await r.auth.getSession(),{data:{user:s}}=await r.auth.getUser();return{session:i,supabase:r,user:s}},be=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));function he(t){let n;const e=t[2].default,r=F(e,t,t[1],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),n=!0},p(i,[s]){r&&r.p&&(!n||s&2)&&$(r,e,i,i[1],n?M(e,i[1],s,null):D(i[1]),null)},i(i){n||(X(r,i),n=!0)},o(i){G(r,i),n=!1},d(i){r&&r.d(i)}}}function ge(t,n,e){let r,i,{$$slots:s={},$$scope:a}=n,{data:l}=n;return z(()=>{const{data:o}=i.auth.onAuthStateChange((c,u)=>{(u==null?void 0:u.expires_at)!==(r==null?void 0:r.expires_at)&&W("supabase:auth")});return()=>o.subscription.unsubscribe()}),t.$$set=o=>{"data"in o&&e(0,l=o.data),"$$scope"in o&&e(1,a=o.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&({session:r,supabase:i}=l)},[l,a,s]}class Se extends H{constructor(n){super(),K(this,n,ge,he,P,{data:0})}}export{Se as component,be as universal};
