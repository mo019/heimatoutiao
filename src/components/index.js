import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
export default {
  // 只要main.js中调用Vue.use()install就会调用
  install (Vue) {
    //   注册全局组件
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
  }
}
