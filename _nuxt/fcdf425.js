(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{522:function(t,e,n){},633:function(t,e,n){"use strict";n(3)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},634:function(t,e,n){"use strict";n(522)},651:function(t,e,n){"use strict";n.r(e);var r,o=n(14),c=(n(30),n(23),n(26),n(34),n(22),n(40),n(19)),v=n(0),l=(n(29),n(85),n(144),n(147),n(44),n(50),n(99),n(53),[]),_="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));n(242);var k,f=function(t){return Object.freeze(t)},d=function(t,e){this.inlineSize=t,this.blockSize=e,f(this)},h=(n(633),function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,f(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}()),m=function(t){return t instanceof SVGElement&&"getBBox"in t},w=function(t){if(m(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var o=t,c=o.offsetWidth,v=o.offsetHeight;return!(c||v||t.getClientRects().length)},y=function(t){var e,n;if(t instanceof Element)return!0;var r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},x="undefined"!=typeof window?window:{},O=new WeakMap,S=/auto|scroll/,E=/^tb|vertical/,T=/msie|trident/i.test(x.navigator&&x.navigator.userAgent),z=function(t){return parseFloat(t||"0")},R=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),new d((n?e:t)||0,(n?t:e)||0)},B=f({devicePixelContentBoxSize:R(),borderBoxSize:R(),contentBoxSize:R(),contentRect:new h(0,0,0,0)}),j=function(t,e){if(void 0===e&&(e=!1),O.has(t)&&!e)return O.get(t);if(w(t))return O.set(t,B),B;var n=getComputedStyle(t),svg=m(t)&&t.ownerSVGElement&&t.getBBox(),r=!T&&"border-box"===n.boxSizing,o=E.test(n.writingMode||""),c=!svg&&S.test(n.overflowY||""),v=!svg&&S.test(n.overflowX||""),l=svg?0:z(n.paddingTop),_=svg?0:z(n.paddingRight),k=svg?0:z(n.paddingBottom),d=svg?0:z(n.paddingLeft),y=svg?0:z(n.borderTopWidth),x=svg?0:z(n.borderRightWidth),j=svg?0:z(n.borderBottomWidth),C=d+_,P=l+k,D=(svg?0:z(n.borderLeftWidth))+x,N=y+j,M=v?t.offsetHeight-N-t.clientHeight:0,I=c?t.offsetWidth-D-t.clientWidth:0,L=r?C+D:0,A=r?P+N:0,F=svg?svg.width:z(n.width)-L-I,W=svg?svg.height:z(n.height)-A-M,X=F+C+I+D,V=W+P+M+N,$=f({devicePixelContentBoxSize:R(Math.round(F*devicePixelRatio),Math.round(W*devicePixelRatio),o),borderBoxSize:R(X,V,o),contentBoxSize:R(F,W,o),contentRect:new h(d,l,F,W)});return O.set(t,$),$},C=function(t,e,n){var o=j(t,n),c=o.borderBoxSize,v=o.contentBoxSize,l=o.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return l;case r.BORDER_BOX:return c;default:return v}},P=function(t){var e=j(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=f([e.borderBoxSize]),this.contentBoxSize=f([e.contentBoxSize]),this.devicePixelContentBoxSize=f([e.devicePixelContentBoxSize])},D=function(t){if(w(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},N=function(){var t=1/0,e=[];l.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new P(e.target),o=D(e.target);r.push(n),e.lastReportedSize=C(e.target,e.observedBox),o<t&&(t=o)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},M=function(t){l.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(D(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},I=function(){var t,e=0;for(M(e);l.some((function(t){return t.activeTargets.length>0}));)e=N(),M(e);return l.some((function(t){return t.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?t=new ErrorEvent("error",{message:_}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=_),window.dispatchEvent(t)),e>0},L=[],A=function(t){if(!k){var e=0,n=document.createTextNode("");new MutationObserver((function(){return L.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),k=function(){n.textContent=""+(e?e--:e++)}}L.push(t),k()},F=0,W={attributes:!0,characterData:!0,childList:!0,subtree:!0},X=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],time=function(t){return void 0===t&&(t=0),Date.now()+t},V=!1,$=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!V){V=!0;var n,r=time(t);n=function(){var n=!1;try{n=I()}finally{if(V=!1,t=r-time(),!F)return;n?e.run(1e3):t>0?e.run(t):e.start()}},A((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,W)};document.body?e():x.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),X.forEach((function(e){return x.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),X.forEach((function(e){return x.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),J=function(t){!F&&t>0&&$.start(),!(F+=t)&&$.stop()},U=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=C(this.target,this.observedBox,!0);return t=this.target,m(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),G=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},H=new WeakMap,Y=function(t,e){for(var i=0;i<t.length;i+=1)if(t[i].target===e)return i;return-1},K=function(){function t(){}return t.connect=function(t,e){var n=new G(t,e);H.set(t,n)},t.observe=function(t,e,n){var r=H.get(t),o=0===r.observationTargets.length;Y(r.observationTargets,e)<0&&(o&&l.push(r),r.observationTargets.push(new U(e,n&&n.box)),J(1),$.schedule())},t.unobserve=function(t,e){var n=H.get(t),r=Y(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&l.splice(l.indexOf(n),1),n.observationTargets.splice(r,1),J(-1))},t.disconnect=function(t){var e=this,n=H.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),Q=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");K.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!y(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");K.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!y(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");K.unobserve(this,t)},t.prototype.disconnect=function(){K.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();function Z(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function tt(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Z(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):Z(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var et=Object(v.defineComponent)({props:{bp:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(v.ref)(null),n=function(t){var e=Object(v.reactive)({w:0,h:0}),n=new Q((function(t){var n=t[0];e.w=n.contentBoxSize[0].inlineSize,e.h=n.contentBoxSize[0].blockSize}));return Object(v.onMounted)((function(){n.observe(t.value)})),Object(v.onUnmounted)((function(){n.disconnect()})),{el:Object(v.toRefs)(e),ro:n}}(e).el,r=Object(v.reactive)(tt(tt({},n),{},{is:Object(v.computed)((function(){var e={};for(var n in t.bp)e[n]=t.bp[n](r);return e}))}));return{target:e,el:r}}}),nt=n(2),st=Object(nt.a)(et,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"target",staticClass:"SResponsive",class:t.el.classes},[t._t("default",null,{el:t.el})],2)}),[],!1,null,null,null).exports,at=n(391),ot=Object(o.defineComponent)({components:{SResponsive:st,StoryBase:at.a},setup:function(){return{bp:{sm:function(t){return t.w>=320},md:function(t){return t.w>=480},lg:function(t){return t.w>=640}}}}}),pt=(n(634),Object(nt.a)(ot,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",[n("SResponsive",{attrs:{bp:t.bp},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.el;return[n("p",{staticClass:"text",class:{red:r.is.sm}},[t._v("Turn red on >= 320px")]),t._v(" "),n("p",{staticClass:"text",class:{green:r.is.md}},[t._v("Turn green on >= 480px")]),t._v(" "),n("p",{staticClass:"text",class:{blue:r.is.lg}},[t._v("Turn blue on >= 640px")])]}}])})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-vue"},[n("pre",{pre:!0},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SResponsive")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ el }"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":bp")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ red: el.is.sm }"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Turn red on >= 320px"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ green: el.is.md }"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Turn green on >= 480px"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ blue: el.is.lg }"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Turn blue on >= 640px"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("SResponsive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/composition-api'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SResponsive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BP")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@@/lib/components/SResponsive.vue'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    SResponsive\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BP")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sm")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" w "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" w "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("md")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" w "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" w "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("480")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lg")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" w "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" w "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      bp\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("postcss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/assets/styles/variables"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text + .text")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text.red")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--c-danger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text.green")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--c-success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text.blue")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--c-info-light"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,"9e23b55e",null).exports),ct=n(397),it=n(396),ut=Object(o.defineComponent)({components:{StoryResponsiveShowcase:pt,SpecProps:ct.a},scrollToTop:!0,setup:function(){return Object(it.a)({props:[{name:"bp",type:"BP",required:!1,default:"{}",description:"The breakpoints for the container."}]})},head:{title:"Responsive"}}),vt=Object(nt.a)(ut,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._m(0),t._v(" "),n("p",[t._v("A Responsive component handles content size changes, and add as a class name. It's very useful when you need a media query against the container element instead of the viewport of the window.")]),t._v(" "),n("StoryResponsiveShowcase"),t._v(" "),t._m(1),t._v(" "),n("SpecProps",{attrs:{props:t.props}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{attrs:{id:"responsive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#responsive","aria-hidden":"true"}},[t._v("#")]),t._v(" Responsive")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")])}],!1,null,null,null);e.default=vt.exports}}]);