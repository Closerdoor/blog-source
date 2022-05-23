---
title: DOM
author: Closerdoor
date: '2021-12-12'
---

##  Node(节点)基础分类
分析该节点是什么节点,`node.nodeType`
```js
Node.ELEMENT_NODE:1 //标签 *
Node.ATTRIBUTE_NODE:2 //属性 *
Node.TEXT_NODE:3 //文本 *
// Node.CDATA_SECTION_NODE:4 //子节点一定为TextNode
// Node.ENTITY_REFERENCE_NODE:5
// Node.ENTITY_NODE:6
// Node.PROCESSING_INSTRUCTION_NODE:7 //命令节点
// Node.COMMENT_NODE:8  //注释
Node.DOCUMENT_NODE:9  //最外层的Root element,包括所有其它节点 *
Node.DOCUMENT_TYPE_NODE:10  // DTD，<!DOCTYPE………..>
Node.DOCUMENT_FRAGMENT_NODE:11 //文档片段节点 
Node.NOTATION_NODE:12 //DTD中的Nation定义
```
## 获取节点API
```js
var oHeader = document.getElementById('header'); //only node
var aP = document.getElementsByTagName('p');// NodeList
var aDes = document.getElementsByClassName('des'); //IE9 // NodeList

var oHeader = document.querySelector('#header'); //only node
var aDes = document.querySelectorAll('.des');// NodeList
var body = document.body; //直接获取body节点对象
```

## DOM 节点对象属性
```js
element.title //设置或返回元素的title属性
element.textContent //设置或返回一个节点和它的文本内容
element.innerText //设置或返回一个节点和它的文本内容
element.tagName //作为一个字符串返回某个元素的标记名（大写）
element.className //获取标签的class属性值

nodelist.length //返回节点列表的节点数目。
nodelist.item(idx) //返回某个元素基于文档树的索引 同 nodelist[idx]
```

## 获取标签属性attributes
```js
var oHeader = document.getElementById('header');
var aImg = document.getElementsByTagName('img');

console.log(oHeader.attributes); //节点属性对象 拥有长度属性
console.log(oHeader.id); //指定属性获取
console.log(aImg[0].src);//指定属性获取
console.log(aImg.getAttribute('src')); //通过 getAttribute方法获取实际 属性值
console.log(aImg.hasAttribute('src')); // 判断节点对象是否含有 某个 属性
//注：setAttribute设置的值为字符串
oInput.setAttribute('checked', true)
```
## 获取节点样式style
```js
//行内样式
console.log(oImg.style); //CSSOM对象
console.log(aImg.style.outline); //标签行内样式 style属性中存在的样式的值

//实际样式
console.log(window.getComputedStyle(oImg, null)['border']); //主流浏览器
console.log(oImg.currentStyle['border']); //老版本IE

//兼容函数写法
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}
```

## 获取节点内容innerHTML和innerText
```js
console.log(oHeader.innerHTML); //获取标签内的实际内容(包括标签)
console.log(oHeader.innerText);  //设置标签中间的文本内容，应该使用innerText属性,谷歌火狐支持，ie8支持
console.log(oHeader.textContent); //设置标签中间的文本内容，应该使用textContent属性,谷歌火狐支持，ie8不支持

//textContent 与 innerText兼容处理
function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}
```

## 获取节点相关联节点(父子、兄弟)
```js
console.log(oHeader.children); //获取子元素 只有标签
console.log(oHeader.childNodes); //获取子节点 包含文本节点与标签节点

console.log(oHeader.firstChild); //获取第一个子节点(包含文本)
console.log(oHeader.firstElementChild); //获取第一个子标签节点

console.log(oHeader.lastChild); //获取最后一个子节点(包含文本)
console.log(oHeader.lastElementChild); //获取最后一个子标签节点

console.log(aP[0].parentElement); //父元素
console.log(aP[0].parentNode); //父节点

console.log(aP[1].nextElementSibling); //下一个兄弟标签节点
console.log(aP[1].nextSibling); //下一个兄弟节点(计算文本节点)

console.log(aP[2].previousElementSibling); //上一个兄弟标签节点
console.log(aP[2].previousSibling); //上一个兄弟节点(计算文本节点)
```

## 创建与添加节点标签
```js
var cP = document.createElement("p"); //创建标签节点
var content = document.createTextNode("你好"); //创建文本节点

cP.appendChild(content); //添加content到cP节点中
document.body.appendChild(cP); //添加cP到body标签中进行渲染
document.body.append(cP); //append 是H5 WEB API 新增方法

// ---------------------------------------
//通过文本标签方式添加节点   
var htmlTxt = '<p>哈哈哈</p>';
document.body.innerHTML += htmlTxt;

//HTML输出流 直接覆盖body中的内容
document.write('<p>123</p>'); 
// ----------------------------------------

//在父节点ELE里面的节点A前面添加 新的节点B
ELE.insertBefore(B,A);
```

## 节点替换拷贝
```js
//复制拷贝
var oWrap = document.getElementById('wrap');
//cloneNode方法会对调用它的节点对象进行复制 传参true代表包括该节点的后代节点 不传参数表示只复制该节点本身
var cloneWrap = oWrap.cloneNode(true);
document.body.appendChild(cloneWrap);

// -------------------------------------------------------
//替换
var oWrap = document.querySelector('#wrap');
var oDes = oWrap.querySelector('#wrap .des');
var newDes = document.createElement('p');
newDes.innerHTML = '我会替换掉你';
oWrap.replaceChild(newDes,oDes);// 用newDes替换oWrap内部的oDes
```

## 删除节点
```js
element.removeChild(element.children[1]); //element删除了element内的下标为1的子元素
element.remove(); //H5 DOM API 自己删自己
```

## 节点检查
```js
document.hasFocus(); //返回布尔值，检测文档或元素是否获取焦点
element.hasChildNodes(); //返回布尔值,检测节点对象是否包含任何子节点
element.isEqualNode(element2); //返回布尔值,判断element与element2是否是同一个节点
element.hasAttributes(); //返回布尔值,判断当前节点对象是否包含属性
element.hasAttribute(property); //返回布尔值, 判断该节点是否拥有指定的 property 属性
```