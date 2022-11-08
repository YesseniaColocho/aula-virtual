import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComposicionView from '../views/ComposicionView.vue'
import EntregaView from '../views/EntregaView.vue'
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
      path: '/mensajeria',
      name: 'mensajeria',
      component: MensajeriaView
    }
  ]
})

export default router
