// 处理路由拦截器
import router from '../router'
// 全局前置守卫 当 路由发生变化时 这个方法里的回调函数就会执行
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) {
    // 确定检查范围
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next() // 放过
    } else {
      next('/login') // 强制跳转登录页
    }
  } else {
    next() // 放过
  }
})
