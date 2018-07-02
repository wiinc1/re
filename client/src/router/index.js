import Vue from 'vue'
import Router from 'vue-router'
import Enroll from '@/components/Enroll'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/enroll',
      name: 'enroll',
      component: Enroll
    },
    {
      path: '/home',
      name: '/home',
      component: Home
    }
  ]
})
