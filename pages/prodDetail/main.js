(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/prodDetail/main"], {
		"1e2f": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i = l(o("a34a")),
				n = l(o("b775")),
				r = l(o("ed08")),
				s = o("2f62"),
				a = l(o("0f88")),
				d = o("ee73"),
				c = (o("cf45"), o("7c15"));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e, t) {
				var o = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), o.push.apply(o, i)
				}
				return o
			}

			function h(e) {
				for (var t = 1; t < arguments.length; t++) {
					var o = null != arguments[t] ? arguments[t] : {};
					t % 2 ? u(o, !0).forEach((function(t) {
							p(e, t, o[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : u(o)
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
						}))
				}
				return e
			}

			function p(e, t, o) {
				return t in e ? Object.defineProperty(e, t, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = o, e
			}

			function f(e, t, o, i, n, r, s) {
				try {
					var a = e[r](s),
						d = a.value
				} catch (c) {
					return void o(c)
				}
				a.done ? t(d) : Promise.resolve(d).then(i, n)
			}

			function g(e) {
				return function() {
					var t = this,
						o = arguments;
					return new Promise((function(i, n) {
						var r = e.apply(t, o);

						function s(e) {
							f(r, i, n, s, a, "next", e)
						}

						function a(e) {
							f(r, i, n, s, a, "throw", e)
						}
						s(void 0)
					}))
				}
			}
			var m = function() {
					o.e("components/swiper").then(function() {
						return resolve(o("91b0"))
					}.bind(null, o)).catch(o.oe)
				},
				y = function() {
					Promise.all([o.e("common/vendor"), o.e("components/rightFloat")]).then(function() {
						return resolve(o("977a"))
					}.bind(null, o)).catch(o.oe)
				},
				w = function() {
					o.e("components/shareOrSave").then(function() {
						return resolve(o("5998"))
					}.bind(null, o)).catch(o.oe)
				},
				I = {
					name: "",
					components: {
						SelfSwiper: m,
						RightFloat: y,
						ShareOrSave: w
					},
					data: function() {
						return {
							killPrice: 0,
							isShowPopup: !1,
							showShareOrSave: !1,
							remark: "",
							vantitle: "规格、数量",
							goodlabelRequestList: [],
							canbuy: !0,
							indicatorDots: !0,
							autoplay: !0,
							interval: 3e3,
							duration: 500,
							img: "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/food.jpg",
							images: [],
							types: [{
								title: "类型",
								lists: [{
									name: "系统租用",
									id: "0"
								}, {
									name: "源码出售",
									id: 1
								}],
								selectId: 0
							}, {
								title: "规格",
								lists: [{
									name: "3000/年",
									id: 0
								}, {
									name: "10个／15斤装",
									id: 1
								}, {
									name: "一斤装",
									id: 2
								}],
								selectId: 0
							}],
							typeId: 0,
							goodsPrice: "",
							goodId: 0,
							goodsMsg: {
								goodsDetails: "",
								name: "",
								price: ""
							},
							isCollect: !1,
							cardTel: "",
							type_id_1: 0,
							type_index_1: 0,
							type_index_2: 0,
							right_float_show: !1,
							cardId: 0,
							num: 1,
							placeOrder: !1,
							forwardId: wx.getStorageSync("forwardId"),
							forwardGoodsId: wx.getStorageSync("forwardGoodsId"),
							shareForwardId: "",
							isPreviewImg: !1,
							maskImg: "",
							isShow: !0,
							userId: "",
							isLogin: a.default.returnIsLogin() || !1,
							assembleData: null,
							proData: {
								isKill: 0
							},
							isJoin: !1,
							groupAssembleId: -1,
							oneRoyalty: 0,
							twoRoyalty: 0,
							goodsNotice: {
								applicableAge: "",
								courseDuration: "",
								typeDuration: "",
								courseCharacteristics: "",
								classEquipment: "",
								validity: "",
								startTime: "",
								classType: "",
								courseUpdate: "",
								electronicNotes: "",
								refundPolicy: ""
							}
						}
					},
					onLoad: function() {
						var e = g(i.default.mark((function e() {
							var t, o, n = this;
							return i.default.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (wx.getStorageSync("prod") && (t = wx.getStorageSync("prod"), this.images = t.goodPhoto ? t.goodPhoto
												.split(",") : [], this.goodsMsg = {
													goodsDetails: t.goodsDetails,
													name: t.goodsName,
													price: t.price
												}, wx.removeStorageSync("prod")), o = this.$root.$mp.query, this.isJoin = o.join || !1, this.groupAssembleId =
											o.assembleId || -1, console.log("当前的query值", o), !o.cardId) {
											e.next = 13;
											break
										}
										return this.cardId = o.cardId, this.goodId = o.goodId, this.cardTel = o.tel, e.next = 11, this.findCompany(
											this.cardId);
									case 11:
										e.next = 16;
										break;
									case 13:
										this.cardTel = wx.getStorageSync("CARDTEL") || "", this.goodId = this.$root.$mp.query.goodId || 0,
											this.cardId = wx.getStorageSync("CARDID") || 0;
									case 16:
										this.checkCollect(), this.getProdDetail(), this.addGoodsForwardRecord(this.cardId, this.goodId).then(
											(function(e) {
												n.shareForwardId = e
											})), this.forwardId = wx.getStorageSync("forwardId"), this.forwardGoodsId = wx.getStorageSync(
											"forwardGoodsId");
									case 21:
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
					onPullDownRefresh: function() {
						var e = g(i.default.mark((function e() {
							return i.default.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										this.checkCollect(), this.getProdDetail(), setTimeout((function() {
											wx.stopPullDownRefresh()
										}), 1e3);
									case 3:
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
					onPageScroll: function() {
						this.right_float_show = !1
					},
					onShareAppMessage: function(e) {
						this.validGoodsForwardRecord();
						this.goodsMsg.coverImg;
						var t = this.cardId + "" + (new Date).getTime();
						(0, d.addShareRecord)(this.currentCompany.companyId, 2, this.goodId, t).then((function(e) {}), (function(e) {}));
						var o = "/pages/prodDetail/main?goodId=" + this.goodId + "&cardId=" + this.cardId + "&tel=" + this.cardTel +
							"&companyId=" + this.currentCompany.companyId + "&forwardId=" + this.shareForwardId + "&goType=1&shareId=" +
							t;
						return console.log("当前的path值", o), {
							title: this.goodsMsg.name + " - " + JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName,
							path: "/pages/prodDetail/main?goodId=" + this.goodId + "&cardId=" + this.cardId + "&tel=" + this.cardTel +
								"&companyId=" + this.currentCompany.companyId + "&forwardId=" + this.shareForwardId + "&goType=1&shareId=" +
								t
						}
					},
					onUnload: function() {
						this.typeId = ""
					},
					methods: h({}, (0, s.mapActions)(["setCurrentCompany"]), {
						setNum: function(e) {
							this.num = e.detail
						},
						onClose: function() {
							this.isShowPopup = !1
						},
						findCompany: function() {
							var e = g(i.default.mark((function e(t) {
								var o, r;
								return i.default.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return console.log("获取公司信息"), wx.showLoading(), o = "/businessCard/cardDetails", e.prev = 3, e
												.next = 6, n.default.POST({
													cardId: t,
													refresh: !0
												}, "", o);
										case 6:
											r = e.sent, this.setCurrentCompany(r), wx.hideLoading(), e.next = 14;
											break;
										case 11:
											e.prev = 11, e.t0 = e["catch"](3), wx.hideLoading();
										case 14:
										case "end":
											return e.stop()
									}
								}), e, this, [
									[3, 11]
								])
							})));

							function t(t) {
								return e.apply(this, arguments)
							}
							return t
						}(),
						showShare: function() {
							this.showShareOrSave = !0
						},
						closeModal: function() {
							this.showShareOrSave = !1
						},
						clickRightRowEvent: function() {
							this.isShow = !this.isShow
						},
						closePreviewImg: function() {
							this.isPreviewImg = !1, wx.setNavigationBarColor({
								frontColor: "#3BA99D",
								backgroundColor: "#ffffff",
								animation: {
									duration: 1
								}
							})
						},
						saveImg: function() {
							var e = this;
							wx.saveImageToPhotosAlbum({
								filePath: this.maskImg,
								success: function(t) {
									wx.setNavigationBarColor({
										frontColor: "#000000",
										backgroundColor: "#ffffff",
										animation: {
											duration: 1
										}
									}), e.isPreviewImg = !1, wx.showToast({
										title: "保存成功",
										duration: 1e3,
										icon: "success",
										mask: !0
									})
								},
								fail: function(t) {
									wx.setNavigationBarColor({
										frontColor: "#000000",
										backgroundColor: "#ffffff",
										animation: {
											duration: 1
										}
									}), e.isPreviewImg = !1, wx.showToast({
										title: "保存失败",
										duration: 1e3,
										icon: "none",
										mask: !0
									})
								}
							})
						},
						save: function() {
							var e = this;
							if (this.showShareOrSave = !1, "" !== this.maskImg) return wx.setNavigationBarColor({
								frontColor: "#000000",
								backgroundColor: "#848485",
								animation: {
									duration: 200
								}
							}), void(this.isPreviewImg = !0);
							wx.showLoading(), n.default.POST({
								specId: this.typeId
							}, "", "/goods/goodsCard").then((function(t) {
								var o = n.default.imgBackUrl + t;
								console.log("太阳码地址:" + o), wx.getImageInfo({
									src: o,
									success: function(t) {
										wx.hideLoading(), e.maskImg = t.path, wx.setNavigationBarColor({
											frontColor: "#000000",
											backgroundColor: "#848485",
											animation: {
												duration: 200
											}
										}), e.isPreviewImg = !0
									}
								}).catch((function(e) {
									console.log("太阳码地址err:%s", e), wx.hideLoading()
								}))
							}))
						},
						validGoodsForwardRecord: function() {
							n.default.POST({
								forwardId: this.shareForwardId
							}, "", "/record/validGoodsForwardRecord").then((function(e) {}))
						},
						toIM: function() {
							n.default.ToIMPage(this.currentCompany, 1, this.typeId)
						},
						getProdDetail: function() {
							var e = g(i.default.mark((function e(t) {
								var o, n, r, s;
								return i.default.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (this.goodId) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return o = this.$root.$mp.query, n = o.parentId, r = o.specId, wx.showLoading({
												title: "Loading...",
												mask: !0
											}), e.next = 6, (0, c.getGoodsInfo)({
												goodsId: this.goodId,
												cardId: this.cardId,
												refresh: t || ""
											});
										case 6:
											s = e.sent, wx.hideLoading(), this.oneRoyalty = s.oneRoyalty, this.twoRoyalty = s.twoRoyalty,
												this.goodsNotice = s.goodsNotice, this.remark = s.remark, this.proData = s, this.goodlabelRequestList =
												s.goodlabelRequestList, this.goodsMsg = {
													goodsDetails: s.goodsDetails || "",
													name: s.goodsName,
													price: s.price / 100,
													coverImg: s.coverImg
												}, this.goodsMsg.price = this.goodsMsg.price.toFixed(2), this.canbuy = 1 == s.ispayment, s.goodPhoto &&
												(this.images = s.goodPhoto.split(",")), s.goodSpecModelList && (s.goodSpecModelList.forEach((
														function(e, t) {
															e.goodSpecModelList ? (e.selectId = e.goodSpecModelList[0].specId, e.price = e.goodSpecModelList[
																0].price / 100, e.price = e.price.toFixed(2), e.killPrice = (e.goodSpecModelList[0].killPrice /
																100).toFixed(2), e.specNum = e.goodSpecModelList[0].specNum) : (e.selectId = e.specId,
																e.price = e.price / 100, e.price = e.price.toFixed(2), e.killPrice = (e.price.killPrice /
																	100).toFixed(2))
														})), this.types = s.goodSpecModelList, this.type_id_1 = n || this.types[0].specId, this.goodsPrice =
													this.types[0].price, this.killPrice = this.types[0].killPrice, console.log(this.types[0],
														"=----------------------------"), this.typeId = r || this.types[0].selectId, n && (this.type_index_1 =
														s.indexOf(s.find((function(e) {
															return e.specId == n
														})))), this.type_index_1 = -1 == this.type_index_1 ? 0 : this.type_index_1), s.goodsAssembleModel &&
												(this.assembleData = s.goodsAssembleModel);
										case 20:
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
						changeTypeId: function(e) {
							this.typeId = e
						},
						checkCollect: function() {
							var e = this;
							n.default.checkCollect({
								itemType: 1,
								itemId: this.goodId
							}).then((function(t) {
								e.isCollect = t.status, console.log(e.isCollect)
							})).catch((function(e) {}))
						},
						type_tap_1: function(e, t) {
							this.type_id_1 = e, this.type_index_1 = t, this.type_tap(this.type_index_1, 0, this.types[this.type_index_1]
								.goodSpecModelList[0].specId)
						},
						type_tap: function(e, t, o) {
							wx.showLoading(), this.types[e].selectId = o, this.type_index_2 = t;
							var i = (this.types[e].goodSpecModelList[t].price / 100).toFixed(2);
							this.killPrice = (this.types[e].goodSpecModelList[t].killPrice / 100).toFixed(2);
							var n = this.types[e].goodSpecModelList[t].specNum;
							this.$set(this.types[e], "price", i), this.$set(this.types[e], "specNum", n), this.goodsPrice = i, this.typeId =
								o, wx.hideLoading()
						},
						toProductList: function() {
							wx.switchTab({
								url: "/pages/Product/main"
							})
						},
						buynow: function() {
							var e = this.types[this.type_index_1].selectId,
								t = this.types[this.type_index_1].goodSpecModelList.find((function(t) {
									return e === t.specId
								}));
							if (console.log(t), t = JSON.parse(JSON.stringify(t)), t.goodsName = this.goodsMsg.name, t.num = this.num,
								t.photoUrl = this.images[0], t.cardId = this.cardId, t.price = (t.price / 100).toFixed(2), t.killPrice =
								(t.killPrice / 100).toFixed(2), t.allPrice = t.price * t.num, this.proData.isKill) return wx.setStorageSync(
								"orderInfo", [{
									companyId: wx.getStorageSync("COMPANYID"),
									companyName: JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName,
									orderState: 1,
									allNum: 1,
									orderPrice: t.killPrice * t.num,
									shopcartModelList: [t]
								}]), void wx.navigateTo({
								url: "../orderConfirm/main"
							});
							wx.setStorageSync("orderInfo", [{
								oneRoyalty: this.oneRoyalty,
								twoRoyalty: this.twoRoyalty,
								companyId: this.currentCompany.companyId,
								companyName: this.currentCompany.companyName,
								orderState: 1,
								allNum: 1,
								orderPrice: t.price * t.num,
								shopcartModelList: [t]
							}]), wx.navigateTo({
								url: "../orderConfirm/main"
							})
						},
						collect: function() {
							var e = this;
							wx.showLoading();
							var t = "",
								o = {};
							t = this.isCollect ? "/personal/delCollection" : "/personal/addCollection", o = {
								itemType: 1,
								itemId: this.goodId
							}, n.default.POST(o, "", t).then((function(t) {
								e.isCollect = !e.isCollect, wx.hideLoading()
							})).catch((function(e) {
								wx.hideLoading()
							}))
						},
						makePhone: function() {
							r.default.MakePhone(this.cardTel || "")
						},
						addToCart: function() {
							wx.showLoading(), n.default.POST({
								goodsId: this.goodId,
								cardId: this.cardId,
								specId: this.typeId,
								forwardId: this.goodId == this.forwardGoodsId ? this.forwardId : "",
								num: this.num
							}, "", "/orders/addShopcart").then((function(e) {
								wx.hideLoading(), wx.showToast({
									title: "成功！",
									icon: "success",
									duration: 1e3
								})
							})).catch((function(e) {
								wx.hideLoading(), wx.showToast({
									title: e.message,
									duration: 2e3,
									icon: "none"
								})
							}))
						}
					}),
					computed: h({}, (0, s.mapGetters)(["currentCompany"]))
				};
			t.default = I
		},
		"26c8": function(e, t, o) {
			"use strict";
			o.r(t);
			var i = o("470a"),
				n = o("650c");
			for (var r in n) "default" !== r && function(e) {
				o.d(t, e, (function() {
					return n[e]
				}))
			}(r);
			o("e81a");
			var s, a = o("f0c5"),
				d = Object(a["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
			t["default"] = d.exports
		},
		"470a": function(e, t, o) {
			"use strict";
			var i, n = function() {
					var e = this,
						t = e.$createElement;
					e._self._c;
					e._isMounted || (e.e0 = function(t) {
						e.showShareOrSave = !0
					}, e.e1 = function(t) {
						e.isShowPopup = !0
					}, e.e2 = function(t) {
						e.isShowPopup = !0
					}, e.e3 = function(t) {
						e.isShowPopup = !0
					})
				},
				r = [];
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return i
			}))
		},
		"520d": function(e, t, o) {
			"use strict";
			(function(e) {
				o("6cdc"), o("921b");
				i(o("66fd"));
				var t = i(o("26c8"));

				function i(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				e(t.default)
			}).call(this, o("543d")["createPage"])
		},
		"650c": function(e, t, o) {
			"use strict";
			o.r(t);
			var i = o("1e2f"),
				n = o.n(i);
			for (var r in i) "default" !== r && function(e) {
				o.d(t, e, (function() {
					return i[e]
				}))
			}(r);
			t["default"] = n.a
		},
		"8dc6": function(e, t, o) {},
		e81a: function(e, t, o) {
			"use strict";
			var i = o("8dc6"),
				n = o.n(i);
			n.a
		}
	},
	[
		["520d", "common/runtime", "common/vendor"]
	]
]);
