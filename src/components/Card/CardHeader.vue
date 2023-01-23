<template>
  <RouterLink 
  class="card__header"
  :to="`/product/${id}`"
    >
    <img
      class="image"
      :src="image"
      :alt="title"
    >
    <header class="header">{{ `${title.substring(0, 20)}...` }}</header>
  </RouterLink>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  const props = defineProps({
    title: String,
    image: String,
    category: String,
    id: Number
  })
</script>

<style scoped>
  .card__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: auto;
    padding-top: 15px;
    gap: 20px;
    text-decoration: none;
    color: #000;
  }
  .header {
    text-align: center;
    font-weight: bold;
  }
  .image {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
</style>