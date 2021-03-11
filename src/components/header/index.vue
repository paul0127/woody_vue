<template>
  <div class="header">
    <div class="container">
      <div class="header_inner">
        <logo></logo>
        <mainMenu :header_list="header_list"></mainMenu>
        <toolBar></toolBar>
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
    toolBar
  },
  data() {
    return {
      header_list: [
        { id: 1, name: '關於我們', url: '#' },
        { id: 2, name: '最新消息', url: '#' },
        { id: 3, name: '商品介紹', url: '#' },
        { id: 4, name: '據點', url: '#' },
      ],
    }
  },
}
</script>

<style>
.header{background-color: #333333;}
.header_inner{display: flex;align-items: stretch;justify-content: space-between;}
</style>
