(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{416:function(t,n,e){},418:function(t,n,e){"use strict";var c=e(2),component=Object(c.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M21,7H8C7.4,7,7,6.6,7,6s0.4-1,1-1h13c0.6,0,1,0.4,1,1S21.6,7,21,7z"}}),t._v(" "),e("path",{attrs:{d:"M21,13H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h13c0.6,0,1,0.4,1,1S21.6,13,21,13z"}}),t._v(" "),e("path",{attrs:{d:"M21,19H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h13c0.6,0,1,0.4,1,1S21.6,19,21,19z"}}),t._v(" "),e("path",{attrs:{d:"M3,7C2.5,7,2,6.6,2,6s0.4-1,1-1h0c0.6,0,1,0.4,1,1S3.6,7,3,7z"}}),t._v(" "),e("path",{attrs:{d:"M3,13c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S3.6,13,3,13z"}}),t._v(" "),e("path",{attrs:{d:"M3,19c-0.6,0-1-0.4-1-1s0.4-1,1-1h0c0.6,0,1,0.4,1,1S3.6,19,3,19z"}})])}),[],!1,null,null,null);n.a=component.exports},423:function(t,n,e){"use strict";e(416)},424:function(t,n,e){"use strict";function c(content){return content}e.d(n,"a",(function(){return c}))},428:function(t,n,e){"use strict";e(39);var c=e(14),o=e(418),l=e(143),r=e(48),v=Object(c.defineComponent)({components:{SIconX:l.a,SButton:r.a},props:{contents:{type:Array,required:!0}},setup:function(){var t=Object(c.ref)(!1),n=Object(c.ref)(!1);function e(){t.value=!0,setTimeout((function(){n.value=!0}),50)}function l(){n.value=!1,setTimeout((function(){t.value=!1}),250)}return{show:t,on:n,icon:o.a,toggle:function(){t.value?l():e()},open:e,close:l,delayClose:function(){setTimeout(l,300)}}}}),d=(e(423),e(2)),component=Object(d.a)(v,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"SideBarNavigation",class:{show:t.show,on:t.on}},[e("div",{staticClass:"container"},[e("div",{staticClass:"action"},[e("div",{staticClass:"button"},[e("SButton",{attrs:{label:"MENU",type:"text",icon:t.icon},on:{click:t.toggle}})],1),t._v(" "),e("button",{staticClass:"close",on:{click:t.close}},[e("SIconX",{staticClass:"close-icon"})],1)]),t._v(" "),e("nav",{staticClass:"nav"},[e("div",{staticClass:"nav-container"},[e("ul",{staticClass:"nav-list"},t._l(t.contents,(function(content){return e("li",{key:content.path,staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:content.path},nativeOn:{click:function(n){return t.delayClose(n)}}},[t._v(t._s(content.label))])],1)})),0)])])])])}),[],!1,null,"6ac54edf",null);n.a=component.exports},531:function(t,n,e){},643:function(t,n,e){"use strict";e(531)},672:function(t,n,e){"use strict";e.r(n);var c=e(14),o=e(428),l=e(424),r=Object(c.defineComponent)({components:{SidebarNavigation:o.a},setup:function(){return{contents:Object(l.a)([{label:"Getting Started",path:"/guide/getting-started"},{label:"Contribution",path:"/guide/contribution"}])}}}),v=(e(643),e(2)),component=Object(v.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Guide"},[e("SidebarNavigation",{attrs:{contents:t.contents}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"main c-medium"},[e("NuxtChild",{key:t.$route.path})],1)])],1)}),[],!1,null,"f95b6d42",null);n.default=component.exports}}]);