(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/shareOrSave"],{5515:function(e,t,n){"use strict";var a,c=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},5998:function(e,t,n){"use strict";n.r(t);var a=n("5515"),c=n("9bc9");for(var r in c)"default"!==r&&function(e){n.d(t,e,(function(){return c[e]}))}(r);n("eca7");var u,o=n("f0c5"),i=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=i.exports},"67ea":function(e,t,n){},"9bc9":function(e,t,n){"use strict";n.r(t);var a=n("ff32"),c=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=c.a},eca7:function(e,t,n){"use strict";var a=n("67ea"),c=n.n(a);c.a},ff32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("ee73"),c={name:"shareOrSave",props:["status","saveId","typeId"],methods:{closeModal:function(){this.$emit("closeModal")},save:function(){var e=this.saveId||0,t=this.typeId||0;(0,a.addShareRecord)(wx.getStorageSync("COMPANYID"),t,e,wx.getStorageSync("CARDID")+""+(new Date).getTime()).then((function(e){}),(function(e){})),this.$emit("save")}}};t.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/shareOrSave-create-component',
    {
        'components/shareOrSave-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5998"))
        })
    },
    [['components/shareOrSave-create-component']]
]);
