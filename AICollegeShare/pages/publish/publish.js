// pages/publish/publish.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabList: [{
                id: 0,
                title: "志愿活动"
            },
            {
                id: 1,
                title: "商品"
            }
        ],
        currIndex: 1,
        shopTitle: "",
        shopDescribe: "",
        connection: "",
        imgArr: [],
        uploadImgArr: [],
        vol_info: '',
        vol_name: ''
    },
    vol_nameInput(e) {
        var value = e.detail.value
        this.setData({
            vol_name: value
        })
    },
    vol_infoInput(e) {
        var value = e.detail.value
        this.setData({
            vol_info: value
        })
    },


    submitBox() {

        var loginStatus = app.globalData.userLogin.loginStatus
        if (!loginStatus) {
           return wx.showModal({
                title: '提示',
                content: '请登录后上传信息',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }

        
        var vol_name = this.data.vol_name;
        var vol_info = this.data.vol_info;
        if (vol_name == null || vol_name == "") {
            return wx.showModal({
                title: '提示',
                content: '活动名称不能是空',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }
        if (vol_info == null || vol_info == "") {
            return wx.showModal({
                title: '提示',
                content: '活动信息不能是空',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }
        var openid = app.globalData.userLogin.openid;
        var url = app.globalData.httpUrl;
        wx.request({
            url: url + "/addVolunteer/" + openid,
            method: 'post',
            data: {
                vol_name: vol_name,
                vol_info: vol_info
            },
            header: {
                'Content-Type': 'application/json'
            },
            success(res) {
                var code = res.data.code
                if (code == 0) {
                    wx.showModal({
                        title: '提示',
                        content: '发布成功',
                        showCancel: false,
                        success(res) {
                            that.setData({
                                vol_name: '',
                                vol_info: ''
                            })
                        }
                    })
                }
            }

        })



    },
    chooseImg() {
        var loginStatus = app.globalData.userLogin.loginStatus
        if (!loginStatus) {
            return wx.showModal({
                title: '提示',
                content: '请登录后上传信息',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }



        var that = this
        var img = this.data.imgArr;
        if (this.data.imgArr.length == 9) {
            return wx.showModal({
                title: '警告',
                content: '最多选择9张图',
                showCancel: true,
                success(res) {
                    console.log('用户点击确定')
                }
            })
        }
        wx.showLoading({
            title: '准备上传',
        })
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album'],
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFilePaths

                wx.uploadFile({
                    url: app.globalData.httpUrl + '/uploadImage', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    timeout: 6000,
                    formData: {
                        'file': tempFilePaths[0]
                    },
                    success(res) {
                        const data = res.data
                        var url = JSON.parse(data).url
                        wx.showToast({
                            title: '上传成功！',
                            icon: 'none'
                        })
                        img.push(tempFilePaths)
                        that.setData({
                            imgArr: img
                        })
                        that.data.uploadImgArr.push(app.globalData.httpUrl + "/" + url)
                    },
                    fail(res) {
                        wx.showToast({
                            title: '上传失败',
                            icon: 'none',
                            duration: 100
                        })
                        wx.showModal({
                            title: '失败提示',
                            content: '上传失败' + res.errMsg,
                            showCancel: false,
                            success(res) {
                                console.log("用户点击弹窗的确定按钮")
                            }
                        })
                    }
                })
            },
            fail(res) {
                wx.showToast({
                    title: '取消选择',
                    icon: 'none'
                })
            }
        })
    },

    /**
     * 页面渲染后判断登录情况 
     */
    getUserLoginStatus() {
        var loginStatus = app.globalData.userLogin.loginStatus
        if (!loginStatus) {
            wx.showModal({
                title: '提示',
                content: '请登录后上传信息',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }
    },
    previewImage(e) {
        var index = e.currentTarget.dataset.index;
        var imgArr = this.data.uploadImgArr
        console.log(imgArr[index])
        wx.previewImage({
            current: imgArr[index], // 当前显示图片的http链接
            urls: imgArr // 需要预览的图片http链接列表
        })
    },

    delete(e) {
        var that = this
        wx.showActionSheet({
            itemList: ['删除', '取消'],
            success(res) {
                if (res.tapIndex == 0) {
                    that.deleteImg(e);
                }
            },
            fail(res) {
                console.log(res.errMsg)
            }
        })
    },

    deleteImg(e) {
        var index = e.currentTarget.dataset.index;
        var imgArr = this.data.imgArr
        var imgArred = this.data.uploadImgArr
        var newImgArr = []
        var newImgArred = []
        for (var a = 0; a < imgArr.length; a++) {
            if (a != index) {
                newImgArr.push(imgArr[a])
            }
        }
        for (var a = 0; a < imgArred.length; a++) {
            if (a != index) {
                newImgArred.push(imgArred[a])
            }
        }
        this.setData({
            imgArr: newImgArr,
            uploadImgArr: newImgArred
        })
        console.log(this.data.imgArr)
        console.log(this.data.uploadImgArr)
    },
    submitBtn() {

        var loginStatus = app.globalData.userLogin.loginStatus
        if (!loginStatus) {
            return wx.showModal({
                title: '提示',
                content: '请登录后上传信息',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }


        var shopTitle = this.data.shopTitle
        var shopDescribe = this.data.shopDescribe
        var connection = this.data.connection
        var that = this
        if (shopTitle == null || shopTitle == "") {
            return wx.showModal({
                title: '提示',
                content: '商品标题不能是空',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }
        if (shopDescribe == null || shopDescribe == "") {
            return wx.showModal({
                title: '提示',
                content: '商品描述不能是空',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }
        if (connection == null || connection == "") {
            return wx.showModal({
                title: '提示',
                content: '联系方式不能是空',
                showCancel: false,
                success(res) {
                    console.log("用户点击弹窗的确定按钮")
                }
            })
        }
        var imgUploadArr = this.data.uploadImgArr
        console.log(imgUploadArr)


        var openid = app.globalData.userLogin.openid;
        var url = app.globalData.httpUrl;
        wx.request({
            url: url + "/addShop/" + openid,
            method: 'post',
            data: {
                comm_name: shopTitle,
                comm_info: shopDescribe,
                imgArray: imgUploadArr,
                comm_connectin: connection
            },
            header: {
                'Content-Type': 'application/json'
            },
            success(res) {
                var code = res.data.code
                if (code == 0) {
                    wx.showModal({
                        title: '提示',
                        content: '发布成功',
                        showCancel: false,
                        success(res) {
                            that.setData({
                                shopTitle: '',
                                shopDescribe: '',
                                connection: '',
                                uploadImgArr: [],
                                imgArr: []
                            })
                        }
                    })
                }
            }
        })




    },
    shopTitleBind(e) {
        var value = e.detail.value
        this.setData({
            shopTitle: value
        })
    },
    shopDescribeBind(e) {
        var value = e.detail.value
        this.setData({
            shopDescribe: value
        })

    },
    connectionBind(e) {
        var value = e.detail.value
        this.setData({
            connection: value
        })
    },
    labClick(e) {
        var id = e.target.dataset.id;
        this.setData({
            currIndex: id
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
        this.getUserLoginStatus();
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