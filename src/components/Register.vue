<template>
  <div id="paper">
    <el-form
      class="login-container"
      label-position="left"
      label-width="0px"
      v-loading="loading"
    >
      <h3 class="login_title">用户注册</h3>
      <el-form-item>
        <el-input
          type="text"
          v-model="user.phone"
          auto-complete="off"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="user.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 40%;background: #505458;border: none"
          v-on:click="register"
          >注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import router from "@/router";

export default {
  name: "Register",
  setup() {
    const user = reactive({ phone: "", password: "" });
    const loading = ref(false);
    const register = () => {
      axios
        .post("/register", {
          phone: user.phone,
          password: user.password,
        })
        .then((successResponse) => {
          console.log(successResponse);
          if (successResponse.status === 201) {
            router.push("/login");
          }
        })
        .catch(() => {
          ElMessage.info("用户名已存在");
        });
    };
    return {
      user,
      register,
      loading,
    };
  },
};
</script>

<style scoped>
#paper {
  background: url("../assets/yq.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

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
</style>
