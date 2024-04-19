<template>
  <div class="container pt-12">
    <ProgressComponent step="3" />
  </div>
  <div
    class="d-flex justify-content-center border-bottom border-light pb-10 my-10"
  >
    <div class="w-75 rounded-2 overflow-hidden">
      <h3 class="d-flex bg-title fs-5 p-3">確認訂單</h3>
      <div class="text-dark bg-table p-3" style="--bs-bg-opacity: 0.7">
        <div class="row mb-4">
          <p class="col-3 fw-bold mb-3 pb-3 border-bottom">下單日期：</p>
          <p class="col-9 mb-3 pb-3 border-bottom">{{ orderDate }}</p>
          <p class="col-3 fw-bold mb-3 pb-3 border-bottom">訂單編號：</p>
          <p class="col-9 mb-3 pb-3 border-bottom text-break">
            {{ order.id }}
          </p>
          <p class="col-3 fw-bold mb-3 pb-3 border-bottom">顧客姓名：</p>
          <p class="col-9 mb-3 pb-3 border-bottom">{{ user.name }}</p>
          <p class="col-3 fw-bold mb-3 pb-3 border-bottom">聯絡電話：</p>
          <p class="col-9 mb-3 pb-3 border-bottom">{{ user.tel }}</p>
          <p class="col-3 fw-bold mb-3 pb-3 border-bottom">電子郵件：</p>
          <p class="col-9 mb-3 pb-3 border-bottom">{{ user.email }}</p>
          <p class="col-3 fw-bold mb-3 pb-3 border-bottom">地址：</p>
          <p class="col-9 mb-3 pb-3 border-bottom">{{ user.address }}</p>
          <p v-if="order.message" class="col-3 fw-bold mb-3 pb-3 border-bottom">
            備註：
          </p>
          <p v-if="order.message" class="col-9 mb-3 pb-3 border-bottom">
            {{ order.message }}
          </p>
          <p class="col-3 fw-bold mb-3 pb-3 border-bottom">訂單金額：</p>
          <p
            class="col-9 mb-3 pb-3 border-bottom d-flex align-items-center justify-content-between"
          >
            NT${{ order.total }}
            <a
              class="btn btn-sm btn-secondary text-white secondary-hover p-1 rounded-circle"
              @click="() => open = !open"
              :class="{ 'arrow-rotate': open }"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <span class="material-icons fs-5"> keyboard_arrow_down </span>
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <p class="fw-bold mb-4">購買商品</p>
            <div class="row align-items-center mb-4">
              <div class="col-6">
                <p>商品詳情</p>
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
              class="row align-items-center mb-4"
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
          </div>
        </div>
        <button
          type="button"
          @click="pay(orderID)"
          class="w-100 text-white btn btn-lg btn-secondary secondary-hover shadow"
        >
          確認結帳
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressComponent from '@/components/ProgressComponent.vue';
import OrderService from '@/services/customer/Order.Service';
import PayService from '@/services/customer/Pay.Service';

export default {
  data() {
    return {
      orderDate: '',
      orderID: '',
      order: {},
      user: {},
      isLoading: false,
      open: false,
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
    async pay() {
      try {
        const res = await PayService.pay(this.orderId);
        if (res.data.success) {
          this.$router.push({ name: 'afterPay', params: { order: this.orderID } });
        }
      } catch (error) {
        /* empty */
      }
    },
  },
  mounted() {
    this.orderID = this.$route.params.order;
    this.getOrder();
  },
};
</script>
