import Vue from 'vue'
import Login from './Login.vue'
import store from '../../store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';
import '../../../public/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(Login)
}).$mount('#login')
