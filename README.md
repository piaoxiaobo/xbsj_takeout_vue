# 小泊外卖

## 第一章 准备

### 1.1 项目描述
1)此项目为外卖Web App (SPA)
2)包括商家, 商品, 购物车, 用户等多个子模块
3)使用Vue全家桶+ES6+Webpack等前端最新最热的技术
4)采用模块化、组件化、工程化的模式开发

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

## 第二章: 应用开发详解
### 2.1 开启项目开发
####2.1.1  使用vue-cli(脚手架)搭建项目
1)Vue-cli是vue官方提供的用于搭建基于vue+webpack+es6项目的脚手架工具

2)在线文档: https://github.com/vuejs/vue-cli

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
#### 2.1.4 编码测试与打包发布项目
**1)编码测试**
```
npm run dev
```  
访问: http://localhost:8080
编码, 自动编译打包(HMR), 查看效果
**2)打包发布**
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
1)标注图(设计稿): 对应用界面各个组成元素进行坐标/大小/颜色等进行标签的界面图

2)切图: 将应用界面的一些静态图形部分, 通过工具(如photoshop)剪裁生成的图片

3)图片Base64: 样式中引用的小图片, 在webpack打包会自动处理转换为样式内部的Base64编码字符串

4)2x与3x图: 不同手机的屏幕密度不一样, 一般都在2以上(如iphone6为2,iphone6s为3), 为了适配不同的手机, UI设计师为同一个图片制作了2x和3x的2套图片(图形一样, 但大小不一样)

#### 2.3.2 iconfont字体图标
**1)iconfont介绍**
a.意义：使用字体用HTML代码以文本的形式直接在网页中画icon小图标。
b.为什么使用icon字体图标:  使用图标字体可大大减少图标维护工作量。
c.灵活性：轻松地改变图标的颜色或其他CSS效果。
d.可扩展性：改变图标的大小，就像改变字体大小一样容易。
e.矢量性：图标是矢量的，与像素无关。缩放图标不会影响清晰度。
f.兼容性：字体图标支持所有现代浏览器（包括糟糕的IE6）。
g.本地使用：通过添加定制字体到你的本地系统，你可以在各种不同的设计和编辑应用程序中使用它们。