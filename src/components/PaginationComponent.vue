<template lang="html">
  <div class="pagiantion-container d-flex justify-content-end">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-if="pages.current_page !== 1">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click="emitPages(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(item, index) in pages.total_pages"
          :key="index"
          :class="{ active: item === pages.current_page }"
        >
          <span v-if="item === pages.current_page" class="page-link">
            {{ item }}
          </span>
          <a
            v-else
            class="page-link"
            href="#"
            @click.prevent="emitPages(item, category)"
            >{{ item }}
          </a>
        </li>
        <li class="page-item" v-if="pages.current_page !== pages.total_pages">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click="emitPages(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ['pages', 'category'],
  data() {
    return {};
  },
  methods: {
    emitPages(page, category) {
      this.$router.push({ name: 'shop', query: { category, page } });
      this.$emit('emit-pages', page);
    },
  },
};
</script>
<style lang="scss">
.pagiantion-container {
  .pagination {
    --bs-pagination-bg: transparent;
    .page-item {
      &.active {
        .page-link {
          background-color: white;
          color: black;
        }
      }
      .page-link {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s;
        color: white;
        border: transparent;
        border-radius: 50%;
        margin: 0 5px;
        padding: 0;
        width: 30px;
        height: 30px;

        &:hover {
          background-color: rgb(255, 255, 255, 0.7);
          color: black;
        }
      }
    }
  }
}
</style>
