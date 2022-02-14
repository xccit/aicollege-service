package io.xccit.aicollege.config;

/**
 * 微信小程序配置类
 * @author Xccit
 * @param :APP_ID微信小程序唯一标识
 * @param :SECRET微信小程序公众密码
 * @param :ERR_CODE错误代码
 * @param :ERR_MSG错误提示信息
 * @param :OK_CODE成功代码
 * @param :OK_MSG成功提示信息
 * @param :imgUrl图片存储路径
 */
public class MiniProgramConfig {
    public static final String APP_ID= "wx6c50f5fe3f83970f";
    public static final String SECRET= "4c6c8e6e88795b2bd680fa8814ccbfb1";
    public static final int ERR_CODE = 1003;
    public static final String ERR_MSG = "错误：";
    public static final int OK_CODE = 0;
    public static final String OK_MSG = "OK";
    public static String imgUrl = System.getProperty("user.dir")+"\\";
//    public static String imgUrl = "/www/wwwroot/Java/test/";
}
