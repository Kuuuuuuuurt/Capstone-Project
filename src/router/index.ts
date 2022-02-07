import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPageForIndividual from '../views/individual/LoginPage.vue'
import RegistrationPageForIndividual from '../views/individual/RegistrationPage.vue'
import HomePageForIndividual from '../views/individual/HomePage.vue'
import HealthDeclationFormIndividual from '../views/individual/HealthDeclarationForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/individual-login'
  }, 
  {
    path: '/individual-login',
    name: 'LoginPage',
    component: LoginPageForIndividual
  },
  {
    path: '/individual-regstration',
    name: 'RegistrationPage',
    component: RegistrationPageForIndividual
  },
  {
    path: '/individual-home',
    name: 'HomePage',
    component: HomePageForIndividual
  },
  {
    path: '/individual-health-declaration-form',
    name: 'HealthDeclationFrom',
    component: HealthDeclationFormIndividual
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
