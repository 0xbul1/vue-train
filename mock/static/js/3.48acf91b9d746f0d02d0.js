webpackJsonp([3],{Cdx3:function(e,t,o){var n=o("sB3e"),r=o("lktj");o("uqUo")("keys",function(){return function(e){return r(n(e))}})},D5cW:function(e,t){},fZjL:function(e,t,o){e.exports={default:o("jFbC"),__esModule:!0}},jFbC:function(e,t,o){o("Cdx3"),e.exports=o("FeBl").Object.keys},uqUo:function(e,t,o){var n=o("kM2E"),r=o("FeBl"),a=o("S82l");e.exports=function(e,t){var o=(r.Object||{})[e]||Object[e],i={};i[e]=t(o),n(n.S+n.F*a(function(){o(1)}),"Object",i)}},wHgX:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("fZjL"),r=o.n(n),a=o("Xxa5"),i=o.n(a),u=o("exGp"),c=o.n(u),s=o("7Ok5"),b=o("gyMJ"),l={data:function(){return{book:{}}},watch:{$route:function(){this.getData()}},created:function(){this.getData()},methods:{update:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.f)(e.getDetailId,e.book);case 2:e.$router.push("/list");case 3:case"end":return t.stop()}},t,e)}))()},getData:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.b)(e.getDetailId);case 2:e.book=t.sent,r()(e.book).length>0||e.$router.push("/list");case 4:case"end":return t.stop()}},t,e)}))()}},computed:{getDetailId:function(){return this.$route.params.detailid}},components:{Top:s.a}},f={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"detail"},[o("Top",{attrs:{back:!0}},[e._v("详情页")]),e._v(" "),o("div",{staticClass:"detail-content"},[o("ul",[o("li",[o("label",{attrs:{for:"bookName"}},[e._v("书名：")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName"},domProps:{value:e.book.bookName},on:{input:function(t){t.target.composing||e.$set(e.book,"bookName",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookInfo"}},[e._v("作者：")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:e.book.bookInfo},on:{input:function(t){t.target.composing||e.$set(e.book,"bookInfo",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookPrice"}},[e._v("改价：")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"number",id:"bookPrice"},domProps:{value:e.book.bookPrice},on:{input:function(t){t.target.composing||e.$set(e.book,"bookPrice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("li",[o("button",{on:{click:e.update}},[e._v("改一下")])])])])],1)},staticRenderFns:[]};var d=o("VU/8")(l,f,!1,function(e){o("D5cW")},"data-v-f6782d5c",null);t.default=d.exports}});
//# sourceMappingURL=3.48acf91b9d746f0d02d0.js.map