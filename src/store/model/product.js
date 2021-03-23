export default {
  state: {
    side_list: [
      {
        id: 1,
        name: '家俱',
        sub: [1, 2],
      },
      {
        id: 2,
        name: '文創商品',
        sub: [3, 4, 5],
      },
      {
        id: 3,
        name: '個性化服務',
        sub: [6],
      },
    ],
    product_list: [],
    product_class: [],
    row_count: 9,
  },
  getters: {
    side_list: (state) => {
      let list = []
      state.side_list.forEach((item, index) => {
        list[index] = { id: item.id, name: item.name, sub: [] }
        list[index]['sub'] = state.product_class.filter((c) =>
          item.sub.includes(c.id)
        )
      })
      return list
    },
    product_section: (state) => {
      let list = []
      state.product_class.forEach((item, index) => {
        list[index] = { id: index + 1, name: item.name, product_list: [] }
        list[index]['product_list'] = state.product_list.filter(
          (pro) => pro.pc_code == item.id
        )
        if (list[index]['product_list'].length == 0) {
          list.splice(index, 1)
        } else {
          list[index]['product_list'] = list[index]['product_list'].slice(0, 3)
        }
      })

      return list
    },
    pro_pager: (state) => (pc_code) => {
      let list = state.product_list.filter((item) => item.pc_code == pc_code)
      return Math.ceil(list.length / state.row_count)
    },
    pro_class: (state) => (classID) => {
      return state.product_class.find((item) => item.id == classID)
    },
    pro_list: (state) => (pc_code, query) => {
      let list = state.product_list.filter((item) => item.pc_code == pc_code)
      list = list.slice(state.row_count * (query - 1), state.row_count * query)
      return list
    },
    pro_info: (state) => (id) => {
      return state.product_list.find((item) => item.id == id)
    },
  },
  mutations: {
    setProduct(state, product) {
      state.product_list = product
    },
    setProductClass(state, productClass) {
      state.product_class = productClass
    },
  },
  actions: {
    get_products({ commit }) {
      let products = require('@/assets/data/products.json')
      commit('setProduct', products)
    },
    get_productClass({ commit }) {
      let productClass = require('@/assets/data/product_class.json')
      commit('setProductClass', productClass)
    },
  },
}
