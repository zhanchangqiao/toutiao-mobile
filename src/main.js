import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局的css
import './style/index.css'
// vant 库
import Vant from 'vant'
import 'vant/lib/index.css'
// rem适配
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
