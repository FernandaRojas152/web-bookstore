import { createRouter, createWebHistory } from 'vue-router'
import InitialScreen from '../views/InitialScreen.vue';
import PrincipalScreen from '../views/PrincipalScreen.vue';
import AddBookView from '../views/AddBookView.vue';
import DetailCard from '../components/DetailCard.vue'
import ShowBookView from '../views/ShowBookView.vue';

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
    },
    {
      path: '/AddBook',
      name:'add-book',
      component: AddBookView,
    },
    {
      path: '/book/:bookId',
      name:'show-book',
      component: DetailCard,
    },
  ]
})

export default router
