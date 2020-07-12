<template>
  <div class="msgbox">
    <div class="msgbox-left">
      <div class="msgbox-left-title">最近私信</div>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="msgbox-left-imgwrapper">
            <img :src="item.imgurl" alt="">
            <xiaohongdian :width="25" :fontsize="12"></xiaohongdian>
          </div>
          <div class="msgbox-left-username" >{{item.username}}</div>
        </li>
      </ul>
    </div>
    <div class="msgbox-right">
      <div id = "msgtop">
        <p style="position: relative; top:30%;left:20px;font-size:20px;color:#999;">username</p>
        <a href="举报页面" style="position: relative;left: 93%;color:rgba(0, 180, 255, 100)">举报</a>
      </div>
      <ul id = "msgmid">
          <li 
            v-for="(item, index) in msglist" 
            :class="item.direction"
            :key="index"
          >
            <div class="li-inner">
              <div class="li-inner-msg">
                <p>很多出色的海报或者平面设计通过手绘涂鸦的独特展现，与一些精致的图片和背景形成对比很多出色的海报或者平面设计通过手绘涂鸦的独特展现，与一些精致的图片和背景形成对比</p>
                <div>56分钟前</div>
              </div>
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
import xiaohongdian from '../xiaohongdian/Xiaohongdian.vue'
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
      msglist: [],
      content: ''
    }
  },
  components: {
    xiaohongdian
  },
  methods: {
    formatDate(str) {
      return this.utils.formatDate(str)
    },
    handleSubmit() {
      this.lists.push({
        direction: 'msgmid-right',
        content: this.content,
        time: Date.now()
      })
      this.content = ''
    }
  },
  mounted(){
    // 聊天定位到底部
    let ele = document.getElementById('msgmid');
    ele.scrollTop = ele.scrollHeight;
  },
  created() {
    var that = this
    axios.get('/front/user/msglist')
    .then(function(res){
      console.log(res.data.data.msglist)
      that.list = res.data.data.msglist
      axios.post('    /front/user/getmsg', {
        username: that.list[0].username
      }).then(function(res){
        console.log(res.data.data.message)

          that.list = res.data.data.message
          console.log()
      }).catch(function (error) {
          console.log(error);
      });

    }).catch(function (error) {
        console.log(error);
    });
    


  },
  updated(){
    // 聊天定位到底部
    let ele = document.getElementById('msgmid');
    ele.scrollTop = ele.scrollHeight;
  },
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
    border-bottom: 1px solid rgba(228, 228, 228, 1);
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
  .msgbox-left-imgwrapper {
    position: relative;
  }
  .msgbox-left li img {
    width: 55px;
    height: 55px;
    border-radius: 50%;

  }
  .msgbox-left-username {
    color: #999;
    font-size: 12px;
  }
  .msgbox-right {
  width: 78%;
  height: 2250px;
  }
  #msgtop{
    width: 100%;
    height: 3%;
    border: 1px solid #BDBDBD;
    border-bottom: none;
    background-color:rgba(242, 242, 242, 1);
  }
  #msgmid{
    width: 100%;
    height: 400px;
    padding-top: 10px;
    border: 1px solid #BDBDBD;
    border-top: none;
    overflow:scroll;
    scroll-behavior:smooth;
  }
  #msgmid::-webkit-scrollbar {
    width: 0 !important ;
    height: 0 !important;
  }
  #msgmid {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
  #msgmid li {
    width: 96%;
    margin: 0 auto;
    overflow: hidden;
  }
  #msgmid li div.li-inner {
    width: 47%;
  }
  .msgmid-left, .msgmid-left div.li-inner{
    display: flex;
    justify-content: left;
  }
  .msgmid-right, .msgmid-right div.li-inner {
    display: flex;
    justify-content: right;

  }
  #msgmid li img {
    display: block;
    position: relative;
    top: 17px;
    flex: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  #msgmid li div.li-inner-msg {
    flex: initial;
  }
  #msgmid li div.li-inner-msg div{
    margin: 0 17px;
    color: #999999;
  }
  .msgmid-right .li-inner-msg div {
    text-align: right;
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