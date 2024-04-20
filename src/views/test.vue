<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
    <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 总页数
    totalPages: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // 当前页
      currentPage: 1
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$emit('page-changed', this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$emit('page-changed', this.currentPage);
      }
    }
  },
  watch: {
    totalPages(newValue) {
      if (this.currentPage > newValue) {
        this.currentPage = newValue;
      }
    }
  }
}
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
