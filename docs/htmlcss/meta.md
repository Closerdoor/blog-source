---
title: meta
author: Closerdoor
date: '2021-12-12'
---

# html中的meta标签
## 简介
meta是用于描述数据的数据。它不会显示在页面上，但是机器却可以识别。
meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。
## 组成
meta标签共有两个属性，分别是http-equiv属性和name属性。
meta的必需属性是content，当然并不是说meta标签里一定要有content，而是当有http-equiv或name属性的时候，一定要有content属性对其进行说明。
### http-equiv
http-equiv顾名思义，相当于http的文件头作用。比如说定义些HTTP参数啥的。
meta标签中http-equiv属性语法格式是：
`<meta http-equiv="参数" content="具体的描述">`

比如，在浏览器中添加
```html
<meta http-equiv="charset" content="iso-8859-1">
<meta http-equiv="expires" content="31 Dec 2008">
```
则浏览器的http请求头部就会包括这些:
```
charset:iso-8859-1
expires:31 Dec 2008
```
其中http-equiv属性主要有以下几种参数：
* **content-Type(设定网页字符集)(推荐使用HTML5的方式)**

说明：用于设定网页字符集，便于浏览器解析与渲染页面

举例：
```html
<meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧的HTML，不推荐
<meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
```
* **X-UA-Compatible(浏览器采取何种版本渲染当前页面)**

说明：用于告知浏览器以何种版本来渲染页面。（一般都设置为最新模式，在各大框架中这个设置也很常见。）

举例：
```html
//指定IE和Chrome使用最新版本渲染当前页面
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
```
* **cache-control(指定请求和响应遵循的缓存机制)**
**用法1.**

说明：指导浏览器如何缓存某个响应以及缓存多长时间。

举例:
`<meta http-equiv="cache-control" content="no-cache">`
共有以下几种用法：
no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）
public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）
maxage : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。

**用法2.(禁止百度自动转码)**
说明：用于禁止当前页面在移动端浏览时，被百度自动转码。虽然百度的本意是好的，但是转码效果很多时候却不尽人意。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。

举例：
`<meta http-equiv="Cache-Control" content="no-siteapp" />`
* **expires(网页到期时间)**

说明:用于设定网页的到期时间，过期后网页必须到服务器上重新传输。

举例：
`<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />`
* **refresh(自动刷新并指向某页面)**
  
说明：网页将在设定的时间内，自动刷新并调向设定的网址。

举例:
`<meta http-equiv="refresh" content="2；URL=http://www.lxxyx.win/"> //意思是2秒后跳转向我的博客`
* **Set-Cookie(cookie设定)**
  
说明：如果网页过期。那么这个网页存在本地的cookies也会被自动删除。
```html
<meta http-equiv="Set-Cookie" content="name, date"> //格式
<meta http-equiv="Set-Cookie" content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> 
//具体范例
```

### name
name属性主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。

meta标签中name属性语法格式是：
`<meta name="参数" content="具体的描述">。`
其中name属性共有以下几种参数。(A-C为常用属性)
* **keywords(关键字)**
  
说明：用于告诉搜索引擎，你网页的关键字。

举例：
`<meta name="keywords" content="Lxxyx,博客，文科生，前端">`
* **description(网站内容的描述)**
  
说明：用于告诉搜索引擎，你网站的主要内容。

举例：
`<meta name="description" content="文科生，热爱前端与编程。目前大二，这是我的前端博客">`
* **viewport(移动端的窗口)**
  
这个属性常用于设计移动端网页。在用bootstrap,AmazeUI等框架时候都有用过viewport。

举例（常用范例）：
`<meta name="viewport" content="width=device-width, initial-scale=1">`
* **robots(定义搜索引擎爬虫的索引方式)**
  
说明：robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。
content的参数有all,none,index,noindex,follow,nofollow。默认是all。

举例：
`<meta name="robots" content="none">`
具体参数如下：
1.none : 搜索引擎将忽略此网页，等价于noindex，nofollow。
2.noindex : 搜索引擎不索引此网页。
3.nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。
4.all : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。
5.index : 搜索引擎索引此网页。
6.follow : 搜索引擎继续通过此网页的链接索引搜索其它的网页。
* **author(作者)**
  
说明：用于标注网页作者

举例：
`<meta name="author" content="Lxxyx,841380530@qq.com">`
* **generator(网页制作软件)**
  
说明：用于标明网页是什么软件做的

举例: (不知道能不能这样写)：
`<meta name="generator" content="Sublime Text3">`
* **copyright(版权)**
  
说明：用于标注版权信息

举例：
`<meta name="copyright" content="Lxxyx"> //代表该网站为Lxxyx个人版权所有。`
* **revisit-after(搜索引擎爬虫重访时间)**
  
说明：如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。

举例：
`<meta name="revisit-after" content="7 days" >`
* **renderer(双核浏览器渲染方式)**
  
说明：renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。

举例：
```html
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```

## <meta>标签 name = "viewport"详解

https://zhuanlan.zhihu.com/p/42151227
https://zhuanlan.zhihu.com/p/70137917

## 常用标签
```html
<meta charset="utf-8"><!-- 放在第一行 -->
<!-- 页面关键词 keywords -->
<meta name="keywords" content="your keywords">
<!-- 页面描述内容 description -->
<meta name="description" content="your description">
<!-- 页面标题<title>标签(head 头部必须) -->
<title>your title</title>
```
