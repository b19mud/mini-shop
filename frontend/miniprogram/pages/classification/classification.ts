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
    infos: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // todo 获取分类信息
    this.addAllClassification()
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
    console.log(this.data.rightdata)
  },

  getAllCategorysWithClassification(id) {
    console.log(5)
    return new Promise((resolve, rejact)=>{
      wx.request({
        url: 'http://127.0.0.1:8080/category',
        method: "POST",
        data: {
          "ClassificationId": id
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          resolve(res)
          // console.log(res.data)
          // let info_data = this.data.infos
          // let categorys = []
          // for (let item of res.data.CategoryList) {
          //   categorys.push({
          //     name: item.GoodsCategoryName
          //   })
          // }
          // info_data[id] = categorys
          // this.setData({infos:info_data})
        },
        fail (err) {
          rejact(err)
        }
      })
    })
  },

  async addAllClassification() {
    console.log(1)
    const res = await this.getAllClassification()
    console.log(3)
    let classificatioins = res.data.ClassificationList
    let itemDatas = []
    for (let item of classificatioins) {
      itemDatas.push({
        id: item.Id,
        text: item.GoodsClassificationName
      })
    }
    this.setData({items: itemDatas})

    for (let item of this.data.items) {
      console.log(4)
      const categoryRes = await this.getAllCategorysWithClassification(item.id)
      console.log(6)
      let info_data = this.data.infos
      let categorys = []
      for (let item of categoryRes.data.CategoryList) {
        categorys.push({
          name: item.GoodsCategoryName
        })
      }
      info_data[item.id] = categorys
      this.setData({infos:info_data})
    }
    let mainActiveIndex = this.data.mainActiveIndex;
    this.setData({rightdata : this.data.infos[mainActiveIndex+1]})
  },

  getAllClassification() {
    console.log(2)
    return new Promise((resolve, rejact)=>{
      wx.request({
        url: 'http://127.0.0.1:8080/classification',
        method: "POST",
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (response) {
          resolve(response)
        },
        fail (err) {
          rejact(err)
        }
      })
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
    this.setData({rightdata : this.data.infos[detail.index+1]})
    this.setData({mainActiveIndex: detail.index || 0})
  },

  onClickItem({ detail = {} }) {
    console.log(222)
  }
})