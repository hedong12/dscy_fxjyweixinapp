(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/addressEdit/main"], {
		"1f1d": function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), e.default = void 0;
			var o = a(n("fa99")),
				i = a(n("b775"));

			function a(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			var d = function() {
					n.e("components/bottom_button_small").then(function() {
						return resolve(n("881f"))
					}.bind(null, n)).catch(n.oe)
				},
				s = function() {
					n.e("components/bottom_button_two").then(function() {
						return resolve(n("df21"))
					}.bind(null, n)).catch(n.oe)
				},
				c = {
					name: "",
					components: {
						BottomButtonSmall: d,
						BottomButtonTwo: s
					},
					data: function() {
						return {
							name: "",
							tel: "",
							full_address: "",
							district: "",
							bottom: {
								left: {
									text: "删除",
									url: "del"
								},
								right: {
									text: "保存",
									url: "save"
								}
							},
							locat: {
								province: "",
								city: "成都",
								district: "",
								addr: "",
								lat: "",
								lng: ""
							},
							myAmapFun: "",
							Mc: "",
							type: "add",
							editId: 0
						}
					},
					onShow: function() {
						var t = wx.getStorageSync("company_address") || "",
							e = wx.getStorageSync("clear") || !1,
							n = wx.getStorageSync("editAddr") || "",
							o = "";
						t ? this.full_address = t.street + t.build : n.addressId ? (this.editId = n.addressId, this.name = n.receiveName ||
							"", this.tel = n.receivePhone || "", this.full_address = n.locationAddress || "", this.district = n.detailedAddress ||
							"") : e && (this.editId = "", this.name = "", this.tel = "", this.district = "", wx.removeStorageSync(
							"clear")), o = n ? "编辑地址" : "新增地址", wx.setNavigationBarTitle({
							title: o
						})
					},
					mounted: function() {
						this.Mc = wx.createMapContext("map"), this.myAmapFun = new o.default.AMapWX({
							key: "e11026819b6d300fda6a2c680fbd2fef"
						}), console.log(this.editId), this.editId || this.getlocation()
					},
					methods: {
						btn_tap: function(t) {
							"save" == t && this.addAddr()
						},
						page_turn: function(t) {
							var e = this;
							"save" == t ? e.editAddr() : "del" == t && e.delAddr()
						},
						addAddr: function() {
							var t = this;
							t.name ? t.tel ? t.full_address ? (wx.showLoading(), i.default.POST({
								locationAddress: t.full_address || "",
								detailedAddress: t.district || "",
								receiveName: t.name,
								receivePhone: t.tel
							}, "", "/personal/addAddress").then((function(t) {
								wx.hideLoading(), t ? (wx.showToast({
									title: "添加成功",
									icon: "none",
									duration: 2e3
								}), setTimeout((function() {
									wx.navigateBack()
								}), 500)) : wx.showToast({
									title: "添加失败，请重试",
									icon: "none",
									duration: 2e3
								})
							})).catch((function(t) {
								wx.hideLoading(), wx.showToast({
									title: t.message,
									duration: 2e3,
									icon: "none"
								})
							}))) : wx.showToast({
								title: "请填写收货人地址",
								icon: "none",
								duration: 2e3
							}) : wx.showToast({
								title: "请填写收货人电话",
								icon: "none",
								duration: 2e3
							}) : wx.showToast({
								title: "请填写收货人姓名",
								icon: "none",
								duration: 2e3
							})
						},
						editAddr: function() {
							var t = this;
							t.name ? t.tel ? t.full_address ? (wx.showLoading(), i.default.POST({
								addressId: t.editId,
								locationAddress: t.full_address || "",
								detailedAddress: t.district || "",
								receiveName: t.name || "",
								receivePhone: t.tel || ""
							}, "", "/personal/updAddress").then((function(t) {
								wx.hideLoading(), "修改成功" == t ? (wx.showToast({
									title: "修改成功",
									icon: "none",
									duration: 2e3
								}), wx.navigateBack()) : wx.showToast({
									title: "修改失败，请重试",
									icon: "none",
									duration: 2e3
								})
							})).catch((function(t) {
								wx.hideLoading(), wx.showToast({
									title: t.message,
									duration: 2e3,
									icon: "none"
								})
							}))) : wx.showToast({
								title: "请填写收货人地址",
								icon: "none",
								duration: 2e3
							}) : wx.showToast({
								title: "请填写收货人电话",
								icon: "none",
								duration: 2e3
							}) : wx.showToast({
								title: "请填写收货人姓名",
								icon: "none",
								duration: 2e3
							})
						},
						delAddr: function() {
							var t = this;
							wx.showLoading(), i.default.POST({
								addressIds: t.editId
							}, "", "/personal/delAddress").then((function(t) {
								wx.hideLoading(), "删除成功" == t ? (wx.showToast({
									title: "删除成功",
									icon: "none",
									duration: 2e3
								}), setTimeout((function() {
									wx.navigateBack()
								}), 900)) : wx.showToast({
									title: "删除失败，请重试",
									icon: "none",
									duration: 2e3
								})
							})).catch((function(t) {
								wx.hideLoading(), wx.showToast({
									title: t.message,
									duration: 2e3,
									icon: "none"
								})
							}))
						},
						resetAddr: function() {
							wx.navigateTo({
								url: "../companyAddr/main"
							})
						},
						getlocation: function() {
							wx.showLoading({
								title: "定位中...",
								mask: !0
							});
							var t = this;
							wx.getLocation({
								type: "wgs84",
								success: function(e) {
									t.locat.lat = e.latitude, t.locat.lng = e.longitude, t.getLocal(), wx.hideLoading()
								},
								fail: function(t) {
									wx.hideLoading({
										success: function() {
											wx.showToast({
												title: "定位失败",
												icon: "none",
												duration: 2e3
											})
										}
									})
								},
								complete: function() {
									wx.hideLoading()
								}
							})
						},
						getLocal: function(t, e) {
							var n = this;
							n.myAmapFun.getRegeo({
								location: n.locat.lng + "," + n.locat.lat,
								success: function(t) {
									var e = t[0].regeocodeData.addressComponent,
										o = e.neighborhood,
										i = e.streetNumber;
									n.locat.province = e.province, n.locat.city = e.city, n.locat.district = e.district, o && o.name.length >
										0 ? n.locat.addr = o.name : n.locat.addr = i.street + i.number, n.full_address = n.locat.province + n.locat
										.city + n.locat.district + n.locat.addr
								},
								fail: function(t) {
									n.locat.city = "失败", n.locat.addr = "重新定位", console.log(t)
								}
							})
						}
					}
				};
			e.default = c
		},
		"269b": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("1f1d"),
				i = n.n(o);
			for (var a in o) "default" !== a && function(t) {
				n.d(e, t, (function() {
					return o[t]
				}))
			}(a);
			e["default"] = i.a
		},
		8585: function(t, e, n) {
			"use strict";
			var o, i = function() {
					var t = this,
						e = t.$createElement;
					t._self._c
				},
				a = [];
			n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return a
			})), n.d(e, "a", (function() {
				return o
			}))
		},
		"9edc": function(t, e, n) {
			"use strict";
			(function(t) {
				n("6cdc"), n("921b");
				o(n("66fd"));
				var e = o(n("b8b4"));

				function o(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, n("543d")["createPage"])
		},
		b8b4: function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("8585"),
				i = n("269b");
			for (var a in i) "default" !== a && function(t) {
				n.d(e, t, (function() {
					return i[t]
				}))
			}(a);
			var d, s = n("f0c5"),
				c = Object(s["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], d);
			e["default"] = c.exports
		}
	},
	[
		["9edc", "common/runtime", "common/vendor"]
	]
]);
