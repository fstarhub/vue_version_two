import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// import './mock/mockjs'
import axios from 'axios'
Vue.prototype.$axios = axios

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// 使用lodash
import _ from 'lodash'
Vue.prototype._ = _

Vue.config.productionTip = false

// 事件总线（跨组件通信）（写法一）
Vue.prototype.$EventBus = new Vue()
// 事件总线（跨组件通信）（写法三）
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()

// 全局mixin
// import mixin from './views/index/myMinxin'
// Vue.mixin(mixin)

// 使用插件 -字典
import dict from './utils/dict/index'
Vue.use(dict)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: {
//     App
//   },
//   template: '<App/>'
//   // 事件总线（跨组件通信）（写法二）
//   // data:{
//   //     $EventBus: new Vue()
//   // }
// })