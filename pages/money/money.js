// pages/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 0,
    num: 0,
    user: ''
  },
  put: function (e) {
    this.setData({
      num: Number(e.detail.value)
    })
  },
  click: function () {
    if (this.data.num < 1) {
      wx.showModal({
        title: '充值失败',
        content: '请输入正确的金额',
        showCancel: false
      })
    } else {
      var mo = this.data.money + this.data.num
      this.setData({
        money: mo,
      })
      wx.setStorage({
        data: {
          userImg: this.data.user.userImg,
          userName: this.data.user.userName,
          num: this.data.money
        },
        key: 'user',
        success: () => {
          wx.navigateBack({
            delta: 1,
          })
          wx.showToast({
            title: '充值成功',
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user',
      success: (e) => {
        this.setData({
          user: e.data,
          money: e.data.num
        })
      }
    })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})