package io.xccit.aicollege.mapping;

import io.xccit.aicollege.dao.CommodityDao;
import io.xccit.aicollege.dao.UserDao;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author xccit
 * 用户信息Mapper
 */
@Mapper
public interface UserInfoInterface {
    /**
     * 取到用户的ID
     */
    int getUserIdByOpenid(String userOpenid);

    /**
     * 用户登录  保存信息
     */
    int addUserInfo(UserDao userDao);

    /**
     * 判断用户是否存在
     */
    String checkUserByOpenid(String openid);

    /**
     * 更新用户数据
     */
    int updateUserInfoByOpenid(UserDao userDao);

    /**
     * 查询自己的已发布
     */
    List<CommodityDao> getUserPublish(int id);

}
