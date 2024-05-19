// pages/classification/classification.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    mainActiveIndex: 0,
    activeId: 0,
    rightdata: [],
    infos: {
      0: [
        {
          name:"电脑配件"
        },
        {
          name:"手机配件"
        },
        {
          name:"椅子"
        },
        {
          name:"桌子"
        },
        {
          name:"凳子"
        }
      ],
      1: [
        {
          name:"北方水果"
        },
        {
          name:"南方水果"
        },
        {
          name:"东方水果"
        },
        {
          name:"西方水果"
        }
      ],
      2: [

      ]
    }
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
    this.getTabBar().setData({active:"classification"})

    // todo 获取分类信息
    this.getAllClassification()

    let mainActiveIndex = this.data.mainActiveIndex;

    // todo 获取该index的详细分类
    //this.setData({rightdata : this.data.infos[mainActiveIndex]})
    console.log(this.data.items)
    for (let item of this.data.items) {
      this.getAllCategorysWithClassification(item.id)
    }
  },

  getAllCategorysWithClassification(id) {
    wx.request({
      url: 'http://127.0.0.1:8080/category',
      method: "POST",
      data: {
        "ClassificationId": id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)
        this.setData({})
      },
      fail (res) {
        console.log(res.data)
      }
    })
  },

  getAllClassification() {
    wx.request({
        url: 'http://127.0.0.1:8080/classification',
        method: "POST",
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (response) => {
          let classificatioins = response.data.ClassificationList
          let itemDatas = []
          for (let item of classificatioins) {
            itemDatas.push({
              id: item.Id,
              text: item.GoodsClassificationName
            })
          }
          this.setData({items: itemDatas})
        }
    })
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

  onClickNav({ detail = {} }) {
    console.log(detail)
    console.log(this.data.infos)
    this.setData({rightdata : this.data.infos[detail.index]})
    this.setData({mainActiveIndex: detail.index || 0})
  },

  onClickItem({ detail = {} }) {
    console.log(222)
  }
})