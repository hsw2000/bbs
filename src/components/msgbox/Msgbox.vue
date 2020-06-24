<template>
  <div class="msgbox">
    <div class="msgbox-left">
      <div class="msgbox-left-title">最近私信</div>
      <ul>
        <li>
          <img src="icons/avatar.svg" alt="">
          <div class="msgbox-left-username">USERNAME</div>
        </li>
        <li>
          <img src="icons/avatar.svg" alt="">
          <div class="msgbox-left-username" >USERNAME</div>
        </li>
      </ul>
    </div>
    <div class="msgbox-right">
      <div id = "msgtop">
        <p style="position: relative; top:30%;left:20px;font-size:20px;color:#999;">username</p>
        <a href="举报页面" style="position: relative;left: 93%;color:rgba(0, 180, 255, 100)">举报</a>
      </div>
      <ul id = "msgmid">
          <li class="msgmid-left">
            <div>
            <img src="icons/avatar.svg" alt="">
            <p>很多出色的海报或者平面设计通过手绘涂鸦的独特展现，与一些精致的图片和背景形成对比很多出色的海报或者平面设计通过手绘涂鸦的独特展现，与一些精致的图片和背景形成对比</p>
            </div>
          </li>
          <li class="msgmid-right">
            <div>
            <p >很多出色的海报或者平面设计通过手绘涂鸦的独特展现，与一些精致的图片和背景形成对比
              </p>
            <img src="icons/avatar.svg" alt="">
            </div>
          </li>

      </ul>
      <div id = "msgbottom">
        <form>
          <textarea id = 'message' name = 'message' rows = '10' cols = '60' placeholder="请输入私信内容"></textarea>
          <input id = 'submit' name = 'submit' type='submit' value = '发送'>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.msgbox {
  display: flex;
  margin:0;
  position:relative;
  margin-left: auto;
  margin-right: auto;
}
  .msgbox-left {
    width: 12%;
    border-bottom: 1px solid #BDBDBD;
  }
  .msgbox-left-title {
    margin-bottom: 10px;
    line-height: 40px;
    text-align: center;
    font-size: 13px;
    color: #0F78B8;
  }
  .msgbox-left li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .msgbox-left li img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  .msgbox-left li div {
    color: #999;
    font-size: 12px;
  }
  .msgbox-right {
  width: 78%;
  height:2250px;
  border-left: 1px solid #BDBDBD;
  }
  #msgtop{
    width: 100%;
    height: 3%;
    background-color:rgba(242, 242, 242, 1);
  }
  #msgmid{
    width: 100%;
    height: 400px;
    margin-top: 10px;
    border-bottom: 1px solid #BDBDBD;
    overflow:scroll;
  }
  #msgmid li {
    width: 96%;
    margin: 0 auto;
    overflow: hidden;
  }
  #msgmid li div {
    width: 47%;
  }
  .msgmid-left, .msgmid-left div{
    display: flex;
    justify-content: left;
  }
  .msgmid-right, .msgmid-right div {
    display: flex;
    justify-content: right;

  }
  #msgmid li img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  #msgmid li p {
    font-family: 'Microsoft Yahei';
  font-weight: 400;
  font-style: normal;
  color: #999999;
  text-align: left;
  line-height: 24px;
  background-color: rgba(249, 249, 249, 1);
  padding: 13px 17px;
  }
  .msgmid-left p {
    margin-left: 10px;
  }
  .msgbox-right p {
    margin-right: 10px;
  }
  #msgbottom{
    width: 100%;
    height: 200px;
    border: 1px solid #BDBDBD;
  }
  #message{
    height: 180px;
    width :90%;
    border: 0px;
  }
  #submit{
    position: relative;
    top:90%;
    width:50px;
    height:20px;
    background-color:rgba(45, 128, 206, 1);
    border:none;
    font-family: "Microsoft Yahei";
    font-style:normal;
    font-size:10px;
    color:#FFFFFF;
  }
  #msgmid-left{
    float: left;
  }
  #msgmid-right{
    float: right;
    position: relative;
  }
  #text{
    background: rgba(196, 196, 196, 100);
  }
</style>