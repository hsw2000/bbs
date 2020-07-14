<template>
  <div class="login">
    <div class="close" @click="closeLogin">
      <img src="/icons/guanbi.png" alt="">
    </div>
    <div class="login-title">
      <div class="logo">
        <img class="logo-outer" src="/icons/planet_outer.svg">
        <img class="logo-inner" src="/icons/planet_inner.svg">
      </div>
      <div class="login-title-text">
        用户{{type}}
      </div>
    </div>
    <transition-group name="fade">
      <div 
        v-if="type=='登录'" 
        class="login-component component" 
        key=1
      >
        <el-form 
          label-width="80px" 
        >
          <el-input v-model="form.bbsName" placeholder="请输入用户名"></el-input>
          <el-input v-model="form.bbsPassword" type="password" placeholder="请输入密码"></el-input>
          <div class="login-error" v-show="showLoginError">账号或密码错误！</div>
          <button class="submit" @click="submit">登录</button>
          <div class="toggle" @click="toggleType('注册')">没有帐号？点我注册</div>
        </el-form>
      </div>
      <div 
        v-else 
        class="register-component component" 
        key=2
      >
        <el-form 
          label-width="80px" 
        >
          <el-input v-model="form.portalAccount" placeholder="请输入信息门户账号"></el-input>
          <el-input v-model="form.portalPassword" type="password" placeholder="请输入信息门户密码"></el-input>
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          <el-input v-model="form.bbsName" placeholder="请输入用户名"></el-input>
          <el-input v-model="form.bbsPassword" type="password" placeholder="请输入密码"></el-input>
          <el-input v-model="form.confirmPassword" type="password" placeholder="请输入密码"></el-input>
          <div class="login-error" v-show="showRegisterError">{{registerErrorMsg}}</div>

          <div class="checkbox">
            <el-checkbox v-model="agree"></el-checkbox>
            <span>同意<a href="www.baidu.com" target="_blank">《用户注册协议》</a></span>
          </div>
          
          <div class="toggle" @click="toggleType('登录')">已有帐号？点我登录</div>
          <button :class="['submit', {'disabled': !agree}]" @click="submit">注册</button>
        </el-form>
      </div>
    </transition-group>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        bbsName: '',
        bbsPassword: '',
        portalAccount: '',
        portalPassword: '',
        email: '',
        phone: '',
        confirmPassword: ''
      },
      type: '登录',
      agree: false,
      showLoginError: false,
      showRegisterError: false,
      registerErrorMsg: ''
    }
  },
  methods: {
    submit(e) {
      var that = this
      e.preventDefault(); //取消button默认事件
      if(this.type == '登录') {
        axios.post('/front/user/login', {
          "username": this.form.bbsName,
          "password": this.form.bbsPassword
        }).then(function(res) {
          const resobj = res.data.data
          if(res.data.code == 0){
            that.$message.success("欢迎您，"+that.form.bbsName)
            that.$emit('loginsuccess', that.form.bbsName, resobj.imgurl)
            that.$store.commit('login', {
              name: that.form.bbsName, 
              src: resobj.imgurl
            })
          }else {
            console.log("error")
            // that.$message.error("账号或密码错误！");
            this.showLoginError = true
          }
        }).catch(function() {
          that.$message.error("请求发送异常");
        })
      }else {
        if(!this.agree) {
          this.registerErrorMsg = '请勾选同意用户注册协议'
          this.showRegisterError = true
          return;
        }
        console.log(this.form)
        if(!this.form.bbsPassword || !this.form.bbsName || !this.form.email || !this.form.phone || !this.form.portalAccount || !this.form.portalPassword) {
          this.showRegisterError = true
          this.registerErrorMsg = '请完整填写注册信息'
          return false;
        }
        axios.post('/front/user/register', {
          "username": this.form.bbsName,
          "password": this.form.bbsPassword,
          "email": this.form.email,
          "phonenum": this.form.phone
        }).then(function(res) {
          that.$message.success("账号注册成功！");
          that.type="登录"
        })
      }
      // window.location.href = '/'
    },
    toggleType(param) {
      this.type = param
    },
    closeLogin() {
      this.$emit('closelogin')
    }
  },
  watch: {
    agree() {
      if(this.agree == true) {
        this.showRegisterError = false
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
.close
  position absolute
  right 73px
  top 0px
  width 24px
  height 24px
  cursor pointer
  img
    width 100%
.login-title
  margin 30px auto 10px auto
  width 220px
  display flex
  .logo 
    position relative
    width 60px 
    height 60px
    .logo-outer
      position absolute
      left 0
      top 5px
      width 50px
      height 50px
    .logo-inner 
      position absolute
      left 0
      top 15px
      left 5px
      width 40px
      height 40px
  .login-title-text
    font-size 28px
    line-height 80px
    color #2D80CE
.pathname
  width 100%
  padding 0 10%
  height 40px
  line-height 40px
  font-size 14px
  .gang
    margin 0 10px
.component
  margin 10px auto 0 auto
  width 300px
  .login-error
    width 100%
    background-color pink
    background-color rgba(255, 245, 230, 1)
    box-sizing border-box
    border-width 1px
    border-style solid
    border-color rgba(255, 235, 204, 1)
    border-radius 5px
    font-size 16px
    line-height 45px
    color #FF9900
    text-align center
  .checkbox
    margin-top 10px
    span 
      margin-left 10px
  .submit
    margin-top 30px
    width 300px
    height 50px
    line-height 50px
    font-size 14px
    font-weight 700
    text-align center
    border-radius 25px
    color #fff
    background-color #2D80CE
  .disabled
    background-color lightgrey
  .toggle
    margin-top 10px
    cursor pointer
.fade-enter-active, .fade-leave-avtive 
  transition opacity .3s
.fade-enter, .fade-leave-to 
  opacity: 0
</style>
<style>
  .component .el-input {
    margin: 10px 0;
  }
</style>