import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // movie Vuex를 사용하기 위해서 반드시 필요함!
    movie
  }
})
