// component/cart-card.ts
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
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})