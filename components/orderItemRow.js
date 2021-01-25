(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/orderItemRow"],{"0c84":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},"28f7":function(t,e,n){"use strict";n.r(e);var o=n("96a2"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"5e56":function(t,e,n){"use strict";n.r(e);var o=n("0c84"),i=n("28f7");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a6e5");var u,a=n("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=c.exports},8495:function(t,e,n){},"96a2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"",props:["orderData","order_type"],components:{},data:function(){return{menu:[{title:"全部产品",id:"0"},{title:"软件开发",id:"1"},{title:"电商运营",id:"2"},{title:"品牌推广",id:"3"},{title:"品牌推广1",id:"4"},{title:"品牌推广2",id:"5"},{title:"品牌推广3",id:"6"},{title:"品牌推广4",id:"7"},{title:"品牌推广5",id:"8"},{title:"品牌推广6",id:"9"}]}},mounted:function(){console.log("===================================="),console.log(this.orderData),console.log("====================================")},methods:{toCompany:function(){wx.switchTab({url:"../Product/main"})},order_tap:function(t){this.$emit("order_tap",t)}}};e.default=o},a6e5:function(t,e,n){"use strict";var o=n("8495"),i=n.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/orderItemRow-create-component',
    {
        'components/orderItemRow-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5e56"))
        })
    },
    [['components/orderItemRow-create-component']]
]);
