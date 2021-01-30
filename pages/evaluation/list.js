(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/evaluation/list"], {
    3949: function (e, t, n) {
      "use strict";
      var i, a = function () {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        d = [];
      n.d(t, "b", (function () {
        return a
      })), n.d(t, "c", (function () {
        return d
      })), n.d(t, "a", (function () {
        return i
      }))
    },
    4307: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("3949"),
        a = n("e78e");
      for (var d in a) "default" !== d && function (e) {
        n.d(t, e, (function () {
          return a[e]
        }))
      }(d);
      n("8088");
      var p, m = n("f0c5"),
        y = Object(m["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], p);
      t["default"] = y.exports
    },
    "6e26": function (e, t, n) {
      "use strict";
      (function (e) {
        n("6cdc"), n("921b");
        i(n("66fd"));
        var t = i(n("4307"));

        function i(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, n("543d")["createPage"])
    },
    8088: function (e, t, n) {
      "use strict";
      var i = n("c79a"),
        a = n.n(i);
      a.a
    },
    a83a: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = a(n("b775"));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var d = {
        data: function () {
          return {
            sex: 0,
            birthday: "",
            name: "",
            provinceName: "",
            city: "",
            county: "",
            count: 0,
            month: 0,
            year: 0,
            list: [],
            isDisabled: !1,
            age0_3: [{
              id: 1,
              name: "能用木块和积木建造自己的世界",
              type: 4
            }, {
              id: 2,
              name: "能玩简单的角色扮演游戏",
              type: 4
            }, {
              id: 3,
              name: "在散步的时候会发现很多新东西，如：鸭子、狗等",
              type: 3
            }, {
              id: 4,
              name: "能越来越好地掌握一些简单的猜谜游戏，且有目的地玩积木",
              type: 3
            }, {
              id: 5,
              name: "能快速穿上外套",
              type: 5
            }, {
              id: 6,
              name: "能够短暂地用一只脚跳",
              type: 5
            }, {
              id: 7,
              name: "喜欢玩玩押韵，如：背唐诗、三字经、儿歌等",
              type: 2
            }, {
              id: 8,
              name: "喜欢参与大人的对话",
              type: 2
            }, {
              id: 9,
              name: "能认出“旧照片”中的自己",
              type: 1
            }, {
              id: 10,
              name: "跟同伴一起做游戏的时候，能够分辨出男生或女生",
              type: 1
            }, {
              id: 11,
              name: "在行进的汽车中可以安静地被抱着，或在行进中的婴儿车上，可以安静地坐着",
              type: 7
            }, {
              id: 12,
              name: "洗澡时很安静，喜欢不喜欢的表情很轻微（只是微笑或皱眉头）",
              type: 7
            }, {
              id: 13,
              name: "在轻微的伤害下（例如：擦伤、撞伤）仍然保持愉快或安静",
              type: 7
            }, {
              id: 14,
              name: "每次喝牛奶的份量相差很大（相差在500mL以上）",
              type: 6
            }, {
              id: 15,
              name: "每天晚上能在一定的时间入睡（时间相差在半小时以内）",
              type: 7
            }, {
              id: 16,
              name: "开始非常喜欢尝试新游戏",
              type: 4
            }, {
              id: 17,
              name: "能够用各种有趣的想法逗人发笑",
              type: 4
            }, {
              id: 18,
              name: "有时间概念，如：之前、之后",
              type: 3
            }, {
              id: 19,
              name: "很会藏东西，并能找出来",
              type: 3
            }, {
              id: 20,
              name: "很快就学会骑三轮车",
              type: 5
            }, {
              id: 21,
              name: "喜欢快速地上下楼梯",
              type: 5
            }, {
              id: 22,
              name: "发音没有错误",
              type: 2
            }, {
              id: 23,
              name: "能够准确讲述自己的一小段事或故事",
              type: 2
            }, {
              id: 24,
              name: "很快就能找到自己的东西",
              type: 1
            }, {
              id: 25,
              name: "能够快速辨别出形状和颜色",
              type: 1
            }, {
              id: 26,
              name: "在喂食时，身体会动得很厉害（例如：用手抓东西、身体扭动、手脚乱踢）",
              type: 6
            }, {
              id: 27,
              name: "入睡到醒来时，身体躺的位置相同，并没有变换",
              type: 7
            }, {
              id: 28,
              name: "会用自己的玩具做实验",
              type: 4
            }, {
              id: 29,
              name: "喜欢模仿各种行为，且自己能创新",
              type: 4
            }, {
              id: 30,
              name: "理解并记住一些简单的游戏规则",
              type: 3
            }, {
              id: 31,
              name: "知道一些程序，大概知道什么时候会怎样",
              type: 3
            }, {
              id: 32,
              name: "已经能用一只脚站住一会儿或几秒",
              type: 5
            }, {
              id: 33,
              name: "喜欢到处攀爬",
              type: 5
            }, {
              id: 34,
              name: "能快速记忆5-10个词（英文）",
              type: 2
            }, {
              id: 35,
              name: "喜欢参与KTV的活动和唱歌游戏",
              type: 2
            }, {
              id: 36,
              name: "能够仔细观察出池塘中的小鱼",
              type: 1
            }, {
              id: 37,
              name: "喜欢和家人逛街找出指定物品",
              type: 1
            }, {
              id: 38,
              name: "在婴儿可触摸到的范围内的东西，会主动去抓或摸（例如：头发、汤匙、眼镜等）",
              type: 6
            }, {
              id: 39,
              name: "在接受日常生活例行的活动时（例如：剪指甲、梳头发）可以安静地躺着或坐着而不乱动",
              type: 7
            }, {
              id: 40,
              name: "画出来的东西人们能够慢慢辨认出来",
              type: 4
            }, {
              id: 41,
              name: "已经能根据自己的想法重新定义玩具",
              type: 4
            }, {
              id: 42,
              name: "非常仔细的研究自己拿到手的东西",
              type: 3
            }, {
              id: 43,
              name: "自己练习记忆力，如：知道自己的玩具一般会在哪里",
              type: 3
            }, {
              id: 44,
              name: "已经能牵着大人的手走出第一步",
              type: 5
            }, {
              id: 45,
              name: "已经可以用肘爬行或者稳定地匍匐前进",
              type: 5
            }, {
              id: 46,
              name: "喜欢尝试模仿其他会演奏乐器的人，自己也能跟上节奏",
              type: 2
            }, {
              id: 47,
              name: "听出电视机里的歌曲，很快就能跟着学会",
              type: 2
            }, {
              id: 48,
              name: "常常模仿大人的行为方式做事，例如扫地",
              type: 1
            }, {
              id: 49,
              name: "喜欢研究玩具，例如会好奇地研究小乐器",
              type: 1
            }, {
              id: 50,
              name: "对于发出声响的玩具，会有强烈的情绪表现（不论是喜欢或讨厌的表情均可）",
              type: 6
            }, {
              id: 51,
              name: "吃饭不想再吃时，会强烈地抗拒再给予的食物（例如：大声哭闹、嘴巴禁闭、吐出食物或推开奶瓶、汤匙等）",
              type: 6
            }, {
              id: 52,
              name: "每天在相同的时间想要喝奶（时间相差在一个小时以内均算相同时间）",
              type: 7
            }, {
              id: 53,
              name: "每天大便时间不一定（指时间相差在一个小时以上）",
              type: 6
            }, {
              id: 54,
              name: "已经能运用双手双脚来玩耍，即手脚并用",
              type: 4
            }, {
              id: 55,
              name: "能够画出人生中第一批胡乱涂鸦的图画作品",
              type: 4
            }, {
              id: 56,
              name: "开始有些小计划，如：计划吃完饭再去逛超市",
              type: 3
            }, {
              id: 57,
              name: "指到一件物品时，孩子可以迅速地说出物品的名称",
              type: 3
            }, {
              id: 58,
              name: "很快学自己跌倒站起来这个动作",
              type: 5
            }, {
              id: 59,
              name: "吃饭时，很会使用餐具",
              type: 5
            }, {
              id: 60,
              name: "会集中精力倾听大人的对话，如听故事之类的",
              type: 2
            }, {
              id: 61,
              name: "很喜欢模仿别人唱歌，学着哼唱",
              type: 2
            }, {
              id: 62,
              name: "很高兴看到色彩清晰轮廓的大图片",
              type: 1
            }, {
              id: 63,
              name: "知道吵架不一定都是别人的错",
              type: 1
            }, {
              id: 64,
              name: "喂食时，不论是喜欢与不喜欢的食物，脸上或行动表现的反应都是轻微的",
              type: 7
            }, {
              id: 65,
              name: "每天早上醒来的时间差异很大（相差在一个小时以上）",
              type: 6
            }],
            age4_6: [{
              id: "1",
              name: "做事做的不顺利时，会把东西摔在地上，大哭大闹",
              type: "6"
            }, {
              id: "2",
              name: "假日的早上，仍像平常一样按时起床",
              type: "7"
            }, {
              id: "3",
              name: "喜欢用木块和积木建造自己的世界",
              type: "4"
            }, {
              id: "4",
              name: "喜欢玩角色扮演游戏",
              type: "4"
            }, {
              id: "5",
              name: "在散步的时候会发现很多新东西，并且能依顺序说出来，如：鸭子、狗等",
              type: "3"
            }, {
              id: "6",
              name: "喜欢玩一些简单的猜谜游戏，且有目的地玩积木",
              type: "3"
            }, {
              id: "7",
              name: "动一下就会流很多汗，回家后就会快速脱掉外套，或脱掉衣服",
              type: "5"
            }, {
              id: "8",
              name: "能够短暂地用一只脚跳，而且常常练习",
              type: "5"
            }, {
              id: "9",
              name: "喜欢听及玩押韵词，也很快能一字不漏的背出来",
              type: "2"
            }, {
              id: "10",
              name: "喜欢参与大家的讨论",
              type: "2"
            }, {
              id: "11",
              name: "很快的能认出“旧照片”中的自己，或是家中的哪个人",
              type: "1"
            }, {
              id: "12",
              name: "跟同伴一起做游戏的时候，很在意是男孩还是女孩",
              type: "1"
            }, {
              id: "13",
              name: "每天食量不定，有时吃得多，有时吃得少",
              type: "6"
            }, {
              id: "14",
              name: "每天肚子饿的时间不一定",
              type: "6"
            }, {
              id: "15",
              name: "非常喜欢尝试户外的新游戏或游具",
              type: "4"
            }, {
              id: "16",
              name: "能够用各种有趣的想法逗人发笑",
              type: "4"
            }, {
              id: "17",
              name: "有良好的时间概念，如：之前、之后",
              type: "3"
            }, {
              id: "18",
              name: "很会藏东西或是摆放物品",
              type: "3"
            }, {
              id: "19",
              name: "很快就学会骑三轮车，学会后就天天要骑出去玩",
              type: "5"
            }, {
              id: "20",
              name: "喜欢快速地上下楼梯，甚至用跳的",
              type: "5"
            }, {
              id: "21",
              name: "唱歌的发音没有错误，也很准确",
              type: "2"
            }, {
              id: "22",
              name: "能够准确讲述自己今天所发生的经历",
              type: "2"
            }, {
              id: "23",
              name: "很爱惜自己的东西，不愿意把任何自己的东西给别人",
              type: "1"
            }, {
              id: "24",
              name: "不管什么时候都能够快速辨别出积木的形状和颜色",
              type: "1"
            }, {
              id: "25",
              name: "不论在室内或室外活动，常用跑的而少用走的",
              type: "6"
            }, {
              id: "26",
              name: "不能安静地坐着，身体动来动去，定不下来（除了喜欢的电视节目或模仿电视人物动作除外）",
              type: "6"
            }, {
              id: "27",
              name: "会安静地坐着听唱歌，或看电视，或听故事",
              type: "7"
            }, {
              id: "28",
              name: "会用自己的玩具做实验",
              type: "4"
            }, {
              id: "29",
              name: "喜欢模仿各种行为，且自己能创新",
              type: "4"
            }, {
              id: "30",
              name: "对于 一些简单的游戏规则很容易理解并记住",
              type: "3"
            }, {
              id: "31",
              name: "对于一些程序很清楚，例如：大概知道什么时候会怎样，或是电视控制器如何使用",
              type: "3"
            }, {
              id: "32",
              name: "常常玩球并能快速有力地踢进固定位置",
              type: "5"
            }, {
              id: "33",
              name: "喜欢在公园或校园内玩攀爬的器械",
              type: "5"
            }, {
              id: "34",
              name: "能理解200个词以上",
              type: "2"
            }, {
              id: "35",
              name: "喜欢参与歌唱性或者讨论性的游戏，如：唱歌游戏、演说类",
              type: "2"
            }, {
              id: "36",
              name: "能够仔细观察出池塘中的小鱼，并且持续很久",
              type: "1"
            }, {
              id: "37",
              name: "逛街购物时，能够找出家人指定要购买的物品，如：买牙刷、买玩具等",
              type: "1"
            }, {
              id: "38",
              name: "玩具被抢时，只是稍微的抱怨而已",
              type: "7"
            }, {
              id: "39",
              name: "不喜欢穿某件衣服时，会大吵大闹",
              type: "6"
            }, {
              id: "40",
              name: "到户外（公园或游乐场）活动时，他是安静地自己玩",
              type: "7"
            }, {
              id: "41",
              name: "喜欢做些较安静的活动，例如：劳作、看书、看电视等",
              type: "7"
            }, {
              id: "42",
              name: "画出来或创作的物品能够主动向家人说明是什么",
              type: "4"
            }, {
              id: "43",
              name: "已经能根据自己的想法重新定义玩具",
              type: "4"
            }, {
              id: "44",
              name: "喜欢研究自己拿到手的东西，并试着拆解下来",
              type: "3"
            }, {
              id: "45",
              name: "喜欢自己练习记忆力，如：如跟着熟悉的故事说出来",
              type: "3"
            }, {
              id: "46",
              name: "喜欢牵着大人的手走出去玩",
              type: "5"
            }, {
              id: "47",
              name: "对于体能活动，不觉得辛苦，例如：能以肘爬行或者稳定地匍匐前进",
              type: "5"
            }, {
              id: "48",
              name: "喜欢尝试模仿其他会演奏乐器的孩子，自己没事时也会打节拍",
              type: "2"
            }, {
              id: "49",
              name: "能听出电视机里的歌曲，会跟着学唱，说出曲名或是哪个歌手唱的",
              type: "2"
            }, {
              id: "50",
              name: "会协助大人的行为方式做事，有时候自己会做一些事情，如：整理书包、书桌等",
              type: "1"
            }, {
              id: "51",
              name: "喜欢研究玩具到底是怎么回事，例如商场看到小的乐器，会非常好奇地研究一番",
              type: "1"
            }, {
              id: "52",
              name: "和家人一起上街买东西时，如果父母不给买想要的东西（例如：糖果、玩具或衣服），便会大哭大闹",
              type: "6"
            }, {
              id: "53",
              name: "玩得正高兴而被带开始，只是轻微的抗议，哼几声就算了",
              type: "7"
            }, {
              id: "54",
              name: "每天固定时间排便",
              type: "7"
            }, {
              id: "55",
              name: "晚上的睡眠时数不一定，时多时少",
              type: "6"
            }, {
              id: "56",
              name: "常光脚徒手找生活物品来玩耍",
              type: "4"
            }, {
              id: "57",
              name: "喜欢胡乱涂鸦的创作",
              type: "4"
            }, {
              id: "58",
              name: "游戏时，有些小计谋小方法",
              type: "3"
            }, {
              id: "59",
              name: "能一边说出物品的名字，并指出该物品",
              type: "3"
            }, {
              id: "60",
              name: "很快学会打击性的游戏或动作",
              type: "5"
            }, {
              id: "61",
              name: "喜欢用手抓东西吃",
              type: "5"
            }, {
              id: "62",
              name: "会喜欢倾听别人的说话，如听故事",
              type: "2"
            }, {
              id: "63",
              name: "很喜欢别人对着他唱歌，也会跟着哼",
              type: "2"
            }, {
              id: "64",
              name: "很高兴看到色彩清晰轮廓的大图片，例如海报、电视墙等",
              type: "1"
            }, {
              id: "65",
              name: "知道吵架不一定都是别人的错，也能说出自己的错误点",
              type: "1"
            }],
            mind: [{
              type: 1,
              count: 0,
              title: "前额叶"
            }, {
              type: 2,
              count: 0,
              title: "后额叶"
            }, {
              type: 3,
              count: 0,
              title: "颞叶"
            }, {
              type: 4,
              count: 0,
              title: "枕叶"
            }, {
              type: 5,
              count: 0,
              title: "顶叶"
            }, {
              type: 6,
              count: 0,
              title: "动态"
            }, {
              type: 7,
              count: 0,
              title: "静态"
            }],
            wechatQrCode: "",
            scrollTop: 0,
            scrollIntoView: ''
          }
        },
        onLoad: function (e) {
          var t = this,
            n = e.sex,
            i = e.birthday,
            a = e.name,
            d = e.provinceName,
            p = e.city,
            m = e.county;
          this.sex = n, this.birthday = i, this.name = a, this.provinceName = d, this.city = p, this.county = m;
          var y = (new Date).getTime() - new Date(i).getTime(),
            c = y / 864e5,
            o = 0;
          while (c - 365 > 0) c -= 365, o += 1;
          var r = parseInt(c / 30);
          o > 3 ? t.list.push({checked:3,...this.age4_6[0]})
           : t.list.push({...this.age0_3[0],checked:3}), this.month = r, this.year = o, console.log(n, i, a, d, p, m)
        },
        methods: {
          setChecked: function (e, t, n) {
            if(3 === e.checked){
              this.count += 1
              if(n+1<this.age4_6.length || n+1<this.age0_3.length){
                this.year > 3 ? this.list.push({checked:3,...this.age4_6[n+1]})
                : this.list.push({...this.age0_3[n+1],checked:3})
              }
            } 
            e.checked = t, t==1?e.option='是':e.option='否',  this.gotoNext(n)
          },
          gotoNext: function (e) {
            this.scrollIntoView = 'item-'+e
          },
          submit: function () {
            var e, t = this;
            if (!this.isDisabled)
              if (this.isDisabled = !0, e = this.list.length - this.count) {
                this.isDisabled = !1, wx.showToast({
                  title: "剩余".concat(e)
                });
                try {
                  this.list.map((function (e, n) {
                    if (3 === e.checked) throw t.gotoNext(n - 1), new Error("主动抛出异常")
                  }))
                } catch (a) {}
              } else {
                this.list.map((function (e) {
                  6 == e.type || 7 == e.type ? 1 == e.checked ? t.mind[e.type - 1].count += 1 : t.mind[7 == e.type ? 5 : 6].count += 1 : 1 == e.checked && (t.mind[e.type - 1].count += 1)
                }));
                var n = this.mind[5].count - this.mind[6].count;
                i.default.POST({
                  oppenId: wx.getStorageSync("userId"),
                  name: this.name,
                  cardId: wx.getStorageSync("CARDID"),
                  detailedAddress: "123",
                  birthdays: this.birthday,
                  prefrontalLobe: this.mind[0].count,
                  posteriorFrontalLobe: this.mind[1].count,
                  temporalLobe: this.mind[2].count,
                  occipitalLobe: this.mind[3].count,
                  parietalLobe: this.mind[4].count,
                  learningAnalysis: parseInt(n) < 4 ? 3 : n > 0 ? 1 : 2,
                  province: this.provinceName,
                  city: this.city,
                  sex: this.sex,
                  district: this.county
                }, "", "/potentialResult/createPotential").then((function (e) {
                  t.isDisabled = !1;
                  var n = e.wechatQrCode,
                    i = e.resultId,
                    a = t.birthday,
                    d = t.name,
                    p = t.mind[0].count,
                    m = t.mind[1].count,
                    y = t.mind[2].count,
                    c = t.mind[3].count,
                    o = t.mind[4].count,
                    r = t.mind[5].count - t.mind[6].count;
                  r = parseInt(r) < 4 ? 3 : r > 0 ? 1 : 2;
                  var s = new Date,
                    u = s.getFullYear() + "-" + (s.getMonth() + 1) + "-" + s.getDate(),
                    l = "/pages/evaluation/help?" + "&time=".concat(u, "&birthday=").concat(a, "&name=").concat(d, "&prefrontalLobe=").concat(p, "&posteriorFrontalLobe=").concat(m, "&temporalLobe=").concat(y, "&occipitalLobe=").concat(c, "&parietalLobe=").concat(o, "&learningAnalysis=").concat(r, "&qc=").concat(n, "&resultId=").concat(i);
                  wx.navigateTo({
                    url: l
                  })
                }))
              }
          }
        }
      };
      t.default = d
    },
    c79a: function (e, t, n) {},
    e78e: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("a83a"),
        a = n.n(i);
      for (var d in i) "default" !== d && function (e) {
        n.d(t, e, (function () {
          return i[e]
        }))
      }(d);
      t["default"] = a.a
    }
  },
  [
    ["6e26", "common/runtime", "common/vendor"]
  ]
]);