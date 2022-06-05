---
title: 正则表达式
author: Closerdoor
date: '2021-12-12'
---

## 正则表达式方法
### test
```js
let reg = /\d/;
reg.test(str) //返回true/false
```
### exec
```js
let reg = /\d/;
reg.exec(str)
```
在字符串中执行匹配搜索，返回首次匹配结果`数组`,
## 字符串方法
### match
`str.match(/\d/g)`
返回RegExp匹配的包含全部`字符串`的数组或`null`
### replace
`str.replace(/\d/,newStr)`
用`newStr`替换RegExp匹配结果，并返回新字符串
### split
```js
let str = '阿斯1顿发2发疯的3';
str.split(/\d/);
```
返回字符串按指定RegExp拆分的数组
### search
`str.search(/\d/g)`
返回RegExp匹配字符串首次出现的`位置`
## 语法
### 修饰符modifiers
`var patt =  /pattern/igm;`
- `i` `忽略大小写`匹配
- `g` `全局匹配`，默认只匹配第一个元素，就不再进行匹配
- `m` 执行`多行匹配`
### 模板pattern
```js
let reg = /abc/; //匹配abv
let reg = /abc|qwe|zxc/; //匹配`abc`或`qwe`或`zxc`字符
//[]
let reg = /[abc]/; //匹配abc之中的任何一个字符
let reg = /[^abc]/;//匹配非a非b非c字符的
let reg = /[0-9]/; //匹配 0至9 之间的数字
let reg = /[a-z]/; //匹配 小写a至小写z 的字符
let reg = /[A-Z]/; //匹配 大写A至大写Z 的字符
let reg = /[\u4e00-\u9fa5]/; //匹配中文
//元字符
let reg = /./;  //匹配单个字符，除了换行和行结束符
let reg = /\w/; //匹配数字字母下划线 [A-Za-z0-9_]
let reg = /\W/; //匹配非数字字母下划线 [^A-Za-z0-9_]
let reg = /\d/; //匹配数字 [0-9]
let reg = /\D/; //匹配非数字 [^0-9]
let reg = /\s/; //匹配空白字符（空格）
let reg = /\S/; //匹配非空格字符
let reg = /\b/; //匹配单词边界(除了数字字母下划线都算单词边界, 。 ?等)
let reg = /\B/; //匹配非单词边界
let reg = /\n/; //匹配换行符
//量词
let reg = /n?/;//匹配0个或一个n的字符串 n{0,1}
let reg = /n*/;//匹配0个或多个字符串(任意个) n{0,}
let reg = /n+/;//匹配至少一个n字符串 n{1,}
let reg = /n{X}/;//匹配包含X个n的序列的字符串
let reg = /n{X,Y}/;//匹配包含至少X或至多Y个n的序列的字符串
let reg = /n{x,}/;//-匹配至少X个n的序列字符串

let reg = /^n/;//匹配以n开头的字符串
let reg = /n$/;//匹配以n结尾的字符串
```