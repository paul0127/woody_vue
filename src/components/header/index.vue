<template>
  <div class="header">
    <div class="container">
      <div class="top_main">
        <div class="mobile_nav" :class="{'active':menuStatus}" @click="mobileMenuToggle()">
          <span />
          <span />
          <span />
        </div>
        <mobileMenu :menuStatus="menuStatus" :header_list="header_list"/>
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
import mobileMenu from './element/mobileMenu.vue'

export default {
  name: 'headerBlock',
  props: [],
  components: {
    mainMenu,
    logo,
    toolBar,
    mobileMenu,
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
      let product = this.$store.state.product.all_product_list
      let list = []
      cart.forEach((item, index) => {
        let p = product.find((l) => l.id == item.id)
        list[index] = {
          id: p.id,
          name: p.name,
          pc_code: p.pc_code,
          price: p.price,
          qty: item.qty,
        }
      })
      return list
    },
    menuStatus(){
      return this.$store.state.common.menuToggle
    }
  },
  methods:{
    mobileMenuToggle(){
      this.$store.dispatch('mobileMenuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--top-bottom-background);
  position: relative;
  height: 70px;

  .top_main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .mobile_nav {
      display: none;
      width: 36px;
      cursor: pointer;

      span {
        display: flex;
        width: 100%;
        border-bottom: 1px solid var(--mobile-nav-color);
        transform-origin: left;
        transition-duration: 0.5s;
        margin-bottom: 12px;

        &:nth-child(1) {
          transform: scaleX(1);
        }
        &:nth-child(2) {
          transform: scaleX(0.66);
        }
        &:nth-child(3) {
          transform: scaleX(0.33);
          margin-bottom: 0;
        }
      }

      &:hover span {
        transform: scaleX(1);
      }

      &.active {
        span {
          &:nth-child(1) {
            transform: scaleX(1) rotate(45deg);
          }
          &:nth-child(2) {
            transform: scaleX(0);
          }
          &:nth-child(3) {
            transform: scaleX(1) rotate(-45deg);
          }
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .header .top_main .mobile_nav {
    display: block;
  }
}
</style>
