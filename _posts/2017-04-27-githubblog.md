---
layout: post
title: jekyll建设github博客
category: 运用jekyll建设github博客
author: DaLinlin
writetime: 2016-10-06
img: file/header.jpeg
---
# jekyll建设github博客
## 环境
   申请github账号，新建仓库，setting中选择发布为博客。

   本地同步远程仓库

### 本地安装jekyll

  ```
    gem install jekyll 

  ```
  如果出现"It looks like you don't have redcarpet"这个错误，则执行gem install redcarpet

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

##编写侧边栏
###首页
在_layouts目录中，有html文件，用对应的html文件来定义页面的侧边栏

如default文件是用来定义主页的，在这个文件里{{content}}代表index.html

而我自定义了一个header。
```$xslt
<body>
    <header>
      <h1>大琳惏coding</h1>
      <p>icoding爱生活～～</p>
      <a href="#">view in github</a>
      <img src="/file/header.jpeg" alt="">
    </header>
    {{content}}
</body>
```
###文章页
post文件是用来定义文章页的，这里{{content}}代表_posts中文件的内容

而我这里自定义了一个侧边栏。
```$xslt
<div class="sidebar" >
    <p>
        <a class="back-icon" href="{{ site.baseurl }}/index.html">&lt;&lt;Go back
        </a>
    </p>
        <img src="https://yanlin0.github.io/blog/file/header.jpeg" alt="">
        <h1>大琳惏coding</h1>
    <p>icoding爱生活</p>
</div>
<article>
    {{content}}
</article>
```

##编写内容
###首页
首页内容在根目录的index.html中

语法比较简单：

1.在`{ % *** % }`中写一些逻辑语句

如下，我写的就是posts时间倒序循环

2.post的参数写在md文件的layout中
```$xslt
<ul class="post-list">
    { % assign items = paginator.posts | sort: 'writetime' % }
    { % for post in items reversed % }
      <li>
          <div>
              { % if post.img % }
              <img src="{{post.img}}" alt="">
              { % endif % }
              <a href="{{site.baseurl}}{{post.url}}"> {{ post.title }}  </a>
              <div>
                  <i class="name">{{ post.writetime }}</i>
              </div>
          </div>
            <p>{{ post.category }} </p>
      </li>
    { % endfor % }
</ul>
```
##设置分页
在_config.yml中增加如下配置，记得执行gem install jekyll-paginate安装插件
```$xslt
    plugins: [jekyll-paginate]
    paginate: 5
    paginate_path: "page:num"
```

##编写文章页
文章页放在_posts中是md文件，可以去看一下md的语法

最终页面时将md文件编译成的html，在检查器中查看各个元素的编译结果，修改对应css，就可以改变文章的样式

代码见本博客源码：[view in github](https://github.com/yanlin0/blog)

## 本地调试运行

  ```
  $ cd you website path //cd到你的网站目录下
  $ jekyll serve
  //一个开发服务器将会运行在 http://localhost:4000/
  //你就能在本地服务器看到你用模板搭建的网站了
  ```

