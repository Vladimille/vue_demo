import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import mixins from './mixins'
import api from './api'
import axios from 'axios'
import './plugins/element.js'
Vue.prototype.$axios = axios
Vue.config.productionTip = false


mixins.init()
// 全局引入api
Vue.prototype.api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
