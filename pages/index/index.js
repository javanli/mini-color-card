//index.js
//获取应用实例
import ColorThief from '../../utils/color-thief.js'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  chooseImg: function() {
    // let ctx = wx.createCanvasContext('imageHandler');
    // console.log('ctx', ctx);
    // ctx.setFillStyle('red')
    // ctx.fillRect(0, 0, 100, 100)
    // // ctx.drawImage(imgPath,0,0,width,height);
    // // ctx.clearRect(0,0,width,height);
    // ctx.draw(false, () => {
    //   console.log('draw end');
    //   wx.canvasGetImageData({
    //     canvasId: 'imageHandler',
    //     x: 0,
    //     y: 0,
    //     width: 100,
    //     height: 100,
    //     success(res) {
    //       console.log('getImgData', res);
    //     }
    //   });
    // });
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(res) => {
        console.log('chooseimg',res)
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: (imgInfo) => {
            console.log('imgInfo', imgInfo);
            let { width, height, imgPath} = imgInfo;
            let colorCount = 5;
            let quality = 10;
            this.colorThief.getPalette({ width, height, imgPath: res.tempFilePaths[0], componentInstance:this},(colors)=>{
              console.log('colors',colors);
            });
          }
        })
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.colorThief = new ColorThief('imageHandler');
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
