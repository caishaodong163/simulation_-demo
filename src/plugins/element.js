/*
 * 对ElementUI的组件进行按需引用。不需要的就不引用
 * 这样可以减小打包后的文件体积
 */

import Vue from 'vue'
import {
  Dialog,
  Button,
  Tabs,
  TabPane,
  Tag
  // Message
} from 'element-ui'

Vue.use(Dialog)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(TabPane)
// Vue.use(Message)
/* 在这里也可以全局引入 */
// Vue.prototype.$message = Message
