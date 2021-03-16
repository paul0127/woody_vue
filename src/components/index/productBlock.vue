<template>
  <section class="products_block">
    <div class="container">
      <!--大標題-->
      <div class="title_index">
        <h1>{{product_info.name}}<span>|</span>{{product_info.ename}}</h1>
        <div class="more"><router-link :to="{ path: '/product/class_'+product_info.id }">更多商品 +</router-link></div>
      </div>
      <!--產品條列-->
      <div class="list row">
        <div
          class="col-md-3 col-sm-6 col-xs-6"
          v-for="item in product_list"
          :key="item.id"
        >
          <router-link class="item" :to="{ path: '/product/class_'+item.pc_code+'/'+item.id }">
            <div
              class="img"
              :style="{ backgroundImage: 'url(' + require('@/assets' + item.pic) + ')' }"
            ></div>
            <div class="title">{{ item.name }}</div>
            <div class="price"><span>$</span>{{item.price}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { product_info: Object, product_list: Array },
  data() {
    return {}
  },
}
</script>

<style>
.products_block {
  padding-top: 6rem;
}
.products_block .list {
  margin-top: 2.5rem;
}
.products_block .list .item {
  margin-bottom: 2.5rem;
  text-decoration: none;
  display: block;
}
.products_block .list .item .img {
  padding-bottom: 100%;
  background-size: 100%;
  background-position: center center;
  margin-bottom: 10px;
  transition: background 0.5s;
}
.products_block .list .item .img:hover {
  background-size: 120%;
}
.products_block .list .item .title {
  color: #333333;
  font-size: 1.15rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.products_block .list .item .title:hover {
  opacity: 0.8;
}
.products_block .list .item .price {
  color: #b28146;
  font-size: 1.15rem;
}
</style>
