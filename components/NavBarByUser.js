(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["components/NavBarByUser"], {
        "03e6": function (e, n, t) {
            "use strict";
            t.r(n);
            var r = t("d682"),
                o = t.n(r);
            for (var i in r) "default" !== i && function (e) {
                t.d(n, e, (function () {
                    return r[e]
                }))
            }(i);
            n["default"] = o.a
        },
        2088: function (e, n, t) {
            "use strict";
            var r = t("689a"),
                o = t.n(r);
            o.a
        },
        "689a": function (e, n, t) {},
        d682: function (e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = c(t("a34a")),
                o = t("2f62"),
                i = c(t("0f88")),
                u = c(t("b2eb")),
                a = t("5f87");

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (s) {
                    return void t(s)
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function f(e) {
                return function () {
                    var n = this,
                        t = arguments;
                    return new Promise((function (r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            s(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            s(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(t, !0).forEach((function (n) {
                        g(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(t).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function g(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            var h = function () {
                    t.e("components/formId").then(function () {
                        return resolve(t("ca79"))
                    }.bind(null, t)).catch(t.oe)
                },
                d = function () {
                    t.e("components/getPhoneNumber").then(function () {
                        return resolve(t("07e5"))
                    }.bind(null, t)).catch(t.oe)
                },
                b = {
                    props: {
                        isShowCardCase: {
                            type: Boolean,
                            default: !1
                        },
                        isShowShopCar: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    components: {
                        FormId: h,
                        GetPhoneNumber: d
                    },
                    computed: p({}, (0, o.mapState)({
                        isLogin: function (e) {
                            return e.isLoginStatus
                        },
                        userInfo: function (e) {
                            return e.userInfo
                        }
                    }), {}, (0, o.mapGetters)(["currentCompany", "subscriptionNew"]), {
                        isSelf: function () {
                            return this.currentCompany.userId == wx.getStorageSync("userId")
                        }
                    }),
                    data: function () {
                        return {
                            navHeight: "",
                            navTop: "",
                            navbarWidth: "",
                            navBarUserHeight: "",
                            canIUse: !1,
                            noPermission: !1,
                            loginImgHeight: "",
                            cancelLoginGuide: !1
                        }
                    },
                    mounted: function () {
                        var e = f(r.default.mark((function e() {
                            return r.default.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        this.authUserInfo(), this.calculateNavBarHeight();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function n() {
                            return e.apply(this, arguments)
                        }
                        return n
                    }(),
                    methods: {
                        dismissLoginGuide: function () {
                            (0, a.authSubscribeMessage)(this.subscriptionNew), this.cancelLoginGuide = !0
                        },
                        goUserCenter: function () {
                            (0, a.authSubscribeMessage)(this.subscriptionNew), wx.navigateTo({
                                url: "../usercenter/main"
                            })
                        },
                        calculateNavBarHeight: function () {
                            var e = this;
                            0 === getApp().globalData.menuButtonBounding && (getApp().globalData.menuButtonBounding = wx.getMenuButtonBoundingClientRect());
                            var n = getApp().globalData.menuButtonBounding;
                            wx.getSystemInfo({
                                success: function (t) {
                                    var r = t.statusBarHeight,
                                        o = r + 2 * (n.top - r) + n.height,
                                        i = o - r;
                                    e.navHeight = o + "px", e.navTop = r + "px", e.navBarUserHeight = i + "px", e.navbarWidth = n.right - n.width - 20 + "px", e.loginImgHeight = i / .36 + "px", getApp().globalData.navHeight = o
                                },
                                fail: function (e) {
                                    console.log(e)
                                }
                            })
                        },
                        authUserInfo: function () {
                            var e = this;
                            wx.getSetting({
                                success: function (n) {
                                    n.authSetting["scope.userInfo"] ? e.canIUse = !0 : e.canIUse = !1
                                }
                            })
                        },
                        toCardCase: function () {
                            (0, a.authSubscribeMessage)(this.subscriptionNew), wx.navigateTo({
                                url: "../cardCase/main"
                            })
                        },
                        GetUserInfo: function (e) {
                            var n = this,
                                t = this;
                            wx.getUserInfo({
                                success: function (e) {},
                                fail: function (e) {
                                    t.noPermission = !0
                                }
                            });
                            var r = e.target;
                            r.rawData && r.signature && r.encryptedData && r.iv ? i.default.login((function (e) {
                                i.default.setLoginMessageInStorage(e, !1), u.default.connectWebsocket(), n.loginSuccess()
                            }), (function () {
                                n.loginFailed()
                            })) : this.loginFailed()
                        },
                        page_turn: function (e) {
                            (0, a.authSubscribeMessage)(this.subscriptionNew), wx.navigateTo({
                                url: "/pages/" + e + "/main?type=" + this.intoType + "&cardId=" + this.currentCompany.cardId + "&userId=" + this.currentCompany.userId + "&logo=" + (this.currentCompany.logo || "") + "&wxCode=" + (this.currentCompany.personalWx || "") + "&phone=" + (this.currentCompany.phone || "") + "&specId=" + (this.specId || "") + "&name=" + (this.currentCompany.name || "")
                            })
                        },
                        loginSuccess: function () {
                            this.$emit("loginSuccess"), this.authUserInfo()
                        },
                        loginFailed: function () {
                            this.$emit("loginFailed")
                        }
                    },
                    onLaunch: function () {}
                };
            n.default = b
        },
        f5e0: function (e, n, t) {
            "use strict";
            var r, o = function () {
                    var e = this,
                        n = e.$createElement;
                    e._self._c;
                    e._isMounted || (e.e0 = function () {
                        return e.console.log(111)
                    })
                },
                i = [];
            t.d(n, "b", (function () {
                return o
            })), t.d(n, "c", (function () {
                return i
            })), t.d(n, "a", (function () {
                return r
            }))
        },
        f655: function (e, n, t) {
            "use strict";
            t.r(n);
            var r = t("f5e0"),
                o = t("03e6");
            for (var i in o) "default" !== i && function (e) {
                t.d(n, e, (function () {
                    return o[e]
                }))
            }(i);
            t("2088");
            var u, a = t("f0c5"),
                c = Object(a["a"])(o["default"], r["b"], r["c"], !1, null, "2c5ce856", null, !1, r["a"], u);
            n["default"] = c.exports
        }
    }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/NavBarByUser-create-component',
    {
        'components/NavBarByUser-create-component': (function (module, exports, __webpack_require__) {
            __webpack_require__('543d')['createComponent'](__webpack_require__("f655"))
        })
    },
    [
        ['components/NavBarByUser-create-component']
    ]
]);
