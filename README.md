# 前端规范，仅限内部使用
---

## 样式规范（CSS）

### 1、CSS 文件  
+ 文件需使用 utf-8 编码（无 BOM）  
+ 样式文件必须使用 link 方式链入，不建议使用 @import  
+ 如样式有必要在页面中书写，应写在 `<head>` 标签中的 `<style>` 里

### 2、样式书写（这仅是内部规范，别较真儿）  
+ 具体书写规范参考 [base.css](https://github.com/mittya/ya/blob/master/base.css) 文件，空格需注意
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

+ update...


参考 [Alice](http://aliceui.com/css-spec/)，修改为适合内部团队使用的版本
