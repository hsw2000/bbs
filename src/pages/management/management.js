import Vue from 'vue'
import Management from './Management.vue'
import store from '../../store'

import '../../../public/reset.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Management)
}).$mount('#management')
