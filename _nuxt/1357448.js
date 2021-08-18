(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{493:function(t,e,n){},494:function(t,e,n){},495:function(t,e,n){},604:function(t,e,n){"use strict";n(493)},605:function(t,e,n){"use strict";n(494)},606:function(t,e,n){"use strict";n(495)},654:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(67),n(0)),l=n(400),c=n(404),v=Object(o.defineComponent)({components:{SInputText:c.a},props:{size:{type:String,default:"medium"},mode:{type:String,default:"filled"},name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},placeholder:{type:String,default:null},text:{type:String,default:null},textAfter:{type:String,default:null},action:{type:Object,default:null},step:{type:Number,default:1},helpFormat:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},value:{type:Number,default:null},validation:{type:Object,default:null}},setup:function(t,e){var n=e.emit;return{valueWithSeparator:Object(o.computed)((function(){return Object(l.c)(t.value)?"0":t.value>=1e20?"The number is too big":t.value.toLocaleString("en-US",{maximumFractionDigits:20})})),emitInput:function(t){n("input",t)},emitBlur:function(t){n("blur",t)},emitEnter:function(t){n("enter",t)}}}}),_=(n(604),n(2)),k=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SInputText",{staticClass:"SInputNumber",attrs:{size:t.size,mode:t.mode,name:t.name,label:t.label,note:t.note,help:t.help,type:"number",placeholder:t.placeholder,text:t.text,"text-after":t.textAfter,action:t.action,step:t.step,disabled:t.disabled,validation:t.validation,value:t.value},on:{input:t.emitInput,blur:t.emitBlur,enter:t.emitEnter,action:function(e){return t.$emit("action")}},scopedSlots:t._u([{key:"before-help",fn:function(){return[t.helpFormat?n("p",{staticClass:"help-text"},[t._v("\n      "+t._s(t.valueWithSeparator)+"\n    ")]):t._e()]},proxy:!0}])})}),[],!1,null,"3db3ea8c",null).exports,d=n(391),m=Object(r.defineComponent)({components:{SInputNumber:k,StoryBase:d.a},setup:function(){return{value:Object(r.ref)(null)}}}),f=(n(605),Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",[n("div",{staticClass:"input"},[n("SInputNumber",{attrs:{name:"input",label:"Label",note:"Note text",help:"This is a help text.",placeholder:"123456789"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-vue"},[n("pre",{pre:!0},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SInputNumber")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("note")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Note text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("help")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a help text."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("123456789"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/composition-api'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SInputNumber "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@globalbrain/sefirot/lib/components/SInputNumber.vue'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    SInputNumber\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ref"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      value\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("postcss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,"0bf44696",null).exports),h=Object(r.defineComponent)({components:{SInputNumber:k,StoryBase:d.a},setup:function(){return{value:Object(r.ref)(1e6)}}}),y=(n(606),Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",{attrs:{title:"Show input number with thousand separator"}},[n("div",{staticClass:"input"},[n("SInputNumber",{attrs:{placeholder:"123456789","help-format":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-vue"},[n("pre",{pre:!0},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SInputNumber")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("123456789"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("help-format")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/composition-api'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SInputNumber "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@globalbraon/sefirot/lib/components/SInputNumber'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    SInputNumber\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ref"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      value\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("postcss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 320px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,"6dac9c02",null).exports),w=n(397),S=n(394),x=n(396),I=Object(r.defineComponent)({components:{StoryInputNumberShowcase:f,StoryInputNumberEXHelpFormat:y,SpecProps:w.a,SpecEvents:S.a},scrollToTop:!0,setup:function(){return Object(x.a)({props:[{name:"action",type:"SInputText.Action",required:!1,default:"null",description:'The action to be prepened to the input. [See "Inputs: Text" for more details](./inputs-text#action).'},{name:"disabled",type:"boolean",required:!1,default:"false",description:"Disable the input."},{name:"size",type:"'medium' | 'mini'",required:!1,default:"medium",description:"The size of the input."},{name:"mode",type:"'filled' | 'outlined'",required:!1,default:"filled",description:"The style of the input."},{name:"name",type:"string",required:!1,default:"null",description:"The name for the field. It will be set to `for` attribute at label, and `id` attribute at input so that when user clicks the label, the input will get focus."},{name:"label",type:"string",required:!1,default:"null",description:"The label for the input."},{name:"note",type:"string",required:!1,default:"null",description:"The small note text that will be displayed next to label. The note should be short for example `Optional` or `Max length 160`."},{name:"help",type:"string",required:!1,default:"null",description:"The help text that will be displayed under the input. Useful to add a little detailed information about the input."},{name:"placeholder",type:"string",required:!1,default:"null",description:"The placeholder text for the input."},{name:"text",type:"string",required:!1,default:"null",description:"Add the leading text to the input."},{name:"text-after",type:"string",required:!1,default:"null",description:"Add the trailing text to the input."},{name:"step",type:"number",required:!1,default:"1",description:"A stepping interval to use when using up and down arrows to adjust the value."},{name:"help-format",type:"boolean",required:!1,default:"false",description:"The input value with thousand separator that will be displayed under the input."},{name:"value",type:"number",required:!1,default:"null",description:"The value of input. You may also use `v-model` to bind a value to the input."},{name:"validation",type:"Validation",required:!1,default:"null",description:"You can pass Validation object to let input display any errors."}],events:[{name:"input",description:"Fires when a user input any value to the filed."},{name:"blur",description:"Fires when a user blur focus from the filed."},{name:"enter",description:"Fires when the user hit enter key."}]})},head:{title:"Inputs: Number"}}),N=Object(_.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._m(0),t._v(" "),n("p",[t._v("Number input let users enter and edit single line number.")]),t._v(" "),n("StoryInputNumberShowcase"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("StoryInputNumberEXHelpFormat"),t._v(" "),t._m(4),t._v(" "),n("SpecProps",{attrs:{props:t.props}}),t._v(" "),n("SpecEvents",{attrs:{events:t.events}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{attrs:{id:"inputs%3A-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inputs%3A-number","aria-hidden":"true"}},[t._v("#")]),t._v(" Inputs: Number")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"help-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#help-format","aria-hidden":"true"}},[t._v("#")]),t._v(" Help format")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("You can show the input number with thousand separator under the input by passing "),n("code",[t._v("help-format")]),t._v(" props.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")])}],!1,null,null,null);e.default=N.exports}}]);