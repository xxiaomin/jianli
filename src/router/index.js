import Vue from 'vue'
import VueRouter from 'vue-router'
import Matser from '@/components/InterFace/MobilePC/MobilePC.vue'
import HtmlCss from '@/views/menus/HtmlCss.vue'
import JavaScript from '@/views/menus/JavaScript.vue'
import MyAjax from '@/views/menus/Ajax.vue'
import Git from '@/views/menus/Git.vue'
import MyVue from '@/views/menus/MyVue.vue'
import TouTiao from '@/views/ProJect/TouTiao/TouTiao.vue'
import Rabbit from '@/views/ProJect/Rabbit/Rabbit.vue'

import Home from '@/views/ProJect//TouTiao/FootBody/Home.vue'
import User from '@/views/ProJect//TouTiao/FootBody/User.vue'
import Cart from '@/views/ProJect//TouTiao/FootBody/Cart.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/master' },
    {
      path: '/master',
      component: Matser,
      redirect: '/master/vue',
      name: 'master',
      children: [
        { path: 'htmlcss', component: HtmlCss },
        { path: 'javascript', component: JavaScript },
        { path: 'ajax', component: MyAjax },
        { path: 'git', component: Git },
        { path: 'vue', component: MyVue }
      ]
    },
    { path: '/rabbit', component: Rabbit, name: 'rabbit' },
    {
      path: '/toutiao',
      redirect: '/toutiao/home',
      component: TouTiao,
      name: 'toutiao',
      children: [
        { path: 'home', component: Home, name: 'home' },
        { path: 'user', component: User, name: 'user' },
        { path: 'cart', component: Cart, name: 'cart' }
      ]
    }
  ]
})
export default router
