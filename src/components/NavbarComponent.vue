<template>
  <div class="navbar position-fixed w-100 d-flex
  justify-content-between align-items-center py-4 px-5">
    <div class="navbar-bg" :class="{'active': scrollDown}"></div>
    <router-link class="navbar-logo text-light fs-4" :to="`/`" @click="changePage">
      RingRing
    </router-link>
    <div class="navbar-container d-flex justify-content-center align-items-center">
      <div class="navbar-control d-flex" v-if="scrollDown || showIcon">
        <router-link class="me-4 scale-hover" :to="`/about`">
          <span class="material-symbols-rounded fs-3"> storefront </span>
        </router-link>
        <div class="pop-up">
          <a
            @click.stop.prevent="openNavList('favorite')"
            href="#"
            class="position-relative me-4 scale-hover"
          >
            <span class="nav-num"> 5 </span>
            <span class="material-symbols-rounded fs-3">
              favorite
            </span>
          </a>
          <div class="nav-dropdown bg-light" ref="navFavoriteDropdown" @click.stop>
            <div v-if="favoriteProduct.length <= 0">
              <p class="text-dark text-center p-5">收藏清單目前沒有商品喔</p>
              <div class="p-5">
                <router-link
                  :to="`/about`"
                  class="btn btn-secondary secondary-hover text-white w-100"
                  >
                  前往商店
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="pop-up">
          <a
            @click.stop.prevent="openNavList('cart')"
            v-if="showCart"
            href="#"
            class="position-relative scale-hover me-4"
          >
            <span class="nav-num">
              5
            </span>
            <span class="material-symbols-rounded fs-3"> shopping_cart </span>
          </a>
          <div class="nav-dropdown bg-light" ref="navCartDropdown" @click.stop>
            <div>
              <p class="text-dark text-center p-5">購物車目前沒有商品喔</p>
              <div class="p-5">
                <router-link
                  :to="`/about`"
                  class="btn btn-secondary secondary-hover text-white w-100"
                >
                  前往商店
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-toggle" @click="openNav" ref="toggle">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="navbar-collapse px-5" ref="navbar">
      <div class="d-flex justify-content-center align-items-center w-100">
        <div class="nav-menu d-flex justify-content-start">
          <ul class="">
            <li class="nav-item p-4">
              <router-link
                :to="`/`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('home')"
                @mouseleave="clear"
              >
                <p class="nav-number">01</p>
                <p class="nav-title">Home</p>
                <p class="nav-title-ch">首頁</p>
              </router-link>
            </li>
            <li class="nav-item p-4">
              <router-link
                :to="`/products`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('shop')"
                @mouseleave="clear"
              >
                <p class="nav-number">02</p>
                <p class="nav-title">Products</p>
                <p class="nav-title-ch">產品</p>
              </router-link>
            </li>
            <li class="nav-item p-4">
              <router-link
                :to="`/about`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('about')"
                @mouseleave="clear"
              >
                <p class="nav-number">03</p>
                <p class="nav-title">About</p>
                <p class="nav-title-ch">
                  關於<span class="font-design">RingRing</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item p-4">
              <router-link
                :to="`/contact`"
                class="nav-link"
                @click="changePage"
                @mouseenter="changeImg('contact')"
                @mouseleave="clear"
              >
                <p class="nav-number">04</p>
                <p class="nav-title">Contact</p>
                <p class="nav-title-ch">
                  聯絡<span class="font-design">RingRing</span>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nav-circle rounded-pill">
          <img
            :class="{
              show: nowPage === 'home',
              hoverImg: hoverPage === 'home' && nowPage !== 'home',
            }"
            class="w-100 rounded-pill"
            src="/images/home-link.jpg"
            alt="首頁"
          />
          <img
            :class="{
              show: nowPage === 'shop',
              hoverImg: hoverPage === 'shop' && nowPage !== 'shop',
            }"
            class="w-100 rounded-pill"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625492435301.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=c7FwVBPtQ1UK5BJawhwtiXs7rFeDuGH98BVhFGQj9mA%2B%2BCCIA5jSqcPvEkuEJZ4jb8Kvpj2cvpVMe26iZtgvKjPbXH0hAcqrVF%2B6W7wqsSn6OPD5P7E9c2F9iZyHx0JoN1CeY42PVhrnRKBLIBJpNPh8%2FbkT3b8bqm%2FwogEBsP%2FU3gzRRB8G9GJP19k83oblMs%2FLTkBW%2BleXfY4l3xkdSzi4580ADfPLbMYXv2oM0x55%2F3BV8zggSbVISk1%2FoZ8Dam0dly8zvlxnud8DZW46X586tuUATMWJgJOsKFKQjZQc1qB9RKeIgMuYdTXbzGeM6GDr4xGsxo%2B6lzkIbVYraw%3D%3D"
            alt="商店"
          />
          <img
            :class="{
              show: nowPage === 'about',
              hoverImg: hoverPage === 'about' && nowPage !== 'about',
            }"
            class="w-100 rounded-pill"
            src="/images/about-link.jpg"
            alt="關於品牌"
          />
          <img
            :class="{
              show: nowPage === 'contact',
              hoverImg: hoverPage === 'contact' && nowPage !== 'contact',
            }"
            class="w-100 rounded-pill"
            src="/images/contact-link.jpg"
            alt="聯絡我們"
          />
          <img
            :class="{
              show:
                nowPage !== 'shop' &&
                nowPage !== 'home' &&
                nowPage !== 'about' &&
                nowPage !== 'contact',
            }"
            class="w-100 rounded-pill"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625492474348.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=F00OuaEcKhqza62j3q%2Blu%2BPr393XsWsWh2uptHGrhsSY%2FL1%2Btl48IlEOH9urqKmb4akEreUVB%2F6JZHuc9D8gG2JNm2%2BYqA8w2rfRUIy68R7XV%2Fcf9nUwvKiR81XaiHheImCDDybmXBQ0awPr4ZBuCL1I1pBvRnM1ueOoTscoTbMGTX2%2F%2Bk9rdfXFQhhlQAtoWDb%2BH7gq07MABk%2FFN7VirZivolsO4BGFNsZRrYUW3tRvoIVJSqckRe9995nhMZ2jqDrOMLTkQxggBNU6LpULyVLT2ebG4EbB3Qf8NAKbFvQcpF13Rgu0geTwxCkkZK3X2%2B6i3JwTKSd24y4TRR8%2FWg%3D%3D"
            alt="RingRing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      scrollDown: false,
      nowPage: '',
      hoverPage: '',
      carts: [],
      favoriteProduct: [],
      showIcon: false,
      showCart: true,
      type: '',
      dropdownData: [],
      dropDownLoading: false,
    };
  },
  methods: {
    openNav() {
      this.$refs.toggle.classList.toggle('open');
      this.$refs.navbar.classList.toggle('open');
      this.nowPage = this.$route.name;
    },
    changePage() {
      this.$refs.toggle.classList.remove('open');
      this.$refs.navbar.classList.remove('open');
    },
    changeImg(page) {
      this.hoverPage = page;
    },
    clear() {
      this.hoverPage = '';
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.scrollDown = true;
      } else {
        this.scrollDown = false;
      }
    },
    openNavList(type) {
      this.type = type;
      if (type === 'cart') {
        this.$refs.navCartDropdown.classList.toggle('show');
        this.$refs.navFavoriteDropdown.classList.remove('show');
      } else if (type === 'favorite') {
        this.$refs.navFavoriteDropdown.classList.toggle('show');
        this.$refs.navCartDropdown.classList.remove('show');
      } else {
        this.$refs.navCartDropdown.classList.remove('show');
        this.$refs.navFavoriteDropdown.classList.remove('show');
      }
    },
    goToTarget(page) {
      this.$refs.navCartDropdown.classList.remove('show');
      this.$refs.navFavoriteDropdown.classList.remove('show');
      this.$router.push(`/${page}`);
    },
    closeDropDown() {
      if (this.$refs.navCartDropdown) {
        this.$refs.navCartDropdown.classList.remove('show');
      }
      if (this.$refs.navFavoriteDropdown) {
        this.$refs.navFavoriteDropdown.classList.remove('show');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.body.addEventListener('click', this.closeDropDown);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.removeEventListener('click', this.closeDropDown);
  },
};
</script>

<style lang="scss">
.navbar {
  z-index: 1020;
  transition: background-image 0.5s;

  .navbar-bg {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: url("/images/nav-bg.jpg") no-repeat center;
    background-size: cover;
    box-shadow: 0px 5px 10px rgba(#000, 0.1);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;

    &.active{
      opacity: 1;
    }
  }

  .navbar-logo {
    z-index: 1060;
    font-family: "Dancing Script", cursive;
  }

  .navbar-container {
    .pop-up{
      .nav-num {
        position: absolute;
        top: -10px;
        left: 16px;
        width: 18px;
        height: 18px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #bf7f5a;
        color: #fff;
        box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);
      }

      .nav-dropdown {
        width: 320px;
        position: absolute;
        top: 72px;
        right: 0px;
        opacity: 0;
        border-radius: 4px;
        pointer-events: none;
        overflow-y: hidden;
        transition: all 0.5s;
      }

      .nav-dropdown.show {
        opacity: 1;
        right: 24px;
        pointer-events: all;
      }
    }

    .navbar-toggle {
      position: relative;
      z-index: 1060;
      width: 72px;
      height: 18px;
      cursor: pointer;

      span {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: rgba(#fff, 0.8);
        transition: all 0.8s;

        &:nth-child(2) {
          top: 8px;
        }

        &:nth-child(3) {
          width: 48px;
          height: 2px;
          top: 16px;
          left: auto;
          right: 0;
        }
      }

      &.open {
        width: 36px;

        span {
          &:nth-child(1) {
            top: 8px;
            transform: rotate(135deg);
          }

          &:nth-child(2) {
            opacity: 0;
            left: 60px;
          }
          &:nth-child(3) {
            width: 100%;
            top: 8px;
            transform: rotate(-135deg);
          }
        }
      }
    }
  }

  .navbar-collapse {
    position: fixed;
    top: -100vh;
    left: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: url("/images/nav-bg.jpg") no-repeat center;
    background-size: cover;
    padding: 0 12px;
    transition: all 0.6s;

    &.open {
      top: 0;
      left: 0;
      z-index: 1050;
      .nav-item {
        position: relative;
        opacity: 0;
        top: 100px;
        animation-name: nav-link-fade;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        &:nth-child(1) {
          animation-delay: 0.5s;
        }
        &:nth-child(2) {
          animation-delay: 0.7s;
        }
        &:nth-child(3) {
          animation-delay: 0.9s;
        }
        &:nth-child(4) {
          animation-delay: 1.1s;
        }
      }
      .nav-circle {
        animation: nav-link-fade 0.5s linear 0.2s forwards;
      }
    }

    .nav-menu{
      width: 50%;

      .nav-item {
        &:hover {
          .nav-title {
            &::before {
              width: 100%;
            }
          }
        }

        .nav-link {
          display: flex;
          align-items: center;
          &.router-link-exact-active {
            .nav-title {
              &::before {
                width: 100%;
              }
            }
          }
        }

        .nav-number {
          font-size: 12px;
          margin-right: 16px;
          color: #fff;
        }

        .nav-title {
          font-size: 28px;
          letter-spacing: 3px;
          margin-right: 60px;
          color: #fff;
          font-family: 'Abril Fatface', cursive;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            display: inline-block;
            height: 30px;
            right: -15px;
            top: 50%;
            width: 1px;
            border-left: 1px solid #fff;
            transform: translateY(-50%) skewX(-45deg);
            transform-origin: left bottom;
          }
          &::before {
            content: '';
            position: absolute;
            display: block;
            width: 0;
            height: 10px;
            bottom: 8px;
            z-index: -1;
            transition: all 0.5s;
            background-color: rgba(#bf7f5a, 0.8);
          }
        }

        .nav-title-ch {
          font-size: 16px;
          color: rgba(#fff, 0.6);
        }
      }
    }

    .nav-circle {
      position: relative;
      opacity: 0;
      padding-top: 40%;
      width: 40%;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 105%;
        border-radius: 50em;
        top: -2.5%;
        left: 0;
        border: 1px dashed #fff;
        z-index: -1;
        opacity: 0.6;
        animation: rotate linear 10s infinite;
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 110%;
        border-radius: 50em;
        top: -5%;
        left: 0%;
        border: 1px dashed #fff;
        z-index: -1;
        opacity: 0.4;
        animation: rotate linear 10s infinite reverse;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.5s;
        transform: rotateY(-180deg);
        &.show {
          z-index: -1;
          opacity: 1;
          transform: rotateY(0deg);
        }
        &.hoverImg {
          opacity: 1;
          transform: rotateY(0deg);
          transform-style: preserve-3d;
        }
      }
    }
  }
}

@keyframes nav-link-fade {
  0% {
    opacity: 0;
    top: 100px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}
</style>
