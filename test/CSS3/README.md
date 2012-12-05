# 常用 CSS & CSS3

## 圆角

    -moz-border-radius: 10px;  
    -webkit-border-radius: 10px;
    border-radius: 10px;
`

    /* Firefox */
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-topright: 20px;
    -moz-border-radius-bottomright: 30px;
    -moz-border-radius-bottomleft: 0;
    
`

    /* Chrome and Safari */ 
    -webkit-border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 20px; 
    -webkit-border-bottom-right-radius: 30px; 
    -webkit-border-bottom-left-radius: 0;


## 盒状阴影（文本阴影 text-shadow）

-moz-box-shadow、-webkit-box-shadow和box-shadow的设置是一样的，都有4个参数，含义分别为：x轴偏移值、y轴偏移值、阴影的模糊度、以及阴影颜色。

    -moz-box-shadow: 20px 10px 7px #ccc;  
    -webkit-box-shadow: 20px 10px 7px #ccc;  
    box-shadow: 20px 10px 7px #ccc; 
    
    filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=3px, OffY=3px, Color='#ffffff'); /* IE6,IE7 */
    
    -ms-filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=3px, OffY=3px, Color='#ffffff')"; /* IE8 */
          
    
.

    /* JS */
    object.style.boxShadow="20px 10px 7px #ccc"

## 透明

    opacity: 1; /* 不透明 */  
    opacity: 0.7; /* 透明70% */

    filter: alpha(opacity=70); /* IE */


## @media属性
Media属性用于设置同一样式表在不同屏幕下的样式，可以在属性值中指定应用此样式的介质或媒体。

    @media screen and (max-width: 480px) { 
    /* 网页在宽度为480px屏幕上的显示样式 */ } 
    
也可以使用@media print属性指定打印预览的样式

    @media print { 
      p.content { color: #ccc } 
    }  
    
    
    
## 渐变填充
CSS3的Gradient（渐变）属性给了开发者另一个惊人的体验。Gradient还未得到全部浏览器的支持，所以不能完全依赖Gradient来设置布局。   


## 文字模糊
[http://anegie.com/blog/css3-text-blur/](http://anegie.com/blog/css3-text-blur/)



扩展阅读

[http://www.iteye.com/news/26075](http://www.iteye.com/news/26075) 

[http://www.ruanyifeng.com/blog/2010/03/cross-browser_css3_features.html](http://www.ruanyifeng.com/blog/2010/03/cross-browser_css3_features.html)