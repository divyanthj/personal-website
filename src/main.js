import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'



Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
