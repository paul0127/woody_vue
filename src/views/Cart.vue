<template>
  <div class="contain">
    <bread :bread_list="bread_list" :bigTitle_open="bigTitle_open"></bread>
    <div class="container">
      <div class="stepwizard">
        <div class="stepwizard-row">
          <div class="stepwizard-step active">
            <a class="btn btn-default btn-circle">1</a>
            <p>購物清單</p>
          </div>
          <div class="stepwizard-step">
            <a class="btn btn-default btn-circle">2</a>
            <p>配送資訊</p>
          </div>
          <div class="stepwizard-step">
            <a class="btn btn-default btn-circle">3</a>
            <p>付款資訊</p>
          </div>
          <div class="stepwizard-step">
            <a class="btn btn-default btn-circle">4</a>
            <p>完成訂單</p>
          </div>
        </div>
      </div>

      <div class="page-heading">
        <span class="page-heading-title">訂購資訊</span>
      </div>

      <div class="form_box">
        <div class="table_head">
          <div class="tr">
            <div class="th img">商品圖片</div>
            <div class="th">商品名稱</div>
            <div class="th price">單價</div>
            <div class="th qty">數量</div>
            <div class="th p_total">小計</div>
            <div class="th operate"></div>
          </div>
        </div>

        <!-- 列表內容 -->
        <div class="table_body">
          <div class="tr" v-for="item in cart_list" :key="item.id">
            <div class="td img">
              <img
                class="img-responsive"
                :src="require('@/assets' + item.pic)"
              />
            </div>
            <div class="td">
              <router-link
                :to="{ path: '/product/class_' + item.pc_code + '/' + item.id }"
                >{{ item.name }}</router-link
              >
            </div>
            <div class="td price">${{ item.priceText }}</div>
            <div class="td qty">
              <div class="qty_input">
                <button type="button" @click="select_qty(item.id, -1)">
                  -
                </button>
                <input
                  type="number"
                  placeholder="數量"
                  readonly
                  v-model="item.qty"
                />
                <button type="button" @click="select_qty(item.id, 1)">
                  +
                </button>
              </div>
            </div>
            <div class="td p_total">${{ item.p_totalText }}</div>
            <div class="td operate">
              <a class="operate_btn" @click="pro_delete(item.id)">移除</a>
            </div>
          </div>
        </div>

        <hr />
        <div class="table_foot">
          <div class="tr">
            <div class="td img"></div>
            <div class="td"></div>
            <div class="td price"></div>
            <div class="td qty">價格小計</div>
            <div class="td p_total">${{ m_total.text }}</div>
            <div class="td operate"></div>
          </div>
          <div class="tr">
            <div class="td img"></div>
            <div class="td"></div>
            <div class="td price"></div>
            <div class="td qty">運費(金額大於{{ turnout }}免運費)</div>
            <div class="td p_total">${{ cart_total.fare }}</div>
            <div class="td operate"></div>
          </div>
          <div class="tr">
            <div class="td img"></div>
            <div class="td"></div>
            <div class="td price"></div>
            <div class="td qty">總計</div>
            <div class="td p_total">${{ cart_total.text }}</div>
            <div class="td operate"></div>
          </div>
        </div>
      </div>
      <div class="cart_bottom">
        <router-link class="btn" :to="{ path: '/' }"
          ><i class="fa fa-angle-double-left" aria-hidden="true"></i>
          繼續購物</router-link
        >
        <router-link class="btn" :to="{ path: '/pay' }"
          >下一步 <i class="fa fa-angle-double-right" aria-hidden="true"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'
export default {
  name: 'Cart',
  components: {
    bread,
  },
  data() {
    return {
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '購物車', url: '#' },
      ],
      bigTitle_open: false,
      fare: 500,
      turnout: 2000,
    }
  },
  computed: {
    cart_list() {
      let cart = this.$store.state.common.cart
      let product = this.$store.state.product.all_product_list
      let list = []
      cart.forEach((item, index) => {
        let p = product.find((l) => l.id == item.id)
        list[index] = {
          id: item.id,
          p_id: p.id,
          name: p.name,
          pc_code: p.pc_code,
          price: p.price,
          qty: item.qty,
          pic: p.pic_list[0].pic,
        }
      })
      return list.map((c) => {
        c.price = Number(c.price)
        c.qty = Number(c.qty)
        c.priceText = new Intl.NumberFormat().format(c.price)
        c.p_totalText = new Intl.NumberFormat().format(c.price * c.qty)
        return c
      })
    },
    m_total() {
      let total = 0
      let data = []
      this.cart_list.forEach((c) => {
        total = total + c.price * c.qty
      })
      data['price'] = total
      data['text'] = new Intl.NumberFormat().format(total)

      return data
    },
    cart_total() {
      let fare
      if (this.m_total['price'] < this.turnout) {
        fare = this.fare
      } else {
        fare = 0
      }
      let total = this.m_total['price'] + fare
      let data = []
      data['fare'] = fare
      data['price'] = total
      data['text'] = new Intl.NumberFormat().format(total)

      return data
    },
  },
  methods: {
    select_qty(id, d) {
      this.$store.dispatch('select_qty', { id, d })
    },
    pro_delete(id) {
      let t = confirm('是否確定刪除?')
      if (t) {
        this.$store.dispatch('pro_delete', id)
      }
    },
  },
}
</script>
<style scoped>
.stepwizard {
  display: table;
  width: 100%;
  position: relative;
}
.stepwizard-row {
  display: table-row;
}

.stepwizard-row:before {
  top: 14px;
  bottom: 0;
  position: absolute;
  content: ' ';
  width: 100%;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}
.stepwizard-step {
  display: table-cell;
  text-align: center;
  position: relative;
}
.stepwizard-step p {
  margin-top: 10px;
}
.stepwizard-step .btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}

.stepwizard-step a {
  background: #fff;
  border-color: #ccc;
  cursor: default;
}
.stepwizard-step a:hover {
  background: #fff;
  border-color: #ccc;
  cursor: default;
}

.stepwizard-step.active a {
  background: #b28146;
  color: #fff;
}

.page-heading {
  border-bottom: 1px solid #dddddd;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 40px;
  position: relative;
}

.page-heading.ms {
  margin-top: 10px;
}

.panel {
  margin-top: 15px;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .page-heading {
    margin-top: 45px;
    margin-bottom: 30px;
  }

  .page-heading.ms {
    margin-top: 15px;
  }
}

.page-heading-title {
  font-size: 24px;
  border-bottom: 3px solid #b28146;
  line-height: 40px;
  padding-bottom: 5px;
}

.form_box {
  border: 1px solid #f2f2f2;
  padding: 10px 15px;
  overflow: hidden;
  font-size: 1rem;
}
.form_box .table_head .tr {
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 10px;
}
.form_box .table_head .tr .th {
  flex: 1;
  padding: 5px 10px;
  color: #79ceb8;
  font-weight: bold;
}
.form_box .table_body .tr {
  display: flex;
  margin-bottom: 5px;
}
.form_box .table_body .tr .td {
  flex: 1;
  padding: 5px 10px;
}
.form_box .table_body .tr .td a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}
.form_box .table_body .tr .td a:hover {
  opacity: 0.8;
}
.form_box .table_foot .tr {
  display: flex;
}
.form_box .table_foot .tr .td {
  flex: 1;
  padding: 5px 10px;
}

.form_box .img {
  flex: 0 0 150px !important;
}
.form_box .img img {
  max-width: 100%;
}
.form_box .price {
  flex: 0 0 150px !important;
  text-align: right;
}
.form_box .p_total {
  flex: 0 0 150px !important;
  text-align: right;
}
.form_box .operate {
  flex: 0 0 100px !important;
  text-align: center;
}
.form_box .operate .operate_btn {
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.form_box .operate .operate_btn:hover {
  background: #ccc;
  color: #000 !important;
}
.form_box .qty {
  flex: 0 0 250px !important;
}
.form_box .qty .qty_input {
  display: flex;
}
.form_box .qty .qty_input button {
  outline: none;
  background: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  width: 30px;
  height: 30px;
  border: 1px solid #bbb;
}
.form_box .qty .qty_input button:hover {
  background: #ccc;
}
.form_box .qty .qty_input input {
  flex: 0 0 100px;
  width: 0;
  border: 1px solid #bbb;
  border-right: none;
  border-left: none;
  text-align: right;
  padding: 2px 5px;
  outline: none;
}

.cart_bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.cart_bottom a.btn {
  background: #b28146;
  color: #fff;
}

.back-btn,
.next-btn,
.back-btn:hover,
.next-btn:hover,
.back-btn:focus,
.next-btn:focus {
  background-color: #b28146;
  border-color: #b28146;
}
.back-btn:hover,
.next-btn:hover {
  opacity: 0.8;
}
</style>
