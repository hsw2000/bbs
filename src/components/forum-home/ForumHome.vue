<template>
  <div class="forum-home">
    <div class="title">
      <div class="title-left">
        <div class="title-left-top">
          <span class="title-left-top-big">神技水吧</span>
          <span class="title-left-top-small">
            今日新增: 57     | 总主题: 55177
          </span>
        </div>
        <div class="title-left-bottom">
          万物皆可水吧，来水吧边喝边聊吧~ ( ^ - ^)>旦
        </div>
      </div>
      <div class="title-right">
        版主: 水吧老板，皮卡皮卡球
        <a href="">快速发帖</a>
      </div>
    </div>
    <div class="zhiding-title">
      <ul class="tabs">
        <li>全部</li>
        <li>最新</li>
        <li>最热</li>
        <li>精华</li>
      </ul>
      <span class="zhiding-tabs-right">
        <span>作者</span>
        <span>回复/查看</span>
        <span>最后回复</span>
      </span>
      <span class="zhiding-tabs-center">置顶区</span>
    </div>
    <list></list>
    <div class="newest-title">最新</div>
    <list></list>
    <pagination></pagination>
  </div>
</template>

<script>
import list from '../list/List.vue'
import pagination from '../pagination/Pagination.vue'
export default {
  components: {
    list,
    pagination
  }
}
</script>

<style lang="stylus" scoped>
.forum-home
  width 100%
  .title
    margin-top 15px
    display flex
    align-items center
    justify-content space-between
    height 76px
    background-color #fff
    .title-left
      margin-left 20px
      .title-left-top
        line-height 32px
        .title-left-top-big
          font-size 28px
          font-weight bolder
        .title-left-top-small
          margin-left 25px
          font-size 18px
      .title-left-bottom
        font-size 16px
        line-height 20px
    .title-right
      margin-right 20px
      font-size 16px
      line-height 76px
      a
        margin-left 20px
  .zhiding-title
    position relative
    display flex
    align-items center
    justify-content space-between
    height 51px
    font-size 16px
    line-height 51px
    .tabs
      li
        display inline-block
        padding 0 10px
        color #169BD5
    .zhiding-tabs-right
        span 
          margin 0 10px
    .zhiding-tabs-center
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      text-align center
      line-height 51px
      font-weight: 700;
      font-size: 20px;
      color: #B0A7A7;
  .newest-title
    text-align center
    font-size 16px
    line-height 20px
</style>