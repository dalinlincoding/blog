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

   

### 构造函数方法  
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

      function fn(){  
        return Array.from(arguments);  
      }  
      fn(1, 2, 3); // [1, 2, 3]  

      // String  
      Array.from('abc');  
      // ["a", "b", "c"]  

      // Set  
      Array.from(new Set(['abc', 'def']));   
      // ["abc", "def"]  

      // Map  
      Array.from(new Map([[1, 'abc'], [2, 'def']]));   
      // [[1, 'abc'], [2, 'def']]  

    ```

  * Array.isArray

  常见的几种方法：

  ```
    var a = [];  
    a instanceof Array;  
    a.constructor ===Array;  
    Object.prototype.toString.apply(a) ==='[object Array]'  

  ```

  ES6写法： Array.isArray([])  

## 数组原型方法

### 改变自身值的方法（9）

  * 栈入栈出

    ```
      //栈顶：  
      pop    //删除最后一个元素,并返回这个元素  
        a.pop()  
      push    //最后处插入一个元素  
        a.push('str')  
      //栈底：  
      shift    //删除第一个元素,并返回这个元素  
      unshift    //开始处插入一个元素  

    ```

  * 数组元素替换

    ```
      //splice  
        a.splice(from.to)  

      //copyWithin  
        a.copyWithin(target,from,to)  

      //fill  
        a.fill(value,from,to)  

    ```

  * 排序问题

    ```
      //反转排列  
      reverse  
        a.reverse()  

      //排序  
      sort  
        a.sort(comparefn)  

    ```

### 不会改变自身值的方法（9）

  * 合并

    ```
      concat //合并并返回新数组  

    ```

  * 数组转字符串

    ```
      //所有元素连接成一个字符串  
      join  
        a.join('+')  //缺省为','  

      //转成字符串  
      toString  
      tolocaleString  

    ```

  * 浅复制

    ```
      //复制数组中的第i个元素到第n个元素，但指向的依然是同一个对象  
      slice  
        a.slice(i,n)  


    ```

  * 数组查找

    ```
      //找出对应元素的位置  
      indexOf('',fromIndex)  
      lastIndexOf('')  
      //判断是否包含某元素  
      includes('',fromIndex)  


    ```

### 遍历方法

  * forEach

    ```
      a.forEach(function(c,i,a){  
        a[i]=v*v  
      },thisObj)  

    ```

  * every
    使用传入函数＝》测试所有元素，all true == true;one false == false

    ```
      var o = {0:10, 1:8, 2:25, length:3}  
      var res = Array.prototype.every.call(o,function(v,i,o){  
        return value >= 8;  
      },o)  
      console.log(res)  //true  

    ```

  * some
    使用传入函数＝》测试所有元素，one true == true;all false == false  

  * filter

    ```

    ```
    
  * map

    ```

    ```

  * reduce

    ```

    ```

  * reduceRight

    ```

    ```

  * entries&keys&value

    ```

    ```

  * find&findIndex

    ```

    ```


链接：[view in github](https://github.com/yanlin0/blog)  




