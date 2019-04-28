<template>
  <div>
    <el-container class="cla" style="height:738px;position:fixed;border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #324057">
        <el-menu class="left">
          <el-menu-item index="0-1">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="1">
            <template class="fl" slot="title">
              <i class="el-icon-document"></i>数据管理
            </template>
            <el-menu-item class="fg" index="1-1" @click="user">用户列表</el-menu-item>
            <el-menu-item class="fg" index="1-2" @click="change1">商家列表</el-menu-item>
            <el-menu-item class="fg" index="1-3" @click="change2">食品列表</el-menu-item>
            <el-menu-item class="fg" index="1-4" @click="change3">订单列表</el-menu-item>
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
            <el-menu-item class="fg" index="3-1" @click="fenbu">用户分布</el-menu-item>
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
            <el-menu-item class="fg" index="6-1" @click="say">说明</el-menu-item>
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
    <el-table
      class="table"
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 83%"
    >
      <el-table-column type="index" width="160"></el-table-column>
      <el-table-column property="registe_time" label="日期" width="220"></el-table-column>
      <el-table-column property="username" label="姓名" width="220"></el-table-column>
      <el-table-column property="city" label="地址"></el-table-column>
    </el-table>

    <ul>
      <li v-for="(item,index) in tableData" :key="index"></li>
    </ul>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        background
        layout="total,prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s: false,
      tableData: [],
      currentPage1:5
    };
  },
  methods: {
    change1() {
      this.$router.push("/shop");
    },
    change2() {
      this.$router.push("/foods");
    },
    change3() {
      this.$router.push("/ding");
    },
    say() {
      this.$router.push("/say");
    },
    fenbu() {
      this.$router.push("/fenbu");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
	  handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
      this.num=val-1
      this.$http({
        url: `https://elm.cangdu.org/v1/users/list?offset=${this.num*20}&limit=20`,
        method: "get"
      }).then(res => {
        this.tableData = res.data;
        console.log(this.tableData);
      });
			
	  },
    show() {
      this.s = true;
    },
    user() {
      this.$http({
        url: "https://elm.cangdu.org/v1/users/list?offset=0&limit=20",
        method: "get"
      }).then(res => {
        this.tableData = res.data;
        console.log(this.tableData);
      });
    }
  }
};
</script>

<style>
.block{
margin-left: 220px;
margin-top: -30%;
}
.table {
  margin-left: 17%;
  margin-top: -40%;
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
