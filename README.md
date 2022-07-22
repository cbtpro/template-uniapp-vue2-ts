# template-uniapp-vue2-ts

> 为了保证环境和依赖的稳定性,采用node v14版本.

## 安装依赖

```
npm install
```

### 启动开发环境

```shell
# 开发环境
npm run dev:h5 # h5
npm run dev:mp-weixin # 微信小程序
npm run dev:app-plus # app

# 测试环境
npm run dev:test:h5 # h5
npm run dev:test:mp-weixin # 微信小程序

# 生产环境 - 不建议链接生产环境
npm run dev:prod:h5 # h5
npm run dev:prod:mp-weixin # 微信小程序

# npm
npm run build:app-plus
npm build:app-plus --watch

# 更多参考package.json中scripts配置
```

### 编译打包
```shell
# 开发环境
npm run build:h5 # h5
npm run build:mp-weixin # 微信小程序

# 测试环境
npm run build:test:h5 # h5
npm run build:test:mp-weixin # 微信小程序

# 开发环境
npm run build:prod:h5 # h5
npm run build:prod:mp-weixin # 微信小程序

# 更多参考package.json中scripts配置
```

### 更多自定义配置
See [配置参考](https://cli.vuejs.org/config/).

项目根目录里的配置如果需要修改,需要讨论,符合项目需求才可以去修改

开发效率
在工程目录中禁用Vuter插件.
安装VSCode插件`uni-app-snippet`
安装代码格式化插件
代码必须用2个空格替换tab
安装eslint
```shell
npm i -g eslint
```
分号
逗号
代码片段
需要处理组件props自动提示

## 更多规范

- [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)

小程序各家浏览器内核及自定义组件实现机制存在差异，可能存在样式布局兼容问题，参考：https://uniapp.dcloud.io/matter?id=mp

开发组件
开发页面
状态管理

参考文档 https://uniapp.dcloud.io/tutorial/vue-vuex.html
时间操作
参考文档 https://dayjs.gitee.io/docs/zh-CN/installation/installation

eslint相关

- Component name "index" should always be multi-word. eslint(vue/multi-word-component-names)

  没有设置组件`name`属性,或者`name属性没有使用`kebab-case`肉串命名方法,最少两个单词,全小写用连字符拼接,例如`pages-order-index` 订单页面首页, `order-list-item` 订单列表项.
提交代码
```shell
npm install -g commitizen && 
```
在用户根目录下`.czrc`并添加内容`{ "path": "cz-conventional-changelog" }`

```shell
# MAC
echo  '{ "path": "cz-conventional-changelog" }' >> ~/.czrc
# Window
# 手动操作
```





# TODO

* 引入cdn图片 - 已完成

* 资源图片上传cdn脚本 - 未开始

* README.md - 进行中

* http封装 - 进行中

* typings支持 - 完成

* 多环境支持 - 完成

  支持dev/staging/prod

* VSCode代码片段 - 未完成

* 需要处理组件props自动提示 - 未完成

