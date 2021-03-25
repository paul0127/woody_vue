export default {
  state: {
    banner_block: [
      { id: 1, pic: '/img/img-forKvSection.png' },
      { id: 2, pic: '/img/img-forKvSection.png' },
      { id: 3, pic: '/img/img-forKvSection.png' },
      { id: 4, pic: '/img/img-forKvSection.png' },
    ],
    news_block: {
      id: 1,
      name: '最新消息',
      ename: 'News',
      list: [1, 2],
    },
    product_block: {
      id: 1,
      name: '新品上市',
      ename: 'New Arrival',
      list: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    video_block: {
      id: 1,
      name: '影片專區',
      ename: 'Video',
      list: [
        {
          id: 1,
          pc_code: 1,
          pic: '/img/木生.png',
          name: '木・生',
          source: '樂木文化',
          src: 'https://www.youtube.com/watch?v=Sgo3JlTSIzw',
        },
        {
          id: 2,
          pc_code: 1,
          pic: '/img/回家.png',
          name: '2019回家Fun創藝木箱鼓音樂共學',
          source: '一間二顧公益行銷平台',
          src: 'https://www.youtube.com/watch?v=SS749VzFrCg',
        },
        {
          id: 3,
          pc_code: 1,
          pic: '/img/青木工坊.png',
          name: '青木工坊·傳藝館｜動手玩木工',
          source: '青木工坊傳藝館',
          src: 'https://www.youtube.com/watch?v=4Yqdb-yda74',
        },
      ],
    },
  },
  mutations: {},
  actions: {},
}
