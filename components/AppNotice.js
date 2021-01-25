(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/AppNotice"],{"72ed":function(t,n,e){"use strict";e.r(n);var c=e("9f77"),u=e("a6ec");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("95ab");var i,r=e("f0c5"),a=Object(r["a"])(u["default"],c["b"],c["c"],!1,null,"0b729777",null,!1,c["a"],i);n["default"]=a.exports},"8d6a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={name:"AppNotice",props:{noticeList:{type:Array,default:function(){return[]}}},data:function(){return{currentIdx:0,tops:[]}},mounted:function(){var t=this;setTimeout((function(){t.changePosition()}),500)},methods:{changeIdx:function(t){this.currentIdx=t.target.current},changePosition:function(){var t=this;wx.createSelectorQuery().selectAll(".box").boundingClientRect((function(n){n.map((function(n){t.tops.push(n.top+n.height+15)}))})).exec()}},watch:{noticeList:{handler:function(){this.changePosition()},deep:!0}}};n.default=c},"95ab":function(t,n,e){"use strict";var c=e("f707"),u=e.n(c);u.a},"9f77":function(t,n,e){"use strict";var c,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return c}))},a6ec:function(t,n,e){"use strict";e.r(n);var c=e("8d6a"),u=e.n(c);for(var o in c)"default"!==o&&function(t){e.d(n,t,(function(){return c[t]}))}(o);n["default"]=u.a},f707:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/AppNotice-create-component',
    {
        'components/AppNotice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("72ed"))
        })
    },
    [['components/AppNotice-create-component']]
]);
