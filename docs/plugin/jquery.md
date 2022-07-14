---
title: jquery
author: Closerdoor
date: '2022-06-24'
---

## 引入使用
`https://www.bootcdn.cn/`
```
https://www.bootcdn.cn/jquery/1.12.1/
jquery 
v1 兼容到ie6
v2 过滤阶段
v3 不兼容IE8  全面支持移动端
```

### 常用语法
```js
$(this).index() //获取下标

```
### 获取节点
```js
$(this).eq(0);
$(this).children('p');
$(this).parent('p');
$(this).parents('p');
$(this).siblings('span');
$(this).next('.active');
$(this).nextAll('.active');
$(this).prev('.active');
$(this).prevAll('.active');
$(this).find('.active');
$(this).filter('.active');
$(this).not('.active');
```
### 属性与样式
```js
$(this).addClass('active').removeClass('active');
$(this).toggleClass('active');

$(this).attr('alt')); 
$(this).attr('alt', 'hahaha'));
$(this).attr({ 'alt': 'iiii', 'src': 'images/re1.png' }));
//attr() prop()
//attr 操作标签自定义属性 和 非功能文本属性  attr可以读取和设置
//prop 操作标签默认属性 和 默认功能属性   prop只能获取

//removeAttr 更灵活 可以删除标签上任何属性(属性名+属性值)
//removeProp 更保守 标签自身属性不会删除 只会设置值为undefined

val() //.value  传参 设置   不传参 获取
text() //innerText 传参 设置  不传参 获取
html() //innerHTML   传参 设置   不传参 获取

$(this).css()
$(this).offset() //参考原点是document文档左上角
$(this).position() //参考原点是定位父级左上角 只能获取 不能设置
$(document).scrollTop()
```

### 事件方法
```js
$(this).ready()
$(this).focus()
$(this).click()
$(this).hover()
//on('事件名称','委托选择器',事件句柄) 
//off('事件名称')
//one 执行一次自动解绑(嵌套监听闭包环境,单次注销)
$('.box').on('click',this.function(){})
```
### 动画
```js
$(this).sliderDown() //向下展开
$(this).slideUp() //向上收起
$(this).slideToggle() //上下展开收起切换
```