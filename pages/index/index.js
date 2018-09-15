//index.js
//获取应用实例
import ColorThief from '../../utils/color-thief.js'
import {
  rgbToHex
} from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    imgPath: null,
    colors: ['#F00','#0F0','#00F'],
    imgInfo: {},
    colorCount: 5
  },
  chooseImg: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          imgPath: res.tempFilePaths[0]
        })
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: (imgInfo) => {
            console.log('imgInfo', imgInfo);
            let {
              width,
              height,
              imgPath
            } = imgInfo;
            let scale = 0.8*this.screenWidth/Math.max(width,height);
            let canvasWidth = Math.floor(scale * width);
            let canvasHeight = Math.floor(scale * height);
            this.setData({
              imgInfo,
              canvasScale:scale,
              canvasWidth,
              canvasHeight
            });
            let quality = 1;
            console.log(quality);
            this.colorThief.getPalette({
              width:canvasWidth,
              height: canvasHeight,
              imgPath: res.tempFilePaths[0],
              colorCount:this.data.colorCount,
              quality
            }, (colors) => {
              console.log('colors', colors);
              if (colors) {
                colors = colors.map((color) => {
                  return ('#' + rgbToHex(color[0], color[1], color[2]))
                })
                this.setData({
                  colors
                })
              }
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
  onLoad: function() {
    this.colorThief = new ColorThief('imageHandler');
    wx.getSystemInfo({
      success:({screenWidth})=>{
        this.screenWidth = screenWidth;
      }
    })
  },
  save: function() {

  },
  edit: function() {
    // wx.navigateTo({
    //   url: 'pages/',
    // })
  }
})