import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InitialScreen from '../views/InitialScreen.vue'
import PrincipalScreen from '../views/PrincipalScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InitialScreen
    },
    {
      path: '/FerLex',
      name: 'ferlex',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PrincipalScreen
    }
  ]
})

export default router
