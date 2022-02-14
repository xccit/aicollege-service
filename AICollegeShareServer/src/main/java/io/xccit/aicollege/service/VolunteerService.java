package io.xccit.aicollege.service;

import io.xccit.aicollege.config.MiniProgramConfig;
import io.xccit.aicollege.dao.VolunteerDao;
import io.xccit.aicollege.mapping.UserInfoInterface;
import io.xccit.aicollege.mapping.VolunteerInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Xccit
 * 志愿活动service层
 */
@Service
public class VolunteerService {
    @Autowired
    UserInfoInterface userInfoInterface;

    @Autowired
    VolunteerInterface volunteerInterface;

    public Map<String, Object> addVolunteer(String openid, VolunteerDao volunteerDao) {
        Map<String, Object> map = new HashMap<>();
        int userId = userInfoInterface.getUserIdByOpenid(openid);
        volunteerDao.setVol_publishmen(userId);
        int i = volunteerInterface.addVlounteer(volunteerDao);
        if (i != 0) {
            map.put("code", MiniProgramConfig.OK_CODE);
            map.put("msg", MiniProgramConfig.OK_MSG);
            return map;
        }
        map.put("code", MiniProgramConfig.ERR_CODE);
        map.put("msg", MiniProgramConfig.ERR_MSG);
        return map;
    }

    public Map<String, Object> getVolunteer() {
        Map<String, Object> map = new HashMap<>();
        List<VolunteerDao> volunteer = volunteerInterface.getVolunteer();
        List<Map<String,Object>> data = new ArrayList<>();
        for (VolunteerDao volunteerDao : volunteer) {
            Map<String,Object> tempMap = new HashMap<>();
            tempMap.put("userName",volunteerDao.getUser_name());
            tempMap.put("userIcon",volunteerDao.getUser_iconurl());
            tempMap.put("volName",volunteerDao.getVol_name());
            tempMap.put("volInfo",volunteerDao.getVol_info());
            tempMap.put("volId",volunteerDao.getVol_id());
            data.add(tempMap);
        }
        map.put("code", MiniProgramConfig.OK_CODE);
        map.put("msg", MiniProgramConfig.OK_MSG);
        map.put("data",data);
        return map;
    }
}
