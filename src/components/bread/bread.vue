<template>
  <div class="container">
    <div class="bread">
      <ul>
        <li><a href="#">首頁</a></li>
        <li><a href="#">關於我們</a></li>
        <li>品牌介紹</li>
      </ul>
    </div>
    <div class="b_title">品牌介紹<span>|</span>Brand</div>
  </div>
</template>
<style scoped>
.bread {
  margin-bottom: 1rem;
}
.bread ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}
.bread ul li {
  font-size: 1.1rem;
  color: #999999;
  display: inline;
}
.bread ul li a {
  color: #7b94e8;
  text-decoration: none;
}
.bread ul li a:hover {
  opacity: 0.8;
}
.bread ul li::before {
  content: '/';
  margin: 0 5px;
  color: #dddddd;
}
.bread ul li:first-child::before {
  display: none;
}

.b_title {
  color: #333333;
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  line-height: 2;
  margin-bottom: 3rem;
}
.b_title span {
  margin: 0 5px;
  font-weight: 300;
}
.b_title::after {
  content: '';
  border-bottom: 3px solid #b28146;
  display: block;
  position: absolute;
  width: 282px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,50%);
}
</style>
