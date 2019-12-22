// 封装一个 axios
import axios from 'axios'

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
// 导出
export default axios
