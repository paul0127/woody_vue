import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: '青木工坊'}
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import(/* webpackChunkName: "Brand" */ '../views/Brand.vue'),
    meta: {title: '品牌介紹'}
  },
  {
    path: '/artisan',
    name: 'Artisan',
    component: () => import(/* webpackChunkName: "Artisan" */ '../views/Artisan.vue'),
    meta: {title: '工藝師介紹'}
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "Service" */ '../views/Service.vue'),
    meta: {title: '企業服務'}
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "Location" */ '../views/Location.vue'),
    meta: {title: '銷售據點'}
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue'),
    meta: {title: '最新消息'}
  },
  {
    path: '/news/:id',
    name: 'NewsInfo',
    component: () => import(/* webpackChunkName: "NewsInfo" */ '../views/NewsInfo.vue'),
    meta: {title: '最新消息 內頁'}
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "Product" */ '../views/Product.vue'),
    meta: {title: '商品列表'}
  },
  {
    path: '/product/class_:classId',
    name: 'ProductSection',
    component: () => import(/* webpackChunkName: "ProductSection" */ '../views/ProductSection.vue'),
    meta: {title: '商品列表'}
  },
  {
    path: '/product/class_:classId/:id',
    name: 'ProductInfo',
    component: () => import(/* webpackChunkName: "ProductInfo" */ '../views/ProductInfo.vue'),
    meta: {title: '商品內頁'}
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Cart.vue'),
    meta: {title: '購物車'}
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Pay.vue'),
    meta: {title: '購物資訊'}
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Payment.vue'),
    meta: {title: '付款資訊'}
  },
  {
    path: '/finish',
    name: 'Finish',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Finish.vue'),
    meta: {title: '完成訂購'}
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
