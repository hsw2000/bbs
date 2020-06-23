<template>
  <div class="login-component">
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
    <p>注册界面</p>
  </div>
  <div id="textYHD" >
    <p><span>注册新用户</span></p>
  </div>
  <img id="Circle2"  src="images/planet1.svg"/>
    <img id="imgOther2"  src="images/planet2.svg"/>
  <!--注册界面主窗口-->
  <div id="boder1" ></div>
  <div id="boder2"></div>
  <div id="boder3" ></div>
  <div id="boder4"></div>
  <div id="boder5" ></div>
  <div id="boder6"></div>
  <div id="boder7"></div>
    <form method="GET"> 
      <input id ="xxmhNumber" name = "xxmhNumber" type = "text" placeholder="请输入信息门户账号" maxlength="20">
      <input id="xxmhPassword" type="password" name = "xxmhPassword" placeholder="请输入信息门户密码" maxlength="30"/>
      <input id="username" type="text" name = "username" placeholder="请输入用户名" maxlength="30"/>
      <input id="Email" type="email" name = "email" placeholder="请输入电子邮箱" maxlength="30"/>
      <input id="phone" type="tel" name = "phone" placeholder="请输入电话号码" pattern="[0-9]{11}"/>
      <input id="password" type="password" name = "password" placeholder="请输入密码" maxlength="30"/>
      <input id="cfpassword" type="password" name ="cfpassword" placeholder="请确认密码" maxlength="30"/>
      <label id="login" for="agree" style="margin:auto;font-size:15px"><a href="2_2首页（关注动态）.html">同意《用户注册协议》</a></label>
      <input type="checkbox" name="agree" id="agree" checked="checked">
        <input id= "submit" type="submit" value="注册"/>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped src="./css/page.css"></style>

<style scoped src="./css/login2.css"></style>
<style scoped src="./css/register.css"></style>
