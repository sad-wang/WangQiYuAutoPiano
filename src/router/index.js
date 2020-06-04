import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import upload from '../views/upload.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  }
]

const router = new VueRouter({
  routes
})

export default router
