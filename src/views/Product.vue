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
                <router-link :to="{ path: '/product/class_' + item.id }"
                  >更多商品 +</router-link
                >
              </div>
            </div>
            <div class="row prod-list">
              <div
                class="col-xs-6 col-sm-4"
                v-for="i in item.product_list"
                :key="i.id"
              >
                <router-link
                  :to="{ path: '/product/class_' + i.pc_code + '/' + i.id }"
                >
                  <img
                    class="prod-img img-responsive"
                    :src="require('@/assets' + i.pic)"
                  />
                </router-link>
                <div class="prod-title">{{ i.name }}</div>
                <div class="prod-price">${{ i.price }}</div>
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
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '商品介紹', url: '#' },
      ],
      bigTitle_open: false,
    }
  },
  computed: {
    product_section(){
      return this.$store.state.product.product_section
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
