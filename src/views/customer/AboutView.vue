<template lang="html">
  <div class="about-view container">
    <ol class="breadcrumb mb-3">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
      <li class="breadcrumb-item active">關於品牌</li>
    </ol>
    <div class="py-5 border-bottom border-top border-light mb-9">
      <h3 class="fs-2 text-center">時尚生活，由妳自己定義</h3>
    </div>
    <div class="about-cotainer px-10 mb-5">
      <div class="d-flex mb-5">
        <h3 class="title">關於品牌</h3>
        <p class="opacity-50 fs-5">About Us</p>
      </div>
      <div class="container">
        <div class="row row-cols-2">
          <div class="col p-0 pb-5">
            <img
              class="rounded-3 w-80"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002100807.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gOUmRi%2FMLvpWeUxqHqRD2Ua36RwE43MDW%2Bh9cbTxDoDaMsRCqzXkhYgb8WAsmZ5PIfF4u7DhXuXu%2Bp5LqZ7LAcwhfX19nVUgNieX9D6H3lkW0mxea7%2FFaxTetnc2l%2FfOVHzOJgBhtntNmLE5eeu6R%2F879ZpigBpvex1T9tPiVhYDj8jwB834SPW1NxSxsxQMhay3CiPv54DbdjVmEqWurDMVX0nSxYiCr5W7uAqt3PcO4UMldnzvN68HIHEB50F7Lb5IqkN%2BHzT6g3Nn3KmcsL4Zv215DU35Vk%2BIQi20TrE13uQ6N4Yxbe14uTd2FqndwWyFQbYk1jqkMQUhwlrX0g%3D%3D"
              alt="RingRing"
            />
          </div>
          <div class="col d-flex flex-column align-items-end p-0 pb-5">
            <p class="pb-4 w-80 lh-lg">
              我們的目標是提供平價但不平凡的飾品，<br />
              讓女孩們追求漂亮的道路變得簡單，<br />
              Ring不僅代表著飾品也代表著環，<br />願你的美麗與RingRing環環相扣。
            </p>
            <img
              class="rounded-3 w-80"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002126625.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NfxUb1qm6ZSc2HQi%2FVgKwSR7Q3e1THmFmT5C6xRZFX%2Bau35AGe1Ze8shAwm8IUKo9kWPIJS8hg5YzjK%2BRSyT60GNJILY9j4FYhLT4IV8QW4ouZGZD0I%2FbSdgjKK5JinCGTMRoWXSyKqvI2dvH1HQT5m0fJ6Pt2HWVSTz6kOUUd5ZWOoaQP%2Boy%2BEa2JbIjZpICMbfAME6R4fUqj94Vg%2FNcbNvp0bpx8PP2UYHCuMRuHnZmXPpqjGth5EZoKGe10Q3DaCSWvevg2Y0zvA7dy1GqbTbP5XdmW4VP9hbLXTCDc35ruhvXZiAM%2FwJ3o9aF28LmUkQ6Jvh8MtLkltw6VZsCA%3D%3D"
              alt="RingRing"
            />
          </div>
          <div class="col d-flex flex-column p-0 pb-5">
            <p class="pb-4 lh-lg">
              我們只想給你最好的品質，<br />
              因此提供完善的售後服務以保障買家權益。<br />
              所有商品皆享有30日的售後服務，<br />
              收到商品後記得先檢查喔！
            </p>
            <img
              class="rounded-3 w-80"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002178729.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lbw0%2FedNqyx2YR84w3r5mxSxRWMcf1Z76LzdVNPpJov%2BVG8N4taoko9sKLL0wc07mLoyFtpqYMKGm%2BlmIvuuvwWKMTrPyd%2B1OwaH9YA0OPHSaxQk9ZBzdMUfEUEI13ZkUl3646LX8ShPmPFuBfBkseKHeo%2BLjFwx9O5XpguNzSmO5G4ZgVDUZphMOTTJRp3UrK2Wxi7gegiH5jiTZuoWSho3ytOf7WOkP4fmVAGJZyvwVujHU4aGxpO3fezvnYeSgcJFZLJym4v9Wrgwia%2BBh%2BF8%2BlBHbpbcxURwvUy03RqoTjSJTa7XGQDUGqDsA9Fe6moL1Bd%2B6xR%2B7YVqmC2sKg%3D%3D"
              alt="RingRing"
            />
          </div>
          <div class="col p-0 pb-5 text-end">
            <img
              class="rounded-3 w-80"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1626002142810.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aFo90%2F6RPgTHbltitJlchKED5smRJf7qvSYcecmPbbV6hd7%2BwPRSGkZZ%2FC%2BOxlNLnWOBeuhoVLToVOnbJNq9MmMMJXP9SnToUToIvtDzo57VH4vrmikr9UDdp502aQ%2Bc75lcSyyhWfeWtjRHGzOO9nHbKP8NmNhYEJo8laZkZuc%2F5ejyujctmFXPootLiOHWoYul24NAzBNGfR0sAXpl6J6DcPK0ePbj1Ara2IfjyKBPL2RhueMTXqleGII4dYN6oQq5FLuC7eOxUSQhr%2BTEsZ2x1cLyTWsbvYohaF9m8K73tI%2FIB%2B74cMiRa7X%2BeHXdkwHWCQYYOpk2r86ntDTkPg%3D%3D"
              alt="RingRing"
            />
          </div>
        </div>
      </div>
    </div>
    <ul
      class="about-service row row-cols-4 py-5 border-top border-bottom border-light"
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
        <span class="material-icons fs-1 mb-3">
          question_answer
        </span>
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
.about-view {
  padding-top: 7rem;
  padding-bottom: 7rem;
  .about-service {
    margin: 0 1px;
  }
}
</style>
