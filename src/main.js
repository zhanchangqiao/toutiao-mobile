import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vant 库
import Vant from 'vant'
import 'vant/lib/index.css'
// rem适配
import 'amfe-flexible'
// 全局的css
import './style/index.css'
import './until/dayjs.js'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
