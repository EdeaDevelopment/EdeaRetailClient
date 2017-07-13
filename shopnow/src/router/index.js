/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Registrations from '@/components/Registrations'
import ShoppingCart from '@/components/ShoppingCart'
import Pay from '@/components/Pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/',
      name: 'Registrations',
      component: Registrations
    }
  ]
})
