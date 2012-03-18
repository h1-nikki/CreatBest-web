# 前端规范，仅限内部使用

## 样式规范（CSS）

#### 命名
+ 命名不能使用基础样式中已有的前缀（如：.fn- / .ui-）每个人需自定义个人前缀，防止命名冲突，建议两个字符（如：.ya-）
+ 名称尽量有意义，不要过长（如：.navgation 可缩写为 .nav）
+ 要小写，多拼命名用 - 分开，先写功能后写位置（如：.menuleft 建议写成 .menu-left）
+ 谨慎使用关键词来命名（如：select, active, first, last, left, right, more ...）如果命名可通用则要限定在该命名所处上下文环境中。例：有一标签Class为.header的子集中有一通用标签名为 .more，应该这样定义样式 .header .more {} 除特殊情况禁止单独设置成全局样式，以免影响其它样式
+ JS命名...

### 注释
+ 注释


① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩  
⌘

参考自 [Alice](http://aliceui.com/css-spec/)，修改为适合内部团队使用的版本。  

![github](https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1306884374)  

  
> NSLog(@"github");  


.style { color:#000; }