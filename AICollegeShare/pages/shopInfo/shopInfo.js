// pages/shopInfo/shopInfo.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopId: '',
        title: '',
        imgArr: [],
        info: '',
        commodityList: [],
        shopConnection: ''
    },

    /**
     * 加入购物车
     */
    addCart(){
        // user/addShopCart/{openid}/{shopId}
        var openid = app.globalData.userLogin.openid
        var shopId = this.data.shopId
        var url = app.globalData.httpUrl
        var that = this
        wx.request({
            url: url + "/user/addShopCart/"+openid+"/"+shopId,
            method: 'get',
            header: {
                //设置参数内容类型为x-www-form-urlencoded
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                var data = res.data;
                if(data.code==0){
                    wx.showToast({
                        title:'加入成功！',
                        icon:'none'
                    })
                }
            }
        })

    },

    /**
     * 联系卖家
     */
    connection() {
        var data = this.data.shopConnection
        wx.showModal({
            title: '提示',
            confirmText: '复制信息',
            content: data,
            showCancel: true,
            success(res) {
                if (res.confirm) {
                    wx.setClipboardData({
                        data: data, //要复制的数据
                        success(res) {
                            console.log(res)
                        }
                    })

                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var id = options.id
        this.setData({
            shopId: id
        })
        console.log(id)
        this.getShopInfo(id)
        this.getIndexShopList()
    },

    shopInfo(e) {
        var id = e.currentTarget.dataset.id
        var datas = {
            id: id
        }
        this.onLoad(datas)
    },

    /**
     * 获取商品信息
     */

    getShopInfo(id) {
        var url = app.globalData.httpUrl
        var that = this
        wx.request({
            url: url + "/getShopItem/" + id,
            method: 'get',
            header: {
                //设置参数内容类型为x-www-form-urlencoded
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                var data = res.data.data;
                console.log(data)
                that.setData({
                    title: data.shopName,
                    imgArr: data.images,
                    info: data.comm_info,
                    userName: data.userName,
                    userId: data.userId,
                    shopConnection: data.connectin,
                })
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