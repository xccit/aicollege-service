package io.xccit.aicollege.mapping;

import io.xccit.aicollege.dao.VolunteerDao;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author Xccit
 * 志愿活动Mapper
 */
@Mapper
public interface VolunteerInterface {

    /**
     * 添加志愿活动
     */
    int addVlounteer(VolunteerDao volunteerDao);

    /**
     * 获取志愿活动
     */
    List<VolunteerDao> getVolunteer();
}
