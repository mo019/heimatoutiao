<template>
   <el-card>
     <bread-crumb slot='header'>
      <template slot="title">
        评论管理
      </template>
    </bread-crumb>
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部图片" name='all'></el-tab-pane>
      <el-tab-pane label="收藏图片" name='collect'></el-tab-pane>
    </el-tabs>
   </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 选中当前的标签
      list: [] // 接收素材数据
    }
  },
  methods: {
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: false // false是获取所有的数据,true是获取收藏数据
        }
      }).then(result => {
        console.log(result.data.results)
        this.list = result.data.results
      })
    }
  }

}
</script>

<style>

</style>
