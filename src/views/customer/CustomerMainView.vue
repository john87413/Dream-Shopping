<template lang="">
  <div class="mt-5"></div>
  <div class="background"></div>
  <RouterView />
  <FooterComponent />
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: { FooterComponent },
};
</script>
<style lang="scss">
.background {
  background-image: url("/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
