// 封装一个 axios
import axios from 'axios'
import router from '../router/index'
import { Message } from 'element-ui'
import JSONBig from 'json-bigint'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截
axios.interceptors.request.use(function (config) {
  // 执行请求没问题
//   config 请求参数配置
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = 'Bearer ' + token
  return config // 表示会用该config请求进行后台操作
}, function () {
  // 执行请求错误

})
axios.defaults.transformResponse = [function (data) {
  // debugger
  let result = JSONBig.parse(data)
  return result
}]
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      // token过期或者失效
      window.localStorage.removeItem('user-token') // 删除过期的token
      router.push('/login') // 跳转到登陆页
      break
    case 403:
      message = '没有设置这条评论的权限'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
  return Promise.reject(error) // 只要reject是错误的 => 代码就会运行到catch的里面
})
// 导出
export default axios
