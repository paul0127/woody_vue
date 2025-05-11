<template>
  <section class="news_block" id="news">
    <div class="container">
      <!--大標題-->
      <div class="news_title">
        <h1>{{ news_block.name }}<span>|</span>{{ news_block.ename }}</h1>
      </div>
      <!--最新消息輪播-->
      <carousel
        class="news_slider"
        :items="1"
        :autoplay="false"
        :nav="true"
        :dots="false"
        :loop="true"
      >
        <div class="item" v-for="item in news_list" :key="item.id">
          <h2>{{ item.name }}</h2>
          <p>{{ item.desc }}</p>
          <div class="place">{{ item.place }}</div>
          <div class="btn">
            <router-link :to="{ path: '/news/' + item.id }"
              >READ MORE</router-link
            >
          </div>
        </div>
      </carousel>
      <div class="more">
        <router-link :to="{ path: '/news' }">更多消息 +</router-link>
      </div>
    </div>
  </section>
</template>
<script>
import carousel from 'vue-owl-carousel'

export default {
  props: {
    news_block: Object,
  },
  components: { carousel },
  data() {
    return { news_list: [] }
  },
  created() {
    this.$store.dispatch('get_news')
    let newsList = this.$store.state.news.news_list
    let list = newsList.filter((item) => this.news_block.list.includes(item.id))
    this.news_list = list
  },
  methods: {
    
  },
}
</script>
<style>
.news_block {
  background-image: url('~@/assets/img/img-newsSection.png');
  background-size: cover;
  background-position: center center;
  padding: 5rem 0;
  position: relative;
}
.news_title {
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #fff;
  position: relative;
}
.news_title::after {
  content: '';
  border-bottom: 3px solid #b28146;
  width: 239px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
.news_title h1 {
  display: inline-block;
  margin: 0;
  line-height: 2;
  font-size: 1.5rem;
  font-weight: 500;
}
.news_title h1 span {
  font-weight: 300;
  margin: 0 8px;
}
.news_block .more {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 160px;
  height: 71px;
  background-color: #b28146;
}
.news_block .more a {
  display: flex;
  color: #fff;
  font-size: 1.25rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.news_block .more a:hover {
  opacity: 0.8;
}
/*首頁最新消息輪播*/
.news_slider {
  margin-top: 0.5rem;
  position: relative;
}
.news_slider .item {
  color: #fff;
  text-align: center;
  max-width: 55%;
  margin: 0 auto;
}
.news_slider .item h2 {
  font-size: 2rem;
  margin: 2rem 0;
  font-weight: 400;
  line-height: 1.5;
}
.news_slider .item p,
.news_slider .item .place {
  font-size: 1.25rem;
  line-height: 1.5;
}
.news_slider .item .btn {
  margin-top: 2rem;
  padding: 0;
  background-color: #000;
}
.news_slider .item .btn a {
  color: #fff;
  font-size: 1.25rem;
  padding: 13px 35px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
}
.news_slider .item .btn a:hover {
  opacity: 0.8;
}
.news_slider .owl-dots {
  display: none;
}
.news_slider .owl-nav {
  position: absolute;
  width: 100%;
  height: 0;
  top: calc(50% - 40px);
  display: flex;
  justify-content: space-between;
}
.news_slider.owl-carousel .owl-nav button.owl-prev,
.news_slider.owl-carousel .owl-nav button.owl-next {
  width: 80px;
  height: 80px;
  font-size: 60px;
  color: #dddddd;
  outline: none;
}
.news_slider.owl-carousel .owl-nav button.owl-prev:hover,
.news_slider.owl-carousel .owl-nav button.owl-next:hover {
  opacity: 0.8;
}
.news_slider.owl-carousel .owl-nav button.owl-prev span,
.news_slider.owl-carousel .owl-nav button.owl-next span {
  margin-bottom: 10px;
}
@media (max-width: 992px) {
  .news_block {
    padding: 2.5rem 0;
  }
  .news_title {
    border-bottom: none;
  }
  .news_title h1 {
    font-size: 1.25rem;
  }
  .news_title::after {
    width: 180px;
  }
  .news_block .more {
    width: 88px;
    height: 40px;
  }
  .news_block .more a {
    font-size: 10px;
  }
  .news_slider .item h2 {
    margin: 0.8rem 0;
  }
  .news_slider .item p {
    margin-bottom: 0;
  }
  .news_slider .item h2,
  .news_slider .item p,
  .news_slider .item .place {
    font-size: 1rem;
  }
  .news_slider .item .btn a {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>
