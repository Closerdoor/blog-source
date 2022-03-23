---
title: javascript
author: Closerdoor
date: '2021-12-12'
---

## string 字符串
### 字符串转义符
### 字符串换行处理
### toString()
## number 数字
**范围**
```
最小值：Number.MIN_VALUE，这个值为： 5e-324
最大值：Number.MAX_VALUE，这个值为： 1.7976931348623157e+308
无穷大：Infinity
无穷小：-Infinity
```
### Number()
```
Number(null) // 0
Number(undefined) // NaN
Number(NaN) // NaN
Number([]) // 0
Number([123]) // 123
Number(['123']) // 123
Number([undefined]) // 0
Number({}) // NaN
```
### parseInt() 和 parseFloat()

### NaN 和 isNaN()
NaN 与任何值都不相等，包括他本身  
NaN进行任何数学运算 结果也是 NaN  
`isNaN`方法可以用来判断一个值是否为`NaN`。但是，`isNaN`只对数值有效，如果传入其他值，会先转成数值再判断。
```
function meIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}
//`NaN`为唯一不等于自身的值的这个特点
function meIsNaN(value) {
  return value !== value;
}
```
### isFinite
`isFinite`方法返回一个布尔值，表示某个值是否为正常的数值。  
除了`Infinity`、`-Infinity`、`NaN`和`undefined`这几个值会返回`false`，`isFinite`对于其他的数值都会返回`true`。
```
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
```
## boolean 布尔
## undefined 和 null
- `undefined`：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
- `null`：表示空值，即此处的值为空 。
- `null`在javascript中常见于释放内存空间

## 判断数据类型
### typeof
```
typeof undefined //"undefined"
typeof null // "object"
//针对未声明的变量
if (typeof v === "undefined" ) {
   console.log("变量 v 不存在")
}
```