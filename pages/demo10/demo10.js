const app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   date: '2016-09-01',
   currentTab: 0,
   rankTitle: [{
       title: '销量榜',
     },
     {
       title: '销售额榜',
     },
     {
       title: '签约榜',
     }
   ],
   rankList: [{
     subList: [{
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: 'EOS主网启动直播',
         score: '12131',
       },
     ],
   }, {
     subList: [{
         rank: 1,
         image: '',
         name: '罗威',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: '罗威',
         score: '12131',
       },
     ],
   }, {
     subList: [{
         rank: 1,
         image: '',
         name: '杨峰',
         score: '12131',
       },
       {
         rank: 1,
         image: '',
         name: '杨峰',
         score: '12131',
       },
     ],
   }]
  },


  //日期选择
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换模式
  clickTab: function(e) {
    var that = this;
    if (that.data.currentTab == e.currentTarget.dataset.current){
      return false;
    }else{
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  }   

})