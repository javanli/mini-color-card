// pages/self/self.js
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let data = wx.getStorageSync('colors');
    wx.getStorage({
      key: 'colors',
      success: (res) => {
        console.log(res)
        this.setData({
          blendents: res.data
        })

      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  edit: function(e) {
    console.log(e)
    let blendent = e.currentTarget.dataset.blendent;
    wx.navigateTo({
      url: '../edit/edit?blendent=' + JSON.stringify(blendent),
    })
  }
})