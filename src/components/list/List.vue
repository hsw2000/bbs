<template>
  <ul class="list">
      <li
        class="list-item"
        v-for="(item) in list.slice(0, num)"
        :key="item.tid"
        @click="handleLiClick(item.tid)"
      >
        <div class="list-item-left">【{{item.forum}}】</div>
        <div class="list-item-mid">
          <span class="list-item-mid-top">{{item.title}}</span>
          <span class="list-item-mid-bottom">{{formatDesc(item.desc)}}</span>
        </div>
        <div class="list-item-midright" v-if="showFollow">
          您关注的<span>{{item.follower}}</span>{{item.op}}过
        </div>
        <div class="list-item-right">
          <div class="list-item-right-top">
            <img class="icon" src="icons/eye.svg">
            <span class="icon-num-left">{{item.viewnum}}</span>
            <img class="icon" src="icons/message.svg">
            <span class="icon-num">{{item.replynum}}</span>
          </div>
          <div class="list-item-right-bottom">
            <span class="owner">{{item.author}}</span>
            <span class="time">{{formatDate(item.time)}}</span>
          </div>
        </div>
      <div class="list-item-midright">
        您关注的<span>才不是技术宅呢</span>点赞过
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
    }
  },
  computed: {
    arr() {
      let arr = [];
      for(let i = 0; i < this.num; i++) {
        arr[i] = i
      }
      return arr
    }
  },
  methods: {
    handleLiClick(tid) {
      this.$router.push({
        path: '/detail',
        query: {
          tid: tid
        }
      })
    },
    formatDate(num) {
      num = num || Date.now()
      return this.utils.formatDate(num)
    },
    formatDesc(str) {
      str = str || ''
      return str.replace(/<\/?.+?>/g,"");
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  .list-item
    overflow hidden
    padding 10px 0
    margin 9px 0
    background-color #fff
    .list-item-left
      float left
      font-size 12px
      color #3594F2
    .list-item-mid
      float left
      margin-left 10px
      span
        display block
      .list-item-mid-top
        font-size 16px
        line-height 18px
        cursor pointer
      .list-item-mid-bottom
        font-size 14px
        line-height 18px
        margin-top 5px
        color #686B6E
    .list-item-midright
      float right
      margin-right 20px
      font-size 12px
      span
        color #2D80CE
    .list-item-right
      float right
      margin-right 15px
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
</style>