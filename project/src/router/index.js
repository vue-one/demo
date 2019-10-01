import Vue from 'vue'
import Router from 'vue-router'
import man from '@/view/chen/man'
import women from '@/view/chen/women'
import home from '@/view/chen/home'

Vue.use(Router)

export default new Router({
  routes: [
	  {
		 // home变为主页面包含下面三个页面
		  path: '/home',
		  name: 'home',
		  component: home,
		  // 重定向 页面刷新直接就是男生频道页面
		  redirect:'/home/man',
		  children:[
			  {
				 // 男生
			    path: 'man',
			    name: 'man',
			    component: man
			  },
			  {
				  // 女生
			    path: 'women',
			    name: 'women',
			    component: women
			  }
		  ]
	  }
  ]
})
