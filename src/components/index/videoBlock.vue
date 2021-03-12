<template>
  <section class="video_block">
    <div class="container">
      <!--大標題-->
      <div class="title_index">
        <h1>影片專區<span>|</span>Video</h1>
      </div>
      <!--影片條列-->
      <div class="list row">
        <div class="col-md-4" v-for="(item,index) in video_list" :key="item.id">
          <div
            class="item"
            :key="index"
            @click="imageIndex = index"
          >
            <div
              class="img"
              :style="{ backgroundImage: 'url(' + item.pic + ')' }"
            ></div>
            <div class="title">{{item.name}}</div>
            <div class="source">出處；{{item.source}}</div>
          </div>
        </div>
      </div>
    </div>
    <CoolLightBox 
      :items="video_list" 
      :index="imageIndex"
      @close="imageIndex = null">
    </CoolLightBox>
  </section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  props: { video_info: Object, video_list: Array },
  data() {
    return {
      imageIndex: null
    }
  },
  components: {
    CoolLightBox,
  },
}
</script>

<style>
.video_block {
  margin-top: 2.5rem;
}
.video_block .list {
  margin-top: 2.5rem;
}
.video_block .list .item {
  margin-bottom: 2.5rem;
  cursor: pointer;
}
.video_block .list .item:hover {
  opacity: 0.8;
}
.video_block .list .item .title {
  color: #333333;
  font-size: 1.15rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.75;
}
.video_block .list .item .img {
  width: 100%;
  height: 0;
  padding-bottom: 56.5%;
  position: relative;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
}
.video_block .list .item .source {
  font-size: 1rem;
  color: #777777;
  font-weight: 700;
  line-height: 1.5;
}
</style>
