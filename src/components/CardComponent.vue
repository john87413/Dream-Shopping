<template>
  <div class="card">
    <router-link
      class="card-img card-img-rotate"
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
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <h3 class="card-title mb-3">
            <router-link :to="`/product/${product.id}`">{{ product.title }}</router-link>
          </h3>
          <p>
            NT${{ product.price }}
            <span
              v-if="product.price !== product.origin_price"
              class="text-light text-decoration-line-through ms-2"
              >
              NT${{ product.origin_price }}
            </span>
          </p>
        </div>
        <div class="d-flex">
          <a
            href="#"
            class="border bg-white text-secondary rounded-circle p-2 me-4 icon-active-hover"
          >
            <span class="material-icons"> favorite </span>
          </a>
          <div v-if="loading" class="add-loading border rounded-circle p-2 ">
            <div class="spinner-border spinner-border-sm text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="position-relative">
            <a
              v-if="!loading"
              href="#"
              class=" border rounded-circle p-2 icon-hover"
              @click.prevent="addCart(product.id, $event)"
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
export default {
  props: {
    product: Object,
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
