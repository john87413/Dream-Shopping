<template lang="html">
  <div class="home-product-category container mb-7">
    <div
      class="d-flex align-items-center mb-5 wow animate__animated animate__lightSpeedInLeft"
    >
      <h3 class="title">商品專區</h3>
      <p class="opacity-50 fs-5">Products</p>
    </div>
    <div class="row row-cols-3">
      <div data-wow-delay="0.5s" class="col-12 col-lg wow animate__animated animate__flipInY">
        <CategoryTopicComponent
          imgLink="/images/topic-ring.jpg"
          category="戒指"
          :isMarginBottom="true"
        ></CategoryTopicComponent>
        <CategoryTopicComponent
          imgLink="/images/topic-watch.jpg"
          category="手錶"
          :isMarginBottom="false"
        ></CategoryTopicComponent>
      </div>
      <div data-wow-delay="1s" class="col-12 col-lg wow animate__animated animate__flipInY">
        <CategoryTopicComponent
          imgLink="/images/topic-necklace.jpg"
          category="項鍊"
          :isMarginBottom="false"
        ></CategoryTopicComponent>
      </div>
      <div data-wow-delay="1.5s" class="col-12 col-lg wow animate__animated animate__flipInY">
        <CategoryTopicComponent
          imgLink="/images/topic-earring.jpg"
          category="耳環"
          :isMarginBottom="true"
        ></CategoryTopicComponent>
        <CategoryTopicComponent
          imgLink="/images/topic-bracelet.jpg"
          category="手鍊"
          :isMarginBottom="false"
        ></CategoryTopicComponent>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryTopicComponent from './CategoryTopicComponent.vue';

export default {
  components: {
    CategoryTopicComponent,
  },
};
</script>
<style lang="scss"></style>
