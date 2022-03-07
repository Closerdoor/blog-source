---
title: css
author: Closerdoor
date: '2021-12-12'
---

## css引入方式
### 行内(内联样式)
`<p style=""></p>`
### 内部样式
语法中，style标签一般位于head标签中title标签之后，也可以把他放在HTML文档的任何地方。  
type="text/CSS"  在html5中可以省略
```html
<style type="text/CSS"></style>
```
### 外部样式 
link 是个单标签  
语法中，link标签需要放在head头部标签中，并且必须指定link标签的三个属性，具体如下：
```
href：定义所链接外部样式表文件的URL，可以是相对路径，也可以是绝对路径。
type：定义所链接文档的类型，在这里需要指定为“text/CSS”，表示链接的外部文件为CSS样式表。
rel：定义当前文档与被链接文档之间的关系，在这里需要指定为“stylesheet”，表示被链接的文档是一个样式表文件。
```
```html
<head>
  <link href="./url"  rel="stylesheet" type="text/css"> />
</head>
```
## css的继承
子元素可以继承父元素的样式（text-，font-，line-这些元素开头的都可以继承，以及color属性）
## 字体 font
### font-size
字号大小，一般用px和em
### font-family
> font-family属性用于设置字体。网页中常用的字体有宋体、微软雅黑、黑体等，例如将网页中所有段落文本的字体设置为微软雅黑，可以使用如下CSS样式代码：

> p{ font-family:"微软雅黑";}

> 可以同时指定多个字体，中间以逗号隔开，表示如果浏览器不支持第一个字体，则会尝试下一个，直到找到合适的字体。
### font-weight
font-weight属性用于定义字体的粗细，其可用属性值：normal、bold、bolder、lighter、100~900（100的整数倍）。
数字 400 等价于 normal，而 700 等价于 bold。
### font-style
font-style属性用于定义字体风格，如设置斜体、倾斜或正常字体，其可用属性值如下：  
**normal**：默认值，浏览器会显示标准的字体样式。  
**italic**：浏览器会显示斜体的字体样式。  
**oblique**：浏览器会显示倾斜的字体样式。  
### font 复合写法
```
font: font-style font-weight font-size/line-height font-family;
font:italic 700 12px/20px '宋体';
```
### color
十六进制，如#FF0000，#FF6600，#29D794等。实际工作中，十六进制是最常用的定义颜色的方式。  
RGB代码，如红色可以表示为rgb(255,0,0)或rgb(100%,0%,0%)。
### line-height
ine-height属性用于设置行间距，单位有三种，分别为像素px，相对值em和百分比%  
一般情况下，行距比字号大7 8像素左右就可以了。
### text-align
left：左对齐（默认值）  
right：右对齐
center：居中对齐
### text-indent
text-indent属性用于设置首行文本的缩进，其属性值可为不同单位的数值、em字符宽度的倍数、或相对于浏览器窗口宽度的百分比%，允许使用负值, 建议使用em作为设置单位。  
1em 就是一个字的宽度   如果是汉字的段落， 1em 就是一个汉字的宽度
`一般:text-indent: 2em;`
### text-decoration
| 值           | 描述                                          |
| ------------ | --------------------------------------------- |
| none         | 默认。定义标准的文本。                        |
| underline    | 定义文本下的一条线。下划线 也是我们链接自带的 |
| overline     | 定义文本上的一条线。                          |
| line-through | 定义穿过文本下的一条线。                      |
## display
元素的默认display为inline
### 行内元素 inline
常见的行内元素有<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>等，其中<span>标签最典型的行内元素。  
行内元素的特点：
（1）和相邻行内元素在一行上。  
（2）高、宽无效，对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间。border有效，背景色有效。行高有效
（3）默认宽度就是它本身内容的宽度。  
（4）行内元素只能容纳文本或则其他行内元素。（a特殊,a里面不能放a）
```
在行内元素中有几个特殊的标签——<img />、<input />、<td> 这些标签虽然可以设置宽度高度 但是在现代浏览器内特性默认展示模式为 行内(inline) 元素
```  
### 块元素 block
常见的块元素有<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>等，其中<div>标签是最典型的块元素。  
块级元素的特点：  
（1）总是从新行开始  
（2）高度，行高、外边距以及内边距都可以控制。  
（3）宽度默认是容器的100%  
（4）可以容纳内联元素和其他块元素。  
只有文字才能组成段落,因 p里面不能放块级元素，同理还有这些标签h1,h2,h3,h4,h5,h6,dt，他们都是文字类块级标签，里面不能放其他块级元素。
### 行内块元素 inline-block
行内块元素的特点：  
（1）和相邻行内元素（行内块）在一行上,但是之间会有空白缝隙。  
（2）默认宽度就是它本身内容的宽度。  
（3）高度，行高、外边距以及内边距都可以控制。  

## border 
复合写法:border : border-width || border-style || border-color ;
### border-width
边框厚度
### border-style
```
none：没有边框即忽略所有边框的宽度（默认值）
solid：边框为单实线(最为常用的)
dashed：边框为虚线  
dotted：边框为点线
double：边框为双实线
```
### border-color

## table
### 表格的细线边框
table{ border-collapse:collapse; }  collapse 单词是合并的意思  
border-collapse:collapse; 表示相邻边框合并在一起。

## background 
复合写法：
```
书写格式
background: ~color ~image ~repeat ~attachment ~position/~size;
默认值
background: transparent none repeat scroll 0% 0%;
```
### background-color
默认值为transparent 表示透明
### background-image
`background-image : none(默认) | url (url) `
`background-image:url(./img.png)`
### background-repeat
```
background-repeat : repeat(默认) | no-repeat | repeat-x | repeat-y ;
```
### background-size
`background-size: length|percentage|cover|contain;`
### background-position
```
background-position : length || length
length : 　百分数 | 由浮点数字和单位标识符组成的长度值。请参阅长度单位 
background-position : position || position 
position : 　top | center | bottom | left | center | right ;
```
### background-attachment
`background-attachment : scroll | fixed `  
scroll : 　背景图像是随对象内容滚动  
fixed : 　背景图像固定 

## 标准盒与怪异盒
box-sizing: content-box(默认) | boder-box;

## 伪类选择器
### 链接伪类选择器

- :link      /* 未访问的链接 */
- :visited   /* 已访问的链接 */
- :hover     /* 鼠标移动到链接上 */
- :active    /* 选定的链接 */


   注意写的时候，他们的顺序尽量不要颠倒  按照  lvha 的顺序。   love   hate  爱上了讨厌 记忆法    或者   lv 包包 非常 hao 

~~~css
a {   /* a是标签选择器  所有的链接 */
			font-weight: 700;
			font-size: 16px;
			color: gray;
		}
a:hover {   /* :hover 是链接伪类选择器 鼠标经过 */
			color: red; /*  鼠标经过的时候，由原来的 灰色 变成了红色 */
}
~~~