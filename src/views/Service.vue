<template>
  <div class="contain">
    <bread :bread_list="bread_list" :title="title"></bread>
    <div class="service">
      <div class="container">
        <div class="list">
          <div class="item">
            <div class="img">
              <img src="@/assets/img/service/494X283企業服務_01.png" />
              <div class="circle">
                <img src="@/assets/img/service/25X25企業服務_01.png" />
              </div>
            </div>
            <div class="text">
              <span>木製文創通路平台</span>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/service/494X283企業服務_02.png" />
              <div class="circle">
                <img src="@/assets/img/service/28X24企業服務_02.png" />
              </div>
            </div>
            <div class="text">
              <span>
                木製商品客製化<br />
                開發設計及生產
              </span>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/service/494X283企業服務_03.png" />
              <div class="circle">
                <img src="@/assets/img/service/25X25企業服務_03.png" />
              </div>
            </div>
            <div class="text">
              <span>異業合作聯名</span>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/service/494X283企業服務_04.png" />
              <div class="circle">
                <img src="@/assets/img/service/28X26企業服務_04.png" />
              </div>
            </div>
            <div class="text">
              <span>木藝課程設計與教學</span>
            </div>
          </div>
        </div>
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
        { id: 2, name: '關於我們', url: '#' },
        { id: 3, name: '企業服務', url: '#' },
      ],
      title:{
        name:'企業服務',
        ename:'Service'
      },
    }
  },
}
</script>
<style scoped>
.service .list {
  width: 840px;
  margin: 0 auto;
}
.service .list .item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9rem;
}
.service .list .item:last-child {
  margin-bottom: 0;
}
.service .list .item .img {
  flex: 4;
  position: relative;
  order: 1;
}
.service .list .item .img .circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #b28146;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  z-index: 2;
}
.service .list .item .img .circle img {
  width: 25px;
  height: 25px;
}
.service .list .item .img img {
  width: 100%;
}
.service .list .item .text {
  flex: 3;
  font-size: 1.75rem;
  font-weight: 600;
  text-align: right;
  position: relative;
  order: 2;
}
.service .list .item .text::before {
  content: '';
  display: block;
  border-bottom: 2px solid #b28146;
  transform: translateY(50%);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  z-index: 1;
}
.service .list .item .text span {
  background-color: #fff;
  position: relative;
  z-index: 2;
  padding: 0 0 0 10px;
  display: inline-block;
  color: #333333;
}

.service .list .item:nth-child(2n) .img {
  order: 2;
}
.service .list .item:nth-child(2n) .text {
  order: 1;
}
.service .list .item:nth-child(2n) .img .circle {
  left: 0;
  right: unset;
  transform: translate(-50%, -50%);
}
.service .list .item:nth-child(2n) .text {
  text-align: left;
}
.service .list .item:nth-child(2n) .text span {
  padding: 0 10px 0 0;
}
</style>
