<template lang="html">
  <div>
    <div class="vh-100"></div>
    <LoadingComponent :isLoading="isLoading" />
    <!-- recommendation -->
    <RecommendComponent></RecommendComponent>
    <!-- swipper -->
    <SwipperComponent :products="products"></SwipperComponent>
    <!-- category -->
    <CategoryComponent></CategoryComponent>
    <!-- about -->
    <AboutComponent></AboutComponent>
  </div>
</template>
<script>
import ProductServices from '@/services/customer/Product.Service';

import LoadingComponent from '@/components/LoadingComponent.vue';
import RecommendComponent from '@/components/home/HomeRecommendComponent.vue';
import SwipperComponent from '@/components/home/HomeSwipperComponent.vue';
import CategoryComponent from '@/components/home/category/HomeCategoryComponent.vue';
import AboutComponent from '@/components/home/HomeAboutComponent.vue';

export default {
  components: {
    LoadingComponent,
    RecommendComponent,
    SwipperComponent,
    CategoryComponent,
    AboutComponent,
  },
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    async getProducts(page = 1) {
      const res = await ProductServices.getProductsByPage(page, '');
      this.products = res.data.products;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss"></style>
