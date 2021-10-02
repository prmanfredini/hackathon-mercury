import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListaJogos from '../views/ListaJogos.vue'
import ListaAnimes from '../views/ListaAnimes.vue'
import InstituicaoLista  from '../views/Setembro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jogos',
    name: 'Lista de Jogos',
    component: ListaJogos
  },
  {
    path: '/animes',
    name: 'Lista de Animes',
    component: ListaAnimes
  },
  {
    path: '/amarelo',
    name: 'Lista de Instituicoes',
    component: InstituicaoLista
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
