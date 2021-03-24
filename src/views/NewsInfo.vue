<template>
  <div class="contain">
    <bread :bread_list="bread_list" :bigTitle_open="bigTitle_open"></bread>
    <div class="news_info">
      <div class="img">
        <img src="@/assets/img/newsInfo/img-pageHeadImg.png" />
      </div>
      <div class="title">
        {{ newsInfo.name }}
      </div>
      <div class="time">{{ newsInfo.pubdate }}</div>
      <div class="editor" v-html="newsInfo.content"></div>
      <div class="go_back">
        <a class="pre" @click="pre()">上一則</a>
        <router-link :to="{ path: '/news' }">回列表頁</router-link>
        <a class="next" @click="next()">下一則</a>
      </div>
    </div>
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'

export default {
  name: 'NewsInfo',
  components: {
    bread,
  },
  data() {
    return {
      bigTitle_open: false,
    }
  },
  mounted(){
    this.$store.dispatch('get_news')
  },
  computed: {
    bread_list() {
      let bread = [{ id: 1, name: '首頁', url: '/' }]
      bread.push({id:2,name:this.title.name,url:'/news'})
      bread.push({id:3,name:this.newsInfo.name,url:'#'})
      return bread
    },
    title() {
      return this.$store.state.news.title
    },
    newsInfo() {
      let id = this.$route.params.id
      return this.$store.getters.news_info(id)
    },
  },
  methods:{
    pre(){
      let id=this.$route.params.id
      let pre_id = this.$store.getters.news_pre(id)

      this.$router.replace({ params: { id: pre_id } }).catch(err => {console.log(err)})
    },
    next(){
      let id=this.$route.params.id
      let pre_id = this.$store.getters.news_next(id)

      this.$router.replace({ params: { id: pre_id } }).catch(err => {console.log(err)})
    }
  }
}
</script>
<style>
.news_info {
  width: 494px;
  max-width: 100%;
  margin: 3.25rem auto;
}
.news_info .img {
  margin-bottom: 3.25rem;
}
.news_info .img img {
  max-width: 100%;
}
.news_info .title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3.25rem;
}
.news_info .time {
  font-size: 0.9rem;
  padding-bottom: 10px;
  margin-bottom: 3.25rem;
  border-bottom: 1px solid #777777;
  color: #777777;
}
.news_info .editor p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 1rem;
}
.go_back {
  display: flex;
  justify-content: space-between;
  margin: 6rem 0;
}
.go_back a {
  text-align: center;
  margin: 0 0.5rem;
  border: 1px solid #b28146;
  flex: 1;
  padding: 10px;
  background-color: #b28146;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}
.go_back a:hover {
  opacity: 0.8;
}
.go_back a.pre,
.go_back a.next {
  background-color: #fff;
  color: #333333;
  border-color: #777777;
}
.go_back a.pre {
  margin-left: 0;
}
.go_back a.next {
  margin-right: 0;
}
</style>
