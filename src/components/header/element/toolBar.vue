<template>
  <ul class="tool_bar">
    <li class="login_btn"><a href="#">登入</a></li>
    <li class="user_btn sub" :class="{ active: user_sub_open }">
      <a @click="user_open"><img src="img/user.svg"/></a>
      <div class="sub_menu">
        <ul>
          <li><a href="#">會員資料</a></li>
          <li><a href="#">購物須知</a></li>
          <li><a href="#">訂單查詢</a></li>
        </ul>
      </div>
    </li>
    <li class="cart_btn sub" :class="{ active: cart_sub_open }">
      <a @click="cart_open"><img src="img/icon-cart.svg" /><span>0</span></a>
      <div class="sub_menu">
        <ul>
          <li v-for="item in cartList" :key="item.id">
            <div class="name">{{ item.name }}</div>
            <div class="price">{{ item.priceText }}</div>
          </li>
        </ul>
        <div class="total">總計 {{ cart_total.text }}</div>
        <div class="cart_in_btn"><a href="#">立即結帳</a></div>
      </div>
    </li>
    <li class="search_btn">
      <a @click="search_open">
        <img src="img/icon-search.png" />
      </a>
      <div class="search_bar" :class="{ active: search_sub_open }">
        <div class="container">
          <form class="search_inner" action="/search" method="get">
            <input type="text" name="search" placeholder="請輸入關鍵字" />
            <button>搜尋</button>
          </form>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cart_list: Array,
  },
  data() {
    return {
      user_sub_open: 0,
      cart_sub_open: 0,
      search_sub_open: 0,
    }
  },
  computed: {
    cartList() {
      return this.cart_list.map((c) => {
        c.price = Number(c.price)
        c.priceText = new Intl.NumberFormat().format(c.price)
        return c
      })
    },
    cart_total() {
      let total = 0
      let data = []
      this.cartList.forEach((c) => {
        total = total + c.price
      })
      data['price'] = total
      data['text'] = new Intl.NumberFormat().format(total)
      return data
    },
  },
  methods: {
    user_open() {
      this.user_sub_open = !this.user_sub_open
      this.cart_sub_open = 0
      this.search_sub_open = 0
    },
    cart_open() {
      this.cart_sub_open = !this.cart_sub_open
      this.user_sub_open = 0
      this.search_sub_open = 0
    },
    search_open() {
      this.search_sub_open = !this.search_sub_open
      this.cart_sub_open = 0
      this.user_sub_open = 0
    },
  },
}
</script>

<style>
ul.tool_bar {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  display: flex;
}
ul.tool_bar > li {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0.75rem;
  margin-right: 0.75rem;
}
ul.tool_bar > li > a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
}
ul.tool_bar > li.sub.active {
  background-color: #555555;
}
ul.tool_bar > li.sub > a::after {
  content: url(/img/caret-down.svg);
  margin: 0 0 0 0.5rem;
  display: block;
  transform: translateY(-3px);
}
ul.tool_bar > li > a:hover {
  opacity: 0.8;
}
ul.tool_bar > li > .sub_menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 6;
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  transition-duration: 0.5s;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 0.5);
}
ul.tool_bar > li.active > .sub_menu {
  transform: scaleY(1);
}
ul.tool_bar > li.cart_btn > a > span {
  width: 21px;
  height: 21px;
  background-color: #858585;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  border-radius: 100%;
  font-size: 14px;
}

ul.tool_bar > li.user_btn > .sub_menu {
  width: 150px;
}
ul.tool_bar > li.user_btn > .sub_menu > ul {
  list-style: none;
  padding-left: 0;
}
ul.tool_bar > li.user_btn > .sub_menu > ul > li > a {
  display: block;
  color: #555555;
  text-decoration: none;
  padding: 0.9rem 0;
  text-align: center;
}
ul.tool_bar > li.user_btn > .sub_menu > ul > li > a:hover {
  background-color: #b28146;
  color: #fff;
}

ul.tool_bar > li.cart_btn > .sub_menu {
  width: 400px;
}
ul.tool_bar > li.cart_btn > .sub_menu > ul {
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid #dddddd;
}
ul.tool_bar > li.cart_btn > .sub_menu > ul > li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  line-height: 1.5;
}
ul.tool_bar > li.cart_btn > .sub_menu > .total {
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1.25rem;
  border-bottom: 1px solid #dddddd;
}
ul.tool_bar > li.cart_btn > .sub_menu > .cart_in_btn {
  padding: 0.5rem 1.25rem;
}
ul.tool_bar > li.cart_btn > .sub_menu > .cart_in_btn > a {
  background-color: #e14344;
  color: #fff;
  display: block;
  width: 100%;
  padding: 5px 0;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
}
ul.tool_bar > li.cart_btn > .sub_menu > .cart_in_btn > a:hover {
  opacity: 0.8;
}

ul.tool_bar > li.search_btn {
  position: unset;
}
.search_bar {
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  z-index: 6;
  background-color: #555555;
  padding: 1rem 0;
  transform: scaleY(0);
  transition-duration: 0.3s;
  transform-origin: top;
}
.search_bar.active {
  transform: scaleY(1);
}
.search_bar .search_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search_bar .search_inner input {
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  width: calc(100% - 105px);
  line-height: 38px;
}
.search_bar .search_inner button {
  background-color: #b28146;
  color: #fff;
  outline: none;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 1.25rem;
}
.search_bar .search_inner button:hover {
  opacity: 0.8;
}
</style>
