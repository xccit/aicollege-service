package io.xccit.aicollege.dao;

import lombok.Data;

/**
 * @author xccit
 * 志愿活动Dao 使用lombok生成映射实体类
 */
@Data
public class VolunteerDao {
    private int vol_id;
    private String vol_name;
    private String vol_info;
    private int vol_publishmen;
    private String user_name;
    private String user_iconurl;
}
