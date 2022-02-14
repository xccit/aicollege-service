var app = getApp()
Page({
  data: {
    barImg: [
      '/images/wwzyxy.jpg'
    ],
    swipImg: [{
        url: '/images/swipper/swip1.jpg'
      },
      {
        url: '/images/swipper/swip2.jpg'
      },
      {
        url: '/images/swipper/swip3.jpg'
      },
      {
        url: '/images/swipper/swip4.jpg'
      }
    ],
    //最新商品列表 每次发送请求后查询数据库中按时间倒序排序最上面三条数据
    commodityList: []
  },
  itemClick: function (e) {
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
        // 'content-type' :'multipart/form-data'
      },
      success(res) {
        var data = res.data.data;
        that.setData({
          commodityList: data
        })
      }
    })
  },
  onLoad: function (options) {
    this.getIndexShopList();
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
    this.getIndexShopList();
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
    this.onLoad();
    wx.stopPullDownRefresh();
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