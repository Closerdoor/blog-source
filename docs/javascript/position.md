---
title: 坐标
author: Closerdoor
date: '2021-12-12'
---

## 触发事件event
clientX clientY 
触发事件时鼠标指针距离window窗口左上角的位置
坐标原点为 window窗口的左上角 

pageX pageY
触发事件时鼠标指针距离docuemnt文档左上角的位置
坐标原点为 document文档的左上角 

clientX和pageX的区别是 文档的窗口可能比window窗口要高，此时会出现滚动条，pageX的定位原点是文档左上角(包括滚动条移动的距离)，而clientX原点永远是可视窗口左上角

offsetX offsetY
元素content内容区域的左上角为原点
以当前事件的目标对象边框内沿(content)左上角为原点，定位x轴坐标
## 