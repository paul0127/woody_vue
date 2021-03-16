<template>
  <div class="contain">
    <bread :bread_list="bread_list" :bigTitle_open="bigTitle_open"></bread>
    <!-- 產品內頁內容開始 -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3 hidden-xs">
          <sideMenu></sideMenu>
        </div>
        <div class="col-xs-12 col-sm-9">
          <div class="product_info">
            <div class="product_top">
              <div class="product_pic">
                <img
                  class="main_pic"
                  src="@/assets/img/product/prds-creative-tool-11_【窗語】隨身碟@2x.png"
                />
                <ul class="small_pic">
                  <!--data-img 需要放顯示的大圖-->
                  <li
                    class="active"
                    style="
                        background-image: url(/img/product/prds-creative-tool-11_【窗語】隨身碟.png);
                      "
                    data-img="/img/product/prds-creative-tool-11_【窗語】隨身碟@2x.png"
                  ></li>
                  <li
                    style="
                        background-image: url(/img/product/prds-creative-tool-10_【遊思】木質筆.png);
                      "
                    data-img="/img/product/prds-creative-tool-10_【遊思】木質筆@2x.png"
                  ></li>
                  <li
                    style="
                        background-image: url(/img/product/prds-creative-tool-11_【窗語】隨身碟.png);
                      "
                    data-img="/img/product/prds-creative-tool-11_【窗語】隨身碟@2x.png"
                  ></li>
                  <li
                    style="
                        background-image: url(/img/product/prds-creative-tool-11_【窗語】隨身碟.png);
                      "
                    data-img="/img/product/prds-creative-tool-11_【窗語】隨身碟@2x.png"
                  ></li>
                </ul>
              </div>
              <div class="product_text">
                <div class="share">
                  <div class="share_icon" id="fbshare">
                    <img src="@/assets/img/product/facebook.svg" />分享
                  </div>
                </div>
                <h1>【窗語】隨身碟</h1>
                <div class="desc">
                  產品編瑪:1234567890 <br />
                  材質:木 <br />
                  規格大小:尺寸:64x 18x10mm,<br />
                  格紋款:水品玻璃,核桃木,16G內存; <br />
                  窗花款:水品玻璃,炭化<br />
                </div>
                <div class="price">原價 $900</div>
                <div class="purchase">
                  <div class="qty">
                    <button class="minus" onclick="product_qty(0)">
                      <img src="@/assets/img/product/minus.svg" />
                    </button>
                    <input
                      id="qty"
                      type="number"
                      value="1"
                      min="1"
                      max="10"
                      onchange="check_number(this)"
                    />
                    <button class="plus" onclick="product_qty(1)">
                      <img src="@/assets/img/product/plus.svg" />
                    </button>
                  </div>
                  <div class="btn">加入購物車</div>
                </div>
              </div>
            </div>
            <div class="product_desc">
              <ul class="tab_nav">
                <li class="active" data-tab="tab_01">商品介紹</li>
                <li data-tab="tab_02">商品規格</li>
              </ul>
              <div id="tab_01" class="tab_panel active">
                <div class="editor">
                  <img
                    src="@/assets/img/product/prds-creative-tool-11_【窗語】隨身碟@2x.png"
                  />
                  <p>
                    源自東方的窗花民間藝術圖騰,結合了現代工藝的水晶玻璃雷雕與木料,<br />
                    讓傳統藝術以嶄新的樣貌呈現在產品之上,水晶玻璃的透視感,仿佛透過<br />
                    窗花向外觀看,窗花的美好如同隨身碟承載的記憶,也象征青木工坊設計<br />
                    理念,傳統與現代的兼容並蓄,新東方設計風格
                  </p>
                </div>
              </div>
              <div id="tab_02" class="tab_panel">
                <div class="editor">品名:【窗語】隨身碟</div>
              </div>
            </div>
            <div class="relation">
              <div class="title_product">
                <h1>推薦商品</h1>
              </div>
              <div class="row prod-list">
                <div class="col-xs-6 col-sm-4">
                  <a href="#">
                    <img
                      class="prod-img img-responsive"
                      src="@/assets/img/product/prds-creative-tool-10_【遊思】木質筆.png"
                    />
                  </a>
                  <div class="prod-title">【遊思】木質筆</div>
                  <div class="prod-price">$3999</div>
                </div>
                <div class="col-xs-6 col-sm-4">
                  <a href="#">
                    <img
                      class="prod-img img-responsive"
                      src="@/assets/img/product/prds-creative-tool-12_【鎖護(守護)】鑰匙圈.png"
                    />
                  </a>
                  <div class="prod-title">【鎖護(守護)】鑰匙圏</div>
                  <div class="prod-price">$8500</div>
                </div>
                <div class="col-xs-6 col-sm-4">
                  <a href="#">
                    <img
                      class="prod-img img-responsive"
                      src="@/assets/img/product/prds-creative-tool-03_【鼎曆】筆筒.png"
                    />
                  </a>
                  <div class="prod-title">【鼎暦】筆筒</div>
                  <div class="prod-price">$8500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /產品內頁內容結束 -->
  </div>
</template>
<script>
import bread from '@/components/bread/bread.vue'
import sideMenu from '@/components/sideMenu/sideMenu.vue'

export default {
  name: 'Product',
  components: {
    bread,
    sideMenu
  },
  data() {
    return {
      bigTitle_open: false,
      bread_list: [
        { id: 1, name: '首頁', url: '/' },
        { id: 2, name: '商品介紹', url: '#' },
      ],
      product_section: [
        {
          id: 1,
          name: '家俱/馨享',
          product_list: [
            {
              id: 1,
              pc_code: 1,
              pic: '/img/product/prds_01_【馨享】茶几.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pc_code: 1,
              pic: '/img/product/prds_01-1_【馨享】休閒椅.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pc_code: 1,
              pic: '/img/product/prds_01-2_【馨享】玄關桌.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 2,
          name: '家俱/日常',
          product_list: [
            {
              id: 1,
              pc_code: 1,
              pic: '/img/product/prds-daily-01_2人位沙發.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pc_code: 1,
              pic: '/img/product/prds-daily-02_休閒椅.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pc_code: 1,
              pic: '/img/product/prds-daily-03_咖啡桌.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 3,
          name: '文創商品/工藝類',
          product_list: [
            {
              id: 1,
              pc_code: 1,
              pic: '/img/product/prds-creative-01_藝術品系列.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pc_code: 1,
              pic: '/img/product/prds-creative-02_茶香水.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pc_code: 1,
              pic: '/img/product/prds-creative-03_木器公仔.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 4,
          name: '文創商品/食器類',
          product_list: [
            {
              id: 1,
              pc_code: 1,
              pic: '/img/product/prds-creative-food-01_食盒.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pc_code: 1,
              pic: '/img/product/prds-creative-food-02_沾板.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pc_code: 1,
              pic: '/img/product/prds-creative-food-03_木碗.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
        {
          id: 5,
          name: '文創商品/文具類',
          product_list: [
            {
              id: 1,
              pc_code: 1,
              pic: '/img/product/prds-creative-tool-01_豬光寶器禮盒.png',
              name: '【馨享】茶几',
              price: 3999,
            },
            {
              id: 2,
              pc_code: 1,
              pic: '/img/product/prds-creative-tool-02_豬事順曆桌曆.png',
              name: '【馨享】休閒椅',
              price: 3999,
            },
            {
              id: 3,
              pc_code: 1,
              pic: '/img/product/prds-creative-tool-03_鼎曆筆筒.png',
              name: '【馨享】玄關桌',
              price: 3999,
            },
          ],
        },
      ],
    }
  },
}
</script>
<style>
.product_top {
  display: flex;
  margin-bottom: 3rem;
}

.product_top .product_pic {
  width: 409px;
  margin-right: 1rem;
}
.product_top .product_pic img {
  width: 100%;
  margin-bottom: 1.25rem;
}
.product_top ul.small_pic {
  list-style: none;
  padding-left: 0;
  display: flex;
  width: 100%;
}
.product_top ul.small_pic li {
  width: 22%;
  margin-right: 4%;
  cursor: pointer;
  background-size: cover;
  padding-bottom: 23%;
  border: 2px solid var(--product-small_pic-border-color);
}
.product_top ul.small_pic li.active {
  border: 2px solid var(--product-small_pic-active-border-color);
}
.product_top ul.small_pic li:last-child {
  margin-right: 0;
}

.product_top .product_text {
  flex: 1;
}
.product_text .share {
  display: flex;
  justify-content: flex-end;
}
.product_text .share .share_icon {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}
.product_text .share .share_icon img {
  margin-right: 5px;
}
.product_text h1 {
  font-size: 1.5rem;
}
.product_text .desc {
  background-color: var(--product-side-desc-background);
  padding: 10px;
  font-size: 15px;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}
.product_text .price {
  color: var(--text-brown-color);
  font-size: 1.15rem;
  border-bottom: 1px solid var(--product-side-price-underline-color);
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
}


.purchase {
  display: flex;
  justify-content: space-between;
}
.purchase .qty {
  display: flex;
  width: 156px;
}
.purchase .qty .minus,
.purchase .qty .plus {
  border: 1px solid var(--product-qty-button-border-color);
  background-color: var(--product-qty-button-background);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
}
.purchase .qty .minus:hover,
.purchase .qty .plus:hover {
  background-color: var(--product-qty-button-hover-background);
}
.purchase .qty .minus {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
}
.purchase .qty .plus {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: none;
}
.purchase .qty input {
  width: calc(100% - 64px);
  border: 1px solid var(--product-qty-button-border-color);
  height: 32px;
  padding: 5px;
  border-radius: 0;
  outline: none;
}
.purchase .btn {
  background-color: var(--product-purchase-button-background);
  color: var(--text-white-color);
  width: 154px;
}


.product_desc ul.tab_nav {
  list-style: none;
  padding-left: 0;
  display: flex;
  border-bottom: 1px solid var(--title-under-under-color);
  margin-bottom: 1rem;
}
.product_desc ul.tab_nav li {
  position: relative;
  font-size: 1.5rem;
  margin-right: 1.25rem;
  color: var(--text-light-gray-color);
  line-height: 2;
  cursor: pointer;
}
.product_desc ul.tab_nav li.active {
  color: var(--text-black-color);
}
.product_desc ul.tab_nav li.active::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  border-bottom: 3px solid var(--title-under-color);
  transform: translateY(50%);
}
.product_desc .tab_panel {
  display: none;
  padding: 1rem 0;
}
.product_desc .tab_panel.active {
  display: block;
}

.relation {
  margin-top: 2rem;
}
.relation .title_product {
  margin-bottom: 2.5rem;
}
.relation .title_product h1 {
  position: relative;
}
.relation .title_product h1::after {
  content: '';
  border-bottom: 3px solid var(--title-under-color);
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
}
.relation .title_product::after {
  display: none;
}
</style>
