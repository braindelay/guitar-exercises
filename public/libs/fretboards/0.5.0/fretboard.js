!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fretboard=t():e.fretboard=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./select */18),n(/*! ./selectAll */19),n(/*! ./filter */20),n(/*! ./data */21),n(/*! ./enter */12),n(/*! ./exit */23),n(/*! ./join */24),n(/*! ./merge */25),n(/*! ./order */26),n(/*! ./sort */27),n(/*! ./call */28),n(/*! ./nodes */29),n(/*! ./node */30),n(/*! ./size */31),n(/*! ./empty */32),n(/*! ./each */33),n(/*! ./attr */34),n(/*! ./style */14),n(/*! ./property */35),n(/*! ./classed */36),n(/*! ./text */37),n(/*! ./html */38),n(/*! ./raise */39),n(/*! ./lower */40),n(/*! ./append */41),n(/*! ./insert */42),n(/*! ./remove */43),n(/*! ./clone */44),n(/*! ./datum */45),n(/*! ./on */7),n(/*! ./dispatch */46)],void 0===(i="function"==typeof(r=function(e,t,n,r,o,i,u,f,l,a,s,c,d,p,y,h,v,b,g,_,m,x,T,w,j,O,M,P,S,A,N,E){"use strict";function C(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.Selection=I,e.default=e.root=void 0,t=C(t),n=C(n),r=C(r),o=C(o),i=C(i),u=C(u),f=C(f),l=C(l),a=C(a),s=C(s),c=C(c),d=C(d),p=C(p),y=C(y),h=C(h),v=C(v),b=C(b),g=C(g),_=C(_),m=C(m),x=C(x),T=C(T),w=C(w),j=C(j),O=C(O),M=C(M),P=C(P),S=C(S),A=C(A),N=C(N),E=C(E);var H=[null];function I(e,t){this._groups=e,this._parents=t}function k(){return new I([[document.documentElement]],H)}e.root=H,I.prototype=k.prototype={constructor:I,select:t.default,selectAll:n.default,filter:r.default,data:o.default,enter:i.default,exit:u.default,join:f.default,merge:l.default,order:a.default,sort:s.default,call:c.default,nodes:d.default,node:p.default,size:y.default,empty:h.default,each:v.default,attr:b.default,style:g.default,property:_.default,classed:m.default,text:x.default,html:T.default,raise:w.default,lower:j.default,append:O.default,insert:M.default,remove:P.default,clone:S.default,datum:A.default,on:N.default,dispatch:E.default};var B=k;e.default=B})?r.apply(t,o):r)||(e.exports=i)},
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./namespace */3),n(/*! ./namespaces */4)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(e){return function(){var t=this.ownerDocument,r=this.namespaceURI;return r===n.xhtml&&t.documentElement.namespaceURI===n.xhtml?t.createElement(e):t.createElementNS(r,e)}}function o(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var n=(0,t.default)(e);return(n.local?o:r)(n)},t=(i=t)&&i.__esModule?i:{default:i}})?r.apply(t,o):r)||(e.exports=i)},
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(e.getScreenCTM().inverse())).x,r.y]}var o=e.getBoundingClientRect();return[t.clientX-o.left-e.clientLeft,t.clientY-o.top-e.clientTop]}})?r.apply(t,o):r)||(e.exports=i)},
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./namespaces */4)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var n=e+="",r=n.indexOf(":");return r>=0&&"xmlns"!==(n=e.slice(0,r))&&(e=e.slice(r+1)),t.default.hasOwnProperty(n)?{space:t.default[n],local:e}:e},t=(n=t)&&n.__esModule?n:{default:n}})?r.apply(t,o):r)||(e.exports=i)},
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.xhtml=void 0;var t="http://www.w3.org/1999/xhtml";e.xhtml=t;var n={svg:"http://www.w3.org/2000/svg",xhtml:t,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};e.default=n})?r.apply(t,o):r)||(e.exports=i)},
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return null==e?t:function(){return this.querySelector(e)}}})?r.apply(t,o):r)||(e.exports=i)},
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}})?r.apply(t,o):r)||(e.exports=i)},
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t,n){var r,o,l=i(e+""),a=l.length;if(!(arguments.length<2)){for(s=t?f:u,null==n&&(n=!1),r=0;r<a;++r)this.each(s(l[r],t,n));return this}var s=this.node().__on;if(s)for(var c,d=0,p=s.length;d<p;++d)for(r=0,c=s[d];r<a;++r)if((o=l[r]).type===c.type&&o.name===c.name)return c.value},e.customEvent=function(t,r,o,i){var u=n;t.sourceEvent=n,e.event=n=t;try{return r.apply(o,i)}finally{e.event=n=u}},e.event=void 0;var t={},n=null;function r(e,t,n){return e=o(e,t,n),function(t){var n=t.relatedTarget;n&&(n===this||8&n.compareDocumentPosition(this))||e.call(this,t)}}function o(t,r,o){return function(i){var u=n;e.event=n=i;try{t.call(this,this.__data__,r,o)}finally{e.event=n=u}}}function i(e){return e.trim().split(/^|\s+/).map((function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}}))}function u(e){return function(){var t=this.__on;if(t){for(var n,r=0,o=-1,i=t.length;r<i;++r)n=t[r],e.type&&n.type!==e.type||n.name!==e.name?t[++o]=n:this.removeEventListener(n.type,n.listener,n.capture);++o?t.length=o:delete this.__on}}}function f(e,n,i){var u=t.hasOwnProperty(e.type)?r:o;return function(t,r,o){var f,l=this.__on,a=u(n,r,o);if(l)for(var s=0,c=l.length;s<c;++s)if((f=l[s]).type===e.type&&f.name===e.name)return this.removeEventListener(f.type,f.listener,f.capture),this.addEventListener(f.type,f.listener=a,f.capture=i),void(f.value=n);this.addEventListener(e.type,a,i),f={type:e.type,name:e.name,value:n,listener:a,capture:i},l?l.push(f):this.__on=[f]}}e.event=n,"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(t={mouseenter:"mouseover",mouseleave:"mouseout"}))})?r.apply(t,o):r)||(e.exports=i)},
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./selection/on */7)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var e,n=t.event;e=n.sourceEvent;)n=e;return n}})?r.apply(t,o):r)||(e.exports=i)},
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./selection/index */0)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return"string"==typeof e?new t.Selection([[document.querySelector(e)]],[document.documentElement]):new t.Selection([[e]],t.root)}})?r.apply(t,o):r)||(e.exports=i)},
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){return[]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return null==e?t:function(){return this.querySelectorAll(e)}}})?r.apply(t,o):r)||(e.exports=i)},
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return function(){return this.matches(e)}}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./sparse */13),n(/*! ./index */0)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}var o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return new n.Selection(this._enter||this._groups.map(t.default),this._parents)},e.EnterNode=r,t=(o=t)&&o.__esModule?o:{default:o},r.prototype={constructor:r,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}}})?r.apply(t,o):r)||(e.exports=i)},
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return new Array(e.length)}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ../window */6)],void 0===(i="function"==typeof(r=function(e,t){"use strict";function n(e){return function(){this.style.removeProperty(e)}}function r(e,t,n){return function(){this.style.setProperty(e,t,n)}}function o(e,t,n){return function(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function i(e,n){return e.style.getPropertyValue(n)||(0,t.default)(e).getComputedStyle(e,null).getPropertyValue(n)}var u;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t,u){return arguments.length>1?this.each((null==t?n:"function"==typeof t?o:r)(e,t,null==u?"":u)):i(this.node(),e)},e.styleValue=i,t=(u=t)&&u.__esModule?u:{default:u}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! d3-selection */16),n(/*! ../assets/fretboard.css */52)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,f=e[Symbol.iterator]();!(r=(u=f.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==f.return||f.return()}finally{if(o)throw i}}return n}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.whatIs=c,e.asOffset=d,e.absNote=p,e.noteName=y,e.asNotes=h,e.Guitar=function(e,t){return b({strings:e=e||6,frets:t=t||12,tuning:v["guitar"+e].standard})},e.Bass=function(e,t){return b({strings:e=e||4,frets:t=t||12,tuning:v["bass"+e].standard})},e.Fretboard=e.Tunings=e.Scales=void 0,t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}(t);const f=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],l=["c","db","d","eb","fb","f","gb","g","ab","a","bb","cb"],a=["red","green","blue","black","purple","gray","orange","lightgray"],s={lydian:"c d e f# g a b",major:"c d e f g a b",mixolydian:"c d e f g a bb",dorian:"c d eb f g a bb",aeolian:"c d eb f g ab bb",phrygian:"c db eb f g ab bb",locrian:"c db eb f gb ab bb","harmonic-minor":"c d eb f g ab b","melodic-minor":"c d eb f g a b","minor-pentatonic":"c eb f g bb","minor-blues":"c eb f f# g bb","major-pentatonic":"c d e g a","major-blues":"c d d# e g a","composite-blues":"c d d# e f f# g a bb","dom-pentatonic":"c e f g bb",japanese:"c db f g ab",maj:"c e g",aug:"c e g#",min:"c eb g",dim:"c eb gb",maj7:"c e g b",7:"c e g bb",min7:"c eb g bb",m7b5:"c eb gb bb",dim7:"c eb gb a",_:function(e){return s[e].split(" ")}};function c(e){let t=e.split(" ");return 2===t.length&&"string"==typeof s[t[1]]?"scale":t[0].indexOf(":")>0?"placeNotes":"addNotes"}function d(e){e=e.toLowerCase();let t=f.indexOf(e);return-1===t&&(t=l.indexOf(e)),t}function p(e){let t=e[e.length-1],n=d(e.slice(0,-1));if(n>-1)return n+12*t}function y(e){let t=Math.floor(e/12);return f[e%12]+t.toString()}function h(e){let t=o(e.split(" "),2),n=t[0],r=t[1],i=s._(r),u=d(n);return i.map((function(e){return f[(d(e)+u)%12]})).join(" ")}e.Scales=s;const v={bass4:{standard:["e1","a1","d2","g2","b2","e3"]},guitar6:{standard:["e2","a2","d3","g3","b3","e4"],E_4ths:["e2","a2","d3","g3","c4","f4"],Drop_D:["d2","a2","d3","g3","b3","e4"],G_open:["d2","g2","d3","g3","b3","d4"],DADGAD:["d2","a2","d3","g3","a3","d4"]},guitar7:{standard:["b2","e2","a2","d3","g3","b3","e4"],E_4ths:["b2","e2","a2","d3","g3","c3","f4"]}};e.Tunings=v;const b=function(e){let n=(e=e||{}).where||"body",r="fretboard-"+Math.floor(1e6*Math.random()),u={frets:12,startFret:0,strings:6,tuning:v.guitar6.standard,fretWidth:50,fretHeight:20,leftHanded:!1,showTitle:!1,notes:[],...e};u.set=function(e,t){u[e]=t,u.repaint()},u.addNoteOnString=function(e,t,n){return u.notes.push({note:e,string:t,color:n}),u},u.addNote=function(e,t){for(let n=1;n<=u.strings;n++)u.addNoteOnString(e,n,t);return u},u.addNotes=function(e,t){let n=e.split(" ");for(let e=0;e<n.length;e++){let r=t||a[e],o=n[e];for(let e=1;e<7;e++)u.addNote(o+e,r)}return u},u.scale=function(e){return u.addNotes(h(e)),u},u.placeNotes=function(e){return e.split(" ").forEach((function(e,t){const n=o(e.split(":"),2),r=n[0],i=n[1];u.addNoteOnString(i,parseInt(r))})),u},u.add=function(e){return e.trim().replace(/\s\s+/g," ").split(";").forEach((function(e){let t=c(e=e.trim());u[t](e)})),u},u.clearNotes=function(){return u.notes=[],u.svgContainer.selectAll(".note").remove(),u};let f=function(e){return e>u.startFret&&e<=u.frets},l=function(){return(u.strings-1)*u.fretHeight+2},s=function(){return(u.frets-u.startFret)*u.fretWidth+2},d=function(){return u.fretWidth},b=function(){return u.fretHeight},g=function(){let e=u.svgContainer.selectAll("circle").data([3,5,7,9,15,17,19,21].filter(f));function t(e){return(e-u.startFret-1)*u.fretWidth+u.fretWidth/2+d()}function n(e){let t=b();return u.strings%2==0?((u.strings+3)/2-e)*u.fretHeight+t:l()*e/4+t}e.enter().append("circle").attr("cx",t).attr("cy",n(2)).attr("r",4).style("fill","#ddd"),e=u.svgContainer.selectAll(".octave").data([12,24].filter(f)),e.enter().append("circle").attr("class","octave").attr("cx",t).attr("cy",n(3)).attr("r",4).style("fill","#ddd"),e.enter().append("circle").attr("class","octave").attr("cx",t).attr("cy",n(1)).attr("r",4).style("fill","#ddd")};function _(e,t,n){if(t>u.strings)return!1;let r=p(e),o=n||"black",i=u.strings-t,f=p(u.tuning[i])+u.startFret;if(r>=f&&r<=f+u.frets-u.startFret){const n=u.svgContainer.append("circle").attr("class","note").attr("stroke-width",1).attr("cx",(r-f+.75)*u.fretWidth).attr("cy",(t-1)*u.fretHeight+1+b()).attr("r",6).style("stroke",o).style("fill","white").on("click",(function(){let e=this.style.fill;this.setAttribute("stroke-width",5-parseInt(this.getAttribute("stroke-width"))),this.style.fill="white"===e?"lightgray":"white"}));return u.showTitle&&n.append("title").text(e.toUpperCase()),!0}return!1}return u.drawBoard=function(){return u.delete(),u.svgContainer=function(e){u.width=s()+2*d(),u.height=l()+2*b();let n=t.select(e).append("div").attr("class","fretboard").attr("id",r).append("svg").attr("width",u.width).attr("height",u.height);return u.leftHanded&&(n=n.append("g").attr("transform","scale(-1,1) translate(-"+(u.width-d())+",0)")),n}(n),function(){for(let e=u.startFret;e<=u.frets;e++){let n=(e-u.startFret)*u.fretWidth+1+d(),o=n;u.leftHanded&&(o=u.width-d()-n),u.svgContainer.append("line").attr("x1",n).attr("y1",b()).attr("x2",n).attr("y2",b()+l()).attr("stroke","lightgray").attr("stroke-width",0===e?8:2),t.select("#"+r).append("p").attr("class","fretnum").style("top",l()+b()+5+"px").style("left",o-4+"px").text(e)}}(),g(),function(){for(let e=0;e<u.strings;e++)u.svgContainer.append("line").attr("x1",d()).attr("y1",e*u.fretHeight+1+b()).attr("x2",d()+s()).attr("y2",e*u.fretHeight+1+b()).attr("stroke","black").attr("stroke-width",1);let e=function(e,t){return(u.strings-t)*u.fretHeight-4+"px"},n=function(e){return y(p(e)+u.startFret)},o=u.leftHanded?u.width-d()-16+"px":"4px";t.select("#"+r).selectAll(".tuning").data(u.tuning.slice(0,u.strings)).style("top",e).text(n).enter().append("p").attr("class","tuning").style("top",e).style("left",o).text(n)}(),u},u.paint=function(){var e,t=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,u=!0,f=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){f=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(f)throw o}}}}(u.notes);try{for(t.s();!(e=t.n()).done;){let t=e.value;_(t.note,t.string,t.color)}}catch(e){t.e(e)}finally{t.f()}},u.repaint=function(){u.drawBoard(),u.paint()},u.clear=function(){u.clearNotes();const e=document.getElementById(r);return e.parentNode.removeChild(e),u.drawBoard(),u},u.delete=function(){t.select("#"+r).remove()},u.getNotes=function(){return u.notes},u.drawBoard()};e.Fretboard=b,b.drawAll=function(e,t){t=t||{};let n=document.querySelectorAll(e);return n.forEach((function(e){let n=e.dataset.frets;if(n&&-1!==n.indexOf("-")){var r=o(n.split("-").map((function(e){return parseInt(e)})),2);t.startFret=r[0],t.frets=r[1]}else{var i=[0,parseInt(n)||8];t.startFret=i[0],t.frets=i[1]}let u=e.dataset.notes;t.where=e;let f=b(t);u&&f.add(u),f.paint()})),n}})?r.apply(t,o):r)||(e.exports=i)},
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./create */17),n(/*! ./creator */1),n(/*! ./local */47),n(/*! ./matcher */11),n(/*! ./mouse */48),n(/*! ./namespace */3),n(/*! ./namespaces */4),n(/*! ./point */2),n(/*! ./select */9),n(/*! ./selectAll */49),n(/*! ./selection/index */0),n(/*! ./selector */5),n(/*! ./selectorAll */10),n(/*! ./selection/style */14),n(/*! ./touch */50),n(/*! ./touches */51),n(/*! ./window */6),n(/*! ./selection/on */7)],void 0===(i="function"==typeof(r=function(e,t,n,r,o,i,u,f,l,a,s,c,d,p,y,h,v,b,g){"use strict";function _(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"create",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"creator",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"local",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"matcher",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"mouse",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"namespace",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"namespaces",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"clientPoint",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"select",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"selectAll",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"selection",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"selector",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"selectorAll",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"style",{enumerable:!0,get:function(){return y.styleValue}}),Object.defineProperty(e,"touch",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"touches",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"window",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e,"event",{enumerable:!0,get:function(){return g.event}}),Object.defineProperty(e,"customEvent",{enumerable:!0,get:function(){return g.customEvent}}),t=_(t),n=_(n),r=_(r),o=_(o),i=_(i),u=_(u),f=_(f),l=_(l),a=_(a),s=_(s),c=_(c),d=_(d),p=_(p),h=_(h),v=_(v),b=_(b)})?r.apply(t,o):r)||(e.exports=i)},
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./creator */1),n(/*! ./select */9)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return(0,n.default)((0,t.default)(e).call(document.documentElement))},t=r(t),n=r(n)})?r.apply(t,o):r)||(e.exports=i)},
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./index */0),n(/*! ../selector */5)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){"function"!=typeof e&&(e=(0,n.default)(e));for(var r=this._groups,o=r.length,i=new Array(o),u=0;u<o;++u)for(var f,l,a=r[u],s=a.length,c=i[u]=new Array(s),d=0;d<s;++d)(f=a[d])&&(l=e.call(f,f.__data__,d,a))&&("__data__"in f&&(l.__data__=f.__data__),c[d]=l);return new t.Selection(i,this._parents)},n=(r=n)&&r.__esModule?r:{default:r}})?r.apply(t,o):r)||(e.exports=i)},
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./index */0),n(/*! ../selectorAll */10)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){"function"!=typeof e&&(e=(0,n.default)(e));for(var r=this._groups,o=r.length,i=[],u=[],f=0;f<o;++f)for(var l,a=r[f],s=a.length,c=0;c<s;++c)(l=a[c])&&(i.push(e.call(l,l.__data__,c,a)),u.push(l));return new t.Selection(i,u)},n=(r=n)&&r.__esModule?r:{default:r}})?r.apply(t,o):r)||(e.exports=i)},
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./index */0),n(/*! ../matcher */11)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){"function"!=typeof e&&(e=(0,n.default)(e));for(var r=this._groups,o=r.length,i=new Array(o),u=0;u<o;++u)for(var f,l=r[u],a=l.length,s=i[u]=[],c=0;c<a;++c)(f=l[c])&&e.call(f,f.__data__,c,l)&&s.push(f);return new t.Selection(i,this._parents)},n=(r=n)&&r.__esModule?r:{default:r}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./index */0),n(/*! ./enter */12),n(/*! ../constant */22)],void 0===(i="function"==typeof(r=function(e,t,n,r){"use strict";var o;function i(e,t,r,o,i,u){for(var f,l=0,a=t.length,s=u.length;l<s;++l)(f=t[l])?(f.__data__=u[l],o[l]=f):r[l]=new n.EnterNode(e,u[l]);for(;l<a;++l)(f=t[l])&&(i[l]=f)}function u(e,t,r,o,i,u,f){var l,a,s,c={},d=t.length,p=u.length,y=new Array(d);for(l=0;l<d;++l)(a=t[l])&&(y[l]=s="$"+f.call(a,a.__data__,l,t),s in c?i[l]=a:c[s]=a);for(l=0;l<p;++l)(a=c[s="$"+f.call(e,u[l],l,u)])?(o[l]=a,a.__data__=u[l],c[s]=null):r[l]=new n.EnterNode(e,u[l]);for(l=0;l<d;++l)(a=t[l])&&c[y[l]]===a&&(i[l]=a)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){if(!e)return b=new Array(this.size()),p=-1,this.each((function(e){b[++p]=e})),b;var o=n?u:i,f=this._parents,l=this._groups;"function"!=typeof e&&(e=(0,r.default)(e));for(var a=l.length,s=new Array(a),c=new Array(a),d=new Array(a),p=0;p<a;++p){var y=f[p],h=l[p],v=h.length,b=e.call(y,y&&y.__data__,p,f),g=b.length,_=c[p]=new Array(g),m=s[p]=new Array(g),x=d[p]=new Array(v);o(y,h,_,m,x,b,n);for(var T,w,j=0,O=0;j<g;++j)if(T=_[j]){for(j>=O&&(O=j+1);!(w=m[O])&&++O<g;);T._next=w||null}}return(s=new t.Selection(s,f))._enter=c,s._exit=d,s},r=(o=r)&&o.__esModule?o:{default:o}})?r.apply(t,o):r)||(e.exports=i)},
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return function(){return e}}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./sparse */13),n(/*! ./index */0)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return new n.Selection(this._exit||this._groups.map(t.default),this._parents)},t=(r=t)&&r.__esModule?r:{default:r}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t,n){var r=this.enter(),o=this,i=this.exit();return r="function"==typeof e?e(r):r.append(e+""),null!=t&&(o=t(o)),null==n?i.remove():n(i),r&&o?r.merge(o).order():o}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./index */0)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){for(var n=this._groups,r=e._groups,o=n.length,i=r.length,u=Math.min(o,i),f=new Array(o),l=0;l<u;++l)for(var a,s=n[l],c=r[l],d=s.length,p=f[l]=new Array(d),y=0;y<d;++y)(a=s[y]||c[y])&&(p[y]=a);for(;l<o;++l)f[l]=n[l];return new t.Selection(f,this._parents)}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r,o=e[t],i=o.length-1,u=o[i];--i>=0;)(r=o[i])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./index */0)],void 0===(i="function"==typeof(r=function(e,t){"use strict";function n(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){function r(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=n);for(var o=this._groups,i=o.length,u=new Array(i),f=0;f<i;++f){for(var l,a=o[f],s=a.length,c=u[f]=new Array(s),d=0;d<s;++d)(l=a[d])&&(c[d]=l);c.sort(r)}return new t.Selection(u,this._parents).order()}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=new Array(this.size()),t=-1;return this.each((function(){e[++t]=this})),e}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],o=0,i=r.length;o<i;++o){var u=r[o];if(u)return u}return null}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=0;return this.each((function(){++e})),e}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return!this.node()}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o,i=t[n],u=0,f=i.length;u<f;++u)(o=i[u])&&e.call(o,o.__data__,u,i);return this}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ../namespace */3)],void 0===(i="function"==typeof(r=function(e,t){"use strict";function n(e){return function(){this.removeAttribute(e)}}function r(e){return function(){this.removeAttributeNS(e.space,e.local)}}function o(e,t){return function(){this.setAttribute(e,t)}}function i(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function u(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttribute(e):this.setAttribute(e,n)}}function f(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}var l;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,l){var a=(0,t.default)(e);if(arguments.length<2){var s=this.node();return a.local?s.getAttributeNS(a.space,a.local):s.getAttribute(a)}return this.each((null==l?a.local?r:n:"function"==typeof l?a.local?f:u:a.local?i:o)(a,l))},t=(l=t)&&l.__esModule?l:{default:l}})?r.apply(t,o):r)||(e.exports=i)},
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(e){return function(){delete this[e]}}function n(e,t){return function(){this[e]=t}}function r(e,t){return function(){var n=t.apply(this,arguments);null==n?delete this[e]:this[e]=n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,o){return arguments.length>1?this.each((null==o?t:"function"==typeof o?r:n)(e,o)):this.node()[e]}})?r.apply(t,o):r)||(e.exports=i)},
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(e){return e.trim().split(/^|\s+/)}function n(e){return e.classList||new r(e)}function r(e){this._node=e,this._names=t(e.getAttribute("class")||"")}function o(e,t){for(var r=n(e),o=-1,i=t.length;++o<i;)r.add(t[o])}function i(e,t){for(var r=n(e),o=-1,i=t.length;++o<i;)r.remove(t[o])}function u(e){return function(){o(this,e)}}function f(e){return function(){i(this,e)}}function l(e,t){return function(){(t.apply(this,arguments)?o:i)(this,e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r){var o=t(e+"");if(arguments.length<2){for(var i=n(this.node()),a=-1,s=o.length;++a<s;)if(!i.contains(o[a]))return!1;return!0}return this.each(("function"==typeof r?l:r?u:f)(o,r))},r.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){this.textContent=""}function n(e){return function(){this.textContent=e}}function r(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?"":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return arguments.length?this.each(null==e?t:("function"==typeof e?r:n)(e)):this.node().textContent}})?r.apply(t,o):r)||(e.exports=i)},
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){this.innerHTML=""}function n(e){return function(){this.innerHTML=e}}function r(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?"":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return arguments.length?this.each(null==e?t:("function"==typeof e?r:n)(e)):this.node().innerHTML}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){this.nextSibling&&this.parentNode.appendChild(this)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return this.each(t)}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return this.each(t)}})?r.apply(t,o):r)||(e.exports=i)},
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ../creator */1)],void 0===(i="function"==typeof(r=function(e,t){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var n="function"==typeof e?e:(0,t.default)(e);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},t=(n=t)&&n.__esModule?n:{default:n}})?r.apply(t,o):r)||(e.exports=i)},
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ../creator */1),n(/*! ../selector */5)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r){var i="function"==typeof e?e:(0,t.default)(e),u=null==r?o:"function"==typeof r?r:(0,n.default)(r);return this.select((function(){return this.insertBefore(i.apply(this,arguments),u.apply(this,arguments)||null)}))},t=r(t),n=r(n)})?r.apply(t,o):r)||(e.exports=i)},
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){var e=this.parentNode;e&&e.removeChild(this)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return this.each(t)}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function n(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return this.select(e?n:t)}})?r.apply(t,o):r)||(e.exports=i)},
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return arguments.length?this.property("__data__",e):this.node().__data__}})?r.apply(t,o):r)||(e.exports=i)},
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ../window */6)],void 0===(i="function"==typeof(r=function(e,t){"use strict";function n(e,n,r){var o=(0,t.default)(e),i=o.CustomEvent;"function"==typeof i?i=new i(n,r):(i=o.document.createEvent("Event"),r?(i.initEvent(n,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(n,!1,!1)),e.dispatchEvent(i)}function r(e,t){return function(){return n(this,e,t)}}function o(e,t){return function(){return n(this,e,t.apply(this,arguments))}}var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){return this.each(("function"==typeof t?o:r)(e,t))},t=(i=t)&&i.__esModule?i:{default:i}})?r.apply(t,o):r)||(e.exports=i)},
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var t=0;function n(){return new r}function r(){this._="@"+(++t).toString(36)}r.prototype=n.prototype={constructor:r,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}}})?r.apply(t,o):r)||(e.exports=i)},
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./sourceEvent */8),n(/*! ./point */2)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var r=(0,t.default)();return r.changedTouches&&(r=r.changedTouches[0]),(0,n.default)(e,r)},t=r(t),n=r(n)})?r.apply(t,o):r)||(e.exports=i)},
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./selection/index */0)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){return"string"==typeof e?new t.Selection([document.querySelectorAll(e)],[document.documentElement]):new t.Selection([null==e?[]:e],t.root)}})?r.apply(t,o):r)||(e.exports=i)},
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./sourceEvent */8),n(/*! ./point */2)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r,o){arguments.length<3&&(o=r,r=(0,t.default)().changedTouches);for(var i,u=0,f=r?r.length:0;u<f;++u)if((i=r[u]).identifier===o)return(0,n.default)(e,i);return null},t=r(t),n=r(n)})?r.apply(t,o):r)||(e.exports=i)},
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[t,n(/*! ./sourceEvent */8),n(/*! ./point */2)],void 0===(i="function"==typeof(r=function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,r){null==r&&(r=(0,t.default)().touches);for(var o=0,i=r?r.length:0,u=new Array(i);o<i;++o)u[o]=(0,n.default)(e,r[o]);return u},t=r(t),n=r(n)})?r.apply(t,o):r)||(e.exports=i)},
/*!******************************!*\
  !*** ./assets/fretboard.css ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */53),o=n(/*! !../node_modules/css-loader/dist/cjs.js!./fretboard.css */54);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),u=[];function f(e){for(var t=-1,n=0;n<u.length;n++)if(u[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],a=n[l]||0,s="".concat(l," ").concat(a);n[l]=a+1;var c=f(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(u[c].references++,u[c].updater(d)):u.push({identifier:s,updater:v(d,t),references:1}),r.push(s)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var u=i(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var s,c=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var y=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=y||(y=a(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=a(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=f(n[r]);u[o].references--}for(var i=l(e,t),a=0;a<n.length;a++){var s=f(n[a]);0===u[s].references&&(u[s].updater(),u.splice(s,1))}n=i}}}},
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/fretboard.css ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){(t=n(/*! ../node_modules/css-loader/dist/runtime/api.js */55)(!1)).push([e.i,".fretboard {\n  position: relative;\n}\n.fretboard .tuning,\n.fretboard .fretnum {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica;\n  text-transform: uppercase;\n}\n.fretboard .tuning {\n  font-size: 10px;\n}\n.fretboard .fretnum {\n  font-size: 8px;\n}\n",""]),e.exports=t},
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[],void 0===(i="function"==typeof(r=function(){"use strict";function t(e,t){var n,r,o,i=e[1]||"",u=e[3];if(!u)return i;if(t&&"function"==typeof btoa){var f=(n=u,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),l=u.sources.map((function(e){return"/*# sourceURL=".concat(u.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([f]).join("\n")}return[i].join("\n")}e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=t(n,e);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var f=0;f<e.length;f++){var l=[].concat(e[f]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}})?r.apply(t,o):r)||(e.exports=i)}])}));
//# sourceMappingURL=fretboard.js.map