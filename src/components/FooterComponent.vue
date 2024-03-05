<template lang="html">
  <div class="footer container mb-5">
    <div class="row">
      <div class="col">
        <h4 class="mb-4">品牌故事</h4>
        <ul class="footer-link">
          <li class="mb-2">
            <router-link :to="`/about`">
              關於品牌
              <span class="footer-light-text ms-2">About Us</span>
            </router-link>
          </li>
          <li>
            <router-link :to="`/contact`">
              聯絡我們
              <span class="footer-light-text ms-2">Contact Us</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col">
        <h4 class="text-lg mb-4">商品專區</h4>
        <ul class="footer-link">
          <li class="mb-2">
            <router-link :to="`/about`">
              戒指
              <span class="footer-light-text ms-2">Rings</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link :to="`/about`">
              耳環
              <span class="footer-light-text ms-2">Earrings</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link :to="`/about`">
              手鍊
              <span class="footer-light-text ms-2">Bracelets</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link :to="`/about`">
              手錶
              <span class="footer-light-text ms-2">Watches</span>
            </router-link>
          </li>
          <li>
            <router-link :to="`/about`">
              項鍊
              <span class="footer-light-text ms-2">Necklaces</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col">
        <h4 class="mb-4">聯絡我們</h4>
        <ul class="mb-3">
          <li class="mb-2">電話 : 02 213 1234</li>
          <li class="mb-2">E-mail : ringring@gmail.com</li>
          <li>MON - FRI : 9:00 am - 18:00 pm</li>
        </ul>
        <div class="d-flex social-icon">
          <a class="scale-hover me-3" href="#" target="_blank">
            <span><img src="/images/fb.svg" alt="fb" /></span>
          </a>
          <a class="scale-hover me-3" href="#" target="_blank">
            <span><img src="/images/ig.svg" alt="ig" /> </span>
          </a>
          <a class="scale-hover" href="#" target="_blank">
            <span><img src="/images/line.svg" alt="line" /> </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-light-text text-center py-4">
    <p>Copyright ©RingRing All Rights Reserved. Designed by ChiaYu</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-light-text {
  color: hsla(0, 0%, 100%, 0.6);
}

.footer-link {
  span {
    transition: all 0.5s;
  }

  a {
    transition: all 0.5s;
    transform-origin: left top;

    &:hover {
      text-shadow: 1px 1px 2px rgba(36, 36, 36, 0.6);
      transform: scale(1.05);

      span {
        color: #fff !important;
      }
    }
  }
}

.social-icon {
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
