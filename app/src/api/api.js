function a1_0x4dc1(_0x3820e1,_0x177ba5){const _0xec27fa=a1_0xec27();return a1_0x4dc1=function(_0x4dc1a7,_0x5e17ed){_0x4dc1a7=_0x4dc1a7-0x17a;let _0x1932b7=_0xec27fa[_0x4dc1a7];return _0x1932b7;},a1_0x4dc1(_0x3820e1,_0x177ba5);}const a1_0x1ffaae=a1_0x4dc1;(function(_0x5f52a7,_0x1dd554){const _0x1dd96e=a1_0x4dc1,_0x1802fa=_0x5f52a7();while(!![]){try{const _0x51bc73=parseInt(_0x1dd96e(0x17a))/0x1*(parseInt(_0x1dd96e(0x18d))/0x2)+parseInt(_0x1dd96e(0x186))/0x3*(-parseInt(_0x1dd96e(0x189))/0x4)+-parseInt(_0x1dd96e(0x194))/0x5*(parseInt(_0x1dd96e(0x188))/0x6)+parseInt(_0x1dd96e(0x17c))/0x7*(-parseInt(_0x1dd96e(0x184))/0x8)+parseInt(_0x1dd96e(0x19f))/0x9+parseInt(_0x1dd96e(0x199))/0xa*(parseInt(_0x1dd96e(0x17e))/0xb)+parseInt(_0x1dd96e(0x19c))/0xc*(parseInt(_0x1dd96e(0x191))/0xd);if(_0x51bc73===_0x1dd554)break;else _0x1802fa['push'](_0x1802fa['shift']());}catch(_0x26a08c){_0x1802fa['push'](_0x1802fa['shift']());}}}(a1_0xec27,0xcde61));import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';function a1_0xec27(){const _0x3f3fa1=['includes','substring','host','370KnmNKH','application/json,\x20text/plain,\x20*/*','get','12sBMhRM','info','Error\x20:\x20','1332450OyGTEZ','response','referer','status','query','19XyFxut','url','21cALNSm','application/json','375881lfzCDx','randomUserAgent','Response\x20Data\x20:\x20','text','Bearer\x20','...','3049672YPbFjk','agent','390882BNYiJH','stringify','6klHvCp','36xtGMKz','headers','json','origin','78318AOvVDf','Request\x20Body\x20:\x20','Response\x20:\x20','proxy','14024062JHlIVV','generateHeaders','fetch','377690LuFAKj','error'];a1_0xec27=function(){return _0x3f3fa1;};return a1_0xec27();}import a1_0x163e30 from'../utils/logger.js';import a1_0x28a1d5 from'https';export class API{constructor(_0xd375ee,_0x37e487,_0x42da8c,_0xe93556,_0x332c8c,_0x562aeb,_0x2cb571){const _0x26ab88=a1_0x4dc1;this[_0x26ab88(0x17b)]=_0xe93556,this['queryObj']=_0x37e487,this[_0x26ab88(0x198)]=_0x332c8c,this[_0x26ab88(0x18c)]=_0x562aeb,this['referer']=_0x2cb571,this['ua']=Helper[_0x26ab88(0x17f)](),this[_0x26ab88(0x1a3)]=_0xd375ee,this['proxy']=_0x42da8c;}async[a1_0x1ffaae(0x192)](_0xc7aedb=undefined){const _0x31bf3a=a1_0x1ffaae,_0x3ba7ee={'Accept':_0x31bf3a(0x19a),'Content-Type':'application/json','User-Agent':this['ua'],'Host':this[_0x31bf3a(0x198)],'Origin':this[_0x31bf3a(0x18c)]};return _0xc7aedb&&(_0x3ba7ee['Authorization']=_0x31bf3a(0x182)+_0xc7aedb),_0x3ba7ee;}async[a1_0x1ffaae(0x193)](_0x3559e7,_0x8cebd8='GET',_0x4a0865,_0x1f5240={},_0x4c560c={}){const _0x251e9c=a1_0x1ffaae;try{const _0x4e9f40=''+this['url']+_0x3559e7,_0x324506={..._0x4c560c,...await this[_0x251e9c(0x192)](_0x4a0865)},_0x119c9f={'method':_0x8cebd8,'headers':_0x324506,'body':_0x8cebd8!=='GET'?JSON[_0x251e9c(0x187)](_0x1f5240):undefined,'referer':this[_0x251e9c(0x1a1)]};this[_0x251e9c(0x190)]&&(_0x119c9f[_0x251e9c(0x185)]=new HttpsProxyAgent({'uri':this['proxy'],'rejectUnauthorized':![]}));a1_0x163e30[_0x251e9c(0x19d)](_0x8cebd8+'\x20:\x20'+_0x4e9f40+'\x20'+(this['proxy']?this['proxy']:'')),a1_0x163e30[_0x251e9c(0x19d)]('Request\x20Header\x20:\x20'+JSON[_0x251e9c(0x187)](_0x324506)),a1_0x163e30[_0x251e9c(0x19d)](_0x251e9c(0x18e)+JSON[_0x251e9c(0x187)](_0x1f5240));const _0x5d175f=await fetch(_0x4e9f40,_0x119c9f),_0x1145c8=_0x5d175f[_0x251e9c(0x18a)][_0x251e9c(0x19b)]('Content-Type');let _0x5e6337;_0x1145c8&&_0x1145c8[_0x251e9c(0x196)](_0x251e9c(0x17d))?_0x5e6337=await _0x5d175f[_0x251e9c(0x18b)]():_0x5e6337=await _0x5d175f[_0x251e9c(0x181)]();const _0x29348d={'rc':_0x5d175f['ok']?0xc8:_0x5d175f['status'],..._0x5e6337};return a1_0x163e30[_0x251e9c(0x19d)](_0x251e9c(0x18f)+_0x5d175f[_0x251e9c(0x1a2)]+'\x20'+_0x5d175f['statusText']),a1_0x163e30['info'](_0x251e9c(0x180)+JSON[_0x251e9c(0x187)](_0x5e6337)[_0x251e9c(0x197)](0x0,0x96)+_0x251e9c(0x183)),_0x29348d;}catch(_0x10a8b6){a1_0x163e30[_0x251e9c(0x195)](_0x251e9c(0x19e)+_0x10a8b6['message']);if(_0x10a8b6['response']&&_0x10a8b6[_0x251e9c(0x1a0)]['status']===0x190){const _0x1647ff={'rc':_0x10a8b6[_0x251e9c(0x1a0)]['status'],...await _0x10a8b6[_0x251e9c(0x1a0)][_0x251e9c(0x18b)]()};return _0x1647ff;}else throw _0x10a8b6;}}}