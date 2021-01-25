// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	num:1000,
	
  },
  // 输入框的input事件的执行逻辑
  handleInput(e){
	  //console.log(e.detail.value);
	  this.setData({
	  	num:e.detail.value
	  })
  },
  // 加 减 按钮时间
  handletap(e){
	  //console.log(e);
	  const operation = e.currentTarget.dataset.operation;
	  this.setData({
	  	num: this.data.num + operation
	  })
	  
	  
  }
})