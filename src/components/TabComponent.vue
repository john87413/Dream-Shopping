<template>
    <div class="container pb-8">
      <ul class="nav nav-tabs mb-6" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true">
            商品詳情
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            商品圖片
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false">
            購物須知
          </button>
        </li>
      </ul>
      <div class="tab-content px-lg-8" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div>
            <h4 class="fw-bold text-base mb-2">產品描述</h4>
            <p class="mb-8">{{ product.description }}</p>
          </div>
          <div>
            <h4 class="fw-bold text-base mb-2">說明內容</h4>
            <p class="">{{ product.content }}</p>
          </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <img class="w-100 w-md-60 mx-auto mb-8" :src="product.imageUrl" :alt="product.title"/>
          <img
            v-for="(img, index) in product.imagesUrl"
            :key="index"
            class="w-100 w-md-60 mx-auto mb-8"
            :src="img"
            :alt="product.title"
          />
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <h4 class="fw-bold text-base mb-2">商品購買須知</h4>
          <p class="mb-6">
            產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
            商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。 <br />
            RingRing盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
          </p>
          <h4 class="fw-bold text-base mb-2">退換貨須知</h4>
          <p>
            依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
          </p>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>
