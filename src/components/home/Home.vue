<template>
  <div class="home">
    <ul class="tabs">
      <li class="tabs-chosen">最新发表</li>
      <li>我的关注</li>
    </ul>
<<<<<<< Updated upstream
    <list></list>
    <pagination></pagination>
=======
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
    <div class="loader-inner line-spin-fade-loader" >
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  computed: {
    
=======
  created() {
    var that = this
    axios.get('/front/tiezi/popular')
    .then(function(res){
        that.listdata = res.data.data.tiezi
    })
    .catch(function (error) {
        console.log(error);
    });
    // 将所有板块放入 vuex
    axios.get('/front/bankuai/list')
    .then(function(res){
      console.log(res)
        that.$store.commit('handleBankuai', res.data.data.bankuai)
    })
    .catch(function (error) {
        console.log(error);
    });
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
</style>