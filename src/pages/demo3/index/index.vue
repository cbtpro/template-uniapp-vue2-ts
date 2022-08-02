<template>
  <view class="content">
    <u-rate v-model="value" :count="5" />
    <u-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss" />
    <u-tabbar
      :value="value1"
      :fixed="true"
      :placeholder="true"
      :safe-area-inset-bottom="true"
      @change="change1"
    >
      <u-tabbar-item text="首页" icon="home" @click="click1" />
      <u-tabbar-item text="放映厅" icon="photo" @click="click1" />
      <u-tabbar-item text="直播" icon="play-right" @click="click1" />
      <u-tabbar-item text="我的" icon="account" @click="click1" />
    </u-tabbar>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';

type Props = Record<string, unknown>;
interface Data {
  value: number;
  value1: number;
}
type Computed = Record<string, unknown>;
interface Method {
  click1: (index: number) => void;
  change1: (index: number) => void;
}

export default Vue.extend<Data, Method, Computed, Props>({
  name: 'pages-demo3-index',
  components: {
  },
  data() {
    return {
      title: 'Demo3',
      userInfo: {},
      value: 3,
      value1: 0,
    };
  },
  onLoad() {
    console.debug('pages demo3 executive onLoad.');
  },
  methods: {
    click1(index: number) {
      console.log('click1', index);
    },
    change1(index: number) {
      console.log(index);
      this.value1 = index;
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
