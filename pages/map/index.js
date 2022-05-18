// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude: 0,
    timer: "undefined",
    markers: []
  },

  click(e) {
    var that = this;
    var value = e.target.id;
    switch (value) {
      case "1":
        wx.navigateTo({
          url: '../navigation/navigation',
        })
        break;
      
      //使用按钮
      case "2":
        if (this.data.timer == 'undefined' || this.data.timer == undefined) {
          wx.scanCode({
            onlyFromCamera: false,
            success: (data) => {
              wx.showLoading({
                title: '获取密码中',
                mask: true
              })
              var value = {
                name: data.result.split('&')[0].split(':')[1],
                pass: data.result.split('&')[1].split(':')[1]
              }
              wx.request({
                timeout: 6000,
                url: 'localhost:9090/user/login',
                success: (data) => {
                  var password = data.data.data.password
                  wx.hideLoading()
                  wx.redirectTo({
                    url: "../login2/login2?password=" + password + "&name=" + value.name,
                    success: () => {
                      wx.showToast({
                        title: '获取成功',
                      })
                    }
                  })
                },
                fail: () => {
                  wx.hideLoading()
                  wx.showModal({
                    title: '提示',
                    content: '密码获取失败',
                    confirmColor: '#000000',
                    showCancel: false
                  })
                }
              })
            }
          })
        } else {
          wx.navigateBack({
            delta: 1
          })
        }
        break;

      case "3":
        wx.navigateTo({
          url: '../fault/fault',
        })
        break;

      case "4":
        var status = getApp().globalData.status;
        if(status == 0){
          wx.navigateTo({
          url: '../login2/login2',
         })
        }
        else if(status == 2){
          wx.navigateTo({
            url: '../user/user',
           })
        }
        break;
      
      case "7":
        wx.navigateTo({
          // url: '../reservation/reservation',
          url:'../reserve/reserve',
        })
        break;

      case "6":
        //获取已有车辆
        var bikes = that.data.markers;
        var app = getApp();
        var title,content;
        if(app.globalData.identity != 'admin'){
          title='提示'
          content='抱歉，您无权添加车辆！'
          wx.showModal({
            title: title,
            content: content,
            showCancel: false
          })
        }
        else{
          //获取到移动后的位置中心点
          this.mapCtx = wx.createMapContext('myMap', this); 
          this.mapCtx.getCenterLocation({
            success: function(res){
              var log = res.longitude;
              var lat = res.latitude;

              // bikes.push(
              //   {
              //     iconPath:"/icon/car.png",
              //     width:35,
              //     height:40,
              //     longitude:log,
              //     latitude:lat
              //   }
              // )
              //重新赋值
              // that.setData({
              //   markers: bikes
              // })
              //发送请求，将添加的单车数据发送到后台Springboot
              wx.request({
                url: "http://localhost:8082/bike/add",
                data:{
                  longitude:log,
                  latitude:lat,
                  bikeNo:10000,
                  status:0
                },
                method:'POST',
                success:function(res){
                  findBikes(log,lat,that)
                }
              })
            }
          })
        }
        break;

    }
  },
/**
   * 移动视野变化触发
   */
  // regionchange:function(e){
  //   var that = this;
  //   //获取移动后的位置
  //   var etype = e.type;
  //   this.mapCtx = wx.createMapContext('myMap', this); 
  //   if(etype == 'end'){
  //     this.mapCtx.getCenterLocation({
  //       success: function(res){
  //         that.setData({
  //           longitude:res.longitude,
  //           latitude:res.latitude
  //         })
  //       }
  //     })
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   this.mapdata = wx.createMapContext('myMap');
  //   this.setData({
  //     timer: options.timer
  //   })
  //   wx.getLocation({
  //     success: (data) => {
  //       this.setData({
  //         longitude: data.longitude,
  //         latitude: data.latitude
  //       })
  //       //查找单车
  //       findBikes(long, lat, that)
  //     },
  //   })
  // },
  onLoad :function() {
    var that = this;
    wx.getLocation({ 
      success : function(res) {
        var longitude = res.longitude
        var latitude = res.latitude
        that.setData({ 
          longitude : longitude,
          latitude : latitude
        })
        findBikes(longitude,latitude,that)
      }, 
    });
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

function findBikes(longitude, latitude, that){
  wx.request({
    url: 'http://localhost:8082/bike/findNear',
    method:"GET",
    data:{
      longitude:longitude,
      latitude:latitude
    },
    success:function(res){
      // console.log(res)
      var bikes = res.data.map((bike)=>{
        return {
          iconPath:"/icon/自行车.png", 
          width:35,
          height:40,
          longitude:bike.longitude,
          latitude:bike.latitude,
          id : bike.id
        }
      })
      that.setData({
        markers:bikes
      })
    }
  })
}
