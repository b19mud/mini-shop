// pages/good/good.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guarantee: false,
    starValue: 3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    const {windowHeight} = wx.getSystemInfoSync()
    const pageHeight = windowHeight
    const goodHeight = pageHeight - 50
    this.setData({
      height: pageHeight + "px",
      goodHeight: goodHeight + "px"
    })

    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
    })
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

  onShowGuarantee() {
    this.setData({guarantee: true})
  },

  onCloseShowGuarantee() {
    this.setData({guarantee: false})
  }
})