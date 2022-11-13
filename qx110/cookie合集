hostname = wapside.189.cn, wapside.189.cn:900, alipaymini.189.cn, alipaymini.189.cn:8043, *.snssdk.com, www.xiaodouzhuan.cn, commontgw6.reader.qq.com, eventv3.reader.qq.com,mqqapi.reader.qq.com,wapside.189.cn,account.huami.com,apph5.manmanbuy.com,h5.ele.me,api.didialift.com,bosp-api。 xiaojukeji.com,as.xiaojukeji.com,manhattan.webapp.xiaojukeji.com,mobile01.91quzou.com, mk.immomo.com, huiyuan.163.com, geekhub.com, cxdng.cpic.com.cn, h5.有赞网、api.infzm.com、api.xiaoheihe.cn、exp.angelalign.com、ngabbs.com、api.umer.com.cn、app*.jegotrip.com.cn、task.jegotrip.com.cn , my.ruanmei.com, www.mydigit.cn, wx-mini.pagoda.com.cn, m.weibo.cn, apapia-history.manmanbuy.com, weather-data.apple.com, mall.oclean.com 、api.cashtoutiao.com、user-api-prd-mx.wandafilm.com、h5.bianlifeng.com、teacherapi.zmlearn.com、clientaccess.10086.cn、maicai.api.ddxq.mobi、vip。heytea.com, webapi.qmai.cn, proapi.115.com, proxy.vac.qq.com, *.xmcimg.com, as.xiaojukeji.com, note.youdao.com, api.m.jd.com, music.163.com, c.tieba.baidu.com, weibo.com,ifac*.iqiyi.com, *.smzdm.com, *.v2ex.com, www.52pojie.cn, *.bilibili.com, * .feng.com, *.video.qq.com, *.acfun.cn, *.rrys2019.com, mobwsa.ximalaya.com, *.rr.tv, www.flyertea.com, wapside.189.cn, sf -integral-sign-in.weixinjia.net, h5.ele.me, *.you.163.com, apk.tw, api.dongqiudi.com, *.m.163.com, user.qunar.com, 腐竹.douyu.com, ios.zmzapi.com, *.y.qq.com, *.csdn.net, m.ctrip.com, m.gdoil.cn, credits.bz.mgtv.com, api-takumi.mihoyo .com, act.10010.com, e.189.cn, www.maomicd.com, wx.10086.cn, mtrace.qq.com, www.lltxt.com, weclub.ccc.cmbchina.com, Promotion.waimai .meituan.com, i.meituan.com, daojia.jd.com, api-hdcj.9w9.com, api.everphoto.cn, group.baicizhan.com, maicai.api.ddxq.mobi, pm.m.fenqile.com、ms.jr.jd.com、api.dushu.io、node.kg.qq.com、app.nio.com、wxprdapplet.gac-nio.com、activity-1.m.duiba。 com.cn、m.client.10010.com、m-bean.kaola.com、110.43.90.61、zt.wps.cn、xiaoshuo.qm989.com、passport.suning.com、luckman.suning.com、签到。苏宁易购、gameapi.suning.com、m.ximalaya.com、iphone.myzaker.com、draw.jdfcloud.com、sapi.beingfine.cn、icbc1.wlphp.com、wx.17u.cn、frodo.douban。 com、mcs-mimp-web.sf-express.com、gameapi.hellobike.com、mwegame.qq.com、api.1sapp.com、tieba.baidu.com、m.ximalaya.com、app.jf.360。 cn, pay.sc.weibo.com, api.inews.qq.com, newsapi.sina.cn, *.youth.cn, apiwz.midukanshu.com, www.duokan.com, appv8.qukantianxia.com, appv7. qukantx.com、xwsh.javamall.cn、m.ximalaya.com、zhiyou.smzdm.com、user-api.smzdm.com、passport.suning.com、luckman.suning.com、sign.suning.com、gameapi。苏宁易购、优惠95516.com、choujiang-server.deering.cn, www.52pojie.cn, lkyl.dianpusoft.cn, club.yili.com, wq.jd.com, m.jingxi.com，i.meituan.com, nebula.kuaishou.com, activity.m.kuaishou.com, kd.youth.cn, ios.baertt.com, *.amemv.com， api.weibo.cn, m.weibo.cn, me-api.jd.com, api.wfdata.俱乐部

# jd_appopen
# ^https:\/\/api\.m\.jd\.com\/openUpgrade url script-request-header https://raw.githubusercontent.com/JDHelloWorld/jd_scripts/main/utils/jd_appopen.js

#Nobyda大佬更新2021.8.15
# 开启抓包app后，Safari浏览器登录 https://home.m.jd.com/myJd/newhome.action 点击​​个人中心页面后，返回抓包app搜索关键字info/GetJDUserInfoUnion 复制请求头Cookie字段填写进入json串数据内能如需获取京东签到正文，可进入“京东金融”APP（iOS），在“首页”点击“金融签到”并签到一次，返回抓包app搜索关键字h5/m/appSign复制请求体填入json串数据内能
#BoxJs或QX画廊订阅地址：https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json
# 获取京东Cookie。
^https:\/\/(api\.m|me-api)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?) url script-request -header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
# 获取钢镚签到body.
^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/hy\/h5\/m\/appSign\? url script-request-body https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

#京喜（此部分还是建议用LXK大佬的，直接调用JDcookies方便，方便）
#获取京喜代币方式
#打开京喜农场，手动完成任务，必须完成任务领到水滴，提示获取cookie成功
#打开京喜工厂，收取电力，提示获取cookie成功
#京喜财富岛，手动成功打开提现一次，提示获取cookie成功
#^https\:\/\/wq\.jd\.com\/cubeactive\/farm\/dotask url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens .js
#^https\:\/\/m\.jingxi\.com\/dreamfactory\/generator\/CollectCurrentElectricity url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens .js
#^https\:\/\/m\.jingxi\.com\/jxcfd\/consume\/CashOut url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens .js

#抖音极速版
luckycat/aweme/v1/task/sign_in/detail? url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/dyjsb.js
luckycat/aweme/v1/task/done/read? url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/dyjsb.js
幸运猫/aweme/v1/task/walk/step_submit？- 脚本请求头 https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/dyjsb.js

#聚看点极速版签到任务，打开'我的'获取Cookie和body值
# https:\/\/www\.xiaodouzhuan\.cn\/jkd\/newMobileMenu\/infoMe\.action url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/巨看.js
# https:\/\/www\.xiaodouzhuan\.cn\/jkd\/newMobileMenu\/infoMe\.action url script-request-body https://raw.githubusercontent.com/shylocks/Loon/main/jkd. js
# https:\/\/www\.xiaodouzhuan\.cn\/jkd\/newMobileMenu\/infoMe\.action url script-request-body https://raw.githubusercontent.com/Jone2008/QuantumultX/master/jkd. js

# 中青看点极速版Get_Cookie (By Sunert)
# https:\/\/ios\.baertt\.com\/v5\/article\/info\/get\.json url script-request-header https://raw.githubusercontent.com/Sunert/Script/master /Task/Youth_Read.js
# https:\/\/ios\.baertt\.com\/v5\/user\/stay\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/ Youth_Read.js
#中青看点极速任务签到
# https:\/\/kd\.youth\.cn\/WebApi\/NewTaskIos\/getTaskList url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/youth.js
# https:\/\/ios\.baertt\.com\/v5\/article\/info\/get\.json url script-request-header https://raw.githubusercontent.com/Sunert/Script/master /Task/youth.js
# https:\/\/ios\.baertt\.com\/v5\/\w+\/withdraw\d?\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/主/任务/youth.js
# https:\/\/ios\.baertt\.com\/v5\/user\/stay\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/青年.js
#中青赚任务，手动完成任务，获取体，支持boxjs及Github Actions，多请求用"&"单独，支持自动获取请求
# https:\/\/ios\.baertt\.com\/v5\/task\/browse_start\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/ Youth_gain.js
# https:\/\/ios\.baertt\.com\/v5\/Nameless\/adlickstart\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/ Youth_gain.js
#中青看赚+赚任务，点浏览完成任务，获取请求体，支持查看boxjs及Github Actions，多请求用"&"单独点击手动任务，支持获取自动请求
# https:\/\/kandian\.wkandian\.com\/v5\/task\/browse_start\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/ Youth_gain.js
# https:\/\/kandian\.wkandian\.com\/v5\/Nameless\/adlickstart\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/ Youth_gain.js
#强制增加中青看点收入，并签到Cookie有冲突，请使用时添加查看，使用时请禁止
# https:\/\/kd\.youth\.cn\/WebApi\/NewTaskIos\/getTaskList url script-response-body https://raw.githubusercontent.com/Sunert/Script/master/Task/youth_gain.js

#电信营业厅营业厅整点可得1300金豆）作者：elecV2
#活动：电信营业厅APP我->整宝箱或者我->金豆攻略地址->优惠->优惠->活动公告：时间~ 2021.0331（具体）
#https:\/\/alipaymini\.189\.cn:8043\/treasureBox\/queryUserActivityInfo url script-request-body https://raw.githubusercontent.com/elecV2/QuantumultX-Tools/master/dianx/dxbox。 js

#中国电信金豆换话获取，重写（收费cookie）订阅文件：
#cookie获取条件：金豆数量大于400，以及上午10点前。
#打开电信营业厅，我->（已）签到->2元话费兑换（然后热门兑换）->立即兑换->兑换。如果没有设置问题，会弹出cookie获取成功的提醒。重复弹窗。
#^https:\/\/wapside.189.cn:9001\/api\/exchange\/consume url script-request-body https://raw.githubusercontent.com/elecV2/QuantumultX-Tools/master/dianx/ dianx.js

#伊利乳品 - 小程序
https:\/\/club\.yili\.com\/MALLIFChe\/MCSWSIAPI\.asmx\/调用url script-request-body https://raw.githubusercontent.com/id77/QuantumultX/master/task/yiLi .cookie.js

#快手（Sunert）(第二条仅用于获取极速版cookies)
https:\/\/activity\.m\.kuaishou\.com\/rest\/wd\/taskCenter\/\w+\/module\/list url script-request-header https://raw.githubusercontent.com /Sunert/Script/master/Task/kuaishou.js
https:\/\/nebula\.kuaishou\.com\/nebula\/task\/earning\? url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/kuaishou.js

#吾爱破解，获取Cookie(NobyDa)
https:\/\/www\.52pojie\.cn\/home\.php\? url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js

#慢慢买
https?:\/\/apph5\.manmanbuy\.com\/taolijin\/(login.aspx|logserver.aspx) url script-request-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/脚本/manmanbuy/manmanbuy_checkin.js


#美团
^https:\/\/i.meituan.com\/evolve\/signin\/signpost\/ url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/meituan/meituan.cookie .js


#中国联通App每日签到与抽奖（by blackmatrix7）（已过渡）
# ^https?:\/\/m\.client\.10010\.com\/dailylottery\/static\/(integral|doubleball)\/firstpage url script-request-header https://raw.githubusercontent.com /blackmatrix7/ios_rule_script/master/script/obsolete/10010/unicom_signin.js
# ^https?:\/\/m\.client\.10010\.com\/dailylottery\/static\/(integral|doubleball)\/firstpage url script-request-header https://raw.githubusercontent.com /blackmatrix7/ios_rule_script/master/script/obsolete/10010/unicom_signin.min.js

# 么么哒每日领取会员任务（by blackmatrix7）
^https?:\/\/h5\.ele\.me\/restapi\/svip_biz\/v1\/supervip\/query_mission_list\?longitude=([^&]*).*latitude=([^&] *) url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.js

#滴滴出行每日自动签到（by blackmatrix7）
# 获取令牌
# ^https?:\/\/api\.didialift\.com\/beatles\/userapi\/user\/user\/getuserinfo?.*city_id=(\d+).*&token=([^&]* ) url 脚本请求头
# https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/didichuxing/didi_checkin.js
#获取Ticket(备用，无法获取Token时尝试)
# ^https?:\/\/as\.xiaojukeji\.com\/ep\/as\/toggles\?.*location_cityid=(\d+).*&ticket=([^&]*) url script-request -标题
# https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/didichuxing/didi_checkin.js
# 获取盖子
# ^https?:\/\/bosp-api\.xiaojukeji\.com\/bosp-api\/lottery\/info?.*lid=([^&]*) url script-request-header
# https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/didichuxing/didi_checkin.js
# 获取ActivityId与ChannelId
# ^https?:\/\/manhattan\.webapp\.xiaojukeji\.com\/marvel\/api\/manhattan\-signin\-task\/signIn\/执行url script-request-body
# https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/didichuxing/didi_checkin.js

#新浪微博签到（作者：Sunert）
https:\/\/m?api\.weibo\.c(n|om)\/\d\/users\/show url script-request-header https://raw.githubusercontent.com/Sunert/Script/主/任务/weibo.js
https:\/\/api\.weibo\.cn\/\d\/users\/show url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/weibo.js
https:\/\/api\.weibo\.cn\/2\/logservice\/service url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/weibo.js

# NobyDa(https://github.com/NobyDa/Script/tree/master/QuantumultX)

#爱奇艺饼干
^https?:\/\/iface(\d)?\.iqiyi\.com\/ url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI。 js

#百度贴吧cookie（NobyDa）
#https?:\/\/(c\.tieba\.baidu\.com|180\.97\.\d+\.\d+)\/c\/s\/login url script-request-header https: //raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js
# 百度贴签到(chavyleung)
#^https?:\/\/贴吧\.baidu\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.cookie.js

#京东cookie（NobyDa）开启抓包app后，Safari浏览器登录 https://bean.m.jd.com/bean/signIndex.action
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD -DailyBonus/JD_DailyBonus.js


# Chavyleung(https://github.com/chavyleung/scripts)
#苏宁易购
^https:\/\/passport.suning.com\/ids\/login$ url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
^https:\/\/luckman.suning.com\/luck-web\/sign\/api\/clock_sign.do url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/苏宁/suning.cookie.js
^https:\/\/sign.suning.com\/sign-web\/m\/promotion\/sign\/doSign.do url script-request-header https://raw.githubusercontent.com/chavyleung/scripts /master/suning/suning.cookie.js
^https:\/\/gameapi.suning.com\/sngame-web\/(api\/signin\/private\/customerSignOperation.do|gateway\/api\/queryPrize.do) url script-request-header https ://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js

#电信营业厅
^https:\/\/wapside.189.cn:9001\/api\/home\/homeInfo url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.cookie .js

# 哔哩哔哩
^https:\/\/(www|live)\.bilibili\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.cookie.js

#威锋网
# ^https:\/\/(www\.)?feng\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/feng/feng.cookie.js
^https?:\/\/api.wfdata.club\/v1\/auth\/signin url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/feng/feng.cookie。 js

# 网易云音乐
^https:\/\/music.163.com\/weapi\/user\/level url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/quanx/neteasemusic.cookie .js

# 网易新闻
^https:\/\/(.*?)c\.m\.163\.com\/uc\/api\/sign\/v3\/commit url script-request-body https://raw.githubusercontent .com/chavyleung/scripts/master/neteasenews/neteasenews.cookie.js

#去哪儿
^https:\/\/user.qunar.com\/webapi\/member\/signIndexV2.htm url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/qunar/qunar.cookie .js

#顺丰速运
^https:\/\/sf-integral-sign-in.weixinjia.net\/app\/index url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress。 cookie.js
^https:\/\/mcs-mimp-web.sf-express.com\/mcs-mimp\/share\/(.*?)重定向url script-request-header https://raw.githubusercontent.com/ chavyleung/scripts/master/sfexpress/sfexpress.cookie.js

#腾讯视频
^https:\/\/access.video.qq.com\/user\/auth_refresh url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.cookie.js

#喜马拉雅
^https?:\/\/.*\/mobile\-user\/homePage\/.* url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.cookie .js

#加油广东
^https:\/\/m.gdoil.cn\/webapi\/usersign\/addusersign url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/gdoil/gdoil.cookie.js

#中国移动
#^http:\/\/wx.10086.cn\/网站\/taskCenter\/index\? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.cookie.js
#^http:\/\/wx.10086.cn\/网站\/taskCenter\/sign\? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.cookie.js

#网易考拉
^https:\/\/m-bean\.kaola\.com/m/point/sign\.html url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/wykl/wykl .cookie.js

# 微博通知 (By @zZPiglet)
#^https:\/\/m\.weibo\.cn\/feed\/ url script-request-header https://raw.githubusercontent.com/zZPiglet/Task/master/Weibo/Weibo.js

# 彩云天气 (By Peng-YM)
https://weather-data.apple.com url script-request-header https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/caiyun.js
https:\/\/((weather-data\.apple)|(api.weather))\.com url script-request-header https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks /caiyun.js
