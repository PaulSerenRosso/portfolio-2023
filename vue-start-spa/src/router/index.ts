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
    component: () => import('../views/ProjectPage/KeyProjects/INRSView.vue')
  },
  {
    path: '/Esquirel',
    name: 'Esquirel',
    component: () => import('../views/ProjectPage/KeyProjects/EsquirelView.vue')
  },
  {
    path: '/Boby',
    name: 'Boby',
    component: () => import('../views/ProjectPage/KeyProjects/BobyView.vue')
  },
  {
    path: '/Jab',
    name: 'Jab',
    component: () => import('../views/ProjectPage/KeyProjects/JabView.vue')
  },
  {
    path: '/Boids',
    name: 'Boids',
    component: () => import('../views/ProjectPage/SoloProjects/BoidsView.vue')
  },
  {
    path: '/Bubble',
    name: 'Bubble',
    component: () => import('../views/ProjectPage/SoloProjects/BubbleView.vue')
  },
  {
    path: '/DeepLearning',
    name: 'DeepLearning',
    component: () => import('../views/ProjectPage/SoloProjects/DeepLearningView.vue')
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: () => import('../views/ProjectPage/SoloProjects/PortfolioView.vue')
  },

  {
    path: '/MemoryOfHope',
    name: 'MemoryOfHope',
    component: () => import('../views/ProjectPage/KeyProjects/MemoryOfHopeView.vue')
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
