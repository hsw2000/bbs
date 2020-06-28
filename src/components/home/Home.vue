<template>
  <div class="home">
    <ul class="tabs">
      <li :class="{'tabs-chosen': type == 'newest'}" @click="handleTabsClick('newest')">最新发表</li>
      <li :class="{'tabs-chosen': type == 'follow'}" @click="handleTabsClick('follow')">我的关注</li>
    </ul>
    <transition-group name="fade" mode="in-out">
      <list 
        :list="listdata"
        :showFollow="showFollow"
        v-if="showFirstList" 
        key=1
      ></list>
      <list2
        :list="listdata"
        :showFollow="showFollow"
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
      :current-page.sync="currentPage"
    ></el-pagination>
  </div>
</template>

<script>
import list from '../list/List.vue'
import list2 from '../list/List2.vue'
import axios from 'axios'
export default {
  data() {
    return {
      type: 'newest',
      outline: '',
      num: 10,
      showFirstList: true,
      currentPage: 1,
      listdata: [],
      showFollow: false
    }
  },
  methods: {
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
    },
    handleTabsClick(type) {
      this.showFirstList = !this.showFirstList
      if(type == 'newest') {
        this.showFollow = false
      }else {
        this.showFollow = true
      }
      this.type = type
      this.currentPage = 1
    }
  },
  created() {
    var that = this
    axios.get('api/lists')
    .then(function(res){
        console.log(res)
        that.listdata = res.data
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  components: {
    list,
    list2
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  .tabs 
    .tabs-chosen
      border-bottom 3px solid rgba(45, 128, 206, 1)
      color rgba(45, 128, 206, 1)
    li
      display inline-block
      box-sizing border-box
      margin-right 10px
      height 48px
      padding 0 10px
      cursor pointer
      font-size 22px
      line-height 48px
  .pagination
    float right 
  .fade-enter-active, .fade-leave-avtive 
    transition opacity .8s
  .fade-enter, .fade-leave-to 
      opacity: 0
</style>