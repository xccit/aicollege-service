package io.xccit.aicollege.controller;

import io.xccit.aicollege.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

/**
 * @author xccit
 * 图片操作控制层
 */
@CrossOrigin
@RestController
public class ImageController {

    @Autowired
    ImageService imageService;
    /**
     * 上传图片
     */
    @RequestMapping(value = "/uploadImage", method = RequestMethod.POST)
    public Map<String, Object> uploadImage(@RequestPart("file") MultipartFile file) throws IOException {
        return imageService.uploadImage(file);
    }

    /**
     * 下载图片
     */
    @RequestMapping(value = "/getImages/{imagesCode}", method = {RequestMethod.GET, RequestMethod.POST})
    public void getImages(@PathVariable("imagesCode") String imagesCode, HttpServletResponse response) throws IOException {
        imageService.getImages(imagesCode, response);
    }
}
