<template lang="html">
  <div class="container pt-12">
    <ol class="breadcrumb mb-5">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
      <li class="breadcrumb-item">
        <router-link :to="`/shop`">產品</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link
          :to="{
            name: 'shop',
            query: { category: product.category },
          }"
        >
          {{ product.category }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ product.title }}</li>
    </ol>
    <div class="row g-5">
      <div class="col-12 col-lg-6">
        <img
          v-if="!product.imagesUrl"
          class="rounded shadow product-img"
          :src="product.imageUrl"
          :alt="product.title"
        />
        <SwiperComponent v-else :product="product" />
      </div>
      <div class="col-12 col-lg-5 offset-lg-1">
        <p class="text-light mb-3">{{ product.category }}</p>
        <h1 class="text-3xl mb-3">{{ product.title }}</h1>
        <ul class="mb-3 text-sm text-light point">
          <li
            v-for="(format, index) in product.formats"
            :key="index"
            class="mb-2"
          >
            {{ format.format }}： {{ format.content }}
          </li>
        </ul>
        <p class="fw-bold text-xl mb-3">
          NT${{ product.price }}
          <span
            v-if="product.price !== product.origin_price"
            class="text-light text-lg fw-normal text-decoration-line-through ms-4"
          >
            NT${{ product.origin_price }}
          </span>
        </p>
        <div class="d-flex w-100 mb-3" :class="{ 'mb-3': !failQty }">
          <button
            class="quantity-btn remove text-xl"
            type="button"
            @click="minusQty"
            :disabled="qty <= 1"
          >
            -
          </button>
          <input
            class="text-center quantity w-100 text-lg"
            type="number"
            min="1"
            v-model="qty"
            @change="checkQty"
          />
          <button
            type="button"
            class="quantity-btn plus text-xl"
            @click="addQty"
          >
            +
          </button>
        </div>
        <p v-if="failQty" class="text-sm text-primary opacity-5 mb-3">
          商品數量最少為一件!
        </p>
        <div class="position-relative w-100">
          <button
            type="button"
            class="w-100 d-flex justify-content-center white-hover
            btn btn-secondary text-white shadow secondary-hover"
          >
            <span class="material-icons"> shopping_cart </span>加入購物車
          </button>
          <button
            type="button"
            v-if="addLoading"
            class="btn d-flex justify-content-center align-items-center position-absolute
            no-allow w-100 h-100 top-0 start-0 bg-light"
          >
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </div>
        <a href="#" class="d-flex my-3">
          <span class="material-icons me-3"> favorite_border </span>加入收藏清單
        </a>
        <ul class="border-start border-3 border-secondary text-sm ps-2">
          <li class="mb-2">
            <span class="fw-bold text-primary opacity-8">限時活動</span>
            全館$101免運
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container border-bottom border-light pt-8 mb-8">
    <TabComponent :product="product" />
    <div v-if="relativeProduct.length > 0" class="container mb-8">
      <p class="fs-3 text-center border-bottom border-light pb-4 mb-8">
        相關產品
      </p>
      <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5">
        <li v-for="item in relativeProduct" :key="item.id">
          <CardComponent :product="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ProductServices from '@/services/customer/Product.Service';
import TabComponent from '@/components/TabComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import SwiperComponent from '@/components/SwipperComponent.vue';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  components: {
    TabComponent,
    CardComponent,
    SwiperComponent,
  },
  data() {
    return {
      allProduct: [],
      product: [],
      thumbsSwiper: null,
      qty: 1,
      failQty: false,
      relativeProduct: [],
      routeID: '',
      addLoading: false,
      isLoading: false,
      elTop: 0,
      elLeft: 0,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    addQty() {
      this.failQty = false;
      this.qty += 1;
    },
    minusQty() {
      this.qty -= 1;
    },
    checkQty() {
      if (this.qty <= 1) {
        this.failQty = true;
        this.qty = 1;
      }
    },
    async getAll() {
      try {
        const res = await ProductServices.getAllProducts();
        if (res.data.success) {
          this.allProduct = res.data.products;
          this.getRelativeProduct();
        }
      } catch (error) {
        /* empty */
      }
    },
    async getProduct(id) {
      try {
        const res = await ProductServices.getProductById(id);
        if (res.data.success) {
          this.product = res.data.product;
          this.getAll();
        } else {
          this.isLoading = false;
          this.$router.push('/shop');
        }
      } catch (error) {
        /* empty */
      }
    },
    getRelativeProduct() {
      this.relativeProduct = [];
      const { category } = this.product;
      const { id } = this.product;
      const filterProduct = this.allProduct.filter(
        (item) => item.category === category && item.id !== id,
      );
      const arrSet = new Set([]);
      const maxSize = filterProduct.length < 4 ? filterProduct.length : 4;
      for (let i = 0; arrSet.size < maxSize; i + 1) {
        const num = getRandomInt(filterProduct.length);
        arrSet.add(num);
      }
      arrSet.forEach((item) => {
        this.relativeProduct.push(filterProduct[item]);
      });
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    id(newID) {
      this.routeID = newID;
      if (this.$route.name === 'product') {
        this.getProduct(this.routeID);
      }
    },
  },
  created() {
    this.routeID = this.$route.params.id;
    this.getProduct(this.routeID);
  },
};
</script>
