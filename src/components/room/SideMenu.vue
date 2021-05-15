<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red"
  >
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span><slot name="title">全部</slot></span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span><slot name="title">文学</slot></span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span><slot name="title">流行</slot></span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span><slot name="title">文化</slot></span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span><slot name="title">生活</slot></span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span><slot name="title">经管</slot></span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span><slot name="title">科技</slot></span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style scoped>
.categories {
  position: fixed;
  margin-left: 50%;
  left: -900px;
  top: 100px;
  width: 150px;
}
</style>
