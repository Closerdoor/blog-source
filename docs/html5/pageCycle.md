---
title: 页面生命周期
author: Closerdoor
date: '2022-06-14'
---

## 页面 生命周期事件
```
window.onbeforeunload  //页面跳转之前执行
window.onunload //用户离开页面时触发
window.onload //页面完成加载时执行
window.onpagehide //页面隐藏的时候执行
window.onpageshow //页面显示的时候执行
```
### beforeunload————页面跳转之前执行
a链接跳转(当前页面跳转)
```js
window.onbeforeunload = function () {
  localStorage.setItem('beforeunload', 'check');
  // return false;
}
```
### pagehide————页面隐藏时执行
```js
window.onpagehide = function () {
  localStorage.setItem('pagehide', 'check')
}
```
### unload————用户离开页面时触发
```js
window.onunload = function () {
  localStorage.setItem('unload', 'check')
}
```
### pageshow————页面显示时执行
```js
window.onpageshow = function () {
  localStorage.setItem('pageshow', 'check')
}
```
### load————页面完成加载时执行
```js
window.onload = function () {
  localStorage.setItem('load', 'check')
}
```
## 页面可见性
```js
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState == 'hidden') {
    document.title = '页面不可见';
  } else {
    document.title = '页面可见';
  }
});
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '页面不可见';
  }
  else {
    document.title = '页面可见';
  }
});
```
## 页面聚焦
```js
window.onblur = function () {
  document.title = "页面失去焦点";
}

window.onfocus = function () {
  document.title = "页面聚焦";
}
```