import Vue from 'vue'
import Router from 'vue-router'
import over from '@/view/zhu/over'
// 精选
import list from '@/view/wang/list'
// 书架
import book from '@/view/wang/book'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/over',
      name: 'over',
      component: over
    },{
      path: '/list',
      name: 'list',
      component: list
    },{
      path: '/book',
      name: 'book',
      component: book
    }
  ]
})
