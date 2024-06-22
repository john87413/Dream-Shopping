<template lang="html">
  <a
    href="#"
    @click.prevent="goToCategory('戒指')"
    :class="[
      'position-relative', 'bg-topic',
      category === '項鍊' ? 'bg-topic-necklace' : '',
      isMarginBottom ? 'mb-4' : 'mb-4 mb-lg-0',
    ]"
  >
    <img
      class="position-absolute w-100 top-0 rounded-3"
      :src="imgLink"
      :alt="category"
    />
    <div class="bg-topic-mask position-absolute top-50 start-50 translate-middle rounded-3"></div>
    <p class="fs-4 position-absolute">{{ category }}</p>
  </a>
</template>
<script>
export default {
  props: {
    imgLink: String,
    category: String,
    isMarginBottom: Boolean,
  },
  methods: {},
};
</script>
<style lang="scss"></style>
