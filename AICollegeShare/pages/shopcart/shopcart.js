// pages/shopcart/shopcart.js
var app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cartData: ''
    },
    deleteShopItem(e) {
        var id = e.currentTarget.dataset.index
        var url = app.globalData.httpUrl
        var openid = app.globalData.userLogin.openid
        var that = this
        wx.showModal({
            title: '提示',
            content: '确定要删除这个商品吗？',
            success(res) {
                if (res.confirm) {
                    wx.request({
                        url: url + "/shopCart/delete/" + openid + "/" + id,
                        method: 'get',
                        header: {
                            //设置参数内容类型为x-www-form-urlencoded
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        success(res) {
                            var data = res.data;
                            if (data.code != 0) {
                                return wx.showToast({
                                    title: '删除失败',
                                    icon: 'error'
                                })
                            }
                            wx.showToast({
                                title: '删除成功'
                            })
                            that.getCartData();
                        }
                    })

                } else if (res.cancel) {

                }
            }
        })
    },
    clickItem(e) {
        var id = e.currentTarget.dataset.index
        wx.navigateTo({
            url: '../shopInfo/shopInfo?id=' + id,
        })
    },
    checkLoginStatus() {
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
        this.getCartData();
    },
    /**
     * 初始化数据
     */
    getCartData() {
        // get/cart/
        var url = app.globalData.httpUrl
        var openid = app.globalData.userLogin.openid
        var that = this
        wx.request({
            url: url + "/get/cart/" + openid,
            method: 'get',
            header: {
                //设置参数内容类型为x-www-form-urlencoded
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                var data = res.data.data;
                that.setData({
                    cartData: data
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
        this.checkLoginStatus();
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