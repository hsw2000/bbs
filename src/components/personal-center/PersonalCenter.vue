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
        <div>
          <span class="info-top-top">关注</span>
          <span class="info-top-bottom">333</span>
        </div>
        <div>
          <span class="info-top-top">帖子</span>
          <span class="info-top-bottom">333</span>
        </div>
        <div>
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
        <li class="{chosen-tab: chosen == 'newestMsg'}" @click="handleTabsClick('newestMsg')">最新消息</li>
        <li class="{chosen-tab: chosen == 'myPosts'}"  @click="handleTabsClick('myPosts')">我的帖子</li>
        <li class="{chosen-tab: chosen == 'msgBox'}"  @click="handleTabsClick('msgBox')">私信信箱</li>
        <li class="{chosen-tab: chosen == 'blacklist'}"  @click="handleTabsClick('blacklist')">黑名单</li>
      </ul>
      <div class="newest-msg" v-show="chosen == 'newestMsg'">
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
      <div class="my-posts" v-show="chosen == 'myPosts'">
        <list></list>
      </div>
      <msgbox></msgbox>
      <div class="blacklist"  v-show="chosen == 'blacklist'">
        BLACKLIST
      </div>
    </div>
  </div>
</template>

<script>
import List from '../list/List.vue'
import Msgbox from '../msgbox/Msgbox.vue'
export default {
  data() {
    return {
      chosen: 'newestMsg'
    }
  },
  components: {
    List
  },
  methods: {
    handleTabsClick(tabName) {
      console.log(tabName)
      this.chosen = tabName
    }
  }
}
</script>

<style lang="stylus" scoped>
.personal-center
  display flex
  .left 
    width 25%
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
      li
        font-size 18px
        line-height 40px
        color #00386C
  .right
    width 75%
    background-color #fff
    .tabs
      li
        display inline-block
        padding 0 20px
        font-size 14px
        line-height 40px
      .chosen-tab
        border-bottom 1px solid #108EE9
        color #108EE9
    .newest-msg
      margin-left 15px
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
    .msgbox
      margin-left 15px
      .msgbox-left
        width 12%
        .msg-left-title
          font-weight 700
          line-height 40px
          text-align center
    .blacklist
      margin-left 15px
</style>