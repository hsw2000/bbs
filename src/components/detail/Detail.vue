<template>
  <div class="detail">
    <div class="title">
      <div class="title-big">{{title}}</div>
      <div class="title-vice">
        <span class="title-vice-left">
          查看：
          <span class="title-vice-number">4517</span>
           |  回复：
           <span class="title-vice-number">{{total}}</span>
        </span>
        <span class="title-vice-time">2019-10-19 15:07:10 </span>
      </div>
      <div class="title-zan">
        <img :src="dianzanOffSrc">
        <span>4</span>
      </div>
    </div>
    <ul class="detail-list" v-if="!showLoading">
      <li class="item" v-for="(item, index) in lists" :key="index">
        <div class="item-left">
          <div class="item-left-avatar">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="item-left-username">{{item.author}}</div>
          <div class="item-left-op">
            <span @click="handleFollow(item.author)">关注</span>
            <span @click=handleSendMsgClick(item.author)>私信</span>
          </div>
        </div>
        <div class="item-right">
          <div class="item-right-floor">
            <span>{{item.create_time}}&nbsp;&nbsp; </span>
            <span>2楼</span>
          </div>
          <div class="item-right-line"></div>
          <div class="item-right-main">
            <div class="ql-container ql-snow" style="border:none;">
                <div class="ql-editor" v-html="item.content">
                </div>
            </div>
          </div>
          <div class="item-right-op">
            <div class="item-zan">
              <img 
                @click="handleDianzanClick(index, item.rid)"
                :src="item.islike ? dianzanOnSrc : dianzanOffSrc" alt=""
              >
              <span>点赞</span>
            </div>
            <div class="item-jubao" @click="handleJubaoClick">
              <img src="icons/flag.svg" alt="">
              <span>举报</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <el-dialog class="dialog" :title="dialogTitle" :visible.sync="dialogFormVisible" width="30%" :modal="false" top="15vh">
      <el-input
        type="textarea"
        v-model="dialogContent"
        clearable
      >
      </el-input>
      <div class="dialog-buttons">
        <div 
          class="dialog-btn cancel"
          @click="handleCancel"
        >
          取消
        </div>
        <div 
          class="dialog-btn dialog-submit"
          @click="handleSendMsg"
        >
          发送
        </div>
      </div>

    </el-dialog>

    <div class="textarea item" v-show="!showLoading">
      <div class="item-left">
        <div class="item-left-avatar">
          <img :src="$store.state.avatarSrc" alt="">
        </div>
        <div class="item-left-username">{{$store.state.username}}</div>
      </div>
      <div class="textarea-right">
        <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
        ></quill-editor>
        <div class="submit" @click="handleSubmit">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {quillEditor} from 'vue-quill-editor'
import dianzanOnSrc from './dianzan_on.svg'
import dianzanOffSrc from './dianzan_off.svg'

export default {
  props: {
    num: {
      type: Number,
      default: 10,
    },
    viewnum: Number
  },
  data() {
    return {
      reply: 0,
      tid: 0,
      lists: [],
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
      },
      content: '',
      dianzanSrc: [
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg',
        'icons/dianzan_off.svg'
      ],
      showLoading: true,
      title: '',
      total: 0,
      dianzanOnSrc,
      dianzanOffSrc,
      sendMsgUser: '',
      dialogFormVisible: false,
      dialogTitle: '',
      dialogContent: '',
      dialogType: ''
    }
  },
  computed: {
    
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      this.content = html
    },
    formatDate(num) {
      return this.utils.formatDate(num)
    },
    handleDianzanClick(index, rid) {
      console.log(index, rid)
      var that = this
      axios.post('/front/tiezi/like', {
        "rid": rid
      }).then(function(res){
        var newobj = JSON.parse(JSON.stringify(that.lists[index]))
        newobj.islike = newobj.islike == 1 ? 0 : 1
        that.$set(that.lists, index, newobj)
      }).catch(function (error) {
          console.log(error);
      });
    },
    handleSubmit() {
      var that = this
      axios.post('/front/tiezi/reply', {
        "tid": this.tid,
        "content":this.content
      }).then(function(res){
          console.log(res)
      }).catch(function (error) {
          console.log(error);
      });
      // 更新视图
      this.lists.push({
        username: this.$store.state.username,
        content: this.content,
        time: String(Date.now())
      })
      this.content = ''
    },
    handleFollow(username) {
      var that = this
      axios.post('/front/user/follow', {
        "username": username
      }).then(function(res){
          console.log(res)
      }).catch(function (error) {
          console.log(error);
      });
    },
    handleJubaoClick(username) {
      this.dialogType = 'jubao'
      this.dialogTitle = '请输入举报理由'
      this.dialogFormVisible = true
    },
    handleSendMsgClick(username) {
      this.dialogType = 'sendmsg'
      this.sendMsgUser = username
      this.dialogTitle = '私信（注意文明用语哦）'
      this.dialogFormVisible = true
    },
    handleSendMsg() {
      var that = this
      console.log(this.sendMsgUser)
      if(this.dialogType == 'sendmsg') {
        axios.post('/front/user/sendmsg', {
          "username": this.sendMsgUser,
          "msgcontent": this.dialogContent
        }).then(function(res){
            console.log(res)
            that.$message.success('私信发送成功！')
        }).catch(function (error) {
            console.log(error);
        });
      }else {
        // axios发送举报信息

      }
    },
    handleCancel() {
      this.dialogFormVisible = false;
      this.dialogContent = ''
    }
  },
  created() {
    var that = this
    this.tid = this.$route.query.tid
    console.log(this.$store.state.avatarSrc)
    axios.post('/front/tiezi/view', {
      "tid": this.tid,
      "page": 1
    }).then(function(res){
      const resobj = res.data.data
      console.log(resobj)
      // that.title = resobj.title
      that.total = resobj.total
      that.lists = resobj.reply
      that.showLoading = false
    }).catch(function (error) {
        console.log(error);
    });
  },
  components: {
    quillEditor
  }
}
</script>

<style lang="stylus" scoped>
.detail
  background-color #fff
  .title
    position relative
    margin-top 25px
    .title-big
      font-size 20px
      line-height 25px
      font-weight 650
      color #515151
    .title-vice
      .title-vice-left
        font-size 16px
        line-height 18px
        font-weight 650
        .title-vice-number
          color #F26C4F
      .title-vice-time
        margin-left 20px
    .title-zan
      position absolute
      right 0
      bottom 0
      width 20px
      height 20px
      img
        display inline
  .detail-list
    .item
      display flex
      .item-left
        width 14%
        padding-top 20px
        img
          width 100%
        .item-left-avatar
          margin 0 auto
          width 55%
          border-radius 10px
        .item-left-username
          margin 10px 0
          text-align center
          font-size 16px
          font-weight 650
        .item-left-op
          text-align center
          span
            color #0077E5
            font-size 12px
            text-decoration underline
            cursor pointer
            &:first-child
              margin-right 20px
      .item-right
        width 83%
        padding 16px 10px
        border-bottom 1px solid rgba(33,33,33,0.1)
        .item-right-floor
          display flex
          align-items center
          justify-content space-between
          .item-right-floor-time
            margin-left 6px
          .item-right-floor-num
            margin-right 6px
        .item-right-line
          border-top 1px dotted #333
          margin 3px 0
        .item-right-main
          margin 23px 10px 0 10px
          min-height 160px
        .item-right-op
          margin-top 5px
          text-align right
          .item-zan, .item-jubao
            display inline
            img
              width 20px
              height 20px
          .item-zan
            margin-right 20px
  .dialog
    box-shadow 0px 0px 5px rgba(0, 0, 0, 0.349019607843137)
    .el-textarea
      .el-textarea__inner
        min-height 200px !important
    .dialog-buttons
      display flex
      justify-content flex-end
      .dialog-btn
        box-sizing border-box
        position relative
        margin-top 10px
        height 35px
        padding 0 20px
        border-radius 3px
        line-height 35px
        text-align center
        color #333
        background-color #a3d3ff
        cursor pointer
      .cancel
        background-color #fff
        color #999999
        border 1px solid #999999
        margin-right 10px
      .dialog-submit
        background-color rgba(0, 119, 229, 1)
        color #fff
  .textarea
    margin-top 30px
    margin-bottom 200px
    display flex
    height 260px
    .item-left
      width 14%
      padding-top 20px
      img
        width 100%
      .item-left-avatar
        margin 0 auto
        width 55%
        background-color pink
        border-radius 10px
      .item-left-username
        margin 10px 0
        text-align center
        font-size 16px
        font-weight 650
      .item-left-op
        text-align center
        span
          color #0077E5
          font-size 12px
          text-decoration underline
          cursor pointer
          &:first-child
            margin-right 20px
    .textarea-right
      overflow hidden
      margin-left 20px
      width 81%
      .submit
        float right
        margin-top 10px
        padding 0 30px
        border-radius 10px
        line-height 30px
        width 40px
        text-align center
        color #333
        background-color #a3d3ff
        cursor pointer
</style>
<style>
/*滚动条整体样式*/
.textarea-right ::-webkit-scrollbar{
  width: 10px;/*竖向滚动条的宽度*/
  height: 10px;/*横向滚动条的高度*/
}
.textarea-right ::-webkit-scrollbar-thumb{/*滚动条里面的小方块*/
  background: #666666;
  border-radius: 5px;
}
.textarea-right ::-webkit-scrollbar-track{/*滚动条轨道的样式*/
  background: #ccc;
  border-radius: 5px;
}
.textarea-right .ql-editor{
  height:140px;
}
.ql-editor{
  height: 140px;
}
</style>