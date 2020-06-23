import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Detail from '../components/detail/Detail.vue'
import ForumHome from '../components/forum-home/ForumHome.vue'
import PersonalCenter from '../components/personal-center/PersonalCenter.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/forum-home',
    name: 'ForumHome',
    component: ForumHome
  },
  {
    path:'/personal-center',
    name: 'PersonalCenter',
    component: PersonalCenter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
