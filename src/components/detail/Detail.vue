<template>
  <div class="detail">
    <div class="title">
      <div class="title-big">[理性讨论帖]什么是最好的编程语言？我投PHP一票，其他编程语言都是异端</div>
      <div class="title-vice">
        <span class="title-vice-left">
          查看：
          <span class="title-vice-number">4517</span>
           |  回复：
           <span class="title-vice-number">145</span>
        </span>
        <span class="title-vice-time">2019-10-19 15:07:10 </span>
      </div>
      <div class="title-zan">
        <img src="../../../public/icons/dianzan_off.svg">
        <span>4</span>
      </div>
    </div>
    <ul class="detail-list">
      <li class="item" v-for="i in arr" :key="i">
        <div class="item-left">
          <div class="item-left-avatar">
            <img src="icons/default_avatar.svg" alt="">
          </div>
          <div class="item-left-username">USERNAME</div>
          <div class="item-left-op">
            <span>关注</span>
            <span>私信</span>
          </div>
        </div>
        <div class="item-right">
          <div class="item-right-floor">
            <span>2019-10-19 15:07:10&nbsp;&nbsp; </span>
            <span>2楼</span>
          </div>
          <div class="item-right-line"></div>
          <div class="item-right-main">
            {{text}}
          </div>
          <div class="item-right-op">
            <div class="item-zan">
              <img src="../../../public/icons/dianzan_off.svg" alt="">
              <span>点赞</span>
            </div>
            <div class="item-jubao">
              <img src="../../../public/icons/flag.svg" alt="">
              <span>举报</span>
            </div>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      text: '噫嘘唏，危乎高哉，蜀道之难难于上青天，灿从及预付，开过和茫然，二来四万八千岁，不与秦赛同仁眼。西当太白有鸟道，可以横绝恶没电。\n噫嘘唏，危乎高哉，蜀道之难难于上青天，灿从及预付，开过和茫然，二来四万八千岁，不与秦赛同仁眼。西当太白有鸟道，可以横绝恶没电。\n噫嘘唏，危乎高哉，蜀道之难难于上青天，灿从及预付，开过和茫然，二来四万八千岁，不与秦赛同仁眼。西当太白有鸟道，可以横绝恶没电。\n噫嘘唏，危乎高哉，蜀道之难难于上青天，灿从及预付，开过和茫然，二来四万八千岁，不与秦赛同仁眼。西当太白有鸟道，可以横绝恶没电。\n'
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
  }
}
</script>

<style lang="stylus" scoped>
.detail
  background-color #fff
  .title
    position relative
    margin-top 25px
    .title-big
      font-size 20px
      line-height 25px
      font-weight 650
      color #515151
    .title-vice
      .title-vice-left
        font-size 16px
        line-height 18px
        font-weight 650
        .title-vice-number
          color #F26C4F
      .title-vice-time
        margin-left 20px
    .title-zan
      position absolute
      right 0
      bottom 0
      width 20px
      height 20px
      img
        display inline
  .detail-list
    .item
      display flex
      .item-left
        width 14%
        padding-top 20px
        img
          width 100%
        .item-left-avatar
          margin 0 auto
          width 55%
          background-color pink
          border-radius 10px
        .item-left-username
          margin 10px 0
          text-align center
          font-size 16px
          font-weight 650
        .item-left-op
          text-align center
          span
            color #0077E5
            font-size 12px
            text-decoration underline
            cursor pointer
            &:first-child
              margin-right 20px
      .item-right
        width 83%
        padding 16px 10px
        border-bottom 1px solid rgba(33,33,33,0.1)
        .item-right-floor
          display flex
          align-items center
          justify-content space-between
          .item-right-floor-time
            margin-left 6px
          .item-right-floor-num
            margin-right 6px
        .item-right-line
          border-top 1px dotted #333
          margin 3px 0
        .item-right-main
          margin 23px 10px 0 10px
          min-height 160px
        .item-right-op
          margin-top 5px
          text-align right
          .item-zan, .item-jubao
            display inline
            img
              width 20px
              height 20px
          .item-zan
            margin-right 20px

</style>