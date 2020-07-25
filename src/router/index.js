import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/page/homepage'
//引入状态
import state from '../store/index'
import Index from '@/page/Index'
import Tab1 from '@/page/tabPage/tab1-1'
import Tab2 from '@/page/tabPage/tab1-2'
import Tab3 from '@/page/tabPage/tab1-3'
import Tab4 from '@/page/tabPage/tab1-4'
import anim from "@/page/bangumi/newPage"
import animD from "@/page/bangumi/bangumiDetail"
Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: homePage
    },
    {
      path:'/index',
      name:'登录',
      component:Index,
      children:[
      {
        path:'/tab1',
        name:'首页',
        component:Tab1,
      }  
      ,{
        path:'/tab2',
        name:'第二页',
        component:Tab2
      }
      ,
      {
        path:'/tab3',
        name:'第三页',
        component:Tab3
      }]
    }
    ,{
      path:"/demo/bangumi",
      name:"动画api页面",
      component:anim
    },
    ,{
      path:"/demo/bangumiDetail",
      name:"动画api详情页面",
      component:animD
    }
  ]
})
