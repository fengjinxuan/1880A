<template>
  <div>
    <el-container class="cla" style="height:738px; border: 1px solid #eee">
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
            <el-menu-item class="fg" index="1-3" @click="change2">食品列表</el-menu-item>
            <el-menu-item class="fg" index="1-4" @click="change3">订单列表</el-menu-item>
            <el-menu-item class="fg" index="1-5" @click="change4">管理员列表</el-menu-item>
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
      <div class="right-content2">
        <div class="container-3">数据统计</div>
        <div class="container-4">
          <ul>
            <li class="shuju">当日数据:</li>
            <li class="shuju2">
              <span>13</span>新增用户
            </li>
            <li class="shuju2">
              <span>9</span>新增订单
            </li>
            <li class="shuju2">
              <span>62</span>新增管理员
            </li>
          </ul>
          <ol>
            <li class="total">总数据:</li>
            <li class="total2">
              <span>26477</span>注册用户
            </li>
            <li class="total2">
              <span>9370</span>订单
            </li>
            <li class="total2">
              <span>37925</span>管理员
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div id="chartmain" style="width:700px; height: 490px;margin-top:-400px;margin-left:280px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s: false
    };
  },
  mounted() {
    this.on();
  },
  created() {
    this.axios
      .get("https://elm.cangdu.org/statis/user/2019-04-28/count")
      .then(res => {
        console.log(res);
      });
  },
  methods: {
    on() {
      let aaa = this.$echarts.init(document.getElementById("chartmain"));
      aaa.setOption({
        title: {
          text: "走势图"
          // subtext: '纯属虚构'
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["新注册用户", "新增订单", "新增管理员"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2019-04-22",
            "2019-0-23",
            "2019-04-24",
            "2019-04-25",
            "2019-04-26",
            "2019-04-27"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        series: [
          {
            name: "新注册用户",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "新增订单",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          },
          {
            name: "新增管理员",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -1, xAxis: 2, yAxis: -2 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "40%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      });
    },
     show() {
      this.s = true;
    },
    change() {
      this.$router.push("/ppt");
    },
    change1() {
      this.$router.push("/shop");
    },
    change2() {
      this.$router.push("/foods");
    },
    change3() {
      this.$router.push("/ding");
    },
     change4() {
      this.$router.push("/guanli");
    },
    say() {
      this.$router.push("/say");
    },
    fenbu() {
      this.$router.push("/fenbu");
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.right {
  width: 85%;
  height: 633px;
  margin-left: 15%;
  margin-top: -55%;
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
.container-3 {
  font-size: 26px;
  margin-top: 10px;
  text-align: center;
}
ul {
  width: 100%;
  height: 50px;
  margin-top: 10px;
}
ol {
  width: 100%;
  height: 50px;
}
ul li {
  float: left;
}
ol li {
  float: left;
}
ul li span {
  font-size: 25px;
}
ol li span {
  font-size: 25px;
}
.shuju {
  background-color: #ff9800;
  color: white;
  text-align: center;
  width: 130px;
  height: 34px;
  margin-left: 50px;
  line-height: 34px;
  border-radius: 5px;
}
.shuju2 {
  background-color: #e5e9f2;
  color: black;
  text-align: center;
  width: 140px;
  height: 34px;
  margin-left: 50px;
  line-height: 34px;
  border-radius: 5px;
}
.total {
  background-color: #20a0ff;
  color: white;
  text-align: center;
  width: 130px;
  height: 34px;
  margin-left: 50px;
  line-height: 34px;
  border-radius: 5px;
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

.total2 {
  background-color: #e5e9f2;
  color: black;
  text-align: center;
  width: 140px;
  height: 34px;
  margin-left: 50px;
  line-height: 34px;
  border-radius: 5px;
}
</style>
