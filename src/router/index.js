import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComposicionView from '../views/ComposicionView.vue'
import EntregaView from '../views/EntregaView.vue'
import AreaView from '../views/AreaView.vue'
import CalendarioView from '../views/CalendarioView.vue'
import MensajeriaView from '../views/MensajeriaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/composicion',
      name: 'composicion',
      component: ComposicionView
    },
    {
      path: '/entrega',
      name: 'entrega',
      component: EntregaView
    },
    {
      path: '/areapersonal',
      name: 'areapersonal',
      component: AreaView
    },
    {
      path: '/mensajeria',
      name: 'mensajeria',
      component: MensajeriaView
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: CalendarioView
    }
  ]
})

export default router
