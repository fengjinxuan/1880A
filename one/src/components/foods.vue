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
            <el-menu-item class="fg" index="1-1" @click="change">用户列表</el-menu-item>
            <el-menu-item class="fg" index="1-2" @click="change1">商家列表</el-menu-item>
            <el-menu-item class="fg" index="1-3" @click="foods">食品列表</el-menu-item>
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
    <el-table class="table" :data="tableData" style="width: 83%">
      <el-table-column type="expand">
        <div slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="餐馆ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="食品ID">
              <span>{{ props.row.item_id }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.rating_count }}</span>
            </el-form-item>
          </el-form>
        </div>
      </el-table-column>
      <el-table-column label="食品名称" prop="name"></el-table-column>
      <el-table-column label="食品介绍" prop="description"></el-table-column>
      <el-table-column label="评分" prop="rating"></el-table-column>
      <el-table-column label="操作" prop="desc">
        <div slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </div>
      </el-table-column>
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
      tableData: [],
      s: false
    };
  },
  methods: {
    change() {
      this.$router.push("/ppt");
    },
    change1() {
      this.$router.push("/shop");
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
	  handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
      this.num=val-1
      this.$http({
        url: `https://elm.cangdu.org/shopping/v2/foods?offset=${this.num*20}&limit=20&restaurant_id=undefined`,
        method: "get"
      }).then(res => {
        this.tableData = res.data;
        console.log(this.tableData);
      });
			
	  },
    show() {
      this.s = true;
    },
    foods() {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined",
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
.table {
  margin-left: 17%;
  margin-top: -40%;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
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
