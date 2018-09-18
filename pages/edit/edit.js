// pages/edit/edit.js
import {
  hexToRgb
} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blendent:{},
    selected:0,
    r:100,
    g:0,
    b:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let blendent = JSON.parse(options.blendent);
    let rgb = hexToRgb(blendent.colors[0]);
    let {r,g,b} = rgb;
    this.setData({
      blendent,r,g,b
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideTabBar({
      animation:false
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.showTabBar({
      animation: false
    })
  },
  onColorSelected: function(e) {
    console.log(e)
    let selected = e.target.dataset.index;
    let rgb = hexToRgb(this.data.blendent.colors[selected]);
    let { r, g, b } = rgb;
    console.log(rgb)
    this.setData({
      selected,r,g,b
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChange:function(value) {
    console.log(value)
  }
})