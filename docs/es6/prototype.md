---
title: 原型prototype
author: Closerdoor
date: '2022-06-14'
---

## prototype
什么是原型和原型链
每一个引用类型(对象)都有一个隐式属性__proto__(是个对象),在new实例化的时候,添加到实例对象的隐式属性,指向相应构造函数的原型

每个函数有一个属性叫prototype(原型，是个对象)。Array.prototype,Object.prototype
prototype 原型是一个对象，对象上有一个默认属性constructor，constructor指向函数本身
`Function.constructor === Function.prototype.constructor === Function`
prototype上还有一个默认属性__proto__，指向相应构造函数的原型(Object.prototype)
obj.__proto__ = Object.prototype
实例对象
实例对象 = new 构造函数
__proto__属性，new实例化的时候添加到实例对象的隐式属性，是一个对象
__proto__指向实例对象构造函数的原型,即 实例对象.__proto__ = function.prototype

## constructor 
constructor prototype中的this指向谁? 实例对象
实例对象.constructor 就是构造函数原型上的constructor(实例对象.constructor === Function.prototype.constructor)
`f.constructor === fn.prototype.constructor === fn`
##
建立一个构造函数，每次实例化时统计次数
```js
function Animal() {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Animal.prototype.list = [];
Animal.prototype.init = function() {
  this.list.push(this)
}
Animal.prototype.calc = function() {
  console.log(this.list.length)
}
```

## 继承
### js经典组合继承
1.继承构造函数(constructor)
父类的构造函数在子类中call执行 传参
2.继承原型
Children.prototype = new Parent();
Children.prototype.constructor = Children;
Children.prototype.__proto__ = Parent.prototype;
```js

```
### Object.create实现类式继承