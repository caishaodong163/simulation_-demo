/* 
 * 项目入口的js文件
*/

import Vue from 'vue'
import App from './App.vue'
/* 按需引入element */
import './plugins/element.js'
/* 公共样式 */
import '@/assets/vue.css'
/* router */
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
