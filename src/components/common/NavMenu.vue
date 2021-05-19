<template>
  <el-menu
    :default-active="$route.path"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px"
  >
    <el-menu-item
      v-for="(item, i) in navList"
      :key="i"
      :index="item.name"
      :disabled="able[i]"
    >
      {{ item.navItem }}
    </el-menu-item>
    <i
      class="el-icon-switch-button"
      v-on:click="logout"
      style="float:right;font-size: 40px;color: #222;padding: 10px"
    ></i>
    <span
      style="position: absolute;padding-top: 20px;right: 45%;font-size: 20px;font-weight: bold"
      >酒店预定与管理系统</span
    >
  </el-menu>
</template>

<script>
import router from "@/router";

export default {
  name: "NavMenu",
  data() {
    return {
      able: [false, true, false, false],
      navList: [
        { name: "/index", navItem: "首页" },
        { name: "/manage", navItem: "管理" },
        { name: "/room", navItem: "房间预定" },
        { name: "/about", navItem: "关于" },
      ],
    };
  },
  mounted() {
    this.btnIsAble();
  },
  methods: {
    btnIsAble() {
      const uu = sessionStorage.getItem("phone");
      this.able[1] = !uu.startsWith("a");
      this.able[2] = uu.startsWith("a");
    },
    logout() {
      sessionStorage.clear();
      this.$axios.get("/logout").then((resp) => {
        if (resp.status === 200) {
          // 前后端状态保持一致
          sessionStorage.clear();
          router.replace("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
.el-icon-switch-button {
  cursor: pointer;
  outline: 0;
}
</style>
