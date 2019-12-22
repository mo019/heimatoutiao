import Vue from 'vue'
import App from './App.vue'
import './permission' // 引用权限模块
import router from './router/index'
import ElementUI from 'element-ui'
import Components from './components/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.less'
import axios from './utils/request.js'

Vue.prototype.$axios = axios // 赋值给全局对象
Vue.use(ElementUI)
Vue.use(Components)
// 知识盲点
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
