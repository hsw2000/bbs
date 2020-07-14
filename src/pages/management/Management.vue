<template>
  <div class="management">
    <el-dialog title="管理员登录" :visible.sync="loginFormVisible">
      <el-form :model="loginForm">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleLogin">登 录</el-button>
      </div>
    </el-dialog>

    <el-table
      :data="tableData"
      border
      style="width: 60%;margin:0 auto;">
      <el-table-column
        prop="bid"
        label="BID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="description"
        label="板块描述"
        width="220">
      </el-table-column>
      <el-table-column
        prop="banzhu"
        label="版主"
        width="190">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleEditBankuai(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="text" @click="addFormVisible = true" style="margin-left:30%;">添加板块</el-button>
    <el-dialog title="添加板块" :visible.sync="addFormVisible" >
      <el-form :model="form">
        <el-form-item label="版块名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="板块描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddBankuai">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      addFormVisible: false,
      form: {
        name: '',
        desc: ''
      },
      loginForm: {
        username: '',
        password: ''
      },
      loginFormVisible: true,
      formLabelWidth: '80'
    }
  },
  methods: {
    handleLogin() {
      var that = this
      axios.post('/back/user/login', {
          "username": this.loginForm.username,
          "password": this.loginForm.password
        }).then(function(res) {
          console.log(res.data.code == 0);
          if(res.data.code == 0){
            that.$message.success("欢迎您，"+ that.loginForm.username)
            that.loginFormVisible = false
            that.requestBankuai()
          }else {
            that.$message.error("账号或密码错误！");
          }
        }).catch(function() {
          that.$message.error("请求发送异常");
        })
    },
    requestBankuai() {
      var that = this
      axios.post('/back/bankuai/info')
        .then(function(res) {
          console.log(res)
          that.tableData = res.data.data.bankuai
        })
    },
    handleAddBankuai() {
      var that = this
      axios.post('/back/bankuai/add', {
        "name": that.form.name,
	      "description": that.form.desc
      }).then(function(res) {
          console.log(res)
          that.requestBankuai()
      })
    },
    handleEditBankuai() {
      that.$message.error("暂未实现")
    }
  }
}
</script>

<style scoped lang="stylus">
.management
  width 70%
  margin 0 auto
</style>