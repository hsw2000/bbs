import Vue from 'vue'
import Management from './Management.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css'
import '../../../public/reset.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(Management)
}).$mount('#management')
