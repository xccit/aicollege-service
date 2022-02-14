// pages/volunteer/volunteer.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        volunteer: []
    },

    /**
     * 初始化志愿活动
     */
    getVolunteerData() {
        // getVolunteer

        var url = app.globalData.httpUrl
        var that = this
        wx.request({
            url: url + "/getVolunteer",
            method: 'get',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                var data = res.data.data;
                that.setData({
                    volunteer: data
                })
            }
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.getVolunteerData();

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