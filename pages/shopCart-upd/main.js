(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/shopCart/main"], {
    "0593": function (t, o, n) {
      "use strict";
      (function (t) {
        n("6cdc"), n("921b");
        e(n("66fd"));
        var o = e(n("9259")); 

        function e(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(o.default)
      }).call(this, n("543d")["createPage"])
    },
    "56d4": function (t, o, n) {
      "use strict";
      var e = n("787d"),
        a = n.n(e);
      a.a
    },
    "5f74": function (t, o, n) {
      "use strict";
      n.r(o);
      var e = n("df9c"),
        a = n.n(e);
      for (var l in e) "default" !== l && function (t) {
        n.d(o, t, (function () {
          return e[t]
        }))
      }(l);
      o["default"] = a.a
    },
    "787d": function (t, o, n) {},
    9259: function (t, o, n) {
      "use strict";
      n.r(o);
      var e = n("bf31"),
        a = n("5f74");
      for (var l in a) "default" !== l && function (t) {
        n.d(o, t, (function () {
          return a[t]
        }))
      }(l);
      n("56d4");
      var i, r = n("f0c5"),
        c = Object(r["a"])(a["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], i);
      o["default"] = c.exports
    },
    bf31: function (t, o, n) {
      "use strict";
      var e, a = function () {
          var t = this,
            o = t.$createElement;
          t._self._c
        },
        l = [];
      n.d(o, "b", (function () {
        return a
      })), n.d(o, "c", (function () {
        return l
      })), n.d(o, "a", (function () {
        return e
      }))
    },
    df9c: function (t, o, n) {
      "use strict";
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0;
      var e = l(n("a34a")),
        a = l(n("b775"));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function i(t, o, n, e, a, l, i) {
        try {
          var r = t[l](i),
            c = r.value
        } catch (s) {
          return void n(s)
        }
        r.done ? o(c) : Promise.resolve(c).then(e, a)
      }

      function r(t) {
        return function () {
          var o = this,
            n = arguments;
          return new Promise((function (e, a) {
            var l = t.apply(o, n);

            function r(t) {
              i(l, e, a, r, c, "next", t)
            }

            function c(t) {
              i(l, e, a, r, c, "throw", t)
            }
            r(void 0)
          }))
        }
      }
      var c = function () {
          n.e("components/orderItem").then(function () {
            return resolve(n("018d"))
          }.bind(null, n)).catch(n.oe)
        },
        s = function () {
          n.e("components/noData").then(function () {
            return resolve(n("6a2b"))
          }.bind(null, n)).catch(n.oe)
        },
        u = {
          name: "",
          components: {
            OrderItem: c,
            NoData: s
          },
          data: function () {
            return {
              canChangeShopCartNum: !0,
              choose_total_money: "0.00",
              choose_total_num: "0",
              cart_total: "0",
              isdel: !1,
              cart_lists: [],
              labels: [{
                company: !1,
                prod: []
              }],
              label_all: !1
            }
          },
          onLoad: function () {
            this.inits()
          },
          onPullDownRefresh: function () {
            var t = r(e.default.mark((function t() {
              return e.default.wrap((function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    this.inits(), setTimeout((function () {
                      wx.stopPullDownRefresh()
                    }), 1e3);
                  case 2:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })));

            function o() {
              return t.apply(this, arguments)
            }
            return o
          }(),
          methods: {
            inits: function () {
              var t = this,
                o = this;
              this.cart_total = 0, o.cart_lists = [], a.default.POST({
                page: 1,
                pageSize: 999
              }, "", "/orders/selectShopcart").then((function (n) {
                console.log("shopcart -- ", n), o.labels = [], n ? (n.forEach((function (t, n) {
                  o.labels.push({
                    company: !1,
                    prod: []
                  }), t.shopcartModelList.forEach((function (t, e) {
                    t.isKill && (t.killPrice = t.killPrice / 100), t.price = t.price / 100, o.labels[n].prod.push(!1), o.cart_total++
                  }))
                })), o.cart_lists = n) : o.cart_lists = [], o.label_all = !0, t.choose_all("all")
              })).catch((function (t) {
                o.cart_lists = []
              }))
            },
            delOrder: function(event,o){
              var _this = this
              console.log(_this)
              const { position } = event.detail;
              switch (position) {
                case 'left':
                case 'cell':
                  instance.close();
                  break;
                case 'right':
                  wx.showLoading()
                  a.default.POST({
                    shopCartIds: o
                  }, "", "/orders/delShopcart").then((function (t) {
                    wx.hideLoading(), t && _this.inits()
                  })).catch((function (t) {
                    wx.hideLoading()
                  }))
                  break;
              }
            },
            prodChangeNum: function (t, o, n) {
              var e = this;
              if (this.canChangeShopCartNum) {
                this.canChangeShopCartNum = !1;
                var l = this.cart_lists[t].shopcartModelList[o].num;
                if (1 === l && -1 == n) return wx.showToast({
                  title: "不能再少了！",
                  icon: "none"
                }), void(this.canChangeShopCartNum = !0);
                wx.showLoading(), a.default.POST({
                  shopCartId: this.cart_lists[t].shopcartModelList[o].shopCartId,
                  num: l + n
                }, "", "/orders/updShopcartNum").then((function (a) {
                  if (wx.hideLoading(), a) {
                    e.$set(e.cart_lists[t].shopcartModelList[o], "num", e.cart_lists[t].shopcartModelList[o].num + n);
                    var l = JSON.parse(JSON.stringify(e.cart_lists));
                    e.$set(e, "cart_lists", []), setTimeout((function () {
                      e.$set(e, "cart_lists", l), e.total_money(), e.canChangeShopCartNum = !0
                    }), 20)
                  } else e.canChangeShopCartNum = !0
                })).catch((function (t) {
                  e.canChangeShopCartNum = !0, wx.hideLoading()
                }))
              }
            },
            choose_order: function (t, o, n) {
              var e = this;
              if ("company" == t) {
                var a = this.labels[o].company,
                  l = !0;
                a && (l = !1), e.$set(this.labels[o], "company", l), e.labels[o].prod.forEach((function (t, n) {
                  e.$set(e.labels[o].prod, n, l)
                }))
              } else if ("prod" == t) {
                var i = e.labels[o].prod[n],
                  r = 0;
                e.$set(e.labels[o].prod, n, !i), e.labels[o].prod.forEach((function (t, o) {
                  t && r++
                })), r === e.labels[o].prod.length ? e.$set(e.labels[o], "company", !0) : e.$set(e.labels[o], "company", !1)
              }
              this.choose_all()
            },
            choose_all: function (t) {
              var o = this;
              if ("all" === t) {
                var n = o.label_all;
                console.log("old_status---", n), o.label_all ? o.labels.forEach((function (t, n) {
                  o.$set(o.labels[n], "company", !1), t.prod.forEach((function (t, e) {
                    o.$set(o.labels[n].prod, e, !1)
                  }))
                })) : o.labels.forEach((function (t, n) {
                  o.$set(o.labels[n], "company", !0), t.prod.forEach((function (t, e) {
                    o.$set(o.labels[n].prod, e, !0)
                  }))
                })), o.label_all = !o.label_all
              } else {
                var e = 0;
                o.labels.forEach((function (t, o) {
                  t.company && e++
                })), e === o.labels.length ? o.label_all = !0 : o.label_all = !1
              }
              o.total_money()
            },
            total_money: function () {
              var t = this,
                o = 0,
                n = 0;
              t.labels.forEach((function (e, a) {
                e.prod.forEach((function (e, l) {
                  if (1 == e) {
                    var i = t.cart_lists[a].shopcartModelList[l];
                    i.isKill ? o += i.killPrice * i.num : o += i.price * i.num, n++
                  }
                }))
              })), t.choose_total_money = o.toFixed(2), console.log(t.choose_total_money), t.choose_total_num = n
            },
            todel: function () {
              this.isdel = !this.isdel
            },
            delCart: function () {
              var t = [],
                o = this;
              o.labels.forEach((function (n, e) {
                n.prod.forEach((function (n, a) {
                  n && t.push(o.cart_lists[e].shopcartModelList[a].shopCartId)
                }))
              })), 0 != t.length ? (wx.showLoading(), a.default.POST({
                shopCartIds: t.join(",")
              }, "", "/orders/delShopcart").then((function (t) {
                wx.hideLoading(), t && o.inits()
              })).catch((function (t) {
                wx.hideLoading()
              }))) : wx.showToast({
                title: "请选择要删除的商品！",
                icon: "none"
              })
            },
            checkOneCompany: function () {
              var t = this.labels.filter((function (t) {
                return t.prod.filter((function (t) {
                  return t
                })).length
              }));
              return t.length <= 1
            },
            toPay: function () {
              var t = [],
                o = this,
                n = {};
              o.labels.forEach((function (e, a) {
                e.prod.forEach((function (e, l) {
                  if (e) {
                    n = JSON.parse(JSON.stringify(o.cart_lists[a]));
                    var i = JSON.parse(JSON.stringify(o.cart_lists[a].shopcartModelList[l]));
                    i.allPrice = i.isKill ? i.killPrice * i.num : i.price * i.num, t.push(i)
                  }
                }))
              })), 0 != t.length ? this.checkOneCompany() ? (n.shopcartModelList = [].concat(t), n.allNum = 0, n.shopcartModelList.forEach((function (t) {
                n.allNum += t.num
              })), n.orderPrice = t.reduce((function (t, o) {
                return {
                  allPrice: t.allPrice + o.allPrice
                }
              })).allPrice, n.orderPrice = n.orderPrice.toFixed(2), wx.setStorageSync("orderInfo", [n]), wx.navigateTo({
                url: "../orderConfirm/main"
              })) : wx.showToast({
                title: "只能选择同一公司商品下单~!",
                icon: "none"
              }) : wx.showToast({
                title: "请选择要结算的商品！",
                icon: "none"
              })
            },
            toDetail: function (t, o) {
              wx.navigateTo({
                url: "../prodDetail/main?goodId=" + t + "&cardId=" + o
              })
            },
            toCollect: function () {
              var t = [],
                o = this;
              o.labels.forEach((function (n, e) {
                n.prod.forEach((function (n, a) {
                  n && t.push(o.cart_lists[e].shopcartModelList[a].goodsId)
                }))
              })), 0 != t.length ? (wx.showLoading(), a.default.POST({
                itemIds: t.join(","),
                itemType: 1
              }, "", "/orders/shopAddCollection").then((function (t) {
                wx.hideLoading(), t && wx.showToast({
                  title: "收藏成功！",
                  icon: "success"
                })
              })).catch((function (t) {
                wx.hideLoading()
              }))) : wx.showToast({
                title: "请选择要收藏的商品！",
                icon: "none"
              })
            }
          }
        };
      o.default = u
    }
  },
  [
    ["0593", "common/runtime", "common/vendor"]
  ]
]);