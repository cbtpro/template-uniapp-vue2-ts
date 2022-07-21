<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
      <text class="title">{{ demo1.name }}</text>
      <text class="title">{{ demo2 ? demo2.name : '无名' }}</text>
      <text class="title">{{ demo2Name }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

interface Data {
  title: string;
}
interface Props {
  demo1: Demo1;
  demo2?: Demo2;
  callback: () => void;
}
interface Computed {
  demo2Name: string;
}
interface Method {
  a: () => void;
}
export default Vue.extend<Data, Method, Computed, Props>({
  props: {
    demo1: {
      type: Object as PropType<Demo1>,
      required: true,
    },
    demo2: {
      type: Object as PropType<Demo2>,
      default: () => ({
        name: 'xxxxx',
      }),
    },
    callback: {
      type: Function as PropType<() => void>,
      default: () => () => {
        console.log('executive default callback');
      },
    },
  },
  data() {
    return {
      title: 'hello world',
    };
  },
  computed: {
    demo2Name(): string {
      const { demo2 } = this;
      return demo2 ? demo2.name : '无名';
    },
  },
  onLoad() {
    console.log('executive hello-word onLoad');
  },
  methods: {
    a() {
      console.log(this.demo2Name);
    },
  },
});
</script>

<style>
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
