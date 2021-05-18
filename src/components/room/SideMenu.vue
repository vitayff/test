<template>
  <el-menu
    class="categories"
    :default-active="$route.path"
    @select="handleSelect"
    active-text-color="red"
    router
  >
    <el-menu-item index="/room">
      <i class="el-icon-menu"></i>
      <span><slot name="title">全部房间</slot></span>
    </el-menu-item>
    <el-menu-item index="/orders">
      <i class="el-icon-menu"></i>
      <span><slot name="title">已定订单</slot></span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      cid: "",
    };
  },
  methods: {
    handleSelect(key) {
      this.cid = key;
      this.$emit("indexSelect");
    },
  },
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
