<template>
  <el-card>
    <bread-crumb slot='header'>
      <template slot="title">
        评论管理
      </template>
    </bread-crumb>
    <el-table :data = 'list'>
         <!-- 放置列组件 width宽度  width宽度 label表头 prop字段名-->
      <el-table-column prop='title' width='600px' @click='getComment' label='标题' ></el-table-column>
      <el-table-column :formatter='formatterBoolean' prop='comment_status' label='评论状态'></el-table-column>
      <el-table-column prop='total_comment_count' label='总评论数'></el-table-column>
      <el-table-column prop='fans_comment_count' label='粉丝评论数'></el-table-column>
      <el-table-column label='操作'>
       <template slot-scope="scope">
          <el-button size="small" type='text'>修改</el-button>
        <el-button @click='openOrCloseState(scope.row)' size="small" type='text'>{{scope.row.comment_status?'关闭':'开启'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then((result) => {
        this.list = result.data.results
      })
    },
    formatterBoolean (row, column, cellValue, index) {
    // row当前数据  column当前列信息 cellValue当前的单元格的值 index索引
      return cellValue ? '正常' : '关闭'
    },
    // 打开或者关闭评论
    openOrCloseState (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您确定要${mess}评论吗`, '提示').then(() => {
        // 调用接口
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id },
          data: { allow_comment: !row.comment_status }
        }).then(result => {
          // 表示成功 重新加载数据
          this.getComment()
        })
      })
    }

  },
  // 定义一个格式化的属性

  created () {
    this.getComment() // 获取数据
  }
}
</script>

<style>

</style>
