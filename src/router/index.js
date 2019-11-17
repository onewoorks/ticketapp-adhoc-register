import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Confirmation from '../views/Confirmation'
import QrCode from '../views/QrCode'
import ViewQrCode from '../views/ViewQrCode'
import QrScanner from '../components/QrReader'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:event_code?',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation
  },
  {
    path: '/qr-code',
    name: 'qrcode',
    component: QrCode
  },
  {
    path: '/view-qrcode',
    name: 'viewqrcode',
    component: ViewQrCode
  },
  {
    path: '/scanner',
    name: 'qrscanner',
    component: QrScanner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
