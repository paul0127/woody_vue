<template>
  <ul class="tool_bar">
    <li class="login_btn"><a href="#">登入</a></li>
    <li class="user_btn sub">
      <a href="javascript:void(0)"><img src="img/user.svg"/></a>
      <div class="sub_menu">
        <ul>
          <li><a href="member.html">會員資料</a></li>
          <li><a href="policy.html">購物須知</a></li>
          <li><a href="member_order.html">訂單查詢</a></li>
        </ul>
      </div>
    </li>
    <li class="cart_btn sub">
      <a href="javascript:void(0)"
        ><img src="img/icon-cart.svg" /><span>0</span></a
      >
      <div class="sub_menu">
        <ul>
          <li>
            <div class="name">商品名稱</div>
            <div class="price">$8,320</div>
          </li>
          <li>
            <div class="name">商品名稱</div>
            <div class="price">$8,320</div>
          </li>
        </ul>
        <div class="total">總計 $8,320</div>
        <div class="cart_in_btn"><a href="cart.html">立即結帳</a></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style>
ul.tool_bar {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  display: flex;
}
ul.tool_bar li {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0.75rem;
  margin-right: 0.75rem;
}
ul.tool_bar li a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
}
ul.tool_bar > li.sub > a::after {
  content: url(/img/caret-down.svg);
  margin: 0 0 0 0.5rem;
  display: block;
  transform: translateY(-3px);
}
ul.tool_bar li a:hover {
  opacity: 0.8;
}
ul.tool_bar li .sub_menu {
  position: absolute;
  z-index: 7;
  top: 100%;
  right: 0;
  padding-left: 0;
  list-style: none;
  transform-origin: top;
  transform: scaleY(0);
}
</style>
