// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "goods-list": [ 
      {
        "good-name": "",
        "good-image": "",
        "good-sales": 1000,
        "good-price": "1200",
        "good-name-tag":"",
        "good-price-tag": "",
        "good-sales-tag": "",
        "good-shop":"",
      },
      {

      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().setData({active:"home"})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onClickToSearch() {
    wx.navigateTo({url: '../search/search'})
  }
})