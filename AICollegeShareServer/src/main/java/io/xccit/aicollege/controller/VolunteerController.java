package io.xccit.aicollege.controller;

import io.xccit.aicollege.dao.VolunteerDao;
import io.xccit.aicollege.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author xccit
 * 志愿活动控制层
 */

@CrossOrigin
@RestController
public class VolunteerController {
    @Autowired
    VolunteerService volunteerService;

    /**
     * 发布志愿活动
     */
    @RequestMapping(value = "/addVolunteer/{openid}",method = RequestMethod.POST)
    public Map<String,Object> addVolunteer(@PathVariable("openid") String openid , @RequestBody VolunteerDao volunteerDao){
        return volunteerService.addVolunteer(openid,volunteerDao);
    }

    /**
     * 获取志愿活动
     */
    @RequestMapping(value = "/getVolunteer",method = RequestMethod.GET)
    public Map<String,Object> getVolunteer(){
        return volunteerService.getVolunteer();
    }

}
