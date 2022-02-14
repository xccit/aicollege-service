package io.xccit.aicollege.dao;

import lombok.Data;

/**
 * @author xccit
 * 用户Dao 使用lombok生成映射实体类
 */
@Data
public class UserDao {
    private int user_id;
    private String open_id;
    private String user_name;
    private String user_iconurl;
    private String regiter_time;
}