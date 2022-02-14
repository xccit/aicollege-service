package io.xccit.aicollege.controller;

import io.xccit.aicollege.dao.UserDao;
import io.xccit.aicollege.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author xccit
 * 用户信息控制层
 */
@CrossOrigin
@RestController
public class UserInfoController {

    @Autowired
    UserInfoService userInfo;

    /**
     * 根目录
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String get() {
        return "666";
    }

    /**
     * 用户登录 换openid
     */
    @RequestMapping(value = "/getOpenid/{code}", method = RequestMethod.GET)
    public Map<String, Object> getOpenid(@PathVariable("code") String code) {
        return userInfo.getOpenid(code);
    }

    /**
     * 用户登录
     */
    @RequestMapping(value = "/userLogin",method = RequestMethod.POST)
    public Map<String,Object> userLogin(@RequestBody UserDao userDao){
        return userInfo.userLogin(userDao);
    }

    /**
     * 查询自己的已发布
     */
    @RequestMapping(value = "/user/querypublish/{openid}",method = RequestMethod.GET)
    public Map<String,Object> querypublish(@PathVariable("openid") String openid){
        return userInfo.querypublish(openid);
    }

    /**
     * 加入购物车
     */
    @RequestMapping(value = "/user/addShopCart/{openid}/{shopId}",method = RequestMethod.GET)
    public Map<String,Object> addShopCart(@PathVariable("openid") String openid,@PathVariable("shopId") int shopId) {
        return userInfo.addShopCart(openid,shopId);
    }

    /**
     * 获取购物车的数据
     */
    @RequestMapping(value = "/get/cart/{openid}",method = RequestMethod.GET)
    public Map<String,Object> getCart(@PathVariable("openid") String openid){
        return  userInfo.getCart(openid);
    }

    /**
     * 删除购物车的东西
     */
    @RequestMapping(value = "/shopCart/delete/{openid}/{shopid}",method = RequestMethod.GET)
    public Map<String,Object> deleteShopCartId(@PathVariable("openid") String openid,@PathVariable("shopid") int shopid){
        return userInfo.deleteShopCart(openid,shopid);
    }
}
