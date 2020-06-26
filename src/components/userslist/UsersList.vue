<template>
  <div class="userslist">
    <div class="title">
      {{title}}
    </div>
    <ul>
      <li class="item" v-for="i in arr" :key=i>
        <img src="icons/avatar.svg" alt="">
        <p class="username">USERNAME</p>
        <p class="op">{{operation}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,

  },
  computed: {
    arr() {
      let arr = [];
      for(let i = 0; i < 20; i++) {
        arr[i] = i;
      }
      return arr;
    },
    operation() {
      if(this.title == '拉黑列表') {
        return '解除拉黑'
      }else if(this.title == '粉丝列表') {
        return '移除粉丝'
      }else if(this.title == '关注列表') {
        return '取消关注'
      }
      return ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.userslist
  margin-top 10px
  margin-left 15px
  .title
    font-size 18px
    font-weight 700
    line-height 60px
  ul
    display flex
    margin 0 15px
    flex-wrap wrap
    .item
      width 16.6%
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin 20px 0
      img
        width 75px
        height 75px
        border-radius 10px
      .username
        font-weight 700
        font-size 16px
        line-height 40px
      .op
        font-size 13px
        color #169BD5
        cursor pointer
</style>