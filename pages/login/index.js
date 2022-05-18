// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg: '',
    userName: '',
    welcome1: 'disp',
    welcome2: 'disp'
  },

  goToIndex:function(){
    wx.navigateTo({
      url: '../map/index',
    })
  },

  bindgetuserinfo(e) {
    this.setData({
      welcome2: 'disp',
      welcome1: 'welcome',
      userImg: e.detail.userInfo.avatarUrl,
      userName: e.detail.userInfo.nickName
    })
    wx.setStorage({
      data: {
        userImg: e.detail.userInfo.avatarUrl,
        userName: e.detail.userInfo.nickName,
        num: 0
      },
      key: 'user',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (data) => {
              this.setData({
                welcome1: 'welcome',
                userImg: data.userInfo.avatarUrl,
                userName: data.userInfo.nickName
              })
            }
          })
        } else {
          this.setData({
            welcome2: 'welcome'
          })
        }
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