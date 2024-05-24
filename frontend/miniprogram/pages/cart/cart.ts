// pages/mall/cart/cart.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    goodsInfo : [
      {//店铺层
        shopName: "1号店铺",
        goods: [
          //商品层
          {
            id: 1,
            title: "蓝月亮洗衣液",
            describe: "",
            goodsCount: 1,
            goodsPrice: 12.80,
            goodsPic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0915ba5-9d3a-4077-90f2-572aec9e0bb3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912701&t=bbc71926f2e11f03f5c2ea139e791a01"
          },
          {
            id: 2,
            title: "黄月亮洗衣液",
            describe: "",
            goodsCount: 1,
            goodsPrice: 12.80,
            goodsPic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0915ba5-9d3a-4077-90f2-572aec9e0bb3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912701&t=bbc71926f2e11f03f5c2ea139e791a01"
          }
        ]
      },
      {
        shopName: "2号店铺",
        goods: [
          {
            id: 3,
            title: "太子洗发水",
            describe: "",
            goodsCount: 5,
            goodsPrice: 13.50,
            goodsPic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0915ba5-9d3a-4077-90f2-572aec9e0bb3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912701&t=bbc71926f2e11f03f5c2ea139e791a01"
          }
        ]
      },
      {
        shopName: "妮妮号店铺",
        goods: [
          {
            id: 4,
            title: "尼康Z9二代",
            describe: "",
            goodsCount: 7,
            goodsPrice: 14.00,
            goodsPic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0915ba5-9d3a-4077-90f2-572aec9e0bb3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912701&t=bbc71926f2e11f03f5c2ea139e791a01"
          }
        ]
      },
      {
        shopName: "测试提交",
        goods: [
          {
            id: 5,
            title: "佳能500定焦镜头",
            describe: "",
            goodsCount: 10,
            goodsPrice: 15.50,
            goodsPic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0915ba5-9d3a-4077-90f2-572aec9e0bb3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912701&t=bbc71926f2e11f03f5c2ea139e791a01"
          }
        ]
      },
      {
        shopName: "程序代写",
        goods :[
          {
            id:6,
            title: "小程序服务",
            describe: "",
            goodsCount: 2,
            goodsPrice: 20.00,
            goodsPic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0915ba5-9d3a-4077-90f2-572aec9e0bb3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707912701&t=bbc71926f2e11f03f5c2ea139e791a01"
          }
        ]
      }
    ]
  },

  onAllSelect(event) {
    this.setData({
      checked: event.detail,
    });
    // todo 全选所有购物车数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const {windowHeight} = wx.getSystemInfoSync()
    const tabBarHeight = 50
    const pageHeight = windowHeight - tabBarHeight
    const cartHeight = pageHeight - 50
    this.setData({
      height: pageHeight + "px",
      cartHeight: cartHeight + "px"
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
    this.getTabBar().setData({active:"cart"})
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

  getAllCartInfos() {
  },

  increaseQuantity(event) {
    console.log(event.currentTarget.dataset.goodid)
  },

  decreaseQuantity(event) {
    console.log(event.currentTarget.dataset.goodid)
    let goodid = event.currentTarget.dataset.goodid
  }

})