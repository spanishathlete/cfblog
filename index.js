'use strict';
const OPT = {
	"user" : "username", //后台密码
    "password" : "password", //后台密码
    "siteDomain" : "blog.gezhong.vip",// 域名(不带https 也不带/)
    "siteName" : "CF Blog",//博客名称
    "siteDescription":"A Blog Powered By Cloudflare Workers and KV",//博客描述
    "keyWords":"cloudflare,KV,workers,blog",//关键字
    "cacheZoneId":"722545075692ae552d067239050d472c",//清理缓存用 cf区域 ID
    "cacheToken":"Pg1TZZscVzWpMgyIaKfdZjpMF8DGE1fHFfG6GEIG",//清理缓存用 cf API token
	
    "pageSize" : 5,//每页文章数
    "recentlySize" : 6,//最近文章数
    "readMoreLength":150,//阅读更多截取长度	
    "cacheTime" : 60*60*24*0.5, //网页缓存时长(秒),建议=文章更新频率
    //"themeURL" : "https://gcore.jsdelivr.net/gh/spanishathlete/cfblog@tree/master/themes/default2.0/", // 模板地址,以 "/"" 结尾
	"themeURL" : "https://gcore.jsdelivr.net/gh/spanishathlete/cfblog@tree/master/themes/JustNews/",
	
    "html404" : `<b>404</b>`,//404页面代码
    "codeBeforHead":``,//其他代码,显示在</head>前
    "codeBeforBody":``,//其他代码,显示在</body>前
    "commentCode":``,//评论区代码
    "widgetOther":``,//20201224新增参数,用于右侧 小部件扩展
    "otherCodeA":``,//其他参数A,可设置为 "阅读次数:"四个大字
    "otherCodeB":``,//其他参数A
    "otherCodeC":``,//其他参数A
    "otherCodeD":``,//其他参数A
    "otherCodeE":``,//其他参数A
    "copyRight" :`Powered by <a href="https://www.cloudflare.com">CF Workers</a> & <a href="https://blog.gezhong.vip">CF-Blog </a>`,//自定义版权信息,建议保留大公无私的 Coudflare 和 作者 的链接
"robots":`User-agent: *
Disallow: /admin`//robots.txt设置
};

!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";const n=r(2);async function a(t,e,r){e=decodeURI(e);let a=await g("index"),s=await l("SYSTEM_VALUE_WidgetMenu",!0),o=await l("SYSTEM_VALUE_WidgetCategory",!0),c=await l("SYSTEM_VALUE_WidgetTags",!0),u=await l("SYSTEM_VALUE_WidgetLink",!0),p=(await l("SYSTEM_INDEX_LIST",!0)).slice(0,OPT.recentlySize);for(var h=0;h<p.length;h++)p[h].createDate10=p[h].createDate.substr(0,10),p[h].url="/article/"+p[h].id+"/"+p[h].link+".html";let f=await i(e,r),d=f[0],w=f[1];for(h=0;h<d.length;h++)d[h].createDate10=d[h].createDate.substr(0,10),d[h].createDateYear=d[h].createDate.substr(0,4),d[h].createDateMonth=d[h].createDate.substr(5,7),d[h].createDateDay=d[h].createDate.substr(8,10),d[h].contentLength=d[h].contentText.length,d[h].url="/article/"+d[h].id+"/"+d[h].link+".html";let y=[{title:"上一页",url:"/"+t+"/"+e+"/"+(r-1)}];1==r&&(y=[]);let m=[{title:"下一页",url:"/"+t+"/"+e+"/"+(r+1)}];w&&(m=[]);let S=e+" - "+OPT.siteName,T=e,v={};v.widgetMenuList=s,v.widgetCategoryList=o,v.widgetTagsList=c,v.widgetLinkList=u,v.widgetRecentlyList=p,v.articleList=d,v.pageNewer=y,v.pageOlder=m,v.title=S,v.keyWords=T;let O=Object.assign({},OPT);return O.password="",O.user="",O.cacheToken="",O.cacheZoneId="",v.OPT=O,n.render(a,v)}async function i(t,e,r=OPT.pageSize){t=decodeURI(t),console.log("进入函数: getKVArticleCategory",t,e,r),e=e<=1?1:e;let n=await l("SYSTEM_INDEX_LIST",!0),a=[];for(var i=0,s=n.length;i<s;i++)(n[i].tags.indexOf(t)>-1||n[i].category.indexOf(t)>-1)&&a.push(n[i]);a=p(a,"id");let o=!(a.length>r*e),c=[];for(i=(e-1)*r,s=Math.min(e*r,a.length);i<s;i++)c.push(a[i]);return c=p(c,"id"),[c,o]}async function s(t){t=("00000"+parseInt(t)).substr(-6);let e=await l("SYSTEM_INDEX_LIST",!0),r=-1;for(var n=0,a=e.length;n<a;n++)if(e[n].id==t){r=n;break}let i=await l(t,!0);return null==i||0===i.length?[void 0,void 0,void 0]:[e[r-1],i,e[r+1]]}async function o(t,e=OPT.pageSize){t=t<=1?1:t;let r=await l("SYSTEM_INDEX_LIST",!0),n=!(r.length>e*t),a=[];for(var i=(t-1)*e,s=Math.min(t*e,r.length);i<s;i++)a.push(r[i]);return a=p(a,"id"),[a,n]}async function l(t,e=!1){console.log("------------KV读取---------------------:",t,e);let r=await CFBLOG.get(t);if(!e)return null==r?"[]":r;try{return null==r?[]:JSON.parse(r)}catch(t){return[]}}async function c(t,e){return null!=e&&null!=e&&("object"==typeof e&&(e=JSON.stringify(e)),await CFBLOG.put(t,e))}function u(t){return t>=0&&t<=9?"0"+t:t}async function g(t){return t=t.replace(".html",""),(await fetch(OPT.themeURL+t+".html",{cf:{cacheTtl:600}})).text()}function p(t,e,r=!0){return t.sort((function(t,n){var a=t[e],i=n[e];return r?a>i?-1:a<i?1:0:a<i?-1:a>i?1:0}))}function h(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(t){return!1}return!("object"!=typeof t||!t)}async function f(t){const{headers:e}=t,r=e.get("content-type")||"";if(r.includes("application/json")){let e=JSON.stringify(await t.json()),r=JSON.parse(e),a={category:[]};for(var n=0;n<r.length;n++)"tags"==r[n].name?a[r[n].name]=r[n].value.split(","):r[n].name.includes("category")?a.category.push(r[n].value):a[r[n].name]=r[n].value;return a}if(r.includes("application/text"))return await t.text();if(r.includes("text/html"))return await t.text();if(r.includes("form")){const e=await t.formData(),r={};for(const t of e.entries())r[t[0]]=t[1];return JSON.stringify(r)}{const e=await t.blob();return URL.createObjectURL(e)}}addEventListener("fetch",t=>{t.respondWith(async function(t){let e=t.request,r=new URL(t.request.url);null==OPT.privateBlog&&(OPT.privateBlog=!1);let i=r.pathname.trim("/").split("/");if(("admin"===i[0]||!0===OPT.privateBlog)&&!function(t){const e=t.headers.get("Authorization");if(!e||!/^Basic [A-Za-z0-9._~+/-]+=*$/i.test(e))return!1;const[r,n]=function(t){try{return atob(t.split(" ").pop()).split(":")}catch(t){return[]}}(e);return console.log("-----parseBasicAuth----- ",r,n),r===OPT.user&&n===OPT.password}(t.request))return new Response("Unauthorized",{headers:{"WWW-Authenticate":'Basic realm="cfblog"',"Access-Control-Allow-Origin":"*"},status:401});if("admin"===i[0]&&"export"===i[1]){console.log("开始导出");let t=await async function t(e=[],r="",n=1){const a=await CFBLOG.list({limit:n,cursor:r});if(!1 in a)return{};if(e=e.concat(a.keys),console.log("导出: ",typeof a,JSON.stringify(a)),a.list_complete){let t={OPT:OPT};for(let r=0;r<e.length;++r){const n=await CFBLOG.get(e[r].name);null!=n&&(t[e[r].name]=h(n)?JSON.parse(n):n)}return t}return await t(e,a.cursor,n)}();return new Response(JSON.stringify(t),{headers:{"content-type":"application/octet-stream;charset=utf-8","Content-Disposition":"attachment; filename=cfblog-"+(d=new Date,w=u(d.getMonth()+1),y=u(d.getDate()),m=u(d.getHours()),S=u(d.getMinutes()),T=u(d.getSeconds()),v=d.getFullYear()+"-"+w+"-"+y+"T"+m+":"+S+":"+T,v+".json")}})}var d,w,y,m,S,T,v;console.log(r.pathname);let O=r.searchParams.get("theme"),E=r.searchParams.get("pageSize");O&&(OPT.themeURL="https://gcore.jsdelivr.net/gh/gdtool/cloudflare-workers-blog@master/themes/"+O+"/");E&&(OPT.pageSize=parseInt(E));"https://gcore.jsdelivr.net/gh/gdtool/cloudflare-workers-blog@master/themes/default/"==OPT.themeURL&&(OPT.themeURL="https://gcore.jsdelivr.net/gh/gdtool/cloudflare-workers-blog@master/themes/default2.0/");if(console.log("theme pageSize",OPT.pageSize,OPT.themeURL),"/robots.txt"==r.pathname)return new Response(OPT.robots+"\nSitemap: https://"+OPT.siteDomain+"/sitemap.xml",{headers:{"content-type":"text/plain;charset=UTF-8"},status:200});if("/favicon.ico"==r.pathname)return new Response("404",{headers:{"content-type":"text/plain;charset=UTF-8"},status:404});let _="",b="",L="";0==i.length||""==i[0]?(_="page",b="1"):(_=i[0],b=void 0===i[1]?1:i[1],L=void 0===i[2]?1:i[2]);const D=caches.default,M="https://"+OPT.siteDomain+"/"+_+"/"+b+"/"+L,x=new Request(M,e);console.log("cacheFullPath:",M);let k=await D.match(x);if(k)return k;if("sitemap.xml"==_)k=new Response(await async function(){console.log("进入函数 getSiteMap");let t=await l("SYSTEM_INDEX_LIST",!0),e='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';for(var r=0,n=t.length;r<n;r++)e+="\n\t<url>",e+="\n\t\t<loc>https://"+OPT.siteDomain+"/article/"+t[r].id+"/"+t[r].link+".html</loc>",e+="\n\t\t<lastmod>"+t[r].createDate.substr(0,10)+"</lastmod>",e+="\n\t\t<changefreq>"+(void 0===t[r].changefreq?"daily":t[r].changefreq)+"</changefreq>",e+="\n\t\t<priority>"+(void 0===t[r].priority?"0.5":t[r].priority)+"</priority>",e+="\n\t</url>";return e+="\n</urlset>",e}(),{headers:{"content-type":"text/xml;charset=UTF-8"},status:200});else{let e=await async function(t){let e=new URL(t.url).pathname.trim("/").split("/"),r="",i="",u="";0==e.length||""==e[0]?(r="page",i="1"):(r=e[0],i=void 0===e[1]?1:e[1],u=void 0===e[2]?1:e[2]);if("page"==r&&parseInt(i)>0)return await async function(t,e){let r=await g("index"),a=await l("SYSTEM_VALUE_WidgetMenu",!0),i=await l("SYSTEM_VALUE_WidgetCategory",!0),s=await l("SYSTEM_VALUE_WidgetTags",!0),o=await l("SYSTEM_VALUE_WidgetLink",!0),c=await l("SYSTEM_INDEX_LIST",!0),u=c.slice(0,OPT.recentlySize);for(var p=0;p<u.length;p++)u[p].createDate10=u[p].createDate.substr(0,10),u[p].url="/article/"+u[p].id+"/"+u[p].link+".html";let h=c.slice((e-1)*OPT.pageSize,e*OPT.pageSize);for(p=0;p<h.length;p++)h[p].createDate10=h[p].createDate.substr(0,10),h[p].createDateYear=h[p].createDate.substr(0,4),h[p].createDateMonth=h[p].createDate.substr(5,7),h[p].createDateDay=h[p].createDate.substr(8,10),h[p].contentLength=h[p].contentText.length,h[p].url="/article/"+h[p].id+"/"+h[p].link+".html";let f=[{title:"上一页",url:"/page/"+(e-1)}];1==e&&(f=[]);let d=[{title:"下一页",url:"/page/"+(e+1)}];e*OPT.pageSize>=c.length&&(d=[]);let w=(e>1?"page "+e+" - ":"")+OPT.siteName,y=OPT.keyWords,m={};m.widgetMenuList=a,m.widgetCategoryList=i,m.widgetTagsList=s,m.widgetLinkList=o,m.widgetRecentlyList=u,m.articleList=h,m.pageNewer=f,m.pageOlder=d,m.title=w,m.keyWords=y;let S=Object.assign({},OPT);return S.password="",S.user="",S.cacheToken="",S.cacheZoneId="",m.OPT=S,n.render(r,m)}(0,parseInt(i));if("category"==r&&i.length>0)return await a(r,i,parseInt(u));if("tags"==r&&i.length>0)return await a(r,i,parseInt(u));if("article"==r&&i.length>0)return await async function(t,e,r){let a=await g("article"),i=await l("SYSTEM_VALUE_WidgetMenu",!0),o=await l("SYSTEM_VALUE_WidgetCategory",!0),c=await l("SYSTEM_VALUE_WidgetTags",!0),u=await l("SYSTEM_VALUE_WidgetLink",!0),p=(await l("SYSTEM_INDEX_LIST",!0)).slice(0,OPT.recentlySize);for(var h=0;h<p.length;h++)p[h].createDate10=p[h].createDate.substr(0,10),p[h].url="/article/"+p[h].id+"/"+(void 0===p[h].link?"detail":p[h].link)+".html";let f=await s(e);for(h=0;h<f.length;h++)f[h]&&(f[h].createDate10=f[h].createDate.substr(0,10),f[h].contentLength=f[h].contentText.length,f[h].url="/article/"+f[h].id+"/"+(void 0===f[h].link?"detail":f[h].link)+".html");let d=f[1];d&&(d.createDate10=d.createDate.substr(0,10),d.createDateYear=d.createDate.substr(0,4),d.createDateMonth=d.createDate.substr(5,7),d.createDateDay=d.createDate.substr(8,10),d.contentLength=d.contentText.length);let w=[],y=[];f[0]&&w.push(f[0]);f[2]&&y.push(f[2]);let m=d.title+" - "+OPT.siteName,S=d.tags.concat(d.category).join(","),T={};T.widgetMenuList=i,T.widgetCategoryList=o,T.widgetTagsList=c,T.widgetLinkList=u,T.widgetRecentlyList=p,T.articleSingle=d,T.articleNewer=w,T.articleOlder=y,T.title=m,T.keyWords=S;let v=Object.assign({},OPT);return v.password="",v.user="",v.cacheToken="",v.cacheZoneId="",T.OPT=v,n.render(a,T)}(0,i);if("search"!=r)return"admin"==r?await async function(t,e){new URL(t.url);if(1==e.length||"list"==e[1]){let t=await g("admin/index"),e=await l("SYSTEM_VALUE_WidgetCategory",!0),r=await l("SYSTEM_VALUE_WidgetMenu",!0),n=await l("SYSTEM_VALUE_WidgetLink",!0);return t.r("categoryJson",JSON.stringify(e)).r("menuJson",JSON.stringify(r)).r("linkJson",JSON.stringify(n))}if("publish"==e[1]){let t=await l("SYSTEM_INDEX_LIST",!0),e=[];for(var r=0;r<t.length;r++)if("object"==typeof t[r].tags)for(var n=0;n<t[r].tags.length;n++)-1==e.indexOf(t[r].tags[n])&&e.push(t[r].tags[n]);return await c("SYSTEM_VALUE_WidgetTags",JSON.stringify(e)),await async function(t=OPT.cacheZoneId,e=OPT.cacheToken){if(null==t||null==e||t.length<5||e.length<5)return!1;let r=await fetch(`https://api.cloudflare.com/client/v4/zones/${t}/purge_cache`,{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:'{"purge_everything":true}'});return(await r.json()).success}()?'{"msg":"published ,purge Cache true","rst":true}':'{"msg":"published ,buuuuuuuuuuuut purge Cache false !!!!!!","rst":true}'}if("getList"==e[1]){let t=void 0===e[2]?1:parseInt(e[2]),r=await o(t,20);return JSON.stringify(r[0])}if("edit"==e[1]){let t=e[2],r=await g("admin/edit"),n=await l("SYSTEM_VALUE_WidgetCategory"),a=await l(t);return r.r("categoryJson",n).r("articleJson",a.replaceAll("script>","script＞"))}if("saveConfig"==e[1]){const e=await f(t);let r=e.WidgetCategory,n=e.WidgetMenu,a=e.WidgetLink;return h(r)&&h(n)?(await c("SYSTEM_VALUE_WidgetCategory",r),await c("SYSTEM_VALUE_WidgetMenu",n),await c("SYSTEM_VALUE_WidgetLink",a),'{"msg":"saved","rst":true}'):'{"msg":"Not a JSON object","rst":false}'}if("import"==e[1]){let e=(await f(t)).importJson;if(console.log("开始导入",typeof e),h(e)){let t=JSON.parse(e),r=Object.keys(t);for(let e=0;e<r.length;++e)console.log(r[e],t[r[e]]),await c(r[e],t[r[e]]);return'{"msg":"import success!","rst":true}'}return'{"msg":" importJson Not a JSON object","rst":false}'}if("saveAddNew"==e[1]){const e=await f(t);let r=e.title,n=e.img,a=e.link,i=e.createDate,s=e.category,o=e.tags,u=void 0===e.priority?"0.5":e.priority,g=void 0===e.changefreq?"daily":e.changefreq,h=e["content-markdown-doc"],d=e["content-html-code"],w="",y="";if(r.length>0&&i.length>0&&s.length>0&&h.length>0&&d.length>0){y=await async function(){let t=await l("SYSTEM_INDEX_NUM");return""===t||null===t||"[]"===t||void 0===t?(await c("SYSTEM_INDEX_NUM",1),"000001"):(await c("SYSTEM_INDEX_NUM",parseInt(t)+1),("00000"+(parseInt(t)+1)).substr(-6))}(),w=d.replace(/<\/?[^>]*>/g,"").trim().substring(0,OPT.readMoreLength);let t={id:y,title:r,img:n,link:a,createDate:i,category:s,tags:o,contentMD:h,contentHtml:d,contentText:w,priority:u,changefreq:g};await c(y,JSON.stringify(t));let e={id:y,title:r,img:n,link:a,createDate:i,category:s,tags:o,contentText:w,priority:u,changefreq:g},f=await l("SYSTEM_INDEX_LIST",!0),m=[];return m.push(e),m=m.concat(f),m=p(m,"id"),await c("SYSTEM_INDEX_LIST",JSON.stringify(m)),'{"msg":"added OK","rst":true,"id":"'+y+'"}'}return'{"msg":"信息不全","rst":false}'}if("delete"==e[1]){let t=e[2];if(6==t.length){await CFBLOG.delete(t);let e=await l("SYSTEM_INDEX_LIST",!0);for(r=0;r<e.length;r++)t==e[r].id&&e.splice(r,1);return await c("SYSTEM_INDEX_LIST",JSON.stringify(e)),'{"msg":"Delete ('+t+')  OK","rst":true,"id":"'+t+'"}'}return'{"msg":"Delete  false ","rst":false,"id":"'+t+'"}'}if("saveEdit"==e[1]){const e=await f(t);let n=e.title,a=e.img,i=e.link,s=e.createDate,o=e.category,u=e.tags,g=e["content-markdown-doc"],h=e["content-html-code"],d=void 0===e.priority?"0.5":e.priority,w=void 0===e.changefreq?"daily":e.changefreq,y="",m=e.id;if(n.length>0&&s.length>0&&o.length>0&&g.length>0&&h.length>0){y=h.replace(/<\/?[^>]*>/g,"").trim().substring(0,OPT.readMoreLength);let t={id:m,title:n,img:a,link:i,createDate:s,category:o,tags:u,contentMD:g,contentHtml:h,contentText:y,priority:d,changefreq:w};await c(m,JSON.stringify(t));let e={id:m,title:n,img:a,link:i,createDate:s,category:o,tags:u,contentText:y,priority:d,changefreq:w},f=await l("SYSTEM_INDEX_LIST",!0);for(r=0;r<f.length;r++)m==f[r].id&&f.splice(r,1);return f.push(e),f=p(f,"id"),await c("SYSTEM_INDEX_LIST",JSON.stringify(f)),'{"msg":"Edit OK","rst":true,"id":"'+m+'"}'}return'{"msg":"信息不全","rst":false}'}return'{"msg":"some errors","rst":false}'}(t,e):OPT.html404;return OPT.html404}(t.request);k=new Response(e,{headers:{"content-type":"text/html;charset=UTF-8"},status:200})}"admin"==_?k.headers.set("Cache-Control","no-store"):(k.headers.set("Cache-Control","public, max-age="+OPT.cacheTime),t.waitUntil(D.put(M,k.clone())));return k}(t))}),String.prototype.trim=function(t){return t?this.replace(new RegExp("^\\"+t+"+|\\"+t+"+$","g"),""):this.replace(/^\s+|\s+$/g,"")},String.prototype.r=function(t,e){return null!=e&&(e=e.replace(new RegExp("[$]","g"),"$$$$")),this.replace(new RegExp("\x3c!--{"+t+"}--\x3e","g"),e)},String.prototype.replaceAll=function(t,e){return this.replace(new RegExp(t,"g"),e)}},function(t,e,r){t.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function r(t){return"function"==typeof t}function n(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function a(t,e){return null!=t&&"object"==typeof t&&e in t}var i=RegExp.prototype.test,s=/\S/;function o(t){return!function(t,e){return i.call(t,e)}(s,t)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},c=/\s*/,u=/\s+/,g=/\s*=/,p=/\s*\}/,h=/#|\^|\/|>|\{|&|=|!/;function f(t){this.string=t,this.tail=t,this.pos=0}function d(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function w(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}f.prototype.eos=function(){return""===this.tail},f.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},f.prototype.scanUntil=function(t){var e,r=this.tail.search(t);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},d.prototype.push=function(t){return new d(t,this)},d.prototype.lookup=function(t){var e,n,i,s=this.cache;if(s.hasOwnProperty(t))e=s[t];else{for(var o,l,c,u=this,g=!1;u;){if(t.indexOf(".")>0)for(o=u.view,l=t.split("."),c=0;null!=o&&c<l.length;)c===l.length-1&&(g=a(o,l[c])||(n=o,i=l[c],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(i))),o=o[l[c++]];else o=u.view[t],g=a(u.view,t);if(g){e=o;break}u=u.parent}s[t]=e}return r(e)&&(e=e.call(this.view)),e},w.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},w.prototype.parse=function(t,r){var a=this.templateCache,i=t+":"+(r||y.tags).join(":"),s=void 0!==a,l=s?a.get(i):void 0;return null==l&&(l=function(t,r){if(!t)return[];var a,i,s,l=!1,d=[],w=[],m=[],S=!1,T=!1,v="",O=0;function E(){if(S&&!T)for(;m.length;)delete w[m.pop()];else m=[];S=!1,T=!1}function _(t){if("string"==typeof t&&(t=t.split(u,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(n(t[0])+"\\s*"),i=new RegExp("\\s*"+n(t[1])),s=new RegExp("\\s*"+n("}"+t[1]))}_(r||y.tags);for(var b,L,D,M,x,k,P=new f(t);!P.eos();){if(b=P.pos,D=P.scanUntil(a))for(var U=0,N=D.length;U<N;++U)o(M=D.charAt(U))?(m.push(w.length),v+=M):(T=!0,l=!0,v+=" "),w.push(["text",M,b,b+1]),b+=1,"\n"===M&&(E(),v="",O=0,l=!1);if(!P.scan(a))break;if(S=!0,L=P.scan(h)||"name",P.scan(c),"="===L?(D=P.scanUntil(g),P.scan(g),P.scanUntil(i)):"{"===L?(D=P.scanUntil(s),P.scan(p),P.scanUntil(i),L="&"):D=P.scanUntil(i),!P.scan(i))throw new Error("Unclosed tag at "+P.pos);if(x=">"==L?[L,D,b,P.pos,v,O,l]:[L,D,b,P.pos],O++,w.push(x),"#"===L||"^"===L)d.push(x);else if("/"===L){if(!(k=d.pop()))throw new Error('Unopened section "'+D+'" at '+b);if(k[1]!==D)throw new Error('Unclosed section "'+k[1]+'" at '+b)}else"name"===L||"{"===L||"&"===L?T=!0:"="===L&&_(D)}if(E(),k=d.pop())throw new Error('Unclosed section "'+k[1]+'" at '+P.pos);return function(t){for(var e,r=[],n=r,a=[],i=0,s=t.length;i<s;++i)switch((e=t[i])[0]){case"#":case"^":n.push(e),a.push(e),n=e[4]=[];break;case"/":a.pop()[5]=e[2],n=a.length>0?a[a.length-1][4]:r;break;default:n.push(e)}return r}(function(t){for(var e,r,n=[],a=0,i=t.length;a<i;++a)(e=t[a])&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(n.push(e),r=e));return n}(w))}(t,r),s&&a.set(i,l)),l},w.prototype.render=function(t,e,r,n){var a=this.getConfigTags(n),i=this.parse(t,a),s=e instanceof d?e:new d(e,void 0);return this.renderTokens(i,s,r,t,n)},w.prototype.renderTokens=function(t,e,r,n,a){for(var i,s,o,l="",c=0,u=t.length;c<u;++c)o=void 0,"#"===(s=(i=t[c])[0])?o=this.renderSection(i,e,r,n,a):"^"===s?o=this.renderInverted(i,e,r,n,a):">"===s?o=this.renderPartial(i,e,r,a):"&"===s?o=this.unescapedValue(i,e):"name"===s?o=this.escapedValue(i,e,a):"text"===s&&(o=this.rawValue(i)),void 0!==o&&(l+=o);return l},w.prototype.renderSection=function(t,n,a,i,s){var o=this,l="",c=n.lookup(t[1]);if(c){if(e(c))for(var u=0,g=c.length;u<g;++u)l+=this.renderTokens(t[4],n.push(c[u]),a,i,s);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)l+=this.renderTokens(t[4],n.push(c),a,i,s);else if(r(c)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(n.view,i.slice(t[3],t[5]),(function(t){return o.render(t,n,a,s)})))&&(l+=c)}else l+=this.renderTokens(t[4],n,a,i,s);return l}},w.prototype.renderInverted=function(t,r,n,a,i){var s=r.lookup(t[1]);if(!s||e(s)&&0===s.length)return this.renderTokens(t[4],r,n,a,i)},w.prototype.indentPartial=function(t,e,r){for(var n=e.replace(/[^ \t]/g,""),a=t.split("\n"),i=0;i<a.length;i++)a[i].length&&(i>0||!r)&&(a[i]=n+a[i]);return a.join("\n")},w.prototype.renderPartial=function(t,e,n,a){if(n){var i=this.getConfigTags(a),s=r(n)?n(t[1]):n[t[1]];if(null!=s){var o=t[6],l=t[5],c=t[4],u=s;0==l&&c&&(u=this.indentPartial(s,c,o));var g=this.parse(u,i);return this.renderTokens(g,e,n,u,a)}}},w.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);if(null!=r)return r},w.prototype.escapedValue=function(t,e,r){var n=this.getConfigEscape(r)||y.escape,a=e.lookup(t[1]);if(null!=a)return"number"==typeof a&&n===y.escape?String(a):n(a)},w.prototype.rawValue=function(t){return t[1]},w.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"==typeof t?t.tags:void 0},w.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!e(t)?t.escape:void 0};var y={name:"mustache.js",version:"4.1.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){m.templateCache=t},get templateCache(){return m.templateCache}},m=new w;return y.clearCache=function(){return m.clearCache()},y.parse=function(t,e){return m.parse(t,e)},y.render=function(t,r,n,a){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+(e(i=t)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return m.render(t,r,n,a)},y.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return l[t]}))},y.Scanner=f,y.Context=d,y.Writer=w,y}()}]);


