<template>
  <ul class="list">
    
    <li @click="handleLiClick" class="list-item">
      <div class="list-item-left">【神技水吧】</div>
      <div class="list-item-mid">
        <span class="list-item-mid-top">[理性讨论帖]什么是最好的编程语言？我投PHP一票，其他编程语言都是异端</span>
        <span class="list-item-mid-bottom">我点名了 python是坏东西!!(￣ε(#￣)☆╰╮(￣▽￣///) 大家来battle呀 要陈述理由哦 不可以随意灌水</span>
      </div>
      
      <div class="list-item-right">
        <div class="list-item-right-top">
          <img class="icon" src="icons/eye.svg">
          <span class="icon-num-left">1234</span>
          <img class="icon" src="icons/message.svg">
          <span class="icon-num">567</span>
        </div>
        <div class="list-item-right-bottom">
          <span class="owner">科技动向看板娘</span>
          <span class="time">今天10:56</span>
        </div>
      </div>
      <div class="list-item-midright">
        您关注的<span>才不是技术宅呢</span>点赞过
      </div>
    </li>
    <li @click="handleLiClick" class="list-item">
      <div class="list-item-left">【神技水吧】</div>
      <div class="list-item-mid">
        <span class="list-item-mid-top">[理性讨论帖]什么是最好的编程语言？我投PHP一票，其他编程语言都是异端</span>
        <span class="list-item-mid-bottom">我点名了 python是坏东西!!(￣ε(#￣)☆╰╮(￣▽￣///) 大家来battle呀 要陈述理由哦 不可以随意灌水</span>
      </div>
      
      <div class="list-item-right">
        <div class="list-item-right-top">
          <img class="icon" src="icons/eye.svg">
          <span class="icon-num-left">1234</span>
          <img class="icon" src="icons/message.svg">
          <span class="icon-num">567</span>
        </div>
        <div class="list-item-right-bottom">
          <span class="owner">科技动向看板娘</span>
          <span class="time">今天10:56</span>
        </div>
      </div>
      <div class="list-item-midright">
        您关注的<span>才不是技术宅呢</span>点赞过
      </div>
    </li>
    <li @click="handleLiClick" class="list-item">
      <div class="list-item-left">【神技水吧】</div>
      <div class="list-item-mid">
        <span class="list-item-mid-top">[理性讨论帖]什么是最好的编程语言？我投PHP一票，其他编程语言都是异端</span>
        <span class="list-item-mid-bottom">我点名了 python是坏东西!!(￣ε(#￣)☆╰╮(￣▽￣///) 大家来battle呀 要陈述理由哦 不可以随意灌水</span>
      </div>
      
      <div class="list-item-right">
        <div class="list-item-right-top">
          <img class="icon" src="icons/eye.svg">
          <span class="icon-num-left">1234</span>
          <img class="icon" src="icons/message.svg">
          <span class="icon-num">567</span>
        </div>
        <div class="list-item-right-bottom">
          <span class="owner">科技动向看板娘</span>
          <span class="time">今天10:56</span>
        </div>
      </div>
      <div class="list-item-midright">
        您关注的<span>才不是技术宅呢</span>点赞过
      </div>
    </li>
    <li @click="handleLiClick" class="list-item">
      <div class="list-item-left">【神技水吧】</div>
      <div class="list-item-mid">
        <span class="list-item-mid-top">[理性讨论帖]什么是最好的编程语言？我投PHP一票，其他编程语言都是异端</span>
        <span class="list-item-mid-bottom">我点名了 python是坏东西!!(￣ε(#￣)☆╰╮(￣▽￣///) 大家来battle呀 要陈述理由哦 不可以随意灌水</span>
      </div>
      
      <div class="list-item-right">
        <div class="list-item-right-top">
          <img class="icon" src="icons/eye.svg">
          <span class="icon-num-left">1234</span>
          <img class="icon" src="icons/message.svg">
          <span class="icon-num">567</span>
        </div>
        <div class="list-item-right-bottom">
          <span class="owner">科技动向看板娘</span>
          <span class="time">今天10:56</span>
        </div>
      </div>
      <div class="list-item-midright">
        您关注的<span>才不是技术宅呢</span>点赞过
      </div>
    </li>
    <li @click="handleLiClick" class="list-item">
      <div class="list-item-left">【神技水吧】</div>
      <div class="list-item-mid">
        <span class="list-item-mid-top">[理性讨论帖]什么是最好的编程语言？我投PHP一票，其他编程语言都是异端</span>
        <span class="list-item-mid-bottom">我点名了 python是坏东西!!(￣ε(#￣)☆╰╮(￣▽￣///) 大家来battle呀 要陈述理由哦 不可以随意灌水</span>
      </div>
      
      <div class="list-item-right">
        <div class="list-item-right-top">
          <img class="icon" src="icons/eye.svg">
          <span class="icon-num-left">1234</span>
          <img class="icon" src="icons/message.svg">
          <span class="icon-num">567</span>
        </div>
        <div class="list-item-right-bottom">
          <span class="owner">科技动向看板娘</span>
          <span class="time">今天10:56</span>
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
  methods: {
    handleLiClick() {
      this.$router.push('/detail')
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