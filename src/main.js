import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.less'
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios // 赋值给全局对象
Vue.use(ElementUI)
// 知识盲点
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
