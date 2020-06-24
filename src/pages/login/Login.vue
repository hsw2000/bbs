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
                  <label id="login" for="savePassword" style="margin:auto;font-size:15px">点我记住密码：</label>
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
    }
  },
  components: {
    Register
  },
  methods: {
    hadleToggleToRegister() {
      this.type = 'register'
    },
    submitLogin() {
      localStorage.username = 'testUser';
      window.location = '/';
    }
  }

}
</script>

<style scoped src="./css/page.css"></style>
<style scoped src="./css/login2.css"></style>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-avtive 
  transition opacity .5s
.fade-enter, .fade-leave-to 
  opacity: 0
</style>