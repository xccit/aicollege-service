package io.xccit.aicollege.service;

import io.xccit.aicollege.config.MiniProgramConfig;
import io.xccit.aicollege.util.RandomCode;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
/**
 * @author Xccit服务层
 * 图片操作
 */
@Service
public class ImageService {
    public Map<String, Object> uploadImage(MultipartFile file) throws IOException {
        RandomCode randomCode = new RandomCode();
        Map<String, Object> map = new HashMap<>();
        if (file.isEmpty()) {
            map.put("code", MiniProgramConfig.ERR_CODE);
            map.put("msg", MiniProgramConfig.ERR_MSG);
            return map;
        }
        String code = randomCode.getCode(20);
        String imgUrl = MiniProgramConfig.imgUrl + "images/" +code  + ".png";
        file.transferTo(new File(imgUrl));
        String resUrl = "getImages/"+code;
        map.put("code", MiniProgramConfig.OK_CODE);
        map.put("msg", MiniProgramConfig.OK_MSG);
        map.put("url", resUrl);
        return map;
    }


    public void getImages(String imageCode, HttpServletResponse response) throws IOException {
        String imgUrl = MiniProgramConfig.imgUrl + "images\\" + imageCode + ".png";
        FileInputStream inputStream = new FileInputStream(imgUrl);
        ServletOutputStream outputStream = response.getOutputStream();
        int a;
        byte[] bytes = new byte[1024];
        while ((a=inputStream.read(bytes))!=-1){
            outputStream.write(bytes,0,a);
        }
        outputStream.close();
        inputStream.close();
    }
}
