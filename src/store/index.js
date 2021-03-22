import Vue from 'vue'
import Vuex from 'vuex'

import header from './model/header.js'
import footer from './model/footer.js'

import home from './model/home.js'
import news from './model/news.js'
import product from './model/product.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { header, footer, home, news ,product},
})
