export default {
  state: {
    header_list: [
      {
        id: 1,
        name: '關於我們',
        url: '#',
        sub: [
          { id: 5, name: '品牌介紹', url: '/Brand' },
          { id: 6, name: '工藝師專區', url: '/artisan' },
          { id: 7, name: '企業服務', url: '/service' },
        ],
      },
      { id: 2, name: '最新消息', url: '/news', sub: [] },
      { id: 3, name: '商品介紹', url: '/product', sub: [] },
      { id: 4, name: '據點', url: '/location', sub: [] },
    ],
    cart_list: [
      { id: 1, name: '商品名稱1', price: 1230 },
      { id: 2, name: '商品名稱2', price: 2320 },
      { id: 3, name: '商品名稱3', price: 3330 },
      { id: 4, name: '商品名稱4', price: 4350 },
    ],
    company: {
      footer_logo: '/img/img-logoWhite-footer.png',
      tel: '03-9605665',
      open_day: '週一～週日 9:00~18:00',
      pinkoi_url: 'https://www.pinkoi.com/',
      fb_url: 'https://www.facebook.com',
      ig_url: 'https://www.instagram.com/',
      line_url: 'https://line.me/zh-hant/',
    },
    footer_list: [
      { id: 1, name: '關於我們', url: '/Brand' },
      { id: 2, name: '最新消息', url: '/news' },
      { id: 3, name: '商品介紹', url: '/product' },
      { id: 4, name: '服務據點', url: '/location' },
      { id: 5, name: '工藝師專區', url: '/artisan' },
    ],
    product_list: [],
    cart: [],
  },
  mutations: {
    setcart(state, cart) {
      state.cart = cart
    },
  },
  actions: {
    get_cart({ commit }) {
      let cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
      commit('setcart', cart)
    },
    select_qty({ commit },{id,d}){
      let cart = JSON.parse(localStorage.getItem('cart'))
      let item = cart.find((i) => i.id == id)
      if (d > 0 || item.qty > 1) item.qty = item.qty + d
      localStorage.setItem('cart',JSON.stringify(cart))
      commit('setcart',cart)
    },
    pro_delete({ commit },id){
      let cart = JSON.parse(localStorage.getItem('cart'))
      let index = cart.findIndex((i) => i.id == id)
      cart.splice(index,1)
      localStorage.setItem('cart',JSON.stringify(cart))
      commit('setcart',cart)
    }
  },
}