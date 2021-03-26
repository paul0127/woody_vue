<template>
  <div class="pager_nav">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" @click="pager_arrow(-1)">&lt;&lt;</a>
        </li>
        <li
          class="page-item"
          :class="{ active: now_page == n }"
          v-for="n in pager_total"
          :key="n"
        >
          <router-link class="page-link" :to="{ query: { p: n } }">{{
            n
          }}</router-link>
        </li>
        <li class="page-item">
          <a class="page-link" @click="pager_arrow(1)">&gt;&gt;</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    pager_total: Number,
    now_page: Number,
  },
  computed: {},
  methods: {
    pager_arrow(c) {
      let query = this.$route.query.p ? Number(this.$route.query.p) : 1
      if ((c < 0 && query > 1) || (c > 0 && query < this.pager_total))
        this.$router.replace({ query: { p: query + c } })
    },
  },
  watch: {
    $route() {
      let query = this.$route.query.p ? Number(this.$route.query.p) : 1
      if (query > this.pager_total) {
        this.$router.replace({ query: { p: this.pager_total } })
      } else if (query < 1) {
        this.$router.replace({ query: { p: 1 } })
      }
    },
  },
}
</script>
<style scoped>
.pager_nav {
  display: flex;
  justify-content: center;
}
.pager_nav .pagination > li > a {
  color: #b28146;
  border-color: #b28146;
  outline: none;
  cursor: pointer;
}
.pager_nav .pagination > li.active > a {
  color: #fff;
  background-color: #b28146;
}
</style>
