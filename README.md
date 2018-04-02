# 小泊外卖

作者：卞荣成 <br>
作者博客：*[漂小泊的博客](https://www.itsolotime.com/blog)* <br>
作者网站：*[小泊随記](https://www.itsolotime.com)* <br>

本项目采用“保持署名—非商用”创意共享4.0许可证。<br>
只要保持原作者署名和非商用，您可以自由地阅读、分享、修改。<br>
详细的法律条文请参见[创意共享](https://creativecommons.org/licenses/by-nc/4.0/)网站。<br>

## 第一章 准备

### 1.1 项目描述
```
1)此项目为外卖Web App (SPA)
2)包括商家, 商品, 购物车, 用户等多个子模块
3)使用Vue全家桶+ES6+Webpack等前端最新最热的技术
4)采用模块化、组件化、工程化的模式开发
```
### 1.2 项目功能界面

### 1.3 技术选型

![](https://i.imgur.com/j8rKYbj.png)

### 1.4 前端路由

![](https://i.imgur.com/o9UXi0w.png)

### 1.5 API接口
![](https://i.imgur.com/DXhc3Bm.png)

### 1.6 项目vue组件
![](https://i.imgur.com/LKZN8F8.png)

### 1.7 应用技术
```
1)组件化、模块化、工程化的开发模式
2)使用vue-cli脚手架初始化Vue.js项目
3)模拟json后端数据，实现前后端分离开发
4)ES6+eslint的开发方式
5)使用vue-router开发单页应用
6)使用axios/vue-resource与后端进行数据交互
7)使用vuex管理应用组件状态
8)使用better-scroll/vue-scroller实现页面滑动效果
9)使用mint-ui组件库构建界面
10)使用vue-lazy实现图片惰加载
11)使用mockjs模拟后台数据接口
12)使用stylus编写模块化的CSS
13)使用Vue.js的过渡编写酷炫的交互动画
14)制作并使用图标字体
15)解决移动端1px边框问题
16)移动端经典的css sticky footer布局
17)flex弹性布局
```
## 第二章: 应用开发详解
### 2.1 开启项目开发
####2.1.1  使用vue-cli(脚手架)搭建项目

1)Vue-cli是vue官方提供的用于搭建基于vue+webpack+es6项目的脚手架工具 <br>

2)在线文档: https://github.com/vuejs/vue-cli <br>

3)操作:
```
npm install -g vue-cli
vue init webpack gshop
cd gshop
npm install
npm run dev
访问: localhost:8080
```

#### 2.1.2 vue新老版本的脚手架项目对比
![](https://i.imgur.com/5mmxmIV.png)

#### 2.1.3 项目结构分析
```
xb_takeout
	|-- build : webpack相关的配置文件夹(基本不需要修改)
		|-- dev-server.js : 通过express启动后台服务器
	|-- config: webpack相关的配置文件夹(基本不需要修改)
		|-- index.js: 指定的后台服务的端口号和静态资源文件夹
	|-- node_modules
	|-- src : 源码文件夹
		|-- components: vue组件及其相关资源文件夹
		|-- app.vue: 应用根主组件
		|-- main.js: 应用入口js
	|-- static: 静态资源文件夹
	|-- .babelrc: babel的配置文件
	|-- .editorconfig: 通过编辑器的编码/格式进行一定的配置
	|-- .eslintignore: eslint检查忽略的配置
	|-- .eslintrc.js: eslint检查的配置
	|-- .gitignore: git版本管制忽略的配置
	|-- index.html: 主页面文件
	|-- package.json: 应用包配置文件 
	|-- README.md: 应用描述说明的readme文件
```
#### 2.1.4 编码测试与打包发布项目
##### 1)编码测试
```
npm run dev
```  
```
访问: http://localhost:8080
编码, 自动编译打包(HMR), 查看效果
```
##### 2)打包发布
```
npm run build
npm install -g serve
serve dist
```
访问: http://localhost:5000

### 2.2. 功能需求分析
演示项目功能, 对功能模块进行分析说明

### 2.3 资源准备
#### 2.3.1. 相关概念

1)标注图(设计稿): 对应用界面各个组成元素进行坐标/大小/颜色等进行标签的界面图 <br>

2)切图: 将应用界面的一些静态图形部分, 通过工具(如photoshop)剪裁生成的图片 <br>

3)图片Base64: 样式中引用的小图片, 在webpack打包会自动处理转换为样式内部的Base64编码字符串 <br>

4)2x与3x图: 不同手机的屏幕密度不一样, 一般都在2以上(如iphone6为2,iphone6s为3), 为了适配不同的手机, UI设计师为同一个图片制作了2x和3x的2套图片(图形一样, 但大小不一样) <br>

#### 2.3.2 iconfont字体图标

##### 1)iconfont介绍
a.意义：使用字体用HTML代码以文本的形式直接在网页中画icon小图标。
b.为什么使用icon字体图标:  使用图标字体可大大减少图标维护工作量。
c.灵活性：轻松地改变图标的颜色或其他CSS效果。
d.可扩展性：改变图标的大小，就像改变字体大小一样容易。
e.矢量性：图标是矢量的，与像素无关。缩放图标不会影响清晰度。
f.兼容性：字体图标支持所有现代浏览器（包括糟糕的IE6）。
g.本地使用：通过添加定制字体到你的本地系统，你可以在各种不同的设计和编辑应用程序中使用它们。


##### 2)iconfont使用(本地没有svg)

方法地址：

##### 3)iconfont使用(本地有svg)

方法地址：

### 2.4 项目源码目录设计
![](https://i.imgur.com/ikNsmIz.png)

### 2.5 Stylus(css预处理编辑器)

#### 2.5.1 当前主流的三种css预编译器(对比)
```
1)Less 
2)Sass
3)Stylus
```
#### 2.5.2 安装stylus依赖包
```
npm install stylus stylus-loader --save-dev
```
#### 2.5.3 编写样式
```
<style lang="stylus" rel="stylesheet/stylus">

</style>
```
#### 2.5.4 stylus的基本语法

语法介绍：

#### 2.5.6 common/stylus/mixins.styl
```
$green = #8bc34a;
$yellow = #F5A100;
$bc = #e4e4e4;

// 一像素下边框
bottom-border-1px($color)
  position relative
  border none
  &:after
    content ''
    position absolute
    left 0
    bottom 0
    width 100%
    height 1px
    background-color $color
    transform scaleY(0.5)

// 一像素上边框
top-border-1px($color)
  position relative
  &::before
    content ''
    position absolute
    z-index 200
    left 0
    top 0
    width 100%
    height 1px
    background-color $color

//根据像素比缩放1px像素边框
@media only screen and (-webkit-device-pixel-ratio: 2 )
  .border-1px
    &::before
      transform scaleY(.5)

@media only screen and (-webkit-device-pixel-ratio: 3 )
  .border-1px
    &::before
      transform scaleY(.333333)

//根据像素比来使用 2x图 3x图
bg-image($url)
  background-image: url($url + "@2x.png")
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
    background-image: url($url + "@3x.png")

//清除浮动
clearFix()
  *zoom 1
  &::after
    content ''
    display block
    clear both

```
### 2.6 ESLint 
#### 2.6.1 理解
```
1)ESLint是一个代码规范检查工具
2)基本已替代以前的JSHint

```
#### 2.6.2 ESLint提供以下支持
```
1)ES6
2)AngularJS
3)JSX
4)Style检查
5)自定义错误和提示
```
#### 2.6.3 ESLint提供以下几种校验
```
1)语法错误校验
2)不重要或丢失的标点符号，如分号
3)没法运行到的代码块（使用过WebStorm的童鞋应该了解）
4)未被使用的参数提醒
5)漏掉的结束符，如}
6)确保样式的统一规则，如sass或者less
7)检查变量的命名
```
#### 2.6.4 规则的错误等级有三种
```
1)0：关闭规则检查。
2)1：打开规则检查，并且作为一个警告（输出提示文本黄色）。
3)2：打开规则检查，并且作为一个错误（输出提示文本红色）。
2.6.5. 相关配置文件
1).eslintrc.js : 规则相关配置文件, 可以在此修改规则
2).eslintignore: 指令检查忽略的文件,　可以在此添加想忽略的文件
```
### 2.7 Vue组件化
#### 2.7.1 配置vue组件文件模板
![](https://i.imgur.com/0qjf1LY.png)
```
<template>
  <div>

  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
```
#### 2.7.2 分析应用的整体vue组件结构
```
src
	|-- components------------非路由组件文件夹
		|-- FooterGuide---------------底部组件文件夹
			|-- FooterGuide.vue--------底部组件vue
      |-- pages-----------------路由组件文件夹
		|-- Msite---------------首页组件文件夹
			|-- Msite.vue--------首页组件vue
		|-- Search----------------搜索组件文件夹
			|-- Search.vue---------搜索组件vue
		|-- Order--------------订单组件文件夹
			|-- Order.vue-------订单组件vue
		|-- Profile--------------个人组件文件夹
			|-- Profile.vue-------个人组件vue
	|-- App.vue---------------应用根组件vue
	|-- main.js---------------应用入口js
```

#### 2.7.3. 各个vue组件的基本代码

##### 1)pages/Msite/Msite.vue
```
<template>
  <div>Msite vue template</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
```
##### 2)pages/Search/Search.vue
```
<template>
  <div>Search vue template</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
```
##### 3)pages/Order/Order.vue
```
<template>
  <div>order vue template</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
```
##### 4)pages/Profile/Profile.vue
```
<template>
  <div>profile vue template</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
```
##### 5)App.vue
```
<template>
  <div>App vue template</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
```
##### 6)main.js
```
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
```
### 2.8 引入vue-router

#### 2.8.1 下载vue-router
```
npm install vue-router --save
```
#### 2.8.2 编码
##### 1)router/index.js
```
/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/profile',
      component: Profile,
    }
  ]
})
```
##### 2)main.js
```
import Vue from 'vue'
import app from './app'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(app),
router,
})

3)components/FooterGuide/FooterGuide.vue
<template>
  <div>
    FooterGuide
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>
```
##### 4)App.vue
```
<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position relative
</style>
```
##### 5)index.html
```
<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>
```
#### 2.8.3 引入reset样式
##### 1)static/css/reset.css
```
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* custom */
a {
  color: #7e8c8d;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
}

li {
  list-style: none;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}

html, body {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}

body {
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/*显示省略号*/
.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
##### 2)index.html中引入
```
<link rel="stylesheet" href="/static/css/reset.css">
```
#### 2.8.4 添加viewport
##### 1)index.html
```
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

### 2.9 创建FooterGuide组件
#### 2.9.1 说明
![](https://i.imgur.com/S6z4hHe.png)
```
1)通过编程式导航实现路由的切换显示($router)
2)通过动态class和$route.path来实现tab样式切换
3)通过阿里图标库, 显示导航图标
```
#### 2.9.2 编码
```
<template>
    <div>
      <footer class="footer_guide border-1px">
        <a href="javascript:;" class="guide_item "
           :class="{on:'/msite' === $route.path}" @click="goto('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
          <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item"
           :class="{on:'/search' === $route.path}" @click="goto('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
          <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item"
           :class="{on:'/order' === $route.path}" @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
          <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item"
           :class="{on:'/profile' === $route.path}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
          <span>我的</span>
        </a>
      </footer>
    </div>
</template>

<script>
    export default {
      methods:{
        goto(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #8bc34a
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
```
### 2.10 各导航路由组件(静态)

#### 2.10.1 HeaderTop 组件
```
<template>
  <header class="header">
    <slot name="search"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="login"></slot>
  </header>
</template>

<script>
    export default {
      props:{
        title:String
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color #8bc34a
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>

```
#### 2.10.2 ShopList 组件
```
<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li border-1px">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/1.jpg">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis" >锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  3.6
                </div>
                <div class="order_section">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/2.jpg">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis" >锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  4.1
                </div>
                <div class="order_section">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/3.jpg">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis" >锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  3.2
                </div>
                <div class="order_section">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/4.jpg">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis" >锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  3.6
                </div>
                <div class="order_section">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop_container
    margin-bottom 50px
    .shop_list
      .shop_li
        bottom-border-1px(#f1f1f1)
        width 100%
        > a
          clearFix()
          display block
          box-sizing border-box
          padding 15px 8px
          width 100%
          .shop_left
            float left
            box-sizing border-box
            width 23%
            height 75px
            padding-right 10px
            .shop_img
              display block
              width 100%
              height 100%
          .shop_right
            float right
            width 77%
            .shop_detail_header
              clearFix()
              width 100%
              .shop_title
                float left
                width 200px
                color #333
                font-size 16px
                line-height 16px
                font-weight 700
                &::before
                  content '品牌'
                  display inline-block
                  font-size 11px
                  line-height 11px
                  color #333
                  background-color #ffd930
                  padding 2px 2px
                  border-radius 2px
                  margin-right 5px
              .shop_detail_ul
                float right
                margin-top 3px
                .supports
                  float left
                  font-size 10px
                  color #999
                  border 1px solid #f1f1f1
                  padding 0 2px
                  border-radius 2px
            .shop_rating_order
              clearFix()
              width 100%
              margin-top 18px
              margin-bottom 8px
              .shop_rating_order_left
                float left
                color #ff9a0d
                .star //2x图 3x图
                  float left
                  font-size 0
                  .star-item
                    display inline-block
                    background-repeat no-repeat
                  &.star-48
                    .star-item
                      width 20px
                      height 20px
                      margin-right 22px
                      background-size 20px 20px
                      &:last-child
                        margin-right: 0
                      &.on
                        bg-image('./images/stars/star48_on')
                      &.half
                        bg-image('./images/stars/star48_half')
                      &.off
                        bg-image('./images/stars/star48_off')
                  &.star-36
                    .star-item
                      width 15px
                      height 15px
                      margin-right 6px
                      background-size 15px 15px
                      &:last-child
                        margin-right 0
                      &.on
                        bg-image('./images/stars/star36_on')
                      &.half
                        bg-image('./images/stars/star36_half')
                      &.off
                        bg-image('./images/stars/star36_off')
                  &.star-24
                    .star-item
                      width 10px
                      height 10px
                      margin-right 3px
                      background-size 10px 10px
                      &:last-child
                        margin-right 0
                      &.on
                        bg-image('./images/stars/star24_on')
                      &.half
                        bg-image('./images/stars/star24_half')
                      &.off
                        bg-image('./images/stars/star24_off')
                .rating_section
                  float left
                  font-size 10px
                  color #ff6000
                  margin-left 4px
                .order_section
                  float left
                  font-size 10px
                  color #666
                  transform scale(.8)
              .shop_rating_order_right
                float right
                font-size 0
                .delivery_style
                  transform-origin 35px 0
                  transform scale(.7)
                  display inline-block
                  font-size 12px
                  padding 1px
                  border-radius 2px
                .delivery_left
                  color #fff
                  margin-right -10px
                  background-color #02a774
                  border 1px solid #02a774
                .delivery_right
                  color #02a774
                  border 1px solid #02a774
            .shop_distance
              clearFix()
              width 100%
              font-size 12px
              .shop_delivery_msg
                float left
                transform-origin 0
                transform scale(.9)
                color #666
              .segmentation
                color #ccc
</style>

```


#### 2.10.3 Msite组件
```
<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop title="历下区解放东路金泉大厦" >
      <router-link class="header_search" to="/search" slot="search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" to="/login" slot="login">
        <span class="header_login_text">登录 | 注册</span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'

  export default {
      mounted(){
        new Swiper('.swiper-container',{
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
        })
      },
      components:{
        HeaderTop,
        ShopList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .msite //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
```
#### 2.10.4 Search组件
```
<template>
  <div class="search">
    <HeaderTop title="搜索" />
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

  export default {
    components:{
      HeaderTop,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'

  .search  //搜索
    width 100%
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #8bc34a
          font-size 16px
          color #fff
          background-color #8bc34a
</style>

```
#### 2.10.5 Orider组件
```
<template>
  <div class="order">
    <HeaderTop title="订单列表" />
    <section class="order_no_login">
      <img src="./images/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

  export default {
    components:{
      HeaderTop,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import '../../common/stylus/mixins.styl'

 .order  //订单
   width 100%
   .order_no_login
     padding-top 140px
     width 60%
     margin 0 auto
     text-align center
     >img
       display block
       width 100%
       height 30%
     >h3
       padding 10px 0
       font-size 17px
       color #6a6a6a
     >button
       display inline-block
       background #8bc34a
       font-size 14px
       color #fff
       border 0
       outline none
       border-radius 5px
       padding 10px 20px
</style>

```
#### 2.10.6 Profile组件
```
<template>
  <div class="profile">
    <HeaderTop title="我的" />
    <section class="profile-number">
      <router-link class="profile-link" to="/login">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
      </router-link>

    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

  export default {
    components:{
      HeaderTop,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'

  .profile //我的
    width 100%
    .profile-number
      margin-top 45.5px
      .profile-link
        clearFix()
        position relative
        display block
        background #8bc34a
        padding 20px 10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          .icon-person
            background #e4e4e4
            font-size 62px
        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            font-weight: 700
            font-size 18px
            color #fff
            &.user-info-top
              padding-bottom 8px
            .user-icon
              display inline-block
              margin-left -15px
              margin-right 5px
              width 20px
              height 20px
              .icon-mobile
                font-size 30px
                vertical-align text-top
            .icon-mobile-number
              font-size 14px
              color #fff
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
          .icon-jiantou1
            color #fff
            font-size 5px
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #fff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .my_order
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left -10px
            font-size 30px
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #f90
          .icon-fuwu
            color #02a774
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          .my_order_icon
            width 10px
            height 10px
            .icon-jiantou1
              color #bbb
              font-size 10px
</style>
```
#### 2.10.7 Login 组件
```
<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">小泊外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;" >密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification" >获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册小泊外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div>
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" src="./images/captcha.svg" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #8bc34a
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
```
### 注意：组件所需要的相应图片到仓库中获取
### 2.11 后台应用
#### 2.11.1 说明
```
1)本项目是一个前后台分离的项目: 前台应用与后台应用
2)后台应用负责处理前台应用提交的请求, 并给前台应用返回json数据
3)前台应用负责展现数据, 与用户交互, 与后台应用交互
```
#### 2.11.2 运行后台应用
```
1)确保启动mongodb服务
2)启动服务器应用(gwaimai_server): npm start
```
[MongoDB安装及配置](https://www.itsolotime.com/blog/2018/01/25/mongoDB%20usage/)
#### 2.11.3. API接口文档
详细查看“API.md”
#### 2.11.4. 使用postman工具测试接口
```
1)postman是用来测试API接口的chrome插件
2)postman也是一个活接口文档
```
### 2.12 前后台交互ajax
#### 2.12.1 下载依赖包
```
npm install --save axios
```
#### 2.12.2 封装ajax请求模块
##### 1)api/ajax.js
```
/**
 * Created by Bianrongcheng on 2018
 * 发送ajax请求函数封装模块
 */

import axios from 'axios'

export default function ajax(url='', data={}, method='GET') {

  return new Promise(function (resolve, reject) {
    let promise
    if(method==='GET') {// /login?name=tom&pwd=123
      // name=tom&pwd=123
      let dataString = ''
      Object.keys(data).forEach(key => {
        const value = data[key];
        dataString += key + '=' + value + '&'
      })
      if(dataString) {
        dataString = dataString.substring(0, dataString.length-1) // 去掉最后的&
      }
      // /login?name=tom&pwd=123
      url += '?' + dataString

      promise = axios.get(url)
    } else {
      promise = axios.post(url, data) // {name:'tom', pwd: '123'}
    }

    promise.then(response => {
      resolve(response.data) 
    }).catch(error => {
      reject(error)
    })
  })

}

```
##### 2)api/index.js
```
/**
 * Created by Bianrongcheng on 2018
 * 接口请求函数的模块
 */

import ajax from './ajax.js';

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = (geohash) => ajax('/api/position/'+geohash);

// [2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodList = () =>ajax('/api/index_category');

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShopList = (longitude, latitude) => ajax('/api/shops', {longitude, latitude});
// latitude=40.10038&longitude=116.36867

// [4、获取一次性验证码](#4获取一次性验证码)<br/>
export const reqCaptcha = () => ajax('/api/captcha');

// [5、用户名密码登陆](#4用户名密码登陆)
export const loginPwd = ({name, pwd, captcha}) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST');

// [6、发送短信验证码](#5发送短信验证码)
export const sendCode = (phone) => ajax('/api/sendcode', {phone});

// [7、手机号验证码登陆](#6手机号验证码登陆)
export const loginSms = ({phone, code}) => ajax('/api/login_sms', {phone, code}, 'POST');

// [8、根据会话获取用户信息](#7根据会话获取用户信息)
export const reqUserInfo = () => ajax('/api/userinfo');
```
#### 2.12.3. 配置代理
##### config/index.js
```
proxyTable: {
  '/api': { // 匹配所有以 '/api'开头的请求路径
    target: 'http://localhost:3000', // 代理目标的基础路径
    changeOrigin: true, // 支持跨域
    pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
      '^/api': ''
    }
  }
}
```