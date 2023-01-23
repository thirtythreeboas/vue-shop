<template>
  <div class="details">
    <span 
      class="price" 
      :style="{color: getRandomColor()}"
    >
      {{ price }}
    </span>

    <StarRatingVue :rating="rating" />
    
    <span class="category">
      <RouterLink :to="`/category/${category}`" class="category__link">
        {{ category }}
      </RouterLink>
    </span>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { getRandomColor } from '@/hooks/getRandomColor.js'
  import StarRatingVue from '@/components/UI/StarRating.vue';
  
  const props = defineProps({
    category: String,
    rating: Number,
    price: Number
  })
</script>

<style lang="scss" scoped>
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .price {
    font-weight: bold;
    &:after {
      content: ' \0024';
    }
  }

  .category__link {
    text-decoration: none;
    color: #000;
    font-weight: 600;
  }
</style>