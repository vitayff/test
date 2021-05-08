<!--<template>-->
<!--  <div class="about">-->
<!--    <h1>This is an about page</h1>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>注册界面</h3>
    <input type="text" placeholder="请输入手机号" v-model="newUsernumber"/>
    <input type="text" placeholder="请输入用户名" v-model="newUsername"/>
    <input type="password" placeholder="请输入密码" v-model="newPassword"/>

    <button v-on:click="register">注册</button>

    <!-- <p v-on:click="ToLogin">已有账号？马上登录</p> -->
    <p>
      <router-link to="/">已有账号？马上登录</router-link>
    </p>
    <br/>
    <!-- <router-link to="/">返回</router-link> -->
  </div>
</template>

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
</style>
