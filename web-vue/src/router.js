import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Timeline from './views/Timeline.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },    
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    }
  ]
})
