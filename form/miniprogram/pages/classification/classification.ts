// pages/classification/classification.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
        text:"日用百货",
        english: "",
      },
      {
        text:"水果生鲜",
        english: "fruit"
      },
      {
        text:"食品酒水"
      },
      {
        text:"美妆个护"
      },
      {
        text:"服饰鞋包"
      },
      {
        text:"母婴用品"
      }
    ],
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
    let mainActiveIndex = this.data.mainActiveIndex;
    this.setData({rightdata : this.data.infos[mainActiveIndex]})
    
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