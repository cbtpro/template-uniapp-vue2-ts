<template>
  <view class="content">
    <image class="logo" src="@images/uni-h5-hosting-qr.png" />
    <view>
      <text class="title">{{ title }}</text>
      <text v-if="user" class="title">{{ user.name }}</text>
      <text class="title">{{ age }}</text>
      <text class="title">{{ demo2Name }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
// import { Sex } from '@/constants';

// 对象定义,通用的定义应该放在src/typings中
// interface UserInfo {
//   name: string;
//   sex: Sex;
//   age?: number;
// }

// props定义
interface Props {
  title: string;
  userInfo?: UserInfo;
  callback?: () => void;
}

// data定义
interface Data {
  message: string; // 标题
  user?: UserInfo; // 用户信息
}
// 计算属性定义
interface Computed {
  age?: number | string;
  demo2Name: string;
}

// 方法定义
interface Method {
  init: () => Promise<void>;
  getData: () => Promise<number>;
  sayHello: () => void;
}

const router = getCurrentPages();
console.debug('router:', router);

export default Vue.extend<Data, Method, Computed, Props>({
  name: 'demo-component',
  props: {
    userInfo: {
      type: Object as PropType<UserInfo>,
      required: false,
      default: () => undefined,
    },
    title: {
      type: String,
      required: true,
    },
    callback: {
      type: Function as PropType<() => void>,
      default: () => () => {
        console.debug('demo-component executive default callback');
      },
    },
  },
  data() {
    return {
      message: 'hello world',
      user: this.userInfo,
    };
  },
  computed: {
    age() {
      const { user } = this;
      return user ? user.age : '/';
    },
    demo2Name(): string {
      const { user } = this;
      return user ? user.name : '无名';
    },
  },
  /**
   * 在实例初始化之前被调用。详见
   * @see https://cn.vuejs.org/v2/api/#beforeCreate
   */
  beforeCreate() {
    console.debug('demo-component executive beforeCreate.');
  },
  /**
   * 在实例创建完成后被立即调用。详见
   * @see https://cn.vuejs.org/v2/api/#created
   */
  created() {
    console.debug('demo-component executive created.');
    this.getData();
  },
  /**
   * 在挂载开始之前被调用。详见
   * @see https://cn.vuejs.org/v2/api/#beforeMount
   */
  beforeMount() {
    console.debug('demo-component executive beforeMount.');
  },
  /**
   * 挂载到实例上去之后调用。详见
   * @see https://cn.vuejs.org/v2/api/#mounted
   * 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue
   * @see https://cn.vuejs.org/v2/api/#Vue-nextTick
   */
  mounted() {
    console.debug('demo-component executive mounted.');
  },
  /**
   * 数据更新时调用，发生在虚拟 DOM 打补丁之前。详见
   * @see https://cn.vuejs.org/v2/api/#beforeUpdate
   */
  beforeUpdate() {
    console.debug('demo-component executive beforeUpdate.');
  },
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。详见
   * @see https://cn.vuejs.org/v2/api/#updated
   */
  updated() {
    console.debug('demo-component executive updated.');
  },
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。详见
   * @see https://cn.vuejs.org/v2/api/#beforeDestroy
   */
  beforeDestroy() {
    console.debug('demo-component executive beforeDestroy.');
  },
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 详见
   * @see https://cn.vuejs.org/v2/api/#destroyed
   */
  destroyed() {
    console.debug('demo-component executive destroyed.');
  },
  methods: {
    async init() {
      const result = this.getData();
      console.log(result);
    },
    getData() {
      return new Promise<number>(resolve => {
        setTimeout(() =>  {
          resolve(Math.random());
        }, 1000);
      });
    },
    sayHello() {
      console.log(this.demo2Name);
    },
  },
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
