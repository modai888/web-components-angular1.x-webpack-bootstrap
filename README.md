# web-components-angular1.x-webpack-bootstrap
web组件化开发的实验田。 

## 框架搭建流程记录

#### 创建包描述文件 package.json  

```
npm init
```

#### 划分源码目录，区分客户端和服务端目录

#### 安装webpack开发依赖

```
npm install webpack --save-dev --registry https://registry.npm.taobao.org
```
 
另外npm scripts中配置了基于淘宝镜像安装npm依赖的快捷脚本，使用方法：

```
npm run pkg 包名  // 作为生产依赖安装到dependencies列
npm run pkg 包名 -- --save-dev  //作为开发依赖安装到devDependencies列
npm run pkg 包名 -- --save-optional  //作为开发依赖安装到optionalDependencies列
```

根据不同的构建环境，所需要的依赖不同，根据我们目前的开发现状，目前构建环境有三种：  
* 本地开发环境   
```
依赖dependencies、devDependencies
```
* CI持续集成
```
依赖optionalDependencies
```
* 线上生产环境
```
依赖dependencies
```

#### 安装webpack-dev-server[参考](https://github.com/webpack/webpack-dev-server)

* 安装依赖
```
npm run pkg-d webpack-dev-server
或
npm run --save-dev webpack-dev-server
```
* 配置运行脚本  

在package.json字段scripts中添加server脚本

#### 添加webpack.config.js

* entry
* output
* devtool
* module.loaders
    * html -> `npm run pkg-d raw-loader`  
    * loader关系： css-loader需要依赖图片loader和字体loader处理其中的资源饮用
    
#### 添加客户端页面
* base 全局模块，配置全局参数
* home 首页

#### 添加html-webpack-plugin 生成index访问页面

#### webpack配置难点：定义入口、提取公共模块、定义按需加载模块


# 项目结构  

```
/
├── scss
│   └── ionic.app.scss
│
├── src
│   ├── client
│   │   ├── components
│   │   └── pages
│   │  
│   ├── server
│   │  
│   ├── css
│   │      
│   ├── img
│   │      
│   ├── js
│   │   ├── app
│   │   │   │
│   │   │   ├── auth
│   │   │   │   ├── forgotPassword
│   │   │   │   │   ├── forgotPassword.html
│   │   │   │   │   └── forgotPassword.js
│   │   │   │   │
│   │   │   │   ├── login
│   │   │   │   │    ├── loggedout.html
│   │   │   │   │    ├── login.html
│   │   │   │   │    ├── login.ctrl.js
│   │   │   │   │    ├── login.router.js
│   │   │   │   │    └── logout.ctrl.js
│   │   │   │   │
│   │   │   │   └── signup
│   │   │   │        ├── signup.ctrl.js
│   │   │   │        ├── signup.html
│   │   │   │        └── signup.router.js
│   │   │   │    
│   │   │   ├── user
│   │   │   │   ├── models
│   │   │   │   │   └── user.js
│   │   │   │   │       
│   │   │   │   └── services
│   │   │   │        ├── user.service.js
│   │   │   │        ├── mock
│   │   │   │        │   └── user.service.mockImpl.js
│   │   │   │        └── firebase
│   │   │   │            └── user.service.firebaseImpl.js
│   │   │   │      
│   │   │   app.js
│   │   │   
│   │   ├── config
│   │   │   ├── config-base.json
│   │   │   ├── config-dev.json
│   │   │   ├── config-prod.json
│   │   │   └── config.js  [GENERATED]
│   │   │   
│   │   ├── modules.js
│   │   │   
│   │   └── templates.js
│   │      
│   ├─── lib
│   │    ├── angular
│   │    ├── ionic
│   │    ├── ngCordova
│   │    └── firebase
│   │      
│   ├ index-template.html
│   └ index.html  [GENERATED]
│         
└── www
```

### 前端目录划分：  

client参考组件化分治思想进行划分，具体[参考](https://github.com/fouber/blog/issues/10) 


## 单元测试 

#### 搭建单元测试环境

1. 安装依赖、包括 karma、jasmine、karam-jasmine、karam-webpack、karma-coverage  
2. 初始化karma配置文件
3. 在karma配置文件中添加webpack配置项，配置项内容可单独写或通过require引入外部配置文件
4. 在karam webpack配置中新增preLoader：istanbul-instrumenter-loader,这个loader的主要用途就是统计测试代码基数，方便进行覆盖率计算  
    karma-coverage需配合istanbul-instrumenter-loader使用，否则无法正确显示测试覆盖率信息。
5. 添加npm脚本

```
        "test": "karma start",
        "test-watch": "karma start --auto-watch --no-single-run",
```


#### E2E测试

1. 添加protractor依赖
2. 添加npm脚本，用户更新webdriver-manager


## webpack 学习资源

* [howto](https://qiutc.me/post/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8webpack%E2%80%94webpack-howto.html)
* [webpack-dev-server](https://segmentfault.com/a/1190000006964335)
* [啃先生](http://www.cnblogs.com/giveiris/p/5237080.html)
* [Using Angular 1.x With ES6 and Webpack](http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/)
* [关于提取公共代码块](http://www.jianshu.com/p/ee372e344d6d?utm_campaign=maleskine&utm_content=note&utm_medium=mobile_all_hots&utm_source=recommendation)
* [webpack资源收集](https://segmentfault.com/a/1190000005995267)

## 阅读或待阅读资料
https://github.com/fouber/blog/issues/10  
https://github.com/xiaoyunchen/webpack  
http://www.cnblogs.com/giveiris/p/5237080.html  
https://github.com/jtangelder/sass-loader  
https://github.com/webpack/extract-text-webpack-plugin  
http://www.cnblogs.com/sloong/p/5826818.html  
https://github.com/why520crazy/angular1.x-webpack-seed  
http://pinkyjie.com/2016/01/31/component-based-development-with-angular-1x/
