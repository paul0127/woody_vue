<template>
  <div>
    <sliderBlack :banner_list="banner_list"></sliderBlack>
    <newsBlock :news_info="news_info"></newsBlock>
    <productBlock :product_info="product_info"></productBlock>
    <videoBlock :video_info="video_info"></videoBlock>
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
    return {}
  },
  computed: {
    banner_list() {
      return this.$store.state.home.banner_list
    },
    news_info() {
      return this.$store.state.home.news_info
    },
    product_info() {
      return this.$store.state.home.product_info
    },
    video_info() {
      return this.$store.state.home.video_info
    },
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
