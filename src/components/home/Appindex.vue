<template>
  <div id="poster">
    Hello World!
    <router-link to="/room">
      <img class="fff" src="../../assets/yq.jpg" alt="null" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Appindex",
};
</script>

<style scoped>
#poster {
  background: url("../../assets/vvv.jpg") no-repeat center;
  opacity: inherit;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.fff {
  opacity: 0;
  display: inherit;
  height: 100%;
  width: 100%;
  margin: 85px auto;
}
</style>
