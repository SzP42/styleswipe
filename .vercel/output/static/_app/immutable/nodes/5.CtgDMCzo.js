import{s as z,e as p,t as _,a as h,c as u,b as q,d as g,f as b,g as v,l as B,o as M,u as D,i as G,h as e,q as H,n as w,k as N}from"../chunks/scheduler._B5voGmU.js";import{S as U,i as Y}from"../chunks/index.BJGwIB0l.js";import{p as A}from"../chunks/stores.qlhY2Ac4.js";import{s as F}from"../chunks/supabaseClient.C2q4Lq3a.js";import{g as J}from"../chunks/entry.CtAQ9h6v.js";const K=({params:a})=>({setId:a.setId}),tt=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function L(a){let t,o,l,m,d,n,E,y,i,C,I,x,c,T="stripe window on the right",O,r,$="log out",P,j;return{c(){t=p("body"),o=p("h1"),l=_("name of set "),m=_(a[0]),d=h(),n=p("img"),y=h(),i=p("p"),C=_("price of set "),I=_(a[0]),x=h(),c=p("p"),c.textContent=T,O=h(),r=p("button"),r.textContent=$,this.h()},l(f){t=u(f,"BODY",{});var s=q(t);o=u(s,"H1",{});var S=q(o);l=g(S,"name of set "),m=g(S,a[0]),S.forEach(b),d=v(s),n=u(s,"IMG",{alt:!0,src:!0}),y=v(s),i=u(s,"P",{});var k=q(i);C=g(k,"price of set "),I=g(k,a[0]),k.forEach(b),x=v(s),c=u(s,"P",{"data-svelte-h":!0}),B(c)!=="svelte-1bu5ki3"&&(c.textContent=T),O=v(s),r=u(s,"BUTTON",{"data-svelte-h":!0}),B(r)!=="svelte-1o6nli0"&&(r.textContent=$),s.forEach(b),this.h()},h(){M(n,"alt","image carousel of set "+a[0]),D(n.src,E="")||M(n,"src",E)},m(f,s){G(f,t,s),e(t,o),e(o,l),e(o,m),e(t,d),e(t,n),e(t,y),e(t,i),e(i,C),e(i,I),e(t,x),e(t,c),e(t,O),e(t,r),P||(j=H(r,"click",a[1]),P=!0)},p:w,i:w,o:w,d(f){f&&b(t),P=!1,j()}}}function Q(a,t,o){let l;N(a,A,n=>o(2,l=n));const m=l.params.setId;async function d(){await F.auth.signOut(),J("/")}return[m,d]}class et extends U{constructor(t){super(),Y(this,t,Q,L,z,{})}}export{et as component,tt as universal};
