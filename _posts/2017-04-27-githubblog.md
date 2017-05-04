---
layout: post
title: jekyll建设github博客
category: 运用jekyll建设github博客
author: yanlin
writetime: 2016-10-06
---
# jekyll建设github博客
## 环境
   申请github账号，新建仓库，setting中选择发布为博客。

   本地同步远程仓库

### 本地安装jekyll

  ```
    gem install jekyll 

  ```

##建立目录和文件

  ├── _config.yml //配置文件

  ├── _includes   //组件文件

            ├── footer.html

            └── header.html

  ├── _layouts   //模版文件

            ├── default.html

            └── post.html

  ├── _posts   //文章目录

            ├── 2007-10-29-why-every-programmer-should-play-nethack.textile

            └── 2009-04-26-barcamp-boston-4-roundup.textile

  ├── _site   //其他文件

  └── index.html

代码见本博客源码：[view in github](https://github.com/yanlin0/blog)

## 本地调试运行

  ```
  $ cd you website path //cd到你的网站目录下
  $ jekyll serve
  //一个开发服务器将会运行在 http://localhost:4000/
  //你就能在本地服务器看到你用模板搭建的网站了
  ```

