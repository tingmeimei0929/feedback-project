import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/',
                redirect: 'NoPurchase'
            },
            {
                path: 'NoPurchase',
                name: 'NoPurchase',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/NoPurchase.vue')
            },
            {
                path: 'Purchase',
                name: 'Purchase',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/Purchase.vue')
            },
            {
                path: 'Message',
                name: 'Message',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
            }
        ]
    }
  ]
})
