// pages/classification/classification.ts
import { Post } from "../../utils/request";
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
    const url = 'http://127.0.0.1:8080/category'
    const data = {
      "ClassificationId": id
    }
    return Post(url, data)
  },

  async addAllClassification() {
    const res = await this.getAllClassification()
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
      const categoryRes = await this.getAllCategorysWithClassification(item.id)
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
    const url = 'http://127.0.0.1:8080/classification'
    const data = {}
    return Post(url, data)
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