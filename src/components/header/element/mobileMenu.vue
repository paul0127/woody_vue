<template>
  <div class="mobile_menu" :class="{ active: menuStatus }">
    <div class="main">
      <ul>
        <li
          v-for="item in header_list"
          :key="item.id"
          :class="{ sub: item.sub.length !== 0 }"
        >
          <template v-if="item.sub.length == 0">
            <router-link :to="{ path: item.url }">{{ item.name }}</router-link>
          </template>
          <template v-else>
            <a @click="subToggle($event)">{{ item.name }}</a>
          </template>
          <div class="sub_menu">
            <ul>
              <li v-for="sub in item.sub" :key="sub.id">
                <router-link :to="{ path: sub.url }">{{
                  sub.name
                }}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li class="login_btn">
          <a href="login.html">登入</a>
        </li>
        <li class="user_btn sub" :class="{'active':bottomSub=='user_btn'}">
          <a @click="bottomSubToggle('user_btn')"><img src="@/assets/img/user.svg"/></a>
          <div class="_sub_menu">
            <ul>
              <li><a href="member.html">會員資料</a></li>
              <li><a href="policy.html">購物須知</a></li>
              <li><a href="member_order.html">訂單查詢</a></li>
            </ul>
          </div>
        </li>
        <li class="cart_btn sub" :class="{'active':bottomSub=='cart_btn'}">
          <a @click="bottomSubToggle('cart_btn')"
            ><img src="@/assets/img/icon-cart.svg" /><span>0</span></a
          >
          <div class="_sub_menu">
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'mobileMenu',
  props: {
    menuStatus: {
      type: Boolean,
      default: false,
    },
    header_list: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return {
      bottomSub:''
    }
  },
  methods: {
    subToggle(event) {
      event.target.parentNode.classList.toggle('active')
    },
    bottomSubToggle(sub){
      if(this.bottomSub == sub){
        this.bottomSub = ''
      }else{
        this.bottomSub = sub
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.mobile_menu {
  position: absolute;
  width: 100%;
  background-color: var(--sub-nav-background);
  top: 100%;
  left: 0;
  z-index: 7;
  padding: 1.9rem 1.5rem 0;
  transform: scaleY(0);
  transform-origin: top;
  transition-duration: 0.5s;
  display: none;

  &.active {
    transform: scaleY(1);
  }

  .main {
    ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;

      li {
        font-size: 1.15rem;
        margin-bottom: 1.5rem;

        a {
          color: var(--text-white-color);
          text-decoration: none;
          display: flex;
          align-items: center;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        }

        &.sub > a::after {
          content: url(../../../assets/img/caret-down.svg);
          margin: 0 0 0.4rem 0.5rem;
          display: block;
        }

        .sub_menu {
          display: none;

          & > ul {
            margin-left: 1.25rem;
            margin-top: 1rem;

            li a {
              text-decoration: none;

              &:hover {
                opacity: 0.8;
              }
            }
          }
        }

        &.active > .sub_menu {
          display: block;
        }
      }
    }
  }

  .bottom {
    margin-top: 2.5rem;
    border-top: 1px solid var(--text-white-color);

    > ul {
      list-style: none;
      padding-left: 0;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;

      > li {
        flex: 1;
        text-align: center;
        font-size: 1.15rem;
        cursor: pointer;

        &.sub {
          &.active {
            background-color: var(--mobile-button-active-background);
            ._sub_menu {
              transform: scaleY(1);
              z-index: 7;
            }
          }
          > a::after {
            content: url(../../../assets/img/caret-down.svg);
            margin: 0 0 0.4rem 0.5rem;
            display: block;
          }
        }

        > a {
          color: var(--text-white-color);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 0;

          &:hover {
            opacity: 0.8;
          }
        }

        &.user_btn ._sub_menu ul li {
          line-height: 2;
          a {
            color: var(--text-white-color);
            display: block;
            text-decoration: none;
            font-size: 1.25rem;

            &:hover {
              background-color: var(--button-background);
            }
          }
        }

        &.cart_btn ._sub_menu ul {
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--text-white-color);

          li {
            display: flex;
            justify-content: space-between;
            color: var(--text-white-color);
            line-height: 2;
          }
        }

        ._sub_menu {
          position: absolute;
          left: 0;
          top: 100%;
          transform: scaleY(0);
          transform-origin: top;
          transition-duration: 0.5s;
          background-color: var(--sub-nav-background);
          width: 100%;
          padding: 1rem 1.5rem;

          ul {
            list-style: none;
            padding-left: 0;

          }

          .total {
            display: flex;
            justify-content: flex-end;
            color: var(--text-white-color);
            line-height: 2;
            border-bottom: 1px solid var(--text-white-color);
            padding: 0.5rem 0;
          }

          .cart_in_btn {
            background-color: var(--cart-button-background);
            margin-top: 1rem;

            a {
              color: var(--text-white-color);
              text-decoration: none;
              padding: 0.5rem 0;
              display: block;
            }
          }
        }

        &.active > .sub_menu {
          transform: scaleY(1);
          z-index: 7;
        }

        &.cart_btn > a > span {
          width: 21px;
          height: 21px;
          background-color: var(--cart-qty-background);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 6px;
          border-radius: 100%;
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .mobile_menu {
    display: block;
  }
}
</style>
