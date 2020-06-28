<template>
  <ul class="list">
      <li
        @click="handleLiClick" 
        class="list-item"
        v-for="(item,index) in list"
        :key="index"  
      >
        <div class="list-item-left">【{{item.forum}}】</div>
        <div class="list-item-mid">
          <span class="list-item-mid-top">{{item.title}}</span>
          <span class="list-item-mid-bottom">{{item.desc}}</span>
        </div>
        <div class="list-item-midright" v-if="showFollow">
          您关注的<span>{{item.follower}}</span>{{item.op}}过
        </div>
        <div class="list-item-right">
          <div class="list-item-right-top">
            <img class="icon" src="icons/eye.svg">
            <span class="icon-num-left">{{item.seen}}</span>
            <img class="icon" src="icons/message.svg">
            <span class="icon-num">{{item.reply}}</span>
          </div>
          <div class="list-item-right-bottom">
            <span class="owner">{{item.owner}}</span>
            <span class="time">{{formatDate(item.time)}}</span>
          </div>
        </div>
        
      </li>
  </ul>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 10
    },
    outline: {
      type: String,
      default: '我点名了python是坏东西!!大家来battle呀!要陈述理由哦!不可以随意灌水'
    },
    list: Array,
    showFollow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    
  },
  methods: {
    handleLiClick() {
      this.$router.push('/detail')
    },
    formatDate(num) {
      return this.utils.formatDate(num)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  .list-item
    display flex
    padding 10px 0
    margin 9px 0
    background-color #fff
    .list-item-left
      flex none
      font-size 12px
      color #3594F2
      white-space nowrap
    .list-item-mid
      padding 0 40px 0 10px
      flex auto
      overflow hidden
      span
        display block
      .list-item-mid-top
        font-size 16px
        line-height 18px
        cursor pointer
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .list-item-mid-bottom
        font-size 14px
        line-height 18px
        margin-top 5px
        color #686B6E
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    .list-item-midright
      margin-right 20px
      font-size 12px
      flex none
      white-space nowrap
      span
        color #2D80CE
        white-space nowrap
    .list-item-right
      margin-right 15px
      flex none
      white-space nowrap
      .list-item-right-top
        display flex
        justify-content center
        line-height 23px
        img
          width 17px
          height 17px
          margin 0 7px
        .icon-num-left
          margin-right 14px
      .list-item-right-bottom
        line-height 23px
        .owner
          margin-right 14px
          color #3594F2
  .fade-enter-active, .fade-leave-avtive 
    transition opacity .5s
  .fade-enter, .fade-leave-to 
      opacity: 0
</style>