package io.xccit.aicollege.service;

import com.alibaba.fastjson.JSON;
import io.xccit.aicollege.config.MiniProgramConfig;
import io.xccit.aicollege.dao.CommodityDao;
import io.xccit.aicollege.dao.ShopCartDao;
import io.xccit.aicollege.dao.UserDao;
import io.xccit.aicollege.mapping.ShopCartInterface;
import io.xccit.aicollege.mapping.UserInfoInterface;
import io.xccit.aicollege.util.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author xccit
 * 用户信息服务层
 */
@Service
public class UserInfoService {
    @Autowired
    UserInfoInterface userInfo;

    @Autowired
    ShopCartInterface cartInterface;

    public Map<String, Object> getOpenid(String code) {
        String appId = MiniProgramConfig.APP_ID;
        String secret = MiniProgramConfig.SECRET;
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appId + "&secret=" + secret + "&js_code=" + code + "&grant_type=authorization_code";
        String jsonData = Request.doGet(url);
        Map<String, String> parse = (Map) JSON.parse(jsonData);
        String openid = parse.get("openid");
        Map<String, Object> resMap = new HashMap<>();
        resMap.put("code", MiniProgramConfig.OK_CODE);
        resMap.put("msg", MiniProgramConfig.OK_MSG);
        resMap.put("openid", openid);
        return resMap;
    }

    public Map<String, Object> userLogin(UserDao userDao) {
        Map<String, Object> map = new HashMap<>();
        String openId = userDao.getOpen_id();
        String s = userInfo.checkUserByOpenid(openId);
        String regitTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        userDao.setUser_id(0);
        userDao.setRegiter_time(regitTime);
        if (s == null) {
            int i = userInfo.addUserInfo(userDao);
            if (i != 0) {
                map.put("code", MiniProgramConfig.OK_CODE);
                map.put("msg", MiniProgramConfig.OK_MSG);
                return map;
            }
            map.put("code", MiniProgramConfig.ERR_CODE);
            map.put("msg", MiniProgramConfig.ERR_MSG);
            return map;
        }
        int i = userInfo.updateUserInfoByOpenid(userDao);
        if (i != 0) {
            map.put("code", MiniProgramConfig.OK_CODE);
            map.put("msg", MiniProgramConfig.OK_MSG);
            return map;
        }
        map.put("code", MiniProgramConfig.ERR_CODE);
        map.put("msg", MiniProgramConfig.ERR_MSG);
        return map;
    }

    public Map<String, Object> querypublish(String openid) {
        int userid = userInfo.getUserIdByOpenid(openid);
        List<CommodityDao> userPublish = userInfo.getUserPublish(userid);
        List<Map<String, Object>> mapList = new ArrayList<>();
        Map<String, Object> resMap = new HashMap<>();
        for (CommodityDao publish : userPublish) {
            Map<String, Object> map = new HashMap<>();
            map.put("commId", publish.getComm_id());
            map.put("commName", publish.getComm_name());
            map.put("commInfo", publish.getComm_info());
            String s = publish.getComm_image().split(";")[0];
            map.put("commImage", s);
            map.put("commConnectin", publish.getComm_connectin());
            mapList.add(map);
        }
        resMap.put("code", MiniProgramConfig.OK_MSG);
        resMap.put("msg", MiniProgramConfig.OK_MSG);
        resMap.put("data", mapList);
        return resMap;
    }

    public Map<String, Object> addShopCart(String openid, int shopId) {
        Map<String, Object> resMap = new HashMap<>();
        int userid = userInfo.getUserIdByOpenid(openid);
        int count = cartInterface.checkChopCart(userid, shopId);
        if (count >= 1) {
            resMap.put("code", MiniProgramConfig.OK_CODE);
            resMap.put("msg", MiniProgramConfig.OK_MSG);
            return resMap;
        }
        ShopCartDao cartDao = new ShopCartDao();
        cartDao.setShopcart_id(0);
        cartDao.setUser_id(userid);
        cartDao.setComm_id(shopId);
        int i = cartInterface.addShopInShopCart(cartDao);
        if (i == 0) {
            resMap.put("code", MiniProgramConfig.ERR_CODE);
            resMap.put("msg", MiniProgramConfig.ERR_MSG);
            return resMap;
        }
        resMap.put("code", MiniProgramConfig.OK_CODE);
        resMap.put("msg", MiniProgramConfig.OK_MSG);
        return resMap;
    }

    public Map<String, Object> getCart(String openid) {
        Map<String, Object> resMap = new HashMap<>();
        if (openid == null || openid == "") {
            resMap.put("code", MiniProgramConfig.ERR_CODE);
            resMap.put("msg", MiniProgramConfig.ERR_MSG + "：用户身份错误");
            return resMap;
        }
        int userid = userInfo.getUserIdByOpenid(openid);
        List<CommodityDao> shopCart = cartInterface.getShopCart(userid);
        List<Map<String, Object>> data = new ArrayList<>();
        for (CommodityDao commodityDao : shopCart) {
            Map<String, Object> map = new HashMap<>();
            String[] split = commodityDao.getComm_image().split(";");
            commodityDao.setComm_image(split[0]);
            map.put("shopName", commodityDao.getComm_name());
            map.put("shopInfo", commodityDao.getComm_info());
            map.put("image", commodityDao.getComm_image());
            map.put("shopId", commodityDao.getComm_id());
            data.add(map);
        }
        resMap.put("code", MiniProgramConfig.OK_CODE);
        resMap.put("msg", MiniProgramConfig.OK_MSG);
        resMap.put("data", data);
        return resMap;
    }

    public Map<String, Object> deleteShopCart(String openid, int shopid) {
        Map<String, Object> map = new HashMap<>();
        int userid = userInfo.getUserIdByOpenid(openid);
        int i = cartInterface.delteShopCartDataById(userid, shopid);
        if (i != 0) {
            map.put("code", MiniProgramConfig.OK_CODE);
            map.put("msg", MiniProgramConfig.OK_MSG);
            return map;
        }
        map.put("code", MiniProgramConfig.ERR_CODE);
        map.put("msg", MiniProgramConfig.ERR_MSG);
        return map;
    }
}
