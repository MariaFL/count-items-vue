import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const index = new Vuex.Store({
  state: {
    isCalculating: false
  },
  mutations: {
    setCalculating (state, flag) {
      state.isCalculating = flag;
    }
  }
});

export default index;