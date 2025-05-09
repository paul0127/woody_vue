<template>
  <div class="contain">
    <bread :bread_list="bread_list" :title="title"></bread>
    <div class="artisan_item left">
      <div class="img">
        <img src="@/assets/img/artisan/李萬財.jpg" />
      </div>
      <div class="text">
        <div class="main">
          <div class="name">李<br />萬財</div>
        </div>
        <div class="desc">
          <p>
            擁有一甲子技術的李萬財老師，創作無數，作品也深受收藏家喜愛，不僅如此，屬於國寶級木匠師的李萬財老師，更是現任總統專用辦公桌的作者。自1997年起已開始傳藝授課，目前高齡
            74歲尚於「傳統藝術中心宜蘭傳藝園區」內的「青木工坊.魯班傳習所」擔任木工藝術創作班的授課指導老師，要將一甲子的木藝功力，毫不保留的傳承給有心習藝之人。
          </p>
          <p>
            李老師的創作思想橫跨儒、釋、道三家，並精研易經。每件作品的創作過程費工亦費時，不斷追求極致與完美，將《考工記》中的「天有時，地有炁，材有美，工有巧。合此四者，然後可以為良。」之哲學思想融入其藝術創作堅持中。
          </p>
          <p>
            老師憑藉多年的創作心得整理木工多重技法後，首倡以技入道的六大功法:
          </p>
          <p>尺法、鋸法、鉋法、鑿法、組合、表面處理。</p>
          <p>
            李萬財老師將木工附加了「藝術」，不再一塵不變，而是提升為「木藝之美」，老師綜觀木藝在這一甲子的歷程，對木作產業的未來發展有更殷切的期許，也希望在這具有傳承工藝使命感的宜蘭傳藝園區中，以傳統師徒制的傳藝方式，讓優秀的習藝者，在深厚的文化資產基礎上，融入創新的精神，使發揚光大進而淬鍊和提升傳統木藝精神。老師更期待藝術家具在產官學研的合力推廣下，能為台灣再創「家具出口王國」的美譽。
          </p>
        </div>
        <div class="awarded">
          <label>得獎紀錄：</label>
          <p>
            1993年「妝」系列及「禪」系列獲台灣精品獎<br />
            1994年「八仙桌」獲台灣精品獎 <br />
            1994年「躺椅」獲第二屆台灣工藝設計競賽第一名 <br />
            2002年「躺椅」、「妝椅」獲英國維多利亞博物館〈Victoria & Albert
            Museum〉永久收藏 <br />
            2016年台中第一屆巧聖先師魯班公獎得主<br />
            2017年「生根桌」為蔡英文總統之總統府辦公桌
          </p>
        </div>
      </div>
    </div>
    <div class="artisan_item right">
      <div class="img">
        <img src="@/assets/img/artisan/張水連.jpg" />
      </div>
      <div class="text">
        <div class="main">
          <div class="name">張<br />水連</div>
        </div>
        <div class="desc">
          <p>
            來自於宜蘭在地的老匠師-張水連先生，又名為阿港師，從小就開始學習木工作為一技之長，雖然辛苦，但阿港師從沒放棄過，目前阿港師已在慶齡木業服務相當多年，長期製作許多大木構相關的裝置藝術、與榫卯相關之產品等，透過阿港師的技法，完整的將傳統木工藝融入到生活當中。阿港師不只自身技術相當純熟，也期盼將自身技術傳承下去，因此也多次協助許多年輕匠師進行技術指導與打樣製作，將木工藝精神傳遞下去。
          </p>
        </div>
        <div class="work">
          <label>作品</label>
          <p>
            國立傳統藝術中心-宜蘭園區 - 大木構裝置藝術 - 尜<br />
            青木工坊·傳藝館 - 大木構裝置藝術 - 柚木穹頂<br />
            台灣家具產業協會 - 大木構裝置藝術 - 請坐<br />
            宜蘭東林寺 - 大木構建築 - 穹頂＆涼亭<br />
          </p>
        </div>
      </div>
    </div>
    <div class="middle_img">
      <img src="@/assets/img/artisan/img1-artisanSection.png" />
    </div>
    <div class="artisan_item left">
      <div class="img">
        <img src="@/assets/img/artisan/游源龍.jpg" />
      </div>
      <div class="text">
        <div class="main">
          <div class="name">游<br />源龍</div>
        </div>
        <div class="desc">
          <p>
            游源龍老師為宜蘭在地雕刻匠師，在這個忽起忽落的產業中，游老師從小就因非常熱愛木頭雕刻，所以選擇了具有挑戰性的產業，在他硬骨子裡，藏著對於木頭雕刻的熱愛，也成就了他在宜蘭木頭雕刻中，獲得了「宜蘭雕刻神童」的美譽，更因為如此，許多企業家、設計師等都是游源龍老師的忠實顧客。
          </p>
          <p>
            游源龍老師最擅長的就是雕刻「龍」，對於他來說，龍不僅是神聖的象徵，也代表與人和善、社會和諧的意義，但最重要的是能夠從老師所有作品中，感到到「耐心與堅持」，因為龍並非能夠簡單雕刻出來，龍的自然體態、騰雲駕霧的氣勢、龍眼中展現的威嚴，都代表老師對於作品的堅持，因此在游老師雕刻人生，永遠沒有隨便交差，而是專注好作品，老師常說，他從小就是學中錯、錯中學，活到老學到老，在這人生中，就是不斷挑戰新的事物及堅持做好每一件事，雕刻出各式各樣的作品，讓雕刻持續發光發熱！！
          </p>
        </div>
        <div class="work">
          <label>作品</label>
          <p>
            台北松山慈惠堂-雙龍印璽<br />
            國立宜蘭傳統中心-雙龍搶珠<br />
          </p>
        </div>
      </div>
    </div>
    <div class="artisan_item right">
      <div class="img">
        <img src="@/assets/img/artisan/林建宇.jpg" />
      </div>
      <div class="text">
        <div class="main">
          <div class="name">林<br />建宇</div>
        </div>
        <div class="desc">
          <p>
            於國立雲林科技大學創意生活設計系碩士畢業，2017年成立，雨，漆Rain
            Lacquer，漆藝工作室，2020年與王賢民、王賢志師生策辦漆器生活展，也於2020年入選南投縣玉山美術獎-工藝類，透過學習到的漆藝技術展現在作品上，除此之外，也在各地教授課程，將傳統漆藝傳承下一代。
          </p>
        </div>
        <div class="awarded">
          <label>得獎紀錄：</label>
          <p>2020南投縣玉山美術獎-工藝類-入選<br /></p>
        </div>
      </div>
    </div>
    <div class="bottom_img">
      <img src="@/assets/img/artisan/img2-artisanSection.png" />
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
        { id: 3, name: '工藝師介紹', url: '#' },
      ],
      title:{
        name:'工藝師介紹',
        ename:'Artisan'
      },
    }
  },
}
</script>
<style scoped>
.artisan_item {
  display: flex;
  width: 664px;
  margin: 0 auto 6rem auto;
}
.artisan_item .img {
  margin-right: 2rem;
}
.artisan_item .text {
  margin-top: 0.75rem;
  color: #333333;
}
.artisan_item .text .main .m_img {
  display: none;
}
.artisan_item .text .main .name {
  font-size: 2rem;
  font-weight: 900;
  color: #777777;
  line-height: 1.1;
}
.artisan_item .text .main .name::after {
  content: '';
  border-bottom: 2px solid #777777;
  width: 35px;
  display: block;
  margin: 1.25rem 0 5rem;
}
.artisan_item .text .desc {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
.artisan_item .text .work label {
  display: block;
  font-weight: 900;
  font-size: 1.1rem;
}
.artisan_item .text .work p {
  display: block;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 0;
}
.artisan_item .text .awarded label {
  display: block;
  font-weight: 900;
  font-size: 1.1rem;
}
.artisan_item .text .awarded p {
  display: block;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 0;
}

.artisan_item.left {
  flex-direction: row;
}
.artisan_item.left .img {
  margin-right: 2rem;
  flex:0 0 240px;
}
.artisan_item.left .img img{
  max-width: 100%;
}
.artisan_item.left .main .m_img {
  margin-right: 1.5rem;
}

.artisan_item.right {
  flex-direction: row-reverse;
}
.artisan_item.right .img {
  margin-left: 2rem;
  flex:0 0 240px;
}
.artisan_item.right .img img{
  max-width: 100%;
}
.artisan_item.right .main .m_img {
  margin-left: 1.5rem;
}

.middle_img img {
  width: 100%;
}
.bottom_img {
  text-align: right;
}
.bottom_img img {
  width: 1057px;
  max-width: 100%;
}

@media (max-width: 992px) {
  .artisan_item {
    width: 100%;
    max-width: 750px;
    padding: 0 15px;
    margin: 0 auto 2rem auto;
  }
  .artisan_item .img {
    display: none;
  }
  .artisan_item.left .text .main {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
  }
  .artisan_item.right .text .main {
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
  }
  .artisan_item .text .main .m_img {
    display: block;
    width: 163px;
  }
  .artisan_item .text .main .name {
    font-size: 1.75rem;
  }
  .artisan_item .text .main .name::after {
    margin: 0.75rem 0 0 0;
  }
  .artisan_item.left .text .main .name::after {
    margin-right: auto;
  }
  .artisan_item.right .text .main .name::after {
    margin-left: auto;
  }
  .artisan_item .text .main .name br {
    display: none;
  }
  .artisan_item .text .desc {
    margin-top: 1rem;
  }
}

</style>
