import Vue from 'vue'
import Index from './Index.vue'
import router from '../../router'
import store from '../../store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css'
import '../../../public/reset.css'
import utils from '../../../public/utils.js'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Quill from 'quill'
// 将富文本编辑器，注册为全局可用组件
Vue.use(VueQuillEditor)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.prototype.utils = utils
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#index')
