(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/video/main"], {
		2308: function(e, t, n) {
			"use strict";
			var o = n("f8bc"),
				r = n.n(o);
			r.a
		},
		4726: function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("bcfa"),
				r = n("afde");
			for (var a in r) "default" !== a && function(e) {
				n.d(t, e, (function() {
					return r[e]
				}))
			}(a);
			n("2308");
			var i, s = n("f0c5"),
				c = Object(s["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
			t["default"] = c.exports
		},
		"50d3": function(e, t, n) {
			"use strict";
			(function(e) {
				n("6cdc"), n("921b");
				o(n("66fd"));
				var t = o(n("4726"));

				function o(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				e(t.default)
			}).call(this, n("543d")["createPage"])
		},
		afde: function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("cdb8"),
				r = n.n(o);
			for (var a in o) "default" !== a && function(e) {
				n.d(t, e, (function() {
					return o[e]
				}))
			}(a);
			t["default"] = r.a
		},
		bcfa: function(e, t, n) {
			"use strict";
			var o, r = function() {
					var e = this,
						t = e.$createElement;
					e._self._c;
					e._isMounted || (e.e0 = function(t) {
						e.showShareOrSave = !0
					}, e.e1 = function(t) {
						e.showShareOrSave = !1
					}, e.e2 = function(t) {
						e.ShowDisplayPoster = !1
					})
				},
				a = [];
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		cdb8: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o = l(n("a34a")),
				r = n("01ea"),
				a = l(n("b775")),
				i = l(n("73bb")),
				s = n("ee73"),
				c = (n("cf45"), l(n("0f88"))),
				u = n("2f62"),
				d = n("ed08");

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function f(e, t) {
				return g(e) || p(e, t) || h()
			}

			function h() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}

			function p(e, t) {
				if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
					var n = [],
						o = !0,
						r = !1,
						a = void 0;
					try {
						for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done); o = !0)
							if (n.push(i.value), t && n.length === t) break
					} catch (c) {
						r = !0, a = c
					} finally {
						try {
							o || null == s["return"] || s["return"]()
						} finally {
							if (r) throw a
						}
					}
					return n
				}
			}

			function g(e) {
				if (Array.isArray(e)) return e
			}

			function m(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function v(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? m(n, !0).forEach((function(t) {
							w(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(n)
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}

			function w(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function y(e, t, n, o, r, a, i) {
				try {
					var s = e[a](i),
						c = s.value
				} catch (u) {
					return void n(u)
				}
				s.done ? t(c) : Promise.resolve(c).then(o, r)
			}

			function b(e) {
				return function() {
					var t = this,
						n = arguments;
					return new Promise((function(o, r) {
						var a = e.apply(t, n);

						function i(e) {
							y(a, o, r, i, s, "next", e)
						}

						function s(e) {
							y(a, o, r, i, s, "throw", e)
						}
						i(void 0)
					}))
				}
			}
			var x = function() {
					n.e("components/shareOrSave").then(function() {
						return resolve(n("5998"))
					}.bind(null, n)).catch(n.oe)
				},
				S = function() {
					Promise.all([n.e("common/vendor"), n.e("components/getPhone")]).then(function() {
						return resolve(n("7a78"))
					}.bind(null, n)).catch(n.oe)
				},
				I = {
					components: {
						ShareOrSave: x,
						getUserPhone: S
					},
					data: function() {
						return {
							ShowDisplayPoster: !1,
							displayPosterImg: "",
							ShowShare: !0,
							showShareOrSave: !1,
							percent: 0,
							IconUrl: r.IconUrl,
							pageNum: 1,
							pageSize: 10,
							list: [],
							videoList: [],
							companyNotice: "",
							user: {
								cardId: 0,
								name: "",
								logo: "",
								videoType: "",
								url: "",
								phone: "",
								goodsId: "",
								goodsName: "",
								personalWx: "",
								companyName: ""
							}
						}
					},
					onShow: function() {
					
						var e = b(o.default.mark((function e() {
							return o.default.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (wx.getStorageSync("phone")) {
											e.next = 3;
											break
										}
										return wx.switchTab({
											url: "/pages/index/main"
										}), e.abrupt("return");
									case 3:
										if (c.default.returnIsLogin()) {
											e.next = 6;
											break
										}
										return wx.switchTab({
											url: "/pages/index/main"
										}), e.abrupt("return");
									case 6:
										return this.pageNum = 1, this.user = {
											cardId: 0,
											name: "",
											logo: "",
											videoType: "",
											url: "",
											phone: "",
											goodsId: "",
											goodsName: "",
											personalWx: "",
											companyName: ""
										}, e.next = 10, this.getData();
									case 10:
									case "end":
										return e.stop()
								}
							}), e, this)
						})));

						function t() {
							return e.apply(this, arguments)
						}
						return t
						
					}(),
					onHide: function() {
						this.resetData()
					},
					onUnload: function() {
						this.resetData()
					},
					onShareAppMessage: function(e) {
						if ("button" === e.from) {
							(0, s.addShareRecord)(wx.getStorageSync("COMPANYID"), 5, this.user.videoId, wx.getStorageSync("CARDID") + "" +
								(new Date).getTime()).then((function(e) {}), (function(e) {}));
							var t = "/pages/video/main?cardId=".concat(wx.getStorageSync("CARDID"), "&companyId=").concat(wx.getStorageSync(
								"COMPANYID"), "&goType=1");
							return console.log(t), {
								title: this.user.companyName + "-" + this.user.videoTitle,
								imageUrl: this.user.videoCover,
								path: t
							}
						}
					},
					computed: v({}, (0, u.mapGetters)(["currentCompany"])),
					methods: {
						record: function() {
							a.default.POST({
								companyId: wx.getStorageSync("COMPANYID"),
								shareType: 5,
								itmeId: this.user.videoId,
								cardId: wx.getStorageSync("CARDID"),
								userId: wx.getStorageSync("userId")
							}, "", "/shareRecord/addRecordVideo")
						},
						goToLive: function() {
							wx.navigateTo({
								url: "/pages/liveList/main",
								fail: function(e) {
									console.log(e)
								}
							})
						},
						showQC: function() {
							wx.navigateTo({
								url: "../IM/main?userId=" + this.currentCompany.userId + "&logo=" + this.currentCompany.logo +
									"&type=2&cardId=" + this.currentCompany.cardId + "&name=" + this.currentCompany.name + "&wxCode=" + (
										this.currentCompany.personalWx || "") + "&phone=" + this.currentCompany.phone + "&showQC=1"
							})
						},
						changeVideo: function(e) {
							var t = this;
							this.videoList.map((function(n) {
								n.obj.videoId == e.detail.activeId && (t.user = n.obj)
							})), this.record(), this.percent = 0
						},
						timeupdate: function(e) {
							this.percent = parseInt(e.detail.currentTime / e.detail.duration * 100)
						},
						download: function() {
							wx.showLoading({
								title: "Loading..."
							}), wx.getImageInfo({
								src: this.displayPosterImg,
								success: function(e) {
									wx.saveImageToPhotosAlbum({
										filePath: e.path,
										complete: function() {
											wx.hideLoading()
										}
									})
								}
							})
						},
						GeneratePoster: function() {
							var e = b(o.default.mark((function e() {
								var t, n, r, i, s, c, u, l, h, p, g, m, v, w;
								return o.default.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return wx.showLoading({
													title: "Loading..."
												}), t = [], t.push((0, d.getTemImgUrl)(this.user.logo)), t.push((0, d.getTemImgUrl)(this.user.videoCover)),
												e.next = 6, a.default.POST({
													videoId: this.user.videoId,
													cardId: wx.getStorageSync("CARDID"),
													companyId: wx.getStorageSync("COMPANYID"),
													crmJoinCompany: "pages/video/main"
												}, "", "/businessCardVideo/addVideoShare");
										case 6:
											return n = e.sent, t.push((0, d.getTemImgUrl)(n)), e.next = 10, (0, d.waitAllPromise)(t);
										case 10:
											r = e.sent, i = f(r, 3), s = i[0], c = i[1], u = i[2], l = wx.createCanvasContext("myCanvas"), h =
												this, l.setFillStyle("#fff"), l.fillRect(0, 0, 533, 932), l.drawImage(c, 14, 105, 503, 634), l.drawImage(
													s, 14, 17, 77, 77), l.drawImage(u, 366, 762, 151, 151), p = this.user.companyName, l.setFillStyle(
													"#000"), l.setFontSize(23), l.setTextBaseline("top"), l.fillText(p, 103, 24), l.setFontSize(21),
												l.fillText("分享给您一个有趣的视频", 103, 60), l.setFontSize(29), g = this.user.videoTitle.split(""), m =
												"", v = "", w = 790;
											while (v = g.shift()) l.measureText(m + v).width > 343 && (console.log(m, 14, w), l.fillText(m,
												14, w), m = "", w += 45), m += v;
											m && l.fillText(m, 14, w), l.setFontSize(21), l.fillText("长按扫码查看视频", 14, 898), l.draw(!0,
												setTimeout((function() {
													wx.canvasToTempFilePath({
														x: 0,
														y: 0,
														width: 533,
														height: 932,
														destWidth: 533,
														destHeight: 932,
														canvasId: "myCanvas",
														success: function(e) {
															wx.hideLoading(), h.displayPosterImg = e.tempFilePath, h.ShowDisplayPoster = !0, h.showShareOrSave = !
																1
														}
													})
												}), 300));
										case 39:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t() {
								return e.apply(this, arguments)
							}
							return t
						}(),
						goToViodeList: function() {
							wx.navigateTo({
								url: "/pages/videoList/main?cardId=" + this.user.cardId
							})
						},
						getData: function() {
							var e = b(o.default.mark((function e() {
								var t, n = this;
								return o.default.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, a.default.POST({
												companyId: wx.getStorageSync("COMPANYID"),
												videoType: "",
												videoState: 0,
												pageNum: this.pageNum,
												pageSize: this.pageSize
											}, "", "/businessCardVideo/moveAllList");
										case 2:
											if (t = e.sent, this.pageNum += 1, "undefined" !== typeof t.list) {
												e.next = 11;
												break
											}
											if (console.log(this.pageNum, "zhegerenhenlan"), 2 !== this.pageNum) {
												e.next = 9;
												break
											}
											return i.default.alert({
												title: "提示",
												message: "暂无视频内容"
											}).then((function() {
												wx.switchTab({
													url: "/pages/index/main"
												})
											})), e.abrupt("return");
										case 9:
											return wx.showToast({
												title: "没有更多了",
												icon: "none",
												duration: 1500
											}), e.abrupt("return");
										case 11:
											this.companyNotice = t.list[0].companyNotice ? t.list[0].companyNotice : "暂无公告", t.list.map((
												function(e) {
													n.videoList.push({
														id: e.videoId,
														url: e.videoUrl,
														objectFit: "contain",
														obj: e
													})
												})), 2 === this.pageNum && (this.user = this.videoList[1].obj, this.record());
										case 14:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t() {
								return e.apply(this, arguments)
							}
							return t
						}(),
						resetData: function() {
							console.log("重置页面数据"), this.videoList = [], this.pageNum = 1
						},
						callPhone: function() {
							wx.makePhoneCall({
								phoneNumber: this.user.phone
							})
						},
						getWxCardId: function() {
							var e = this.user.personalWx;
							e ? wx.showModal({
								content: "微信号: ".concat(e),
								confirmText: "复制",
								showCancel: !1,
								success: function() {
									wx.setClipboardData({
										data: e
									})
								}
							}) : wx.showToast({
								title: "暂无微信号",
								icon: "none"
							})
						},
						goToProduct: function() {
							wx.navigateTo({
								url: "/pages/prodDetail/main?goodId=" + this.user.goodsId
							})
						}
					}
				};
			t.default = I
		},
		f8bc: function(e, t, n) {}
	},
	[
		["50d3", "common/runtime", "common/vendor"]
	]
]);
