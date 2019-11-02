import Vue from 'vue'
import Router from 'vue-router'
import workflow from '@/components/workflow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workflow',
      component: workflow
    }
  ]
})
