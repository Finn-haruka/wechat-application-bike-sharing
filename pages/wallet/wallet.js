// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  click: function (e) {
    var title,
        data;
    switch(e.target.dataset.name){
      case 'yue':
        title = '余额说明'
        data = '您的余额如上所示。'
        break
      case 'tui':
        title = '我的押金'
        data = '您的押金退款如上所示，如超过7个工作日仍未到账，请联系客服。'
        break
      case 'juan':
        title = '我的优惠卷'
        data = '这是您的优惠卷，可用于支付优惠。'
        break
      case 'guan':
        title = '帮助'
        data = '关于共享单车'
        break
    }
    wx.showModal({
      title: title,
      content: data,
      showCancel: false
    })
  },
  oMoney: function () {
    wx.navigateTo({
      url: '../money/money',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user',
      success: (e) => {
        this.setData({
          num: e.data.num
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
    wx.getStorage({
      key: 'user',
      success: (e) => {
        this.setData({
          num: e.data.num
        })
      }
    })
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