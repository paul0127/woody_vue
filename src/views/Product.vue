<template>
  <div class="contain">
    <bread :bread_list="bread_list" :bigTitle_open="bigTitle_open"></bread>
    <!-- 產品列表內容開始 -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3 hidden-xs">
          <sideMenu></sideMenu>
        </div>
        <div class="col-xs-12 col-sm-9">
          <div
            class="product_section"
            v-for="item in product_section"
            :key="item.id"
          >
            <div class="title_product">
              <h1>{{ item.name }}</h1>
              <div class="more">
                <a href="product_list.html">更多商品 +</a>
              </div>
            </div>
            <div class="row prod-list">
              <div class="col-xs-6 col-sm-4" v-for="i in item.product_list" :key="i.id">
                <a href="product_info.html">
                  <img
                    class="prod-img img-responsive"
                    :src="i.pic"
                  />
                </a>
                <div class="prod-title">{{i.name}}</div>
                <div class="prod-price">${{i.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /產品列表內容結束 -->
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'
import sideMenu from '@/components/sideMenu/sideMenu.vue'

export default {
  name: 'Product',
  components: {
    bread,
    sideMenu,
  },
  data() {
    return {
      bigTitle_open: false,
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '商品介紹', url: '#' },
      ],
      product_section: [
        {
          id: 1,
          name: '家俱/馨享',
          product_list: [
            {
              id: 1,
              pic: '/img/product/prds_01_【馨享】茶几.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pic: '/img/product/prds_01-1_【馨享】休閒椅.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pic: '/img/product/prds_01-2_【馨享】玄關桌.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 2,
          name: '家俱/日常',
          product_list: [
            {
              id: 1,
              pic: '/img/product/prds-daily-01_2人位沙發.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pic: '/img/product/prds-daily-02_休閒椅.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pic: '/img/product/prds-daily-03_咖啡桌.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 3,
          name: '文創商品/工藝類',
          product_list: [
            {
              id: 1,
              pic: '/img/product/prds-creative-01_藝術品系列.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pic: '/img/product/prds-creative-02_茶香水.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pic: '/img/product/prds-creative-03_木器公仔.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 4,
          name: '文創商品/食器類',
          product_list: [
            {
              id: 1,
              pic: '/img/product/prds-creative-food-01_食盒.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pic: '/img/product/prds-creative-food-02_沾板.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pic: '/img/product/prds-creative-food-03_木碗.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 5,
          name: '文創商品/文具類',
          product_list: [
            {
              id: 1,
              pic: '/img/product/prds-creative-tool-01_豬光寶器禮盒.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pic: '/img/product/prds-creative-tool-02_豬事順曆桌曆.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pic: '/img/product/prds-creative-tool-03_鼎曆筆筒.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
      ],
    }
  },
}
</script>
<style>
.title_product {
  text-align: left;
  border-bottom: 1px solid #dddddd;
  position: relative;
  color: #333333;
  margin-bottom: 2.5rem;
}
.title_product::after {
  content: '';
  border-bottom: 3px solid #b28146;
  width: 239px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
}
.title_product h1 {
  display: inline-block;
  margin: 0;
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 500;
}
.title_product .more {
  position: absolute;
  right: 0;
  bottom: 8px;
}
.title_product .more a {
  color: #7b94e8;
  font-size: 1rem;
  text-decoration: none;
}
.title_product .more a:hover {
  opacity: 0.8;
}

.product_section {
  margin-bottom: 3rem;
}
.prod-list .prod-title {
  font-size: 18px;
  color: #333333;
  padding-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.prod-list img {
  width: 100%;
}
.prod-list .prod-price {
  color: #b28146;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 15px;
}
</style>
