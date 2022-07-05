---
title: 数组方法
author: Closerdoor
date: '2021-12-12'
---

## 方法汇总
```js
toString()		// 把数组转换成字符串，逗号分隔每一项
valueOf()         // 返回数组对象值本身
// 1 栈操作(先进后出)
push()
pop() 		//取出数组中的最后一项，修改length属性
// 2 队列操作(先进先出)
push()
shift()		//取出数组中的第一个元素，修改length属性
unshift() 	//在数组最前面插入项，返回数组的长度
// 3 排序方法
reverse()	//翻转数组
sort(); 	//即使是数组sort也是根据字符，从小到大排序
// 带参数的sort是如何实现的？
// 4 操作方法
concat()  	//把参数拼接到当前数组
slice() 	//从当前数组中截取一个新的数组，不影响原来的数组，参数start从0开始,end从1开始
splice()	//删除或替换当前数组的某些项目，参数start, deleteCount, options(要替换的项目)
// 5 位置方法
indexOf()、lastIndexOf()   //如果没找到返回-1
includes()
// 6 迭代方法 不会修改原数组(可选)
every()、filter()、forEach()、map()、reduce()、some()
// 7 方法将数组的所有元素连接到一个字符串中。
join()
//
flat()
```
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
## arr.lastIndexOf
返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。
```js
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
## arr.sort()
默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
```js
arr.sort((next,prev)=>{
  return next - prev
})
```
## arr.flat()

## arr.filter()

## arr.reduce() 原理
### 求字符串中字母出现的次数
```js
//返回 {p:2,a:3,...}
const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';
let res = str.split('').reduce((total,curr,index) => {
  if(total[curr]){
    total[curr]++
  }else {
    total[curr] = 1
  }
  return total
},{})
```

