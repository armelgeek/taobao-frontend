import {useState,useEffect} from 'react'
import ProductItem from '../components/Products/ProductItem/index'
export default function products() {
    const [data,setData]=useState({});

    const donee = {"item":{"prop_imgs":{"prop_img":[{"properties":"1627207:100760300","url":"//img.alicdn.com/imgextra/i3/196993935/O1CN01xk0lHC1ewH81iCbWO-196993935.jpg"},{"position":1,"properties":"1627207:384810411","url":"//img.alicdn.com/imgextra/i1/196993935/O1CN01MuiUMY1ewH81ILZcl-196993935.jpg"},{"position":2,"properties":"1627207:492404758","url":"//img.alicdn.com/imgextra/i4/196993935/O1CN01NYjuGe1ewH83v7AR0-196993935.jpg"},{"position":3,"properties":"1627207:787686207","url":"//img.alicdn.com/imgextra/i2/196993935/O1CN01fTKcSR1ewH7yJ0Ed4-196993935.jpg"},{"position":4,"properties":"1627207:384808472","url":"//img.alicdn.com/imgextra/i1/196993935/O1CN016LDlrl1ewH81iNUT0-196993935.jpg"},{"position":5,"properties":"1627207:756290108","url":"//img.alicdn.com/imgextra/i1/196993935/O1CN016ksJqy1ewH83M45ks-196993935.jpg"}]},"item_imgs":{"item_img":[{"url":"//img.alicdn.com/imgextra/i4/196993935/O1CN01DSccxo1ewH82N9EEv_!!0-item_pic.jpg"},{"position":1,"url":"//img.alicdn.com/imgextra/i2/196993935/O1CN01duB0Dy1ewH7udqVrP-196993935.jpg"},{"position":2,"url":"//img.alicdn.com/imgextra/i4/196993935/O1CN019AtpWf1ewH87VhOJm-196993935.jpg"},{"position":3,"url":"//img.alicdn.com/imgextra/i1/196993935/O1CN0144B08B1ewH86lE39J-196993935.jpg"},{"position":4,"url":"//img.alicdn.com/imgextra/i3/196993935/O1CN01IO8bC51ewH82MpUT1-196993935.jpg"}]},"location":{"city":"","state":"上海"},"skus":{"sku":[{"price":"59.00","properties":"20509:399892969;1627207:100760300","properties_name":"20509:399892969:尺码:155/80A/S;1627207:100760300:主要颜色:01 乳白色","quantity":100,"sku_id":4475094879845},{"price":"59.00","properties":"20509:673576148;1627207:100760300","properties_name":"20509:673576148:尺码:150/76A/XS;1627207:100760300:主要颜色:01 乳白色","quantity":100,"sku_id":4475094879844},{"price":"59.00","properties":"20509:824944158;1627207:100760300","properties_name":"20509:824944158:尺码:160/88A/L;1627207:100760300:主要颜色:01 乳白色","quantity":100,"sku_id":4475094879847},{"price":"59.00","properties":"20509:385242931;1627207:100760300","properties_name":"20509:385242931:尺码:160/84A/M;1627207:100760300:主要颜色:01 乳白色","quantity":100,"sku_id":4475094879846},{"price":"59.00","properties":"20509:833532714;1627207:100760300","properties_name":"20509:833532714:尺码:170/100B/XXL;1627207:100760300:主要颜色:01 乳白色","quantity":100,"sku_id":4475094879849},{"price":"59.00","properties":"20509:824944157;1627207:100760300","properties_name":"20509:824944157:尺码:165/92A/XL;1627207:100760300:主要颜色:01 乳白色","quantity":100,"sku_id":4475094879848},{"price":"59.00","properties":"20509:673576148;1627207:384810411","properties_name":"20509:673576148:尺码:150/76A/XS;1627207:384810411:主要颜色:12 桃红色","quantity":100,"sku_id":4475094879851},{"price":"59.00","properties":"20509:291311339;1627207:100760300","properties_name":"20509:291311339:尺码:175/108C/XXXL;1627207:100760300:主要颜色:01 乳白色","quantity":100,"sku_id":4475094879850},{"price":"59.00","properties":"20509:385242931;1627207:384810411","properties_name":"20509:385242931:尺码:160/84A/M;1627207:384810411:主要颜色:12 桃红色","quantity":100,"sku_id":4475094879853},{"price":"59.00","properties":"20509:399892969;1627207:384810411","properties_name":"20509:399892969:尺码:155/80A/S;1627207:384810411:主要颜色:12 桃红色","quantity":100,"sku_id":4475094879852},{"price":"59.00","properties":"20509:824944157;1627207:384810411","properties_name":"20509:824944157:尺码:165/92A/XL;1627207:384810411:主要颜色:12 桃红色","quantity":100,"sku_id":4475094879855},{"price":"59.00","properties":"20509:824944158;1627207:384810411","properties_name":"20509:824944158:尺码:160/88A/L;1627207:384810411:主要颜色:12 桃红色","quantity":100,"sku_id":4475094879854},{"price":"59.00","properties":"20509:291311339;1627207:384810411","properties_name":"20509:291311339:尺码:175/108C/XXXL;1627207:384810411:主要颜色:12 桃红色","quantity":100,"sku_id":4475094879857},{"price":"59.00","properties":"20509:833532714;1627207:384810411","properties_name":"20509:833532714:尺码:170/100B/XXL;1627207:384810411:主要颜色:12 桃红色","quantity":100,"sku_id":4475094879856},{"price":"59.00","properties":"20509:399892969;1627207:492404758","properties_name":"20509:399892969:尺码:155/80A/S;1627207:492404758:主要颜色:31 米色","quantity":100,"sku_id":4475094879859},{"price":"59.00","properties":"20509:673576148;1627207:492404758","properties_name":"20509:673576148:尺码:150/76A/XS;1627207:492404758:主要颜色:31 米色","quantity":100,"sku_id":4475094879858},{"price":"59.00","properties":"20509:824944158;1627207:492404758","properties_name":"20509:824944158:尺码:160/88A/L;1627207:492404758:主要颜色:31 米色","quantity":100,"sku_id":4475094879861},{"price":"59.00","properties":"20509:385242931;1627207:492404758","properties_name":"20509:385242931:尺码:160/84A/M;1627207:492404758:主要颜色:31 米色","quantity":100,"sku_id":4475094879860},{"price":"59.00","properties":"20509:833532714;1627207:492404758","properties_name":"20509:833532714:尺码:170/100B/XXL;1627207:492404758:主要颜色:31 米色","quantity":100,"sku_id":4475094879863},{"price":"59.00","properties":"20509:824944157;1627207:492404758","properties_name":"20509:824944157:尺码:165/92A/XL;1627207:492404758:主要颜色:31 米色","quantity":100,"sku_id":4475094879862},{"price":"59.00","properties":"20509:673576148;1627207:787686207","properties_name":"20509:673576148:尺码:150/76A/XS;1627207:787686207:主要颜色:42 浅黄色","quantity":100,"sku_id":4475094879865},{"price":"59.00","properties":"20509:291311339;1627207:492404758","properties_name":"20509:291311339:尺码:175/108C/XXXL;1627207:492404758:主要颜色:31 米色","quantity":100,"sku_id":4475094879864},{"price":"59.00","properties":"20509:385242931;1627207:787686207","properties_name":"20509:385242931:尺码:160/84A/M;1627207:787686207:主要颜色:42 浅黄色","quantity":100,"sku_id":4475094879867},{"price":"59.00","properties":"20509:399892969;1627207:787686207","properties_name":"20509:399892969:尺码:155/80A/S;1627207:787686207:主要颜色:42 浅黄色","quantity":100,"sku_id":4475094879866},{"price":"59.00","properties":"20509:824944157;1627207:787686207","properties_name":"20509:824944157:尺码:165/92A/XL;1627207:787686207:主要颜色:42 浅黄色","quantity":100,"sku_id":4475094879869},{"price":"59.00","properties":"20509:824944158;1627207:787686207","properties_name":"20509:824944158:尺码:160/88A/L;1627207:787686207:主要颜色:42 浅黄色","quantity":100,"sku_id":4475094879868},{"price":"59.00","properties":"20509:291311339;1627207:787686207","properties_name":"20509:291311339:尺码:175/108C/XXXL;1627207:787686207:主要颜色:42 浅黄色","quantity":100,"sku_id":4475094879871},{"price":"59.00","properties":"20509:833532714;1627207:787686207","properties_name":"20509:833532714:尺码:170/100B/XXL;1627207:787686207:主要颜色:42 浅黄色","quantity":100,"sku_id":4475094879870},{"price":"59.00","properties":"20509:399892969;1627207:384808472","properties_name":"20509:399892969:尺码:155/80A/S;1627207:384808472:主要颜色:63 天蓝色","quantity":100,"sku_id":4475094879873},{"price":"59.00","properties":"20509:673576148;1627207:384808472","properties_name":"20509:673576148:尺码:150/76A/XS;1627207:384808472:主要颜色:63 天蓝色","quantity":100,"sku_id":4475094879872},{"price":"59.00","properties":"20509:824944158;1627207:384808472","properties_name":"20509:824944158:尺码:160/88A/L;1627207:384808472:主要颜色:63 天蓝色","quantity":100,"sku_id":4475094879875},{"price":"59.00","properties":"20509:385242931;1627207:384808472","properties_name":"20509:385242931:尺码:160/84A/M;1627207:384808472:主要颜色:63 天蓝色","quantity":100,"sku_id":4475094879874},{"price":"59.00","properties":"20509:833532714;1627207:384808472","properties_name":"20509:833532714:尺码:170/100B/XXL;1627207:384808472:主要颜色:63 天蓝色","quantity":100,"sku_id":4475094879877},{"price":"59.00","properties":"20509:824944157;1627207:384808472","properties_name":"20509:824944157:尺码:165/92A/XL;1627207:384808472:主要颜色:63 天蓝色","quantity":100,"sku_id":4475094879876},{"price":"59.00","properties":"20509:673576148;1627207:756290108","properties_name":"20509:673576148:尺码:150/76A/XS;1627207:756290108:主要颜色:69 藏青色","quantity":100,"sku_id":4475094879879},{"price":"59.00","properties":"20509:291311339;1627207:384808472","properties_name":"20509:291311339:尺码:175/108C/XXXL;1627207:384808472:主要颜色:63 天蓝色","quantity":100,"sku_id":4475094879878},{"price":"59.00","properties":"20509:385242931;1627207:756290108","properties_name":"20509:385242931:尺码:160/84A/M;1627207:756290108:主要颜色:69 藏青色","quantity":100,"sku_id":4475094879881},{"price":"59.00","properties":"20509:399892969;1627207:756290108","properties_name":"20509:399892969:尺码:155/80A/S;1627207:756290108:主要颜色:69 藏青色","quantity":100,"sku_id":4475094879880},{"price":"59.00","properties":"20509:824944157;1627207:756290108","properties_name":"20509:824944157:尺码:165/92A/XL;1627207:756290108:主要颜色:69 藏青色","quantity":100,"sku_id":4475094879883},{"price":"59.00","properties":"20509:824944158;1627207:756290108","properties_name":"20509:824944158:尺码:160/88A/L;1627207:756290108:主要颜色:69 藏青色","quantity":100,"sku_id":4475094879882},{"price":"59.00","properties":"20509:291311339;1627207:756290108","properties_name":"20509:291311339:尺码:175/108C/XXXL;1627207:756290108:主要颜色:69 藏青色","quantity":100,"sku_id":4475094879885},{"price":"59.00","properties":"20509:833532714;1627207:756290108","properties_name":"20509:833532714:尺码:170/100B/XXL;1627207:756290108:主要颜色:69 藏青色","quantity":100,"sku_id":4475094879884}]},"has_warranty":true,"item_weight":"0","iid":"610809612255","modified":"2020-07-09 17:40:08","title":"女装 全棉宽松条纹圆领T恤(短袖) 426149 优衣库UNIQLO","approve_status":"onsale","cid":50000671,"created":"2020-01-11 08:27:02","desc":"<img class=\"desc_anchor\" id=\"desc-module-1\" src=\"https://assets.alicdn.com/kissy/1.0.0/build/imglazyload/spaceball.gif\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td><p><img src=\"https://img.alicdn.com/imgextra/i1/196993935/TB2DaldXRYxQeBjSszeXXa0spXa_!!196993935.jpg\" alt=\"初上市价格\" width=\"100%\"></p><p>99元<br> ※初上市价格是指商品首次在优衣库官方旗舰店销售时的价格。</p><p><img src=\"https://img.alicdn.com/imgextra/i3/196993935/TB20HVcXPzyQeBjy0FjXXc5CVXa_!!196993935.jpg\" alt=\"产品说明\" width=\"100%\"></p><p>采用质感自然的棉质面料制成。款型具有宽松感，简单一件即有助于打造时尚造型。<br>&middot;面料采用质地较为厚实的棉质平纹汗布制成，具有舒适的穿着感受。<br>&middot;时尚有型。<br>&middot;经典的条纹纹样设计，颇具搭配性。</p><p><br>【面料组成】大身：棉100％。<br>【洗涤信息】机洗</p> <p style=\"color: #ff0000;\">此商品在商品完好，符合相关退换货规则的前提下支持七天无理由退换货。</p></td></tr></table><img class=\"desc_anchor\" id=\"desc-module-2\" src=\"https://assets.alicdn.com/kissy/1.0.0/build/imglazyload/spaceball.gif\"><p><img width=\"100%\" alt=\"产品展示（790）.jpg\" src=\"https://img.alicdn.com/imgextra/i1/196993935/TB2mkMJXxvzQeBjSZFgXXcvfVXa-196993935.jpg\"></p> <table width=\"100%\" style=\"border-left: 1.0px solid #dcdcdc;border-right: 1.0px solid #dcdcdc;border-top: 1.0px solid #dcdcdc;border-bottom: none medium;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr> <td width=\"100%\" align=\"center\" style=\"border-bottom: 1.0px solid #dcdcdc;\" colspan=\"4\"> <img width=\"100%\" alt=\"商品细节.jpg\" src=\"https://img.alicdn.com/imgextra/i4/196993935/TB2l7lnXKLyQeBjy0FaXXXiDVXa-196993935.jpg\"> </td> </tr> <tr> <td width=\"49.94%\" align=\"center\" style=\"border-right: 1.0px solid #dcdcdc;border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub1.jpg\" src=\"https://img.alicdn.com/imgextra/i4/196993935/O1CN01tqZQRu1ewH6RRM0c0_!!196993935.jpg\"> </td> <td width=\"49.94%\" align=\"center\" style=\"border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub2.jpg\" src=\"https://img.alicdn.com/imgextra/i4/196993935/O1CN01j2rpGK1ewH6RRMLOM_!!196993935.jpg\"> </td> </tr> <tr> <td width=\"49.94%\" align=\"center\" style=\"border-right: 1.0px solid #dcdcdc;border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub3.jpg\" src=\"https://img.alicdn.com/imgextra/i3/196993935/O1CN012K3pt01ewH6LXxTE3_!!196993935.jpg\"> </td> <td width=\"49.94%\" align=\"center\" style=\"border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub4.jpg\" src=\"https://img.alicdn.com/imgextra/i4/196993935/O1CN01hjM6bb1ewH6RRNgZT_!!196993935.jpg\"> </td> </tr> <tr> <td width=\"49.94%\" align=\"center\" style=\"border-right: 1.0px solid #dcdcdc;border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"393\" alt=\"405620000sub5.jpg\" src=\"https://img.alicdn.com/imgextra/i1/196993935/O1CN013EAjuw1ewH6MySuE8_!!196993935.jpg\"> </td> <td width=\"49.94%\" align=\"center\" style=\"border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub6.jpg\" src=\"https://img.alicdn.com/imgextra/i3/196993935/O1CN01iq9ipS1ewH6LXx09C_!!196993935.jpg\"> </td> </tr> <tr> <td width=\"49.94%\" align=\"center\" style=\"border-right: 1.0px solid #dcdcdc;border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub7.jpg\" src=\"https://img.alicdn.com/imgextra/i2/196993935/O1CN015t462f1ewH6Og3ni1_!!196993935.jpg\"> </td> <td width=\"49.94%\" align=\"center\" style=\"border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub7.jpg\" src=\"https://img.alicdn.com/imgextra/i4/196993935/O1CN01PPnYu81ewH6MySAW1_!!196993935.jpg\"> </td> </tr> <tr> <td width=\"49.94%\" align=\"center\" style=\"border-right: 1.0px solid #dcdcdc;border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> <img width=\"100%\" alt=\"405620000sub7.jpg\" src=\"https://img.alicdn.com/imgextra/i3/196993935/O1CN01dSAKKe1ewH6QFDmTc_!!196993935.jpg\"> </td> <td width=\"49.94%\" align=\"center\" style=\"border-bottom: 1.0px solid #dcdcdc;\" colspan=\"0\"> &nbsp; </td> </tr> </table><img class=\"desc_anchor\" id=\"desc-module-3\" src=\"https://assets.alicdn.com/kissy/1.0.0/build/imglazyload/spaceball.gif\"><p><a name=\"sizechart\"><img src=\"https://img.alicdn.com/imgextra/i2/196993935/TB2WTlaXNvxQeBjy0FiXXXioXXa_!!196993935.jpg\" alt=\"产品尺寸\" name=\"sizechart\" width=\"100%\" id=\"sizechart\"></a></p><table width=\"561\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align: center;font-size: 12.0px;font-family: 微软雅黑;border-left: solid #cccccc 1.0px;\"> <tr style=\"background-color: #8c8c8c;\"> <td width=\"91\" rowspan=\"2\" bgcolor=\"#FF0000\" align=\"center\" style=\"text-align: center;font-family: 微软雅黑;color: #ffffff;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">UNIQLO尺寸<br> (商品尺寸)</td> <td height=\"27\" colspan=\"4\" style=\"text-align: center;font-family: 微软雅黑;color: #ffffff;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">商品尺寸(cm)</td> </tr> <tr style=\"background: #dde3ff;\"> <td width=\"82\" height=\"27\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">后肩衣长</td> <td width=\"82\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">肩宽</td> <td width=\"82\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">身宽</td> <td width=\"70\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">袖长</td> </tr> <tr> <td height=\"36\" bgcolor=\"#dde3ff\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">150/76A(XS)</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">55.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">41</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">46.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">25</td> </tr> <tr> <td height=\"36\" bgcolor=\"#dde3ff\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">155/80A(S)</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">57</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">42</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">49</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">25.5</td> </tr> <tr> <td height=\"36\" bgcolor=\"#dde3ff\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">160/84A(M)</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">59</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">43</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">51.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">26</td> </tr> <tr> <td height=\"36\" bgcolor=\"#dde3ff\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">160/88A(L)</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">61</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">44.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">54.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">26.5</td> </tr> <tr> <td height=\"36\" bgcolor=\"#dde3ff\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">165/92A(XL)</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">63.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">46</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">57.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">27.5</td> </tr> <tr> <td height=\"36\" bgcolor=\"#dde3ff\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">170/100B(XXL)</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">63.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">47</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">60.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">28</td> </tr> <tr> <td height=\"36\" bgcolor=\"#dde3ff\" style=\"text-align: center;border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">175/108C(3XL)</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">65.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">48</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">63.5</td> <td style=\"border-bottom: solid #cccccc 1.0px;border-right: solid #cccccc 1.0px;\">29</td> </tr></table>","props_name":"品牌:Uniqlo/优衣库 ;面料:棉 ;尺码:150/76A/XS 155/80A/S 160/84A/M 160/88A/L 165/92A/XL 170/100B/XXL 175/108C/XXXL ;主要颜色:01 乳白色 12 桃红色 31 米色 42 浅黄色 63 天蓝色 69 藏青色 ;货号:UQ426149000 ;成分含量:96%及以上 ;年份季节:2020年夏季 ;袖长:短袖 ;衣长:常规款 ;销售渠道类型:商场同款(线上线下都销售) ;材质成分:棉100% ","is_taobao":true,"nick":"优衣库官方旗舰店","num":4200,"num_iid":610809612255,"pic_url":"//img.alicdn.com/imgextra/i4/196993935/O1CN01DSccxo1ewH82N9EEv_!!0-item_pic.jpg","freight_payer":"seller","post_fee":"0","ems_fee":"0","express_fee":"7.00","price":"59.00","wap_detail_url":"http://a.m.tmall.com/i610809612255.htm","wireless_desc":"<wapDesc><img>https://img.alicdn.com/imgextra/i1/196993935/O1CN01GVn2NW1ewH7R8ytKu-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i3/196993935/O1CN01watdEc1ewH7N3Pz59-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i2/196993935/O1CN017Mfx6H1ewH7TBUfPa-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i1/196993935/O1CN01m2fOMy1ewH7TtuOE0-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i1/196993935/O1CN0181ptoC1ewH7TBWoQW-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i2/196993935/O1CN01cI1so21ewH7Ox7AUi-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i2/196993935/O1CN01CvZyBF1ewH7Rjpvmn-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i3/196993935/O1CN014vEz4M1ewH7SWkC7z-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i1/196993935/O1CN01DZxiL51ewH7Pw1tQh-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i2/196993935/O1CN018HYd8a1ewH7Ox5lCp-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i3/196993935/O1CN017beRDE1ewH7PPrzBC-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i2/196993935/O1CN01Zqg6uo1ewH7Ox6Meo-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i4/196993935/O1CN01Tcztxw1ewH7M5ZSnj-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i4/196993935/O1CN011JhrkX1ewH7N3PW0W-196993935.jpg</img><img>https://img.alicdn.com/imgextra/i2/196993935/O1CN01iAwz7P1ewH7NRuQwf-196993935.jpg</img></wapDesc>","score":"20","sell_point":"初上市价格99元","shop_type":"B","stuff_status":"new","valid_thru":"14"}};
    useEffect(async ()=>{
        await setData({
            name:donee.item.title,
            price:donee.item.price,
        })
    },[])
    return (
        <div>
            <h3>Liste des produits</h3>
            <ProductItem id={1} name={data.name} price={data.price} productImage={"http://image.jpg"}/>
            
          
        </div>
    )
}
