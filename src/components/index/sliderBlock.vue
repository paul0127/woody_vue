<template>
  <div class="slider_block">
    <carousel
      class="slider"
      :items="1"
      :autoplay="true"
      :nav="false"
      :dots="true"
      :loop="true"
    >
      <img v-for="item in banner_list" :key="item.id" :src="require('@/assets'+item.pic)" />
    </carousel>
    <div class="go_to"></div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  props:{
    banner_list:Array
  },
  components: {
    carousel,
  },
  data() {
    return {}
  },
}
</script>

<style>
.slider_block{position: relative;}
.slider_block .slider .owl-dots {
  position: absolute;
  right: 20px;
  bottom: 10%;
}
.slider_block .slider .owl-dots .owl-dot {
  background-color: inherit;
  width: 20px;
  height: 20px;
  opacity: 1;
  margin: 6px;
  border: 1px solid #fff;
  border-radius: 100%;
  display: block;
  outline: none;
  margin: 12px;
}
.slider_block .slider .owl-dots .owl-dot span {
  display: none;
}
.slider_block .slider .owl-dots .owl-dot:hover,
.slider_block .slider .owl-dots .owl-dot.active {
  background-color: #fff;
}
.slider_block .go_to {
  position: absolute;
  left: calc(50% - 40px);
  bottom: -40px;
  width: 80px;
  height: 80px;
  background-color: #555555;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.slider_block .go_to::after {
  content: '';
  background-image: url(~@/assets/img/Group_25.png);
  background-size: 100% 100%;
  display: block;
  width: 28px;
  height: 30px;
  transition-duration: 0.3s;
}
.slider_block .go_to:hover::after {
  transform: translateY(3px);
}
</style>
