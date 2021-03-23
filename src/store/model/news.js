export default {
  state: {
    bread_list: [
      { id: 1, name: '首頁', url: '/' },
      { id: 2, name: '最新消息', url: '#' },
    ],
    title: {
      name: '最新消息',
      ename: 'News',
    },
    row_count: 5,
    news_list: [],
  },
  getters: {
    news_list: (state) => (query) => {
      return state.news_list.slice(
        state.row_count * (query - 1),
        state.row_count * query
      )
    },
    news_info: (state) => (id) => {
      return state.news_list.find((item) => item.id == id)
    },
    pager: (state) => {
      return Math.ceil(state.news_list.length / state.row_count)
    },
    news_pre: (state) => (id) => {
      let now_index = state.news_list.findIndex((item) => item.id == id)
      let pre_id = state.news_list[now_index - 1]
        ? state.news_list[now_index - 1].id
        : state.news_list[0].id

        return pre_id
    },
    news_next: (state) => (id) => {
      let now_index = state.news_list.findIndex((item) => item.id == id)
      let next_id = state.news_list[now_index + 1]
        ? state.news_list[now_index + 1].id
        : state.news_list[state.news_list.length - 1].id

        return next_id
    },
  },
  mutations: {
    setNews(state, News) {
      state.news_list = News
    },
  },
  actions: {
    get_news({ commit }) {
      let news = require('@/assets/data/news.json')
        commit('setNews', news)
    },
  },
}
