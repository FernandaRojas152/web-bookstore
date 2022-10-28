import { createRouter, createWebHistory } from 'vue-router';
import {useAuthenticationStore} from '../stores/authentication';
import InitialScreen from '../views/InitialScreen.vue';
import PrincipalScreen from '../views/PrincipalScreen.vue';
import AddBookView from '../views/AddBookView.vue';
import DetailCard from '../components/DetailCard.vue'
import ShowBookView from '../views/ShowBookView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';

const requireAuth = async (to, from, next) => {
  const userStore = useAuthenticationStore();
  userStore.loading = true;
  const user = await userStore.currentUser();
  if (userStore.userData.email === "fernandarojas152@hotmail.com") {
      next();
  } else {
      alert("You don't have access to this account, please login with your administrator account");
      next("/FerLex");
  }
  userStore.loading = false;
};

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
      beforeEnter: requireAuth,
/*       meta:{
        requiresAuth: true
      } */
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


/* router.beforeEach((to, from, next)=>{
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
}) */

export default router
