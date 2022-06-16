---
title: 对象高级
author: Closerdoor
date: '2022-06-14'
---
## obj.hasOwnProperty(key)和in
判断一个属性是否在obj内
obj.hasOwnProperty(key)  只判断该对象是否含有自身属性
key in obj  可查找到原型链上的属性
```js
function Dog(name = '小明') {
  this.name = name;
}
Dog.prototype.age = 13;
let obj = new Dog()
console.log(obj.hasOwnProperty('name')) // true
console.log(obj.hasOwnProperty('age')) // false
console.log('name' in obj) // true
console.log('age' in obj) // true
console.log('__proto__' in obj) // true
```
## isPrototypeOf
构造函数.原型.isPrototypeOf(实例对象)
实例对象的__proto__是否是这个构造函数的原型
```js
Array.prototype.isPrototypeOf(arr)
```
## Object.getPrototypeOf(arr)
返回arr的__proto__

## 整理一下对象方法 valueOf toString 