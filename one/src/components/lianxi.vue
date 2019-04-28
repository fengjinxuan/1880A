<template>
  <div>
    <div class="container">
      <div class="class1">elm后台管理系统</div>
      <div class="title">
        <input type="text" v-model="name" placeholder="用户名">
        <input type="password" v-model="pass" placeholder="密码">
          <button @click="dianji">登录</button>
        <div class="wen">
          温馨提示:
          <br>未登录过的新用户,自动注册
          <br>注册过的用户可凭账号密码登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  methods: {
    dianji() {
      let obj = {};
      obj.name = this.name;
      obj.pass = this.pass;
      console.log(obj);
      //正则验证
      let userBool = /^1[3456789]\d{9}$/.test(this.name);
      if (!userBool) {
        alert("手机号不正确");
      }
      if (this.name==""||this.pass=="") {
        alert("手机号或密码不能为空");
      }else{
        this.$router.push("/user")
      }
     
      let data = { user_name: this.name, password: this.pass };
      this.$http({
        url: "https://elm.cangdu.org/admin/login",
        method: "post",
        data: data
      }).then(res => {
        if (res.data.success === true) {
          console.log(res.data);
        }
      })
    }
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: #324057;
}
.container {
  width: 50%;
  height: 16%;
  margin-left: 25%;
  /* border:1px solid red; */
}
.class1 {
  color: white;
  text-align: center;
  margin-top: 100px;
  font-size: 34px;
}
.title {
  width: 400px;
  height: 240px;
  border-radius: 10px;
  margin-left: 20%;
  background-color: azure;
}
input {
  background-color: aliceblue;
  border: 1px solid gray;
  width: 300px;
  height: 30px;
  margin-left: 12%;
  border-radius: 5px;
  margin-top: 30px;
}
button {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  margin-top: 30px;
  margin-left: 50px;
  background-color: #20a0ff;
  text-align: center;
  color: white;
  font-size: 16px;
  border: 1px solid #20a0ff;
}
.wen {
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
  height: 90px;
  background-color: aliceblue;
}
</style>
