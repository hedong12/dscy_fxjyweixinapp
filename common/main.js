(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["common/main"], {
		"034f": function(e, t, n) {
			"use strict";
			var r = n("9edd"),
				o = n.n(r);
			o.a
		},
		"23be": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("fbd0"),
				o = n.n(r);
			for (var a in r) "default" !== a && function(e) {
				n.d(t, e, (function() {
					return r[e]
				}))
			}(a);
			t["default"] = o.a
		},
		"3dfd": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("23be");
			for (var o in r) "default" !== o && function(e) {
				n.d(t, e, (function() {
					return r[e]
				}))
			}(o);
			n("034f");
			var a, c, u, d, i = n("f0c5"),
				s = Object(i["a"])(r["default"], a, c, !1, null, null, null, !1, u, d);
			t["default"] = s.exports
		},
		"56d7": function(e, t, n) {
			"use strict";
			(function(e) {
				n("6cdc"), n("921b");
				var t = c(n("66fd")),
					r = c(n("3dfd")),
					o = c(n("4360")),
					a = c(n("1b62"));

				function c(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}

				function u(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function d(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? u(n, !0).forEach((function(t) {
							i(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(
							n).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function i(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}
				n("7f9a"), n("6bc5"), t.default.config.productionTip = !1, r.default.mpType = "app", t.default.mixin(a.default),
					t.default.prototype.$store = o.default;
				var s = new t.default(d({}, r.default, {
					store: o.default
				}));
				e(s).$mount()
			}).call(this, n("543d")["createApp"])
		},
		"9edd": function(e, t, n) {},
		fbd0: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var r = s(n("a34a")),
				o = s(n("b2eb")),
				a = s(n("ed08")),
				c = s(n("b775")),
				u = s(n("0f88")),
				d = n("ee73"),
				i = n("2f62");

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function f(e, t, n, r, o, a, c) {
				try {
					var u = e[a](c),
						d = u.value
				} catch (i) {
					return void n(i)
				}
				u.done ? t(d) : Promise.resolve(d).then(r, o)
			}

			function l(e) {
				return function() {
					var t = this,
						n = arguments;
					return new Promise((function(r, o) {
						var a = e.apply(t, n);

						function c(e) {
							f(a, r, o, c, u, "next", e)
						}

						function u(e) {
							f(a, r, o, c, u, "throw", e)
						}
						c(void 0)
					}))
				}
			}

			function p(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function g(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? p(n, !0).forEach((function(t) {
							y(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n)
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}

			function y(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var b = {
				globalData: {
					menuButtonBounding: 0,
					navHeight: 0
				},
				computed: g({}, (0, i.mapState)({
					isLogin: function(e) {
						return e.isLoginStatus
					}
				})),
				data: function() {
					return {
						preShareId: ""
					}
				},
				onShow: function() {
					var e = l(r.default.mark((function e(t) {
						var n, c, i, s, f;
						return r.default.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									if (this.checkVersion(), t.query.scene && (n = a.default.formatParams(decodeURIComponent(t.query.scene)),
											console.log("太阳码打开小程序参数:", n), wx.setStorageSync("temCardId", 1773), t.query.cardId && wx.setStorageSync(
												"temCardId", t.query.cardId), n.card && wx.setStorageSync("temCardId", n.card), n.id > 0 ?
											this.sceneJump(n) : this.oldSceneJump(n, t)), 1 != t.query.goType) {
										e.next = 22;
										break
									}
									for (s in console.log("goType = 1 进行页面跳转", t.path, t.query), c = "/" + t.path, t.query.goodId &&
										(wx.setStorageSync("forwardId", t.query.forwardId), wx.setStorageSync("forwardGoodsId", t.query.goodId),
											c += "?goodId=" + t.query.goodId), t.query.dynamicId && (c += "?dynamicId=" + t.query.dynamicId +
											"&companyId=" + t.query.companyId + "&cardId=" + t.query.cardId), wx.setStorageSync("COMPANYID",
											t.query.companyId), t.query.cardId && wx.setStorageSync("temCardId", t.query.cardId), t.query.goToIndex &&
										1 === t.query.goToIndex && (console.log("goToIndex = 1 跳转到首页"), c = "/pages/index/main"), i = "",
										t.query) s && (i += "".concat(s, "=").concat(t.query[s], "&"));
									if (i && (i = i.substr(0, i.length - 1)), wx.setStorageSync("redirectPage", c + "?" + i), !u.default
										.returnIsLogin() || wx.getStorageSync("hasCard")) {
										e.next = 20;
										break
									}
									return e.next = 17, u.default.loginPromise();
								case 17:
									f = e.sent, console.log("app login data", f), f && (u.default.setLoginMessageInStorage(f, !1), o.default
										.connectWebsocket());
								case 20:
									u.default.returnIsLogin() || wx.reLaunch({
										url: "/pages/index/main"
									}), t.query.shareId && t.query.shareId !== this.preShareId && this.isLogin && (this.preShareId =
										t.query.shareId, (0, d.openShare)(t.query.shareId));
								case 22:
									o.default.connectWebsocket();
								case 23:
								case "end":
									return e.stop()
							}
						}), e, this)
					})));

					function t(t) {
						return e.apply(this, arguments)
					}
					return t
				}(),
				created: function() {},
				methods: {
					checkVersion: function() {
						if (wx.canIUse("getUpdateManager")) {
							var e = wx.getUpdateManager();
							e.onCheckForUpdate((function(t) {
								console.log("checkInfo", t), t.hasUpdate && (e.onUpdateReady((function() {
									wx.showModal({
										title: "更新提示",
										content: "新版本已经准备好，是否重启应用？",
										success: function(t) {
											t.confirm && e.applyUpdate()
										}
									})
								})), e.onUpdateFailed((function() {
									wx.showModal({
										title: "已经有新版本了哟~",
										content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
									})
								})))
							}))
						} else wx.showModal({
							title: "提示",
							content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
						})
					},
					oldSceneJump: function(e, t) {
						var n = "/" + t.path;
						wx.setStorageSync("COMPANYID", e.c), wx.setStorageSync("CARDID", e.card), e.g && (n += "?goodId=".concat(e.g)),
							wx.reLaunch({
								url: n
							})
					},
					sceneJump: function(e) {
						c.default.POST({
							sunCodeId: e.id
						}, "", "/businessCard/getSunCode").then((function(e) {
							var t = "/" + e.page,
								n = a.default.formatParams(decodeURIComponent(e.scene));
							console.log("太阳码 scene :", n), wx.setStorageSync("COMPANYID", n.c), wx.setStorageSync("CARDID", n.card),
								"/pages/dynamicDetail/main" === t ? (t += "?dynamicId=".concat(n.dynamic), (0, d.openShare)(n.shareId)) :
								n.g && (t += "?goodId=".concat(n.g)), wx.reLaunch({
									url: t
								})
						}))
					}
				},
				log: function() {
					console.log("log at:".concat(Date.now()))
				}
			};
			t.default = b
		}
	},
	[
		["56d7", "common/runtime", "common/vendor"]
	]
]);
