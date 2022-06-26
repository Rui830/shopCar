import Vue from 'vue'
import App from './App.vue'
// axios的全局配置
import axios from 'axios'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
axios.defaults.timeout = 3000

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
