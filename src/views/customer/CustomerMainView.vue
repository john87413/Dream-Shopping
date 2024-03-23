<template lang="html">
  <NavbarComponent />
  <div class="background"></div>
  <RouterView />
  <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  components: { FooterComponent, NavbarComponent },
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
  opacity: 0.9;
}
</style>
