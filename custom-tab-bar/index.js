Component({
  data: {
    color: "#333",
    selectedColor: "#177568",
    backgroundColor: "#ACDED3",
    list: [
      {
        pagePath: "/pages/index/main",
        text: "首页",
        iconPath: "/static/tabs/computer.png",
        selectedIconPath: "/static/tabs/computer.png"
      },
      {
        pagePath: "/pages/Product/main",
        text: "教育生活圈",
        iconPath: "/static/tabs/appointment.png",
        selectedIconPath: "/static/tabs/appointment.png"
      },
      {
        pagePath: "/pages/video/main",
        bulge:true,
		text: "短视频",
		navigationStyle: "custom",
        iconPath: "/static/tabs/prod_select.png",
        selectedIconPath: "/static/tabs/prod_select.png"
      },
      {
        pagePath: "/pages/Dynamic/main",
        text: "新鲜事",
		navigationStyle: "custom",
        iconPath: "/static/tabs/browser.png",
        selectedIconPath: "/static/tabs/browser.png"
      },
      {
        pagePath: "/pages/usercenter/main",
        text: " 我的",
        iconPath: "/static/tabs/user.png",
        selectedIconPath: "/static/tabs/user.png"
      }
    ],
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})