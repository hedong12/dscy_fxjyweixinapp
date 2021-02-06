(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/book/info/main"], {
		"138b": function(t, e, n) {
			"use strict";
			(function(t) {
				n("6cdc"), n("921b");
				i(n("66fd"));
				var e = i(n("b632"));

				function i(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		"7d8f": function(t, e, n) {
			"use strict";
			var i, a = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				o = [];
			n.d(e, "b", (function() {
				return a
			})), n.d(e, "c", (function() {
				return o
			})), n.d(e, "a", (function() {
				return i
			}))
		},
		8484: function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("9bfd"),
				a = n.n(i);
			for (var o in i) "default" !== o && function(t) {
				n.d(e, t, (function() {
					return i[t]
				}))
			}(o);
			e["default"] = a.a
		},
		"9bfd": function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = void 0;
			var i = s(n("a34a")),
				a = s(n("af3a")),
				o = s(n("0f88")),
				r = n("7c15"),
				c = n("ee73");

			function s(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function u(t, e, n, i, a, o, r) {
				try {
					var c = t[o](r),
						s = c.value
				} catch (u) {
					return void n(u)
				}
				c.done ? e(s) : Promise.resolve(s).then(i, a)
			}

			function d(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(i, a) {
						var o = t.apply(e, n);

						function r(t) {
							u(o, i, a, r, c, "next", t)
						}

						function c(t) {
							u(o, i, a, r, c, "throw", t)
						}
						r(void 0)
					}))
				}
			}
			var f = {
				data: function() {
					return {
						id: "",
						data: {},
						current: 0,
						audioContext: null,
						isPlay: !1,
						imings: [],
						myVar: null,
						recordId: 0,
						overlayShow: !1,
						message: "",
						bounding: {
							x: 0,
							width: 0
						}
					}
				},
				onUnload: function() {
					this.audioContext.destroy()
				},
				onShareAppMessage: function() {
					return (0, c.addShareRecord)(wx.getStorageSync("COMPANYID"), 6, this.id, wx.getStorageSync("CARDID") + "" + (
						new Date).getTime()).then((function(t) {}), (function(t) {})), {
						title: "绘本详情",
						// title: this.data.pictureBooksTitle + "----" + JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName +
						// 	"绘本馆",
						path: "pages/index/main?bookid=".concat(this.id, "&cardId=").concat(wx.getStorageSync("CARDID"), "&tel=").concat(
								wx.getStorageSync("phone"), "&companyId=").concat(wx.getStorageSync("COMPANYID"), "&goType=1&seeuserid=")
							.concat(wx.getStorageSync("userId"))
					}
				},
				onShareTimeline: function() {
					return (0, c.addShareRecord)(wx.getStorageSync("COMPANYID"), 6, this.id, wx.getStorageSync("CARDID") + "" + (
						new Date).getTime()).then((function(t) {}), (function(t) {})), {
						imageUrl: JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyLogo,
						title: "绘本详情"
						// title: this.data.pictureBooksTitle + "----" + JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName +
						// 	"绘本馆"
					}
				},
				onLoad: function() {
					var t = d(i.default.mark((function t(e) {
						var n, r;
						return i.default.wrap((function(t) {
							while (1) switch (t.prev = t.next) {
								case 0:
									1 === wx.getStorageSync("book-share") ? wx.removeStorageSync("book-share") : wx.switchTab({
											url: "/pages/index/main?bookid=".concat(e.bookid, "&cardId=").concat(e.cardId, "&tel=").concat(
												e.tel, "&companyId=").concat(e.companyId, "&goType=1&seeuserid=").concat(e.seeuserid)
										}), this.message = JSON.stringify(e), 1154 == wx.getLaunchOptionsSync().scene && ((0, a.default)
											({
												message: "请前往小程序使用完整服务",
												type: "text",
												duration: 0,
												forbidClick: !0
											}), this.message = this.message + "--- 来自朋友圈打开" + JSON.stringify(wx.getLaunchOptionsSync())), n =
										o.default.returnIsLogin(), console.log(n, "========> onLoad"), this.id = e.bookid, this.recordId =
										e.recordId || "", this.getData(), wx.setNavigationBarTitle({
											title: "绘本详情"
											// title: JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName + "绘本馆"
										}), r = wx.getMenuButtonBoundingClientRect(), this.bounding.x = r.left, this.bounding.width = r.width /
										2 / 2 / 2;
								case 12:
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
				methods: {
					suspend: function() {
						this.isPlay = !1, this.audioContext.pause(), this.clearMyVar()
					},
					goToQA: function() {
						wx.navigateTo({
							url: "../qa/main?id=".concat(this.id, "&recordId=").concat(this.recordId)
						})
					},
					forward: function() {
						var t = this.current + 1;
						if (!(t > this.imings)) {
							t = t > 0 ? t : 0;
							var e = parseInt(this.imings[t]);
							this.current = t, this.audioContext.seek(e)
						}
					},
					back: function() {
						var t = this.current - 1;
						t = t > 0 ? t : 0;
						var e = parseInt(this.imings[t]);
						this.current = t, this.audioContext.seek(e)
					},
					clearMyVar: function() {
						clearInterval(this.myVar)
					},
					play: function() {
						var t = this;
						this.isPlay = !0, this.audioContext.play(), console.log(this.audioContext.duration), this.myVar =
							setInterval((function() {
								t.audioContext.currentTime;
								t.imings.map((function(e, n) {
									e == parseInt(t.audioContext.currentTime) && (t.current = n)
								}))
							}), 100)
					},
					getData: function() {
						var t = d(i.default.mark((function t() {
							var e, n = this;
							return i.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, (0, r.selectPictureById)({
											pictureBooksId: this.id,
											recordId: this.recordId
										});
									case 2:
										e = t.sent, this.data = e.list[0], this.data.list.map((function(t) {
											n.imings.push(t.iming)
										})), this.audio(this.data.prictureSound);
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
					audio: function(t) {
						var e = this;
						this.audioContext = wx.createInnerAudioContext(), this.audioContext.onEnded((function() {
							console.log("自然播放结束"), e.overlayShow = !0, e.isPlay = !1, e.clearMyVar()
						})), this.audioContext.src = t, this.audioContext.onStop(this.clearMyVar), this.audioContext.offPause(this.clearMyVar)
					}
				}
			};
			e.default = f
		},
		a424: function(t, e, n) {
			"use strict";
			var i = n("de56"),
				a = n.n(i);
			a.a
		},
		b632: function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("7d8f"),
				a = n("8484");
			for (var o in a) "default" !== o && function(t) {
				n.d(e, t, (function() {
					return a[t]
				}))
			}(o);
			n("a424");
			var r, c = n("f0c5"),
				s = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
			e["default"] = s.exports
		},
		de56: function(t, e, n) {}
	},
	[
		["138b", "common/runtime", "common/vendor"]
	]
]);
