<template lang="html">
  <div class="home-product-category container mb-5">
    <div
      class="d-flex align-items-center mb-5 wow animate__animated animate__lightSpeedInLeft"
    >
      <h3 class="title">商品專區</h3>
      <p class="opacity-50 fs-5">Products</p>
    </div>
    <div class="row row-cols-3">
      <div data-wow-delay="0.5s" class="wow animate__animated animate__flipInY">
        <a href="#" @click.prevent="goToCategory('戒指')" class="bg-topic mb-4">
          <img
            class="position-absolute w-100 top-0 rounded-3"
            src="/images/topic-ring.jpg"
            alt="戒指"
          />
          <div class="bg-topic-mask rounded-3"></div>
          <p class="fs-4 position-absolute">戒指</p>
        </a>
        <a
          href="#"
          @click.prevent="goToCategory('手錶')"
          class="bg-topic rounded-3"
        >
          <img
            class="position-absolute w-100 top-0 rounded-3"
            src="/images/topic-watch.jpg"
            alt="手錶"
          />
          <div class="bg-topic-mask rounded-3"></div>
          <p class="fs-4 position-absolute">手錶</p>
        </a>
      </div>
      <div data-wow-delay="1s" class="wow animate__animated animate__flipInY">
        <a
          href="#"
          @click.prevent="goToCategory('項鍊')"
          class="bg-topic bg-topic-necklace rounded-3"
        >
          <img
            class="position-absolute top-0 w-100 rounded-3"
            src="/images/topic-necklace.jpg"
            alt="項鍊"
          />
          <div class="bg-topic-mask rounded-3"></div>
          <p class="fs-4 position-absolute">項鍊</p>
        </a>
      </div>
      <div data-wow-delay="1.5s" class="wow animate__animated animate__flipInY">
        <a
          href="#"
          @click.prevent="goToCategory('耳環')"
          class="bg-topic rounded-3 mb-4"
        >
          <img
            class="position-absolute top-0 w-100 rounded-3"
            src="/images/topic-earring.jpg"
            alt="耳環"
          />
          <div class="bg-topic-mask rounded-3"></div>
          <p class="fs-4 position-absolute">耳環</p>
        </a>
        <a
          href="#"
          @click.prevent="goToCategory('手鍊')"
          class="bg-topic rounded-3"
        >
          <img
            class="position-absolute top-0 w-100 rounded-3"
            src="/images/topic-bracelet.jpg"
            alt="手鍊"
            data-aos="fade-left"
          />
          <div class="bg-topic-mask rounded-3"></div>
          <p class="fs-4 position-absolute">手鍊</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
