App({
    // 全局变量
    globalData: {
        userLogin: {
            code: '',
            openid:'',
            loginStatus:false
        },
        httpUrl: 'http://localhost:8080'
    },

    // 生命周期钩子
    onLaunch: function (options) {
        var that = this
        wx.login({
            timeout: 1000 * 6,
            success(res) {
                console.log(res)
                that.globalData.userLogin.code = res.code
                that.getUserInfo(res.code);
            },
            fail(res) {
                console.log("登录失败", res)
                wx.showToast({
                    title: '登录失败',
                    icon: 'none'
                })
            }
        })
    },
    // 请求后端换取用户数据
    getUserInfo(code) {
        var that = this
        var url = this.globalData.httpUrl + "/getOpenid/"+code;
        wx.request({
            url: url,
            method: 'get',
            header: {
                //设置参数内容类型为x-www-form-urlencoded
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                console.log(res.data)
                that.globalData.userLogin.openid = res.data.openid
            }
        })
    }
})