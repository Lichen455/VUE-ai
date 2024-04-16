import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import paper_gen from '../views/paper.vue'
import c_gen from '../views/c_gen.vue'
import py_gen from '../views/py_gen.vue'
import page2 from '../components/mainx/page2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    // 组卷页面
    {
      path: '/paper_gen',
      name: 'paper_gen',
      component: paper_gen
    },
    // 组卷页面
    {
      path: '/c_gen',
      name: 'c_gen',
      component: c_gen 
    },
    // 组卷页面
    {
      path: '/py_gen',
      name: 'py_gen',
      component: py_gen
    }
  ]
})

export default router
