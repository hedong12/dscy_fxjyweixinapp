(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/appointment/main"], {
    "056d": function (t, n, e) {},
    "8f5c": function (t, n, e) {
      "use strict";
      var o = e("056d"),
        i = e.n(o);
      i.a
    },
    "957c": function (t, n, e) {
      "use strict";
      var o, i = function () {
          var t = this,
            n = t.$createElement;
          t._self._c;
          t._isMounted || (t.e0 = function (n) {
            t.showShareOrSave = !0
          }, t.e1 = function (n) {
            t.showShareOrSave = !1
          })
        },
        a = [];
      e.d(n, "b", (function () {
        return i
      })), e.d(n, "c", (function () {
        return a
      })), e.d(n, "a", (function () {
        return o
      }))
    },
    a37a7: function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e("957c"),
        i = e("df7e");
      for (var a in i) "default" !== a && function (t) {
        e.d(n, t, (function () {
          return i[t]
        }))
      }(a);
      e("8f5c");
      var s, r = e("f0c5"),
        c = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
      n["default"] = c.exports
    },
    c251: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = l(e("a34a")),
        i = l(e("b775")),
        a = l(e("ed08")),
        s = e("5f87"),
        r = e("2f62"),
        c = l(e("0f88")),
        u = e("ee73");

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function p(t) {
        return f(t) || d(t) || h()
      }

      function h() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function d(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }

      function f(t) {
        if (Array.isArray(t)) {
          for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
          return e
        }
      }

      function g(t, n, e, o, i, a, s) {
        try {
          var r = t[a](s),
            c = r.value
        } catch (u) {
          return void e(u)
        }
        r.done ? n(c) : Promise.resolve(c).then(o, i)
      }

      function m(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise((function (o, i) {
            var a = t.apply(n, e);

            function s(t) {
              g(a, o, i, s, r, "next", t)
            }

            function r(t) {
              g(a, o, i, s, r, "throw", t)
            }
            s(void 0)
          }))
        }
      }

      function y(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          n && (o = o.filter((function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable
          }))), e.push.apply(e, o)
        }
        return e
      }

      function b(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2 ? y(e, !0).forEach((function (n) {
            w(t, n, e[n])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : y(e).forEach((function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
          }))
        }
        return t
      }

      function w(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = e, t
      }
      var v = function () {
          Promise.all([e.e("common/vendor"), e.e("components/rightFloat")]).then(function () {
            return resolve(e("977a"))
          }.bind(null, e)).catch(e.oe)
        },
        S = function () {
          e.e("components/getPhoneNumberGoods").then(function () {
            return resolve(e("0c12"))
          }.bind(null, e)).catch(e.oe)
        },
        _ = function () {
          e.e("components/shareOrSave").then(function () {
            return resolve(e("5998"))
          }.bind(null, e)).catch(e.oe)
        },
        C = function () {
          e.e("components/noData").then(function () {
            return resolve(e("6a2b"))
          }.bind(null, e)).catch(e.oe)
        },
        I = function () {
          e.e("components/swiper").then(function () {
            return resolve(e("91b0"))
          }.bind(null, e)).catch(e.oe)
        },
        j = function () {
          e.e("components/AuthenticationTag").then(function () {
            return resolve(e("3c81"))
          }.bind(null, e)).catch(e.oe)
        },
        P = function () {
          e.e("components/FloatButtons").then(function () {
            return resolve(e("590c"))
          }.bind(null, e)).catch(e.oe)
        },
        O = function () {
          Promise.all([e.e("common/vendor"), e.e("components/NavBarByUser")]).then(function () {
            return resolve(e("f655"))
          }.bind(null, e)).catch(e.oe)
        },
        T = {
          name: "",
          components: {
            RightFloat: v,
            NoData: C,
            getPhoneNumberGoods: S,
            SelfSwiper: I,
            AuthenticationTag: j,
            FloatButtons: P,
            NavBarByUser: O,
            ShareOrSave: _
          },
          data: function () {
            return {
              canClickStar: !0,
              showShareOrSave: !1,
              menu: [{
                productsTypeName: "全部",
                productsTypeId: "-10"
              }],
              menu_id: "-10",
              prod_lists: [],
              nodata: !1,
              COMPANYID: 0,
              company_msg: {
                admin_logo: "",
                company_logo: "",
                company_name: ""
              },
              currentPage: 1,
              isCollect: !1,
              collectionId: 0,
              page: 1,
              isLoading: !1,
              right_float_show: !1,
              banners: ["https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-01.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-02.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-03.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-04.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-05.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-06.jpg"],
              isShow: !0,
              avatarUrl: "",
              isLogin: c.default.returnIsLogin() || !1,
              isShowTalk: !0,
              isShowLoginGuide: !0,
              targetAvatarUrl: "",
              scrollContentHeight: 0,
              mainHeight: 0
            }
          },
          onTabItemTap: function (t) {
            (0, s.authSubscribeMessage)(this.subscriptionNew)
          },
          onShow: function () {
            var t = this.COMPANYID;
            this.COMPANYID = wx.getStorageSync("COMPANYID") || 0, t == this.COMPANYID && this.COMPANYID || (this.prod_lists = [], this.page = 1, this.getcompany(), this.getTypeMenus(), this.menu_tap("-10"), this.getAd()), this.isLogin = c.default.returnIsLogin() || !1, this.avatarUrl = wx.getStorageSync("avatarUrl") || ""
          },
          computed: b({}, (0, r.mapState)({
            currentCompany: function (t) {
              return t.currentCompany
            }
          }), {}, (0, r.mapGetters)(["subscriptionNew"])),
          watch: {
            currentCompany: {
              deep: !0,
              immediate: !0,
              handler: function (t) {
                t && (t.userId === wx.getStorageSync("userId") ? this.isShowTalk = !1 : (this.isShowTalk = !0, this.targetAvatarUrl = t.logo))
              }
            }
          },
          onShareAppMessage: function (t) {
            var n = wx.getStorageSync("COMPANYID") || 0,
              e = wx.getStorageSync("CARDID") || 0,
              o = e + "" + (new Date).getTime();
            return (0, u.addShareRecord)(this.COMPANYID, 3, "", o).then((function (t) {}), (function (t) {})), this.addGoodsForwardRecord(e), {
              title: JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName,
              path: "/pages/appointment/main?cardId=".concat(e, "&companyId=").concat(n, "&goType=1&shareId=").concat(o),
              success: function (t) {
                wx.showShareMenu({
                  withShareTicket: !0
                })
              },
              fail: function (t) {
                console.log("失败分享名片--- ", t)
              }
            }
          },
          onPageScroll: function (t) {
            t.scrollTop > 200 ? wx.setNavigationBarColor({
              frontColor: "#000000",
              backgroundColor: "#ffffff",
              animation: {
                duration: 200,
                timingFunc: "easeIn"
              }
            }) : wx.setNavigationBarColor({
              frontColor: "#ffffff",
              backgroundColor: "#ffffff",
              animation: {
                duration: 200,
                timingFunc: "easeIn"
              }
            })
          },
          onPullDownRefresh: function () {
            var t = m(o.default.mark((function t() {
              return o.default.wrap((function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    wx.showNavigationBarLoading(), this.page = 1, this.prod_lists = [], this.nodata = !1, this.isLoading = !1, this.getcompany(), this.getTypeMenus(), this.getAd(), this.menu_tap(this.menu_id || "-10"), wx.stopPullDownRefresh(), setTimeout((function () {
                      wx.hideNavigationBarLoading()
                    }), 300);
                  case 11:
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
          mounted: function () {
            var t = m(o.default.mark((function t() {
              var n, e;
              return o.default.wrap((function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, a.default.systemIfo();
                  case 2:
                    n = t.sent, e = getApp().globalData.navHeight, this.mainHeight = n.windowHeight, this.scrollContentHeight = n.windowHeight - e;
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
          methods: {
            GeneratePoster: function () {
              wx.navigateTo({
                url: "/pages/showBill/main"
              }), this.showShareOrSave = !1
            },
            goTo: function () {
              wx.switchTab({
                url: "/pages/Product/main"
              })
            },
            goToActivity: function () {
              wx.navigateTo({
                url: "/pages/activity/list/main"
              })
            },
            scrolltoupper: function (t) {
              this.page = 1, this.prod_lists = [], this.nodata = !1, this.isLoading = !1, this.getcompany(), this.getTypeMenus(), this.getAd(), this.menu_tap(this.menu_id || "-10")
            },
            scrolltolower: function (t) {
              var n = this;
              n.getProds()
            },
            cancelLoginGuide: function () {
              this.isShowLoginGuide = !1
            },
            loginGuide: function () {
              this.isShowLoginGuide = !0
            },
            talk: function () {
              (0, s.authSubscribeMessage)(this.subscriptionNew), wx.navigateTo({
                url: "../IM/main?userId=" + this.currentCompany.userId + "&logo=" + this.currentCompany.logo + "&type=2&cardId=" + this.currentCompany.cardId + "&name=" + this.currentCompany.name + "&wxCode=" + (this.currentCompany.personalWx || "") + "&phone=" + this.currentCompany.phone
              })
            },
            loginSuccess: function (t) {
              this.isLogin = !0, this.hasCard = wx.getStorageSync("hasCard") || !1, this.avatarUrl = wx.getStorageSync("avatarUrl") || ""
            },
            loginFailed: function () {
              this.isShowLoginGuide = !0
            },
            toSearchGoods: function () {
              wx.navigateTo({
                url: "/pages/appointmentPack/searchGoods/main?companyId=" + this.COMPANYID
              })
            },
            clickRightRowEvent: function () {
              this.isShow = !this.isShow
            },
            getTypeMenus: function () {
              var t = this;
              i.default.POST({
                companyId: this.COMPANYID
              }, "", "/products/selectProductsTypeList/V2").then((function (n) {
                t.menu = n ? [{
                  productsTypeName: "全部",
                  productsTypeId: -10
                }].concat(p(n)) : [{
                  productsTypeName: "全部",
                  productsTypeId: -10
                }]
              }))
            },
            preview: function (t) {
              this.previewImages(this.banners, this.banners[t])
            },
            getAd: function () {
              var t = this;
              this.getPlateAds(2).then((function (n) {
                t.banners = n ? n.map((function (t) {
                  return t.photo
                })) : ["https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-01.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-02.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-03.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-04.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-05.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-06.jpg"]
              })).catch((function () {
                t.banners = ["https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-01.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-02.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-03.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-04.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-05.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-06.jpg"]
              }))
            },
            getcompany: function () {
              var t = this,
                n = this;
              i.default.POST({
                companyId: n.COMPANYID
              }, "", "/goods/getCompanyInfo/V2").then((function (t, e) {
                t && (n.company_msg = {
                  admin_logo: t.userLogo || "",
                  company_logo: t.companyLogo || "",
                  company_name: t.companyName || ""
                }, n.company_msg = {
                  company_logo: t.companyLogo,
                  company_name: t.companyName
                }, n.isCollect = 1 == t.isCollection)
              })).catch((function (n) {
                t.company_msg = {}
              }))
            },
            checkCollect: function () {
              var t = this;
              (0, s.authSubscribeMessage)(this.subscriptionNew), i.default.checkCollect({
                itemType: 3,
                itemId: this.COMPANYID
              }).then((function (n) {
                t.isCollect = n.status, t.collectionId = n.collectionId || 0
              })).catch((function (t) {}))
            },
            getProds: function () {
              var t = this;
              t.isLoading ? wx.hideLoading() : (t.isLoading = !0, i.default.POST({
                productsTypeId: -10 == t.menu_id ? "" : t.menu_id,
                pageNum: t.page,
                companyId: wx.getStorageSync("COMPANYID") || 650,
                cardId: wx.getStorageSync("CARDID")
              }, "", "/products/selectProductsPage/V2").then((function (n) {
                wx.hideLoading(), n && (n.pageInfo.list.forEach((function (t, n) {
                  if (t.productsPhoto ? t.prodLogo = t.productsPhoto.split(",")[0] : t.prodLogo = "", t.price) {
                    var e;
                    try {
                      e = JSON.parse(t.price)
                    } catch (o) {
                      e = parseInt(t.price) || 0
                    }
                    "[object number]" === Object.prototype.toString.call(e).toLowerCase() ? t.price = e.toFixed(2) : t.price = e.map((function (t) {
                      return parseInt(t)
                    })).join("~")
                  } else t.price = ""
                })), t.prod_lists = [].concat(p(t.prod_lists), p(n.pageInfo.list)), t.page++, setTimeout((function () {
                  t.isLoading = !1
                }), 500))
              })).catch((function (n) {
                console.log(n), t.prod_lists = [], wx.hideLoading(), 204 == n.code && (t.nodata = !0), setTimeout((function () {
                  t.isLoading = !1
                }), 500)
              })))
            },
            menu_tap: function (t) {
              (0, s.authSubscribeMessage)(this.subscriptionNew), this.menu_id = t || "", this.page = 1, this.nodata = !1, this.isLoading = !1, this.prod_lists = [], this.getProds()
            },
            toProdDetail: a.default.throttle((function (t) {
              wx.navigateTo({
                url: "/pages/appointmentPack/productDetail/main?goodId=" + t
              })
            }), 1e3),
            collect: function () {
              var t = this;
              if (c.default.returnIsLogin()) {
                if (this.canClickStar) {
                  this.canClickStar = !1;
                  var n = "",
                    e = {};
                  this.isCollect ? (n = "/personal/delCollection", e = {
                    itemType: 3,
                    itemId: this.COMPANYID
                  }) : (n = "/personal/addCollection", e = {
                    itemType: 3,
                    itemId: this.COMPANYID
                  }), i.default.changeCollect(e, n).then((function (n) {
                    console.log(n), n && (t.isCollect = !t.isCollect, wx.showToast({
                      title: t.isCollect ? "收藏成功！" : "取消收藏！",
                      icon: "none",
                      duration: 2e3
                    })), setTimeout((function () {
                      t.canClickStar = !0
                    }), 200)
                  })).catch((function (n) {
                    setTimeout((function () {
                      t.canClickStar = !0
                    }), 200)
                  }))
                }
              } else this.loginGuide()
            }
          }
        };
      n.default = T
    },
    df7e: function (t, n, e) {
      "use strict";
      e.r(n);
      var o = e("c251"),
        i = e.n(o);
      for (var a in o) "default" !== a && function (t) {
        e.d(n, t, (function () {
          return o[t]
        }))
      }(a);
      n["default"] = i.a
    },
    e332: function (t, n, e) {
      "use strict";
      (function (t) {
        e("6cdc"), e("921b");
        o(e("66fd"));
        var n = o(e("a37a7"));

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
    ["e332", "common/runtime", "common/vendor"]
  ]
]);