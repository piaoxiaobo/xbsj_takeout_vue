/**
 * Created by Bianrongcheng on 2018
 * 路由器模板
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Msite from '../pages/Msite/Msite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})
