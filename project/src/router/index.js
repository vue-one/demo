import Vue from 'vue'
import Router from 'vue-router'
import bangdan from '@/view/chen/bangdan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bangdan',
      name: 'bangdan',
      component: bangdan
    }
  ]
})
