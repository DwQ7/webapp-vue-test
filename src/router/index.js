import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from "../views/AboutView";
// import TestView from "@/views/TestView";
// import UserView from "@/views/UserView";

// which is lazy-loaded when the route is visited.
const Home = () => import('@/views/home/HomeView')
const HomeNews =() => import('@/views/home/childComps/HomeNews')
const HomeMessages =() => import('@/views/home/childComps/HomeMessages')

const About = () => import('@/views/about/AboutView')
const Test = () => import('@/views/test/TestView')
const User = () => import('@/views/user/UserView')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    tittle:'首页',
    children:[
      {
        path: '/',
        component: Home,
      },
      {
        path:'news',
        name:'HomeNews',
        component:HomeNews
      },
      {
        path:'messages',
        name:'HomeMessages',
        component:HomeMessages
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    tittle:'关于',
    component: About
  },
  {
    path:'/test',
    name:'test',
    tittle:'测试',
    component: Test
  },
  {
    path: '/user/:userId',
    name:'user',
    tittle:'用户',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //history模式
  //history: createWebHashHistory(process.env.BASE_URL), //hash模式
  routes
})

router.beforeEach((to,from,next) =>{
  document.title = to.name
  next();
})

router.afterEach((to, from) => {
})

export default router
