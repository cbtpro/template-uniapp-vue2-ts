<template>
  <view class="content">
    <image class="logo" src="~@/static/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
      <button @click="onGoToDemo1Page">pages/demo1/index/index</button>
      <button @click="onGoToDemo2Page">pages/demo2/index/index</button>
      <text>{{ now }}</text>
      <br>
      <text>{{ formatDate }}</text>
      <br>
      <button
        :disabled="false"
        :loading="false"
        hover-class="button-hover"
        @click="doUpdateTime"
      >
        更新时间
      </button>
    </view>
    <hello-world
      :demo1="demo1"
      :demo2="demo3"
      :demo3="title"
    />
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import HelloWorld from '@/components/hello-world/index.vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'pages-index',
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: 'Hello',
      demo1: {
        name: '王德发',
      },
      demo3: {
        age: 20,
      },
    };
  },
  computed: {
    ...mapGetters(['formatDate']),
    now() {
      return store.state.now;
    },
  },
  onLoad() {
    console.debug('pages index executive beforeCreate.');
  },
  methods: {
    ...mapActions({
      updateTime: 'asyncUpdateNow',
    }),
    doUpdateTime() {
      this.updateTime();
    },
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
