---
layout: post
title: JavaScript数组所有API
category: JavaScript数组所有API
author: yanlin
writetime: 2016-10-06
---
# JavaScript数组所有API

***

## array构造器

  ```
    var a = Array(8)

    构建八位数组，效果等同new Array(8)

    var a = [];a.length=8

  ```

   

## 构造函数方法  
  * Array.of  

    将参数转化为数组  

    ```
      Array.of(8)     =>[8]  
      Array(8)        =>[undefined*8]  
      Array.of(8,5)   =>[8,5]  
      Array(8,5)      =>[8,5]  
      Array.of('8')   =>['8']  
      Array('8')      =>['8']  
  ```

  * Array.from  
    基于对象快速创建数组，有三个形参，obj,fn(加工函数),this  

    ```
      var obj = {0:'a',1:'b',2:'c',length:3};  
      Array.from(obj,function(value,index){  
        console.log(value,index,this,arguments.length)  
        return value.repeat(3)  
      },obj)  
    ```
  * Array.isArray


  ```
    

  ```

  * 
  * 


链接：[view in github](https://github.com/yanlin0/blog)  
图片：![view in github](https://github.com/yanlin0/blog)



