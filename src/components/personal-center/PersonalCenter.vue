<template>
  <div class="personal-center">
    <div class="left">
      <div class="avatar">
        <img src="icons/avatar.svg" alt="">
      </div>
      <div class="myname">
        成电小萌新
      </div>
      <div class="info-top">
        <div @click="handleTabsClick('followlist')">
          <span class="info-top-top">关注</span>
          <span class="info-top-bottom">333</span>
        </div>
        <div @click="handleTabsClick('myPosts')">
          <span class="info-top-top">帖子</span>
          <span class="info-top-bottom">333</span>
        </div>
        <div @click="handleTabsClick('fanslist')">
          <span class="info-top-top">粉丝</span>
          <span class="info-top-bottom">333</span>
        </div>
      </div>
      <div class="info-lin"></div>
      <ul class="info-bottom"> 
        <li>邮箱地址：1229112736@qq.com</li>
        <li>生日：2020年6月18日</li>
        <li>星座：射手座</li>
        <li>爱好：写代码</li>
      </ul>
      <a class="modify-info" href="">修改个人信息</a>
    </div>
    <div class="right">
      <ul class="tabs">
        <li :class="{'chosen-tab': chosen == 'newestMsg'}" @click="handleTabsClick('newestMsg')">最新消息</li>
        <li :class="{'chosen-tab': chosen == 'myPosts'}"  @click="handleTabsClick('myPosts')">我的帖子</li>
        <li :class="{'chosen-tab': chosen == 'msgBox'}"  @click="handleTabsClick('msgBox')">私信信箱</li>
        <li :class="{'chosen-tab': chosen == 'blacklist'}"  @click="handleTabsClick('blacklist')">黑名单</li>
        <li :class="{'chosen-tab': chosen == 'followlist'}"  @click="handleTabsClick('followlist')">关注列表</li>
        <li :class="{'chosen-tab': chosen == 'fanslist'}"  @click="handleTabsClick('fanslist')">粉丝列表</li>
      </ul>
      <transition-group :name="viewAnimate">
        <div class="newest-msg" v-if="chosen == 'newestMsg'" key=1>
          <div class="newest-msg-title">最新回复</div>
          <ul>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
          </ul>
          <div class="see-more">查看更多</div>
          <div class="newest-msg-title">最新点赞</div>
          <ul>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
            <li>
              <div class="newest-msg-avatar">
                <img src="icons/avatar.svg" alt="">
              </div>
              <div class="newest-msg-main">
                <span class="newest-msg-username">成电老司机
                  <span class="newest-msg-zan">赞了你的回复</span>
                </span>
                <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
              </div>
              <div class="newest-msg-time">
                2020.5.21 16:30
              </div>
            </li>
          </ul>
          <div class="see-more">查看更多</div>
        </div>
        <div class="my-posts" v-if="chosen == 'myPosts'" key=2>
          <transition-group name="fade" mode="in-out">
            <list 
              :outline="outline" 
              :num="num"
              :list="lists"
              v-if="showFirstList" 
              key=1
            ></list>
            <list2
              :outline="outline"
              :num="num"
              v-else
              key=2
            ></list2>
          </transition-group>
          <el-pagination 
            @current-change="handleCurrentChange" 
            class="pagination"
            background
            layout="prev, pager, next, jumper"
            :total="50"  
          ></el-pagination>
        </div>
        <msgbox v-if="chosen == 'msgBox'" key=3>

        </msgbox>
        <userslist title="拉黑列表" class="blacklist"  v-if="chosen == 'blacklist'" key=4>

        </userslist>
        <userslist title="关注列表" class="followlist"  v-if="chosen == 'followlist'" key=5>

        </userslist>
        <userslist title="粉丝列表" class="fanslist"  v-if="chosen == 'fanslist'" key=6>

        </userslist>
      </transition-group>
    </div>
  </div>
</template>

<script>
import List from '../list/List.vue'
import List2 from '../list/List2.vue'
import Msgbox from '../msgbox/Msgbox.vue'
import Userslist from '../userslist/UsersList.vue'
export default {
  data() {
    return {
      chosen: 'newestMsg',
      tabIndex: 0,
      viewAnimate: '',
      outline: '使用vue的transition完成滑动过渡 阅读数 5959 使用vue来做一些小巧的动画效果是非常方便的,今天本人想使用vue的transition来完成一个滑动过渡效果,.',
      num: 10,
      showFirstList: true,
      currentPage: 1
    }
  },
  components: {
    List,
    List2,
    Msgbox,
    Userslist
  },
  methods: {
    handleTabsClick(tabName) {
      const lastIdx = this.tabIndex
      switch(tabName) {
        case 'newestMsg': {
          this.tabIndex = 0;
          break;
        }
        case 'myPosts': {
          this.tabIndex = 1;
          break;
        }
        case 'msgBox': {
          this.tabIndex = 2;
          break;
        }
        case 'blacklist': {
          this.tabIndex = 3;
          break;
        }
        case 'followlist': {
          this.tabIndex = 4;
          break;
        }
        case 'fanslist': {
          this.tabIndex = 5
        }
      }
      if(this.tabIndex > lastIdx) {
        this.viewAnimate = 'slide-left'
        console.log('forward')
      }else {
        this.viewAnimate = 'slide-right'
        console.log('backward')

      }
      this.chosen = tabName
    },
    handleCurrentChange(val) {
      if(this.currentPage != val) {
        this.currentPage = val
        this.showFirstList = !this.showFirstList
      }
      if(val == 5) {
        this.num = 5;
      }else {
        this.num = 10;
      }
    }
  },
  mounted() {
    if(to.query.entry) {
      this.chosen = this.$route.query.entry
      }
  },
  created() {
    var that = this
    axios.get('api/lists')
    .then(function(res){
        that.lists = res.data
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  watch: {
    '$route'(to, from) {
      if(to.query.entry) {
        this.handleTabsClick(to.query.entry)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.personal-center
  display flex
  height 876px
  .left 
    width 25%
    border 1px solid rgba(221, 221, 221, 1)
    border-radius 10px
    background-color #fff
    .avatar
      margin 50px auto 0 auto
      width 150px
      height 150px
      border-radius 10px
      img
        width 100%
        height 100%
    .myname
      text-align center
      line-height 100px
      font-weight 700
      font-size 28px
    .info-top
      display flex
      justify-content space-around
      div
        cursor pointer
        span
          display block
          font-size 13px
          color #666
          line-height 24px
    .info-line
      margin 20px auto 30px auto
      width 96%
      height 2px
      background-color #333
      opacity 0.2
    .info-bottom
      margin-top 30px
      margin-left 15px
      li
        font-size 18px
        line-height 40px
        color #00386C
    .modify-info
      margin-top 50px
      display block
      text-align center
  .right
    position relative
    width 75%
    background-color #fff
    overflow hidden
    .tabs
      li
        display inline-block
        padding 0 20px
        font-size 14px
        line-height 40px
        cursor pointer
      .chosen-tab
        border-bottom 1px solid #108EE9
        color #108EE9
    .newest-msg
      margin-left 15px
      width 90%
      .newest-msg-title
        margin-top 15px
        font-size 14px
        font-weight 700
        line-height 35px
        color #333
      ul
        li 
          margin 0 15px
          padding 15px 0
          display flex
          border-bottom 1px solid rgba(33,33,33,0.3)
          .newest-msg-avatar
            width 40px
            height 40px
            border-radius 10px
            img 
              width 40px
              height 40px
          .newest-msg-main
            margin-left 10px
            flex 1
            .newest-msg-username
              display block
              font-size 12px
              line-height 16px
              font-weight 700
              .newest-msg-zan
                margin-left 10px
                line-height 16px
                font-weight 400
            .newest-msg-content
              display block
              -webkit-line-clamp 1
          .newest-msg-time
            line-height 20px
      .see-more
        text-align center
        font-size 14px
        color #BEBDBD
        line-height 50px
    .my-posts
      margin-left 15px
    .blacklist
      margin-left 15px
    .newest-msg, .my-posts, .msgbox, .blacklist, .followlist, .fanslist
      position absolute
      left 0
      top 40px
.fade-enter-active, .fade-leave-avtive 
    transition opacity .8s
.fade-enter, .fade-leave-to 
      opacity: 0
</style>
<style scoped>
.slide-right-leave-active, .slide-right-enter-active, .slide-left-leave-active, .slide-left-enter-active {
  transition: all 0.5s linear;
}
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

</style>

