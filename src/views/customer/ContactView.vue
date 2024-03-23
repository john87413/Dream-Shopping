<template lang="html">
  <div class="contact-view container">
    <ol class="breadcrumb mb-3">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
      <li class="breadcrumb-item active">聯絡我們</li>
    </ol>
    <div class="py-5 border-bottom border-top border-light mb-9">
      <h3 class="fs-2 text-center">美麗，從這裡出發</h3>
    </div>
    <div class="contact-container px-10">
      <div class="d-flex mb-5">
        <h3 class="title">聯絡我們</h3>
        <p class="opacity-50 fs-5">Contact Us</p>
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-between mb-9">
          <div class="col-5 p-0 pe-3">
            <img
              class="rounded-3"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625638666278.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jTNMXMwJRjARojrEpu0R1uWFZ%2B9CXpB%2BeDqBcXlJ6IeeHdSFDKviG2dBEuAx3qXbgrv4D4sa23fyVoI6JpHtDMMY2Kf0xHAXjFGDR4WfsPfwow7Dka%2BaHGW7Gphr0mdoJ8uHxSOPvJF%2B6F2FxU8WSwDnEf6GIeDQvpxKv1D9Kkd3mitBguwDh%2FsEvQ2ujLnFlWgHts85wZJIG2cfE28vTOMoE%2B6O9tyDWt32FiOqcA7fVUHJ5hosungoUN0iCo99JMAd3rfAZUqjLxknfUO4rjLFtorkkHgIjBrjQmAH1zR87Cfqk9Ivsa5pdC0qtGZDdEzSOIimFAbVqvs5BxF2gQ%3D%3D"
              alt="RingRing"
            />
          </div>
          <div class="col-5 p-0 ps-3">
            <ul class="mb-4">
              <li class="lh-lg letter-spacing-1">客服電話：(02)-213-1234</li>
              <li class="lh-lg letter-spacing-1">
                客服信箱：ringring@gmail.com
              </li>
              <li class="lh-lg letter-spacing-1">
                客服時間：週一至週五：9:00 am - 18:00 pm
              </li>
              <li class="lh-lg letter-spacing-1">Instgram：@ringring</li>
              <li class="lh-lg letter-spacing-1">Facebook：Ringring</li>
            </ul>
            <div class="d-flex social-icon">
              <a class="scale-hover me-3" href="#" target="_blank">
                <span><img src="/images/fb.svg" alt="fb" /> </span>
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
    </div>
    <ul
      class="service row row-cols-4 py-5 border-top border-bottom border-light"
    >
      <li class="col border-end border-light">
        <span class="material-icons fs-1 mb-3"> local_shipping </span>
        <h3 class="fs-4 mb-4">交貨快速</h3>
        <p>
          在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。
        </p>
      </li>
      <li class="col border-end border-light">
        <span class="material-icons fs-1 mb-3"> lock </span>
        <h3 class="fs-4 mb-4">售後服務</h3>
        <p>為保障買家權益， 所有商品皆享有30日的售後服務。</p>
      </li>
      <li class="col border-end border-light">
        <span class="material-icons fs-1 mb-3"> question_answer </span>
        <h3 class="fs-4 mb-4">客服服務</h3>
        <p>如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</p>
      </li>
      <li class="col">
        <span class="material-icons fs-1 mb-3"> card_giftcard </span>
        <h3 class="fs-4 mb-4">包裝服務</h3>
        <p>如需額外包裝，可再下訂後通知我們，會有專人協助處理相關事宜。</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact-view {
  padding-top: 7rem;
  padding-bottom: 7rem;
  .service {
    margin: 0 1px;
  }
}
</style>
