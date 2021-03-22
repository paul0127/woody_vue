import axios from 'axios'

export default {
  state: {
    product_list: [],
    product_class: [],
    product_section: [
      {
        id: 1,
        name: '家俱/馨享',
        product_list: [
          {
            id: 1,
            pc_code: 1,
            pic: '/img/product/prds_01_【馨享】茶几.png',
            name: '【馨享】茶几',
            price: 3999,
          },
          {
            id: 2,
            pc_code: 1,
            pic: '/img/product/prds_01-1_【馨享】休閒椅.png',
            name: '【馨享】休閒椅',
            price: 3999,
          },
          {
            id: 3,
            pc_code: 1,
            pic: '/img/product/prds_01-2_【馨享】玄關桌.png',
            name: '【馨享】玄關桌',
            price: 3999,
          },
        ],
      },
      {
        id: 2,
        name: '家俱/日常',
        product_list: [
          {
            id: 1,
            pc_code: 1,
            pic: '/img/product/prds-daily-01_2人位沙發.png',
            name: '【馨享】茶几',
            price: 3999,
          },
          {
            id: 2,
            pc_code: 1,
            pic: '/img/product/prds-daily-02_休閒椅.png',
            name: '【馨享】休閒椅',
            price: 3999,
          },
          {
            id: 3,
            pc_code: 1,
            pic: '/img/product/prds-daily-03_咖啡桌.png',
            name: '【馨享】玄關桌',
            price: 3999,
          },
        ],
      },
      {
        id: 3,
        name: '文創商品/工藝類',
        product_list: [
          {
            id: 1,
            pc_code: 1,
            pic: '/img/product/prds-creative-01_藝術品系列.png',
            name: '【馨享】茶几',
            price: 3999,
          },
          {
            id: 2,
            pc_code: 1,
            pic: '/img/product/prds-creative-02_茶香水.png',
            name: '【馨享】休閒椅',
            price: 3999,
          },
          {
            id: 3,
            pc_code: 1,
            pic: '/img/product/prds-creative-03_木器公仔.png',
            name: '【馨享】玄關桌',
            price: 3999,
          },
        ],
      },
      {
        id: 4,
        name: '文創商品/食器類',
        product_list: [
          {
            id: 1,
            pc_code: 1,
            pic: '/img/product/prds-creative-food-01_食盒.png',
            name: '【馨享】茶几',
            price: 3999,
          },
          {
            id: 2,
            pc_code: 1,
            pic: '/img/product/prds-creative-food-02_沾板.png',
            name: '【馨享】休閒椅',
            price: 3999,
          },
          {
            id: 3,
            pc_code: 1,
            pic: '/img/product/prds-creative-food-03_木碗.png',
            name: '【馨享】玄關桌',
            price: 3999,
          },
        ],
      },
      {
        id: 5,
        name: '文創商品/文具類',
        product_list: [
          {
            id: 1,
            pc_code: 1,
            pic: '/img/product/prds-creative-tool-01_豬光寶器禮盒.png',
            name: '【馨享】茶几',
            price: 3999,
          },
          {
            id: 2,
            pc_code: 1,
            pic: '/img/product/prds-creative-tool-02_豬事順曆桌曆.png',
            name: '【馨享】休閒椅',
            price: 3999,
          },
          {
            id: 3,
            pc_code: 1,
            pic: '/img/product/prds-creative-tool-03_鼎曆筆筒.png',
            name: '【馨享】玄關桌',
            price: 3999,
          },
        ],
      },
    ],
  },
  getters: {
    product_section: (state) => {
      let list = []
      state.product_class.forEach((item, index) => {
        list[index] = { id: index, name: item.name, product_list: [] }
        list[index]['product_list'] = state.product_list.filter(pro=>pro.pc_code==item.id)
      })

      return list
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
      axios.get('/data/products.json').then((response) => {
        commit('setProduct', response.data)
      })
    },
    get_productClass({ commit }) {
      axios.get('/data/product_class.json').then((response) => {
        commit('setProductClass', response.data)
      })
    },
  },
}
