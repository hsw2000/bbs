<template>
<div>
  <transition-group name='fade'>
  
  
  <div key='login' class="login" v-show="type == 'login'">
         <!--绘制上方蓝色底色-->>
              <div id="blueBackGround" ></div>
            <!--设定上方字体样式-->>
              <div id="textJSZ">
                <p>技术宅拯救世界GEEK SAVE THE WORLD</p>
              </div>
                <div id="textSJL">
                  <p>清水神技论坛</p>
                </div>
              
                <div id="textDZK">
                  <p>电子科技大学科技论坛</p>
                </div>
      
              <!--左上角图片--> 
                <img id="Circle"  src="images/planet1.svg"/>
                <img id="imgOther"  src="images/planet2.svg"/>
            <!--右上角文字设计-->
           
              <div id="textYK">
                <p>游客</p>
              </div>
              <div id="textDL" >
                <a href = "1_2登录.html">登录</a>
              </div>
              <div id="textZC">
                <a  href="1_1注册.html">注册</a>
              </div>
            <!--右上角图片-->
              <img id="pepleIMG" src="images/1_1注册/u58.svg"/>
        <!--左上角文字 -->
          <div id="textHead" >
            <a href = "2_2首页（关注动态）.html">首页</a>
          </div>
<<<<<<< Updated upstream
       
          <div id="text113">
            <p><span>/</span></p>
          </div>
          <div id="textDLJ" >
            <p>登录界面</p>
          </div>

         

              <!--输入密码部分-->
              
              <div id="boder1" ></div>
              <div id="boder2"></div>
                <form method="GET"> 
                  <input id ="password" name = "password" type = "password" placeholder="请输入密码" maxlength="20">
                  <input id="username" type="text" name = username placeholder="请输入用户名" maxlength="30"/>
                  <label id="login" for="savePassword" style="font-size:15px">点我记住密码：</label>
                  <input type="checkbox" name="savePassword" id="savePassword" checked="checked" onclick="SavePassword()">
                   <input id= "submit" @click="submitLogin" value="登陆"/>
                </form>

              <div id="textYHD" >
                <p><span>用户登录</span></p>
              </div>
              <img id="Circle2"  src="images/planet1.svg"/>
                <img id="imgOther2"  src="images/planet2.svg"/>
          <div @click="hadleToggleToRegister" id = "textjzw">
            <a >没有账号点我注册</a>
          </div>
          </div>
          <register key='regis' v-show="type == 'register'"></register>
         </transition-group>
          </div>
        
</template>

<script>
import Register from './Register.vue'
export default {
  data() {
    return {
      type: 'login'
=======
          <div class="info-right-bottom">
            <a href="/projects/bbs/login.html">
              登录
            </a>
            <a href="/projects/bbs/login.html">
              注册
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="pathname">
      <a href="/projects/bbs/">
      首页
      </a>
      <span class="gang">/</span>
      <span>
      身份验证
      </span>
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
          <el-input v-model="form.bbsPassword" placeholder="请输入密码"></el-input>
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
          <el-input v-model="form.portalPassword" placeholder="请输入信息门户密码"></el-input>
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          <el-input v-model="form.bbsName" placeholder="请输入用户名"></el-input>
          <el-input v-model="form.bbsPassword" placeholder="请输入密码"></el-input>
          <el-input v-model="form.confirmPassword" placeholder="请输入密码"></el-input>
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
      agree: false
>>>>>>> Stashed changes
    }
  },
  components: {
    Register
  },
  methods: {
<<<<<<< Updated upstream
    hadleToggleToRegister() {
      this.type = 'register'
    },
    submitLogin() {
      localStorage.username = 'testUser';
      window.location = '/';
=======
    submit(e) {
      e.preventDefault(); //取消button默认事件
      if(this.type == '登录') {
        axios.post('/front/user/login', {
          "username": this.form.bbsName,
          "password": this.form.bbsPassword
        }).then(function(res) {
          console.log(res);
          this.$emit('loginSuccess', this.form.bbsName)
          this.$store.commit('login', this.form.bbsName)
        })
      }else {
        axios.post('/front/user/register', {
          "username": this.form.bbsName,
          "password": this.form.bbsPassword,
          "email": this.form.email,
          "phonenum": this.form.phone
        }).then(function(res) {
          console.log(res);
        })
      }
      // window.location.href = '/'
    },
    toggleType(param) {
      this.type = param
>>>>>>> Stashed changes
    }
  }

}
</script>

<style scoped src="./css/page.css"></style>
<style scoped src="./css/login2.css"></style>
<style lang="stylus" scoped>
<<<<<<< Updated upstream
.fade-enter-active, .fade-leave-avtive 
  transition opacity .5s
.fade-enter, .fade-leave-to 
  opacity: 0
=======
.header 
  overflow hidden
  width 100%
  height 80px
  padding 0 10%
  box-sizing border-box
  background-color rgba(163, 211, 255, 1)
  .logo 
    float left
    position relative
    width 80px 
    height 80px
    .logo-outer
      position absolute
      left 0
      top 5px
      width 70px
      height 70px
    .logo-inner 
      position absolute
      left 0
      top 15px
      left 5px
      width 60px
      height 60px
  .title
    float left
    margin-left 12px
    .title-top
      display block
      font-size 45px
    .title-bottom
      display block
      margin-top -6px
      font-size 18px
      text-align center
  .desc
    float left
    margin-left 10%
    font-size 20px
    line-height 80px
  .info
    float right
    display flex
    height 80px
    align-items center
    .info-left 
      width 50px
      height 50px
      border-radius 50%
      img 
        width 50px
        height 50px
        line-height 80px
    .info-right
      margin-left 20px
      font-size 16px
      .info-right-top
        font-weight bold
      .info-right-bottom
        margin-top 10px
        color #000
        a
          position relative
          display inline-block
          margin-right 8px
          .xiaohongdian
            position absolute
            right -7.5px
            top -7.5px
            width 15px
            height 15px
            border-radius 50%
            text-align center
            line-height 15px
            font-size 9px
            color #fff
            background-color rgba(255, 89, 24, 1)
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
  .checkbox
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
>>>>>>> Stashed changes
</style>