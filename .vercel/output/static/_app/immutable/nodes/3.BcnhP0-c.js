import{s as nt,e as x,a as B,t as _t,c as M,b as K,g as Y,f as T,d as bt,o as P,i as V,h as A,j as yt,n as ct,v as vt,y as U,u as wt,z as q,q as Rt,R as Dt,S as qt,x as Zt,T as Z,l as Jt}from"../chunks/scheduler._B5voGmU.js";import{S as ft,i as ht,f as J,b as N,d as lt,m as W,g as kt,t as z,e as G,c as St,a as H}from"../chunks/index.BJGwIB0l.js";import{g as Qt}from"../chunks/entry.CtAQ9h6v.js";const $t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Q(s,t){const e={},i={},n={$$scope:1};let o=s.length;for(;o--;){const c=s[o],r=t[o];if(r){for(const u in c)u in r||(i[u]=1);for(const u in r)n[u]||(e[u]=r[u],n[u]=1);s[o]=r}else for(const u in c)n[u]=1}for(const c in i)c in e||(e[c]=void 0);return e}function $(s){return typeof s=="object"&&s!==null?s:{}}function te(s,t,e){return Math.max(t,Math.min(s,e))}const O={toVector(s,t){return s===void 0&&(s=t),Array.isArray(s)?s:[s,s]},add(s,t){return[s[0]+t[0],s[1]+t[1]]},sub(s,t){return[s[0]-t[0],s[1]-t[1]]},addTo(s,t){s[0]+=t[0],s[1]+=t[1]},subTo(s,t){s[0]-=t[0],s[1]-=t[1]}};function Tt(s,t,e){return t===0||Math.abs(t)===1/0?Math.pow(s,e*5):s*t*e/(t+e*s)}function Et(s,t,e,i=.15){return i===0?te(s,t,e):s<t?-Tt(t-s,e-t,i)+t:s>e?+Tt(s-e,e-t,i)+e:s}function ee(s,[t,e],[i,n]){const[[o,c],[r,u]]=s;return[Et(t,o,c,i),Et(e,r,u,n)]}function se(s,t){if(typeof s!="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var i=e.call(s,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function ie(s){var t=se(s,"string");return typeof t=="symbol"?t:String(t)}function I(s,t,e){return t=ie(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function Ot(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),e.push.apply(e,i)}return e}function v(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ot(Object(e),!0).forEach(function(i){I(s,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):Ot(Object(e)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(e,i))})}return s}const Ut={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function Pt(s){return s?s[0].toUpperCase()+s.slice(1):""}const ne=["enter","leave"];function re(s=!1,t){return s&&!ne.includes(t)}function oe(s,t="",e=!1){const i=Ut[s],n=i&&i[t]||t;return"on"+Pt(s)+Pt(n)+(re(e,n)?"Capture":"")}const ae=["gotpointercapture","lostpointercapture"];function ce(s){let t=s.substring(2).toLowerCase();const e=!!~t.indexOf("passive");e&&(t=t.replace("passive",""));const i=ae.includes(t)?"capturecapture":"capture",n=!!~t.indexOf(i);return n&&(t=t.replace("capture","")),{device:t,capture:n,passive:e}}function le(s,t=""){const e=Ut[s],i=e&&e[t]||t;return s+i}function rt(s){return"touches"in s}function Bt(s){return rt(s)?"touch":"pointerType"in s?s.pointerType:"mouse"}function ue(s){return Array.from(s.touches).filter(t=>{var e,i;return t.target===s.currentTarget||((e=s.currentTarget)===null||e===void 0||(i=e.contains)===null||i===void 0?void 0:i.call(e,t.target))})}function fe(s){return s.type==="touchend"||s.type==="touchcancel"?s.changedTouches:s.targetTouches}function Yt(s){return rt(s)?fe(s)[0]:s}function he(s){return ue(s).map(t=>t.identifier)}function at(s){const t=Yt(s);return rt(s)?t.identifier:t.pointerId}function It(s){const t=Yt(s);return[t.clientX,t.clientY]}function de(s){const t={};if("buttons"in s&&(t.buttons=s.buttons),"shiftKey"in s){const{shiftKey:e,altKey:i,metaKey:n,ctrlKey:o}=s;Object.assign(t,{shiftKey:e,altKey:i,metaKey:n,ctrlKey:o})}return t}function it(s,...t){return typeof s=="function"?s(...t):s}function pe(){}function me(...s){return s.length===0?pe:s.length===1?s[0]:function(){let t;for(const e of s)t=e.apply(this,arguments)||t;return t}}function At(s,t){return Object.assign({},t,s||{})}const ge=32;class _e{constructor(t,e,i){this.ctrl=t,this.args=e,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:i,args:n}=this;e[i]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=n,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,i=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=i.from?it(i.from,e):e.offset,e.offset=e.lastOffset,e.startTime=e.timeStamp=t.timeStamp)}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:i,shared:n}=this;e.args=this.args;let o=0;if(t&&(e.event=t,i.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,n.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,n.locked=!!document.pointerLockElement,Object.assign(n,de(t)),n.down=n.pressed=n.buttons%2===1||n.touches>0,o=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const h=e._delta.map(Math.abs);O.addTo(e._distance,h)}this.axisIntent&&this.axisIntent(t);const[c,r]=e._movement,[u,a]=i.threshold,{_step:l,values:m}=e;if(i.hasCustomTransform?(l[0]===!1&&(l[0]=Math.abs(c)>=u&&m[0]),l[1]===!1&&(l[1]=Math.abs(r)>=a&&m[1])):(l[0]===!1&&(l[0]=Math.abs(c)>=u&&Math.sign(c)*u),l[1]===!1&&(l[1]=Math.abs(r)>=a&&Math.sign(r)*a)),e.intentional=l[0]!==!1||l[1]!==!1,!e.intentional)return;const g=[0,0];if(i.hasCustomTransform){const[h,L]=m;g[0]=l[0]!==!1?h-l[0]:0,g[1]=l[1]!==!1?L-l[1]:0}else g[0]=l[0]!==!1?c-l[0]:0,g[1]=l[1]!==!1?r-l[1]:0;this.restrictToAxis&&!e._blocked&&this.restrictToAxis(g);const E=e.offset,b=e._active&&!e._blocked||e.active;b&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=n[this.ingKey]=e._active,t&&(e.first&&("bounds"in i&&(e._bounds=it(i.bounds,e)),this.setup&&this.setup()),e.movement=g,this.computeOffset()));const[_,p]=e.offset,[[S,D],[w,f]]=e._bounds;e.overflow=[_<S?-1:_>D?1:0,p<w?-1:p>f?1:0],e._movementBound[0]=e.overflow[0]?e._movementBound[0]===!1?e._movement[0]:e._movementBound[0]:!1,e._movementBound[1]=e.overflow[1]?e._movementBound[1]===!1?e._movement[1]:e._movementBound[1]:!1;const y=e._active?i.rubberband||[0,0]:[0,0];if(e.offset=ee(e._bounds,e.offset,y),e.delta=O.sub(e.offset,E),this.computeMovement(),b&&(!e.last||o>ge)){e.delta=O.sub(e.offset,E);const h=e.delta.map(Math.abs);O.addTo(e.distance,h),e.direction=e.delta.map(Math.sign),e._direction=e._delta.map(Math.sign),!e.first&&o>0&&(e.velocity=[h[0]/o,h[1]/o],e.timeDelta=o)}}emit(){const t=this.state,e=this.shared,i=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!i.triggerAllEvents)return;const n=this.handler(v(v(v({},e),t),{},{[this.aliasKey]:t.values}));n!==void 0&&(t.memo=n)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function be([s,t],e){const i=Math.abs(s),n=Math.abs(t);if(i>n&&i>e)return"x";if(n>i&&n>e)return"y"}class ye extends _e{constructor(...t){super(...t),I(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=O.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=O.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const e=this.state,i=this.config;if(!e.axis&&t){const n=typeof i.axisThreshold=="object"?i.axisThreshold[Bt(t)]:i.axisThreshold;e.axis=be(e._movement,n)}e._blocked=(i.lockDirection||!!i.axis)&&!e.axis||!!i.axis&&i.axis!==e.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const ve=s=>s,Ct=.15,Nt={enabled(s=!0){return s},eventOptions(s,t,e){return v(v({},e.shared.eventOptions),s)},preventDefault(s=!1){return s},triggerAllEvents(s=!1){return s},rubberband(s=0){switch(s){case!0:return[Ct,Ct];case!1:return[0,0];default:return O.toVector(s)}},from(s){if(typeof s=="function")return s;if(s!=null)return O.toVector(s)},transform(s,t,e){const i=s||e.shared.transform;return this.hasCustomTransform=!!i,i||ve},threshold(s){return O.toVector(s,0)}},we=0,X=v(v({},Nt),{},{axis(s,t,{axis:e}){if(this.lockDirection=e==="lock",!this.lockDirection)return e},axisThreshold(s=we){return s},bounds(s={}){if(typeof s=="function")return o=>X.bounds(s(o));if("current"in s)return()=>s.current;if(typeof HTMLElement=="function"&&s instanceof HTMLElement)return s;const{left:t=-1/0,right:e=1/0,top:i=-1/0,bottom:n=1/0}=s;return[[t,e],[i,n]]}}),Lt={ArrowRight:(s,t=1)=>[s*t,0],ArrowLeft:(s,t=1)=>[-1*s*t,0],ArrowUp:(s,t=1)=>[0,-1*s*t],ArrowDown:(s,t=1)=>[0,s*t]};class De extends ye{constructor(...t){super(...t),I(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),i=t.currentTarget.getBoundingClientRect(),n={left:e.left-i.left+t.offset[0],right:e.right-i.right+t.offset[0],top:e.top-i.top+t.offset[1],bottom:e.bottom-i.bottom+t.offset[1]};t._bounds=X.bounds(n)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,i=this.state;if(t.buttons!=null&&(Array.isArray(e.pointerButtons)?!e.pointerButtons.includes(t.buttons):e.pointerButtons!==-1&&e.pointerButtons!==t.buttons))return;const n=this.ctrl.setEventIds(t);e.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(n&&n.size>1&&i._pointerActive)&&(this.start(t),this.setupPointer(t),i._pointerId=at(t),i._pointerActive=!0,this.computeValues(It(t)),this.computeInitial(),e.preventScrollAxis&&Bt(t)!=="mouse"?(i._active=!1,this.setupScrollPrevention(t)):e.delay>0?(this.setupDelayTrigger(t),e.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,i=this.config;if(!e._pointerActive)return;const n=at(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;const o=It(t);if(document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=O.sub(o,e._values),this.computeValues(o)),O.addTo(e._movement,e._delta),this.compute(t),e._delayed&&e.intentional){this.timeoutStore.remove("dragDelay"),e.active=!1,this.startPointerDrag(t);return}if(i.preventScrollAxis&&!e._preventScroll)if(e.axis)if(e.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){e._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const e=this.state,i=this.config;if(!e._active||!e._pointerActive)return;const n=at(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[o,c]=e._distance;if(e.tap=o<=i.tapsThreshold&&c<=i.tapsThreshold,e.tap&&i.filterTaps)e._force=!0;else{const[r,u]=e._delta,[a,l]=e._movement,[m,g]=i.swipe.velocity,[E,b]=i.swipe.distance,_=i.swipe.duration;if(e.elapsedTime<_){const p=Math.abs(r/e.timeDelta),S=Math.abs(u/e.timeDelta);p>m&&Math.abs(a)>E&&(e.swipe[0]=Math.sign(r)),S>g&&Math.abs(l)>b&&(e.swipe[1]=Math.sign(u))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config,i=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,ke(t);const e=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",e),this.eventStore.add(this.sharedConfig.window,"touch","cancel",e),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const e=Lt[t.key];if(e){const i=this.state,n=t.shiftKey?10:t.altKey?.1:1;this.start(t),i._delta=e(this.config.keyboardDisplacement,n),i._keyboardActive=!0,O.addTo(i._movement,i._delta),this.compute(t),this.emit()}}keyUp(t){t.key in Lt&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function ke(s){"persist"in s&&typeof s.persist=="function"&&s.persist()}const F=typeof window<"u"&&window.document&&window.document.createElement;function Wt(){return F&&"ontouchstart"in window}function Se(){return Wt()||F&&window.navigator.maxTouchPoints>1}function Te(){return F&&"onpointerdown"in window}function Ee(){return F&&"exitPointerLock"in window.document}function Oe(){try{return"constructor"in GestureEvent}catch{return!1}}const C={isBrowser:F,gesture:Oe(),touch:Wt(),touchscreen:Se(),pointer:Te(),pointerLock:Ee()},Pe=250,Ie=180,Ae=.5,Ce=50,Le=250,xe=10,xt={mouse:0,touch:0,pen:8},Me=v(v({},X),{},{device(s,t,{pointer:{touch:e=!1,lock:i=!1,mouse:n=!1}={}}){return this.pointerLock=i&&C.pointerLock,C.touch&&e?"touch":this.pointerLock?"mouse":C.pointer&&!n?"pointer":C.touch?"touch":"mouse"},preventScrollAxis(s,t,{preventScroll:e}){if(this.preventScrollDelay=typeof e=="number"?e:e||e===void 0&&s?Pe:void 0,!(!C.touchscreen||e===!1))return s||(e!==void 0?"y":void 0)},pointerCapture(s,t,{pointer:{capture:e=!0,buttons:i=1,keys:n=!0}={}}){return this.pointerButtons=i,this.keys=n,!this.pointerLock&&this.device==="pointer"&&e},threshold(s,t,{filterTaps:e=!1,tapsThreshold:i=3,axis:n=void 0}){const o=O.toVector(s,e?i:n?1:0);return this.filterTaps=e,this.tapsThreshold=i,o},swipe({velocity:s=Ae,distance:t=Ce,duration:e=Le}={}){return{velocity:this.transform(O.toVector(s)),distance:this.transform(O.toVector(t)),duration:e}},delay(s=0){switch(s){case!0:return Ie;case!1:return 0;default:return s}},axisThreshold(s){return s?v(v({},xt),s):xt},keyboardDisplacement(s=xe){return s}});v(v({},Nt),{},{device(s,t,{shared:e,pointer:{touch:i=!1}={}}){if(e.target&&!C.touch&&C.gesture)return"gesture";if(C.touch&&i)return"touch";if(C.touchscreen){if(C.pointer)return"pointer";if(C.touch)return"touch"}},bounds(s,t,{scaleBounds:e={},angleBounds:i={}}){const n=c=>{const r=At(it(e,c),{min:-1/0,max:1/0});return[r.min,r.max]},o=c=>{const r=At(it(i,c),{min:-1/0,max:1/0});return[r.min,r.max]};return typeof e!="function"&&typeof i!="function"?[n(),o()]:c=>[n(c),o(c)]},threshold(s,t,e){return this.lockDirection=e.axis==="lock",O.toVector(s,this.lockDirection?[.1,3]:0)},modifierKey(s){return s===void 0?"ctrlKey":s},pinchOnWheel(s=!0){return s}});v(v({},X),{},{mouseOnly:(s=!0)=>s});v(v({},X),{},{mouseOnly:(s=!0)=>s});const zt=new Map,ut=new Map;function je(s){zt.set(s.key,s.engine),ut.set(s.key,s.resolver)}const Ke={key:"drag",engine:De,resolver:Me};function Ve(s,t){if(s==null)return{};var e={},i=Object.keys(s),n,o;for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&(e[n]=s[n]);return e}function Re(s,t){if(s==null)return{};var e=Ve(s,t),i,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(s,i)&&(e[i]=s[i])}return e}const Ue={target(s){if(s)return()=>"current"in s?s.current:s},enabled(s=!0){return s},window(s=C.isBrowser?window:void 0){return s},eventOptions({passive:s=!0,capture:t=!1}={}){return{passive:s,capture:t}},transform(s){return s}},Be=["target","eventOptions","window","enabled","transform"];function st(s={},t){const e={};for(const[i,n]of Object.entries(t))switch(typeof n){case"function":e[i]=n.call(e,s[i],i,s);break;case"object":e[i]=st(s[i],n);break;case"boolean":n&&(e[i]=s[i]);break}return e}function Ye(s,t,e={}){const i=s,{target:n,eventOptions:o,window:c,enabled:r,transform:u}=i,a=Re(i,Be);if(e.shared=st({target:n,eventOptions:o,window:c,enabled:r,transform:u},Ue),t){const l=ut.get(t);e[t]=st(v({shared:e.shared},a),l)}else for(const l in a){const m=ut.get(l);m&&(e[l]=st(v({shared:e.shared},a[l]),m))}return e}class Gt{constructor(t,e){I(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=e}add(t,e,i,n,o){const c=this._listeners,r=le(e,i),u=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},a=v(v({},u),o);t.addEventListener(r,n,a);const l=()=>{t.removeEventListener(r,n,a),c.delete(l)};return c.add(l),l}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class Ne{constructor(){I(this,"_timeouts",new Map)}add(t,e,i=140,...n){this.remove(t),this._timeouts.set(t,window.setTimeout(e,i,...n))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class We{constructor(t){I(this,"gestures",new Set),I(this,"_targetEventStore",new Gt(this)),I(this,"gestureEventStores",{}),I(this,"gestureTimeoutStores",{}),I(this,"handlers",{}),I(this,"config",{}),I(this,"pointerIds",new Set),I(this,"touchIds",new Set),I(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),ze(this,t)}setEventIds(t){if(rt(t))return this.touchIds=new Set(he(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=Ye(t,e,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,i={};let n;if(!(e.target&&(n=e.target(),!n))){if(e.enabled){for(const c of this.gestures){const r=this.config[c],u=Mt(i,r.eventOptions,!!n);if(r.enabled){const a=zt.get(c);new a(this,t,c).bind(u)}}const o=Mt(i,e.eventOptions,!!n);for(const c in this.nativeHandlers)o(c,"",r=>this.nativeHandlers[c](v(v({},this.state.shared),{},{event:r,args:t})),void 0,!0)}for(const o in i)i[o]=me(...i[o]);if(!n)return i;for(const o in i){const{device:c,capture:r,passive:u}=ce(o);this._targetEventStore.add(n,c,"",i[o],{capture:r,passive:u})}}}}function R(s,t){s.gestures.add(t),s.gestureEventStores[t]=new Gt(s,t),s.gestureTimeoutStores[t]=new Ne}function ze(s,t){t.drag&&R(s,"drag"),t.wheel&&R(s,"wheel"),t.scroll&&R(s,"scroll"),t.move&&R(s,"move"),t.pinch&&R(s,"pinch"),t.hover&&R(s,"hover")}const Mt=(s,t,e)=>(i,n,o,c={},r=!1)=>{var u,a;const l=(u=c.capture)!==null&&u!==void 0?u:t.capture,m=(a=c.passive)!==null&&a!==void 0?a:t.passive;let g=r?i:oe(i,n,l);e&&m&&(g+="Passive"),s[g]=s[g]||[],s[g].push(o)};function Ge(s,t){if(typeof s!="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var i=e.call(s,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function He(s){var t=Ge(s,"string");return typeof t=="symbol"?t:String(t)}function Xe(s,t,e){return t=He(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function jt(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),e.push.apply(e,i)}return e}function tt(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?jt(Object(e),!0).forEach(function(i){Xe(s,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):jt(Object(e)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(e,i))})}return s}class Fe{constructor(t,e,i,n,o){this._target=t,this._gestureKey=n,this._ctrl=new We(e),this._ctrl.applyHandlers(e,o),this._ctrl.applyConfig(tt(tt({},i),{},{target:t}),n),this._ctrl.effect()}destroy(){this._ctrl.clean()}setConfig(t){this._ctrl.clean(),this._ctrl.applyConfig(tt(tt({},t),{},{target:this._target}),this._gestureKey),this._ctrl.effect()}}const qe=function(t,e,i){return je(Ke),new Fe(t,{drag:e},i||{},"drag")};function Kt(s){let t,e;return{c(){t=x("img"),this.h()},l(i){t=M(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){P(t,"class","w-full h-full rounded-xl object-cover"),wt(t.src,e=s[4])||P(t,"src",e),P(t,"alt",s[2])},m(i,n){V(i,t,n)},p(i,n){n&16&&!wt(t.src,e=i[4])&&P(t,"src",e),n&4&&P(t,"alt",i[2])},d(i){i&&T(t)}}}function Vt(s){let t,e=s[4]&&Kt(s);return{c(){e&&e.c(),t=vt()},l(i){e&&e.l(i),t=vt()},m(i,n){e&&e.m(i,n),V(i,t,n)},p(i,n){i[4]?e?e.p(i,n):(e=Kt(i),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(i){i&&T(t),e&&e.d(i)}}}function Ze(s){let t,e=s[4],i,n,o,c,r,u,a,l,m,g,E,b=Vt(s);return{c(){t=x("div"),b.c(),i=B(),n=x("div"),o=B(),c=x("div"),r=x("div"),u=x("h3"),a=_t(s[2]),l=B(),m=x("p"),g=_t(s[3]),this.h()},l(_){t=M(_,"DIV",{class:!0});var p=K(t);b.l(p),i=Y(p),n=M(p,"DIV",{class:!0}),K(n).forEach(T),o=Y(p),c=M(p,"DIV",{class:!0});var S=K(c);r=M(S,"DIV",{class:!0});var D=K(r);u=M(D,"H3",{class:!0});var w=K(u);a=bt(w,s[2]),w.forEach(T),l=Y(D),m=M(D,"P",{});var f=K(m);g=bt(f,s[3]),f.forEach(T),D.forEach(T),S.forEach(T),p.forEach(T),this.h()},h(){P(n,"class","absolute inset-0 bg-gradient-to-t from-white/80 via-white/0 rounded-b-xl"),P(u,"class","text-3xl font-semibold pb-4"),P(r,"class","flex items-center flex-col"),P(c,"class","p-4 absolute bottom-0 w-full flex justify-center"),P(t,"class",E="w-full h-full absolute cursor-grab ease-in-out rounded-xl touch-none select-none border border-black bg-white "+s[1])},m(_,p){V(_,t,p),b.m(t,null),A(t,i),A(t,n),A(t,o),A(t,c),A(c,r),A(r,u),A(u,a),A(r,l),A(r,m),A(m,g),s[5](t)},p(_,[p]){p&16&&nt(e,e=_[4])?(b.d(1),b=Vt(_),b.c(),b.m(t,i)):b.p(_,p),p&4&&yt(a,_[2]),p&8&&yt(g,_[3]),p&2&&E!==(E="w-full h-full absolute cursor-grab ease-in-out rounded-xl touch-none select-none border border-black bg-white "+_[1])&&P(t,"class",E)},i:ct,o:ct,d(_){_&&T(t),b.d(_),s[5](null)}}}function Je(s,t,e){let{element:i}=t,{color:n=""}=t,{title:o=""}=t,{description:c=""}=t,{image:r=void 0}=t;function u(a){U[a?"unshift":"push"](()=>{i=a,e(0,i)})}return s.$$set=a=>{"element"in a&&e(0,i=a.element),"color"in a&&e(1,n=a.color),"title"in a&&e(2,o=a.title),"description"in a&&e(3,c=a.description),"image"in a&&e(4,r=a.image)},[i,n,o,c,r,u]}class et extends ft{constructor(t){super(),ht(this,t,Je,Ze,nt,{element:0,color:1,title:2,description:3,image:4})}}const{document:Qe}=$t;function $e(s){let t,e,i,n,o,c,r,u,a,l,m;const g=[s[5]];function E(f){s[12](f)}var b=et;function _(f,y){let h={};for(let L=0;L<g.length;L+=1)h=Z(h,g[L]);return y!==void 0&&y&32&&(h=Z(h,Q(g,[$(f[5])]))),f[3]!==void 0&&(h.element=f[3]),{props:h}}b&&(n=q(b,_(s)),U.push(()=>J(n,"element",E)));const p=[s[6]];function S(f){s[13](f)}var D=et;function w(f,y){let h={};for(let L=0;L<p.length;L+=1)h=Z(h,p[L]);return y!==void 0&&y&64&&(h=Z(h,Q(p,[$(f[6])]))),f[4]!==void 0&&(h.element=f[4]),{props:h}}return D&&(r=q(D,w(s)),U.push(()=>J(r,"element",S))),{c(){t=B(),e=x("div"),i=x("div"),n&&N(n.$$.fragment),c=B(),r&&N(r.$$.fragment),this.h()},l(f){t=Y(f),e=M(f,"DIV",{class:!0});var y=K(e);i=M(y,"DIV",{class:!0});var h=K(i);n&&lt(n.$$.fragment,h),c=Y(h),r&&lt(r.$$.fragment,h),h.forEach(T),y.forEach(T),this.h()},h(){P(i,"class","w-full h-full relative hidden z-0"),P(e,"class","w-full h-full")},m(f,y){V(f,t,y),V(f,e,y),A(e,i),n&&W(n,i,null),A(i,c),r&&W(r,i,null),s[14](i),a=!0,l||(m=Rt(Qe.body,"keydown",s[11]),l=!0)},p(f,[y]){if(b!==(b=et)){if(n){kt();const h=n;z(h.$$.fragment,1,0,()=>{G(h,1)}),St()}b?(n=q(b,_(f,y)),U.push(()=>J(n,"element",E)),N(n.$$.fragment),H(n.$$.fragment,1),W(n,i,c)):n=null}else if(b){const h=y&32?Q(g,[$(f[5])]):{};!o&&y&8&&(o=!0,h.element=f[3],Dt(()=>o=!1)),n.$set(h)}if(D!==(D=et)){if(r){kt();const h=r;z(h.$$.fragment,1,0,()=>{G(h,1)}),St()}D?(r=q(D,w(f,y)),U.push(()=>J(r,"element",S)),N(r.$$.fragment),H(r.$$.fragment,1),W(r,i,null)):r=null}else if(D){const h=y&64?Q(p,[$(f[6])]):{};!u&&y&16&&(u=!0,h.element=f[4],Dt(()=>u=!1)),r.$set(h)}},i(f){a||(n&&H(n.$$.fragment,f),r&&H(r.$$.fragment,f),a=!0)},o(f){n&&z(n.$$.fragment,f),r&&z(r.$$.fragment,f),a=!1},d(f){f&&(T(t),T(e)),n&&G(n),r&&G(r),s[14](null),l=!1,m()}}}function ts(s,t,e){const i=qt();let n,o,c,r,u,a=0,l,m=1e5;Zt(async()=>{e(5,r=await _(a++)),e(6,u=await _(a++)),[o,c].forEach(function(d){d.style.zIndex=m.toString(),m--,new qe(d,k=>{E(d,k)})}),l=o,n.classList.remove("hidden")});const g=(d,k,j)=>{d.classList.add("transition-transform","duration-300");let dt=j[0]>0?"right":"left";i("swiped",{direction:dt,element:d,data:d===o?r:u,index:a-2}),e(7,w=j[0]>0?1:-1);let ot=document.body.clientWidth,mt=Math.max(Math.abs(k[0])*ot,ot),Ht=j[0]>0?mt:-mt,gt=Math.abs(k[1])*ot,Xt=j[1]>0?gt:-gt,Ft=j[0]*.03*(j[1]/80);d.style.transform=`translate(${Ht}px, ${Xt+j[1]}px) rotate(${Ft}deg)`,setTimeout(async()=>{e(7,w=0),d===o?(e(5,r={}),e(5,r=await _(a++)),l=c):(e(6,u={}),e(6,u=await _(a++)),l=o),m--,d.style.zIndex=m.toString(),d.classList.remove("transition-transform","duration-300"),d.style.transform=""},350)},E=(d,k)=>{let j=d.offsetWidth;if(k.pressed){let pt=k.movement[0]*.03*(k.movement[1]/80);d.style.transform=`translate(${k.movement[0]}px, ${k.movement[1]}px) rotate(${pt}deg)`,Math.abs(k.movement[0])/j>p?e(7,w=k.movement[0]>0?1:-1):e(7,w=0);return}Math.abs(k.movement[0])/j<p&&Math.abs(k.velocity[0])<S?(e(7,w=0),d.classList.add("transition-transform","duration-300"),d.style.transform="",setTimeout(()=>{d.classList.remove("transition-transform","duration-300")},300)):g(d,k.velocity,k.movement)},b=(d="right")=>{if(w!==0)return;let k=d==="left"?-1:1;g(l,[k,.1],[k,1])};let{cardData:_}=t,{minSwipeDistance:p=.5}=t,{minSwipeVelocity:S=.5}=t,{arrowKeys:D=!0}=t,{thresholdPassed:w=0}=t;const f=d=>{D&&(d.key==="ArrowLeft"?b("left"):d.key==="ArrowRight"&&b("right"))};function y(d){o=d,e(3,o)}function h(d){c=d,e(4,c)}function L(d){U[d?"unshift":"push"](()=>{n=d,e(2,n)})}return s.$$set=d=>{"cardData"in d&&e(8,_=d.cardData),"minSwipeDistance"in d&&e(9,p=d.minSwipeDistance),"minSwipeVelocity"in d&&e(10,S=d.minSwipeVelocity),"arrowKeys"in d&&e(1,D=d.arrowKeys),"thresholdPassed"in d&&e(7,w=d.thresholdPassed)},[b,D,n,o,c,r,u,w,_,p,S,f,y,h,L]}class es extends ft{constructor(t){super(),ht(this,t,ts,$e,nt,{swipe:0,cardData:8,minSwipeDistance:9,minSwipeVelocity:10,arrowKeys:1,thresholdPassed:7})}get swipe(){return this.$$.ctx[0]}}function ss(s){let t,e,i,n,o="log out",c,r,u;return e=new es({props:{cardData:s[1],minSwipeDistance:.25,sets:s[0]}}),e.$on("swiped",is),{c(){t=x("div"),N(e.$$.fragment),i=B(),n=x("button"),n.textContent=o,this.h()},l(a){t=M(a,"DIV",{class:!0,align:!0});var l=K(t);lt(e.$$.fragment,l),l.forEach(T),i=Y(a),n=M(a,"BUTTON",{"data-svelte-h":!0}),Jt(n)!=="svelte-1o6nli0"&&(n.textContent=o),this.h()},h(){P(t,"class","h-screen w-screen"),P(t,"align","center")},m(a,l){V(a,t,l),W(e,t,null),V(a,i,l),V(a,n,l),c=!0,r||(u=Rt(n,"click",s[2]),r=!0)},p:ct,i(a){c||(H(e.$$.fragment,a),c=!0)},o(a){z(e.$$.fragment,a),c=!1},d(a){a&&(T(t),T(i),T(n)),G(e),r=!1,u()}}}function is(s){}function ns(s,t,e){let{data:i}=t;i.error&&console.error(i.error);const{supabase:n}=i;let{sets:o}=i,c=async a=>{let l=await r();return{title:l.name,description:l.price,image:l.clothes[1].publicUrl}};async function r(){let a=[];const l=await n.rpc("get_next_set"),m=l.data;m||console.log(l.error);const{data:g,error:E}=await n.from("sett").select().eq("set_id",m);g||console.log(E);const b=g[0].name,_=g[0].price,p=await n.storage.from(m).list(),S=p.data;S||console.log(p.error);for(let w=0;w<S.length;w++){let f=S[w].name;const{data:{publicUrl:y}}=n.storage.from(m).getPublicUrl(f),h={id:w,publicUrl:y,filepath:f};a.push(h)}return{clothes:a,name:b,setId:m,price:_}}async function u(){await n.auth.signOut(),Qt("/")}return s.$$set=a=>{"data"in a&&e(3,i=a.data)},[o,c,u,i]}class cs extends ft{constructor(t){super(),ht(this,t,ns,ss,nt,{data:3})}}export{cs as component};
