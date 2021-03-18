import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const index = new Vuex.Store({
  state: {
    count: 0,
    text: '1 \n\r www'
  },
  getters: {
    getText: (state) => {
      return state.text;
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setText (state, text) {
      state.text = text;
    }
  }
});

export default index;