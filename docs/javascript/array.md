---
title: 数组
author: Closerdoor
date: '2021-12-12'
---

## arr.forEach 原理
```js
Array.prototype._forEach = function(callback, thisArg){
  if(typeof callback != 'function'){
    throw new TypeError('callback is not a function')
  }
  let context = thisArg || this;
  for(let i = 0;i < this.length;i++){
      callback.call(context,this[i],i,this)
  }
}

```
## arr.concat 原理
```js
Array.prototype._concat = function () {
  let target = this instanceof Array ? this : [];
  //将形参转为数组
  let args = Array.prototype.slice.call(arguments);
  //生成一个新数组
  let res = [];
  while (target.length > 0) {
    res.push(target.shift())
  }
  //对于需要合并对象 数组
  while (args.length > 0) {
    let value = args.shift();
    //扁平化
    if (value instanceof Array) {
      for (let item of value) {
        res.push(item);
      }
    }
    //直接插入
    else {
      res.push(value);
    }
  }
  return res;
}
```
## arr.indexOf() 原理
```js
Array.prototype.myIndexOf = function(element, fromIndex) {
  const len = this.length
  if (typeof fromIndex !== 'number') fromIndex = 0
  if (fromIndex < 0) fromIndex = len - fromIndex

  for (let i = fromIndex; i < len; i++) {
      if (element === this[i]) return i
  }
}
```
## arr.reverse() 原理
```js
function reverse(arr) {
  let newArr = [];
  for(let i = arr.length - 1;i >= 0;i--) {
    newArr[newArr.length] = arr[i]
  }
  return newArr;
}
```