package io.xccit.aicollege.mapping;

import io.xccit.aicollege.dao.CommodityDao;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author Xccit
 * 商品Mapper
 */
@Mapper
public interface ShopInterface {
    /**
     * 添加商品
     */
    int addShop(CommodityDao commodityDao);

    /**
     * 根据商品ID获取商品信息
     */
    CommodityDao getShopInfo(int shopId);

    /**
     * 获取商品列表
     */
    List<CommodityDao> getShopList();
}
