<template>
  <div class="contain">
    <bread :bread_list="bread_list"></bread>
    <div class="news_list">
        <router-link
          class="news_item"
          :to="{ path: '/news/class_' + item.pc_code + '/' + item.id }"

          v-for="item in news_list" :key="item.id"
        >
          <div class="image">
            <div
              class="img"
              :style="{ backgroundImage: 'url(' + item.pic + ')' }"
            ></div>
          </div>
          <div class="text">
            <div class="time">{{ item.pubdate }}</div>
            <div class="title">
              {{ item.name }}
            </div>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
          <div class="news_btn">
            <div class="arrow"></div>
            <div class="circle"></div>
          </div>
        </router-link>
    </div>
    <pager></pager>
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'
import pager from '@/components/pager/pager.vue'

export default {
  name: 'Artisan',
  components: {
    bread,
    pager,
  },
  data() {
    return {
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '關於我們', url: '#' },
        { id: 3, name: '工藝師介紹', url: '#' },
      ],
      news_list: [
        {
          id: 1,
          pc_code: 1,
          name: ' 過隊有市品知車日輕視臺作本 大常管你修水如,以為臺! ',
          pic: '/img/news/三角魯班尺03.png',
          pubdate: '2020-10-10',
          desc:
            '過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;',
        },
        {
          id: 2,
          pc_code: 1,
          name: ' 過隊有市品知車日輕視臺作本 大常管你修水如,以為臺! ',
          pic: '/img/news/三角魯班尺03.png',
          pubdate: '2020-10-10',
          desc:
            '過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;',
        },
        {
          id: 3,
          pc_code: 1,
          name: ' 過隊有市品知車日輕視臺作本 大常管你修水如,以為臺! ',
          pic: '/img/news/三角魯班尺03.png',
          pubdate: '2020-10-10',
          desc:
            '過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;',
        },
        {
          id: 4,
          pc_code: 1,
          name: ' 過隊有市品知車日輕視臺作本 大常管你修水如,以為臺! ',
          pic: '/img/news/三角魯班尺03.png',
          pubdate: '2020-10-10',
          desc:
            '過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;',
        },
        {
          id: 5,
          pc_code: 1,
          name: ' 過隊有市品知車日輕視臺作本 大常管你修水如,以為臺! ',
          pic: '/img/news/三角魯班尺03.png',
          pubdate: '2020-10-10',
          desc:
            '過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;',
        },
      ],
    }
  },
}
</script>
<style>
.news_list {
  width: 824px;
  margin: 0 auto;
}
a.news_item {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  justify-content: center;
  text-decoration: none;
  flex-direction: row;
}
a.news_item:nth-child(2n) {
  flex-direction: row-reverse;
}
a.news_item .image {
  flex: 3;
}
a.news_item:nth-child(2n + 1) .image {
  margin-right: 2.25rem;
}
a.news_item:nth-child(2n) .image {
  margin-left: 2.25rem;
}
a.news_item .image .img {
  padding-bottom: 65%;
  background-size: 100%;
  background-position: center;
  transition-duration: 0.5s;
}
a.news_item .text {
  flex: 3;
}
a.news_item:nth-child(2n + 1) .text {
  margin-right: 2.25rem;
}
a.news_item:nth-child(2n) .text {
  margin-left: 2.25rem;
}
a.news_item .text .time {
  color: #777777;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  font-weight: 500;
}
a.news_item .text .title {
  color: #333333;
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  font-weight: 700;
}
a.news_item .text .desc {
  color: #333333;
  font-size: 1rem;
}
a.news_item .news_btn {
  flex: 1;
  position: relative;
}
a.news_item .news_btn .arrow {
  width: 59px;
  display: block;
  border-bottom: 1px solid #777777;
  position: relative;
  z-index: 3;
  margin: auto;
  transition-duration: 0.5s;
}
a.news_item .news_btn .arrow::before {
  content: '';
  position: absolute;
  right: 0;
  z-index: 2;
  width: 20px;
  display: inline-block;
  border-bottom: 1px solid #777777;
  transform: rotate(45deg);
  transform-origin: right bottom;
}
a.news_item .news_btn .circle {
  position: absolute;
  right: calc(50% - 48px);
  top: calc(50% - 10px);
  z-index: 1;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #dddddd;
  transform: scale(0);
  transition-duration: 0.5s;
}
a.news_item:hover .image .img {
  background-size: 120%;
}
a.news_item:hover .news_btn .arrow {
  transform: translateX(10px);
}
a.news_item:hover .news_btn .circle {
  transform: scale(1);
}
</style>
