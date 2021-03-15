<template>
  <div class="pager_nav">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">&lt;&lt;</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">&gt;&gt;</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    bread_list: Array,
  },
  computed: {
    
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
}
.pager_nav .pagination > li.active > a {
  color: #fff;
  background-color: #b28146;
}
</style>
