package io.xccit.aicollege.dao;

import lombok.Data;

import java.util.List;

/**
 * @author Xccit
 * 商品Dao 使用lombok生成映射实体类
 */
@Data
public class CommodityDao {
    private int comm_id;
    private String comm_name;
    private String comm_info;
    private String comm_image;
    private String comm_publishmen;
    private String comm_connectin;
    private String user_name;
    private int user_id;
    private List<String> imgArray;
}
