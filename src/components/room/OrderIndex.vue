<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu></SideMenu>
      <!--<SideMenu></SideMenu>-->
    </el-aside>
    <el-main>
      <!--<books></books>-->
      <Order class="books-area"></Order>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from "@/components/room/SideMenu";
import Order from "@/components/room/Order";

export default {
  name: "OrderIndex",
  components: { SideMenu, Order },
};
</script>

<style scoped>
.books-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
</style>
