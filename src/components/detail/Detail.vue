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
        <img src="../../../public/icons/dianzan_off.svg">
        <span>4</span>
      </div>
    </div>
    <ul class="detail-list">
      <li class="item" v-for="i in arr" :key="i">
        <div class="item-left">
          <div class="item-left-avatar">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="item-left-username">{{item.author}}</div>
          <div class="item-left-op">
            <span>关注</span>
            <span>私信</span>
          </div>
        </div>
        <div class="item-right">
          <div class="item-right-floor">
            <span>2019-10-19 15:07:10&nbsp;&nbsp; </span>
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
              <img src="../../../public/icons/dianzan_off.svg" alt="">
              <span>点赞</span>
            </div>
            <div class="item-jubao">
              <img src="../../../public/icons/flag.svg" alt="">
              <span>举报</span>
            </div>
          </div>
        </div>
      </li>
      
    </ul>
    <div class="textarea item" v-show="!showLoading">
      <div class="item-left">
        <div class="item-left-avatar">
          <img src="icons/default_avatar.svg" alt="">
        </div>
        <div class="item-left-username">USERNAME</div>
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
export default {
  props: {
    num: {
      type: Number,
      default: 10,
    }
  },
  data() {
    return {
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
      total: 0
    }
  },
  computed: {
    arr() {
      let arr = [];
      for(let i = 0; i < this.num; i++) {
        arr[i] = i
      }
      return arr
    }
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      this.content = html
    },
    formatDate(num) {
      return this.utils.formatDate(num)
    },
    handleDianzanClick(index) {
      this.$set(this.dianzanSrc, index, this.dianzanSrc[index] == 'icons/dianzan_on.svg' ? 'icons/dianzan_off.svg' : 'icons/dianzan_on.svg')
    },
    handleSubmit() {
      axios.post('/front/tiezi/view', {
        "tid": "",
        "content":this.content
      }).then(function(res){
          that.title = res.data.data.title
          that.total = res.data.data.total
          that.lists = res.data.data.reply
          // that.lists.map((item) => {
          //   item.dianzanPath = 'icons/dianzan_off.svg'
          // })
          that.showLoading = false

      }).catch(function (error) {
          console.log(error);
      });
      // 更新视图
      this.lists.push({
        username: '您的用户名',
        content: this.content,
        time: String(Date.now())
      })
      this.content = ''
    }
  },
  created() {
    var that = this
    axios.post('/front/tiezi/view', {
      "tid": this.$route.query.tid,
      "page": 0
    }).then(function(res){
      console.log(res)
        that.title = res.data.data.title
        that.total = res.data.data.total
        that.lists = res.data.data.reply
        // that.lists.map((item) => {
        //   item.dianzanPath = 'icons/dianzan_off.svg'
        // })
        that.showLoading = false

    }).catch(function (error) {
        console.log(error);
    });

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