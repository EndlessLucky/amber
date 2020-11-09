import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Solution from '../components/pages/Solution'
import Piratas from '../components/pages/Piratas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/piratas',
      name: 'Piratas',
      component: Piratas
    }
  ]
})
