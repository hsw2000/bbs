import Vue from 'vue'
import Index from './Index.vue'
import router from '../../router'
import store from '../../store'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css'
import '../../../public/reset.css'
import 'loaders.css'
import utils from '../../../public/utils.js'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.prototype.utils = utils

import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#index')
