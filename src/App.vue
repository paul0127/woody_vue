<template>
  <div id="app">
    <headerBlock ></headerBlock>
  </div>
</template>

<script>
import headerBlock from './components/header/index.vue'

export default {
  name: 'App',
  components: {
    headerBlock,
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>
html{font-size: 16px;}
</style>
