// pages/mine/mine.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginStaus: false,
    loginCode: "",
    userInfo: {},
    commodityList: []
  },
  MinePublish() {
    var loginStatus = app.globalData.userLogin.loginStatus
    if (!loginStatus) {
      return wx.showModal({
        title: '提示',
        showCancel: false,
        content: '用户未登录',
        success(res) {
         
        }
      })
    }
    wx.navigateTo({
      url: '../MinePublish/MinePublish',
    })
  },
  shopItem(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../shopInfo/shopInfo?id=' + id,
    })
  },
  /**
   * 获取数据
   */
  getIndexShopList() {
    var url = app.globalData.httpUrl
    var that = this
    wx.request({
      url: url + "/getShopList",
      method: 'get',
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        var data = res.data.data;
        that.setData({
          commodityList: data
        })
      }
    })
  },
  userLogin() {
    var that = this
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        that.setData({
          userInfo: res.userInfo,
          loginStaus: true
        })
        that.postUserInfo(res.userInfo);
      },
      fail(res) {
        wx.showModal({
          title: '失败提示',
          content: '用户拒绝' + res.errMsg,
          showCancel: false,
          success(res) {
            console.log("用户点击弹窗的确定按钮")
          }
        })

      },
    })
  },

  /**
   * 
   * 上传用户信息
   */
  postUserInfo(userInfo) {
    console.log(userInfo)
    var openid = app.globalData.userLogin.openid;
    var url = app.globalData.httpUrl;
    wx.request({
      url: url + "/userLogin",
      method: 'post',
      data: {
        open_id: openid,
        user_name: userInfo.nickName,
        user_iconurl: userInfo.avatarUrl
      },
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'Content-Type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        app.globalData.userLogin.loginStatus = true
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 检查登录状态
    wx.checkSession({
      success() {
        console.log("登录未过期")
      },
      fail() {
        console.log("登录过期,已经重新登录")
        that.userLogin()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    this.getIndexShopList()
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