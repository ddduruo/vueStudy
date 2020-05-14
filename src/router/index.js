import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/demo1/index'
import Demo2 from '@/demo2/index'
import Demo3 from '@/demo3/index'
import Demo4 from '@/demo4/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1/:useId',
      name: 'demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: Demo4
    },
  ]
})
