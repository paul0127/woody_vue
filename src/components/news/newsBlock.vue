<template>
  <section class="news_block" id="news">
    <div class="container">
      <!--大標題-->
      <div class="news_title">
        <h1>最新消息<span>|</span>News</h1>
      </div>
      <!--最新消息輪播-->
      <carousel
      class="news_slider"
      items="1"
      :autoplay="true"
      :nav="true"
      :dots="false"
      :loop="true"
    >
        <div class="item">
          <h2>青木工房最新課程1-2020,11-12月</h2>
          <p>適合進階創作者的木作課程,產品設計&手工木作一次完成。</p>
          <div class="place">台北/台中</div>
          <div class="btn"><a href="#">READ MORE</a></div>
        </div>
        <div class="item">
          <h2>青木工房最新課程2-2020,11-12月</h2>
          <p>適合進階創作者的木作課程,產品設計&手工木作一次完成。</p>
          <div class="place">台北/台中</div>
          <div class="btn"><a href="#">READ MORE</a></div>
        </div>
      </carousel>
      <div class="more"><a href="#">更多消息 +</a></div>
    </div>
  </section>
</template>
<script>
import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
}
</script>
<style scoped>
.news_block {
  background-image: url(/img/img-newsSection.png);
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
</style>
