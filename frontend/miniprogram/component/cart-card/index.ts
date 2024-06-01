// component/cart-card.ts
import Toast from '@vant/weapp/toast/toast';

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: String,
      value: '1'
    },
    price: {
      type: String,
      value: '0'
    },
    title: {
      type: String,
      value: "测试标题"
    },
    desc: {
      type: String,
      value: '0'
    },
    currency: {
      type: String,
      value: '0'
    },
    spec: {
      type: String,
      value: '测试规格'
    },
    tag: {
      type: String,
      value: '0'
    },
    tags: {
      type: Array<String>,
      value: []
    },
    thumb_link: {
      type: String,
      value: ''
    },
    thumb: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPop: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShowPop: function() {
      this.setData({ showPop: true });
    },

    onClosePop: function() {
      this.setData({ showPop: false });
    },

    onNavigateToGoodDetail: function(event) {
      wx.navigateTo({
        url: '../good/good',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        }
      })
    }
    
  }
})