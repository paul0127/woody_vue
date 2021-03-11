<template>
  <div id="app">
    <headerBlock></headerBlock>
    <router-view/>
  </div>
</template>
<script>
  import headerBlock from './components/header/index.vue'
  export default {
  name: 'App',
  components: {
    headerBlock,
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
