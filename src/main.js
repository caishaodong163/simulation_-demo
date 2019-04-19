/*
 * 项目入口的js文件
 * npm 安装了之后要在main.js 全局引入
 * 第3方插件可以在npm上找,文档可以到github上找
 */

import Vue from 'vue'
import App from './App.vue'
/* 按需引入element */
import './plugins/element.js'
/* 公共样式 */
import '@/assets/vue.css'
/* router */
import router from './router/index.js'
/* moment的插件 */
import moment from 'moment'
/* tab类型(重复使用单独写一个js) 引入 */
import tab from '@/utils/tab.js'

// 设置使用中文
moment.locale('zh-cn')

Vue.config.productionTip = false
/* 绑定在全局的对象上 */
Vue.prototype.$moment = moment
Vue.prototype.$tab = tab

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
