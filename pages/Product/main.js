(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/Product/main"], {
    "106f": function (e, t, n) {
      "use strict";
      var o, r = function () {
          var e = this,
            t = e.$createElement,
            n = (e._self._c, e.__map(e.list, (function (t, n) {
              var o = t.goodPhoto.split(","),
                r = e.getDecimal(t.new_price),
                i = e.getDecimal(t.price);
              return {
                $orig: e.__get_orig(t),
                g0: o,
                m0: r,
                m1: i
              }
            })));
          e._isMounted || (e.e0 = function (t) {
            e.showShareOrSave = !1
          }), e.$mp.data = Object.assign({}, {
            $root: {
              l0: n
            }
          })
        },
        i = [];
      n.d(t, "b", (function () {
        return r
      })), n.d(t, "c", (function () {
        return i
      })), n.d(t, "a", (function () {
        return o
      }))
    },
    "2b8b": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("106f"),
        r = n("9f03");
      for (var i in r) "default" !== i && function (e) {
        n.d(t, e, (function () {
          return r[e]
        }))
      }(i);
      n("655c");
      var a, s = n("f0c5"),
        c = Object(s["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
      t["default"] = c.exports
    },
    "655c": function (e, t, n) {
      "use strict";
      var o = n("aa7a"),
        r = n.n(o);
      r.a
    },
    "9f03": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("b7fa"),
        r = n.n(o);
      for (var i in o) "default" !== i && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(i);
      t["default"] = r.a
    },
    aa7a: function (e, t, n) {},
    b7fa: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = d(n("a34a")),
        r = d(n("b775")),
        i = d(n("ed08")),
        a = n("5f87"),
        s = n("2f62"),
        c = d(n("0f88")),
        u = n("ee73"),
        l = n("cf45");

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e) {
        return p(e) || f(e) || g()
      }

      function g() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }

      function f(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }

      function p(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
      }

      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }

      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? m(n, !0).forEach((function (t) {
            v(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(n).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function w(e, t, n, o, r, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (u) {
          return void n(u)
        }
        s.done ? t(c) : Promise.resolve(c).then(o, r)
      }

      function b(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise((function (o, r) {
            var i = e.apply(t, n);

            function a(e) {
              w(i, o, r, a, s, "next", e)
            }

            function s(e) {
              w(i, o, r, a, s, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      var S = function () {
          n.e("components/AuthenticationTag").then(function () {
            return resolve(n("3c81"))
          }.bind(null, n)).catch(n.oe)
        },
        I = function () {
          n.e("components/shareOrSave").then(function () {
            return resolve(n("5998"))
          }.bind(null, n)).catch(n.oe)
        },
        P = function () {
          n.e("components/swiper").then(function () {
            return resolve(n("91b0"))
          }.bind(null, n)).catch(n.oe)
        },
        C = function () {
          n.e("components/FloatButtons").then(function () {
            return resolve(n("590c"))
          }.bind(null, n)).catch(n.oe)
        },
        O = function () {
          Promise.all([n.e("common/vendor"), n.e("components/NavBarByUser")]).then(function () {
            return resolve(n("f655"))
          }.bind(null, n)).catch(n.oe)
        },
        x = function () {
          Promise.all([n.e("common/vendor"), n.e("components/getPhone")]).then(function () {
            return resolve(n("7a78"))
          }.bind(null, n)).catch(n.oe)
        },
        _ = function () {
          Promise.all([n.e("common/vendor"), n.e("components/productRecommend")]).then(function () {
            return resolve(n("0b13"))
          }.bind(null, n)).catch(n.oe)
        },
        D = {
          components: {
            getUserPhone: x,
            SelfSwiper: P,
            AuthenticationTag: S,
            FloatButtons: C,
            NavBarByUser: O,
            ShareOrSave: I,
            ProductRecommend: _
          },
          data: function () {
            return {
              showShareOrSave: !1,
              canClickStar: !0,
              menu: [],
              list: [],
              prod_lists: [],
              COMPANYID: 0,
              company_msg: {
                admin_logo: "",
                company_logo: "",
                company_name: ""
              },
              currentPage: 1,
              isCollect: !1,
              collectionId: 0,
              isLoading: !1,
              right_float_show: !1,
              nav_top: !1,
              banners: ["https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-01.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-02.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-03.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-04.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-05.jpg", "https://yyker-one-stand.oss-cn-beijing.aliyuncs.com/yimai_photos/user/default-banner-06.jpg"],
              isShow: !0,
              avatarUrl: "",
              isLogin: c.default.returnIsLogin() || !1,
              isShowTalk: !0,
              isShowLoginGuide: !0,
              targetAvatarUrl: "",
              scrollContentHeight: 0,
              mainHeight: 0,
              goodsModellist: []
            }
          },
          onShow: function () {
            if (wx.getStorageSync("phone"))
              if (c.default.returnIsLogin()) {
                this.getProds();
                var e = this.COMPANYID;
                this.COMPANYID = wx.getStorageSync("COMPANYID") || 0, e == this.COMPANYID && this.COMPANYID || (this.getcompany(), this.getAd()), this.isLogin = c.default.returnIsLogin() || !1, this.avatarUrl = wx.getStorageSync("avatarUrl") || ""
              } else wx.switchTab({
                url: "/pages/index/main"
              });
            else wx.switchTab({
              url: "/pages/index/main"
            })
          },
          mounted: function () {
            var e = b(o.default.mark((function e() {
              var t, n;
              return o.default.wrap((function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, i.default.systemIfo();
                  case 2:
                    t = e.sent, n = getApp().globalData.navHeight, this.mainHeight = t.windowHeight, this.scrollContentHeight = t.windowHeight - n;
                  case 6:
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
          computed: y({}, (0, s.mapState)({
            currentCompany: function (e) {
              return e.currentCompany
            }
          }), {}, (0, s.mapGetters)(["subscriptionNew"])),
          watch: {
            currentCompany: {
              deep: !0,
              immediate: !0,
              handler: function (e) {
                e && (e.userId === wx.getStorageSync("userId") ? this.isShowTalk = !1 : (this.isShowTalk = !0, this.targetAvatarUrl = e.logo))
              }
            }
          },
          onShareAppMessage: function (e) {
            var t = wx.getStorageSync("COMPANYID") || 0,
              n = wx.getStorageSync("CARDID") || 0;
            this.addGoodsForwardRecord(n);
            var o = n + "" + (new Date).getTime();
            return (0, u.addShareRecord)(t, 2, t, o).then((function (e) {}), (function (e) {})), {
              imageUrl: this.banners[1] ? this.banners[1] : this.banners[0],
              title: JSON.parse(wx.getStorageSync("CURRENT_COMPANY")).companyName,
              path: "/pages/Product/main?cardId=" + n + "&companyId=" + t + "&goType=1&shareId=" + o,
              success: function (e) {
                wx.showShareMenu({
                  withShareTicket: !0
                })
              },
              fail: function (e) {
                console.log("失败分享名片--- ", e)
              }
            }
          },
          methods: {
            goodsInfo: function (e) {
              var t = e.isAssemble,
                n = e.isKill;
              if (console.log("goodsInfo"), 1 != n) return 1 == t ? (wx.setStorageSync("prod", e), void wx.navigateTo({
                url: "../prodDetail/group?goodId=" + e.goodsId
              })) : void wx.showToast({
                title: "商品规格出错请联系管理员",
                icon: "none"
              });
              this.toProdDetail(e)
            },
            getDecimal: function (e) {
              var t = e;
              return t /= 100, t += "", new Number(t).toFixed(2)
            },
            getPhoneNumber: function () {
              var e = b(o.default.mark((function e(t) {
                return o.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      if (t.target.encryptedData) {
                        e.next = 2;
                        break
                      }
                      return e.abrupt("return");
                    case 2:
                      return this.showShareOrSave = !0, e.next = 5, (0, l.saveServerPhone)({
                        encryptedData: t.target.encryptedData,
                        iv: t.target.iv
                      });
                    case 5:
                      e.sent;
                    case 6:
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
            GeneratePoster: function () {
              wx.navigateTo({
                url: "/pages/showBill/main"
              }), this.showShareOrSave = !1
            },
            goTo: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "appointment/main";
              wx.navigateTo({
                url: "/pages/" + e
              })
            },
            cancelLoginGuide: function () {
              this.isShowLoginGuide = !1
            },
            loginGuide: function () {
              this.isShowLoginGuide = !0
            },
            talk: function () {
              (0, a.authSubscribeMessage)(this.subscriptionNew), wx.navigateTo({
                url: "../IM/main?userId=" + this.currentCompany.userId + "&logo=" + this.currentCompany.logo + "&type=2&cardId=" + this.currentCompany.cardId + "&name=" + this.currentCompany.name + "&wxCode=" + (this.currentCompany.personalWx || "") + "&phone=" + this.currentCompany.phone
              })
            },
            loginSuccess: function (e) {
              this.isLogin = !0, this.hasCard = wx.getStorageSync("hasCard") || !1, this.avatarUrl = wx.getStorageSync("avatarUrl") || ""
            },
            loginFailed: function () {
              this.isShowLoginGuide = !0
            },
            goToList: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              wx.navigateTo({
                url: "../goods/list?typeId=" + e
              })
            },
            preview: function (e) {
              this.previewImages(this.banners, this.banners[e])
            },
            getAd: function () {
              var e = this;
              this.getPlateAds(1).then((function (t) {
                e.banners = t ? t.map((function (e) {
                  return e.photo
                })) : []
              })).catch((function () {
                e.banners = []
              }))
            },
            getcompany: function () {
              var e = this,
                t = this;
              r.default.POST({
                companyId: t.COMPANYID
              }, "", "/goods/getCompanyInfo/V2").then((function (e, n) {
                e && (t.company_msg = {
                  admin_logo: e.userLogo || "",
                  company_logo: e.companyLogo || "",
                  company_name: e.companyName || ""
                }, t.company_msg = {
                  company_logo: e.companyLogo,
                  company_name: e.companyName
                }, t.isCollect = 1 == e.isCollection)
              })).catch((function (t) {
                e.company_msg = {}
              }))
            },
            getProds: function () {
              var e = b(o.default.mark((function e() {
                var t, n, i = this;
                return o.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return this.list = [], e.next = 3, r.default.POST({
                        companyId: wx.getStorageSync("COMPANYID")
                      }, "", "/goods/getNewGoodList");
                    case 3:
                      t = e.sent, n = (new Date).getTime(), this.menu = [{
                        name: "全部",
                        goodstypeId: "-10"
                      }].concat(h(t.goodstypeList)), this.list = t.goodsList, this.goodsModellist = [], t.goodsModellist && t.goodsModellist.map((function (e) {
                        var t = parseInt(new Date(e.end_time).getTime() - n);
                        i.goodsModellist.push(y({}, e, {
                          surplusTime: t,
                          percentage: Math.random() * e.goodsNum / e.goodsNum * 100
                        }))
                      }));
                    case 9:
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
            toProdDetail: function (e) {
              if (1 == e.isAssemble) return wx.setStorageSync("prod", e), void wx.navigateTo({
                url: "../prodDetail/group?goodId=" + e.goodsId
              });
              wx.setStorageSync("prod", e), wx.navigateTo({
                url: "../prodDetail/main?goodId=" + e.goodsId
              })
            },
            collect: function () {
              var e = this;
              if (c.default.returnIsLogin()) {
                if (this.canClickStar) {
                  this.canClickStar = !1;
                  var t = "",
                    n = {};
                  this.isCollect ? (t = "/personal/delCollection", n = {
                    itemType: 3,
                    itemId: this.COMPANYID
                  }) : (t = "/personal/addCollection", n = {
                    itemType: 3,
                    itemId: this.COMPANYID
                  }), r.default.changeCollect(n, t).then((function (t) {
                    console.log(t), t && (e.isCollect = !e.isCollect, wx.showToast({
                      title: e.isCollect ? "收藏成功！" : "取消收藏！",
                      icon: "none",
                      duration: 2e3
                    })), setTimeout((function () {
                      e.canClickStar = !0
                    }), 200)
                  })).catch((function (t) {
                    setTimeout((function () {
                      e.canClickStar = !0
                    }), 200)
                  }))
                }
              } else this.loginGuide()
            }
          }
        };
      t.default = D
    },
    ec50: function (e, t, n) {
      "use strict";
      (function (e) {
        n("6cdc"), n("921b");
        o(n("66fd"));
        var t = o(n("2b8b"));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, n("543d")["createPage"])
    }
  },
  [
    ["ec50", "common/runtime", "common/vendor"]
  ]
]);