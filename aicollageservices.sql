/*
 Navicat Premium Data Transfer

 Source Server         : AICollageServices
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : aicollageservices

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 28/01/2022 06:17:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity`  (
  `comm_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `comm_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品名',
  `comm_info` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品简介',
  `comm_image` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '商品图片地址',
  `comm_publishmen` int(11) NOT NULL COMMENT '商品发布人',
  `comm_connectin` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品发布者的联系方式',
  PRIMARY KEY (`comm_id`) USING BTREE,
  INDEX `bindPublishUser`(`comm_publishmen`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES (16, 'TensorFlow深度学习——深入理解人工智能算法设计', 'TensorFlow深度学习——深入理解人工智能算法设计', 'http://192.168.31.213:8080/getImages/mXLA8vqjAz02997L9pj6;', 9, '18888888888');
INSERT INTO `commodity` VALUES (17, '深入浅出PyTorch从模型到源码 深度学习入门书 ', '深入浅出PyTorch从模型到源码 深度学习入门书 ', 'http://192.168.31.213:8080/getImages/lAYlVKgQ7pgMZueKogKG;http://192.168.31.213:8080/getImages/4mKBcbZ0tTNOMWhIm603;', 9, '19999999999');
INSERT INTO `commodity` VALUES (18, 'Xiaomi 12 Pro', '全新一代 骁龙8 移动平台｜2K AMOLED 屏幕｜5000万超清三主摄 | CyberFocus 万物追焦｜全焦段夜景｜120W 澎湃秒充', 'http://192.168.31.213:8080/getImages/Y7f0dQMLjjxlWBlz16dM;http://192.168.31.213:8080/getImages/KIUv3oN04IONb4Xu1d5Z;http://192.168.31.213:8080/getImages/N6s5Iw18FUh2k6ufdo76;http://192.168.31.213:8080/getImages/gnOKlun8J96U574xg20Y;', 9, '12222222222');
INSERT INTO `commodity` VALUES (19, '马克思主义基本原理概论自学考试学习读本 自考教材', '自考教材 +自考通全真模拟试卷赠真题 送串讲小册子 2本套装备考2022 自考教材 3709 03709 马克思主义基本原理概论自学考试学习读本 自考教材 +自考通全真模拟试卷附真题', 'http://192.168.31.213:8080/getImages/Yja9ocpmZBTPB9M5lMum;http://192.168.31.213:8080/getImages/Oi5MLA8O29ZPM67IAvty;', 9, '13333332222');
INSERT INTO `commodity` VALUES (20, '中国共产党章程（64开红皮烫金本）', '中国共产党第十九次全国代表大会通过了关于《中国共产党章程(修正案)》的决议，对现行党章作出了100多处修改，其中重要的修改集中在四个方面', 'http://192.168.31.213:8080/getImages/5AiV2R16HkDCdIw8mKD6;', 9, '14444444444');
INSERT INTO `commodity` VALUES (21, '全兴大曲 晶彩金52° 双瓶装 500ml*2瓶 浓香型白酒（内含礼品袋）', '全兴大曲 晶彩金52° 双瓶装 500ml*2瓶 浓香型白酒（内含礼品袋）', 'http://192.168.31.213:8080/getImages/wN39Jt6sg6xK7vnE5h3L;http://192.168.31.213:8080/getImages/hh93PDHZvc1QBf3YAO59;http://192.168.31.213:8080/getImages/YVBiPbTFtU8UG0joB65S;', 9, '13324234324');
INSERT INTO `commodity` VALUES (22, 'Xiaomi 12', '全新一代 骁龙8 移动平台｜5000万超清主摄｜单手可握黄金手感｜6.28″超视感A+屏｜CyberFocus 万物追焦｜4500mAh大电量｜67W 有线秒充+50W无线秒充｜哈曼卡顿对称式立体声', 'http://192.168.31.213:8080/getImages/8oa5n49VcaQ9I1Wx4y6w;http://192.168.31.213:8080/getImages/jmLnoNExklX2AnWBIeDU;http://192.168.31.213:8080/getImages/ftcveh2nxFbx5lV2KbRn;http://192.168.31.213:8080/getImages/3uNd19fKAbhwso991RK6;http://192.168.31.213:8080/getImages/tscukIM8Ia4QC1KrE0GK;http://192.168.31.213:8080/getImages/z0asox847P8XofYmsim8;http://192.168.31.213:8080/getImages/E9lwPnq0cdLyrnV60CVd;http://192.168.31.213:8080/getImages/1e1989G1FbURMAV933A2;http://192.168.31.213:8080/getImages/xOeMUs4T80jygq25Z3Lt;', 9, '12221111122');
INSERT INTO `commodity` VALUES (23, '小米笔记本 Pro 14 锐龙版', '超视网膜流速屏，动力升级全「芯」超越 满1件赠价值29.9元虎虎生风新春福盒 虎虎生风新春福盒 赠完即止', 'http://192.168.31.213:8080/getImages/LhgUXO6s4dvJGX0qd7zA;http://192.168.31.213:8080/getImages/9u4o6bu3joydB8pM1BMv;http://192.168.31.213:8080/getImages/92oz865d3xjo6Ezzp1TW;http://192.168.31.213:8080/getImages/9uREQxx48oKPmKV5r5W5;http://192.168.31.213:8080/getImages/ymQb44MuD1rQlWnZuNqm;http://192.168.31.213:8080/getImages/b0HI2MOY8FPM4x0k2FPd;http://192.168.31.213:8080/getImages/Pk8u9U3hJctNn0ngorbb;http://192.168.31.213:8080/getImages/3B07JU7pbn62o5d6dxEq;http://192.168.31.213:8080/getImages/012X49ReXza078LJ3V79;', 9, '12212212121');

-- ----------------------------
-- Table structure for shopcart
-- ----------------------------
DROP TABLE IF EXISTS `shopcart`;
CREATE TABLE `shopcart`  (
  `shopcart_id` int(11) NOT NULL AUTO_INCREMENT,
  `comm_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`shopcart_id`) USING BTREE,
  INDEX `bindUser`(`user_id`) USING BTREE,
  INDEX `bindCommodity`(`comm_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 32 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id，主键',
  `open_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '微信登录唯一id',
  `user_name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '微信用户' COMMENT '用户名',
  `user_iconurl` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '用户头像地址',
  `regiter_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '注册时间',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `openid`(`open_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (9, 'oCFrU4jlqtf_25OnZQ6TJc9ILayI', '马中华', 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIVRvCiauDwU5IUp3FXjaGWgQrZA9xiaRJicMsOXJ9ibha2YlzLH3kOjOFMpozbkMoVU8JNicVBbQu7a0A/132', '2022-01-27 04:40:48');

-- ----------------------------
-- Table structure for volunteer
-- ----------------------------
DROP TABLE IF EXISTS `volunteer`;
CREATE TABLE `volunteer`  (
  `vol_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '志愿活动id',
  `vol_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '支援活动名称',
  `vol_info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '志愿活动简介',
  `vol_publishmen` int(11) NOT NULL COMMENT '志愿活动发布人',
  PRIMARY KEY (`vol_id`) USING BTREE,
  INDEX `bindVolPublishUser`(`vol_publishmen`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of volunteer
-- ----------------------------
INSERT INTO `volunteer` VALUES (1, '132', '123', 9);
INSERT INTO `volunteer` VALUES (2, '我要发布新的志愿活动', '我要发布新的志愿活动', 9);

SET FOREIGN_KEY_CHECKS = 1;
