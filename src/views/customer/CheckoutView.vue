<template>
  <div class="container pt-12">
    <ProgressComponent step="2" />
  </div>
  <div class="container mt-10 border-bottom border-light pb-12 mb-12">
    <router-link class="d-inline-flex align-items-center mb-4" :to="`/cart`">
      <span class="material-icons me-3"> reply </span>
      返回購物車
    </router-link>
    <div
      class="row row-cols-2"
    >
      <div class="col text-dark">
        <p class="fs-5 rounded-top bg-title p-3 text-white">訂單資訊</p>
        <div class="container px-4 mb-4 bg-table rounded-bottom" style="--bs-bg-opacity: 0.7">
          <div class="row py-3 align-items-center border-bottom border-2">
            <div class="col-6">
              <p>商品資訊</p>
            </div>
            <div class="col-3">
              <p>數量</p>
            </div>
            <div class="col-3">
              <p>小計</p>
            </div>
          </div>
          <div
            v-for="item in carts"
            :key="item.id"
            class="row py-3 align-items-center border-bottom border-2"
          >
            <div class="col-6">
              <div class="d-flex align-items-center">
                <img
                  class="w-50 me-4"
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                />
                <p>{{ item.product.title }}</p>
              </div>
            </div>
            <div class="col-3">
              <p>{{ item.qty }}</p>
            </div>
            <div class="col-3">
              <p>NT${{ item.total }}</p>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-9 mb-2">
              <p class="">小計：</p>
            </div>
            <div class="col-3 mb-2">
              <p class="">NT${{ total }}</p>
            </div>
            <div v-if="useCoupon" class="col-9 mb-2">
              <p class="fw-bold text-secondary">折扣</p>
            </div>
            <div v-if="useCoupon" class="col-3">
              <p class="fw-bold text-secondary">
                -NT{{ total - final_total }}
              </p>
            </div>
            <div class="col-9">
              <p class="fw-bold">總計：</p>
            </div>
            <div class="col-3">
              <p class="fw-bold">NT${{ final_total }}</p>
            </div>
          </div>
        </div>
        <p class="fs-5 rounded-top bg-title p-3 text-white">購物須知</p>
        <div class="p-4 bg-table rounded-bottom" style="--bs-bg-opacity: 0.7">
          <h4 class="fw-bold fs-5 mb-2">商品購買須知</h4>
          <p class="mb-4">
            產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
            商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
            <br />
            RingRing盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
          </p>
          <h4 class="fw-bold fs-5 mb-2">退換貨須知</h4>
          <p>
            依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
          </p>
        </div>
      </div>
      <div class="col">
        <FormComponent />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressComponent from '@/components/ProgressComponent.vue';
import FormComponent from '@/components/FormComponent.vue';

import { mapActions, mapState } from 'pinia';
import cartStore from '@/store/cartStore';

export default {
  data() {
    return {
      isLoading: false,
      useCoupon: false,
    };
  },
  components: {
    ProgressComponent,
    FormComponent,
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
    ]),
    // init shopping cart information
    async getCart() {
      await this.readCart();
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
