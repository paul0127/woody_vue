<template>
  <footer>
    <div class="container">
      <div class="footer_content">
        <div class="footer_logo">
          <router-link :to="{ path: '/' }"
            ><img :src="require('@/assets' + info.footer_logo)"
          /></router-link>
        </div>
        <div class="footer_link">
          <ul>
            <li v-for="item in footer_list" :key="item.id">
              <router-link :to="{ path: item.url }">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="footer_bottom">
          <div class="contact">
            <div>聯絡電話：{{ info.tel }}</div>
            <div>營業時間：{{ info.open_day }}</div>
          </div>
          <div class="social">
            <ul>
              <li>
                <a target="_blank" :href="info.pinkoi_url"
                  ><img src="@/assets/img/img-pinkoi-white.png"
                /></a>
              </li>
              <li>
                <a target="_blank" :href="info.fb_url"
                  ><img src="@/assets/img/icon-facebook.svg"
                /></a>
              </li>
              <li>
                <a target="_blank" :href="info.ig_url"
                  ><img src="@/assets/img/icon-instagram.svg"
                /></a>
              </li>
              <li>
                <a target="_blank" :href="info.line_url"
                  ><img src="@/assets/img/icon-line.svg"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">Copyright @2005 - 2020青木堂傢具有限公司</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    info() {
      return this.$store.state.footer.info
    },
    footer_list() {
      return this.$store.state.footer.footer_list
    },
  },
}
</script>

<style>
footer {
  background-color: #333333;
  padding: 2.5rem 0;
}
footer .footer_logo {
  width: 249px;
}
footer .footer_logo a {
  display: block;
}
footer .footer_logo a:hover {
  opacity: 0.8;
}

footer .footer_content {
  padding: 0 3rem;
}
footer .footer_link {
  margin-top: 4.5rem;
}
footer .footer_link ul {
  display: flex;
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
}
footer .footer_link ul li {
  font-size: 1.25rem;
}
footer .footer_link ul li::after {
  content: '';
  padding-right: 3rem;
  margin-right: 3rem;
  border-right: 1px solid #fff;
}
footer .footer_link ul li:last-child::after {
  display: none;
}
footer .footer_link ul li a {
  color: #fff;
  text-decoration: none;
}
footer .footer_link ul li a:hover {
  opacity: 0.8;
}

footer .footer_bottom {
  display: flex;
  margin-top: 4.5rem;
}
footer .footer_bottom .contact {
  color: #fff;
  flex: 1;
  font-size: 1.25rem;
  line-height: 2;
}
footer .footer_bottom .contact a {
  text-decoration: none;
}
footer .footer_bottom .social {
  flex: 1;
}
footer .footer_bottom .social ul {
  padding-left: 0;
  list-style: none;
  display: flex;
}
footer .footer_bottom .social ul li {
  margin-right: 2.5rem;
}
footer .footer_bottom .social ul li a:hover {
  opacity: 0.8;
}
footer .copyright {
  color: #999999;
  font-size: 1.25rem;
  margin-top: 4.5rem;
}
</style>
