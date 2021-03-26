<template>
  <div class="header">
    <div class="container">
      <div class="header_inner">
        <logo></logo>
        <mainMenu :header_list="header_list"></mainMenu>
        <toolBar :cart_list="cart_list"></toolBar>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/components/header/element/logo.vue'
import mainMenu from '@/components/header/element/mainMenu.vue'
import toolBar from '@/components/header/element/toolBar.vue'

export default {
  name: 'headerBlock',
  props: [],
  components: {
    mainMenu,
    logo,
    toolBar,
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('get_products')
    this.$store.dispatch('get_cart')
  },
  computed: {
    header_list() {
      return this.$store.state.common.company.header_list
    },
    cart_list() {
      let cart = this.$store.state.common.cart
      let product = this.$store.state.product.product_list
      let list = []
      cart.forEach((item,index)=>{
        let p = product.find(l=>l.id==item.id)
        list[index] = {id:p.id,name:p.name,pc_code:p.pc_code,price:p.price,qty:item.qty}
      })
      return list
    },
  },
}
</script>

<style>
.header {
  background-color: #333333;
  position: relative;
}
.header_inner {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
</style>
