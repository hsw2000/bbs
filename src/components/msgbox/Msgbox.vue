<template>
  <div class="msgbox"  v-show="chosen == 'msgBox'">
    <div class="msgbox-left">
      <div class="msgbox-left-title">最近列表</div>
      <ul>
        <li>
          <img src="icons/avatar.svg" alt="">
          <div class="msgbox-left-username">USERNAME</div>
        </li>
        <li>
          <img src="icons/avatar.svg" alt="">
          <div class="msgbox-left-username">USERNAME</div>
        </li>
      </ul>
    </div>
    <div class="msgbox-right">


    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.msgbox {
  margin-left: 15px;
}
.msgbox-left {
  width: 12%;
}
.msg-left-title {
  font-weight: 700;
  line-height: 40px;
  text-align: center;
}
.msgbox-left ul li {
  
}

.msgbox-right {
  width: 78%;
}
</style>