import { createRouter, createWebHistory } from 'vue-router'
import InitialScreen from '../views/InitialScreen.vue';
import PrincipalScreen from '../views/PrincipalScreen.vue';
import AddBookView from '../views/AddBookView.vue';
import DetailCard from '../components/DetailCard.vue'
import ShowBookView from '../views/ShowBookView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';

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
      component: PrincipalScreen
    },
    {
      path: '/AddBook',
      name:'add-book',
      component: AddBookView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/SignIn',
      name:'sign-in',
      component: SignInView,
    },
    {
      path: '/SignUp',
      name:'sign-up',
      component: SignUpView,
    },
    {
      path: '/book/:bookId',
      name:'show-book',
      component: DetailCard,
    },
  ]
})

export default router
