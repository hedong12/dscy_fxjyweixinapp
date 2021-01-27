// components/custom-notice.js
var app = getApp()
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    
  },
  /**
   * 组件的属性列表
   */
  properties: {
    goodType: {
      type: String
    },
    alreadyBuy: {
      type: Boolean
    },
    goodData: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    system: app.globalData.system
  },
  ready: function () { 
    var that = this;
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _tozlDetail:function(e){
      var id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/zlDetail/zlDetail?id=' + id,
      })
    },
    _toaudioDetail: function (e) {
      var id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/audioDetail/audioDetail?id=' + id,
      })
    },
    _tovideoDetail: function (e) {
      var id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/videoDetail/videoDetail?id=' + id,
      })
    }
  }
})
