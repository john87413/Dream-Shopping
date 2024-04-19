<template>
  <div class="container pt-12">
    <ProgressComponent step="4" />
  </div>
  <div class="container mt-10 g-3">
    <div class="row bg-linear rounded px-8 py-5 mx-1">
      <p class="text-center fs-5 mb-4">感謝您的購買</p>
      <p class="text-center mb-5">下列為您的訂單資訊</p>
      <div class="d-flex w-100 mx-auto">
        <router-link
          :to="`/`"
          class="w-50 btn btn-outline-light shadow-sm me-6"
        >
          前往首頁
        </router-link>
        <router-link
          :to="`/shop`"
          class="w-50 btn btn-secondary shadow-sm text-white secondary-hover"
        >
          前往商店
        </router-link>
      </div>
    </div>
  </div>
  <div class="container mt-5 border-bottom border-light pb-10 mb-10">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col">
        <p class="fs-5 bg-title p-3 rounded-top-2">訂單資訊</p>
        <div
          class="container px-4 bg-table rounded-bottom text-dark"
          style="--bs-bg-opacity: 0.7"
        >
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
            v-for="item in order.products"
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
              <p>NT${{ item.final_total }}</p>
            </div>
          </div>

          <div class="row text-dark py-4 px-3">
            <div class="col-9">
              <p class="fw-bold text-lg">總計：</p>
            </div>
            <div class="col-3">
              <p class="fw-bold text-lg text-end">NT${{ order.total }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col mt-5">
        <p class="fs-5 bg-title p-3 rounded-top-2">顧客資訊</p>
        <div class="container text-dark bg-table px-4" style="--bs-bg-opacity: 0.7">
          <div class="row row-cols-2 py-4 border-bottom border-2">
            <p class="col">下單日期</p>
            <p class="col">{{ orderDate }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom border-2">
            <p class="col">顧客姓名</p>
            <p class="col">{{ user.name }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom border-2">
            <p class="col">聯絡電話</p>
            <p class="col">{{ user.tel }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom border-2">
            <p class="col">電子郵件</p>
            <p class="col text-break">{{ user.email }}</p>
          </div>
          <div class="row row-cols-2 py-4 border-bottom">
            <p class="col">地址</p>
            <p class="col">{{ user.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressComponent from '@/components/ProgressComponent.vue';
import OrderService from '@/services/customer/Order.Service';

export default {
  data() {
    return {
      orderDate: '',
      orderID: '',
      order: {},
      user: {},
      isLoading: false,
    };
  },
  components: {
    ProgressComponent,
  },
  methods: {
    async getOrder() {
      try {
        const res = await OrderService.getOrderByID(this.orderID);
        if (res.data.success) {
          this.order = res.data.order;
          const date = new Date(res.data.order.create_at * 1000)
            .toISOString()
            .split('T');
          [this.orderDate] = date;
          this.user = res.data.order.user;
        }
      } catch (error) {
        /* empty */
      }
    },
  },
  created() {
    this.orderID = this.$route.params.order;
    this.getOrder();
  },
};
</script>
