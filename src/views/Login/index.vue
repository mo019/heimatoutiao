<template>
  <div class="login">

    <!-- elementUI的标签 -->
    <el-card class="box-card">
      <div class='title' style="margin-bottom:20px;">
        <img src="../../assets/img/logo_index.png" alt="黑马头条" />
      </div>
      <!-- 表单 model收集表单数据 rules表单验证规则-->
      <el-form class="mainForm" ref='myForm' :model='loginFrom' :rules='rules' >
        <!-- prop校验的字段名,也就说你校验的信息是什么 -->
        <el-form-item prop='mobile'>
          <el-input v-model="loginFrom.mobile" placeholder="请输入手机号"></el-input>
          </el-form-item>

           <el-form-item style="margin-bottom:10px;" prop='code'>
          <el-input v-model="loginFrom.code" style="width:60%;" class="proving" placeholder="请输入验证码"></el-input>
           <el-button type="primary" style="width:35%;margin: 0;float:right">点击获取验证码</el-button>
          </el-form-item>

          <el-form-item prop='check'>
          <el-checkbox v-model="loginFrom.check">别墨迹,麻溜的把条款给签了</el-checkbox>
          </el-form-item>

           <el-form-item>
         <el-button style="width:100%" @click="submitLogin" type="primary">登陆</el-button>
         </el-form-item>

      </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginFrom: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否同意条款
      },
      rules: {
        // 验证规则对象:key(字段名) :value(规则 => [])
        mobile: [{ required: true, message: '请输入您的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确'
        }],
        code: [{ required: true, message: '请输入您的验证码' }, {
          pattern: /^\d{6}$/, message: '验证码格式不正确'
        }],
        check: [{ validator: function (rule, value, callback) {
          // 自定义校验函数  三个参数
          // rule规则 没啥用    value要校验的字段的值  callback回调函数
          if (value) {
            callback()
          } else {
            callback(new Error('请同意条款'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 校验通过,调用接口
          this.$axios({
            url: '/authorizations', // 请求地址没设置自动默认get类型
            method: 'POST',
            data: this.loginFrom
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/')
          })// .catch(() => {
          //   this.$message({
          //     message: '手机号或验证码不正确',
          //     type: 'warning'
          //   })
          // })
        }
      })
    }
  }

}
</script>

<style lang='less' scoped>
.login {
  height: 100vh;
  background-image: url(../../assets/img/bgc.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 440px;
    height: 350px;
    .title{
      width: 100%;
      text-align: center;
    }
  }
}
</style>
