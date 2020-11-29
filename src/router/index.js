import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Solution from '../components/pages/Solution'
import Piratas from '../components/pages/Piratas'
import Talent from '../components/pages/Talent'
import Project from '../components/pages/Project'
import Contact from '../components/pages/Contact'
import Cloud from '../components/pages/Cloud'
import Marketing from '../components/pages/Marketing'
import TalentDetail from '../components/pages/TalentDetail'

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
    },
    {
      path: '/talent',
      name: 'Talent',
      component: Talent
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/cloud',
      name: 'Cloud',
      component: Cloud
    },
    {
      path: '/marketing',
      name: 'Marketing',
      component: Marketing
    },
    {
      path: '/talentdetail',
      name: 'TalentDetail',
      component: TalentDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
