# 创思佳前端规范（creatbest.com）
---

## 目录规范 

    ┐
    ├ assets/ ┐
    │         ├ images/       图片、背景图及图标
    │         ├ favicon/      收藏图标
    │         ├ css/          样式
    │         └ js/           脚本
    │
    ├ uploads/                上传的图片
    └ index.html              首页

收藏图标命名：`（favicon.ico / apple-touch-icon-144-precomposed.png / apple-touch-icon-114-precomposed.png / apple-touch-icon-72-precomposed.png / apple-touch-icon-57-precomposed.png）`

## 文件名规范 
### CSS 
+ 通用样式（base.css）用来放基础通用代码，头部样式和底部样式（通用的情况下） 
+ 首页样式（home.css）用来单独写首页样式代码 
+ 内页样式（page.css）由于内页一般多数重复，所以这里另写一个内页通用样式

### HTML 
+ 一般使用小写`.html`来做后缀
+ 文件名建议英文，特殊情况可用拼音。必要时可添加一说明文档，参考 [read me.txt](read me.txt) 
+ 文件名不要过长，尽量控制在 15 个字符之内 


## 页面规范（HTML）  
+ 使用模板页 [index.html](https://github.com/mittya/CreatBest-web/blob/master/index.html)   
+ 注意编码，统一 utf-8  
+ 标题（Title）写法`网站全名`，内页 Title 写法 `栏目名称 - 网站名称` 注意空格  
+ Meta 标签必写，关系到优化，尽量写详细。更多：[SEO](http://baike.baidu.com/view/1047.htm)  
+ 样式引入 `<link rel="stylesheet" href="base.css" />`  
+ 建议每个项目都有图标的引入，放在项目根目录即可 `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">` 如果你不写页面加载也会默认找这个文件  
+ 不允许在标签中直接写样式，除特例外  
+ update... [html](http://sofish.de/1688)  

## 样式规范（CSS）

## 脚本规范（JavaScript）

## 浏览器兼容

### 页面兼容
