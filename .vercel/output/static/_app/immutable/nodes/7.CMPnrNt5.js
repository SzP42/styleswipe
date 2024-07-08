import{s as ut,e as i,a as b,c as u,b as R,l as H,g as p,f as g,o as d,i as se,h as l,p as V,q as ie,O as dt,P as Fe,n as re,Q as oe,r as mt,t as ue,d as ce,m as bt,x as pt}from"../chunks/scheduler._B5voGmU.js";import{S as ct,i as ht,b as _t,d as vt,m as yt,a as gt,t as Et,e as xt}from"../chunks/index.BJGwIB0l.js";import{p as Lt,i as Ct,a as Tt,g as Ue}from"../chunks/entry.CtAQ9h6v.js";import{s as qe}from"../chunks/supabaseClient.C2q4Lq3a.js";function j(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Bt(n){const t=JSON.parse(n);return t.data&&(t.data=Lt(t.data)),t}function et(n){return HTMLElement.prototype.cloneNode.call(n)}function wt(n,t=()=>{}){const a=async({action:o,result:h,reset:_=!0,invalidateAll:B=!0})=>{h.type==="success"&&(_&&HTMLFormElement.prototype.reset.call(n),B&&await Ct()),(location.origin+location.pathname===o.origin+o.pathname||h.type==="redirect"||h.type==="error")&&Tt(h)};async function s(o){var f,w,z,q;if(((f=o.submitter)!=null&&f.hasAttribute("formmethod")?o.submitter.formMethod:et(n).method)!=="post")return;o.preventDefault();const _=new URL((w=o.submitter)!=null&&w.hasAttribute("formaction")?o.submitter.formAction:et(n).action),B=new FormData(n),S=(z=o.submitter)==null?void 0:z.getAttribute("name");S&&B.append(S,((q=o.submitter)==null?void 0:q.getAttribute("value"))??"");const v=new AbortController;let A=!1;const P=await t({action:_,cancel:()=>A=!0,controller:v,formData:B,formElement:n,submitter:o.submitter})??a;if(A)return;let E;try{const m=await fetch(_,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:B,signal:v.signal});E=Bt(await m.text()),E.type==="error"&&(E.status=m.status)}catch(m){if((m==null?void 0:m.name)==="AbortError")return;E={type:"error",error:m}}P({action:_,formData:B,formElement:n,update:m=>a({action:_,result:E,reset:m==null?void 0:m.reset,invalidateAll:m==null?void 0:m.invalidateAll}),result:E})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",s),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",s)}}}function tt(n,t,a){const s=n.slice();return s[7]=t[a],s}function lt(n,t,a){const s=n.slice();return s[7]=t[a],s}function nt(n,t,a){const s=n.slice();return s[7]=t[a],s}function at(n,t,a){const s=n.slice();return s[7]=t[a],s}function rt(n){let t,a=n[7]+"",s;return{c(){t=i("option"),s=ue(a),this.h()},l(o){t=u(o,"OPTION",{});var h=R(t);s=ce(h,a),h.forEach(g),this.h()},h(){t.__value=n[7],V(t,t.__value)},m(o,h){se(o,t,h),l(t,s)},p:re,d(o){o&&g(t)}}}function st(n){let t,a=n[7]+"",s;return{c(){t=i("option"),s=ue(a),this.h()},l(o){t=u(o,"OPTION",{});var h=R(t);s=ce(h,a),h.forEach(g),this.h()},h(){t.__value=n[7],V(t,t.__value)},m(o,h){se(o,t,h),l(t,s)},p:re,d(o){o&&g(t)}}}function ot(n){let t,a=n[7]+"",s;return{c(){t=i("option"),s=ue(a),this.h()},l(o){t=u(o,"OPTION",{});var h=R(t);s=ce(h,a),h.forEach(g),this.h()},h(){t.__value=n[7],V(t,t.__value)},m(o,h){se(o,t,h),l(t,s)},p:re,d(o){o&&g(t)}}}function it(n){let t,a=n[7]+"",s;return{c(){t=i("option"),s=ue(a),this.h()},l(o){t=u(o,"OPTION",{});var h=R(t);s=ce(h,a),h.forEach(g),this.h()},h(){t.__value=n[7],V(t,t.__value)},m(o,h){se(o,t,h),l(t,s)},p:re,d(o){o&&g(t)}}}function kt(n){let t,a,s,o="Introduce yourself",h,_,B="Choose 3 styles that you like",S,v,A='<tr><td><label for="style1">*style1 image*</label> <input type="checkbox" id="style1" name="style1" value="true"/></td> <td><label for="style2">*style2 image*</label> <input type="checkbox" id="style2" name="style2" value="true"/></td> <td><label for="style3">*style3 image*</label> <input type="checkbox" id="style3" name="style3" value="true"/></td></tr> <tr><td><label for="style4">*style4 image*</label> <input type="checkbox" id="style4" name="style4" value="true"/></td> <td><label for="style5">*style5 image*</label> <input type="checkbox" id="style5" name="style5" value="true"/></td> <td><label for="style6">*style6 image*</label> <input type="checkbox" id="style6" name="style6" value="true"/></td></tr> <tr><td><label for="style7">*style7 image*</label> <input type="checkbox" id="style7" name="style7" value="true"/></td> <td><label for="style8">*style8 image*</label> <input type="checkbox" id="style8" name="style8" value="true"/></td> <td><label for="style9">*style9 image*</label> <input type="checkbox" id="style9" name="style9" value="true"/></td></tr>',D,P,E,f,w,z="What size are your t-shirts?",q,m,M,k,he,fe,G,We="What size are your sweaters?",de,U,me,be,pe,_e,J,Xe="What size are your pants?",ve,W,ye,ge,Ee,xe,Q,je="What size shoes do you wear?",Le,X,Ce,Te,Be,we,I,Y,Ve="How big is your budget for a set?  <sub>Max: $5000</sub>",ke,$e,N,Ae,O,Ie,Re,Se,Oe,Me,ee,He,K,Ne,De,Pe,Z,Ge="Let's go!",ze,Je,te=j(n[3]),x=[];for(let r=0;r<te.length;r+=1)x[r]=rt(at(n,te,r));let le=j(n[3]),L=[];for(let r=0;r<le.length;r+=1)L[r]=st(nt(n,le,r));let ne=j(n[3]),C=[];for(let r=0;r<ne.length;r+=1)C[r]=ot(lt(n,ne,r));let ae=j(n[4]),T=[];for(let r=0;r<ae.length;r+=1)T[r]=it(tt(n,ae,r));return{c(){t=i("form"),a=i("fieldset"),s=i("legend"),s.textContent=o,h=b(),_=i("label"),_.textContent=B,S=b(),v=i("table"),v.innerHTML=A,D=b(),P=i("br"),E=b(),f=i("div"),w=i("label"),w.textContent=z,q=b(),m=i("select");for(let r=0;r<x.length;r+=1)x[r].c();M=b(),k=i("br"),he=i("br"),fe=b(),G=i("label"),G.textContent=We,de=b(),U=i("select");for(let r=0;r<L.length;r+=1)L[r].c();me=b(),be=i("br"),pe=i("br"),_e=b(),J=i("label"),J.textContent=Xe,ve=b(),W=i("select");for(let r=0;r<C.length;r+=1)C[r].c();ye=b(),ge=i("br"),Ee=i("br"),xe=b(),Q=i("label"),Q.textContent=je,Le=b(),X=i("select");for(let r=0;r<T.length;r+=1)T[r].c();Ce=b(),Te=i("br"),Be=i("br"),we=b(),I=i("div"),Y=i("label"),Y.innerHTML=Ve,ke=i("br"),$e=b(),N=i("input"),Ae=b(),O=i("input"),Ie=i("br"),Re=i("br"),Se=b(),Oe=i("br"),Me=b(),ee=i("input"),He=b(),K=i("input"),Ne=b(),De=i("br"),Pe=b(),Z=i("button"),Z.textContent=Ge,this.h()},l(r){t=u(r,"FORM",{id:!0,name:!0,method:!0,action:!0});var y=R(t);a=u(y,"FIELDSET",{});var e=R(a);s=u(e,"LEGEND",{"data-svelte-h":!0}),H(s)!=="svelte-5wmy5m"&&(s.textContent=o),h=p(e),_=u(e,"LABEL",{for:!0,"data-svelte-h":!0}),H(_)!=="svelte-qlmuj5"&&(_.textContent=B),S=p(e),v=u(e,"TABLE",{class:!0,id:!0,"data-svelte-h":!0}),H(v)!=="svelte-1qfhbdg"&&(v.innerHTML=A),D=p(e),P=u(e,"BR",{}),E=p(e),f=u(e,"DIV",{class:!0});var c=R(f);w=u(c,"LABEL",{for:!0,"data-svelte-h":!0}),H(w)!=="svelte-arnl5x"&&(w.textContent=z),q=p(c),m=u(c,"SELECT",{name:!0,id:!0});var Qe=R(m);for(let $=0;$<x.length;$+=1)x[$].l(Qe);Qe.forEach(g),M=p(c),k=u(c,"BR",{}),he=u(c,"BR",{}),fe=p(c),G=u(c,"LABEL",{for:!0,"data-svelte-h":!0}),H(G)!=="svelte-1j7gnio"&&(G.textContent=We),de=p(c),U=u(c,"SELECT",{name:!0,id:!0});var Ye=R(U);for(let $=0;$<L.length;$+=1)L[$].l(Ye);Ye.forEach(g),me=p(c),be=u(c,"BR",{}),pe=u(c,"BR",{}),_e=p(c),J=u(c,"LABEL",{for:!0,"data-svelte-h":!0}),H(J)!=="svelte-1n47xbv"&&(J.textContent=Xe),ve=p(c),W=u(c,"SELECT",{name:!0,id:!0});var Ke=R(W);for(let $=0;$<C.length;$+=1)C[$].l(Ke);Ke.forEach(g),ye=p(c),ge=u(c,"BR",{}),Ee=u(c,"BR",{}),xe=p(c),Q=u(c,"LABEL",{for:!0,"data-svelte-h":!0}),H(Q)!=="svelte-tmbuq2"&&(Q.textContent=je),Le=p(c),X=u(c,"SELECT",{name:!0,id:!0});var Ze=R(X);for(let $=0;$<T.length;$+=1)T[$].l(Ze);Ze.forEach(g),Ce=p(c),Te=u(c,"BR",{}),Be=u(c,"BR",{}),c.forEach(g),we=p(e),I=u(e,"DIV",{class:!0,id:!0});var F=R(I);Y=u(F,"LABEL",{for:!0,"data-svelte-h":!0}),H(Y)!=="svelte-19upvbw"&&(Y.innerHTML=Ve),ke=u(F,"BR",{}),$e=p(F),N=u(F,"INPUT",{type:!0,min:!0,max:!0}),Ae=p(F),O=u(F,"INPUT",{type:!0,class:!0,id:!0,min:!0,max:!0,name:!0}),Ie=u(F,"BR",{}),Re=u(F,"BR",{}),F.forEach(g),Se=p(e),Oe=u(e,"BR",{}),Me=p(e),ee=u(e,"INPUT",{type:!0,name:!0}),He=p(e),K=u(e,"INPUT",{type:!0,name:!0}),e.forEach(g),Ne=p(y),De=u(y,"BR",{}),Pe=p(y),Z=u(y,"BUTTON",{type:!0,"data-svelte-h":!0}),H(Z)!=="svelte-cx3yyx"&&(Z.textContent=Ge),y.forEach(g),this.h()},h(){d(_,"for","styles"),d(v,"class","centered-table svelte-12eko7t"),d(v,"id","styles"),d(w,"for","tshirt"),d(m,"name","tshirt"),d(m,"id","tshirt"),m.required=!0,d(G,"for","sweater"),d(U,"name","sweater"),d(U,"id","sweater"),d(J,"for","pants"),d(W,"name","pants"),d(W,"id","pants"),d(Q,"for","shoe"),d(X,"name","shoe"),d(X,"id","shoe"),d(f,"class","size-inputs"),d(Y,"for","slider"),d(N,"type","number"),d(N,"min","0"),d(N,"max","5000"),N.required=!0,d(O,"type","range"),d(O,"class","slider svelte-12eko7t"),d(O,"id","slider"),d(O,"min","60"),d(O,"max","5000"),d(O,"name","price"),d(I,"class","slidecontainer svelte-12eko7t"),d(I,"id","slidecontainer"),d(ee,"type","hidden"),d(ee,"name","completed_form"),ee.value=!0,d(K,"type","hidden"),d(K,"name","user_id"),K.value=n[0],d(Z,"type","submit"),d(t,"id","initial_survey"),d(t,"name","initial_survey"),d(t,"method","post"),d(t,"action","?/setSurveyData")},m(r,y){se(r,t,y),l(t,a),l(a,s),l(a,h),l(a,_),l(a,S),l(a,v),l(a,D),l(a,P),l(a,E),l(a,f),l(f,w),l(f,q),l(f,m);for(let e=0;e<x.length;e+=1)x[e]&&x[e].m(m,null);l(f,M),l(f,k),l(f,he),l(f,fe),l(f,G),l(f,de),l(f,U);for(let e=0;e<L.length;e+=1)L[e]&&L[e].m(U,null);l(f,me),l(f,be),l(f,pe),l(f,_e),l(f,J),l(f,ve),l(f,W);for(let e=0;e<C.length;e+=1)C[e]&&C[e].m(W,null);l(f,ye),l(f,ge),l(f,Ee),l(f,xe),l(f,Q),l(f,Le),l(f,X);for(let e=0;e<T.length;e+=1)T[e]&&T[e].m(X,null);l(f,Ce),l(f,Te),l(f,Be),l(a,we),l(a,I),l(I,Y),l(I,ke),l(I,$e),l(I,N),V(N,n[1]),l(I,Ae),l(I,O),V(O,n[1]),l(I,Ie),l(I,Re),l(a,Se),l(a,Oe),l(a,Me),l(a,ee),l(a,He),l(a,K),l(t,Ne),l(t,De),l(t,Pe),l(t,Z),ze||(Je=[ie(N,"input",n[5]),ie(O,"change",n[6]),ie(O,"input",n[6]),dt(wt.call(null,t,n[2]))],ze=!0)},p(r,[y]){if(y&8){te=j(r[3]);let e;for(e=0;e<te.length;e+=1){const c=at(r,te,e);x[e]?x[e].p(c,y):(x[e]=rt(c),x[e].c(),x[e].m(m,null))}for(;e<x.length;e+=1)x[e].d(1);x.length=te.length}if(y&8){le=j(r[3]);let e;for(e=0;e<le.length;e+=1){const c=nt(r,le,e);L[e]?L[e].p(c,y):(L[e]=st(c),L[e].c(),L[e].m(U,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=le.length}if(y&8){ne=j(r[3]);let e;for(e=0;e<ne.length;e+=1){const c=lt(r,ne,e);C[e]?C[e].p(c,y):(C[e]=ot(c),C[e].c(),C[e].m(W,null))}for(;e<C.length;e+=1)C[e].d(1);C.length=ne.length}if(y&16){ae=j(r[4]);let e;for(e=0;e<ae.length;e+=1){const c=tt(r,ae,e);T[e]?T[e].p(c,y):(T[e]=it(c),T[e].c(),T[e].m(X,null))}for(;e<T.length;e+=1)T[e].d(1);T.length=ae.length}y&2&&Fe(N.value)!==r[1]&&V(N,r[1]),y&2&&V(O,r[1]),y&1&&(K.value=r[0])},i:re,o:re,d(r){r&&g(t),oe(x,r),oe(L,r),oe(C,r),oe(T,r),ze=!1,mt(Je)}}}function ft(n,t){return n===t?[n]:[n,...ft(n+1,t)]}function $t(n,t,a){let{userId:s}=t,o;const h=()=>async({result:A})=>{A.data?Ue("/app"):alert("Something went wrong!")};let _=["XS","S","M","L","XL","XXL"],B=ft(38,50);function S(){o=Fe(this.value),a(1,o)}function v(){o=Fe(this.value),a(1,o)}return n.$$set=A=>{"userId"in A&&a(0,s=A.userId)},[s,o,h,_,B,S,v]}class At extends ct{constructor(t){super(),ht(this,t,$t,kt,ut,{userId:0})}}function It(n){let t,a,s,o="<b>Welcome to StyleSwipe</b>",h,_,B="Let's start by telling us a little bit about your taste",S,v,A,D,P,E,f="Log out",w,z,q;return v=new At({props:{userId:n[0]}}),{c(){t=i("body"),a=i("div"),s=i("h1"),s.innerHTML=o,h=b(),_=i("h3"),_.textContent=B,S=b(),_t(v.$$.fragment),A=b(),D=i("br"),P=b(),E=i("button"),E.textContent=f,this.h()},l(m){t=u(m,"BODY",{});var M=R(t);a=u(M,"DIV",{style:!0});var k=R(a);s=u(k,"H1",{"data-svelte-h":!0}),H(s)!=="svelte-y80a0z"&&(s.innerHTML=o),h=p(k),_=u(k,"H3",{"data-svelte-h":!0}),H(_)!=="svelte-1bu8a98"&&(_.textContent=B),S=p(k),vt(v.$$.fragment,k),A=p(k),D=u(k,"BR",{}),k.forEach(g),P=p(M),E=u(M,"BUTTON",{"data-svelte-h":!0}),H(E)!=="svelte-vmi6ig"&&(E.textContent=f),M.forEach(g),this.h()},h(){bt(a,"text-align","center")},m(m,M){se(m,t,M),l(t,a),l(a,s),l(a,h),l(a,_),l(a,S),yt(v,a,null),l(a,A),l(a,D),l(t,P),l(t,E),w=!0,z||(q=ie(E,"click",n[1]),z=!0)},p(m,[M]){const k={};M&1&&(k.userId=m[0]),v.$set(k)},i(m){w||(gt(v.$$.fragment,m),w=!0)},o(m){Et(v.$$.fragment,m),w=!1},d(m){m&&g(t),xt(v),z=!1,q()}}}function Rt(n,t,a){let s;async function o(){await qe.auth.signOut(),Ue("/")}return pt(async()=>{try{const h=await qe.auth.getSession(),{user:_}=h.data.session;a(0,s=_.id);const{data:B,error:S}=await qe.from("style_prefs").select("completed_form").eq("user_id",_.id);B.length>0&&Ue("/app")}catch(h){console.error(h)}}),[s,o]}class Nt extends ct{constructor(t){super(),ht(this,t,Rt,It,ut,{})}}export{Nt as component};
