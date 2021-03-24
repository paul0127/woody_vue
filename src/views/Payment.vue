<template>
  <div class="contain">
    <bread :bread_list="bread_list" :bigTitle_open="bigTitle_open"></bread>
    <div class="container">
      <div class="stepwizard">
        <div class="stepwizard-row">
          <div class="stepwizard-step">
            <a class="btn btn-default btn-circle">1</a>
            <p>購物清單</p>
          </div>
          <div class="stepwizard-step">
            <a class="btn btn-default btn-circle">2</a>
            <p>配送資訊</p>
          </div>
          <div class="stepwizard-step active">
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
        <span class="page-heading-title">請選擇配送方式</span>
      </div>
      <div class="form_box">
        <div class="order_title">
          <input type="radio" id="radio" /><label for="radio">貨到付款</label>
        </div>
        <div class="order_title">
          <input type="radio" id="radio" /><label for="radio">信用卡付款</label>
        </div>
      </div>
      <div class="cart_bottom">
        <router-link class="btn" :to="{ path: '/pay' }">上一步</router-link>
        <a class="btn" @click="next()">下一步</a>
      </div>
    </div>
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'
export default {
  name: 'Payment',
  components: {
    bread,
  },
  data() {
    return {
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '配送資訊', url: '#' },
      ],
      bigTitle_open: false,
      name:'',
      phone:'',
      email:'',
      county: null,
      dist: null,
      addr:'',
      memo:''
    }
  },
  mounted() {
    this.$store.dispatch('get_dist')
    this.$store.dispatch('get_info')

    let info = this.$store.state.common.info

    this.name = info.name ? info.name : ''
    this.phone = info.phone ? info.phone : ''
    this.email = info.email ? info.email : ''
    this.county = info.county ? info.county : null
    this.dist = info.dist ? info.dist : null
    this.addr = info.addr ? info.addr : ''
    this.memo = info.memo ? info.memo : ''
  },
  computed: {
    county_dist() {
      return this.$store.state.common.dist
    },
    county_list() {
      let list = []
      this.county_dist.forEach((item, index) => {
        list[index] = item.name
      })
      return list
    },
    dist_list() {
      let list = []
      let county = this.county
      if (county) {
        let dist = this.county_dist.find((item) => item.name == county)
        dist.districts.forEach((item, index) => {
          list[index] = item.name
        })
      }
      return list
    },
  },
  methods: {
    countyChange(){
      this.dist = null
    },
    next(){
      let arr ={
        name:this.name,
        phone:this.phone,
        email:this.email,
        county:this.county,
        addr:this.addr,
        dist:this.dist,
        memo:this.memo
      }

      this.$store.dispatch('store_info',arr)

      this.$router.push('/payment')
    }
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
.form_box .order_title {
  border-bottom: 1px solid #ccc;
  margin-bottom: 16px;
}
.form_box .order_title input[type='radio'] {
  margin-right: 5px;
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
