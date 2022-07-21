<template>
  <view class="content">
    <image class="logo" src="../static/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
      <br>
      <text>{{ userInfo }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

type Props = Record<string, unknown>;
interface Data {
  title: string;
  userInfo?: UserInfo;  
}
type Computed = Record<string, unknown>;
interface Method {
  init: () => void;
  getData: () => Promise<UserInfo>;
}
export default Vue.extend<Data, Method, Computed, Props>({
  name: 'Index',
  data() {
    return {
      userInfo: undefined,
      title: 'Demo1',
    };
  },
  created() {
    this.init();
  },
  onLoad() {
    console.log('page demo1 onload');
  },
  methods: {
    async init() {
      try {
        const userInfo = await this.getData();
        this.userInfo = userInfo;
      } catch (error) {
        console.error(error);
      }
    },
    getData() {
      return new Promise<UserInfo>((resolve, reject) => {
        setTimeout(() => {
          const data: UserInfo = {
            name: 'peter',
            age: 18,
            sex: 1,
          };
          if (Math.ceil(Math.random() * 10) > 3) {
            resolve(data);
          } else {
            reject(new Error('网络错误'));
          }
        }, 3000);
      });
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
