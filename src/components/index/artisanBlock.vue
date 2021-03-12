<template>
  <section class="artisan_block">
      <a href="#">
        <div class="img"></div>
      </a>
    </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
.artisan_block:hover {
  opacity: 0.9;
}
.artisan_block .img {
  width: 100%;
  height: 0;
  padding-bottom: 50.9%;
  background-image: url(/img/img-artisan-artisanSection.png);
  background-size: cover;
  background-position: center center;
}
</style>
