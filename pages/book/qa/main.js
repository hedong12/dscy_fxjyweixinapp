(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/book/qa/main"], {
		"1ef1": function(t, e, n) {
			"use strict";
			n.r(e);
			var r = n("4c84"),
				a = n.n(r);
			for (var i in r) "default" !== i && function(t) {
				n.d(e, t, (function() {
					return r[t]
				}))
			}(i);
			e["default"] = a.a
		},
		"38f5": function(t, e, n) {},
		"4c84": function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = void 0;
			var r = i(n("a34a")),
				a = n("7c15");

			function i(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function c(t, e, n, r, a, i, c) {
				try {
					var u = t[i](c),
						o = u.value
				} catch (s) {
					return void n(s)
				}
				u.done ? e(o) : Promise.resolve(o).then(r, a)
			}

			function u(t) {
				return function() {
					var e = this,
						n = arguments;
					return new Promise((function(r, a) {
						var i = t.apply(e, n);

						function u(t) {
							c(i, r, a, u, o, "next", t)
						}

						function o(t) {
							c(i, r, a, u, o, "throw", t)
						}
						u(void 0)
					}))
				}
			}
			var o = {
				data: function() {
					return {
						show: !1,
						id: null,
						data: {},
						key: 0,
						ccnum : 4,
						recordId: "",
						keys: ["A", "B", "C"],
						cardTitle: ["1", "2", " 3"],
						correct: !1
					}
				},
				onLoad: function() {
					var t = u(r.default.mark((function t(e) {
						return r.default.wrap((function(t) {
							while (1) switch (t.prev = t.next) {
								case 0:
									this.id = e.id, this.recordId = e.recordId, this.getData(), wx.setNavigationBarTitle({
										title: "绘本详情"
										// title: JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName + "绘本馆"
									});
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
				methods: {
					ok: function(t) {
						console.log(t.sort);
						this.ccnum = t.sort;
						var e = t.isTrue;
						this.show = !0, this.correct = 1 == e
					},
					nextQA: function() {
						var t = this.key + 1;
						this.show = !1, this.data.topiclist[t] ? this.key = t : wx.navigateBack()
					},
					getData: function() {
						var t = u(r.default.mark((function t() {
							var e;
							return r.default.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return wx.showLoading({
											title: "Loading...",
											mask: !0
										}), t.next = 3, (0, a.selectPictureById)({
											pictureBooksId: this.id,
											recordId: this.recordId
										});
									case 3:
										e = t.sent, this.data = e.list[0], wx.hideLoading();
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
					}()
				}
			};
			e.default = o
		},
		b5d3: function(t, e, n) {
			"use strict";
			var r, a = function() {
					var t = this,
						e = t.$createElement;
					t._self._c;
					t._isMounted || (t.e0 = function(e) {
						t.show = !1
					})
				},
				i = [];
			n.d(e, "b", (function() {
				return a
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "a", (function() {
				return r
			}))
		},
		c7ca: function(t, e, n) {
			"use strict";
			(function(t) {
				n("6cdc"), n("921b");
				r(n("66fd"));
				var e = r(n("ebf1"));

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		dfee: function(t, e, n) {
			"use strict";
			var r = n("38f5"),
				a = n.n(r);
			a.a
		},
		ebf1: function(t, e, n) {
			"use strict";
			n.r(e);
			var r = n("b5d3"),
				a = n("1ef1");
			for (var i in a) "default" !== i && function(t) {
				n.d(e, t, (function() {
					return a[t]
				}))
			}(i);
			n("dfee");
			var c, u = n("f0c5"),
				o = Object(u["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], c);
			e["default"] = o.exports
		}
	},
	[
		["c7ca", "common/runtime", "common/vendor"]
	]
]);
