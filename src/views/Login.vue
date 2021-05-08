<!--<template>-->
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// @ is an alias to /src-->
<!--import HelloWorld from '@/components/HelloWorld.vue'-->

<!--export default {-->
<!--  name: 'Home',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  }-->
<!--}-->
<!--</script>-->
<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>登录界面</h3>
    <input type="text" placeholder="请输入用户名" v-model="user.name"/>
    <input type="password" placeholder="请输入密码" v-model="user.password"/>
    <button @click="login">登录</button>
    <p>
      <router-link to="/reg">没有账号？马上注册</router-link>
    </p>
    <br/>
  </div>
</template>

<script lang="ts">
import router from "@/router"
import {reactive} from "vue"
import {ElMessage} from 'element-plus'

interface User {
  name: string,
  password: string,
}

export default {
  setup() {
    const user: User = reactive({name: '', password: '',})
    const login = () => {
      if (user.name !== 'root') {
        ElMessage.info('用户名错误')

      } else if (user.password !== 'yffghdd') {
        ElMessage.info('密码错误')
      } else
        router.push('/ok')
    }
    return {
      user,
      login
    }
  }
}


</script>

<style>

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

/*.dialog_container {*/
/*  position: fixed;*/
/*  z-index: 9999;*/
/*  margin: auto;*/
/*  height: 200px;*/
/*  top: 25%;*/
/*  left: 0;*/
/*  right: 0;*/
/*  width: 25%;*/
/*  background-color: #e0d5a2;*/
/*}*/

/*.tip_text {*/
/*  align-content: center;*/
/*}*/

/*.alert_container {*/
/*  height: 150px;*/
/*}*/
</style>
