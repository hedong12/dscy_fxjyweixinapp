(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/distribution/main"], {
		"09a6": function(t, n, e) {
			"use strict";
			var o, i = function() {
					var t = this,
						n = t.$createElement;
					t._self._c
				},
				a = [];
			e.d(n, "b", (function() {
				return i
			})), e.d(n, "c", (function() {
				return a
			})), e.d(n, "a", (function() {
				return o
			}))
		},
		2377: function(t, n, e) {},
		"36d7": function(t, n, e) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.default = void 0;
			var o = a(e("a34a")),
				i = a(e("b775"));

			function a(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function r(t, n, e, o, i, a, r) {
				try {
					var u = t[a](r),
						c = u.value
				} catch (s) {
					return void e(s)
				}
				u.done ? n(c) : Promise.resolve(c).then(o, i)
			}

			function u(t) {
				return function() {
					var n = this,
						e = arguments;
					return new Promise((function(o, i) {
						var a = t.apply(n, e);

						function u(t) {
							r(a, o, i, u, c, "next", t)
						}

						function c(t) {
							r(a, o, i, u, c, "throw", t)
						}
						u(void 0)
					}))
				}
			}
			var c = function() {
					e.e("components/DistributionItem").then(function() {
						return resolve(e("5e8e"))
					}.bind(null, e)).catch(e.oe)
				},
				s = {
					name: "distribution",
					components: {
						DistributionItem: c
					},
					data: function() {
						return {
							totalMoney: "0.00",
							total: 0,
							page: 1,
							lists: []
						}
					},
					onShow: function() {
						this.page = 1, this.lists = [], this.total = 0, this.totalMoney = "0.00", this.getRoyaltyList()
					},
					onPullDownRefresh: function() {
						var t = u(o.default.mark((function t() {
							return o.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return this.page = 1, this.lists = [], this.total = 0, this.totalMoney = "0.00", t.next = 6, this
											.getRoyaltyList();
									case 6:
										wx.stopPullDownRefresh();
									case 7:
									case "end":
										return t.stop()
								}
							}), t, this)
						})));

						function n() {
							return t.apply(this, arguments)
						}
						return n
					}(),
					methods: {
						getRoyaltyList: function() {
							var t = this;
							new Promise((function(n, e) {
								wx.showLoading(), i.default.POST({
									type: 1,
									pageNum: t.page
								}, "", "/record/selectRoyaltyRecord").then((function(n) {
									var e = JSON.parse(n.list) || [];
									t.lists = e.map((function(n) {
										return n.royaltyMoney = (n.royaltyMoney / 100).toFixed(2), n.createTime = t.formatDate(
											"yyyy-MM-dd hh:mm:ss", n.createTime), n
									})), t.totalMoney = (n.allMoney / 100).toFixed(2), t.total = n.total
								})).catch((function() {
									wx.hideLoading(), n()
								}))
							}))
						}
					}
				};
			n.default = s
		},
		6873: function(t, n, e) {
			"use strict";
			e.r(n);
			var o = e("36d7"),
				i = e.n(o);
			for (var a in o) "default" !== a && function(t) {
				e.d(n, t, (function() {
					return o[t]
				}))
			}(a);
			n["default"] = i.a
		},
		b33a: function(t, n, e) {
			"use strict";
			var o = e("2377"),
				i = e.n(o);
			i.a
		},
		b988: function(t, n, e) {
			"use strict";
			e.r(n);
			var o = e("09a6"),
				i = e("6873");
			for (var a in i) "default" !== a && function(t) {
				e.d(n, t, (function() {
					return i[t]
				}))
			}(a);
			e("b33a");
			var r, u = e("f0c5"),
				c = Object(u["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
			n["default"] = c.exports
		},
		fb65: function(t, n, e) {
			"use strict";
			(function(t) {
				e("6cdc"), e("921b");
				o(e("66fd"));
				var n = o(e("b988"));

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(n.default)
			}).call(this, e("543d")["createPage"])
		}
	},
	[
		["fb65", "common/runtime", "common/vendor"]
	]
]);
