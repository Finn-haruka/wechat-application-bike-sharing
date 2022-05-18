// pages/login2/login2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
},
input_name:function(e){
    this.setData({
      username:e.detail.value
    })
},
input_pwd: function (e) {
    this.setData({
      password: e.detail.value
    })
},
submitButton:function(){
  // console.log("点击按钮!" + "获取到的⽤户名:" + this.data.username + "获取到的密码:" + this.data.password)
  var that = this;
  wx.request({
      url: 'http://localhost:9090/user/login',
      method:'POST',
      // header:{'content-type':'application/x-www-form-urlencoded'},
      data:{
        username: that.data.username,
        password: that.data.password
      },
      success:function(res){
        // console.log(res.data.code)
        var app = getApp();
        var resData = res.data;
        if(resData.code == 200){
          app.globalData.identity = that.data.username;
          app.globalData.pwd = that.data.password;
          app.globalData.status = 2
          wx.navigateTo({
            url: '../user/user',
          })
          wx.showToast({
            title: '登录成功~',
            icon:'success',
            duration:1000,
            mask:true
          })
        }else{
          app.globalData.flag++;
          // console.log(app.globalData.flag);
          if(app.globalData.flag >= 4){
            wx.navigateTo({
              url: '../map/index',
            })
            wx.showModal({
              title:'警告',
              content:'多次登录失败，强制退出！'
            })
          }
          else{
            wx.showToast({
              title: '登录失败！',
              icon:'error',
              duration:1000
            })
          }
      }
    }
  })
},

registerButton:function(){ 
  wx.navigateTo({
    url: '../register/register',
  })
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