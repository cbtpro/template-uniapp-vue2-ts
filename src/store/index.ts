import Vue from 'vue';
import Vuex from 'vuex';
import dayjs from 'dayjs';
import { GLOBAL_TIME_FORMAT } from '@/constants';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  /** 此处存放根据模块区分的状态 */
  modules,
  /** 此处存放全局系统级别的状态 */
  state: {
    now: Date.now(),
  },
  getters: {
    formatDate(state) {
      return dayjs(state.now).format(GLOBAL_TIME_FORMAT);
    },
  },
  mutations: {
    updateNow(state) {
      state.now = Date.now();
    },
  },
  actions: {
    asyncUpdateNow({ commit }) {
      commit('updateNow', Date.now());
    },
  },
});

export default store;
