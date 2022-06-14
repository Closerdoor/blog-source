---
title: 原型prototype
author: Closerdoor
date: '2022-06-14'
---

## prototype
函数有一个属性是prototype。Array.prototype,Object.prototype
prototype 原型是一个对象，对象上有一个默认属性constructor，constructor指向函数本身
function.prototype.constructor === function

实例对象
实例对象 = new 构造函数
__proto__属性，new实例化的时候添加到实例对象的隐式属性，是一个对象
__proto__指向实例对象构造函数的原型,即function.prototype
## constructor 