/******************************

🐏 微信阅读（全自动），阅读得积分，10000币换1元
🐏 单篇阅读为150币，一轮为30篇，即一轮获得0.45元
👀 请复制下面的链接在微信中打开👇👇👇
🚩 建议积分每天兑换，并清空，不要积累，不要积累


【QuantumultX】 :
*************************
[rewrite_local]
^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body https://raw.githubusercontent.com/iyexiaolou/Quantumult-X/QXtest/qx110/wechat_auto_read.js
*************************

【Loon】 :
*************************
[Script]
http-response ^https?://mp\.weixin\.qq\.com/s\?.* script-path=https://github.com/ddgksf2013/Scripts/raw/master/wechat_auto_read.js, requires-body=true, timeout=10, tag=微信自动阅读（羊毛） 
*************************

【Surge】 :
*************************
[Script]
微信自动阅读（羊毛） = type=http-response,pattern=^https?://mp\.weixin\.qq\.com/s\?.*,script-path=https://github.com/ddgksf2013/Scripts/raw/master/wechat_auto_read.js, requires-body=true
*************************

【小火箭】 :
*************************
[Script]
微信自动阅读（羊毛） = type=http-response,script-path=https://github.com/ddgksf2013/Scripts/raw/master/wechat_auto_read.js,pattern=^https?://mp\.weixin\.qq\.com/s\?.*,max-size=131072,requires-body=true,timeout=10,enable=true
*************************

[mitm]
hostname = mp.weixin.qq.com

*****************************************/
