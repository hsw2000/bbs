<template>
  <div class="forum-home">
    <div class="title">
      <div class="title-left">
        <div class="title-left-top">
          <span class="title-left-top-big">{{name}}</span>
          <span class="title-left-top-small">
            今日新增: {{todaynew}}     | 总主题: {{total}}
          </span>
        </div>
        <div class="title-left-bottom">
          {{desc}}
        </div>
      </div>
      <div class="title-right">
        版主: {{banzhu}}
        <a @click="handlePostNew">快速发帖</a>
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
    <list
      :list="topLists"
      v-if="topLists"
    ></list>
    <div class="newest-title">最新</div>
    <transition name="fade">
      <list
        :list="newestLists"
        v-if="newestLists"
      ></list>
    </transition>
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
import axios from 'axios'
import {quillEditor} from 'vue-quill-editor'
export default {
  data() {
    return {
      total: 0,
      todaynew: 0,
      name: '',
      bid: '',
      desc: '',
      banzhu: '',
      content: '',
      postTitle: '',
      topLists: [],
      newestLists: [],
      dialogFormVisible: false,
      page:1,
      editorOption: {
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['code-block'],     //引用，代码块
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
              [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
              [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
              [{ 'direction': 'rtl' }],             // 文本方向
              [{ 'color': [] }],     // 字体颜色，字体背景颜色
              ['clean'],    //清除字体样式
              ['image']    //上传图片、上传视频
            ]
          }
        }
      }
    }
  },
  components: {
    list,
    quillEditor
  },
  methods: {
    postAPost() {
      this.dialogFormVisible = true;
    },
    handleSubmit() {
      var that = this
      axios.post('/front/tiezi/new', {
          "bid": that.bid,
          "title": that.postTitle,
	        "content": that.content
        }).then(function(res){
          console.log(res)
          that.handleCurrentChange(1)
          that.$message.success('发帖成功！')
          that.dialogFormVisible = false
        }).catch(function (error) {
            console.log(error);
        });
      this.content = ''
      this.postTitle = ''
    },
    handleCurrentChange(page) {
      this.page = page
      var that = this
      axios.post('/front/tiezi/list', {
        "bid": that.bid,
        "page": page
      }).then(function(res){
        const resobj = res.data.data
        that.total = resobj.total
        that.newestLists = resobj.tiezi
        that.todaynew = resobj.todaynew
        that.topLists = JSON.parse(JSON.stringify(resobj.tiezi))
      }).catch(function (error) {
          console.log(error);
      });
    },
    handlePostNew() {
      this.dialogFormVisible = true
    }
  },
  created() {
    var that = this
    this.name = this.$route.query.forum
    this.bid = this.$route.query.bid
    const bankuai = this.$store.state.bankuai[this.bid]
    this.desc = bankuai.description
    this.banzhu = bankuai.banzhu
    this.handleCurrentChange(1)
  },
  watch: {
    '$route'(to, from) {
      this.name = to.query.forum
      this.bid = to.query.bid
      this.page = 1
      const bankuai = this.$store.state.bankuai[this.bid]
      this.desc = bankuai.description
      this.banzhu = bankuai.banzhu
      this.handleCurrentChange(1)
    }
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
        cursor pointer
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