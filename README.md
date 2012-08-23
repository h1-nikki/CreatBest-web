# 创思佳前端规范（CreatBest.Com）
---

## 目录规范 

    ┐
    ├ assets/ ┐
    │         ├ images/
    │         ├ css/
    │         └ js/
    ├ pic/
    └ index.html


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
+ 建议每个项目都有图标的引入，放在项目根目录即可 `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />` 如果你不写页面加载也会默认找这个文件  
+ 不允许在标签中直接写样式，除特例外  
+ update... [html](http://sofish.de/1688)  

## 样式规范（CSS）

### 1、CSS 文件  
+ 文件需使用 utf-8 编码（无 BOM）  
+ 样式文件必须使用 link 方式链入，不建议使用 @import  
+ 如样式有必要在页面中书写，应写在 `<head>` 标签中的 `<style>` 里

### 2、样式书写（这仅是内部规范，别较真儿）  
+ 具体书写规范参考 [base.css](https://github.com/mittya/CreatBest-web/blob/master/base.css) 文件，空格需注意
+ 除 Reset 外其它通用样式建议这样写  

> 代码示例：

    .ui-header,
    .ui-footer { margin:0 auto; width:974px; }

+ 颜色值统一小写，实际代码不要出现 `red / blue` 等词，有些词可缩写

> 代码示例：

    body { color:rgb(255, 255, 255); background:#fff; }

+ 像素为 0 值的可省略 `px`

### 3、命名
+ 不要以数字为开头来命名（不信可以试试）
+ 命名不能使用基础样式中已有的前缀（如：.fn- / .ui-）每个人需自定义个人前缀，防止命名冲突，建议两个字符（如：.ya-）
+ 名称尽量有意义，不要过长（如：.navigation 可缩写为 .nav）
+ 要小写，多拼命名用 - 分开，先写功能后写位置（如：.menuleft 建议写成 .menu-left）
+ 谨慎使用关键词来命名（如：select, active, first, last, left, right, more ...）如果命名可通用则要限定在该命名所处上下文环境中。例：有一标签Class为.header的子集中有一通用标签名为 .more，应该这样定义样式 .header .more {} 除特殊情况禁止单独设置成全局样式，以免影响其它样式
+ 样式定义尽量少用 id，如用则需保持唯一性

### 4、注释（利人利己）
+ 组件注释

> 代码示例：

    /*
     * @Name: base （组件名称）
     * @Overview: reset & global （组件功能介绍）
     * @Author: mittya （作者）
     */


+ 每一块或每一个功能区样式都要使用 `/* 注释 */` 来注释，建议用英文，注意空格！样式内注释要在花括号之内


> 代码示例：

    /* clear */
    .fn-clearfix:after { display:block; font-size:0; content:'\0020'; clear:both; height:0; }
    .fn-clearfix { zoom:1; /* for IE6 IE7 */ }
    .fn-clear { visibility:hidden; clear:both; }
    
+ 大模块可使用 `/** 注释 **/` 来注释

> 代码示例：

    /** Reset **/
    a, blockquote, button, body, ... { margin:0; padding:0; }
    ...
    /** golbal **/
    .ui-header,
    .ui-footer { margin:0 auto; width:974px; }


### 5、关于 Hack

    .all-IE { property:value\9; }  
    :root .IE-9 { property:value\0/; }  
    .gte-IE-8 { property:value\0; }  
    .lte-IE-7 { *property:value; }  
    .IE-7 { +property:value; }  
    .IE-6 { _property:value; }  
    .not-IE { property//:value; }


    <!--[if lt IE 7]> <html class="no-js ie ie6 lte9 lte8 lte7"> <![endif]-->  
    <!--[if IE 7]> <html class="no-js ie ie7 lte9 lte8 lte7"> <![endif]-->
    <!--[if IE 8]> <html class="no-js ie ie8 lte9 lte8"> <![endif]-->
    <!--[if IE 9]> <html class="no-js ie ie9 lte9"> <![endif]-->
    <!--[if gt IE 9]> <html class="no-js"> <![endif]-->
    <!--[if !IE]> <!--> <html> <!--<![endif]-->


说明：

    lte：就是Less than or equal to的简写，也就是小于或等于的意思。  
    lt ：就是Less than的简写，也就是小于的意思。  
    gte：就是Greater than or equal to的简写，也就是大于或等于的意思。  
    gt ：就是Greater than的简写，也就是大于的意思。  
    ! ：就是不等于的意思，跟javascript里的不等于判断符相同


## 脚本规范（JavaScript）

### 1、引入位置  
除了必须其它脚本禁止写在`<head></head>`标签内，一般引入在`</body>`内  

### 2、注释
+ 在相应模块的代码进行注释 `/* 注释 */`  
+ 特殊逻辑代码进行注释 `//注释`  


参考自 [Arale](https://github.com/alipay/arale/wiki) 

+ [JavaScript 编码风格](https://github.com/alipay/arale/wiki/JavaScript-%E7%BC%96%E7%A0%81%E9%A3%8E%E6%A0%BC) 
+ [常用词命名统一表](https://github.com/alipay/arale/wiki/%E5%B8%B8%E7%94%A8%E8%AF%8D%E5%91%BD%E5%90%8D%E7%BB%9F%E4%B8%80%E8%A1%A8) 
+ [JavaScript 注释规范](https://github.com/alipay/arale/wiki/JavaScript-%E6%B3%A8%E9%87%8A%E8%A7%84%E8%8C%83) 


update...



## 浏览器兼容

### 页面兼容
+ 不建议使用 IE 系制作与调试，但必须兼容 IE 系
+ 页面兼容浏览器包括（Chrome, Firefox, IE9/8/7/6, 360, 搜狗, Safari, 傲游, 腾讯TT, Opera）多多益善，酌情测试。国内浏览器使用情况可参考[CNZZ数据中心](http://brow.data.cnzz.com/)




http://www.cnblogs.com/jscode/archive/2012/05/09/2491148.html
