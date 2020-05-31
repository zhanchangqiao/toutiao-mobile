import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/until/storage'
Vue.use(Vuex)
const USER_KEY = 'user'
export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY),
    cache: ['Layoutindex']
  },
  mutations: {
    setuser (state, data) {
      state.user = data
      setItem(USER_KEY, state.user)
    },
    setcache (state) {
      if (!state.cache.includes('Layoutindex')) {
        state.cache.push('Layoutindex')
      }
    },
    delcache (state) {
      const index = state.cache.indexOf('Layoutindex')
      if (index !== -1) {
        state.cache.splice(index, 1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
