package io.xccit.aicollege.util;

import java.util.Random;

/**
 * @author xccit
 * @method:getCode 生产随机码
 */
public class RandomCode {
    public String getCode(int len) {
        String str = "q1TwAUe2VrBWt3Cy4Du5XiE6oYFp7Gl8Zk90jH4hI5gJ6fK7dL8dM9sN0aOPz1mQx2nRc3bSv";
        int length = str.toCharArray().length;
        Random random = new Random();
        StringBuffer sb = new StringBuffer();
        for (int a = 0; a < len; a++) {
            int i = random.nextInt(length);
            sb.append(str.charAt(i));
        }
        return sb.toString();
    }
}
