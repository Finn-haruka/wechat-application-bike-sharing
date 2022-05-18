// pages/navigation/navigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 118.716568,
    latitude: 32.202389,
    scale:16,
    ishow:true
  },

  hx_door: function () {
    this.setData({
      hx_door: true,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_playground: false,
      hx_library: false,
      hx_park: false,
      ishow:false,
      latitude: 32.202389, //经度
      longitude: 118.716568, //纬度
      scale: 15,
      markers: [{
          iconPath: '../../icon/定位.png',
          latitude: 32.205391,
          longitude: 118.726911,
          width: 30,
          height: 30
        },
        {
          iconPath: '../../icon/定位.png',
          latitude: 32.20598,
          longitude: 118.71397,
          width: 30,
          height: 30
        },
        {
          iconPath: '../../icon/定位.png',
          latitude: 32.207468,
          longitude: 118.721208,
          width: 30,
          height: 30
        },
      ]
      })
    },

    hx_canteen: function () {
      this.setData({
        hx_door: false,
        hx_canteen: true,
        hx_supermarket: false,
        hx_teach: false,
        hx_hospital: false,
        hx_playground: false,
        hx_library: false,
        hx_park: false,
        ishow:false,
        latitude: 32.202389, //经度
        longitude: 118.716568, //纬度
        scale: 15,
        markers: [{
            iconPath: '../../icon/定位.png',
            latitude: 32.20245,
            longitude: 118.71641,
            width: 30,
            height: 30
          },
          {
            iconPath: '../../icon/定位.png',
            latitude: 32.204136,
            longitude: 118.706372,
            width: 30,
            height: 30
          },
          {
            iconPath: '../../icon/定位.png',
            latitude: 32.20646,
            longitude: 118.71996,
            width: 30,
            height: 30
          },
          {
            iconPath: '../../icon/定位.png',
            latitude: 32.20472,
            longitude: 118.71652,
            width: 30,
            height: 30
          },

        ]
        })
      },

      hx_supermarket: function () {
        this.setData({
          hx_door: false,
          hx_canteen: false,
          hx_supermarket: true,
          hx_teach: false,
          hx_hospital: false,
          hx_playground: false,
          hx_library: false,
          hx_park: false,
          ishow:false,
          latitude: 32.202389, //经度
          longitude: 118.716568, //纬度
          scale: 15,
          markers: [{
              iconPath: '../../icon/定位.png',
              latitude: 32.201611,
              longitude: 118.716721,
              width: 30,
              height: 30
            },
            {
              iconPath: '../../icon/定位.png',
              latitude: 32.206528,
              longitude: 118.720716,
              width: 30,
              height: 30
            },
            {
              iconPath: '../../icon/定位.png',
              latitude: 32.20378,
              longitude: 118.706669,
              width: 30,
              height: 30
            },
  
          ]
          })
        },
      

  hx_teach: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: true,
      hx_playground: false,
      hx_library: false,
      hx_park: false,
      ishow:false,
      latitude: 32.202389, //经度
      longitude: 118.716568, //纬度
      scale: 15,
      markers: [{
          iconPath: '../../icon/定位.png',
          latitude: 32.20417,
          longitude: 118.7186,
          width: 30,
          height: 30
        },
        {
          iconPath: '../../icon/定位.png',
          latitude: 32.20465,
          longitude: 118.71856,
          width: 30,
          height: 30
        },
        {
          iconPath: '../../icon/定位.png',
          latitude: 32.203793,
          longitude: 118.72162,
          width: 30,
          height: 30
        },
        {
          iconPath: '../../icon/定位.png',
          latitude: 32.202811,
          longitude: 118.724527,
          width: 30,
          height: 30
        },
        {
          iconPath: '../../icon/定位.png',
          latitude: 32.199355,
          longitude: 118.708745,
          width: 30,
          height: 30
        },
        {
          iconPath: '../../icon/定位.png',
          latitude: 32.20179,
          longitude: 118.71104,
          width: 30,
          height: 30
        },

      ]
      })
    },

hx_playground: function () {
  this.setData({
    hx_door: false,
    hx_canteen: false,
    hx_supermarket: false,
    hx_teach: false,
    hx_playground: true,
    hx_library: false,
    hx_park: false,
    ishow:false,
    latitude: 32.202389, //经度
    longitude: 118.716568, //纬度
    scale: 15,
    markers: [{
        iconPath: '../../icon/定位.png',
        latitude: 32.206468,
        longitude:118.724696,
        width: 30,
        height: 30
      }]
    })
  },

  hx_library: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_playground: false,
      hx_library: true,
      hx_park: false,
      ishow:false,
      latitude: 32.202389, //经度
      longitude: 118.716568, //纬度
      scale: 15,
      markers: [{
          iconPath: '../../icon/定位.png',
          latitude: 32.203005,
          longitude: 118.713485,
          width: 30,
          height: 30
        }]
      })
    },

    hx_park: function () {
      this.setData({
        hx_door: false,
        hx_canteen: false,
        hx_supermarket: false,
        hx_teach: false,
        hx_playground: false,
        hx_library: false,
        hx_park: true,
        ishow:false,
        latitude: 32.202389, //经度
        longitude: 118.716568, //纬度
        scale: 15,
        markers: [{
            iconPath: '../../icon/定位.png',
            latitude: 32.205617,
            longitude: 118.724594,
            width: 30,
            height: 30
          },
          {
            iconPath: '../../icon/定位.png',
            latitude: 32.202301,
            longitude: 118.716300,
            width: 30,
            height: 30
          },
          {
            iconPath: '../../icon/定位.png',
            latitude: 32.198898,
            longitude: 118.708017,
            width: 30,
            height: 30
          }
        ]
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

  },

  go: function (e) {
    var id = e.currentTarget.id; //获取id
    switch (id) {
      /*校门*/
      case "door1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 32.205391,
          longitude: 118.726911,
          scale: 25
        })
        break;
      case "door2":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.20598,
            longitude: 118.71397,
            scale: 25
          })
          break;
      case "door3":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.207468,
            longitude: 118.721208,
            scale: 25
          })
          break;
      case "canteen1":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.20245,
            longitude: 118.71641,
            scale: 25
          })
          break;
      case "canteen2":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.204136,
            longitude: 118.706372,
            scale: 25
          })
          break;
      case "canteen3":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.20646,
            longitude: 118.71996,
            scale: 25
          })
          break;
      case "canteen4":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.20472,
            longitude: 118.71652,
            scale: 25
          })
          break;
      case "teach1":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.20417,
            longitude: 118.7186,
            scale: 25
          })
          break;
      case "teach2":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.203793,
            longitude: 118.72162,
            scale: 25
          })
          break;
      case "teach3":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.203793,
            longitude: 118.72162,
            scale: 25
          })
          break;
      case "teach4":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.202811,
            longitude: 118.724527,
            scale: 25
          })
          break;
      case "teach5":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.199355,
            longitude: 118.708745,
            scale: 25
          })
          break;
      case "teach6":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.20179,
            longitude: 118.71104,
            scale: 25
          })
          break;
      case "playground":
          wx.openLocation({ /*使用微信内置地图查看位置*/
            latitude: 32.206468,
            longitude:118.724696,
            scale: 25
          })
          break;
      case "library":
            wx.openLocation({ /*使用微信内置地图查看位置*/
              latitude: 32.203005,
              longitude: 118.713485,
              scale: 25
            })
            break;
        case "supermarket1":
              wx.openLocation({ /*使用微信内置地图查看位置*/
                latitude: 32.201611,
                longitude: 118.716721,
                scale: 25
              })
              break;
          case "supermarket2":
              wx.openLocation({ /*使用微信内置地图查看位置*/
              latitude: 32.206528,
              longitude: 118.720716,
              scale: 25
            })
            break;
          case "supermarket3":
            wx.openLocation({ /*使用微信内置地图查看位置*/
              latitude: 32.20378,
              longitude: 118.706669,
              scale: 25
            })
            break;
          case "park1":
            wx.openLocation({ /*使用微信内置地图查看位置*/
              latitude: 32.205617,
              longitude: 118.724594,  
              scale: 25
            })
            break;
          case "park2":
            wx.openLocation({ /*使用微信内置地图查看位置*/
              latitude: 32.202301,
              longitude: 118.716300,
              scale: 25
            })
            break;
          case "park3":
            wx.openLocation({ /*使用微信内置地图查看位置*/
              latitude: 32.198898,
              longitude: 118.708017,
              scale: 25
            })
            break;
      }
  }
})
