<template>
   <el-card>
     <bread-crumb slot='header'>
      <template slot="title">
        评论管理
      </template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click='changeTab'>
      <el-tab-pane label="全部图片" name='all'>
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt="">
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name='collect'>
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url">
          </el-card>
        </div>
      </el-tab-pane>

    </el-tabs>
  <!-- 公共的分页组件 -->
    <el-row type='flex' justify="center">
          <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :total="page.total"
           background
           @current-change='changePage'
          layout="prev, pager, next">
         </el-pagination>
        </el-row>
   </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 选中当前的标签
      list: [], // 接收素材数据
      page: {
        currentPage: 1, // 当前第几页
        pageSize: 8, // 一页多少个
        total: 0 // 一共有多少
      }
    }
  },
  methods: {
    // 改变页码方法
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 请求数据
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.currentPage,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect'// false是获取所有的数据,true是获取收藏数据
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count // 总条数
      })
    },
    // 切换页签
    changeTab () {
      this.page.currentPage = 1
      this.getMaterial()
    }
  },
  created () {
    this.getMaterial()
  }

}
</script>

<style lang='less' scoped>
  .img-list{
    display: flex;
    flex-wrap: wrap;
    .img-card{
      width: 200px;
      height: 220px;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      .operate{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 20px;
        height: 36px;
        background-color: #f4f5f6;
      }
    }
  }
</style>
