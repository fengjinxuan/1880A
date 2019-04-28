import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '@/components/UserInfo'
import App from '@/App'
import Lianxi from '@/components/lianxi'
import PPt from '@/components/ppt'
import shop from '@/components/shop'
import foods from '@/components/foods'
import ding from '@/components/dingdan'
import say from '@/components/say'
import fenbu from '@/components/fenbu'
import guanli from '@/components/guanli'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:App,
      children:[
        {
          path: '/',
          name: 'Lianxi',
          component:Lianxi
        },
        {
          path: '/user',
          name: 'user_info',
          component:UserInfo
        },
        {
          path: '/ppt',
          name: 'ppt',
          component:PPt
        },
        {
          path: '/shop',
          name: 'shop',
          component:shop
        },
        {
          path: '/foods',
          name: 'foods',
          component:foods
        },
        {
          path: '/ding',
          name: 'ding',
          component:ding
        },
        {
          path: '/say',
          name: 'say',
          component:say
        },
        {
          path: '/fenbu',
          name: 'fenbu',
          component:fenbu
        },
        {
          path: '/guanli',
          name: 'guanli',
          component:guanli
        },
      ]
  }
   
  ]
})
