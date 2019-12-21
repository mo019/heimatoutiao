<template>
  <el-carousel class="lun" height="500px" indicator-position="outside">
    <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['http://attach.bbs.miui.com/forum/201304/25/195151szk8umd8or8fmfa5.jpg',
        'http://img.3dmgame.com/uploads/images2/news/20191211/1576030363_740120.jpg',
        'http://i0.hdslb.com/bfs/article/72f612a567728a3f81032cfced0d23ed27def0ea.jpg',
        'http://attachments.gfan.com/forum/201701/30/1109345q52025zb5g0uh0z.jpg']
    }
  }
}
</script>

<style lang='less' scoped>

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .lun{
      img{
          width: 100%;
          height: 100%;
          border-radius: 8px;
      }
  }
</style>
