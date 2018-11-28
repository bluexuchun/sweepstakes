import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Loading'
import Home from '@/pages/Home/Home'
import Detail from '@/pages/Detail/Detail'
import Result from '@/pages/Result/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path:'/',
      name:'Result',
      component: Result
    }
  ]
})
