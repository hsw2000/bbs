<template>
  <div class="home">
    <ul class="tabs">
      <li class="tabs-chosen">最新发表</li>
      <li>我的关注</li>
    </ul>
    <list></list>
    <pagination></pagination>
  </div>
</template>

<script>
import list from '../list/List.vue'
import pagination from '../pagination/Pagination.vue'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  components: {
    list,
    pagination
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  .tabs 
    cursor pointer
    .tabs-chosen
      border-bottom 3px solid rgba(45, 128, 206, 1)
      color rgba(45, 128, 206, 1)
    li
      display inline-block
      box-sizing border-box
      height 48px
      padding 0 10px
      font-size 22px
      line-height 48px
</style>