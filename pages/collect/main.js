(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/collect/main"], {
		"09d1": function(t, n, i) {
			"use strict";
			(function(t) {
				i("6cdc"), i("921b");
				o(i("66fd"));
				var n = o(i("b8d0"));

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(n.default)
			}).call(this, i("543d")["createPage"])
		},
		"27e1": function(t, n, i) {
			"use strict";
			var o, e = function() {
					var t = this,
						n = t.$createElement;
					t._self._c
				},
				a = [];
			i.d(n, "b", (function() {
				return e
			})), i.d(n, "c", (function() {
				return a
			})), i.d(n, "a", (function() {
				return o
			}))
		},
		"38bd": function(t, n, i) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.default = void 0;
			var o = a(i("a34a")),
				e = a(i("b775"));

			function a(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function r(t) {
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
					for (var n = 0, i = new Array(t.length); n < t.length; n++) i[n] = t[n];
					return i
				}
			}

			function d(t, n, i, o, e, a, r) {
				try {
					var u = t[a](r),
						c = u.value
				} catch (s) {
					return void i(s)
				}
				u.done ? n(c) : Promise.resolve(c).then(o, e)
			}

			function f(t) {
				return function() {
					var n = this,
						i = arguments;
					return new Promise((function(o, e) {
						var a = t.apply(n, i);

						function r(t) {
							d(a, o, e, r, u, "next", t)
						}

						function u(t) {
							d(a, o, e, r, u, "throw", t)
						}
						r(void 0)
					}))
				}
			}
			var l = {
				name: "",
				components: {},
				data: function() {
					return {
						menu_id: 1,
						prods: [],
						page: 1,
						isLoading: !1,
						nodata: !1
					}
				},
				onPullDownRefresh: function() {
					var t = f(o.default.mark((function t() {
						return o.default.wrap((function(t) {
							while (1) switch (t.prev = t.next) {
								case 0:
									wx.showNavigationBarLoading(), this.prods = [], this.page = 1, this.inits(), wx.stopPullDownRefresh(),
										setTimeout((function() {
											wx.hideNavigationBarLoading()
										}), 300);
								case 6:
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
				mounted: function() {
					wx.setNavigationBarTitle({
						title: "收藏"
					}), this.prods = [], this.page = 1, this.inits()
				},
				methods: {
					inits: function() {
						var t = this;
						t.isLoading || (t.isLoading = !0, wx.showLoading(), e.default.POST({
							itemType: t.menu_id,
							pageNum: t.page
						}, "", "/personal/getCollection").then((function(n) {
							n ? (n.forEach((function(t, n) {
								t.photos && (t.photos = t.photos.split(",")[0])
							})), t.prods = [].concat(r(t.prods), r(n)), t.page++, setTimeout((function() {
								t.isLoading = !1
							}), 500)) : setTimeout((function() {
								t.nodata = !0, t.isLoading = !1
							}), 500), wx.hideLoading()
						})).catch((function(n) {
							wx.hideLoading(), console.log(n), 204 == n.code && (t.nodata = !0), setTimeout((function() {
								t.isLoading = !1
							}), 500)
						})))
					},
					menu_tap: function(t) {
						this.menu_id = t, this.page = 1, this.nodata = !1, this.isLoading = !1, this.prods = [], this.inits()
					},
					del_tap: function(t, n) {
						var i = this;
						wx.showLoading();
						var o = "",
							a = {};
						o = "/personal/delCollection", a = {
							itemType: this.menu_id,
							itemId: t
						}, e.default.POST(a, "", o).then((function(t) {
							wx.hideLoading(), t && (wx.showToast({
								title: "删除成功！",
								duration: 2e3,
								icon: "none"
							}), i.prods.splice(n, 1))
						})).catch((function(t) {
							wx.hideLoading()
						}))
					},
					toDetail: function(t) {
						var n = "../dynamicDetail/main?dynamicId=" + t;
						wx.navigateTo({
							url: n
						})
					},
					toProdDetail: function(t) {
						wx.navigateTo({
							url: "../prodDetail/main?goodId=" + t
						})
					}
				},
				onReachBottom: function() {
					var t = this;
					t.inits()
				}
			};
			n.default = l
		},
		b8d0: function(t, n, i) {
			"use strict";
			i.r(n);
			var o = i("27e1"),
				e = i("f631");
			for (var a in e) "default" !== a && function(t) {
				i.d(n, t, (function() {
					return e[t]
				}))
			}(a);
			var r, u = i("f0c5"),
				c = Object(u["a"])(e["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
			n["default"] = c.exports
		},
		f631: function(t, n, i) {
			"use strict";
			i.r(n);
			var o = i("38bd"),
				e = i.n(o);
			for (var a in o) "default" !== a && function(t) {
				i.d(n, t, (function() {
					return o[t]
				}))
			}(a);
			n["default"] = e.a
		}
	},
	[
		["09d1", "common/runtime", "common/vendor"]
	]
]);
