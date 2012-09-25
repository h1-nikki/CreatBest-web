# 常用 CSS & CSS3

## 圆角

    border-radius: 10px; /* CSS3 Property */  
    -moz-border-radius: 10px;  /* Firefox */ 
    -webkit-border-radius: 10px; /* Chrome/Safari */ 
    
. 

    /* Firefox */
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-topright: 20px;
    -moz-border-radius-bottomright: 30px;
    -moz-border-radius-bottomleft: 0;
    
.

    /* Chrome and Safari */ 
    -webkit-border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 20px; 
    -webkit-border-bottom-right-radius: 30px; 
    -webkit-border-bottom-left-radius: 0;


## 阴影

    -moz-box-shadow: 20px 10px 7px #ccc;  
    -webkit-box-shadow: 20px 10px 7px #ccc;  
    box-shadow: 20px 10px 7px #ccc; 
    
.

    object.style.boxShadow="20px 10px 7px #ccc"




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



update… [url](http://www.iteye.com/news/26075) 