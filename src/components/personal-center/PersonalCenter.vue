<template>
  <div class="personal-center">
    <div class="left">
      <div class="avatar">
        <img :src="avatarSrc" alt="">
      </div>
      <div class="myname">
        成电小萌新
      </div>
      <div class="info-top">
        <div>
          <span class="info-top-top">关注</span>
          <span class="info-top-bottom">333</span>
        </div>
        <div>
          <span class="info-top-top">帖子</span>
          <span class="info-top-bottom">333</span>
        </div>
        <div>
          <span class="info-top-top">粉丝</span>
          <span class="info-top-bottom">333</span>
        </div>
      </div>
      <div class="info-lin"></div>
      <ul class="info-bottom"> 
        <li>邮箱：1229112736@qq.com</li>
        <li>生日：2020年6月18日</li>
        <li>星座：射手座</li>
        <li>爱好：写代码</li>
      </ul>
      <a class="modify" @click="handleModifyInfo">修改个人信息</a>
    </div>
    <div class="right">
      <div class="functions" v-show="showFunctions">
          <ul class="tabs">
          <li :class="{'chosen-tab': chosen == 'newestMsg'}" @click="handleTabsClick('newestMsg')">最新消息</li>
          <li :class="{'chosen-tab': chosen == 'myPosts'}"  @click="handleTabsClick('myPosts')">我的帖子</li>
          <li :class="{'chosen-tab': chosen == 'msgBox'}"  @click="handleTabsClick('msgBox')">私信信箱</li>
          <li :class="{'chosen-tab': chosen == 'blacklist'}"  @click="handleTabsClick('blacklist')">黑名单</li>
          <li :class="{'chosen-tab': chosen == 'followlist'}"  @click="handleTabsClick('followlist')">关注列表</li>
          <li :class="{'chosen-tab': chosen == 'fanslist'}"  @click="handleTabsClick('fanslist')">粉丝列表</li>
        </ul>
        <transition-group :name="viewAnimate">
          <div class="newest-msg" v-if="chosen == 'newestMsg'" key=1>
            <div class="newest-msg-title">最新回复</div>
            <ul>
              <li>
                <div class="newest-msg-avatar">
                  <img src="icons/avatar.svg" alt="">
                </div>
                <div class="newest-msg-main">
                  <span class="newest-msg-username">成电老司机
                    <span class="newest-msg-zan">赞了你的回复</span>
                  </span>
                  <span class="newest-msg-content"><span>同学你这个代码有问题呀，你看第XXXX行的XXX不应该是XXXXXX，应该是XXXXXXX，你改一下看看对不对</span></span>
                </div>
                <div class="newest-msg-time">
                  2020.5.21 16:30
                </div>
              </li>
            </ul>
            <div class="see-more">查看更多</div>
          </div>
          <div class="my-posts" v-if="chosen == 'myPosts'" key=2>
            <transition name="fade" mode="in-out">
              <list 
                :outline="outline" 
                :num="num"
                :list="lists"
                v-if="showFirstList" 
                key=1
              ></list>
            </transition>
            <el-pagination 
              @current-change="handleCurrentChange" 
              class="pagination"
              background
              layout="prev, pager, next, jumper"
              :total="50"  
            ></el-pagination>
          </div>
          <msgbox class="msgbox" v-if="chosen == 'msgBox'" key=3>

          </msgbox>
          <userslist 
            title="拉黑列表" 
            class="blacklist"  
            v-if="chosen == 'blacklist'" 
            key=4
          >
          </userslist>
          <userslist 
            title="关注列表" 
            class="followlist"  
            v-if="chosen == 'followlist'" 
            key=5
          >
          </userslist>
          <userslist 
            title="粉丝列表" 
            class="fanslist"  
            v-if="chosen == 'fanslist'" 
            key=6
          >
          </userslist>
        </transition-group>
      </div>
      <div class="modify-info" v-show="!showFunctions">
        <p class="modify-title">账户资料</p>
        <el-form :label-position="top" class="form-top">
          <el-form-item  label="绑定信息门户账号（不可更改）">
            <el-input v-model="form.portal" :disabled="true"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="80px" class="form-bottom">
          <el-row>
            <el-col :span="18">
              <el-form-item label="用户昵称">
                <el-input v-model="form.bbsname"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-form-item label="邮箱地址">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否公开">
                <el-switch v-model="form.openEmail"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-form-item label="生日">
                <el-date-picker
                  v-model="form.birthday"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否公开">
                <el-switch v-model="form.openBirthday"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-form-item label="爱好">
                <el-input v-model="form.hobby"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否公开">
                <el-switch v-model="form.openHobby"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="上传头像">
            <el-upload
              class="upload-avatar"
              action="zs2.lwydev.xyz/front/user/uploadimg"
              :on-success="handleUploadSuccess"
              :before-upload="beforeUpload"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList"
              list-type="picture"
              :with-credentials="true"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import List from '../list/List.vue'
import Msgbox from '../msgbox/Msgbox.vue'
import Userslist from '../userslist/UsersList.vue'
import axios from 'axios'

export default {
  data() {
    return {
      chosen: 'newestMsg',
      tabIndex: 0,
      viewAnimate: '',
      outline: '使用vue的transition完成滑动过渡 阅读数 5959 使用vue来做一些小巧的动画效果是非常方便的,今天本人想使用vue的transition来完成一个滑动过渡效果,.',
      num: 10,
      showFirstList: true,
      currentPage: 1,
      showFunctions: false,
      form: {
        portal: 2018091609009,
        bbsname: 'hushenwei',
        openBbsname: true,
        email: '',
        openEmail: true,
        birthday: '',
        openBirthday: true,
        hobby: '',
        openHobby: true
      },
      fileList: [],
      modifyParams: '',
      avatarSrc: ''
    }
  },
  components: {
    List,
    Msgbox,
    Userslist
  },
  methods: {
    handleTabsClick(tabName) {
      const lastIdx = this.tabIndex
      switch(tabName) {
        case 'newestMsg': {
          this.tabIndex = 0;
          break;
        }
        case 'myPosts': {
          this.tabIndex = 1;
          break;
        }
        case 'msgBox': {
          this.tabIndex = 2;
          break;
        }
        case 'blacklist': {
          this.tabIndex = 3;
          break;
        }
        case 'followlist': {
          this.tabIndex = 4;
          break;
        }
        case 'fanslist': {
          this.tabIndex = 5
        }
      }
      if(this.tabIndex > lastIdx) {
        this.viewAnimate = 'slide-left'
        console.log('forward')
      }else {
        this.viewAnimate = 'slide-right'
        console.log('backward')

      }
      this.chosen = tabName
    },
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
    handleModifyInfo() {
      this.showFunctions = false
    },
    handleExceed(files, fileList) {
      this.$message.warning(`头像只能上传 1 个！`);
    },
    beforeRemove(file, fileList) {
      return false;
    },
    handleUploadSuccess(res, file, filelist) {
      console.log(res)
    },
    onSubmit() {
      //下面append的东西就会到form表单数据的fields中；
      // this.param.append('message', names);
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      // console.log(this.modifyParams.get('image'))
      console.log(this.form.birthday)
      axios.post("/front/user/uploadimg", this.modifyParams, config)
      .then(function(result) {
        console.log(result);
      }).catch(function(err) {
        console.log(err)
      })
    },
    beforeUpload(file) {
      //创建临时的路径来展示图片
      // var windowURL = window.URL || window.webkitURL;
      // this.avatarSrc=windowURL.createObjectURL(file);
      // console.log(this.avatarSrc)
      //重新写一个表单上传的方法
      this.modifyParams = new FormData();
      this.modifyParams.append('image', file);
      return false;
    },
  },
  mounted() {
    if(this.$route.query.entry) {
      this.chosen = this.$route.query.entry
      }
  },
  created() {
    var that = this
    // axios.post('/front/tiezi/my', {
	    
    // }).then(function(res){
    //     that.lists = res.data.data.tiezi
    // }).catch(function (error) {
    //     console.log(error);
    // });
    console.log("getMyinfo")
    axios.post('/front/user/getinfo', {
	    username: this.$store.state.username
    }).then(function(res){
        console.log(res)
    }).catch(function (error) {
        console.log(error);
    });

  },
  watch: {
    '$route'(to, from) {
      if(to.query.entry) {
        if(to.query.entry != 'myInfo') {
          this.showFunctions = true
          this.handleTabsClick(to.query.entry)
        }else
          this.showFunctions = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.personal-center
  display flex
  height 876px
  .left 
    width 25%
    border 1px solid rgba(221, 221, 221, 1)
    border-radius 10px
    background-color #fff
    .avatar
      margin 50px auto 0 auto
      width 150px
      height 150px
      border-radius 10px
      img
        width 100%
        height 100%
    .myname
      text-align center
      line-height 100px
      font-weight 700
      font-size 28px
    .info-top
      display flex
      justify-content space-around
      span
        display block
        font-size 13px
        color #666
        line-height 24px
    .info-line
      margin 20px auto 30px auto
      width 96%
      height 2px
      background-color #333
      opacity 0.2
    .info-bottom
      margin-top 30px
      margin-left 15px
      li
        font-size 18px
        line-height 40px
        color #00386C
    a.modify
      margin-top 50px
      display block
      text-align center
      cursor pointer
  .right
    position relative
    width 75%
    background-color #fff
    overflow hidden
<<<<<<< Updated upstream
    .tabs
      li
        display inline-block
        padding 0 20px
        font-size 14px
        line-height 40px
        cursor pointer
      .chosen-tab
        border-bottom 1px solid #108EE9
        color #108EE9
    .newest-msg
      margin-left 15px
      .newest-msg-title
        margin-top 15px
        font-size 14px
        font-weight 700
        line-height 35px
        color #333
      ul
        li 
          margin 0 15px
          padding 15px 0
          display flex
          border-bottom 1px solid rgba(33,33,33,0.3)
          .newest-msg-avatar
            width 40px
            height 40px
            border-radius 10px
            img 
=======
    .functions 
      position relative
      .tabs
        li
          display inline-block
          padding 0 20px
          font-size 14px
          line-height 40px
          cursor pointer
        .chosen-tab
          border-bottom 1px solid #108EE9
          color #108EE9
      .newest-msg
        margin-left 15px
        width 95%
        .newest-msg-title
          margin-top 15px
          font-size 14px
          font-weight 700
          line-height 35px
          color #333
        ul
          li 
            margin 0 15px
            padding 15px 0
            display flex
            border-bottom 1px solid rgba(33,33,33,0.3)
            .newest-msg-avatar
>>>>>>> Stashed changes
              width 40px
              height 40px
              border-radius 10px
              img 
                width 40px
                height 40px
            .newest-msg-main
              margin-left 10px
              flex 1
              .newest-msg-username
                display block
                font-size 12px
                line-height 16px
<<<<<<< Updated upstream
                font-weight 400
            .newest-msg-content
              display block
              -webkit-line-clamp 1
          .newest-msg-time
            line-height 20px
      .see-more
        text-align center
        font-size 14px
        color #BEBDBD
        line-height 50px
    .my-posts
      margin-left 15px
    .blacklist
      margin-left 15px
    .newest-msg, .my-posts, .msgbox, .blacklist, .followlist, .fanslist
      position absolute
      left 0
      top 40px
.slide-enter-active, .slide-leave-avtive 
  transition all .5s
.slide-enter 
  transform translateX(100%)
.slide-leave-to
  transform translateX(-100%)
=======
                font-weight 700
                .newest-msg-zan
                  margin-left 10px
                  line-height 16px
                  font-weight 400
              .newest-msg-content
                display block
                -webkit-line-clamp 1
            .newest-msg-time
              line-height 20px
        .see-more
          text-align center
          font-size 14px
          color #BEBDBD
          line-height 50px
 
         margin-left 15px
        width 95%
      .msgbox
        margin-top 5px
      .blacklist
        margin-left 15px
      .newest-msg, .my-posts, .msgbox, .blacklist, .followlist, .fanslist
        position absolute
        left 0
        top 40px
    .modify-info
      margin-left 40px
      .modify-title
        font-weight 400
        font-size 18px  
        line-height 100px
      .form-top
        margin-left 100px
        width 306px
      .form-bottom 
        margin-left 100px
        width 650px
.fade-enter-active, .fade-leave-avtive 
    transition opacity .8s
.fade-enter, .fade-leave-to 
      opacity: 0
>>>>>>> Stashed changes
</style>
<style scoped>
.slide-right-leave-active, .slide-right-enter-active, .slide-left-leave-active, .slide-left-enter-active {
  transition: all 0.5s linear;
}
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

</style>

