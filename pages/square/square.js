// pages/square/square.js
import blendents from '../../utils/colors.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blendents:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({blendents})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  edit: function (e) {
    let colors = e.currentTarget.dataset.colors;
    console.log(e)
    wx.navigateTo({
      url: '../edit/edit?blendent=' + JSON.stringify({colors}),
    })
  }
})