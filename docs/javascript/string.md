---
title: 字符串方法
author: Closerdoor
date: '2021-12-12'
---

## 方法汇总
```js
// 1 字符方法
charAt()    	//获取指定位置处字符
charCodeAt()  	//获取指定位置处字符的ASCII码
str[0]   		//HTML5，IE8+支持 和charAt()等效
// 2 字符串操作方法
concat()   		//拼接字符串，等效于+，+更常用
slice()    		//从start位置开始，截取到end位置，end取不到
substring() 	//从start位置开始，截取到end位置，end取不到
substr()   		//从start位置开始，截取length个字符
// 3 位置方法
indexOf()   	//返回指定内容在元字符串中的位置
lastIndexOf() 	//从后往前找，只找第一个匹配的
// 4 去除空白   
trim()  		//只能去除字符串前后的空白
// 5 大小写转换方法
to(Locale)UpperCase() 	//转换大写
to(Locale)LowerCase() 	//转换小写
// 6 其它
search()
replace()
split()
fromCharCode() //unicode转字符串
// String.fromCharCode(101, 102, 103);	
```
###  charCodeAt()
返回 Unicode编码数字
```
str.charCodeAt(index)  index默认为0
返回指定index处字符的 UTF-16代码单元值的一个数字；如果index超出范围，charCodeAt() 返回 NaN。
```

###  replace()
返回新的字符串。
```
str.replace(regexp|substr, newSubStr|function)
```

### slice()
提取字符串的一部分，并返回一个新的字符串，不会改动原字符串
```
str.slice(beginIndex[, endIndex])
```

### 转义字符 
如果在一个正常字符前添加反斜杠，JavaScript 会忽略该反斜杠。
| 转义符 | 含义   | 
| :----- | :---  | 
|   \n  | 换行符,n 是 newline 的意思   |         
|   \t  | 制表符,tab   |         
|   \b  | 空格,b 是 blank 的意思   |         
|   \r  | 回车   |         
|   \f  | 进制   |         
|   \\  | 斜杠\   |         
|   \'  | 单引号' |         
|   \"  | 双引号" |         
|   \xnn  | 由 2 位十六进制数值 XX 指定的 Latin-1 字符,n为0~F。例：\x41表示"A" |         
|   \unnnn  | 由 4 位十六进制数值 XX 指定的 Latin-1 字符(n为0~F)例：\u03a3表示希腊字符 |         