import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';


import LoginPageForIndividual from '../views/individual/LoginPage.vue'
import RegistrationPageForIndividual from '../views/individual/RegistrationPage.vue'
import HomePageForIndividual from '../views/individual/HomePage.vue'
import HealthDeclationFormIndividual from '../views/individual/HealthDeclarationForm.vue'
import UpdateProfileForIndividual from '../views/individual/UpdateProfile.vue'


import LoginPageforEstablishment from '../views/establishment/LoginPage.vue'
import RegistrationPageforEstablishment from '../views/establishment/RegistrationPage.vue'

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
  {
    path: '/individual-update-profile',
    name: 'UpdateProfile',
    component: UpdateProfileForIndividual
  },


  {
    path: '/establishment-login',
    name: 'LoginPageEstab',
    component: LoginPageforEstablishment
  },
  {
    path: '/establishment-registration',
    name: 'RegistrationPageEstab',
    component: RegistrationPageforEstablishment
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
