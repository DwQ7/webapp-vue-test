import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView";
import TestView from "@/views/TestView";


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView


  },
  {
    path:'/test',
    name:'test',
    component: TestView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //history模式
  //history: createWebHashHistory(process.env.BASE_URL), //hash模式
  routes
})

export default router
