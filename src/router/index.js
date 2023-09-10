import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/www/HomeView.vue')
  },
  {
    path: '/all_services',
    name: 'all_services',
    component: () => import('../views/www/AllServices.vue')
  },
  {
    path: '/knowledge_base',
    name: 'knowledge_base',
    component: () => import('../views/www/KnowledgeBase.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/www/BlogsView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/www/NewsView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/www/ContactsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/www/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
