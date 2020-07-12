import Vue from 'vue'
import Index from './Index.vue'
import router from '../../router'
import store from '../../store'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css'
import '../../../public/reset.css'
<<<<<<< Updated upstream
=======
import 'loaders.css'
import utils from '../../../public/utils.js'
>>>>>>> Stashed changes

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#index')
