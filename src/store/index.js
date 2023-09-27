import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowBurger:false
  },
  getters: {
    GET_SHOW_BURDER(state){
      return state.isShowBurger
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
