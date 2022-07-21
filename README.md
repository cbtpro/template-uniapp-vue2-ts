# template-uniapp-vue2-ts

> 为了保证环境和依赖的稳定性,采用node v14版本.
## 安装依赖
```
npm install
```

### 启动开发环境
```
npm run serve # h5
npm run dev:mp-weixin # 微信小程序
# 更多参考package.json中scripts配置
```

### 编译打包
```
npm run build # h5
npm run build:mp-weixin # 微信小程序
```

### 更多自定义配置
See [配置参考](https://cli.vuejs.org/config/).

开发效率
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

小程序各家浏览器内核及自定义组件实现机制存在差异，可能存在样式布局兼容问题，参考：https://uniapp.dcloud.io/matter?id=mp

开发组件
开发页面

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
