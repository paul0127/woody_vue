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
    return {
      header_list: [
        {
          id: 1,
          name: '關於我們',
          url: '#',
          sub: [
            { id: 5, name: '品牌介紹', url: '/Brand' },
            { id: 6, name: '工藝師專區', url: '#' },
            { id: 7, name: '企業服務', url: '#' },
          ],
        },
        { id: 2, name: '最新消息', url: '#', sub: [] },
        { id: 3, name: '商品介紹', url: '#', sub: [] },
        { id: 4, name: '據點', url: '#', sub: [] },
      ],
      cart_list: [
        { id: 1, name: '商品名稱1', price: 1230 },
        { id: 2, name: '商品名稱2', price: 2320 },
        { id: 3, name: '商品名稱3', price: 3330 },
        { id: 4, name: '商品名稱4', price: 4350 },
      ],
    }
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
