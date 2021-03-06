


# 小泊外卖

作者：卞荣成 <br>
作者博客：[漂小泊的博客](https://www.itsolotime.com/blog) <br>
作者网站：[小泊随記](https://www.itsolotime.com) <br>

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
#### 2.1.1  使用vue-cli(脚手架)搭建项目
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
b.为什么使用icon字体图标:  使用图标字体可大大减少图标维护工作量。
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
	|-- api-------------------ajax请求配置文件夹
		|-- ajax.js-----------ajax请求函数
		|-- index.js----------ajax接口请求函数
	|-- common----------------公共资源文件夹
		|-- mixins-------------vue组件抽取公用函数文件夹
			|-- index.js-------vue组件抽取公用函数
		|-- stylus------------stylus样式文件夹
			|-- mixins.styl----stylus样式
    |-- components------------非路由组件文件夹
	    |-- AlertTip----------登陆提醒框组件文件夹
			|-- AlertTip.vue----------登陆提醒组件
		|-- CartControl---------------购物车数量组件文件夹
			|-- CartControl.vue-------购物车数量显示组件
		|-- Food-----------------------食物列表组件文件夹
			|-- Food.vue---------------食物列表组件
        |-- FooterGuide---------------底部组件文件夹
            |-- FooterGuide.vue--------底部组件vue
		|-- HeaderTop------------------头部显示组件文件夹
			|-- HeaderTop.vue----------头部显示组件
		|-- RatingSelect----------------评论显示过滤器组件文件夹
			|-- RatingSelect.vue--------评论显示过滤器组件
		|-- ShopCart--------------------购物车组件文件夹
			|-- ShopCart.vue------------购物车组件
		|-- ShopHeader------------------商品头部组件文件夹
			|-- ShopHeader.vue----------商品头部组件
		|-- ShopList--------------------商品列表组件文件夹
			|-- ShopList.vue------------商品列表组件
		|-- Split-----------------------分割线组件文件夹
			|-- Split.vue---------------分割线组件
		|-- Star------------------------星星组件文件夹
			|-- Star.vue----------------星星组件
	  |-- filters-----------------------过滤器文件夹
			|--index.js-----------------过滤器编码	
	  |-- mock--------------------------mock数据文件夹
			|-- datajson----------------模拟数据
			|-- mockServer.js-----------mockjs数据接口
      |-- pages-----------------路由组件文件夹
		|-- Login---------------登陆组件文件夹
			|-- Login.vue-------登录组件
        |-- Msite---------------首页组件文件夹
            |-- Msite.vue--------首页组件vue
			|-- msite_back.svg----加载优化图片
        |-- Search----------------搜索组件文件夹
            |-- Search.vue---------搜索组件vue
        |-- Order--------------订单组件文件夹
            |-- Order.vue-------订单组件vue
        |-- Profile--------------个人组件文件夹
            |-- Profile.vue-------个人组件vue
		|-- Shop------------------商品组件文件夹
			|-- ShopGoods---------商品点餐文件夹
				|-- ShopGoods.vue------商品点餐组件
			|-- ShopInfo----------商品信息文件夹
				|-- ShopInfo.vue-------商品信息组件
			|-- ShopRatings------------商品评论文件夹
				|-- ShopRatings.vue------商品评论组件
			|-- Shop.vue----------------商品整体组件
	|-- router--------------------------路由模板文件夹
		|-- index.js--------------------路由模板
	|-- store--------------------------vuex文件夹
		|-- actions.js
		|-- getters.js
		|-- index.js
		|-- mutation-types.js
		|-- mutations.js
		|-- state.js
    |-- App.vue---------------应用根组件vue
    |-- main.js---------------应用入口js
```
