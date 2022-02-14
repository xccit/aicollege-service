package io.xccit.aicollege.controller;

import io.xccit.aicollege.dao.CommodityDao;
import io.xccit.aicollege.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author Xccit
 * 商品操作控制层
 */

@CrossOrigin
@RestController
public class ShopController {

    @Autowired
    ShopService service;

    /**
     * 增加商品信息
     */
    @RequestMapping(value = "/addShop/{openid}",method = RequestMethod.POST)
    public Map<String,Object> addShop(@PathVariable("openid") String userOpenid, @RequestBody CommodityDao commodityDao){
        return service.addShop(userOpenid,commodityDao);
    }

    /**
     * 获取商品列表
     */
    @RequestMapping(value = "/getShopList",method = RequestMethod.GET)
    public Map<String,Object> getShopList(){
        return service.getShopList();
    }

    /**
     * 获取商品信息
     */
    @RequestMapping(value = "/getShopItem/{shopId}",method = {RequestMethod.GET,RequestMethod.POST})
    public Map<String,Object> getShopItem(@PathVariable("shopId") int shopId){
        return service.getShopItem(shopId);
    }
}
