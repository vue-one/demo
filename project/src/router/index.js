import Vue from 'vue'
import Router from 'vue-router'
import over from '@/view/zhu/over'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/over',
      name: 'over',
      component: over
    }
  ]
})
