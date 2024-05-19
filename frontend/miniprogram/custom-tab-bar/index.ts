Component({
  options: {
    styleIsolation: "shared"
  },
  data: {
      active: 'home',
      map : {
        "cart": {
          text: 'cart',
          url: '../cart/cart'
        },
        "user": {
          text: 'user',
          url: '../user/user'
        },
        "home": {
          text: 'home',
          url: '../home/home'
        },
        "classification": {
          text: "classification",
          url: '../classification/classification'
        }
      },
  },

  methods: {
      onChange(event) {
          this.setData({ active: event.detail });
          wx.switchTab({
              url: this.data.map[event.detail].url,
              success: function(res) {
              },
              fail: function(res) {
                console.log(res)
              }
          });
      },
  },

  attached:function(){
    // 组件生命周期函数，在组件实例进入页面节点树时执行。
    this.setData({active:"home"})
},
});