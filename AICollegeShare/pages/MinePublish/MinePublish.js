// pages/MinePublish/MinePublish.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topbar: [
            "已发布",
            "已参加",
            "已购买",
            "建议",
        ],
        currindex: 0,
        publish: []
    },
    itemClick: function (e) {
        var id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: '../shopInfo/shopInfo?id=' + id,
        })
    },
    clickItem(e) {
        var id = e.currentTarget.dataset.index
        this.setData({
            currindex: id
        })
    },


    /**
     * 检查登录状态
     */
    checkLogin() {
        var loginStatus = app.globalData.userLogin.loginStatus
        if (!loginStatus) {
            return wx.showModal({
                title: '提示',
                showCancel: false,
                content: '用户未登录',
                success(res) {
                    wx.navigateBack({
                        delta: 1,
                    })
                }
            })
        }
        this.getPublish()
    },

    /**
     * 已发布的数据加载
     */
    getPublish() {
        var that = this
        var openid = app.globalData.userLogin.openid
        var url = app.globalData.httpUrl + "/user/querypublish/" + openid;
        console.log(url)
        wx.request({
            url: url,
            method: 'get',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                var data = res.data
                console.log(data)
                that.setData({
                    publish: data.data
                })
            }
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.checkLogin()
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