<template>
  <div>
    <sliderBlack></sliderBlack>
    <newsBlock></newsBlock>
  </div>
</template>

<script>
import sliderBlack from '@/components/slider/sliderBlock.vue'
import newsBlock from '@/components/news/newsBlock.vue'

export default {
  name: 'Home',
  components: {
    sliderBlack,
    newsBlock
  },
}
</script>
