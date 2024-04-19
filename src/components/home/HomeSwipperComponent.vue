<template lang="html">
  <div class="home-product-swiper container mb-5">
    <div class="d-flex mb-5 wow animate__animated animate__lightSpeedInLeft">
      <h3 class="title">限時特價</h3>
      <p class="opacity-50 fs-5">On Sale</p>
    </div>
    <swiper-container
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :space-between="24"
      :breakpoints="{
        992: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
      }"
      data-wow-delay="0.5s"
      class="wow animate__animated animate__zoomIn"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <div class="product-item">
          <div class="product-tag bg-black">Hot Issue</div>
          <router-link class="product-img" :to="`/product/${item.id}`">
            <img :src="item.imageUrl" :alt="item.title" />
          </router-link>
          <div
            class="d-flex align-items-center justify-content-between
            border-top border-light mt-3 pt-2"
          >
            <div>
              <router-link :to="`/product/${item.id}`">
                <p class="mb-2">{{ item.title }}</p>
              </router-link>
              <p class="m-0">
                NT${{ item.price }}
                <span class="text-decoration-line-through ms-2 opacity-50">
                  NT${{ item.origin_price }}
                </span>
              </p>
            </div>
            <div class="d-flex align-items-center">
              <a href="#" class="border rounded-circle p-2 icon-hover me-2">
                <span class="material-icons"> favorite </span>
              </a>
              <a
                href="#"
                class="border rounded-circle p-2 icon-hover"
                @click.prevent="useCartStore.addCart(item.id, 1)"
              >
                <span class="material-icons"> shopping_cart </span>
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<!-- swiper need to use vue 3 composition api -->
<script setup>
import cartStore from '@/store/cartStore';
import { register } from 'swiper/element/bundle';

defineProps({
  products: Object,
});

const useCartStore = cartStore();

register();

</script>

<!-- <script>
import { mapActions } from 'pinia';
import cartStore from '@/store/cartStore';

import { register } from 'swiper/element/bundle';

export default {
  props: {
    products: Object,
  },
  data() {
    return {
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
      },
    };
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
  },
  mounted() {
    register();
  },
};
</script> -->
