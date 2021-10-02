import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListaJogos from '../views/ListaJogos.vue'
import ListaAnimes from '../views/ListaAnimes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/games',
    component: ListaJogos
  },
  {
    path: '/animes',
    component: ListaAnimes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
