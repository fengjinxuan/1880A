// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store/'

//折线图
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


import ElementUI from 'element-ui';
// <!-- 引入样式 -->
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false
import  axios  from "axios";
import lianxi from './components/lianxi'
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
