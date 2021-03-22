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
  computed: {
    header_list() {
      return this.$store.state.common.header_list
    },
    cart_list() {
      return this.$store.state.common.cart_list
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
