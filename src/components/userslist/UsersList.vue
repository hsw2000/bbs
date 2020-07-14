<template>
  <div class="userslist">
    <div class="title">
      {{title}}
    </div>
    <ul>
      <li class="item" v-for="(item, index) in list" :key=index>
        <img :src="item.imgurl" alt="">
        <p class="username">{{item.username}}</p>
        <p class="op" @click="handleOp(item.username, index)">{{operation}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    list: Array
  },
  computed: {
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
  },
  methods: {
    handleOp(username, index) {
      if(this.title == '拉黑列表') {
        return '解除拉黑'
      }else if(this.title == '粉丝列表') {
        return ''
      }else if(this.title == '关注列表') {
        axios.post('/front/user/unfollow', {
          "username": username
        }).then(function(res) {
          console.log(res)
          this.list.splice(index, 1)
        }) 
      }
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