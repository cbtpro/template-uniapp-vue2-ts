<template>
  <view class="content">
    <u-tabs
      :current="6"
      :duration="0"
      :list="list1"
      @click="click"
    />
    <u-rate v-model="value" :count="5" />
    <u-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss" />
    <!-- <u-action-sheet
      :show="show"
      :actions="list"
      :title="title"
      :close-on-click-overlay="true"
      :close-on-click-action="true"
    /> -->
    <u-action-sheet
      :show="show"
      :actions="list"
      @close="closeActionSheetHandle"
    />
    <u-button @click="show = true">打开ActionSheet</u-button>
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
  closeActionSheetHandle(): void;
}

export default Vue.extend<Data, Method, Computed, Props>({
  name: 'pages-demo3-index',
  components: {},
  data() {
    return {
      title: 'Demo3',
      userInfo: {},
      value: 3,
      value1: 0,
      list: [
        {
          name: '选项一',
        },
        {
          name: '选项二',
        },
      ],
      show: false,
      list1: [
        {
          name: '关注',
        },
        {
          name: '推荐',
        },
        {
          name: '电影',
        },
        {
          name: '科技',
        },
        {
          name: '音乐',
        },
        {
          name: '美食',
        },
        {
          name: '文化',
        },
        {
          name: '财经',
        },
        {
          name: '手工',
        },
      ],
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
    closeActionSheetHandle() {
      this.show = false;
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
