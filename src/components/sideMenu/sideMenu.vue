<template>
  <ul class="side-menu">
    <li v-for="item in side_list" :key="item.id">
      <a href="javascript:(0)">{{ item.name }}</a>
      <ul class="side-menu-child">
        <li v-for="i in item.sub" :key="i.id">
          <router-link :to="{ path: '/product/class_' + i.id }">{{
            i.name
          }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {
    side_list() {
      return this.$store.getters.side_list
    },
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
