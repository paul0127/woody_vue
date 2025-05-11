export default {
  state: {
    bigSideList: [
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
    all_product_list: [],
    all_product_class: [],
    row_count: 9,
  },
  getters: {
    side_list: (state) => {
      let list = state.bigSideList.map((item) => {
        let sub = item.sub.map((i) => {
          let subClass = state.all_product_class.find((c) => c.id == i)
          return subClass ? subClass : { id: null, name: null }
        })
        return {
          ...item,
          sub,
        }
      })
      return list
    },
    product_section: (state) => {
      let list = []
      state.all_product_class.forEach((item, index) => {
        let productList = state.all_product_list.filter(
          (pro) => pro.pc_code == item.id
        )
        if (productList.length > 0) {
          list.push({
            id: index + 1,
            name: item.name,
            product_list: productList.slice(0, 3),
          })
        }
      })

      return list
    },
    pro_class: (state) => (classID) => {
      return state.all_product_class.find((item) => item.id == classID)
    },
  },
  mutations: {
    setProduct(state, product) {
      state.all_product_list = product
    },
    setProductClass(state, productClass) {
      state.all_product_class = productClass
    },
  },
  actions: {
    async productInit({dispatch}){
      await dispatch('get_products');
      await dispatch('get_productClass');
    },
    async get_products({ commit }) {
      let products = await require('@/assets/data/products.json')
      commit('setProduct', products)
    },
    async get_productClass({ commit }) {
      let productClass = await require('@/assets/data/product_class.json')
      commit('setProductClass', productClass)
    },
    filterProductsList({ state }, classID) {
      return state.product_list.filter((item) => item.pc_code == classID)
    },
  },
}
