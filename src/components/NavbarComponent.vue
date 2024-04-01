<template>
  <div
    class="navbar position-fixed w-100 d-flex justify-content-between align-items-center py-4 px-5"
  >
    <div class="navbar-bg" :class="{ active: scrollDown }"></div>
    <router-link
      class="navbar-logo text-light fs-4"
      :to="`/`"
      @click="changePage"
    >
      RingRing
    </router-link>
    <div
      class="navbar-container d-flex justify-content-center align-items-center"
    >
      <div v-if="scrollDown" class="navbar-control d-flex">
        <router-link class="me-4 scale-hover" :to="`/shop`">
          <span class="material-icons fs-3"> storefront </span>
        </router-link>
        <div class="pop-up">
          <a
            @click.stop.prevent="openNavList('favorite')"
            href="#"
            class="d-block position-relative me-4 scale-hover"
          >
            <span class="nav-num"> 5 </span>
            <span class="material-icons fs-3"> favorite </span>
          </a>
          <div
            class="nav-dropdown bg-light"
            ref="navFavoriteDropdown"
            @click.stop
          >
            <div v-if="favoriteProduct.length <= 0">
              <p class="text-dark text-center p-3">收藏清單目前沒有商品喔</p>
              <div class="p-3">
                <router-link
                  :to="`/shop`"
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
            href="#"
            class="d-block position-relative scale-hover me-4"
          >
            <span v-if="carts.length" class="nav-num"> {{ carts.length }} </span>
            <span class="material-icons fs-3"> shopping_cart </span>
          </a>
          <div class="nav-dropdown bg-light" ref="navCartDropdown" @click.stop>
            <div
              v-if="popupLoading"
              class="d-flex justify-content-center align-items-center
              position-absolute w-100 h-100 top-0 bg-light bg-opacity-50 z-1"
            >
              <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div v-if="carts.length <= 0">
              <p class="text-dark text-center p-3">購物車目前沒有商品喔</p>
              <div class="p-3">
                <router-link
                  :to="`/cart`"
                  class="btn btn-secondary secondary-hover text-white w-100"
                >
                  前往購物車
                </router-link>
              </div>
            </div>
            <template v-else>
              <ul class="nav-dropdown-body">
                <li
                  v-for="item in carts"
                  class="d-flex text-dark align-items-center
                  justify-content-between border-bottom p-3"
                  :key="item.id"
                >
                  <div class="d-flex align-items-center">
                    <img
                      class="w-25 me-2"
                      :src="item.product.imageUrl"
                      :alt="item.product.title"
                    />
                    <div class="">
                      <p>{{ item.product.title }}</p>
                      <p class="fs-7 opacity-75">
                        {{ item.qty }} * NT${{ item.product.price }} = NT${{
                          item.final_total
                        }}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-dark"
                    @click.prevent="removeCartItem(item.id)"
                  >
                    <span class="material-icons scale-hover">
                      delete_forever
                    </span>
                  </a>
                </li>
              </ul>
              <div class="p-3">
                <router-link
                  :to="`/cart`"
                  class="btn btn-secondary secondary-hover text-white w-100"
                >
                  前往購物車
                </router-link>
              </div>
            </template>
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
                :to="`/shop`"
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
import { mapActions, mapState } from 'pinia';
import cartStore from '@/store/cartStore';

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
      favoriteProduct: [],
      popupType: '',
      popupLoading: false,
    };
  },
  computed: {
    ...mapState(cartStore, {
      carts: (store) => store.shoppingCart.carts,
    }),
  },
  methods: {
    ...mapActions(cartStore, ['readCart', 'delCartItem']),
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
    openNavList(popupType) {
      this.popupType = popupType;
      if (popupType === 'cart') {
        this.$refs.navCartDropdown.classList.toggle('show');
        this.$refs.navFavoriteDropdown.classList.remove('show');
      } else if (popupType === 'favorite') {
        this.$refs.navFavoriteDropdown.classList.toggle('show');
        this.$refs.navCartDropdown.classList.remove('show');
      } else {
        this.$refs.navCartDropdown.classList.remove('show');
        this.$refs.navFavoriteDropdown.classList.remove('show');
      }
    },
    closeDropDown() {
      if (this.$refs.navCartDropdown) {
        this.$refs.navCartDropdown.classList.remove('show');
      }
      if (this.$refs.navFavoriteDropdown) {
        this.$refs.navFavoriteDropdown.classList.remove('show');
      }
    },
    // get all cart item
    async getCart() {
      this.popupLoading = true;
      await this.readCart();
      this.popupLoading = false;
    },
    // remove single cart item
    async removeCartItem(id) {
      this.popupLoading = true;
      await this.delCartItem(id);
      this.popupLoading = false;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.body.addEventListener('click', this.closeDropDown);
    this.getCart();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.removeEventListener('click', this.closeDropDown);
  },
};
</script>
