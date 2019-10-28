import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuerouter from 'vue-router'
import Bcf from './components/Bcf'
import Login from './components/Login'
import Home from './components/Home'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuerouter)
axios.defaults.withCredentials = true
const routes = [
  { path: '/Bcf', component: Bcf, meta: { requiresAuth: false } },
  { path: '/Home', component: Home, meta: { requiresAuth: true } },
  { path: '/', component: Home, meta: { requiresAuth: false } },
  { path: '/Login', component: Login, meta: { requiresAuth: false }, name: 'login' }
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
