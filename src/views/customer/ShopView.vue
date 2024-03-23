<template lang="html">
  <div class="product-view">
    <div class="product-banner"></div>
    <div class="container border-bottom border-light py-5 my-5">
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item">
          <router-link :to="`/`">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/shop`">產品</router-link>
        </li>
        <li class="breadcrumb-item active">
          {{ nowCategory }}
        </li>
      </ol>
      <div class="row">
        <div class="col-12 col-xl-3 mt-xl-5 pt-xl-5 mb-5 mb-xl-0">
          <div class="d-none d-xl-block w-xl-90">
            <div class="d-none d-xl-flex justify-content-between mb-4">
              <div class="d-flex">
                <span class="w-bar bg-white me-1"></span>
                <span class="w-bar bg-white me-2"></span>
              </div>
              <h3 class="fs-5">
                全部商品
                <span class="font-abril fs-6 opacity-8 align-self-end"
                  >All Products</span
                >
              </h3>
              <div class="d-flex">
                <span class="w-bar bg-white ms-2"></span>
                <span class="w-bar bg-white ms-1"></span>
              </div>
            </div>
            <ul class="mb-4">
              <li class="all-category category-link">
                <a
                  href="#"
                  @click.prevent="changeCategory('全部商品')"
                  :class="{
                    'cate-active': nowCategory === '全部商品',
                  }"
                >
                  全部商品
                  <span class="fs-6 material-icons"> double_arrow </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="w-xl-90">
            <div class="d-none d-xl-flex justify-content-between mb-4">
              <div class="d-flex">
                <span class="w-bar bg-white me-1"></span
                ><span class="w-bar bg-white me-2"></span>
              </div>
              <h3 class="fs-5">
                商品分類
                <span class="font-abril fs-6 opacity-8 align-self-end"
                  >Category</span
                >
              </h3>
              <div class="d-flex">
                <span class="w-bar bg-white ms-2"></span
                ><span class="w-bar bg-white ms-1"></span>
              </div>
            </div>
            <ul
              class="d-flex flex-wrap flex-md-nowrap d-xl-block justify-content-md-center"
            >
              <li
                v-for="category in productCategory"
                class="product-category category-link mb-3"
                :key="category"
              >
                <a
                  href="#"
                  @click.prevent="changeCategory(category)"
                  :class="{ 'cate-active': nowCategory === category }"
                >
                  {{ category }}
                  <span class="fs-6 material-icons"> double_arrow </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-xl-9">
          <div class="d-flex mb-5">
            <h1 class="title">{{ nowCategory }}</h1>
          </div>
          <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mb-7">
            <li
              class="col px-3"
              v-for="item in productListByCategory"
              :key="item.id"
            >
              <CardComponent :product="item" :cartCard="false" />
            </li>
          </ul>
          <PaginationComponent
            :pages="pagination"
            :category="nowCategory"
            @emit-pages="getProducts"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductServices from '@/services/customer/Product.Service';
import CardComponent from '@/components/CardComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      productCategory: [],
      nowCategory: '',
      productListByCategory: [],
      pagination: {},
    };
  },
  components: { CardComponent, PaginationComponent },
  methods: {
    // get products by page
    async getProducts(page = 1) {
      try {
        const res = await ProductServices.getProductsByPage(
          page,
          this.nowCategory === '全部商品' ? '' : this.nowCategory,
        );
        const { products, pagination } = res.data;
        this.productListByCategory = products;
        this.pagination = pagination;
      } catch (error) {
        /* empty */
      }
    },
    // get all product category
    async getAllCategory() {
      try {
        const res = await ProductServices.getAllProducts();
        if (res.data.success) {
          this.productCategory = [
            '全部商品',
            ...new Set(res.data.products.map((product) => product.category)),
          ];
        }
      } catch (error) {
        /* empty */
      }
    },
    changeCategory(category) {
      this.nowCategory = category;
      this.$router.push({ name: 'shop', query: { category } });
    },
  },
  watch: {
    nowCategory() {
      this.getProducts();
    },
  },
  async mounted() {
    await this.getAllCategory();
    this.nowCategory = this.$route.query.category || '全部商品';
  },
};
</script>
