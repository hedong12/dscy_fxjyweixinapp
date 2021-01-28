(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/newEvaluation/simple"], {
    "0438": function (t, e, n) {
      "use strict";
      var i = n("95bb"),
        a = n.n(i);
      a.a
    },
    "0a09": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("4e68"),
        a = n("4032");
      for (var r in a) "default" !== r && function (t) {
        n.d(e, t, (function () {
          return a[t]
        }))
      }(r);
      n("0438");
      var o, c = n("f0c5"),
        u = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], o);
      e["default"] = u.exports
    },
    4032: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("f144"),
        a = n.n(i);
      for (var r in i) "default" !== r && function (t) {
        n.d(e, t, (function () {
          return i[t]
        }))
      }(r);
      e["default"] = a.a
    },
    "4e68": function (t, e, n) {
      "use strict";
      var i, a = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
          t._isMounted || (t.e0 = function (e) {
            t.active > 0 && (t.active -= 1)
          })
        },
        r = [];
      n.d(e, "b", (function () {
        return a
      })), n.d(e, "c", (function () {
        return r
      })), n.d(e, "a", (function () {
        return i
      }))
    },
    "95bb": function (t, e, n) {},
    f144: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var i = n("9ab4"),
        a = i.__importDefault(n("66fd")),
        r = i.__importDefault(n("2fe1")),
        o = i.__importDefault(n("4323")),
        c = i.__importDefault(n("d3da")),
        u = n("7e00");
      n("7e6c");
      var s = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.active = 0, e.select = "", e.qa = o.default, e.qaDialog = [o.default[0]], e.sex = 0, e.birthdays = "", e.name = "", e.province = "", e.city = "", e.county = "", e.month = 0, e.year = 0, e.keys = ["A", "B", "C", "D"], e
        }
        return i.__extends(e, t), e.prototype.onLoad = function (t) {
          
          return i.__awaiter(this, void 0, void 0, (function () {
            var e, n, a, r, o, u, s, f, l, d;
            return i.__generator(this, (function (i) {
              e = t.sex, n = t.birthday, a = t.name, r = t.provinceName, o = t.city, u = t.county, this.sex = e, this.birthdays = n, this.name = a, this.province = r, this.city = o, this.county = u, s = (new Date).getTime() - new Date(n).getTime(), f = s / 864e5, l = 0;
              while (f - 365 > 0) f -= 365, l += 1;
              return d = parseInt(f / 30 + ""), l > 3 && (this.qa = c.default), this.month = d, this.year = l, [2]
            }))
          }))
        }, e.prototype.setHandInPapers = function (te, e, ind) {
          if(this.qaDialog[ind].option == undefined) {
            if(this.active<9) {
              this.active+=1
            }
            if(this.qaDialog.length<10){
              this.qaDialog.push(o.default[ind+1])
            }
          }
          this.$set(this.qaDialog[ind],'option', this.keys[e])
          te.map((function (t) {
            t.active = 0
          })), te[e].active = 1
          var t, e, n, a, r, h, c, s, f, l;
          return t = 0, this.qaDialog[ind].answer.map((function (e) {
            t < e.active && (t = e.active)
          })), t ? 9 !== ind ? [3, 2] : (e = this, n = e.birthdays, a = e.name, r = e.sex, h = e.province, c = e.city, s = e.county, f = [0, 0, 0, 0, 0], this.qa.map((function (t) {
            t.answer.map((function (t) {
              t.active && (f[t.type] += 1)
            }))
          })), [4, u.createPotential({
            name: a,
            birthdays: n,
            sex: r,
            province: h,
            city: c,
            district: s,
            prefrontalLobe: 0,
            posteriorFrontalLobe: f[4],
            temporalLobe: f[2],
            occipitalLobe: f[1],
            parietalLobe: f[3]
          })]) : (wx.showToast({
            title: "请选择答案",
            icon: "none"
          }), [2]);
        }, e.prototype.nextQa = function () {
          return i.__awaiter(this, void 0, void 0, (function () {
            var t, e, n, a, r, o, c, s, f, l;
            return i.__generator(this, (function (i) {
              switch (i.label) {
                case 0:
                  return t = 0, this.qa[this.active].answer.map((function (e) {
                    t < e.active && (t = e.active)
                  })), t ? 9 !== this.active ? [3, 2] : (e = this, n = e.birthdays, a = e.name, r = e.sex, o = e.province, c = e.city, s = e.county, f = [0, 0, 0, 0, 0], this.qa.map((function (t) {
                    t.answer.map((function (t) {
                      t.active && (f[t.type] += 1)
                    }))
                  })), [4, u.createPotential({
                    name: a,
                    birthdays: n,
                    sex: r,
                    province: o,
                    city: c,
                    district: s,
                    prefrontalLobe: 0,
                    posteriorFrontalLobe: f[4],
                    temporalLobe: f[2],
                    occipitalLobe: f[1],
                    parietalLobe: f[3]
                  })]) : (wx.showToast({
                    title: "请选择答案",
                    icon: "none"
                  }), [2]);
                case 1:
                  return l = i.sent(), wx.navigateTo({
                    url: "./help?id=" + l.resultId
                  }), [2];
                case 2:
                  return this.active < 9 && (this.active += 1), [2]
              }
            }))
          }))
        }, e = i.__decorate([r.default], e), e
      }(a.default);
      e.default = s
    },
    f8dd: function (t, e, n) {
      "use strict";
      (function (t) {
        n("6cdc"), n("921b");
        i(n("66fd"));
        var e = i(n("0a09"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    }
  },
  [
    ["f8dd", "common/runtime", "common/vendor"]
  ]
]);