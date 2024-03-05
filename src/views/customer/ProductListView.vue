<template lang="html">
  <div class="product-view">
    <div class="product-banner"></div>
    <div class="container border-bottom border-light py-5 mb-5">
      <ol class="breadcrumb mb-5">
        <li class="breadcrumb-item">
          <router-link :to="`/`">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/products`">產品</router-link>
        </li>
        <li class="breadcrumb-item active">
          {{ nowCategory === "" ? "全部商品" : nowCategory }}
        </li>
      </ol>
      <div class="row">
        <div class="col-3 mt-5 mb-5">
          <div class="d-block">
            <div class="d-flex justify-content-between mb-5">
              <div class="d-flex">
                <span class="w-bar bg-white me-1"></span>
                <span class="w-bar bg-white me-2"></span>
              </div>
              <h3 class="fs-5">
                全部商品
                <span class="font-abril opacity-8 align-self-end"
                  >All Products</span
                >
              </h3>
              <div class="d-flex">
                <span class="w-bar bg-white ms-2"></span>
                <span class="w-bar bg-white ms-1"></span>
              </div>
            </div>
            <ul class="mb-5">
              <li class="category-link">
                <a
                  href="#"
                  @click.prevent="changeCategory('')"
                  :class="{
                    'cate-active': selectCategory === '',
                  }"
                >
                  全部商品
                  <span class="fs-6 material-icons">
                    double_arrow
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="">
            <div class="d-flex justify-content-between mb-5">
              <div class="d-flex">
                <span class="w-bar bg-white me-1"></span
                ><span class="w-bar bg-white me-2"></span>
              </div>
              <h3 class="fs-5">
                商品分類
                <span class="font-abril text-lg opacity-8 align-self-end"
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
                class="category-link mb-4"
                :key="category"
              >
                <a
                  href="#"
                  @click.prevent="changeCategory(category)"
                  :class="{ 'cate-active': selectCategory === category }"
                >
                  {{ category }}
                  <span class="fs-6 material-icons">
                    double_arrow
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductServices from '@/services/customer/Product.Service';

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
  components: {},
  methods: {
    async getAllData() {
      try {
        const res = await ProductServices.getAllProducts();
        if (res.data.success) {
          this.productsAll = res.data.products;
          this.isLoading = false;
          this.productsAll.forEach((product) => {
            if (!this.productsCategory.includes(product.category)) {
              this.productsCategory.push(product.category);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    changeCategory(category) {
      this.$router.push({ name: 'products', query: { category } });
      this.nowCategory = category;
    },
  },
  watch: {
    $route() {
      this.selectCategory = this.$route.query.category || '';
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
    this.selectCategory = this.$route.query.category || '';
  },
};
</script>

<style lang="scss">
.product-view {
  .product-banner {
    height: 60vh;
    background: url("https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626001947105.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bdfpqdl1rGBDueWMXHIM4A7U2W47xwUljFqWVePj9kxUPoJ%2FEfUGtGxIOgjxJohaMd9O5LhXRArGK1B4uPcbyNB0h%2FjJtKsFsJiwWeu49KmTXDEJXqlsSI7Q8NjSrS4aP%2FI93yrUpUHdFwlAeIu6xYYFu5SjYqJ2ST7d8k4PB4ajmvtFbfsle4kUBvS2Tr%2FOG%2Bk%2FXI6mW%2Bzlx14va%2BhUxESmGMSAnsJBFjwNAk9H2ecnMX3DmCXJdtXK29MjfqpMXssXNY%2BO%2B5ZRAov%2BE30VunxFAzin%2BVMas%2BmtiN79fTJ%2F%2Fqw%2Bd%2BElqZrB3OrUTM6VFVg5Qs7jS24HKIhQAYbKRw%3D%3D")
      no-repeat;
    background-size: cover;
    background-position: bottom;
  }

  .w-bar {
    width: 1px;
  }

  .category-link {
    &:last-child {
      a {
        margin-right: 0 !important;
      }
    }
    a:not(.cate-active) {
      transform-origin: left top;
      display: flex;
      align-items: center;
      margin-right: 24px;
      padding: 0px;
      border-radius: 50rem;
      transition: all 0.5s;

      span {
        position: relative;
        transition: all 0.5s;
        opacity: 0;
        left: 0;
      }
      &:hover {
        text-shadow: 1px 1px 2px rgba(36, 36, 36, 0.6);
        transform: scale(1.05);
        background-color: transparent;
        color: #fff;
        span {
          opacity: 1;
          left: 12px;
        }
      }
    }

    .cate-active {
      display: inline-block;
      position: relative;
      margin-right: 64px;
      background-color: #fff;
      border-radius: 50rem;
      padding: 0;
      border-radius: 0;
      color: #fff;
      background-color: transparent;
      text-shadow: 1px 1px 2px rgba(36, 36, 36, 0.6);
      &::before {
        content: '';
        width: 100%;
        height: 4px;
        display: block;
        position: absolute;
        bottom: 1px;
        background-color: #bf7f5a;
        z-index: -1;
      }
      span {
        display: none;
      }
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
