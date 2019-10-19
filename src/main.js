import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
<<<<<<< HEAD
=======

import Vuerouter from 'vue-router'
import Bcf from './components/Bcf'
import Login from './components/Login'

import axios from 'axios'
import VueAxios from 'vue-axios'
>>>>>>> e421d0222e46b9371dc4230f7609485d94a964f2

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuerouter)

const routes = [
  { path: '/Bcf', component: Bcf, meta: { requiresAuth: false }, name: 'mainpage' },
  { path: '/', component: Login, meta: { requiresAuth: false } },
  { path: 'Login', component: Login, meta: { requiresAuth: false }, name: 'login' }
]

const router = new Vuerouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
