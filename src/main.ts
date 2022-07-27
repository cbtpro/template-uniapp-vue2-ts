import Vue from 'vue';
import App from './App.vue';
import store from './store';
import api from '@/api/http';

// Vue.prototype.$store = store;
Vue.prototype.$api = api;

Vue.config.productionTip = false;

const app = new App({
  store,
});
// 接口集中管理
// Vue.use(httpInstall, app);

app.$mount();
