import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path:"/audios",
    name:"audios",
    component:()=>import('../pages/AudiosPage.vue')
  },
  {
    path:"/musica",
    name:"musica",
    component:()=>import('../pages/MusicPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
