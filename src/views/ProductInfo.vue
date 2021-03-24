<template>
  <div class="contain">
    <bread :bread_list="bread_list" :bigTitle_open="bigTitle_open"></bread>
    <!-- 產品內頁內容開始 -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3 hidden-xs">
          <sideMenu></sideMenu>
        </div>
        <div class="col-xs-12 col-sm-9">
          <div class="product_info">
            <div class="product_top">
              <div class="product_pic">
                <img
                  class="main_pic"
                  :src="
                    main_pic
                      ? require('@/assets' + main_pic)
                      : require('@/assets' + product_info.pic_list[0].pic)
                  "
                />
                <ul class="small_pic">
                  <!--data-img 需要放顯示的大圖-->
                  <li
                    :class="{ active: index == choose_pic }"
                    v-for="(pic, index) in product_info.pic_list"
                    :key="pic.id"
                    :style="{
                      backgroundImage:
                        'url(' + require('@/assets' + pic.pic) + ')',
                    }"
                    @click="choosePic(index)"
                  ></li>
                </ul>
              </div>
              <div class="product_text">
                <div class="share">
                  <div class="share_icon" id="fbshare">
                    <img src="@/assets/img/product/facebook.svg" />分享
                  </div>
                </div>
                <h1>{{ product_info.name }}</h1>
                <div class="desc" v-html="product_info.desc"></div>
                <div class="price">原價 ${{ product_info.price }}</div>
                <div class="purchase">
                  <div class="qty">
                    <button class="minus" @click="select_qty(-1)">
                      <img src="@/assets/img/product/minus.svg" />
                    </button>
                    <input type="number" v-model="qty" min="1" max="10" />
                    <button class="plus" @click="select_qty(1)">
                      <img src="@/assets/img/product/plus.svg" />
                    </button>
                  </div>
                  <div class="btn" @click="add_cart()">加入購物車</div>
                </div>
              </div>
            </div>
            <div class="product_desc">
              <ul class="tab_nav">
                <li :class="{ active: now_tab == 0 }" @click="tabs_check(0)">
                  商品介紹
                </li>
                <li :class="{ active: now_tab == 1 }" @click="tabs_check(1)">
                  商品規格
                </li>
              </ul>
              <div class="tab_panel" :class="{ active: now_tab == 0 }">
                <div class="editor" v-html="product_info.content"></div>
              </div>
              <div
                class="tab_panel"
                :class="{ active: now_tab == 1 }"
                v-html="product_info.format"
              ></div>
            </div>
            <div class="relation">
              <div class="title_product">
                <h1>推薦商品</h1>
              </div>
              <div class="row prod-list">
                <div class="col-xs-6 col-sm-4">
                  <a href="#">
                    <img
                      class="prod-img img-responsive"
                      src="@/assets/img/product/木質筆.png"
                    />
                  </a>
                  <div class="prod-title">【遊思】木質筆</div>
                  <div class="prod-price">$3999</div>
                </div>
                <div class="col-xs-6 col-sm-4">
                  <a href="#">
                    <img
                      class="prod-img img-responsive"
                      src="@/assets/img/product/鑰匙圈.png"
                    />
                  </a>
                  <div class="prod-title">【鎖護(守護)】鑰匙圏</div>
                  <div class="prod-price">$8500</div>
                </div>
                <div class="col-xs-6 col-sm-4">
                  <a href="#">
                    <img
                      class="prod-img img-responsive"
                      src="@/assets/img/product/筆筒.png"
                    />
                  </a>
                  <div class="prod-title">【鼎暦】筆筒</div>
                  <div class="prod-price">$8500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /產品內頁內容結束 -->
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'
import sideMenu from '@/components/sideMenu/sideMenu.vue'

export default {
  name: 'ProductInfo',
  components: {
    bread,
    sideMenu,
  },
  data() {
    return {
      bigTitle_open: false,
      main_pic: '',
      choose_pic: 0,
      now_tab: 0,
      qty: 1,
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '商品專區', url: '#' },
        { id: 3, name: '文創商品', url: '#' },
        { id: 4, name: '文具類', url: '#' },
        { id: 5, name: '【窗語】隨身碟', url: '#' },
      ],
    }
  },
  mounted() {
    this.$store.dispatch('get_products')
    this.$store.dispatch('get_productClass')
  },
  computed: {
    product_info() {
      let id = this.$route.params.id
      let info = this.$store.getters.pro_info(id)

      return info
    },
  },
  methods: {
    choosePic(index) {
      this.choose_pic = index
      this.main_pic = this.product_info.pic_list[index].pic
    },
    tabs_check(c) {
      this.now_tab = c
    },
    select_qty(d) {
      if (d > 0 || this.qty > 1) this.qty = this.qty + d
    },
    add_cart() {
      let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
      let item = cart.find(i=>i.id==this.product_info.id)
      if(item){
        item.qty = item.qty + this.qty
      }else{
        cart.push({id:this.product_info.id,qty:this.qty})
      }
      localStorage.setItem('cart',JSON.stringify(cart))
      this.$store.dispatch('get_cart')
      alert('加入購物車')
    },
  },
}
</script>
<style>
.product_top {
  display: flex;
  margin-bottom: 3rem;
}

.product_top .product_pic {
  width: 409px;
  margin-right: 1rem;
}
.product_top .product_pic img {
  width: 100%;
  margin-bottom: 1.25rem;
}
.product_top ul.small_pic {
  list-style: none;
  padding-left: 0;
  display: flex;
  width: 100%;
}
.product_top ul.small_pic li {
  width: 22%;
  margin-right: 4%;
  cursor: pointer;
  background-size: cover;
  padding-bottom: 23%;
  border: 2px solid #fff;
}
.product_top ul.small_pic li.active {
  border: 2px solid #333;
}
.product_top ul.small_pic li:last-child {
  margin-right: 0;
}

.product_top .product_text {
  flex: 1;
}
.product_text .share {
  display: flex;
  justify-content: flex-end;
}
.product_text .share .share_icon {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}
.product_text .share .share_icon img {
  margin-right: 5px;
}
.product_text h1 {
  font-size: 1.5rem;
}
.product_text .desc {
  background-color: #eeeeee;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}
.product_text .price {
  color: #b28146;
  font-size: 1.15rem;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
}

.purchase {
  display: flex;
  justify-content: space-between;
}
.purchase .qty {
  display: flex;
  width: 156px;
}
.purchase .qty .minus,
.purchase .qty .plus {
  border: 1px solid #dddddd;
  background-color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
}
.purchase .qty .minus:hover,
.purchase .qty .plus:hover {
  background-color: #ccc;
}
.purchase .qty .minus {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
}
.purchase .qty .plus {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: none;
}
.purchase .qty input {
  width: calc(100% - 64px);
  border: 1px solid #dddddd;
  height: 32px;
  padding: 5px;
  border-radius: 0;
  outline: none;
}
.purchase .btn {
  background-color: #ff0000;
  color: #fff;
  width: 154px;
}

.product_desc ul.tab_nav {
  list-style: none;
  padding-left: 0;
  display: flex;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 1rem;
}
.product_desc ul.tab_nav li {
  position: relative;
  font-size: 1.5rem;
  margin-right: 1.25rem;
  color: #dddddd;
  line-height: 2;
  cursor: pointer;
}
.product_desc ul.tab_nav li.active {
  color: #333333;
}
.product_desc ul.tab_nav li.active::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  border-bottom: 3px solid #b28146;
  transform: translateY(50%);
}
.product_desc .tab_panel {
  display: none;
  padding: 1rem 0;
}
.product_desc .tab_panel.active {
  display: block;
}

.title_product {
  text-align: left;
  border-bottom: 1px solid #dddddd;
  position: relative;
  color: var(--text-black-color);
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
  color: var(--text-blue-color);
  font-size: 1rem;
  text-decoration: none;
}
.title_product .more a:hover {
  opacity: 0.8;
}

.relation {
  margin-top: 2rem;
}
.relation .title_product {
  margin-bottom: 2.5rem;
}
.relation .title_product h1 {
  position: relative;
  font-size: 1.5rem;
}
.relation .title_product h1::after {
  content: '';
  border-bottom: 3px solid #b28146;
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
}
.relation .title_product::after {
  display: none;
}

.prod-list .prod-title {
  font-size: 18px;
  color: var(--text-black-color);
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
