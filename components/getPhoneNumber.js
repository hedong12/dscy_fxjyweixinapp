(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/getPhoneNumber"],{"07e5":function(e,t,n){"use strict";n.r(t);var r=n("6ac9"),o=n("d8c8");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("5529");var u,i=n("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"1dd94a52",null,!1,r["a"],u);t["default"]=c.exports},"1b44":function(e,t,n){},3054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("b775")),o=u(n("0f88")),a=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={name:"getPhoneNumber",components:{},props:{eventName:{type:String,default:"next"},isFromUserCenter:{type:Boolean,default:!1}},data:function(){return{isLogin:o.default.returnIsLogin()||"",id:Date.now()*Math.random(),phone:wx.getStorageSync("phone")||""}},methods:c({},(0,a.mapMutations)(["setPhone"]),{getPhone:function(){return wx.getStorageSync("phone")||""},checkLogin:function(){o.default.returnIsLogin()?this.isLogin=!0:this.$emit("loginGuide")},next:function(){this.$emit(this.eventName)},GetUserInfo:function(e){console.log("获取用户信息");var t=e.target;t.rawData&&t.signature&&t.encryptedData&&t.iv&&o.default.login((function(e){o.default.setLoginMessageInStorage(e,!1)}))},getPhoneNumber:function(e){var t=this;o.default.returnIsLogin()?this.phone||(e.target.encryptedData?(r.default.POST({phoneData:e.target.encryptedData,phoneIv:e.target.iv},"","/home/getWxPhone").then((function(e){t.phone=e,wx.setStorageSync("phone",e),t.setPhone(e)})).catch((function(e){console.log("获取手机号出错：",e)})),this.next(this.eventName)):this.next()):console.error("必须先登录才能获取电话号码")}}),computed:c({},(0,a.mapState)({vuexPhone:function(e){return e.phone}}))};t.default=s},5529:function(e,t,n){"use strict";var r=n("1b44"),o=n.n(r);o.a},"6ac9":function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},d8c8:function(e,t,n){"use strict";n.r(t);var r=n("3054"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/getPhoneNumber-create-component',
    {
        'components/getPhoneNumber-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("07e5"))
        })
    },
    [['components/getPhoneNumber-create-component']]
]);
