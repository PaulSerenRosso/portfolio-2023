import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/INRS',
    name: 'INRS',
    component: () => import('../views/KeyProjectsView.vue')
  },
  {
    path: '/Esquirel',
    name: 'Esquirel',
    component: () => import('../views/ProjectPage/EsquirelView.vue')
  },
  {
    path: '/Boby',
    name: 'Boby',
    component: () => import('../views/KeyProjectsView.vue')
  },
  {
    path: '/Jab',
    name: 'Jab',
    component: () => import('../views/KeyProjectsView.vue')
  },
  {
    path: '/keyProjects',
    name: 'keyProjects',
    component: () => import('../views/KeyProjectsView.vue')
  },
  {
    path: '/soloProjects',
    name: 'soloProjects',
    component: () => import('../views/SoloProjectsView.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
