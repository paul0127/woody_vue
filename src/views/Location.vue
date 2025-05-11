<template>
  <div class="contain">
    <bread :bread_list="bread_list" :title="title"></bread>
    <div class="store">
      <div class="container">
        <div class="location">
          <locationMap/>
        </div>
        <div class="abroad">
          <div class="b_title">海外據點<span>|</span>Branch</div>
          <div class="list">
            <div class="item">上海-麥可將文創園區-青木工坊</div>
            <div class="item">上海-虹橋麗寶廣場-青木工坊</div>
            <div class="item">湖州-小西街-青木工坊</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import locationMap from '@/components/map/locationMap.vue'
import bread from '@/components/bread/bread.vue'
export default {
  name: 'Location',
  components: {
    bread,
    locationMap
  },
  data() {
    return {
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '據點', url: '#' },
      ],
      title:{
        name:'銷售據點',
        ename:'Store'
      },
    }
  },
  
}
</script>
<style lang="scss" scoped>
.store .location {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
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
  transform: translate(-50%, 50%);
}

.store .abroad {
  margin-top: 4rem;
}
.store .abroad .list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1050px;
  margin: 0 auto;
}
.store .abroad .list .item {
  flex: 1 0 50%;
  font-size: 1.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.store .abroad .list .item::before {
  content: '';
  background-image: url(~@/assets/img/location/據點_地標35X49.png);
  background-repeat: no-repeat;
  background-size: contain;
  align-self: stretch;
  width: 37px;
  margin-right: 10px;
  display: block;
}

@media (max-width: 1150px) {
  .store .location .popup {
    width: 300px;
    left: 6%;
  }
}
@media (max-width: 900px) {
  .store .location .popup {
    left: 0;
    top: 50%;
    transform: translate(0, -50%) scale(0);
    width: 100%;
    padding: 10px 15px 15px 15px;
  }
  .store .location .popup.active {
    transform: translate(0, -50%) scale(1);
  }
  .store .location .popup .cross {
    display: flex;
  }
  .store .abroad .list .item {
    flex: 1 0 100%;
    font-size: 1.25rem;
  }
  .store .abroad .list .item::before {
    width: 20px;
  }
  .map_line {
    display: none;
  }
}
</style>
