<template>
  <div id="app">
    <headerBlock></headerBlock>
    <router-view/>
    <footerBlock></footerBlock>
  </div>
</template>
<script>
  import headerBlock from './components/header/index.vue'
  import footerBlock from './components/footer/index.vue'
  export default {
  name: 'App',
  components: {
    headerBlock,
    footerBlock
  },
  data() {
    return {}
  },
}
</script>
<style>
html {
  font-size: 16px;
}
.contain {
  padding: 3rem 0;
}
</style>
