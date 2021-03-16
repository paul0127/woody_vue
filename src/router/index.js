import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: '首頁'}
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import(/* webpackChunkName: "about" */ '../views/Brand.vue'),
    meta: {title: '品牌介紹'}
  },
  {
    path: '/artisan',
    name: 'Artisan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artisan.vue'),
    meta: {title: '工藝師介紹'}
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "about" */ '../views/Service.vue'),
    meta: {title: '企業服務'}
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "about" */ '../views/Location.vue'),
    meta: {title: '銷售據點'}
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue'),
    meta: {title: '最新消息'}
  },
  {
    path: '/news/class_:id',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue'),
    meta: {title: '最新消息'}
  },
  {
    path: '/news/class_:id/:id',
    name: 'NewsInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsInfo.vue'),
    meta: {title: '最新消息 內頁'}
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue'),
    meta: {title: '商品列表'}
  },
  {
    path: '/product/class_:id',
    name: 'ProductSection',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductSection.vue'),
    meta: {title: '商品列表'}
  },
  {
    path: '/product/class_:id/:id',
    name: 'ProductInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductInfo.vue'),
    meta: {title: '商品內頁'}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {title: '會員登入'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
