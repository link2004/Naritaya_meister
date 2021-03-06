import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/', name:"home",
    component: () => import('../views/Home.vue'),
    children:[
      {
        path:'m',
        component: () => import('../components/modal.vue'),
        props:true,
        children:[
          {
            path:'start/:id',
            component: () => import('../components/typing-start.vue'),
            props: true,
          },
          {
            path: 'typing/:id',
            component: () => import('../components/typing-game.vue'),
            props: true,
          },
        ]
      }
    ]
  },
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
            props: true,
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
    path: '/login', name:"login", component: () => import('../views/Login.vue'), 
  },
  {
    path: '/signup', component: () => import('../views/Signup.vue'),
  },
  {
    path: '/policy',
    name: 'policy',
    component: () => import('../views/policy.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/terms.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
