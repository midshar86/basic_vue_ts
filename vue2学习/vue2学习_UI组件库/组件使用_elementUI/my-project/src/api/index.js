import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import url from './url'
import qs from 'qs'

const req = axios.create({
  baseURL: url.baseURL,
  timeout: 5000
})

// 设置请求拦截
req.interceptors.request.use((config) => {
  // 开启请求进度
  if (config.method === 'post') {
    // 将参数编码为urlencoded格式
    config.data = qs.stringify(config.data)
  }
  nprogress.start()
  return config
}, err => {
  return Promise.reject(err)
})

// 设置响应拦截
req.interceptors.response.use(response => {
  // 关闭请求进度
  nprogress.done()
  return response.data
}, err => {
  // 关闭请求进度
  nprogress.done()
  return Promise.reject(err)
})

export default req
