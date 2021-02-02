(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/book/main/main"], {
		1948: function(t, e, o) {},
		"48b5": function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o("e238"),
				i = o.n(n);
			for (var r in n) "default" !== r && function(t) {
				o.d(e, t, (function() {
					return n[t]
				}))
			}(r);
			e["default"] = i.a
		},
		6733: function(t, e, o) {
			"use strict";
			var n = o("1948"),
				i = o.n(n);
			i.a
		},
		"8d4a": function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o("ec8e"),
				i = o("48b5");
			for (var r in i) "default" !== r && function(t) {
				o.d(e, t, (function() {
					return i[t]
				}))
			}(r);
			o("6733");
			var s, c = o("f0c5"),
				a = Object(c["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
			e["default"] = a.exports
		},
		b4e8: function(t, e, o) {
			"use strict";
			(function(t) {
				o("6cdc"), o("921b");
				n(o("66fd"));
				var e = n(o("8d4a"));

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				t(e.default)
			}).call(this, o("543d")["createPage"])
		},
		
		e238: function(t, e, o) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var n = o("9ab4"),
				i = n.__importDefault(o("66fd")),
				r = n.__importDefault(o("2fe1")),
				s = o("7e00");
			o("7e6c");
			var c = function(t) {
				
				
				function e() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.overlayShow = !1, e.type1 = [], e.type2 = [], e.list = [], e.nounlocked = 0, e.unlocked = "0", e.recordId =
						3, e.twoType = "",this.ccnum = 0, e.oneType = "", e.pictureBooksTitle = "", e.pageNum = 1, e
				}
				return n.__extends(e, t), e.prototype.onShow = function() {
					this.changeList(this.twoType)
				}, e.prototype.onLoad = function() {
					return n.__awaiter(this, void 0, void 0, (function() {
						var t;
						return n.__generator(this, (function(e) {
							switch (e.label) {
								case 0:
									return [4, this.getClassify()];
								case 1:
									return e.sent(), t = this.type1[0].pictureTypeId, [4, this.getClassify(t)];
								case 2:
									return e.sent(), [2]
							}
						}))
					}))
				}, e.prototype.setRecordId = function(t) {
					this.selectComponent("#search").onCancel(), console.log("===============>"), console.log(this.selectComponent(
						"#search").onCancel), this.recordId = t, this.oneType = "", this.pictureBooksTitle = "", this.changeList("")
				}, e.prototype.goToBookInfo = function(t) {
					var e = t.pictureBooksId,
						o = t.recordId;
					"0" !== o || 0 !== this.nounlocked ? (wx.setStorageSync("book-share", 1), wx.navigateTo({
						url: "../info/main?bookid=" + e + "&cardId=" + wx.getStorageSync("CARDID") + "&tel=" + wx.getStorageSync(
								"phone") + "&companyId=" + wx.getStorageSync("COMPANYID") + "&seeuserid=" + wx.getStorageSync("userId") +
							"&recordId=" + o
					})) : this.overlayShow = !0
				}, e.prototype.clearSearch = function() {
					this.pictureBooksTitle = "", this.changeList(this.twoType)
				}, e.prototype.onSearch = function(t) {
					this.pictureBooksTitle = t.detail, this.changeList(this.twoType)
				}, e.prototype.changeList = function(t) {
					
					this.twoType = t, this.pageNum = 1, this.list = [], this.getData()
				}, e.prototype.getData = function() {
					return n.__awaiter(this, void 0, void 0, (function() {
						var t, e;
						return n.__generator(this, (function(o) {
							switch (o.label) {
								case 0:
									return t = void 0, t = 3 === this.recordId ? void 0 : this.recordId, wx.showLoading({
										title: "Loading...",
										mask: !1
									}), [4, s.selectPicture({
										pictureBooksTitle: this.pictureBooksTitle,
										oneType: this.oneType,
										twoType: this.twoType,
										pageNum: this.pageNum,
										recordId: t
									})];
								case 1:
									return e = o.sent(), wx.hideLoading(), 1 === this.pageNum && (this.unlocked = e.unlocked, this.nounlocked =
											e.nounlocked), this.pageNum += 1, e && e.list && (this.list = n.__spreadArrays(this.list, e.list)),
										[2]
							}
						}))
					}))
				}, e.prototype.getClassify = function(t, e) {
					this.ccnum = parseInt(String(t).charAt(0) - 1);
					console.log("默认值:"+this.ccnum);
					return void 0 === t && (t = "0"), void 0 === e && (e = !1), n.__awaiter(this, void 0, void 0, (function() {
						var o;
						return n.__generator(this, (function(n) {
							switch (n.label) {
								case 0:
									return this.type2 = [], e && (this.oneType = t, this.changeList("")), [4, s.selectPictureType({
										parentId: t
									})];
								case 1:
									return o = n.sent(), "0" == t ? this.type1 = o : o ? this.type2 = o : wx.showToast({
										title: "该分类下暂无数据",
										icon: "none"
									}), [2]
							}
						}))
					}))
				}, e = n.__decorate([r.default], e), e
			}(i.default);
			e.default = c
		},
		ec8e: function(t, e, o) {
			"use strict";
			var n, i = function() {
					var t = this,
						e = t.$createElement;
					t._self._c;
					t._isMounted || (t.e0 = function(e) {
						t.overlayShow = !1
					})
				},
				r = [];
			o.d(e, "b", (function() {
				return i
			})), o.d(e, "c", (function() {
				return r
			})), o.d(e, "a", (function() {
				return n
			}))
		}
	},
	[
		["b4e8", "common/runtime", "common/vendor"]
	]
]);
