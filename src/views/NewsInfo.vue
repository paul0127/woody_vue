<template>
  <div class="contain">
    <bread :bread_list="bread_list"></bread>
    <div class="news_info">
      <div class="img">
        <img src="@/assets/img/newsInfo/img-pageHeadImg.png" />
      </div>
      <div class="title">
        過隊有市品知車日輕視臺作本大常管你修水如,以為臺!
      </div>
      <div class="time">2020-10-10</div>
      <div class="editor">
        <p>
          過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;位開的會。男事首等的戲用預建委有藝者;自雲地線加就應了訴字起死計:後生選,大代期花社時知是息改維他主!於工來方著產出從音子現見部車上電、曾心青兒中色天小用北務明過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;位開的會。男事首等的戲用預建委有藝者;自雲地線加就應了訴字起死計:后生選,大代期花社時知是息改維他主!於工來方著產出從音子現見部車上電、曾心青兒中色天小用北務明過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;位開的會。男事首等的戲用預建委有藝者;自雲地線加就應了訴字起死計:後生選,大代期花社時知是息改維他主!於工來方著產出從音子現見部車上電、曾心青兒中色天小用北務明過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;位開的會。男事首等的戲用預建委有藝者;自雲地線加就應了訴字起死計:後生選,大代期花社時知是息改維他主!於工來方著產出從音子現見部車上電、曾心青兒中色天小用北務明
        </p>
        <p>
          過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;位開的會。男事首等的戲用預建委有藝者;自雲地線加就應了訴字起死計:後生選,大代期花社時知是息改維他主!於工來方著產出從音子現見部車上電、曾心青兒中色天小用北務明過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;位開的會。男事首等的戲用預建委有藝者;自雲地線加就應了訴字起死計:后生選,大代期花社時知是息改維他主!於工來方著產出從音子現見部車上電、曾心青兒中色天小用北務明過隊有市品知車日輕視臺作本大常管你修水如,以為臺!的經共是力期園原科是生程;位開的會。男事首等的戲用預建委有藝者;自雲地線加就應了訴字起死計:後生選,大代期花社時知是息改維他主!於工來方著產出從音子現見部車上電、曾心青兒中色天小用北務明
        </p>
      </div>
      <div class="go_back">
        <a class="pre" href="#">上一則</a>
        <a href="news.html">回列表頁</a>
        <a class="next" href="#">下一則</a>
      </div>
    </div>
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'

export default {
  name: 'Artisan',
  components: {
    bread,
  },
  data() {
    return {
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '最新消息', url: '#' },
        { id: 3, name: '該最新消息内容頁', url: '#' },
      ],
    }
  },
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
