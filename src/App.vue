<template>
  <div id="app">
    <headerBlock></headerBlock>
    <carousel class="slider" items="1" :autoplay="true" :nav="false" :dots="true" :loop="true">
      <img src="img/img-forKvSection.png" />
      <img src="img/img-forKvSection.png" />
      <img src="img/img-forKvSection.png" />
      <img src="img/img-forKvSection.png" />
    </carousel>
  </div>
</template>

<script>
import headerBlock from './components/header/index.vue'
import carousel from 'vue-owl-carousel'

export default {
  name: 'App',
  components: {
    headerBlock,
    carousel,
  },
  data() {
    return {}
  },
}
</script>

<style>
html {
  font-size: 16px;
}
.slider .owl-dots {
  position: absolute;
  right: 20px;
  bottom: 10%;
}
.slider .owl-dots .owl-dot {
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
.slider .owl-dots .owl-dot span{display: none;}
.slider .owl-dots .owl-dot:hover,
.slider .owl-dots .owl-dot.active {
  background-color: #fff;
}
</style>
