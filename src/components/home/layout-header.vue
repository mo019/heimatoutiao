<template>
<!-- 定义外面一个容器 -->
<el-row class="layout-header" type='flex' align="middle">
    <el-col class="left" :span='12'>
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span='12'>
      <el-row type="flex" justify="end" align="middle">
          <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="sss">
          <!-- 下拉菜单 -->
          <el-dropdown @command="handleCommand">
          <span>{{userInfo.name}}</span>
          <el-dropdown-menu slot='dropdown'>
              <el-dropdown-item command="info">个人信息</el-dropdown-item>
              <el-dropdown-item command="git">git地址</el-dropdown-item>
              <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
      </el-row>
    </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/header.jpg') // 先将图片传换成变量
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/'
      } else if (command === 'lgout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.$axios({
      url: '/user/profile'

    }).then(result => {
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang='less' scoped>
    .layout-header{
        height: 60px;
        .left{
            font-size: 20px;
            span{
                color: #2c3e50;
                font-size: 16;
                margin-left: 4px;
            }
        }
        .right{
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 5px;
            }
        }
    }
</style>
