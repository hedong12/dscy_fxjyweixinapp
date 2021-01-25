(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/goods/list"], {
		"1d0a": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("8bf1"),
				r = n("2eca");
			for (var a in r) "default" !== a && function(t) {
				n.d(e, t, (function() {
					return r[t]
				}))
			}(a);
			n("997e");
			var i, u = n("f0c5"),
				c = Object(u["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
			e["default"] = c.exports
		},
		"2eca": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("6305"),
				r = n.n(o);
			for (var a in o) "default" !== a && function(t) {
				n.d(e, t, (function() {
					return o[t]
				}))
			}(a);
			e["default"] = r.a
		},
		6305: function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = void 0;
			var o = a(n("a34a")),
				r = a(n("b775"));

			function a(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function i(t) {
				return s(t) || c(t) || u()
			}

			function u() {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}

			function c(t) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(
					t)
			}

			function s(t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
					return n
				}
			}

			function d(t, e, n, o, r, a, i) {
				try {
					var u = t[a](i),
						c = u.value
				} catch (s) {
					return void n(s)
				}
				u.done ? e(c) : Promise.resolve(c).then(o, r)
			}

			function f(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(o, r) {
						var a = t.apply(e, n);

						function i(t) {
							d(a, o, r, i, u, "next", t)
						}

						function u(t) {
							d(a, o, r, i, u, "throw", t)
						}
						i(void 0)
					}))
				}
			}
			var l = {
				data: function() {
					return {
						menu: [],
						menuId: "",
						searchText: "",
						list: [],
						pageNum: 1,
						option1: [{
							text: "销量",
							value: ""
						}, {
							text: "销量降序",
							value: 3
						}, {
							text: "销量升序",
							value: 4
						}],
						option2: [{
							text: "价格",
							value: ""
						}, {
							text: "价格降序",
							value: 1
						}, {
							text: "价格升序",
							value: 2
						}],
						value1: "",
						value2: ""
					}
				},
				onLoad: function(t) {
					this.menuId = t.typeId || "", this.getGoodsType(), this.getList()
				},
				onShow: function() {},
				methods: {
					onSearch: function(t) {
						this.searchText = t.detail, this.pageNum = 1, this.getList()
					},
					clearSearch: function() {
						console.log("去凶獒"), this.pageNum = 1, this.searchText = "", this.getList()
					},
					getDecimal: function(t) {
						var e = t;
						return e /= 100, e += "", new Number(e).toFixed(2)
					},
					getGoodsType: function() {
						var t = f(o.default.mark((function t() {
							var e;
							return o.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, r.default.POST({
											companyId: wx.getStorageSync("COMPANYID")
										}, "", "/goods/getGoodsType");
									case 2:
										e = t.sent, this.menu = [{
											name: "全部",
											goodstypeId: ""
										}].concat(i(e));
									case 4:
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
					getList: function() {
						var t = f(o.default.mark((function t() {
							var e;
							return o.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return wx.showLoading({
											title: "Loading...",
											mask: !0
										}), t.next = 3, r.default.POST({
											goodstypeId: this.menuId,
											goodsName: this.searchText,
											pageNum: this.pageNum,
											companyId: wx.getStorageSync("COMPANYID"),
											cardId: wx.getStorageSync("CARDID")
										}, "", "/goods/getGoodsList/V2");
									case 3:
										e = t.sent, wx.hideLoading(), this.pageNum += 1, this.list = e;
									case 7:
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
					menu_tap: function(t) {
						this.pageNum = 1, this.menuId = t, this.getList()
					},
					toProdDetail: function(t) {
						wx.setStorageSync("prod", t), wx.navigateTo({
							url: "../prodDetail/main?goodId=" + t.goodsId
						})
					}
				}
			};
			e.default = l
		},
		"8ae2": function(t, e, n) {},
		"8bf1": function(t, e, n) {
			"use strict";
			var o, r = function() {
					var t = this,
						e = t.$createElement,
						n = (t._self._c, t.__map(t.list, (function(e, n) {
							var o = e.goodPhoto.split(","),
								r = t.getDecimal(e.new_price),
								a = t.getDecimal(e.price);
							return {
								$orig: t.__get_orig(e),
								g0: o,
								m0: r,
								m1: a
							}
						})));
					t.$mp.data = Object.assign({}, {
						$root: {
							l0: n
						}
					})
				},
				a = [];
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return a
			})), n.d(e, "a", (function() {
				return o
			}))
		},
		"8e35": function(t, e, n) {
			"use strict";
			(function(t) {
				n("6cdc"), n("921b");
				o(n("66fd"));
				var e = o(n("1d0a"));

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		"997e": function(t, e, n) {
			"use strict";
			var o = n("8ae2"),
				r = n.n(o);
			r.a
		}
	},
	[
		["8e35", "common/runtime", "common/vendor"]
	]
]);
