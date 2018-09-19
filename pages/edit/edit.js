// pages/edit/edit.js
import {
  hexToRgb,
  rgbToHex,
  saveBlendent
} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blendent: {},
    selected: 0,
    r: 100,
    g: 0,
    b: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let blendent = JSON.parse(options.blendent);
    let rgb = hexToRgb(blendent.colors[0]);
    let {
      r,
      g,
      b
    } = rgb;
    this.setData({
      blendent,
      r,
      g,
      b
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.hideTabBar({
      animation: false
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    wx.showTabBar({
      animation: false
    })
  },
  onColorSelected: function(e) {
    console.log(e)
    let selected = e.target.dataset.index;
    let rgb = hexToRgb(this.data.blendent.colors[selected]);
    let {
      r,
      g,
      b
    } = rgb;
    console.log(rgb)
    this.setData({
      selected,
      r,
      g,
      b
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onChange: function(e) {
    let colorType = e.target.dataset.type;
    let num = Math.floor(e.detail / 100 * 255);
    this.data[colorType] = num;
    let {
      r,
      g,
      b,
      blendent,
      selected
    } = this.data;
    let hex = rgbToHex(r, g, b);
    blendent.colors[selected] = '#' + hex;
    this.setData({
      blendent,
      r,
      g,
      b
    });
  },
  save: function () {
    let {blendent} = this.data;
    saveBlendent(blendent);
  },
  copy: function () {
    wx.setClipboardData({
      data: JSON.stringify(this.data.blendent.colors),
      success: function (res) {
        wx.showToast({
          title: '颜色复制成功',
          icon: 'success'
        })
      }
    })
  }
})