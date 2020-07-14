<template>
  <div class="home">
    <ul class="tabs">
      <li 
        :class="{'tabs-chosen': type=='newest'}" 
        @click="handleTabsClick('newest')"
      >最新发表</li>
      <li 
        :class="{'tabs-chosen': type=='follow'}"
        @click="handleTabsClick('follow')"  
      >我的关注</li>
    </ul>
    <transition name="fade" mode="in-out">
      <list 
        :list="listdata"
        :showFollow="showFollow"
        v-if="listdata"
        key=1
      ></list>
    </transition>
    <el-pagination 
      @current-change="handleCurrentChange" 
      class="pagination"
      background
      layout="prev, pager, next, jumper"
      :total="50"
      :current-page.sync="currentPage"
    ></el-pagination>
    <!-- <div class="loader-inner line-spin-fade-loader" >
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div> -->
  </div>
</template>

<script>
import list from '../list/List.vue'
import pagination from '../pagination/Pagination.vue'
import axios from 'axios'
export default {
  data() {
    return {
      listdata: [],
      showFollow: false,
      currentPage: 1,
      getList: false,
      type: 'newest'
    }
  },
  methods: {
    handleCurrentChange(curPage) {
      axios.get('/front/tiezi/popular')
      .then(function(res){
        console.log(res.data)
          that.listdata = res.data.data.tiezi
      })
      .catch(function (error) {
          console.log(error);
      });
    },
    handleTabsClick(type) {
      if(type == 'follow') {
        this.type = 'follow';
        this.showFollow = true;
      }else {
        this.type = 'newest';
        this.showFollow = false;
      }
    }
  },
  created() {
    var that = this
    axios.get('/front/tiezi/popular')
    .then(function(res){
      console.log(res.data.data.tiezi)
      that.listdata = res.data.data.tiezi
    })
    .catch(function (error) {
        console.log(error);
    });
    
  },
  components: {
    list,
    pagination
  }
}
</script>

<style lang="stylus" scoped>
.home
  position relative
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
  .pagination
    float right 
  .load-inner
    position fixed
    left 50vw
    top 50vh
    div
      width 100px
      hright 100px
  .fade-enter-active, .fade-leave-avtive 
    transition opacity .8s
  .fade-enter, .fade-leave-to 
      opacity: 0
</style>
<style>
.load-inner{
  position: absolute !important;
  left: 50%;
  height: 400px;
}
.load-inner > div {
  width: 100px;
  height: 100px;
}
</style>