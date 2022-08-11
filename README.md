# rst-uniapp-vue2-ts-template

> 为了保证环境和依赖的稳定性,采用 node v14 版本.

# 指定仓库地址
修改仓库名称将导致仓库的访问 URL 改变，在此之前的 URL 地址将失效。Git 仓库地址修改方法：

git remote set-url origin 仓库地址
# 开发环境搭建

使用VSCode进行开发

nvm进行node安装和版本管理。

mac

https://nodejs.org/zh-cn/download/package-manager/#nvm

window

https://github.com/coreybutler/nvm-windows

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
npm install -g @vue/cli@4
```

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

## 开发规范

### 本地开发配置

在项目根目录添加文件`.env.development.local`，本地开发调试配置都配置在这里，会合并覆盖.env 中的配置。这个文件不加入版本控制。

在项目根目录添加文件`project.private.config.json`.

```json
{
  "appid": "wx538a0e237761456a",
  "projectname": "rst-uniapp-vue2-ts-template",
  "setting": {
    "compileHotReLoad": true
  },
  "description": "项目私有配置文件。此文件中的内容将覆盖 project.config.json 中的相同字段。项目的改动优先同步到此文件中。详见文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html"
}

```



### 环境配置

不同环境的同一个参数有不同值，需要分别 `.env.[环境]`中配置不同值。

- .env.development 开发环境
- env.staging 测试环境
- .env.production 生产环境

### 常量

对于常用不变化的值，可以卸载 constants 文件夹中，比如性别、星期、类型、日期格式化字符串等，全局唯一且不变的，只在一处地方定义，不允许在多个地方定义同一个常量。

### 代码片段

`.vscode/uniapp.code-snippets`维护了 vscode 的代码片段，通过输入 prefix 就可以快速输出代码片段，然后依次输入占位符处的单词，使用 tab 键切换下一个占位符。完成后，删除不需要的生命周期函数和方法。

代码块是一个标准风格的组件、页面模板，开发任何组件、页面都要遵循规范来，可以框定团队风格、代码逻辑、降低代码理解难度。

代码片段生产工具：https://snippet-generator.app/

### 代码检测

工程使用 eslint 进行本地代码检测，同时代码提交后，仓库也会进行一次代码检测。

代码检测的内容有：漏洞、缺陷、风格、坏味道、代码重复率、代码复杂度等。

不要一味的追求低代码重复率，应该是在代码复杂度和代码重复率之间达到一个平衡，目的是为了好维护和扩展。

### 代码格式化

工程使用 prettier 进行代码格式化.

### git规范

严禁使用`--force`进行强推代码。

慎重使用pull，第一次拉取代码，本地没有代码时才可以使用pull。

其余情况一律使用fetch+rebase拉区合并代码，rebase可以使得commit log更加整洁清洁。

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

当本地代码和远端代码有冲突时，严禁一刀切，如果有必要，必须和有冲突的同事一起根据实际业务情况来标记解决冲突，最后再提交。

#### commit log规范

- 安装commitizen

```shell
npm install -g commitizen
```

在当前用户根目录下`.czrc`并添加内容`{ "path": "cz-conventional-changelog" }`

```shell
# MAC
echo  '{ "path": "cz-conventional-changelog" }' >> ~/.czrc
# Window
# 手动操作
```

使用`git cz`替代`git commit`提交代码。

### 开发工具

强烈建议，如果不是对ide的特性非常了解，建议使用vscode，安装相应的差距。

使用Microsoft Edge浏览，不用梯子就可以安装Vue.js devtools等开发者工具，并且支持中文。

如果你有能力翻墙、离线安装插件、对浏览器开发者工具会场熟练，也可以使用chrome、firefox等浏览器。



关注VSCode的Problem选项卡、关注状态栏左下角的错误警告数量，除恶务尽。

关注浏览器控制台的任何警告和错误信息，除恶务尽。

关注小程序开发者控制台的任何警告和错误信息，除恶务尽。

### 开发组件、页面

自测必须覆盖到小程序、h5平台。

组件生命周期、扩展性、鲁棒性、性能。

小程序必须要进行[分包优化](https://uniapp.dcloud.io/collocation/manifest.html#%E5%85%B3%E4%BA%8E%E5%88%86%E5%8C%85%E4%BC%98%E5%8C%96%E7%9A%84%E8%AF%B4%E6%98%8E)，图标、图片都使用远端资源。

为支持多端、支持cli，安装第三方插件请从 [uni-app插件市场](https://ext.dcloud.net.cn/)中寻找，但要通过npm方式进行安装。

### 日志调试

推荐日志输出使用 console.debug。使用时打开开发者调试工具后，设置日志级别为默认。

需要处理组件 props 自动提示

## 代码规范

##### 杂项

###### 禁止使用 jQuery

###### 文件编码必须是 UTF-8

###### 使用 2 个空格作为缩进。

```javascript
for (let i = 0; i < 10; i++) {
∙∙setTimeout(() => {
∙∙∙∙console.log(i);
∙∙}, 1000);
}
```

###### 换行使用 unix 的行尾序列 LF

##### 注释

常量、属性、函数、变量、对象属性、接口定义均在定义前使用/\*\* \*/，编译器会在智能感知中提示。

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

###### 禁止使用保留字

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

命名规则

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

boolean 类型禁止以 is 开头，部分后段框架进行序列化时会导致获取不到

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
const fullName = 'Bob';

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



## 更多规范

- [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)

小程序各家浏览器内核及自定义组件实现机制存在差异，可能存在样式布局兼容问题，参考：https://uniapp.dcloud.io/matter?id=mp

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

参考文档 https://uniapp.dcloud.io/tutorial/vue-vuex.html

时间操作
参考文档 https://dayjs.gitee.io/docs/zh-CN/installation/installation

# eslint 相关

- Component name "index" should always be multi-word. eslint(vue/multi-word-component-names)

  没有设置组件`name`属性,或者`name属性没有使用`kebab-case`肉串命名方法,最少两个单词,全小写用连字符拼接,例如`pages-order-index`订单页面首页,`order-list-item` 订单列表项.
  提交代码

# TODO

- 引入 cdn 图片 - 已完成

- 资源图片上传 cdn 脚本 - 未开始

  compress-images支持

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
