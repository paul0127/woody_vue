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
  },
  mutations: {},
  actions: {},
}