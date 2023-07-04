# uniapp-vue2-ts-template

> 为了保证环境和依赖的稳定性，采用 node v14 版本.

## 安装git

使用浏览器打开git官网下载git <https://git-scm.com/>

下载完成后按指引一步一步安装，安装完成后，电脑上会出现`Git Bash`、`Git GUI`、`Git Cmd`菜单，即安装完成，打开cmd或者powershell，使用`git --version`名称查看版本信息。

```shell
# 设置自动转换crlf为false
git config --global core.autocrlf false

# 设置提交作者
git config user.name 你的中文名字

# 设置提交邮箱
git config user.email 你的公司邮箱
```

## 获取仓库权限

## 配置仓库SSH公钥

参考文档 https://help.coding.net/docs/repo/ssh/config.html

## 本地新建证书

### window系统

打开cmd或者powershell
切换到.ssh目录
cd ~/.ssh
生成密钥公钥，将<your.email@example.com>替换成你的邮箱或者任何字符串都可以，主要是为了区分公钥

```shell
~\.ssh> ssh-keygen -m PEM -t ed25519 -C "your.email@example.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (C:\Users\cbtpro/.ssh/id_ed25519): id_ed25519
Enter passphrase (empty for no passphrase): 密钥密码
Enter same passphrase again: 重复密钥密码
Your identification has been saved in id_ed25519
Your public key has been saved in id_ed25519.pub
The key fingerprint is:
SHA256:d1vIQHdMGPWh2jHhvj76pGkxRENnvJXTb0zTWBRYvE0 your.email@example.com
The key's randomart image is:
+--[ED25519 256]--+
|          o.+XBBB|
|         . +=+=BE|
|          o .=o+B|
|           ++oo.=|
|        S o.+o.. |
|         . + o.  |
|            +o   |
|           .=.   |
|          .+oo.  |
+----[SHA256]-----+
```

这时候当前目录下会生成两个文件`id_ed25519`和`id_ed25519.pub`，`id_ed25519`保持在目录下不动，将`id_ed25519.pub`里的内容复制到剪贴板。

```shell
# 复制文件内容到粘贴板
type id_ed25519.pub | clip
```

打开 仓库公钥配置页面，点击新增公钥按钮，公钥名称随便起，将复制的内容粘贴到公钥内容中，设置公钥有效期，建议设置成3-12个月后过期，点击确认。

### mac/linux系统

打开任意终端
切换到.ssh目录
cd ~/.ssh
生成密钥公钥，将<your.email@example.com>替换成你的邮箱或者任何字符串都可以，主要是为了区分公钥

```shell
~\.ssh> ssh-keygen -m PEM -t ed25519 -C "your.email@example.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (C:\Users\cbtpro/.ssh/id_ed25519): id_ed25519
Enter passphrase (empty for no passphrase): 密钥密码
Enter same passphrase again: 重复密钥密码
Your identification has been saved in id_ed25519
Your public key has been saved in id_ed25519.pub
The key fingerprint is:
SHA256:d1vIQHdMGPWh2jHhvj76pGkxRENnvJXTb0zTWBRYvE0 your.email@example.com
The key's randomart image is:
+--[ED25519 256]--+
|          o.+XBBB|
|         . +=+=BE|
|          o .=o+B|
|           ++oo.=|
|        S o.+o.. |
|         . + o.  |
|            +o   |
|           .=.   |
|          .+oo.  |
+----[SHA256]-----+
```

这时候当前目录下会生成两个文件`id_ed25519`和`id_ed25519.pub`，`id_ed25519`保持在目录下不动，`id_ed25519.pub`里的内容复制.

```shell
# 复制文件内容到粘贴板
cat id_ed25519.pub | clip
```

打开仓库配置公钥的页面，点击新增公钥按钮，公钥名称随便起，将复制的内容粘贴到公钥内容中，设置公钥有效期，建议设置成3-12个月后过期，点击确认。

如果本机有多个不同的证书，同时需要对github、gitee、coding.net、gitlab，可以在~/.ssh目录下新建一个config文本文件，内容如下，将IdentityFile配置你的用户名替换成你自己的用户名，mac、linux需要对IdentityFile路径进行相应的修改。

```shell
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile C:\Users\你的用户名\.ssh\gitee_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile C:\Users\你的用户名\.ssh\github_id_rsa

# e.coding.net
Host e.coding.net
HostName e.coding.net # 域名
PreferredAuthentications publickey
IdentityFile C:\Users\你的用户名\.ssh\coding.net
```

## clone代码

切换到需要存放代码的地方，建议公司代码集中放到某处存放。

```shell
git clone 仓库ssh地址
```

## 指定仓库地址

修改仓库名称将导致仓库的访问 URL 改变，在此之前的 URL 地址将失效。Git 仓库地址修改方法：

```shell
git remote set-url origin 仓库ssh地址
```

## 开发环境搭建

使用VSCode进行开发

nvm进行node安装和版本管理。

mac

<https://nodejs.org/zh-cn/download/package-manager/#nvm>

window

<https://github.com/coreybutler/nvm-windows>

为保证最大兼容性，node采用目前最流行的v14，你也可以直接安装node长期支持版本 node 16.16.0 LTS，如果遇到问题，可以回退回v14

```shell
nvm install v14
nvm use v14
nvm alias default v14
```

安装cnpm，用于加速安装依赖。

npm install -g cnpm

全局安装@vue/cli，也可以不安装，为了保证版本一致，所以的依赖都已经在项目脚手架中指定了。

```shell
cnpm install -g @vue/cli@4
```

安装工具依赖

```shell
npm install -g lint-staged
```

## 安装依赖

```shell
# window用户建议使用git bash安装依赖
# 此处安装依赖务必使用npm，使用cnpm安装的依赖，启动时会出现问题。
npm install
# 没有出现红色的Error即可。
```

如果安装依赖的过程中出现网络异常，无法github资源库`RequestError: getaddrinfo ENOENT raw.githubusercontent.com`，则需要改善网络环境

## window用户

> 操作前记得先备份一下hosts文件

复制文件`C:\Windows\System32\drivers\etc\hosts`到桌面，在复制到桌面的文件里增加一行`199.232.68.133  raw.githubusercontent.com`，保存后，重新脱回到原来的位置覆盖原文件。再重新执行上面的`npm install`命令即可。

```text
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
# 127.0.0.1       localhost
# ::1             localhost

199.232.68.133  raw.githubusercontent.com

```

### 配置开发环境图片地址

在本地新建文件`.env.development.local`

```shell
# 本地开发配置,本地优先级最高,不加入版本控制
# 标志配置文件
VUE_APP_ENV_PROFILE=.env.development.local

# 本地开发模式使用
VUE_APP_STATIC_CDN_URL=https://127.0.0.1:9981/
```

### 启动开发环境

```shell
# 开发环境
# 启动h5环境
npm run dev:h5

# 启动微信小程序环境
npm run serve:assets # 启动本地开发图片服务器
npm run dev:mp-weixin # 启动微信小程序开发

# 启动app开发
npm run dev:app-plus

# 测试环境
# 启动测试h5环境
npm run dev:test:h5

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

项目根目录里的配置如果需要修改，需要讨论，符合项目需求才可以去修改

### 安装app开发环境

参考文档 <https://uniapp.dcloud.net.cn/tutorial/run/installSimulator.html>
因为安卓官网ip在国内封禁，有能力的可以搭梯子去官网下载Android studio，再通过Android SDK Manager安装安卓镜像，启动模拟器。也可以使用国内的诸多模拟器，
推荐
蓝叠模拟器 <https://www.bluestacks.cn/>
夜神模拟器 <https://www.yeshen.com/>
安装后需要关闭hyper-v，win11可以直接

Android Studio软件包 <https://cloud.189.cn/web/share?code=zYfEfuJRvAvq（访问码：p2zv）>

### 开发效率

- 在工程目录中禁用 Vuter 插件.
- 安装 VSCode 插件`uni-app-snippet`
- 安装 VSCode 代码格式化插件 Prettier
- 安装 VSCodeeslint 插件
- 安装Code Spell Checker插件，检测错误命名
- 使用代码片段提升效率。
- 使用 typescript 提升开发效率。

### 代码质量

坏味道代码

逻辑复杂度

代码复杂度

代码重复率

技术债务

### 本地开发配置

在项目根目录添加文件`.env.development.local`，本地开发调试配置都配置在这里，会合并覆盖.env 中的配置。这个文件不加入版本控制。

在项目根目录添加文件`project.private.config.json`，并配置appid。

```json
{
  "appid": "wx538a0e237761456a",
  "projectname": "uniapp-vue2-ts-template",
  "setting": {
    "compileHotReLoad": true
  },
  "description": "项目私有配置文件。此文件中的内容将覆盖 project.config.json 中的相同字段。项目的改动优先同步到此文件中。详见文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html"
}

```

### 环境配置

不同环境的同一个参数有不同值，需要分别 `.env.[环境]`中配置不同值。

- .env.development 开发环境
- .env.test 测试环境
- .env.staging 预生产环境
- .env.production 生产环境

## 发布小程序

在根目录新建文件`.env.local`，配置阿里云存储。下面的配置仅用于开发环境。

```shell
# 阿里云OSS存储region
VUE_APP_ALI_OSS_REGION=oss-cn-shenzhen
# 阿里云OSS存储ak
VUE_APP_ALI_OSS_ACCESS_KEY_ID=
# 阿里云OSS存储sk
VUE_APP_ALI_OSS_ACCESS_KEY_SECRET=
# 阿里云OSS存储bucket
VUE_APP_ALI_OSS_BUCKET=uniapp-assets-store
```

使用`npm run build:prod:mp-weixin`就可以将小程序打包出来，同时上传图片到阿里云存储。但注意devOps需要在测试、生产的脚本中去生成配置这个文件。

同时`dist/build`目录下会打出`mp-weixin`的包，可以使用ci工具上传到微信小程序的服务器上发布。

如果是开发者工具直接上传，请使用小程序开发者工具打开这个目录后，再通过小程序开发者工具上传。

## 本地开发app

mac电脑可以本地开发ios和安卓，但非mac的window/linux用户只能本地开发安卓版本。都可以用云打包来打包项目，但效率较低。

## 开发规范

开发使用ts+vue-class-component开发
<https://class-component.vuejs.org/>
中文<https://juejin.cn/post/6930896449878097927>

### 项目结构

生成目录结构

```shell
npx treer -i "/node_modules|.git|.history/" > treer.txt
```

```shell
uniapp-vue2-ts-template # 项目根目录
D:\Developer\coding\uniapp-vue2-ts-template
├─.editorconfig
├─.env // 兜底环境变量
├─.env.development // 开发环境变量
├─.env.production // 生产环境变量
├─.env.staging // 预生产环境变量
├─.env.test // 测试环境变量
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.lintstagedrc
├─.prettierignore
├─.prettierrc.json
├─babel.config.js
├─commitlint.config.js
├─cspell.json
├─custom-loader.js
├─package-lock.json
├─package.json
├─postcss.config.js
├─project.config.json
├─README.md
├─sfc.d.ts
├─treer.txt
├─tsconfig.json
├─upload-assets-to-ali-oss.js
├─upload-assets-to-qiniu.js
├─vue.config.js
├─yarn-error.log
├─src // 代码
|  ├─App.vue
|  ├─main.common.ts
|  ├─main.ts
|  ├─manifest.json // hbuilderX配置
|  ├─pages.json // 页面配置
|  ├─shims-tsx.d.ts
|  ├─shims-vue.d.ts
|  ├─shims.d.ts
|  ├─uni.scss
|  ├─utils // 工具类，优先使用uview-ui2提供的api https://www.uviewui.com/js/intro.html
|  |   ├─func.js
|  |   ├─index.ts
|  |   ├─math.ts
|  |   ├─util.js
|  |   └validate.ts
|  ├─typings // typescript定义
|  |    ├─index.d.ts
|  |    ├─store.d.ts
|  |    ├─user.d.ts
|  |    ├─vue.d.ts
|  |    ├─demo
|  |    |  ├─demo1.d.ts
|  |    |  └index.d.ts
|  |    ├─app
|  |    |  ├─demo2.d.ts
|  |    |  └index.d.ts
|  ├─store // 全局状态管理
|  |   ├─index.ts
|  |   ├─mutation-types.ts
|  |   ├─modules
|  |   |    ├─app.ts
|  |   |    └user.ts
|  ├─static // 图片资产，会打进小程序包里
|  |   └logo.png
|  ├─pages
|  |   ├─login // 分包页面
|  |   |   ├─index
|  |   |   |   └index.vue
|  |   |   ├─constants // 分包常量
|  |   |   |     └index.ts
|  |   |   ├─components // 分包组件
|  |   |   |     ├─phone
|  |   |   |     |   └index.vue
|  |   |   |     ├─account
|  |   |   |     |    └index.vue
|  |   ├─index // 分包页面
|  |   |   └index.vue
|  |   ├─demo3 // 分包页面
|  |   |   ├─index
|  |   |   |   └index.vue
|  |   ├─demo2 // 分包页面
|  |   |   ├─index // 页面
|  |   |   |   └index.vue
|  |   |   ├─assets // 图片资产 不会打金小程序包里
|  |   |   |   └Pure.jpg
|  |   ├─demo1 // 分包页面
|  |   |   ├─static // 图片资产，会打近小程序包里
|  |   |   |   └logo.png
|  |   |   ├─index // 页面
|  |   |   |   └index.vue
|  |   |   ├─assets
|  |   |   |   └Pure.jpg
|  ├─http
|  |  ├─api.ts
|  |  ├─config.ts
|  |  └install.ts
|  ├─constants // 常量
|  |     ├─app.ts
|  |     ├─index.ts
|  |     └user.ts
|  ├─components // 全局组件
|  |     ├─hello-world
|  |     |      └index.vue
|  |     ├─demo-component
|  |     |       └index.vue
|  ├─assets
|  |   ├─Pure.jpg
|  |   ├─uni-h5-hosting-qr.png
|  |   ├─logo
|  |   |  └logo.png
|  ├─api // http请求相关代码
|  |  ├─index.ts
|  |  ├─setting.ts
|  |  ├─status.ts
|  |  ├─urls.ts
|  |  ├─http
|  |  |  ├─demo.ts
|  |  |  ├─index.ts
|  |  |  └login.ts
├─public
|   └index.html
├─.vscode
|    ├─settings.json
|    └uniapp.code-snippets
├─.husky
|   ├─commit-msg
|   ├─pre-commit
|   ├─_
|   | ├─.gitignore
|   | └husky.sh
├─.hbuilderx
|     └launch.json

```

### 常量

对于常用不变化的值，可以下载 constants 文件夹中，比如性别、星期、类型、日期格式化字符串等，全局唯一且不变的，只在一处地方定义，不允许在多个地方定义同一个常量。

### 代码片段

`.vscode/uniapp.code-snippets`维护了 vscode 的代码片段，通过输入 prefix 就可以快速输出代码片段，然后依次输入占位符处的单词，使用 tab 键切换下一个占位符。完成后，删除不需要的生命周期函数和方法。

也可以编写自己的代码片段，存放在用户自己的代码片段文件中。

代码块是一个标准风格的组件、页面模板，开发任何组件、页面都要遵循规范来，可以框定团队风格、代码逻辑、降低代码理解难度。

代码片段生产工具：<https://snippet-generator.app/>

### 代码检测

工程使用 eslint 进行本地代码检测，同时代码提交后，仓库也会进行一次代码扫描。

代码扫描的内容有：漏洞、缺陷、风格、坏味道、代码重复率、代码复杂度等。

不要一味的追求低代码重复率，应该是在代码复杂度和代码重复率之间达到一个平衡，目的是为了好维护和后续方便扩展代码。

### 代码格式化

工程使用 prettier 进行代码格式化.

### git规范

严禁使用`--force`进行强推代码。

慎重使用pull，第一次拉取代码，本地没有代码时才可以使用pull。

其余情况一律使用fetch+rebase拉取合并代码，rebase可以使得commit log更加整洁清洁。

```shell
# commit本地代码
git add .
git cz
# 拉取远端代码到本地
git fetch

# 代码变基
git rebase

# 有冲突解决冲突

# 推送代码到远端
git push
```

#### 解决冲突

当本地代码和远端代码有冲突时，严禁一刀切，如果有必要，必须和有代码冲突的同事一起根据实际业务情况来标记解决冲突，最后再提交。

#### commit log规范

- 安装commitizen

```shell
npm install -g commitizen
```

在当前用户根目录下`.czrc`并添加内容`{ "path": "cz-conventional-changelog" }`

```shell
# MAC
echo  '{ "path": "cz-conventional-changelog" }' > ~/.czrc

# Window使用powershell
echo  '{ "path": "cz-conventional-changelog" }' > ~/.czrc

# Window使用cmd
echo { "path": "cz-conventional-changelog" } > C:\Users\你的用户名\.czrc
# 手动操作
```

使用`git cz`替代`git commit`提交代码。

如果出现类似这样的提示信息`The config file at "C:\Users\cbtpro\.czrc" contains invalid charset, expect utf8`，用vscode打开后，点击右下角状态栏的字符集，另存为utf8即可。

### 开发工具

强烈建议，如果不是对ide的特性非常了解，建议使用vscode，安装相应的插件。

使用Microsoft Edge浏览器，不用梯子就可以安装Vue.js devtools等开发者工具，并且支持中文。

如果你有能力翻墙、离线安装插件、对浏览器开发者工具会场熟练，也可以使用chrome、firefox等浏览器。

关注VSCode的Problem选项卡、关注状态栏左下角的错误警告数量，除恶务尽。

关注浏览器控制台的任何警告和错误信息，除恶务尽。

关注小程序开发者控制台的任何警告和错误信息，除恶务尽。

### 开发组件

全局共用组件放到src/components中。
只在分包页面中使用的组件，只放在分包下面，减少主包打包大小。

### 开发页面

页面代码放到src/pages/下面，除首页必须要加载的页面，其余页面一律放在分包下。分包配置在文件`src/pages.json`的subPackages节点下。

### 图片规范

本地开发将可以懒加载的图片放到assets文件夹，static文件夹下的图片都会被小程序打包到项目里，造成臃肿。

远端图片地址配置在`.env*`文件中，使用远端图片，就需要将图片地址替换成别名`@/images`，开发时也使用本地图片，本地开发小程序时时，运行`npm run serve:assets`启动本地图片服务，编译时，则会将图片上传到阿里云存储中。

```html
<image class="logo" src="@/assets/uni-h5-hosting-qr.png" />
```

脚手架在编译后，将本地图片地址替换成远端图片地址，需要将cdn文件夹下编译的图片上传到cdn服务器上。
目的都是为了减小打包大小。

### 设计规范

设计均采用宽度750px，所有像素单位都使用uniapp官方推荐的rpx。750px=750rpx。

### 自测

自测必须覆盖到小程序、h5平台、app。

组件生命周期、扩展性、鲁棒性、性能。

小程序必须要进行[分包优化](https://uniapp.dcloud.io/collocation/manifest.html#%E5%85%B3%E4%BA%8E%E5%88%86%E5%8C%85%E4%BC%98%E5%8C%96%E7%9A%84%E8%AF%B4%E6%98%8E)，图标、图片都使用远端资源。

为支持多端、支持cli，安装第三方插件请从 [uni-app插件市场](https://ext.dcloud.net.cn/)中寻找，但要通过npm方式进行安装。

### 日志调试

推荐日志输出使用 console.debug。使用时打开开发者调试工具后，设置日志级别为默认。

需要处理组件 props 自动提示

### Code Review代码检视

推荐下面两个vscode插件

- d-koppenhagen.vscode-code-review
  - 可视化。
  - 方便定位。
  - 提供单独的视图。
  - 配置丰富。
  - 已修复的记录只能删除掉。

- xuebin.codereviewer
  - 配置简单。
  - 方便定位。
  - 历史已修复的问题也会被记录。

## 代码规范

参考文档 https://cn.vuejs.org/v2/style-guide/

### 限制规则

vue文件行数不能超过1000行，否则必须解耦优化，建议是从一开始就拆分组件。
对象属性取值过深，如`obj.a.b.c`，使用计算属性、解构、ts空安全等方式做容错处理。

```javascript
// 错误用法
if (obj.a.b === 'something') {
  // ……
}

// 正确用法
const { data = {} } = response;
const { message } = data;
if (!message) {
  // ……
}

// vue
export default {
  name: 'demo',
  data() {
    return {
      config: undefined,
    }
  },
  computed: {
    language() {
        const { language } = this.config || {};
        return language ? language : Language.zh_cn;
    },
  },
}

// ts
if (!response?.data?.message) {
  // ……
}
```

禁止使用 jQuery

文件编码必须是 UTF-8

使用 2 个空格作为缩进。
代码逻辑没有超过3层for循环，复杂逻辑另起方法并合理命名，一个方法只完成一个功能。
代码没有冗余逻辑
减少dom操作；
表单提交按钮增加loading状态、锁定状态。在try中禁用，在finally中启用。
所有的if、else if没有return的情况下都必须要要else
所有的switch必须要有default块，并且优先写default，避免忘记。
所有创建定时器必须要有清除动作。
使用v-for必须添加唯一的key，不允许使用数组索引作为key，同一个作用域中禁止使用同一个变量名。
所有的JSON.parse、JSON.stringify等可能出现异常的情况下，都要做异常处理。
所有的promise都必须捕获异常。
向子组件传递参数时，必须使用kebab-case方式。子组件中定义props则使用camelCase方式，所有组件都要处理默认值和异常情况。

```javascript
for (let i = 0; i < 10; i++) {
∙∙setTimeout(() => {
∙∙∙∙console.log(i);
∙∙}, 1000);
}
```

换行使用 unix 的行尾序列 LF

#### 注释

常量、属性、函数、变量、对象属性、接口定义均在定义前使用`/** */`，编译器会在智能感知中提示。

```js
// 错误
// 学生信息
interface StudentInfo {
  // 姓名
  name: string;
  sex: 0 | 1; // 性别
  age: number; // 年龄
}

// 正确
/** 学生信息 */
interface StudentInfo {
  /** 姓名 */
  name: string;
  /** 性别 */
  sex: 0 | 1;
  /** 年龄 */
  age: number;
}

export const BASE_URL = '//www.example.com';

/**
 * 生成安全随机数
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（包含）
 * @param {boolean} isFloat 是否带小数
 * @returns {number} 范围内随机数
 * @example
 * const rand = random(0, 5)
 */
export const random = (min = 0, max = 100, isFloat = false) => {
  const array = new Uint32Array(1);
  const maxUint = 0xffffffff;
  const randomNumber = crypto.getRandomValues(array)[0] / maxUint;
  const randomRangeValue = (max - min + 1) * randomNumber + min;
  return isFloat ? randomRangeValue : Math.floor(randomRangeValue);
};
```

使用`// TODO`、`// FIXME`可以通过插件快速定位到这行代码，帮助开发者了解这是一个需要复查的问题。

```javascript
function test() {
  // TODO: 这里需要处理非空的情况
}
```

单行注释需要在注释前插入一行

```javascript
// 错误用法
const ENV = 'production';
// TODO： 需要更新最新请求地址
const BASE_URL = '//www.example.com/';

// 正确用法
const ENV = 'production';

// TODO： 需要更新最新请求地址
const BASE_URL = '//www.example.com/';
```

禁止使用 var，合理使用 let 和 const。

```js
// 错误
var name = 'peter';
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// 正确
const name = 'peter';
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
```

##### 禁止使用保留字

```javascript
// 错误用法
const superman = {
  /** 默认 */
  default: { clark: 'kent' },
  /** 是否隐藏 */
  private: true,
};

// 正确用法
const superman = {
  /** 默认 */
  defaults: { clark: 'kent' },
  /** 是否隐藏 */
  hidden: true,
};
```

##### 对象

禁止使用 new Object 创建对象

```js
// 错误用法
const object = new Object();
const userInfo = new UserInfo();

// 正确用法
enum Sex {
  /** 女性 */
  FEMALE = 0,
  /** 男性 */
  MALE = 1,
}
interface UserInfo {
  name: string;
  sex: Sex;
  age: number;
}
const userInfo: UserInfo = {
  name: '',
  sex: 0,
  age: 0,
};
```

###### 每一个执行单元结尾都要添加分号

```javascript
// 错误用法
const BASE_URL = '//example.com/';

// 正确用法
const BASE_URL = '//example.com/';
```

###### 严禁使用==，必须使用===

```javascript
// 错误用法
const userInfo = {
  name: 'peter',
  age: 18,
};

console.log(userInfo.age == '18');

// 正确用法
console.log(userInfo.age === 18);
```

禁止魔鬼数字

```javascript
// 错误用法
const userInfo = {
  name: 'peter',
  type: 0,
  sex: 1,
}

// 正确用法
/** 用户类型 全局定义一个 */
enum UserType {
  /** 超级用户 */
  SUPER_USER: 0,
  /** 管理员 */
  ADMIN: 1,
  /** 普通用户 */
  NORMAL: 2,
  /** 访客 */
  GUEST: 3,
}
/** 性别 全局定义一个 */
enum Sex {
  /** 女 */
  FEMALE = 0,
  /** 男 */
  MALE = 1,
}

const userInfo = {
  name: 'peter',
  type: UserType.NORMAL,
  sex: Sex.MALE,
};
```

##### 命名规则

所有文件夹、vue组件、页面、js文件都以`kebab-case`方式命名。并且所有命名不超过3个单词，并且语义化。

除特殊情况，禁止使用一个字母命名，命令要具有语义化。

```javascript
// 错误用法
const a = {
  name: 'peter',
  type: UserType.NORMAL,
};

// 正确用法
const userInfo = {
  name: 'peter',
  type: UserType.NORMAL,
};

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
for (let j = 0; j < 10; j++) {
  setTimeout(() => {
    console.log(j);
  }, 3000);
}
```

使用驼峰法命名对象、函数。

```javascript
// 错误用法
const workinfo = {};
const Userinfo = {};
const GetUserInfo = () => {};

// 正确用法
const workInfo = {};
const userInfo = {};
const getUserInfo = () => {};
```

禁止使用\_、$命名，可能会和 vue、taro、uniapp 等框架中的私有变量冲突。

```javascript
// 错误用法
export default {
  data() {
    _data: {},
    $data: {},
  },
};

// 正确用法
export default {
  data() {
    userInfo: {},
    rawData: {},
  },
};
```

谨慎使用暂存 this 引用，先使用箭头函数解决 this 绑定问题，无法解决再使用\_self 暂存 this

```javascript
// 错误用法
export default {
  data() {
    return {
      version: '',
    };
  },
  methods: {
    sayHello() {
      const _self = this;
      this.$nextTick(function() {
        // 代码
        console.log(_self.version);
      })
    },
  },
};

export default {
  data() {
    return {
      version: '',
    };
  },
  methods: {
    sayHello() {
      this.$nextTick(() => {
        // 代码
        console.log(this.version);
      })
    },
  },
};
```

boolean 类型禁止以 is 开头，部分后端框架进行序列化时会导致获取不到

```javascript
// 错误示例
const isShow = false;

// 正确示例
const show = false;
const hidden = true;
```

枚举类型以大驼峰命名方法来命名，并且必须明确表明值。

```javascript
// 错误示例
enum USER_TYPE {
  SUPER_USER,
  ADMIN,
  ……
  GUEST,
}
// 正确示例
enum UserType {
  SUPER_USER = 0,
  ADMIN = 1,
  ……
  GUEST = 21,
}
```

字符串

字符串使用单引号

```javascript
// 错误示例
const fullName = "Bob";

// 正确示例
const fullName = 'Bob';
```

字符连接使用模版语法

```javascript
// 错误示例
const fullName = 'Bob' + this.lastName;

// 正确示例
const fullName = `Bob ${this.lastName}`;
```

多个字符连接，使用数组的 join 进行连接。

```javascript
// 错误示例
const prefix = '……';
const middle = '……';
const suffix = '……';
……
const fragment = '……';

const text = prefix + middle + suffix + …… + fragment;

// 正确示例
const text = [prefix, middle, suffix, ..., fragment].join(' ');

```

数组

###### 多行数组、对象最后一项需要添加逗号

```javascript
// 错误示例
const array = [9999, 8888, 7777];
// 正确示例
const array = [9999, 8888, 7777];
```

###### switch 的 default 块放在第一个位置，每一个 case 都必须要有大括号包裹。

```javascript
// 错误示例
switch (state) {
  case 0:
    goPage1();
    break;
  case 1:
    goPage2();
    break;
  case 2:
    goPage3();
    break;
  case 3:
    goPage4();
    break;
  default:
    goPage1();
    break;
}

// 正确示例
enum WorkState {
  /** 未开始 */
  UN_START = 0,
  /** 开始中 */
  STARTING = 1,
  /** 处理中 */
  PROCESS = 2,
  /** 结束 */
  END = 3,
}
switch (state) {
  default: {}
  case WorkState.UN_START: {
    goPage1();
    break;
  }
  case WorkState.STARTING: {
    goPage2();
    break;
  }
  case WorkState.PROCESS: {
    goPage3();
    break;
  }
  case WorkState.END: {
    goPage4();
  }
}

```

##### 异常

所有的try都必须有catch，视情况有finally

```javascript
try {
  this.loading = true;
  showLoading();
  const res = await queryUserList();
  ……
} catch (error) {
  console.error(error);
} finally {
  this.loading = false;
  hiddenLoading();
}
```

组件属性超过 3 个时，必须修改成每行一个属性。

```html
<!-- 错误示例 -->
<user-list
  title="标题"
  background="#fff"
  size="big"
  @click="userListItemClickHandler"
/>

<!-- 正确示例 -->
<user-list
  title="标题"
  background="#fff"
  size="big"
  @click="userListItemClickHandler"
/>
```

## CSS规范

- 样式采用scss编码。
- 全局样式写在uni.scss，scss中的样式必须是共用的样式。
- 样式文件过大，需要单独写一个文件通过@import的方式引入。
- 5.css必须严格按照scss编码格式修改

样式代码：

```html
<style lang="scss" scoped>
</style>

```

使用方式：

- 如果不是通用的的样式，就必须考虑同构方案，放在组件类。
- scss文件和文件夹采用kebab-case方式命名。
- 组件中的css必须要使用scoped

```html
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  &-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
```

## 更多规范

- [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)

小程序各家浏览器内核及自定义组件实现机制存在差异，可能存在样式布局兼容问题，参考：<https://uniapp.dcloud.io/matter?id=mp>

- 开发组件页面

开发一个组件或页面需要确定生命周期，template 里先进行空值、白屏、骨架屏处理。

在 created 里进行数据异步获取，并更新 data，如果有 computed，computed 也会自动更新，并触发页面渲染。

页面上如果有用户交互触发数据更新，则只需要调用更新数据的方法即可。

组件销毁时，对对象、引用、时间绑定进行解绑，防止内存溢出。

虽然浏览器和 vue 帮助做了很多优化工作，但是还是有很多工作需要开发者来做。

页面除了组件的生命周期，有自己单独的生命周期函数，比如页面显示时更新数据（注意和 created 也有获取数据的方法，不要重复请求数据），隐藏时停止动画。

- 状态管理

状态管理是一门学问，用来了可以减少事件调用、减少组件间的耦合，降低逻辑复杂度。

组件内的状态存放在 data 中，父子组件的状态存放在父组件的 data 中（状态提升），复杂的引用管理放在状态管理中。

参考文档 <https://uniapp.dcloud.io/tutorial/vue-vuex.html>

时间操作
参考文档 <https://dayjs.gitee.io/docs/zh-CN/installation/installation>

## eslint 相关

- Component name "index" should always be multi-word. eslint(vue/multi-word-component-names)

  没有设置组件`name`属性，或者`name属性没有使用`kebab-case`肉串命名方法，最少两个单词，全小写用连字符拼接，例如`pages-order-index`订单页面首页，`order-list-item` 订单列表项.
  提交代码

## TODO

- 引入 cdn 图片 - 已完成

- 资源图片上传 cdn 脚本 - 已完成

  资产图片压缩 - 未开始

- README.md - 进行中

- http 封装 - 进行中

- typings 支持 - 完成

- 多环境支持 - 完成

  已支持 dev/staging/prod

- VSCode 代码片段 - 未完成

- 代码风格检测 - 完成

- git 提交检测 - 完成

- uview-ui2支持 - 完成

- 需要处理组件 props 自动提示 - 未完成
