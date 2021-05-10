import Vue from 'vue'
import VueRouter from 'vue-router'

import Player from '../pages/Players/Player.vue'
import CreatePlayer from '@/pages/Players/CreatePlayer'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Player
  },
  {
    path: '/player/:player',
    component: CreatePlayer
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
