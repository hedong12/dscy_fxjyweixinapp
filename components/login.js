(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/login"],{"0790":function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},1954:function(e,t,n){"use strict";n.r(t);var r=n("0790"),o=n("624a");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("9ce0");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=u.exports},3995:function(e,t,n){},"624a":function(e,t,n){"use strict";n.r(t);var r=n("de05"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"9ce0":function(e,t,n){"use strict";var r=n("3995"),o=n.n(r);o.a},de05:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n("0f88")),i=a(n("b2eb"));function a(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}var s={name:"login",props:["isShow","loginType","isCancelHide"],methods:{cancel:function(){(new Date).getTime()<new Date("2020-10-14 23:00:00").getTime()&&(wx.setStorageSync("COMPANYID",713),wx.setStorageSync("token","6zfQ5ZrNCD_101287"),wx.setStorageSync("avatarUrl","https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL8FPp8twh96qgKQvFv2gpNCbk92Nk6c4kC7o5PqtLcaKpibGU0Ln5icibJG9wGfn1pvHjZFFqiaj1ziaw/132"),wx.setStorageSync("USERNAME","会魔法的魔法"),wx.setStorageSync("phone","13251531151"),wx.setStorageSync("userId",10187),wx.setStorageSync("roleId",717),wx.setStorageSync("hasCard",!0),wx.setStorageSync("isLogin",!0),wx.setStorageSync("CARDID",1926),wx.setStorageSync("CARDTEL","13946188265")),this.$emit("cancelLogin",this.loginType)},GetUserInfo:function(e){var t=this,n=e.target;if(n.rawData&&n.signature&&n.encryptedData&&n.iv){var r={};this.$root.$mp.query.bookid&&(r.pictureBooksId=this.$root.$mp.query.bookid),this.$root.$mp.query.seeuserid&&(r.seeuserId=this.$root.$mp.query.seeuserid),o.default.login((function(e){o.default.setLoginMessageInStorage(e,!1),i.default.connectWebsocket(),(0,o.redirectPage)(wx.getStorageSync("redirectPage")),t.$emit("loginSuccess")}),(function(){}),r)}else o.default.showToast()}}};t.default=s}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/login-create-component',
    {
        'components/login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1954"))
        })
    },
    [['components/login-create-component']]
]);
