<template>
  <div class="checkout-form text-dark">
    <p class="fs-5 rounded-top bg-title p-3 text-white">顧客資訊</p>
    <VForm
      v-slot="{ errors }"
      ref="form"
      @submit="onSubmit"
      class="bg-table rounded-bottom p-4"
      style="--bs-bg-opacity: 0.7"
    >
      <div class="form-floating form-downline mb-3">
        <VField
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></VField>
        <label for="name">姓名<sup>*</sup>：</label>
        <ErrorMessage name="姓名" class="invalid-feedback" />
      </div>
      <div class="form-floating form-downline mb-3">
        <VField
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        ></VField>
        <label for="email">電子郵件<sup>*</sup>：</label>
        <ErrorMessage name="email" class="invalid-feedback" />
      </div>
      <div class="form-floating form-downline mb-3">
        <VField
          id="tel"
          name="聯絡電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['聯絡電話'] }"
          placeholder="請輸入聯絡電話"
          :rules="isPhone"
          v-model="form.user.tel"
        ></VField>
        <label for="tel">聯絡電話<sup>*</sup>：</label>
        <ErrorMessage name="聯絡電話" class="invalid-feedback" />
      </div>
      <div class="form-floating form-downline mb-3">
        <VField
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></VField>
        <label for="address">地址<sup>*</sup>：</label>
        <ErrorMessage name="地址" class="invalid-feedback" />
      </div>
      <div class="mb-5">
        <label for="exampleFormControlTextarea1" class="ms-2 ps-1 mb-2"
          >備註：</label
        >
        <textarea
          class="form-control bg-transparent border-secondary"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="form-check mb-3">
        <VField
          class="form-check-input"
          id="flexCheckChecked"
          name="check"
          type="checkbox"
          :class="{ 'is-invalid': errors['check'] }"
          value="checked"
          :rules="isChecked"
        ></VField>
        <label class="form-check-label text-dark" for="flexCheckChecked">
          我已閱讀並同意網站的 條款與條件<sup>*</sup>
        </label>
        <ErrorMessage name="check" class="invalid-feedback" />
      </div>
      <button
        type="submit"
        class="w-100 btn-lg btn btn-secondary secondary-hover text-white shadow-sm"
      >
        送出訂單
      </button>
    </VForm>
  </div>
</template>

<script>
import OrderServices from '@/services/customer/Order.Service';
import { mapActions } from 'pinia';
import cartStore from '@/store/cartStore';

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    ...mapActions(cartStore, ['readCart']),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
    isChecked(value) {
      if (value && value.length) {
        return true;
      }
      return '請勾選同意網站的條款與條件';
    },
    async onSubmit() {
      try {
        const res = await OrderServices.createOrder(this.form);
        if (res.data.success) {
          this.$refs.form.resetForm();
          await this.readCart();
          this.$router.push({
            name: 'payment',
            params: { order: res.data.orderId },
          });
        } else {
          this.$router.push('/shop');
        }
      } catch (error) {
        /* empty */
      }
    },
  },
};
</script>
