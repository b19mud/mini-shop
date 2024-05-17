// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMoreData: true,
    loading: false,
    datalist: [
      {
        goodImage: "https://img.yzcdn.cn/vant/cat.jpeg",
        goodShop: "二狗的店铺",
        goodPrice: "100",
      },
      {
        goodImage: "https://img.yzcdn.cn/vant/cat.jpeg",
        goodShop: "二狗的店铺",
        goodPrice: "100",
      }
    ],
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
  onReachBottom: function () {
  },

  checkLoadMoreData: function (event) {
    if (!this.data.hasMoreData) {
      // todo 设置底部元素
      return
    }
    if (this.data.loading || this.data.datalist.length >= 10) {
      return
    }
    this.loadMoreData()
  },

  loadMoreData: function() {
    console.log("loadMoreData")
    this.setData({loading: true})
    // todo 渲染数据
    let newDataList = this.loadNextPostList()
    if (newDataList.length == 0) {
        this.setData({hasMoreData: false})
    } else {
      let oldList = this.data.datalist || []
      let dataList = oldList.concat(newDataList as any)
      this.setData({datalist: dataList})
    }
    this.setData({loading: false})
  },

  loadNextPostList: function() {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        goodPrice: this.data.datalist.length + i + 1,
        goodShop: "Name " + (this.data.datalist.length + i + 1),
        goodImage: "https://img.yzcdn.cn/vant/cat.jpeg",
      });
    }
    return data;
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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onClickToSearch() {
    wx.navigateTo({url: '../search/search'})
  }
})