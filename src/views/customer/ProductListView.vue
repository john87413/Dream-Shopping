<template lang="html">
  <div class="product-view">
    <div class="product-banner"></div>
    <div class="container border-bottom border-light py-5 mb-5">
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item">
          <router-link :to="`/`">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/products`">產品</router-link>
        </li>
        <li class="breadcrumb-item active">
          {{ nowCategory }}
        </li>
      </ol>
      <div class="row">
        <div class="col-12 col-xl-3 mt-xl-5 mb-5 mb-xl-0">
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
                v-for="category in productsCategory"
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
          <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 mb-13">
            <li class="col" v-for="item in productByCategory" :key="item.id">
              <CardComponent :product="item" />
            </li>
          </ul>
          <!-- <Pagination :pagination="pagination" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductServices from '@/services/customer/Product.Service';
import CardComponent from '@/components/CardComponent.vue';

export default {
  data() {
    return {
      productsAll: [],
      productsCategory: [],
      selectCategory: '',
      isLoading: false,
      nowCategory: '',
      productByCategory: [],
    };
  },
  components: { CardComponent },
  methods: {
    async getAllData() {
      try {
        const res = await ProductServices.getAllProducts();
        if (res.data.success) {
          this.productsAll = res.data.products;
          this.productByCategory = res.data.products;
          this.productsCategory = [
            '全部商品',
            ...new Set(this.productsAll.map((product) => product.category)),
          ];
        }
      } catch (error) {
        /* empty */
      }
    },
    changeCategory(category) {
      this.$router.push({ name: 'products', query: { category } });
      this.nowCategory = category;
    },
    showCategory(page = 1) {
      const tempProductCategory = [...this.categoryProduct];
      const allPage = Math.ceil(tempProductCategory.length / 10);
      this.pagination = {
        current_page: page,
        total_pages: allPage,
        has_pre: page > 1,
        has_next: page < allPage,
      };
      this.productByCategory = tempProductCategory.splice(
        (page - 1) * 10,
        page * 10,
      );
    },
  },
  watch: {
    $route() {
      this.nowCategory = this.$route.query.category || '全部商品';
    },
    categoryProduct() {
      // this.showCategory();
    },
  },
  computed: {
    categoryProduct() {
      let categoryProduct = [];
      categoryProduct = this.productsAll.filter(
        (item) => item.category?.match(this.selectCategory),
      );
      return categoryProduct;
    },
  },
  mounted() {
    this.getAllData();
    this.nowCategory = this.$route.query.category || '全部商品';
  },
};
</script>
