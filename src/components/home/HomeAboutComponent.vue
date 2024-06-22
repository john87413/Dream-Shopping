<template lang="html">
  <div class="home-about container mb-12">
    <div class="d-flex mb-5 wow animate__animated animate__lightSpeedInLeft">
      <h3 class="title">關於品牌</h3>
      <p class="opacity-50 fs-5">About Us</p>
    </div>
    <div class="about-content row row-cols-2 align-items-center pb-5">
      <div
        class="position-relative col-12 col-lg d-flex flex-row flex-lg-column flex-wrap
        justify-content-md-between wow animate__animated animate__fadeInLeft"
      >
        <h1 class="about-title font-design mb-5">RingRing</h1>
        <p class="lh-lg letter-spacing-1">
          我們的目標是提供平價但不平凡的飾品，<br />
          讓女孩們追求漂亮的道路變得簡單，<br />
          Ring不僅代表著飾品也代表著環，<br />願你的美麗與RingRing環環相扣。
        </p>
        <div class="d-none d-lg-block position-absolute opacity-50 home-ellipse">
          <svg viewBox="0 0 340 200" height="200">
            <ellipse
              fill="none"
              stroke="#fff"
              stroke-width="1"
              stroke-dasharray="2"
              cx="160"
              cy="100"
              rx="160"
              ry="70"
              transform="rotate(-15,150,80)"
            />
          </svg>
        </div>
      </div>
      <div class="d-none d-lg-block wow animate__animated animate__fadeInRight">
        <img
          class="rounded-3 about-img"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625342978859.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DdnzFv7qNR1mc288VJSaHBzzcPSAHPygNkPgzgtcHizFyWYvHIjdClYNz9ihNEyRf7PHOoCgTVc%2FzxZ4wi9IK7T%2BfwULMeEJUfEp5yBWY%2FTqiPNnKZOBYFHhWGDWS8RAEDeb%2FD%2FcB4OW9FVpdH4Bjn7s58B222eCVmB7ZbFD6sNUA6b6CXcq5%2FXV1sSpy4%2FuHY22MFvZmWvUx0PZI60LcOMOnqOEvfm1dlNTrncsEbznLNzGuU7XT2Z0EPoTdGfw%2FgJYypKhCpVgBSoUMlW0rdpuJH3u7wSYd96ryzw8AnU%2BuaylW115DFXNdFMArhvJLXVbT68Fz0NOic3cvKQQHw%3D%3D"
          alt="RingRing"
        />
      </div>
    </div>
    <ServiceComponent></ServiceComponent>
  </div>
</template>
<script>
import ServiceComponent from '@/components/ServiceComponent.vue';

export default {
  components: {
    ServiceComponent,
  },
};
</script>
<style lang="scss"></style>
