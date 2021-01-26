require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')

// App({
//   globalData: {
   
//   },
//   onLaunch: function () {
//     let menuButtonObject = wx.getMenuButtonBoundingClientRect();
//     wx.getSystemInfo({
//       success: res => {
        
//         //导航高度
//         let statusBarHeight = res.statusBarHeight,
//           navTop = menuButtonObject.top,
//           navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
//         this.globalData.navHeight = navHeight;
//         this.globalData.navTop = navTop;
//         this.globalData.windowHeight = res.windowHeight;
//       },
//       fail(err) {
//         console.log(err);
//       }
//     })
//   }
// })
