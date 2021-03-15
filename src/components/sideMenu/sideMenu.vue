<template>
  <ul class="side-menu">
    <li>
      <a href="javascript:(0)">家俱</a>
      <ul class="side-menu-child">
        <li>
          <a href="product_list.html">日常</a>
        </li>
        <li>
          <a href="product_list.html">馨享</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:(0)">文創商品</a>
      <ul class="side-menu-child">
        <li>
          <a href="product_list.html">工藝類</a>
        </li>
        <li>
          <a href="product_list.html">食器類</a>
        </li>
        <li>
          <a href="product_list.html">文具類</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:(0)">個性化服務</a>
      <ul class="side-menu-child">
        <li>
          <a href="product_list.html">個性化服務</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
  },
  computed: {
  },
}
</script>
<style scoped>
.side-menu,
.side-menu-child,
.side-menu li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: block;
}
.side-menu > li {
  display: block;
  margin-bottom: 15px;
}
.side-menu > li > a {
  display: block;
  padding: 10px 15px;
  background: #b28146;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
}
.side-menu-child > li > a {
  display: block;
  padding: 10px 15px;
  font-size: 15px;
  color: #555555;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
}
.side-menu-child > li > a:hover {
  background: #f2f2f2;
  text-decoration: none;
}
</style>
