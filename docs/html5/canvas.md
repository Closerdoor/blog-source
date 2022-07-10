---
title: canvas
author: Closerdoor
date: '2022-07-07'
---

## 初始化
```html
<canvas id="myCanvas" width="200" height="100">
  您的浏览器不支持canvas画布 请使用ie9+版本浏览器
</canvas>
<script>
  let canvas = document.querySelector('#myCanvas');
  const context = canvas.getContext('2d');//获取绘制上下文 2d webGL
</script>
```
### 画正方形

### 画圆
```js
//圆心坐标x 圆心坐标y 圆半径, 起点弧度,终点弧度 绘制模式 (true:逆时针,false:顺时针)
context.arc(100, 100, 30, 0, Math.PI * 2, false);
context.lineWidth = 10; //路径 描边 的粗细
context.stroke(); //描边
context.fillStyle = "red";
context.fill(); //填充
```
### 导入图像