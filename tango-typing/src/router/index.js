import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/mypage', name:"mypage",
    component: () => import('../views/Mypage.vue'),
    children:[
      {
        path:'m',name:"modal",
        component: () => import('../components/modal.vue'),
        props: true,
        children:[
          {
            path:'start/:id',name:"start",
            component: () => import('../components/typing-start.vue'),
            props: true,
          },
          {
            path: 'typing/:id', name:"typing",
            component: () => import('../components/typing-game.vue'),
          },
          {
            path: 'edit/:id', name:"edit",
            component: () => import('../components/typing-edit.vue'),
          }
        ]
      },

    ]
  },
  { 
    path: '/login', component: () => import('../views/Login.vue'), 
  },
  {
    path: '/signup', component: () => import('../views/Signup.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router