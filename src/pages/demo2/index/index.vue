<template>
  <view class="content">
    <image class="logo" src="../static/Pure.jpg" />
    <!-- <image class="logo" src="@images/static/Pure.jpg" /> -->
    <!-- <image class="logo" src="@images/uni-h5-hosting-qr.png" /> -->
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <demo-component :title="title" :user-info="userInfo" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
import DemoComponent from '@/components/demo-component/index.vue';

export default Vue.extend({
  name: 'pages-demo2-index',
  components: {
    DemoComponent,
  },
  data() {
    return {
      title: 'Demo2',
      userInfo: {},
    };
  },
  onLoad() {
    console.debug('pages demo2 executive onLoad.');
  },
  methods: {},
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
  /** css中加载远端图片 */
  /* background-image: url(@images/uni-h5-hosting-qr.png); */
  /* background-image: url('@images/uni-h5-hosting-qr.png'); */
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
