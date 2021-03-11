<template>
  <ul class="main_menu">
    <li v-for="item in header_list" :key="item.id">
      <a :href="item.url">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'mainMenu',
  props: {
    header_list: Array,
  },
}
</script>

<style>
ul.main_menu {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin-bottom: 0;
}
ul.main_menu li {
  margin-right: 1.25rem;
  height: 100%;
  display: flex;align-items: center;
}
ul.main_menu li a{color: #fff;text-decoration: none;}
ul.main_menu li a:hover{opacity: .8;}
</style>
