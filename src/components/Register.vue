<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>注册界面</h3>
    <input type="text" placeholder="请输入手机号" v-model="user.phone" />
    <input type="password" placeholder="请输入密码" v-model="user.password" />
    <button @click="login">注册</button>
    <br />
  </div>
</template>

<script>
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import router from "@/router";

export default {
  name: "Register",
  setup() {
    const user = reactive({ phone: "", password: "" });
    const login = () => {
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
          ElMessage.info("注册失败");
        });
    };
    return {
      user,
      login,
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

span {
  text-align: center;
}

input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
}

p {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin: 0 auto 5px;
  border-radius: 8px;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}
</style>
