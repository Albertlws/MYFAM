
Page({
  config:{
    usingComponents: {
      'wxc-avatar': '@minui/wxc-avatar'
    }
  },
  data: {
    userInfo: {},
    sizeObj: 111,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    itemsList:[
      {
        text: "保險產品",
        "size": 30,
        icon: "/images/bank.png",
        url: ""
      },
      {
        text: "保單管理",
        "size": 30,
        icon: "/images/wechat.png",
        url: ""
      }


    ],

    customerList:[
      {
        text: "客服",
        "size": 30,
        icon: "/images/bank.png",
        url: ""
      },
      {
        text: "更新資料",
        "size": 30,
        icon: "/images/wechat.png",
        url: ""
      }


    ]
  },
  
  onLoad() {
   
  },
  
})
