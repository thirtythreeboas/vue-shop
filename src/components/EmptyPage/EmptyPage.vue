<template>
  <div class="empty-page">
    {{ `You've got nothing on your ${string === 'cart' ? 'cart' : 'wishlist'}.` }}
  </div>
</template>

<script setup>
  const props = defineProps({
    string: String
  })
</script>

<style lang="scss" scoped>
  .empty-page {
    padding: 50px;
    padding-bottom: 15px;
    font-size: 30px;
    border-bottom: 2px solid #c5afaf;
  }
</style>