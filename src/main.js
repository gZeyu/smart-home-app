// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import HelloFromVux from './components/HelloFromVux'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Explore',
    component: HelloFromVux
  },
  {
    path: '/User',
    component: HelloWorld
  },
  {
    path: '/HelloFromVux',
    component: HelloFromVux
  },
  {
    path: '/HelloWorld',
    component: HelloWorld
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
