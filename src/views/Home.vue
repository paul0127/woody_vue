<template>
  <div>
    <sliderBlack :banner_list="banner_list"></sliderBlack>
    <newsBlock :news_info="news_info" :news_list="news_list"></newsBlock>
    <productBlock
      :product_info="product_info"
      :product_list="product_list"
    ></productBlock>
    <videoBlock :video_info="video_info" :video_list="video_list"></videoBlock>
    <artisanBlock></artisanBlock>
  </div>
</template>

<script>
import sliderBlack from '@/components/index/sliderBlock.vue'
import newsBlock from '@/components/index/newsBlock.vue'
import productBlock from '@/components/index/productBlock.vue'
import videoBlock from '@/components/index/videoBlock.vue'
import artisanBlock from '@/components/index/artisanBlock.vue'

export default {
  name: 'Home',
  components: {
    sliderBlack,
    newsBlock,
    productBlock,
    videoBlock,
    artisanBlock,
  },
  data() {
    return {
      banner_list: [
        { id: 1, pic: '/img/img-forKvSection.png' },
        { id: 2, pic: '/img/img-forKvSection.png' },
        { id: 3, pic: '/img/img-forKvSection.png' },
        { id: 4, pic: '/img/img-forKvSection.png' },
      ],
      news_info: { id: 1, name: '最新消息', ename: 'News' },
      news_list: [
        {
          id: 1,
          pc_code: 1,
          name: '青木工房最新課程1-2020,11-12月',
          desc: '適合進階創作者的木作課程,產品設計&手工木作一次完成。',
          place: '台北/台中',
        },
        {
          id: 2,
          pc_code: 1,
          name: '青木工房最新課程2-2020,11-12月',
          desc: '適合進階創作者的木作課程,產品設計&手工木作一次完成。',
          place: '台北/台中',
        },
      ],
      product_info: { id: 1, name: '新品上市', ename: 'New Arrival' },
      product_list: [
        {
          id: 1,
          pc_code: 1,
          name: '【馨享】茶几',
          pic: '/img/prds_01_【馨享】茶几.png',
          price: 3999,
        },
        {
          id: 2,
          pc_code: 1,
          name: '【日常】高低桌',
          pic: '/img/prds_02_咖啡桌.png',
          price: 3999,
        },
        {
          id: 3,
          pc_code: 1,
          name: '【日常】咖啡桌',
          pic: '/img/prds_03_展示櫃.png',
          price: 3999,
        },
        {
          id: 4,
          pc_code: 1,
          name: '【日常】雙面展示櫃',
          pic: '/img/prds_04_雙面展示櫃.png',
          price: 3999,
        },
        {
          id: 5,
          pc_code: 1,
          name: '【豬光寶器】禮盒',
          pic: '/img/prds_05_高低桌.png',
          price: 3999,
        },
        {
          id: 6,
          pc_code: 1,
          name: '【圓-滿 納】木碗',
          pic: '/img/prds_06_木碗.png',
          price: 3999,
        },
        {
          id: 7,
          pc_code: 1,
          name: '【豬事順曆】桌暦',
          pic: '/img/prds_07_禮盒.png',
          price: 3999,
        },
        {
          id: 8,
          pc_code: 1,
          name: '【日常】展示櫃',
          pic: '/img/prds_08_桌曆.png',
          price: 3999,
        },
      ],
      video_info: { id: 1, name: '影片專區', ename: 'Video' },
      video_list: [
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
    }
  },
}
</script>
<style>
.title_index {
  text-align: center;
  border-bottom: 1px solid #dddddd;
  position: relative;
  color: #333333;
}
.title_index::after {
  content: '';
  border-bottom: 3px solid #b28146;
  width: 239px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
.title_index h1 {
  display: inline-block;
  margin: 0;
  line-height: 2;
  font-size: 1.5rem;
  font-weight: 500;
}
.title_index h1 span {
  font-weight: 300;
  margin: 0 8px;
}
.title_index .more {
  position: absolute;
  right: 0;
  bottom: 8px;
}
.title_index .more a {
  color: #7b94e8;
  font-size: 1rem;
  text-decoration: none;
}
.title_index .more a:hover {
  opacity: 0.8;
}
</style>
