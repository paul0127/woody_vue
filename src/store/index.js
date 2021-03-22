import Vue from 'vue'
import Vuex from 'vuex'

import common from './model/common.js'

import home from './model/home.js'
import news from './model/news.js'
import product from './model/product.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { common, home, news ,product},
})
