<template>
  <swiper-container
    :loop="false"
    :space-between="10"
    :navigation="false"
    thumbs-swiper=".my-thumbs"
    class="my-swiper"
  >
    <swiper-slide
      ><img :src="product.imageUrl" :alt="product.title"
    /></swiper-slide>
    <swiper-slide v-for="(img, index) in product.imagesUrl" :key="index">
      <img :src="product.imagesUrl[index]" :alt="product.title" />
    </swiper-slide>
  </swiper-container>
  <swiper-container
    :loop="false"
    :space-between="10"
    :slides-per-view="6"
    :watch-slides-visibility="true"
    :watch-slides-progress="true"
    class="my-thumbs mt-4"
  >
    <swiper-slide
      ><img :src="product.imageUrl" :alt="product.title"
    /></swiper-slide>
    <swiper-slide v-for="(img, index) in product.imagesUrl" :key="index">
      <img :src="product.imagesUrl[index]" :alt="product.title" />
    </swiper-slide>
  </swiper-container>
</template>
<script>
import { register } from 'swiper/element/bundle';

export default {
  props: {
    product: Object,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    register();
  },
};
</script>
