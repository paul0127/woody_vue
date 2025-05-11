<template>
  <div class="contain">
    <bread :bread_list="bread_list" :bigTitle_open="bigTitle_open"></bread>
    <!-- 產品列表內容開始 -->
    <div class="container">
      <div class="row">
        <sideMenu></sideMenu>
        <div class="col-xs-12 col-sm-9">
          <div class="prod-list-banner">
            <a href="#">
              <img
                class="img-responsive"
                src="@/assets/img/product/prds-banner-01.png"
              />
            </a>
          </div>
          <div class="product_section">
            <div class="title_product">
              <h1>{{ b_title.name }}/{{ productClass.name }}</h1>
            </div>
            <div class="row prod-list">
              <div
                class="col-xs-6 col-sm-4"
                v-for="i in productList"
                :key="i.id"
              >
                <router-link
                  :to="{ path: '/product/class_' + i.pc_code + '/' + i.id }"
                >
                  <img
                    class="prod-img img-responsive"
                    :src="require('@/assets' + i.pic_list[0].pic)"
                  />
                </router-link>
                <div class="prod-title">{{ i.name }}</div>
                <div class="prod-price">${{ i.price }}</div>
              </div>
            </div>
          </div>
          <pager
            :pager_total="pager_total"
            :now_page="nowpage"
            v-if="pager_total > 0"
          ></pager>
        </div>
      </div>
    </div>
    <!-- /產品列表內容結束 -->
  </div>
</template>
<script>
import { mapActions } from 'vuex'

import bread from '@/components/bread/bread.vue'
import sideMenu from '@/components/sideMenu/sideMenu.vue'
import pager from '@/components/pager/pager.vue'

export default {
  name: 'ProductSection',
  components: {
    bread,
    sideMenu,
    pager,
  },
  data() {
    return {
      bigTitle_open: false,
      nowpage: 1,
      allProducts: [],
      productList: [],
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '商品介紹', url: '/product' },
      ],
      classID: '',
      productClass: {
        name: '',
      },
    }
  },
  async mounted() {
    this.breadList()
  },
  computed: {
    b_title() {
      let side_list = this.$store.state.product.bigSideList
      let obj = side_list.find((item) => item.sub.includes(this.classID))

      return obj ? obj : { neme: '' }
    },
    row_count() {
      return this.$store.state.product.row_count
    },
    pager_total() {
      return Math.ceil(
        this.allProducts.filter((item) => item.pc_code == this.classID).length /
          this.row_count
      )
    },
  },
  methods: {
    ...mapActions(['productInit']),
    async init() {
      await this.productInit()

      this.allProducts = this.$store.state.product.all_product_list
      this.classID = Number(this.$route.params.classId)
      this.nowpage = this.$route.query.p ? Number(this.$route.query.p) : 1

      this.getProductList()
      this.getProductClass()
    },
    getProductList() {
      this.productList = this.allProducts
        .filter((item) => item.pc_code == this.classID)
        .slice(
          this.row_count * (this.nowpage - 1),
          this.row_count * this.nowpage
        )
    },
    getProductClass() {
      let allProductClass = this.$store.state.product.all_product_class
      this.productClass = allProductClass.find(
        (item) => item.id == this.classID
      )
    },
    breadList() {
      if (this.product_class) {
        this.bread_list.push({ id: 3, name: this.b_title.name, url: '#' })
        this.bread_list.push({
          id: 4,
          name: this.product_class?.name,
          url: '#',
        })
      }
    },
  },
  watch: {
    $route: {
      handler() {
        this.init()
      },
      immediate: true,
    },
  },
}
</script>
<style>
.prod-list-banner {
  margin-bottom: 2.5rem;
}
.prod-list-banner img {
  width: 100%;
}

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
