// pages/reserve/reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav:1,
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['请选择车辆','10010','10011','10012','10013','10014'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    selectData1: ['请选择车辆','10015','10016','10017','10018','10019'],//下拉列表的数据
    selectData2: ['请选择车辆','10020','10021','10022','10023','10024'],//下拉列表的数据
    backNo:[],
  },
    /* 把点击到的某一项 设为当前curNav */
  switchRightTab:function(e){
    let id = e.target.dataset.id;
    // console.log(id);
    this.setData({
    curNav: id
    })
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(Index);
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
    // console.log(this.data.selectData[Index])
  },


  submitButton:function(){
    // console.log("点击按钮!" + "获取到的⽤户名:" + this.data.username + "获取到的密码:" + this.data.password)
    var that = this;
    var app = getApp();
    var name = app.globalData.identity;
    var pwd = app.globalData.pwd;
    if(app.globalData.status == 2){
      wx.request({
        url: 'http://localhost:8082/bike/reserve',
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        data:{
          bikeNo: that.data.selectData[that.data.index],
          bikeNo1: that.data.selectData1[that.data.index],
          bikeNo2: that.data.selectData2[that.data.index],
          num: that.data.curNav
        },
        success:function(res){
          console.log(res.data);
          if(res.data == false){
            // wx.request({
            //   url: 'http://localhost:9090/user/reservation',
            //   method:'POST',
            //   data:{
            //     username:name,
            //     reservation:0
            //   }
            // })
            wx.showToast({
              title: '该车无法预约',
              duration: 2000,
              icon: 'error'
            })
          }else{
            if(that.data.curNav == 1){
              app.globalData.num = that.data.selectData[that.data.index]
            }
            else if(that.data.curNav == 2){
              app.globalData.num = that.data.selectData1[that.data.index]
            }
            else if(that.data.curNav == 3){
              app.globalData.num = that.data.selectData2[that.data.index]
            }
            console.log(app.globalData.num)
            wx.showLoading({
              title: '提交中',
              mask: true
            })
            wx.navigateTo({
              url: '../map/index',
            })
            wx.showToast({
              title: '预约成功',
              duration: 2000,
              icon: 'success'
            })
          }
        }
      })
    }
    else{
      wx.showToast({
        title: '您尚未登录',
        duration: 2000,
        icon: 'error'
      })
    }
    
  },

  searchButton5:function(){
    var app = getApp();
    wx.showModal({
      title:'取消',
      content:'确认取消预约吗？',
      success:function(res){
        if(res.confirm){
          wx.request({
            url: 'http://localhost:8082/bike/cancelReserve',
            method:'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            data:{
              bikeNo:app.globalData.num
            },
            success:function(res){
              if(res.data == true){
                wx.showToast({
                  title: '取消预约成功',
                  duration: 2000,
                  icon: 'success'
                })
              }
              else{
                wx.showToast({
                  title: '取消预约失败',
                  duration: 2000,
                  icon: 'error'
                })
              }
            }
          })
        }
        else{
          console.log("取消")
        }
      }
    })
  },

  searchButton1:function(){
    // console.log("点击按钮!" + "获取到的⽤户名:" + this.data.username + "获取到的密码:" + this.data.password)
    var temp = [],title,i=0;
    // console.log(that.data.selectData[(Number)(that.data.index)+(Number)(that.data.curNav-1)*6]);
    wx.request({
        url: 'http://localhost:8082/bike/unReserve',
        method:'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success:function(res){
          console.log(res.data)
          for(i;res.data[i]!=null;i++){
            temp[i] = res.data[i].bikeNo;
          }
          title = '已租车辆',
          wx.showModal({
            title: title,
            content: '当前已租用单车车牌号为：'+String(temp),
            showCancel: false
          })
        }
    })
  },
  searchButton3:function(){
    var temp = [],title,i=0;
    wx.request({
        url: 'http://localhost:8082/bike/broken',
        method:'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success:function(res){
          console.log(res.data)
          for(i;res.data[i]!=null;i++){
            temp[i] = res.data[i].bikeNo;
          }
          title = '损坏车辆',
          wx.showModal({
            title: title,
            content: '当前已损坏单车车牌号为：'+String(temp),
            showCancel: false
          })
        }
    })
  },

  searchButton4:function(){
    var temp = [],title,i=0;
    wx.request({
        url: 'http://localhost:8082/bike/reserving',
        method:'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success:function(res){
          console.log(res.data)
          for(i;res.data[i]!=null;i++){
            temp[i] = res.data[i].bikeNo;
          }
          title = '已约车辆',
          wx.showModal({
            title: title,
            content: '当前已预约单车车牌号为：'+String(temp),
            showCancel: false
          })
        }
    })
  },

  searchButton2:function(){
    var that = this;
    var i = 0;
    var temp = [];
    var title,data;
    wx.request({
        url: 'http://localhost:8082/bike/canReserve',
        method:'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success:function(res){
          for(i;res.data[i]!=null;i++){
            temp[i] = res.data[i].bikeNo;
          }
          console.log(temp);
          that.setData({
            backNo : temp
          })
          title = '空闲车辆',
          wx.showModal({
            title: title,
            content: '当前可租用单车车牌号为：'+String(temp),
            showCancel: false
          })
        }
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