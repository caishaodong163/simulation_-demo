import axios from 'axios'
/* 可直接解构出来 */
import { Message, Loading } from 'element-ui'

/**
 * 封装axios，实现发送/响应接口的拦截，来实现统一提示等效果
 * Loading 还可以以服务的方式调用。引入 Loading 服务
 * 在需要调用时：
 * Loading.service(options);
 */

const error = () => {
  Message({
    type: 'error',
    message: '遇到错误，请刷新重试！',
    duration: 2 * 1000
  })
}
let loading
const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
const endLoading = () => {
  loading.close()
}

const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000 // 请求超时时间限制
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    startLoading()
    return config
  },
  err => {
    endLoading()
    error()
    Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    endLoading()
    return response.data
  },
  err => {
    endLoading()
    error()
    return Promise.reject(err)
  }
)

export default service
