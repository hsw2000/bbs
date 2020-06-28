<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <img class="logo-outer" src="/icons/planet_outer.svg">
        <img class="logo-inner" src="/icons/planet_inner.svg">
      </div>
      <div class="title">
        <span class="title-top">清水神技论坛</span>
        <span class="title-bottom">电子科技大学科技论坛</span>
      </div>
      <div class="desc">
        技术宅拯救世界GEEK SAVE THE WORLD
      </div>
      <div class="info">
        <div class="info-left">
          <img src="/icons/default_avatar.svg" />
        </div>
        <div class="info-right">
          <div class="info-right-top">
            成电小清新
          </div>
          <div class="info-right-bottom">
            <div v-if="isLoggedIn">
              <router-link :to="{path:'/personal-center?entry=newestMsg'}">
                新消息
                <div class="xiaohongdian">1</div>
              </router-link>
              <router-link :to="{path:'/personal-center'}">个人中心</router-link>
              <a href="" @click="handleLogout">登出</a>
            </div>
            <div v-else>
              <a href="/projects/bbs/login.html">
                登录
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="login-title">
      <div class="logo">
        <img class="logo-outer" src="/icons/planet_outer.svg">
        <img class="logo-inner" src="/icons/planet_inner.svg">
      </div>
      <div>
        用户注册
      </div>
    </div>
    <transition-group>
      <el-form ref="form" :model="form" label-width="80px" v-if="type='login'" class="login-component">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px" v-if="type='register'" class="register-component">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      type: 'login'
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }

}
</script>

<style lang="stylus" scoped>
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
  margin-top 30px
.login-component
  margin-top 30px
.register-component
  margin-top 30px
</style>