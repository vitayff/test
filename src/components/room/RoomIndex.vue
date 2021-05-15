<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu></SideMenu>
      <!--<SideMenu></SideMenu>-->
    </el-aside>
    <el-main>
      <!--<books></books>-->
      <room class="books-area"></room>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from "@/components/room/SideMenu";
import Room from "@/components/room/Room";

export default {
  name: "RoomIndex",
  components: { SideMenu, Room },
};
</script>

<style scoped>
.books-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
</style>
