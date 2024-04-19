<template lang="html">
  <div class="container pt-12">
    <ProgressComponent step="1" />
    <div class="rounded-2 overflow-hidden mt-10">
      <h3 class="d-flex bg-title fs-5 p-3">
        <span class="material-icons me-2"> shopping_cart </span>購物車
      </h3>
      <div class="text-dark bg-table" style="--bs-bg-opacity: 0.7">
        <div
          v-if="!carts || carts.length <= 0"
          class="p-4 border border-white border-bottom-0"
        >
          <p class="text-center fs-5 mb-3">購物車目前沒有商品</p>
          <div
            class="d-block w-25 mx-auto btn btn-secondary text-white secondary-hover"
          >
            <router-link class="white-hover" :to="`/shop`">
              前往商店</router-link
            >
          </div>
        </div>
        <table v-else>
          <tr class="d-none d-md-flex row g-0 p-3">
            <td class="col-4">商品資料</td>
            <td class="col-2">單件價格</td>
            <td class="col-3">數量</td>
            <td class="col-2">小計</td>
            <td class="col-1"></td>
          </tr>

          <tr
            v-for="item in carts"
            :key="item.id"
            class="row g-0 p-3 border-top border-white align-items-center"
          >
            <td class="col-11 col-md-4 mb-5 mb-md-0">
              <div class="d-flex align-items-center">
                <img
                  class="w-50 me-4"
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                />
                <h3 class="fs-6">{{ item.product.title }}</h3>
              </div>
            </td>
            <td class="col-6 col-md-2 order-4 order-md-0">
              <div class="d-flex d-md-block align-items-end">
                <p class="me-3 me-md-0">NT${{ item.product.price }}</p>
                <p
                  v-if="item.product.price !== item.product.origin_price"
                  class="opacity-50 fs-7 text-decoration-line-through"
                >
                  NT${{ item.product.origin_price }}
                </p>
              </div>
            </td>
            <td class="col-12 col-md-3 order-3 order-md-0 mb-5 mb-md-0">
              <div class="d-flex w-75 position-relative">
                <button
                  :disabled="item.qty <= 1"
                  class="quantity-btn cart-remove border-dark text-dark"
                  type="button"
                  @click.prevent="
                    () => {
                      item.qty--;
                      updateCart(item);
                    }
                  "
                >
                  -
                </button>
                <input
                  class="text-center quantity w-100 border-start-0 border-end-0
                  border-dark bg-transparent"
                  type="number"
                  v-model.number="item.qty"
                  @change="updateCart(item)"
                  min="1"
                />
                <button
                  type="button"
                  class="quantity-btn plus border-dark text-dark"
                  @click.prevent="
                    () => {
                      item.qty++;
                      updateCart(item);
                    }
                  "
                >
                  +
                </button>
              </div>
            </td>
            <td
              class="col-6 col-md-2 order-4 order-md-0 text-end text-md-start"
            >
              <span class="d-inline d-md-none">小計：</span>
              NT${{ item.total }}
            </td>
            <td class="col-1 order-2 order-md-0 d-flex">
              <a
                href="#"
                class="text-dark scale-hover"
                @click.prevent="delCartItem(item.id)"
              >
                <span class="material-icons"> delete_forever </span>
              </a>
            </td>
          </tr>

          <tr
            class="d-flex justify-content-between p-3 border-top border-white"
          >
            <td>
              <a
                href="#"
                class="btn btn-outline-dark"
                @click.prevent="delAllCartItems()"
                >清空購物車</a
              >
            </td>
            <td class="d-flex flex-column flex-sm-row align-items-center">
              <p class="fs-5 mb-5 mb-sm-0 me-sm-4">總計：NT${{ total }}</p>
              <router-link :to="`/shop`" class="btn btn-dark btn-hover px-4">
                <span>繼續購物</span>
              </router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div class="container border-bottom border-light mt-7 pb-10 mb-10">
    <div class="row">
      <div class="col-12 col-lg-8">
        <p class="fs-5 bg-title p-3 rounded-top-2">不要錯過</p>
        <div
          class="p-3 border border-white bg-white opacity-75 text-dark rounded-bottom-2"
        >
          <ul class="row row-cols-2 row-cols-sm-3">
            <li
              class="col mb-5 mb-sm-0"
              v-for="item in randomProducts"
              :key="item.id"
            >
              <CardComponent :cartCard="true" :product="item" />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <p class="fs-5 bg-title p-3 rounded-top-2">訂單資訊</p>
        <div class="row g-0 p-3 bg-white opacity-75 text-dark rounded-bottom-2">
          <div class="col-4 mb-3">
            <p>商品數量：</p>
          </div>
          <div class="col-8 mb-3 text-end">
            <p>共 {{ allQty }} 件</p>
          </div>
          <div class="col-4 mb-3">
            <p>小計：</p>
          </div>
          <div class="col-8 mb-3 text-end">
            <p>NT${{ total }}</p>
          </div>
          <div v-if="!showCoupon" class="col-12 mb-3">
            <a
              class="text-secondary underline"
              href="#"
              @click.prevent="showCoupon = true"
            >
              使用優惠券
            </a>
          </div>
          <div v-if="showCoupon" class="col-8 mb-3 pe-2">
            <input
              id="coupon"
              name="優惠券代碼"
              type="text"
              class="form-control"
              placeholder="請輸入優惠券代碼"
            />
          </div>
          <div v-if="showCoupon" class="col-4 mb-3">
            <div class="position-relative">
              <button
                type="button"
                class="btn btn-secondary secondary-hover text-white w-100"
              >
                套用
              </button>
            </div>
          </div>
          <div v-if="useCoupon" class="col-4 mb-4">
            <p class="text-secondary fw-bold">折扣：</p>
          </div>
          <div v-if="useCoupon" class="col-8 mb-4 text-end">
            <p class="text-secondary fw-bold">-NT${{ total - final_total }}</p>
          </div>
          <div class="col-12 mb-3 border-bottom border-dark"></div>
          <div class="col-4 mb-3">
            <p class="fw-bold">總計：</p>
          </div>
          <div class="col-8 mb-3 text-end">
            <p class="fw-bold">NT${{ final_total }}</p>
          </div>
          <div class="col-12" v-if="carts && carts.length > 0">
            <router-link
              class="btn btn-secondary w-100 fw-bold text-white secondary-hover"
              :to="`/checkout`"
            >
              前往結帳
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressComponent from '@/components/ProgressComponent.vue';
import CardComponent from '@/components/CardComponent.vue';

import ProductServices from '@/services/customer/Product.Service';
import { mapActions, mapState } from 'pinia';
import cartStore from '@/store/cartStore';

export default {
  components: { ProgressComponent, CardComponent },
  data() {
    return {
      randomProducts: [],
      showCoupon: false,
      useCoupon: false,
    };
  },
  computed: {
    ...mapState(cartStore, {
      carts: (store) => store.shoppingCart.carts,
      total: (store) => store.shoppingCart.total,
      final_total: (store) => store.shoppingCart.final_total,
      allQty: (store) => (store.shoppingCart.carts
        ? store.shoppingCart.carts.reduce(
          (total, item) => total + item.qty,
          0,
        )
        : 0),
    }),
  },
  methods: {
    ...mapActions(cartStore, [
      'readCart',
      'addCart',
      'delCartItem',
      'updateCart',
      'delAllCartItems',
    ]),
    // init shopping cart information
    async initShoppingCart() {
      await this.readCart();
    },
    async getRandomProducts() {
      const res = await ProductServices.getAllProducts();
      this.randomProducts = res.data.products
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    },
  },
  mounted() {
    this.initShoppingCart();
    this.getRandomProducts();
  },
};
</script>

<style></style>
