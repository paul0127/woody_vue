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
  computed: {},
  data() {
    return {
      side_list: [
        {
          id: 1,
          name: '家俱',
          sub: [
            { id: 1, name: '日常' },
            { id: 2, name: '馨享' },
          ],
        },
        {
          id: 2,
          name: '文創商品',
          sub: [
            { id: 3, name: '工藝類' },
            { id: 4, name: '食器類' },
            { id: 5, name: '文具類' },
          ],
        },
        {
          id: 3,
          name: '個性化服務',
          sub: [{ id: 6, name: '個性化服務' }],
        },
      ],
    }
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
