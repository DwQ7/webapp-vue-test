import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from "../views/AboutView";
// import TestView from "@/views/TestView";
// import UserView from "@/views/UserView";

// which is lazy-loaded when the route is visited.
const Home = () => import('../views/HomeView')
const HomeNews =() => import('../components/HomeNews')
const HomeMessages =() => import('../components/HomeMessages')

const About = () => import('../views/AboutView')
const Test = () => import('../views/TestView')
const User = () => import('../views/UserView')

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
      // {
      //   path: '',
      //   redirect:'news'
      // },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'messages',
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
  console.log(to);
  document.title = to.name
  next();
})

router.afterEach((to, from) => {
  console.log('----');
})

export default router
