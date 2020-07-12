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
    <transition-group name="fade">
      <list  
        :num="num"
        v-if="showFirstList" 
        :list="newestLists"
        key=1
      ></list>
      <list
        :num="num"
        v-if="!showFirstList"
        :list="newestLists"
        key=2
      ></list>
    </transition-group>
    <el-pagination
      @current-change="handleCurrentChange" 
      class="pagination"
      background
      layout="prev, pager, next, jumper"
      :total="50" 
    ></el-pagination>
    <el-dialog class="post-dialog" title="快速发帖" :visible.sync="dialogFormVisible">
      <el-input
        placeholder="贴子标题"
        v-model="postTitle"
        clearable>
      </el-input>
      <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
        ></quill-editor>
      <div 
        class="submit" 
        @click="handleSubmit"
      >
        <span>提交</span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import list from '../list/List.vue'
import pagination from '../pagination/Pagination.vue'
export default {
  components: {
    list
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
    postAPost() {
      this.dialogFormVisible = true;
    },
    handleSubmit() {
      this.newestLists.unshift({ forum: "神技水吧", owner: "您的用户名", op: "点赞", follower: "才不是技术宅呢", time: String(Date.now()), title: "[理性讨论帖]"+this.postTitle, reply: "0", seen: "0", desc: this.content })
      this.dialogFormVisible = false
      this.content = ''
      this.postTitle = ''
      console.log(this.newestLists[0])
      console.log(this.topLists[0])
    }
  },
  created() {
    var that = this
    axios.post('/front/tiezi/list', {
      "bid":"",
	    "page":""
    }).then(function(res){
        that.newestLists = res.data.data.tiezi
        that.topLists = JSON.parse(JSON.stringify(res.data))
    }).catch(function (error) {
        console.log(error);
    });
  },
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
  .pagination
    float right
  .post-dialog
    .submit
      position relative
      margin-top 10px
      height 10px  
      span
        position absolute
        right 0
        top 0
        padding 0 30px
        border-radius 10px
        line-height 30px
        width 40px
        text-align center
        color #333
        background-color #a3d3ff
        cursor pointer
  .fade-enter-active, .fade-leave-avtive 
    transition opacity .8s
  .fade-enter, .fade-leave-to 
      opacity: 0
</style>
<style>

.post-dialog .ql-editor {
  height: 140px;
}
.post-dialog .quill-editor {
  margin-top: 15px;
}
.el-dialog__body {
  padding: 15px 20px;
}
</style>