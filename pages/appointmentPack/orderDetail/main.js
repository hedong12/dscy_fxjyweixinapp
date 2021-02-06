(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/appointmentPack/orderDetail/main"], {
		"0b4e": function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = void 0;
			var o = i(n("a34a")),
				r = i(n("b775"));
			i(n("ed08"));

			function i(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function a(t, e, n, o, r, i, a) {
				try {
					var c = t[i](a),
						u = c.value
				} catch (s) {
					return void n(s)
				}
				c.done ? e(u) : Promise.resolve(u).then(o, r)
			}

			function c(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(o, r) {
						var i = t.apply(e, n);

						function c(t) {
							a(i, o, r, c, u, "next", t)
						}

						function u(t) {
							a(i, o, r, c, u, "throw", t)
						}
						c(void 0)
					}))
				}
			}
			var u = function() {
					n.e("components/addressItem").then(function() {
						return resolve(n("7fda"))
					}.bind(null, n)).catch(n.oe)
				},
				s = function() {
					n.e("components/ProductCard").then(function() {
						return resolve(n("e915"))
					}.bind(null, n)).catch(n.oe)
				},
				d = function() {
					n.e("components/dialogBox").then(function() {
						return resolve(n("be00"))
					}.bind(null, n)).catch(n.oe)
				},
				l = {
					name: "",
					components: {
						AddressItem: u,
						ProductCard: s,
						DialogBox: d
					},
					data: function() {
						return {
							isShowCancelOrderBox: !1,
							dialogType: "",
							tipsTitle: "",
							currentOperationType: {},
							currentOrder: {},
							orderInfo: {},
							count_money: [],
							orderIds: 0,
							orderState: 0,
							textInfo: {
								1: {
									title: "等待商户确认"
								},
								2: {
									title: "服务未使用"
								},
								3: {
									title: "服务已使用"
								},
								4: {
									title: "服务已取消"
								},
								5: {
									title: "服务已过期"
								}
							},
							createTime: ""
						}
					},
					onShow: function() {},
					mounted: function() {
						wx.setNavigationBarTitle({
							title: "订单详情"
						});
						var t = this;
						t.orderIds = this.$root.$mp.query.orderIds || 0, t.inits()
					},
					onPullDownRefresh: function() {
						var t = c(o.default.mark((function t() {
							return o.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, this.inits();
									case 2:
										wx.stopPullDownRefresh();
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
					methods: {
						inits: function() {
							var t = this,
								e = this;
							return wx.showLoading(), r.default.POST({
								appointmentId: e.orderIds
							}, "", "/products/getAppointmentInfo").then((function(e) {
								var n;
								try {
									n = JSON.parse(e.price)
								} catch (o) {
									n = parseInt(e.price) || 0
								}
								"[object number]" === Object.prototype.toString.call(n).toLowerCase() ? e.price = n.toFixed(2) : e.price =
									n.map((function(t) {
										return parseInt(t)
									})).join("~"), e.appointmentTime = "".concat(t.formatDate("yyyy-MM-dd hh:mm", e.startTime), " - ").concat(
										t.formatDate("hh:mm", e.endTime)), e.typeName = "1" == e.serviceType ? "到店" : "上门", e.createTime = t.formatDate(
										"yyyy-MM-dd hh:mm", e.createTime), e.cancellationTime = t.formatDate("yyyy-MM-dd hh:mm", e.cancellationTime),
									e.completionTime = t.formatDate("yyyy-MM-dd hh:mm", e.completionTime), t.orderInfo = e, t.orderState =
									e.state, wx.hideLoading()
							})).catch((function(t) {
								wx.hideLoading(), e.cart_lists = [], console.log(t)
							}))
						},
						showTips: function(t, e) {
							"cancel" === e ? (this.tipsTitle = "请输入取消原因", this.dialogType = "input_1") : (this.tipsTitle = "是否确认使用？",
									this.dialogType = "hint2"), this.currentOperationType = e, this.currentOrder = t, this.isShowCancelOrderBox = !
								0
						},
						dialogTap: function(t, e) {
							"cancel" === t ? this.isShowCancelOrderBox = !1 : this.changeOrder(this.currentOperationType, e)
						},
						changeOrder: function(t) {
							var e = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
								o = "/products/updAppointmentState",
								i = {
									appointmentId: this.currentOrder.appointmentId
								};
							switch (t) {
								case "cancel":
									i.state = 4, i.applyRemark = n;
									break;
								case "use":
									i.state = 3;
									break
							}
							wx.showLoading({
								mask: !0
							}), r.default.POST(i, "", o).then((function(t) {
								e.isShowCancelOrderBox = !1, wx.hideLoading(), wx.showToast({
									title: "操作成功！",
									icon: "success",
									duration: 1e3
								}), setTimeout((function() {
									wx.navigateBack()
								}), 1e3)
							})).catch((function(t) {
								wx.hideLoading(), console.log(t), wx.showToast({
									title: t.message,
									duration: 2e3,
									icon: "none"
								})
							}))
						},
						toAppointMentPage: function() {
							console.log("nihaoshijie4"), wx.setStorageSync("COMPANYID", this.orderInfo.companyId), wx.setStorageSync(
								"CARDID", this.orderInfo.companyUserId), wx.switchTab({
								url: "/pages/appointment/main"
							})
						}
					}
				};
			e.default = l
		},
		"1c82": function(t, e, n) {
			"use strict";
			var o, r = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				i = [];
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "a", (function() {
				return o
			}))
		},
		"8a19": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("1c82"),
				r = n("ec34");
			for (var i in r) "default" !== i && function(t) {
				n.d(e, t, (function() {
					return r[t]
				}))
			}(i);
			n("fb76");
			var a, c = n("f0c5"),
				u = Object(c["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
			e["default"] = u.exports
		},
		ec34: function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("0b4e"),
				r = n.n(o);
			for (var i in o) "default" !== i && function(t) {
				n.d(e, t, (function() {
					return o[t]
				}))
			}(i);
			e["default"] = r.a
		},
		f38c: function(t, e, n) {
			"use strict";
			(function(t) {
				n("6cdc"), n("921b");
				o(n("66fd"));
				var e = o(n("8a19"));

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		fb76: function(t, e, n) {
			"use strict";
			var o = n("fd2d"),
				r = n.n(o);
			r.a
		},
		fd2d: function(t, e, n) {}
	},
	[
		["f38c", "common/runtime", "common/vendor"]
	]
]);
