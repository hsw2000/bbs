<template>
  <div class="app">
    <div class="header">
      <div class="logo">
        <img class="logo-outer" src="/icons/planet_outer.svg">
        <img class="logo-inner" src="/icons/planet_inner.svg">
      </div>
      <div class="title">
        <span class="title-top">清水神技论坛</span>
        <span class="title-bottom">电子科技大学科技论坛</span>
      </div>
      <div class="desc">
        技术宅拯救世界GEEK SAVE THE WORLD
      </div>
      <div class="info">
        <div class="info-left">
          <img :src="avatarSrc" />
        </div>
        <div class="info-right">
          <div class="info-right-top">
            {{username}}
          </div>
          <div class="info-right-bottom">
            <div v-if="isLoggedIn">
              <router-link 
                :to="{path:'/personal-center?entry=newestMsg'}"
              >
                新消息
                <div class="xiaohongdian">1</div>
              </router-link>
              <router-link 
                :to="{path:'/personal-center'}"
              >个人中心</router-link>
              <a  @click="handleLogout">登出</a>
            </div>
            <div v-else>
              <a @click="handleLogin">
                登录
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="pathname">
      <router-link :to="{path:'/'}">
      首页
      </router-link>
    </div>
    <div class="login-container">
      <div class="body">
        <div class="body-left">
          <transition name="fade">
            <router-view />
          </transition>
        </div>
        <div class="body-right">
          <div class="search">
            <div class="search-input">
              <input type="text" placeholder="搜索帖子">
            </div>
            <div class="submit-search">搜索</div>
          </div>
          <div class="forum-catagory">
            <span>板块分类</span>
            <ul>
              <li 
                v-for="(cname, index) in forumcatagory"
                @click="handleForumClick(cname)"
                :key=index
              >
                {{cname}}
              </li>
            </ul>
          </div>
          <div class="personalcenter">
            <span class="personalcenter-title">个人中心</span>
            <ul>
              <li>
                <router-link :to="{path:'/personal-center?entry=myPosts'}">
                我的帖子<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/personal-center?entry=myInfo'}">
                个人信息<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/personal-center?entry=newestMsg'}">
                最新回复<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/personal-center?entry=newestMsg'}">
                收到的赞<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/personal-center?entry=fanslist'}">
                粉丝列表<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/personal-center?entry=followlist'}">
                关注列表<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/personal-center?entry=msgBox'}">
                私信信箱<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/personal-center?entry=blacklist'}">
                拉黑名单<xiaohongdian></xiaohongdian>
                </router-link>
              </li>
            </ul>
          </div>
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <div class="swiper-item">Slide 1</div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-item">Slide 2</div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiper-item">Slide 3</div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <transition name="slide">
        <login 
          v-show="showLogin"
          class="login"
          @closelogin="handleCloseLogin"
          @loginsuccess="handleLoginSuccess"
        ></login>
      </transition>
    </div>
    
  </div>
</template>

<script>
import xiaohongdian from '../../components/xiaohongdian/Xiaohongdian.vue'
import login from '../../components/login/Login.vue'
import defaultSrc from './default_avatar.svg'
import axios from 'axios'
export default {
  data() {
    return {
      // forumcatagory:['船新动向','技术交流','代码星球','神技水吧','硬件星球','科技资讯'],
      forumcatagory: [],
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
      },
      isLoggedIn: false,
      username: '游客',
      showLogin: false,
      avatarSrc: defaultSrc
    }
  },
  components: {
    xiaohongdian,
    login
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    var that = this
    // 将所有板块放入 vuex
    axios.get('/front/bankuai/list')
    .then(function(res){
      that.$store.commit('handleBankuai', res.data.data.bankuai)
      res.data.data.bankuai.map((val) => {
        that.forumcatagory.push(val.name)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    handleForumClick(catagoryName) {
      this.$router.push({
        path: '/forum-home',
        query: {
          forum: catagoryName,
          bid: this.$store.state.bankuaiMap[catagoryName]
        }
      })
    },
    handleLogout() {
      localStorage.removeItem('username');
      this.isLoggedIn = false;
      this.username = '';
    },
    handleLogin() {
      this.showLogin = true
    },
    handleCloseLogin() {
      this.showLogin = false
    },
    handleLoginSuccess(username, src) {
      this.isLoggedIn = true
      this.username = username
      this.avatarSrc = src
      this.showLogin = false
    }
  }
}
</script>
<style lang="stylus">
.header 
  overflow hidden
  width 100%
  height 80px
  padding 0 10%
  box-sizing border-box
  background-color rgba(163, 211, 255, 1)
  .logo 
    float left
    position relative
    width 80px 
    height 80px
    .logo-outer
      position absolute
      left 0
      top 5px
      width 70px
      height 70px
    .logo-inner 
      position absolute
      left 0
      top 15px
      left 5px
      width 60px
      height 60px
  .title
    float left
    margin-left 12px
    .title-top
      display block
      font-size 45px
    .title-bottom
      display block
      margin-top -6px
      font-size 18px
      text-align center
  .desc
    float left
    margin-left 10%
    font-size 20px
    line-height 80px
  .info
    float right
    display flex
    height 80px
    align-items center
    .info-left 
      width 50px
      height 50px
      border-radius 50%
      img 
        width 50px
        height 50px
        line-height 80px
    .info-right
      margin-left 20px
      font-size 16px
      .info-right-top
        font-weight bold
      .info-right-bottom
        margin-top 10px
        color #000
        a
          position relative
          display inline-block
          margin-right 8px
          cursor pointer
          .xiaohongdian
            position absolute
            right -7.5px
            top -7.5px
            width 15px
            height 15px
            border-radius 50%
            text-align center
            line-height 15px
            font-size 9px
            color #fff
            background-color rgba(255, 89, 24, 1)
.pathname
  width 100%
  padding 0 10%
  height 40px
  line-height 40px
  font-size 14px
.body 
  display flex
  justify-content space-around
  width 96%
  margin 0 auto
  background-color rgba(242, 242, 242, 1)
  .body-left
    width 78%
    margin-right 0%
    overflow hidden
  .body-right
    width 14%
    .search 
      margin-top 38px
      height 30px
      font-size 16px
      .search-input
        display inline-block
        width 65%
        height 30px
        overflow hidden
        input
          box-sizing border-box
          width 100%
          height 30px
          padding 3px 2px 3px 2px
      .submit-search
        display inline-block
        overflow hidden
        width 30%
        height 30px
        line-height 30px
        text-align center
        background-color rgba(53, 148, 242, 1)
        color #fff
    .forum-catagory
      margin-top 40px
      background-color #fff
      span
        font-size 18px
        margin-left 23px
        line-height 67px
      ul
        display flex
        flex-wrap wrap
        color #333333
        li
          width 50%
          height 52px
          text-align center
          font-size 14px
          line-height 52px
          &:hover
            background-color rgb(53,148,242)
            color #fff
            cursor pointer
    .personalcenter
      margin-top 40px
      background-color #fff
      .personalcenter-title
        font-size 18px
        margin-left 23px
        line-height 67px
      ul
        display flex
        flex-wrap wrap
        color #333333
        li
          height 37px
          width 50%
          text-align center
          line-height 37px
          a
            position relative
            font-size 14px
            line-height 37px
            color #333
            text-decoration none
    .swiper-container
      margin-top 40px
      width 100%
      height 275px
      --swiper-theme-color #000
      .swiper-item
        background-color pink
        font-size 20px
.login-container
  position relative
.login
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color #fff
  z-index 50
.fade-enter-active, .fade-leave-avtive 
    transition opacity .5s
.fade-enter, .fade-leave-to 
    opacity 0
.slide-enter-active, .slide-leave-active
  transition all .7s
.slide-enter, .slide-leave-to
  transform translateY(-1200px)
  opacity 0
.slide-enter-to, .slide-leave
  transform translateY(0)
  opacity 1
</style>
