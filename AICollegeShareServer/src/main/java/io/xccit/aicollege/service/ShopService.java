package io.xccit.aicollege.service;

import io.xccit.aicollege.config.MiniProgramConfig;
import io.xccit.aicollege.dao.CommodityDao;
import io.xccit.aicollege.mapping.ShopInterface;
import io.xccit.aicollege.mapping.UserInfoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author xccit
 * 商品信息服务层
 */
@Service
public class ShopService {

    @Autowired
    ShopInterface shopInterface;

    @Autowired
    UserInfoInterface userInfoInterface;

    public Map<String, Object> addShop(String userOpenid, CommodityDao commodityDao) {
        int userId = userInfoInterface.getUserIdByOpenid(userOpenid);
        StringBuilder sb = new StringBuilder();
        List<String> imgArray = commodityDao.getImgArray();
        for (String s : imgArray) {
            sb.append(s).append(";");
        }
        commodityDao.setComm_image(new String(sb));
        commodityDao.setComm_publishmen(Integer.toString(userId));
        int i = shopInterface.addShop(commodityDao);
        Map<String, Object> map = new HashMap<>();
        if (i != 0) {
            map.put("code", MiniProgramConfig.OK_CODE);
            map.put("msg", MiniProgramConfig.OK_MSG);
            return map;
        }
        map.put("code", MiniProgramConfig.ERR_CODE);
        map.put("msg", MiniProgramConfig.ERR_MSG);
        return map;
    }

    public Map<String, Object> getShopItem(int shopId) {
        CommodityDao shopInfo = shopInterface.getShopInfo(shopId);
        Map<String, Object> resMap = new HashMap<>();
        Map<String, Object> dataMap = new HashMap<>();
        dataMap.put("userId", shopInfo.getUser_id());
        dataMap.put("userName", shopInfo.getUser_name());
        dataMap.put("shopId", shopInfo.getComm_id());
        dataMap.put("shopName", shopInfo.getComm_name());
        dataMap.put("comm_info", shopInfo.getComm_info());
        dataMap.put("connectin", shopInfo.getComm_connectin());
        String[] split = shopInfo.getComm_image().split(";");
        List<String> list = new ArrayList<>();
        for (String s : split) {
            list.add(s);
        }
        dataMap.put("images", split);
        resMap.put("code", MiniProgramConfig.OK_CODE);
        resMap.put("msg",MiniProgramConfig.OK_MSG);
        resMap.put("data",dataMap);
        return resMap;
    }

    public Map<String, Object> getShopList() {
        List<CommodityDao> shopList = shopInterface.getShopList();
        List<Map<String,Object>> dataList = new ArrayList<>();
        Map<String, Object> resMap = new HashMap<>();
        for (CommodityDao commodityDao : shopList) {
            Map<String, Object> map = new HashMap<>();
            String[] split = commodityDao.getComm_image().split(";");
            commodityDao.setComm_image(split[0]);
            map.put("shopName",commodityDao.getComm_name());
            map.put("shopInfo",commodityDao.getComm_info());
            map.put("image",commodityDao.getComm_image());
            map.put("shopId",commodityDao.getComm_id());
            dataList.add(map);
        }
        resMap.put("code",MiniProgramConfig.OK_CODE);
        resMap.put("msg",MiniProgramConfig.OK_MSG);
        resMap.put("data",dataList);
        return resMap;
    }
}
