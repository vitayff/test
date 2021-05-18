<template>
  <div id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input
          type="text"
          v-model="loginForm.phone"
          auto-complete="off"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%;background: #505458;border: none"
          v-on:click="login"
          >登录
        </el-button>
      </el-form-item>
      <p>
        <router-link to="/register">没有账号？马上注册</router-link>
      </p>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
      },
      responseResult: [],
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/login", {
          phone: this.loginForm.phone,
          password: this.loginForm.password,
        })
        .then((successResponse) => {
          console.log(successResponse);
          if (successResponse.status === 200) {
            sessionStorage.setItem("phone", this.loginForm.phone);
            this.$router.replace({ path: "/index" });
          }
        })
        .catch((failResponse) => {
          console.log(failResponse);
        });
    },
  },
};
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #505458;
}

#poster {
  background: url("../assets/eva.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
</style>
