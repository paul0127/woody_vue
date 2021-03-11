<template>
  <ul class="main_menu">
    <li
      v-for="item in header_list"
      :key="item.id"
      :class="{ sub: item.sub.length !== 0 }"
    >
      <router-link :to="{ path: item.url }">{{ item.name }}</router-link>
      <div class="sub_menu" v-if="item.sub.length !== 0">
        <ul>
          <li v-for="sub in item.sub" :key="sub.id">
            <router-link :to="{ path: sub.url }">{{ sub.name }}</router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'mainMenu',
  props: {
    header_list: Array,
  },
  computed: {},
}
</script>

<style>
ul.main_menu {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin-bottom: 0;
}
ul.main_menu > li {
  margin-right: 1.25rem;
  height: 100%;
  display: flex;
  align-items: center;
}
ul.main_menu > li > a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
}
ul.main_menu > li > a:hover {
  opacity: 0.8;
}
ul.main_menu > li.sub > a::after {
  content: url(/img/caret-down.svg);
  margin: 0 0 0 0.5rem;
  display: block;
  transform: translateY(-3px);
}
ul.main_menu > li.sub > div.sub_menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 8;
  width: 100%;
  background-color: #555555;
  padding: 1.5rem 0;
  transform: scaleY(0);
  transition-duration: 0.3s;
  transform-origin: top;
}
ul.main_menu > li.sub > div.sub_menu > ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  max-width: 770px;
  margin: 0 auto;
}
ul.main_menu > li.sub > div.sub_menu > ul > li {
  flex: 0 0 33.3%;
}
ul.main_menu > li.sub > div.sub_menu > ul > li > a {
  color: #fff;
  font-size: 1.15rem;
  text-decoration: none;
}
ul.main_menu > li.sub > div.sub_menu > ul > li > a:hover {
  opacity: 0.8;
}

ul.main_menu > li:hover > div.sub_menu {
  transform: scaleY(1);
}
</style>
