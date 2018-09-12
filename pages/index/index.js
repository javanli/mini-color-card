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
    colors: null
  },
  chooseImg: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log('chooseimg', res)
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
            let colorCount = 10;
            let quality = 10;
            this.colorThief.getPalette({
              width,
              height,
              imgPath: res.tempFilePaths[0],
              colorCount,
              quality,
              componentInstance: this
            }, (colors) => {
              console.log('colors', colors);
              colors = colors.map((color) => {
                return rgbToHex(color[0],color[1],color[2])
              })
              this.setData({
                colors
              })
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
  }
})