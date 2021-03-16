<template>
  <div class="contain">
    <bread :bread_list="bread_list"></bread>
    <div class="brand">
      <div class="container">
        <div class="top">
          <div class="img">
            <img src="@/assets/img/brand/205X558_品牌介紹01.png" />
          </div>
          <div class="text">
            <div class="title"><span>緣起</span></div>
            <div class="desc">
              <p>
                青木工坊，是由永興傢俱集團執行長葉武東先生創立，創立之初，秉持『善念、頂真、永續』並強調以木為禮，透過木質禮品傳遞人與人之間的情感交流，將工藝與生活結合。
              </p>
              <p>
                後期品牌受到市場變化，青木工坊轉化為既是設計品牌也是木製文創平台，透過青木工坊直營店面，匯集台灣在地木質文創品牌，並於其中進行推動『木·生活·科技』結合之概念，也將工藝再造理念融入其中，創造全新木藝文創。
              </p>
              <p>
                目前青木工坊品牌不僅商品多樣豐富，也致力於木作課程設計開發及客製化商品設計，是一個集生產、設計、銷售、教學為一體的木創品牌，並在台灣這個土地上，將木工藝持續發光發熱。
              </p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="img">
            <img src="@/assets/img/brand/1004X205_品牌介紹02.png" />
          </div>
          <div class="title">
            <div class="title_inner"><span>品牌事蹟</span></div>
          </div>
          <div class="list">
            <div class="item" v-for="(item,index) in list" :key="item.id">
              <div class="years">
                <div class="year">{{item.year}}</div>
                <div class="now" v-if="index==list.length-1">迄今</div>
              </div>
              <div class="text">
                <label>{{item.year}}</label>
                <ul class="desc">
                  <li v-for="i in item.sub" :key="i.id">{{i.con}}</li>
                </ul>
              </div>
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
  name: 'Brand',
  components: {
    bread,
  },
  data() {
    return {
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '關於我們', url: '#' },
        { id: 3, name: '品牌介紹', url: '#' },
      ],
      list: [
        {
          id: 1,
          year: 2013,
          sub: [{ id: 1, con: '永興傢俱集團執行長葉武東先生創立『青木工坊』' }],
        },
        {
          id: 2,
          year: 2015,
          sub: [
            {
              id: 1,
              con: '青木工坊首次受國立臺灣工藝研究發展中心邀請參與台灣文博會',
            },
            { id: 2, con: '青木工坊進軍大陸地區，並與青木堂家具合作' },
            {
              id: 3,
              con: '青木工坊參與杭州文博會、廈門文博會、上海有意思設計展',
            },
          ],
        },
        {
          id: 3,
          year: 2016,
          sub: [
            {
              id: 1,
              con: '參與台灣文博會、杭州文博會、廈門文博會',
            },
            { id: 2, con: '青木工坊成立上海旗艦店' },
          ],
        },
        {
          id: 4,
          year: 2017,
          sub: [
            {
              id: 1,
              con: '參與台灣文博會、杭州文博會、廈門文博會',
            },
            { id: 2, con: '青木工坊於國立傳統藝術中心-宜蘭園區成立台灣旗艦店' },
            {
              id: 3,
              con: '青木工坊首次與『美好關係』團隊合作，進行士東市場改造計畫',
            },
            {
              id: 4,
              con:
                '青木工坊首次開立『魯班傳習所』專業木藝課程，邀請到李萬財大師蒞臨教導',
            },
          ],
        },
        {
          id: 5,
          year: 2018,
          sub: [
            {
              id: 1,
              con: '參與台灣文博會、杭州文博會、台灣國際美食展',
            },
            { id: 2, con: '參與並贊助『2018宜蘭椅國際設計大賞』' },
            {
              id: 3,
              con: '與永興傢俱集團共同策辦『木·生 - 遇見工藝、遇見木』',
            },
            { id: 4, con: '參與『美好關係』美好書席計畫' },
            { id: 5, con: '策辦『李萬財一甲子特展』' },
          ],
        },
        {
          id: 6,
          year: 2019,
          sub: [
            {
              id: 1,
              con: '參與台灣文博會、杭州文博會',
            },
            {
              id: 2,
              con: '與全聯善美的文化藝術基金會合作策辦『傳藝木作一條街』',
            },
            {
              id: 3,
              con: '與一間二顧、樂山教養院共同策劃『回家Fun創藝』共學課程',
            },
            {
              id: 4,
              con: '與台北市松山區民族國民小學、台灣家具產業協會、全聯善美的文化藝術基金會共同舉辦【趣·傳藝】民族國小美術班木雕特展',
            },
            {
              id: 5,
              con: '參與國立臺北科技大學木藝培育暨設計研發中心舉辦的展覽『木·作·家 15+1木藝聯盟成果展』',
            },
          ],
        },
      ],
    }
  },
}
</script>
<style>
.brand .top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 7.5rem;
  margin-bottom: 7.5rem;
  border-bottom: 1px solid #dddddd;
}
.brand .top .img {
  width: 206px;
  margin-right: 3rem;
}
.brand .top .text .title {
  position: relative;
  margin-bottom: 3rem;
}
.brand .top .text .title span {
  color: #b28146;
  font-size: 1.25rem;
  font-weight: 600;
  background: #fff;
  position: relative;
  z-index: 2;
  padding-right: 5px;
}
.brand .top .text .title::after {
  content: '';
  border-bottom: 1px solid #b28146;
  width: 100%;
  display: block;
  position: absolute;
  top: 50%;
  z-index: 1;
}
.brand .top .text .desc {
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 500;
  color: #333333;
}
.brand .top .text .desc p {
  margin-bottom: 1.25rem;
}
.brand .bottom {
  margin-bottom: 3rem;
}
.brand .bottom .img img {
  width: 100%;
  margin-bottom: 5rem;
}
.brand .bottom .title {
  display: flex;
  margin-bottom: 1rem;
}
.brand .bottom .title::before {
  content: '';
  display: block;
  flex: 2;
}
.brand .bottom .title .title_inner {
  flex: 5;
  position: relative;
}
.brand .bottom .title span {
  color: #b28146;
  font-size: 1.25rem;
  font-weight: 600;
  background: #fff;
  position: relative;
  z-index: 2;
  padding-right: 5px;
}
.brand .bottom .title .title_inner::after {
  content: '';
  border-bottom: 1px solid #b28146;
  width: 100%;
  display: block;
  position: absolute;
  top: 50%;
  z-index: -1;
}
.brand .bottom .list .item {
  display: flex;
  align-items: stretch;
}
.brand .bottom .list .item .years {
  flex: 2;
}
.brand .bottom .list .item .years .year {
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  position: relative;
  width: 52px;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
}
.brand .bottom .list .item .years .now {
  color: #d1ae88;
  text-align: center;
  margin-top: 20px;
  font-size: 1.25rem;
}
.brand .bottom .list .item:nth-child(2n + 1) .year {
  background-color: #ac8544;
}
.brand .bottom .list .item:nth-child(2n) .year {
  background-color: #d1ae88;
}
.brand .bottom .list .item .year::before {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 13px 26px 0 26px;
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.brand .bottom .list .item:nth-child(2n + 1) .year::before {
  border-color: #ac8544 transparent transparent transparent;
}
.brand .bottom .list .item:nth-child(2n) .year::before {
  border-color: #d1ae88 transparent transparent transparent;
}
.brand .bottom .list .item .year::after {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 13px 26px 0 26px;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translate(-50%, 2px);
  z-index: 2;
}
.brand .bottom .list .item:last-child .year::after {
  display: none;
}
.brand .bottom .list .item .text {
  font-size: 1.25rem;
  display: flex;
  line-height: 2.5;
  flex: 5;
}
.brand .bottom .list .item .text label {
  font-weight: 300;
  color: #b28146;
  margin-right: 5px;
}
.brand .bottom .list .item .text .desc {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}
.brand .bottom .list .item .text .desc li {
  display: flex;
}
.brand .bottom .list .item .text .desc li::before {
  content: '-';
  margin-right: 5px;
}
</style>
