import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import ROP from './views/rop'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'ROP',
      path: '/',
      component: ROP,
    },
  ],
})
