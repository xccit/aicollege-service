package io.xccit.aicollege.dao;

import lombok.Data;

/**
 * @author xccit
 * 购物车dao 使用lombok生成映射实体类
 */
@Data
public class ShopCartDao {
    private int shopcart_id;
    private int comm_id;
    private int user_id;
}
