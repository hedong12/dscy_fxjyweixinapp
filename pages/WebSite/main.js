(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/WebSite/main"], {
		"0998": function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("bd1c"),
				r = n("b44f");
			for (var o in r) "default" !== o && function(t) {
				n.d(e, t, (function() {
					return r[t]
				}))
			}(o);
			n("f93d");
			var a, c = n("f0c5"),
				u = Object(c["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], a);
			e["default"] = u.exports
		},
		"71a8": function(t, e, n) {},
		"7f10": function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = void 0;
			var i = l(n("a34a")),
				r = l(n("b775")),
				o = l(n("fa99")),
				a = l(n("ed08")),
				c = n("5f87"),
				u = n("2f62"),
				s = l(n("0f88"));

			function l(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function f(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e && (i = i.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, i)
				}
				return n
			}

			function d(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? f(n, !0).forEach((function(e) {
							h(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(n)
						.forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
				}
				return t
			}

			function h(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function p(t, e, n, i, r, o, a) {
				try {
					var c = t[o](a),
						u = c.value
				} catch (s) {
					return void n(s)
				}
				c.done ? e(u) : Promise.resolve(u).then(i, r)
			}

			function m(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(i, r) {
						var o = t.apply(e, n);

						function a(t) {
							p(o, i, r, a, c, "next", t)
						}

						function c(t) {
							p(o, i, r, a, c, "throw", t)
						}
						a(void 0)
					}))
				}
			}
			var g = function() {
					n.e("components/swiper").then(function() {
						return resolve(n("91b0"))
					}.bind(null, n)).catch(n.oe)
				},
				w = function() {
					n.e("components/FloatButtons").then(function() {
						return resolve(n("590c"))
					}.bind(null, n)).catch(n.oe)
				},
				v = function() {
					Promise.all([n.e("common/vendor"), n.e("components/NavBarByUser")]).then(function() {
						return resolve(n("f655"))
					}.bind(null, n)).catch(n.oe)
				},
				y = {
					name: "",
					components: {
						SelfSwiper: g,
						NavBarByUser: v,
						FloatButtons: w
					},
					data: function() {
						return {
							img: "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/food.jpg",
							images: [{
								url: this.img
							}, {
								url: this.img
							}],
							playIndex: "",
							imgUrls: [{
								img: this.img,
								url: "/_pages/common/webview/main?url=https://wechat.benmu-health.com/mobile/app/common/material/render/17"
							}, {
								img: this.img,
								url: "/pages/checkup/filterPackage/index?category=PARENTS_CHECKUP"
							}],
							COMPANYID: 0,
							myAmapFun: "",
							Mc: "",
							form: {
								name: "",
								tel: "",
								text: ""
							},
							company: {
								accuracy: "",
								dimension: ""
							},
							invites: [],
							locat: {
								lat: 30.5702,
								lng: 104.06476
							},
							educatArray: [{
								title: "全部",
								id: 1
							}, {
								title: "初中及以下",
								id: 2
							}, {
								title: "中专/中技",
								id: 3
							}, {
								title: "高中",
								id: 4
							}, {
								title: "大专",
								id: 5
							}, {
								title: "本科",
								id: 6
							}, {
								title: "硕士",
								id: 7
							}, {
								title: "博士",
								id: 8
							}],
							experienceArray: [{
								title: "应届生",
								id: 1
							}, {
								title: "1年以内",
								id: 2
							}, {
								title: "1-3年",
								id: 3
							}, {
								title: "3-5年",
								id: 4
							}, {
								title: "5-10年",
								id: 5
							}, {
								title: "10年以上",
								id: 6
							}, {
								title: "全部",
								id: 7
							}],
							videoContext: null,
							avatarUrl: "",
							isLogin: s.default.returnIsLogin() || !1,
							isShowTalk: !0,
							isShowLoginGuide: !0,
							targetAvatarUrl: "",
							scrollContentHeight: 0,
							mainHeight: 0,
							isLoading: !1
						}
					},
					onTabItemTap: function(t) {
						(0, c.authSubscribeMessage)(this.subscriptionNew)
					},
					onShow: function() {
						wx.setNavigationBarTitle({
							title: "官网"
						}), this.playIndex = "";
						var t = this.COMPANYID;
						this.Mc = wx.createMapContext("map"), this.myAmapFun = new o.default.AMapWX({
								key: "e11026819b6d300fda6a2c680fbd2fef"
							}), this.COMPANYID = wx.getStorageSync("COMPANYID") || 1, t == this.COMPANYID && this.COMPANYID || this.inits(),
							this.isLogin = s.default.returnIsLogin() || !1, this.avatarUrl = wx.getStorageSync("avatarUrl") || ""
					},
					mounted: function() {
						var t = m(i.default.mark((function t() {
							var e, n;
							return i.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, a.default.systemIfo();
									case 2:
										e = t.sent, n = getApp().globalData.navHeight, this.mainHeight = e.windowHeight, this.scrollContentHeight =
											e.windowHeight - n;
									case 6:
									case "end":
										return t.stop()
								}
							}), t, this)
						})));

						function e() {
							return t.apply(this, arguments)
						}
						return e
					}(),
					onPullDownRefresh: function() {
						var t = m(i.default.mark((function t() {
							return i.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, this.inits();
									case 2:
										return t.next = 4, this.getInvite();
									case 4:
										wx.stopPullDownRefresh();
									case 5:
									case "end":
										return t.stop()
								}
							}), t, this)
						})));

						function e() {
							return t.apply(this, arguments)
						}
						return e
					}(),
					methods: {
						scrolltoupper: function() {
							var t = m(i.default.mark((function t(e) {
								return i.default.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											return t.next = 2, this.inits();
										case 2:
											return t.next = 4, this.getInvite();
										case 4:
										case "end":
											return t.stop()
									}
								}), t, this)
							})));

							function e(e) {
								return t.apply(this, arguments)
							}
							return e
						}(),
						cancelLoginGuide: function() {
							this.isShowLoginGuide = !1
						},
						loginGuide: function() {
							this.isShowLoginGuide = !0
						},
						talk: function() {
							(0, c.authSubscribeMessage)(this.subscriptionNew), wx.navigateTo({
								url: "../IM/main?userId=" + this.currentCompany.userId + "&logo=" + this.currentCompany.logo +
									"&type=2&cardId=" + this.currentCompany.cardId + "&name=" + this.currentCompany.name + "&wxCode=" + (
										this.currentCompany.personalWx || "") + "&phone=" + this.currentCompany.phone
							})
						},
						loginSuccess: function(t) {
							this.isLogin = !0, this.hasCard = wx.getStorageSync("hasCard") || !1, this.avatarUrl = wx.getStorageSync(
								"avatarUrl") || ""
						},
						loginFailed: function() {
							this.isShowLoginGuide = !0
						},
						cancelLoading: function() {
							var t = this;
							setTimeout((function() {
								t.isLoading = !1
							}), 2e3)
						},
						inits: function() {
							var t = m(i.default.mark((function t() {
								var e = this;
								return i.default.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (this.invites = [], !this.isLoading) {
												t.next = 3;
												break
											}
											return t.abrupt("return");
										case 3:
											return this.isLoading = !0, t.abrupt("return", new Promise((function(t, n) {
												var i = e;
												r.default.POST({
													companyId: i.COMPANYID,
													cardId: wx.getStorageSync("CARDID")
												}, "", "/personal/getWebsiteInfo/V2").then((function(t) {
													t && (t.photos ? t.photos = t.photos.split(",") : t.photos = [], i.company = t, t.recruitModelList &&
														t.recruitModelList.forEach((function(t, e) {
															t.salary = t.minSalary / 1e5 + "k - " + t.maxSalary / 1e5 + "k"
														})), i.invites = t.recruitModelList ? t.recruitModelList : []), wx.hideLoading(), e.cancelLoading()
												})).catch((function(t) {
													console.log(t), e.cancelLoading(), wx.hideLoading()
												})).catch((function() {
													e.cancelLoading(), t()
												}))
											})));
										case 5:
										case "end":
											return t.stop()
									}
								}), t, this)
							})));

							function e() {
								return t.apply(this, arguments)
							}
							return e
						}(),
						getInvite: function() {
							var t = m(i.default.mark((function t() {
								var e = this;
								return i.default.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (!this.isLoading) {
												t.next = 2;
												break
											}
											return t.abrupt("return");
										case 2:
											return t.abrupt("return", new Promise((function(t, n) {
												var i = e;
												wx.showLoading(), r.default.POST({
													companyId: i.COMPANYID
												}, "", "/personal/getCompanyRecruit").then((function(t) {
													t.forEach((function(t, e) {
														t.salary = t.minSalary / 1e5 + "k - " + t.maxSalary / 1e5 + "k"
													})), i.invites = t, wx.hideLoading()
												})).catch((function(t) {
													wx.hideLoading()
												})).catch((function() {
													t()
												}))
											})));
										case 3:
										case "end":
											return t.stop()
									}
								}), t, this)
							})));

							function e() {
								return t.apply(this, arguments)
							}
							return e
						}(),
						showVideo: function(t) {
							this.playIndex = t
						},
						swiperChange: function(t) {},
						page_turn: function(t, e) {
							wx.navigateTo({
								url: "../" + t + "/main?recruitId=" + e
							})
						},
						openAddr: function() {
							wx.openLocation({
								latitude: latitude,
								longitude: longitude,
								scale: 18
							})
						},
						formConfirm: function() {
							if ((0, c.authSubscribeMessage)(this.subscriptionNew), this.form.name)
								if (this.form.tel && a.default.checkPhone(this.form.tel))
									if (this.form.text) {
										var t = this;
										wx.showLoading(), r.default.POST({
											companyId: t.COMPANYID,
											name: t.form.name,
											phone: t.form.tel,
											text: t.form.text,
											cardId: wx.getStorageSync("CARDID")
										}, "", "/personal/addDemand").then((function(e) {
											wx.hideLoading(), e && (t.form = {
												name: "",
												tel: "",
												text: ""
											}, wx.showToast({
												title: "提交成功！",
												icon: "success"
											}))
										})).catch((function(t) {
											wx.hideLoading()
										}))
									} else wx.showToast({
										title: "请填写您的需求！",
										icon: "none"
									});
							else wx.showToast({
								title: "请输入正确的电话！",
								icon: "none"
							});
							else wx.showToast({
								title: "请输入您的姓名！",
								icon: "none"
							})
						},
						makePhone: function() {
							a.default.MakePhone(String(this.company.phone))
						}
					},
					computed: d({}, (0, u.mapState)({
						currentCompany: function(t) {
							return t.currentCompany
						}
					}), {}, (0, u.mapGetters)(["subscriptionNew"])),
					watch: {
						currentCompany: {
							deep: !0,
							immediate: !0,
							handler: function(t) {
								t && (t.userId === wx.getStorageSync("userId") ? this.isShowTalk = !1 : (this.isShowTalk = !0, this.targetAvatarUrl =
									t.logo))
							}
						}
					}
				};
			e.default = y
		},
		"7f25": function(t, e, n) {
			"use strict";
			(function(t) {
				n("6cdc"), n("921b");
				i(n("66fd"));
				var e = i(n("0998"));

				function i(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		b44f: function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("7f10"),
				r = n.n(i);
			for (var o in i) "default" !== o && function(t) {
				n.d(e, t, (function() {
					return i[t]
				}))
			}(o);
			e["default"] = r.a
		},
		bd1c: function(t, e, n) {
			"use strict";
			var i, r = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				o = [];
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return o
			})), n.d(e, "a", (function() {
				return i
			}))
		},
		f93d: function(t, e, n) {
			"use strict";
			var i = n("71a8"),
				r = n.n(i);
			r.a
		}
	},
	[
		["7f25", "common/runtime", "common/vendor"]
	]
]);
