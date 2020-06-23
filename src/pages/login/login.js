import Vue from 'vue'
import Login from './Login.vue'

import '../../../public/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Login)
}).$mount('#login')
