import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuerouter from 'vue-router'
import Bcf from './components/Bcf'
import Login from './components/Login'

import axios from 'axios'
import VueAxios from 'vue-axios'

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
