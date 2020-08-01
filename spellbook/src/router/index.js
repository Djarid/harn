import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spells',
    name: 'Spells',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "spellbook" */ '../views/Spells.vue')
  },
  {
    path: '/vuetify',
    name: "Vuetify",
    component: () => import(/* webpackChunkName: "vuetify" */ '../views/Vuetify.vue')
  },
  {
    path: '/spells/add',
    name: 'AddSpell',
    component: () => import(/* webpackChunkName: "spellbook" */ '../components/AddSpell.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
