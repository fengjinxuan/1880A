<template>
  <div>
    <el-container class="cla" style="height:738px;position:fixed; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #324057">
        <el-menu class="left">
          <el-menu-item index="0-1">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="1">
            <template class="fl" slot="title">
              <i class="el-icon-document"></i>数据管理
            </template>
            <el-menu-item class="fg" index="1-1">用户列表</el-menu-item>
            <el-menu-item class="fg" index="1-2">商家列表</el-menu-item>
            <el-menu-item class="fg" index="1-3" @click="foods">食品列表</el-menu-item>
            <el-menu-item class="fg" index="1-4">订单列表</el-menu-item>
            <el-menu-item class="fg" index="1-5">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template class="fl" slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item class="fg" index="2-1">添加商铺</el-menu-item>
            <el-menu-item class="fg" index="2-2">添加商品</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template class="fl" slot="title">
              <i class="el-icon-star-on"></i>图标
            </template>
            <el-menu-item class="fg" index="3-1">用户分布</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template class="fl" slot="title">
              <i class="el-icon-document"></i>编辑
            </template>
            <el-menu-item class="fg" index="4-1">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template class="fl" slot="title">
              <i class="el-icon-plus"></i>设置
            </template>
            <el-menu-item class="fg" index="5-1">管理员设置</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template class="fl" slot="title">
              <i class="el-icon-star-on"></i>说明
            </template>
            <el-menu-item class="fg" index="6-1">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
    <div class="right">
      <div class="right-content1">
        <div class="container-1">首页</div>
        <div class="container-2" @click="show">
          <img src="../assets/img/1.png" alt>
        </div>
        <div v-if="s">
          <div class="container-5">首页</div>
          <div class="container-6">退出</div>
        </div>
      </div>
    </div>
    <div class="table">
         node-elm后台管理系统<br/>
         第一次登录的用户自动注册成为普通管理员<br/>
         普通管理员可以添加，修改信息<br/>
         超级管理员可以删除信息
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.table{
    margin-left: 17%;
    margin-top: -40%;
    text-align: center;
    font-size: 20px;
}
.el-header {
  background-color: #eff2f7;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.left {
  background: #324057;
}
.fl {
  color: #bfcbd9;
}
.fg {
  color: #bfcbd9;
  background: #1f2d3d;
}
.tx {
  width: 40%;
  height: 40%;
  border-radius: 50%;
  margin-top: 3%;
}
.tg {
  margin-left: -5%;
}
.sjtj {
  text-align: center;
}
.right {
  width: 85%;
  height: 633px;
  margin-left: 15%;
  /* margin-top: -55%; */
  background-color: white;
}
.right-content1 {
  width: 100%;
  height: 80px;
  background-color: #eff2f7;
}
.container-1 {
  float: left;
  padding-left: 20px;
  color: gray;
  line-height: 80px;
}
.container-2 img {
  margin-top: 10px;
  margin-left: 990px;
}
.container-5 {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid gainsboro;
  margin-left: 990px;
}
.container-6 {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid gainsboro;
  margin-left: 990px;
}
</style>
