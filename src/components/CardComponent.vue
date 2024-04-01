<template>
  <div class="card-component">
    <router-link
      class="card-img"
      :class="{ 'card-img-rotate': !cartCard, 'card-small-img': cartCard }"
      @mouseover="changeImg"
      @mouseleave="recoveryImg"
      :to="`/product/${product.id}`"
    >
      <img
        :src="product.imageUrl"
        :class="{ 'show-card-img': showFirstImg }"
        :alt="product.title"
      />
      <img
        v-if="product.imagesUrl"
        :class="{ 'show-card-img': !showFirstImg }"
        :src="product.imagesUrl[0]"
        :alt="product.title"
      />
    </router-link>
    <div class="card-body">
      <div v-if="cartCard" class="text-dark">
        <h3 class="card-title mb-1">
          <router-link
            :to="`/product/${product.id}`"
            class='text-dark'
            >{{ product.title }}</router-link
          >
        </h3>
        <p class="mb-1">
          NT${{ product.price }}
          <span
            v-if="product.price !== product.origin_price"
            class="fs-7 opacity-50 text-decoration-line-through ms-2"
            >NT${{ product.origin_price }}
          </span>
        </p>
        <a
          href="#"
          class="btn btn-sm btn-secondary text-white secondary-hover me-2"
        >
          <span class="material-icons fs-6"> favorite </span>
        </a>
        <div class="position-relative d-inline-block">
          <div
            class="btn btn-sm btn-secondary text-white secondary-hover"
            @click="addCart(product.id, 1)"
          >
            <span>加入購物車</span>
          </div>
          <button
            v-if="loading"
            type="button"
            class=" btn d-flex justify-content-center align-items-center
                position-absolute no-allow
                h-100 w-100 top-0 start-0 bg-light"
          >
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </div>
      </div>
      <div v-else class="d-flex align-items-center justify-content-between">
        <div>
          <h3 class="card-title mb-1">
            <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
          </h3>
          <p>
            NT${{ product.price }}
            <span
              v-if="product.price !== product.origin_price"
              class="text-light opacity-50 text-decoration-line-through ms-1"
              >
              NT${{ product.origin_price }}
            </span>
          </p>
        </div>
        <div class="d-flex">
          <a href="#" class="border rounded-circle p-2 me-1 icon-hover">
            <span class="material-icons"> favorite_border  </span>
          </a>
          <div v-if="loading" class="add-loading border rounded-circle p-1 ">
            <div class="spinner-border spinner-border-sm text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="position-relative">
            <a
              v-if="!loading"
              href="#"
              class=" border rounded-circle p-2 icon-hover"
              @click.prevent="addCart(product.id, 1)"
            >
              <span class="material-icons"> shopping_cart </span>
            </a>
            <img
              ref="addImg"
              class="addCartAnimation"
              :style="{ top: `${elTop}px`, left: `${elLeft}px` }"
              :src="product.imageUrl"
              :alt="product.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import cartStore from '@/store/cartStore';

export default {
  props: {
    product: Object,
    cartCard: Boolean,
  },
  data() {
    return {
      showFirstImg: true,
      loading: false,
      elTop: 0,
      elLeft: 0,
    };
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
    changeImg() {
      if (this.product.imagesUrl) {
        this.showFirstImg = false;
      }
    },
    recoveryImg() {
      this.showFirstImg = true;
    },
  },
};
</script>
