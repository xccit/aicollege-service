package io.xccit.aicollege.mapping;

import io.xccit.aicollege.dao.CommodityDao;
import io.xccit.aicollege.dao.ShopCartDao;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author Xccit
 *购物车Mapper
 */
@Mapper
public interface ShopCartInterface {
    /**
     * 添加购物车
     */
    int addShopInShopCart(ShopCartDao cartDao);

    /**
     * 查询重复商品
     */
    int checkChopCart(int userId,int shopId);

    /**
     * 查询购物车的数据
     */
    List<CommodityDao> getShopCart(int userId);


    /**
     * 删除购物车的数据
     */
    int delteShopCartDataById(int userId,int shopId);
}
