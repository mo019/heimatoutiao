<template>
<!-- 大容器 -->
  <el-container>
    <!-- 左边 -->
        <el-aside style="height:100vh;background-color:#353b4e;width:230px;">
             <layout-aside></layout-aside>
        </el-aside>
    <!-- 右边 -->
  <el-container>
      <el-header>
          <layout-header></layout-header>
      </el-header>
      <el-main>身子</el-main>
  </el-container>
  </el-container>

</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>

<style >

</style>
