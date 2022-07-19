<template>
  <view class="content">
    <image class="logo" src="~@/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <button @click="onGoToDemo1Page">pages/demo1/index/index</button>
      <button @click="onGoToDemo2Page">pages/demo2/index/index</button>
    </view>
    <hello-world :demo1="demo1" :demo2="demo3" />
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from '@/components/hello-world/index.vue';

export default Vue.extend({
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "Hello",
      demo1: {
        name: '王德发',
      },
      demo3: {
        age: 20,
      },
    }
  },
  onLoad() {},
  methods: {
    onGoToDemo1Page() {
      uni.navigateTo({
        url: '/pages/demo1/index/index',
      });
    },
    onGoToDemo2Page() {
      uni.navigateTo({
        url: '/pages/demo2/index/index',
      });
    },
  },
})
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
