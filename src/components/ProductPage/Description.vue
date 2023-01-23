<template>
  <ul class="description">
    <li><span>Feedback:   </span>
      {{ `${item.rating?.count} ratings` }}
      <StarRating :rating="item.rating?.rate"/>
      <AddToFavs :item="item" :position="false" />
    </li>
    <li><span>Category: </span>{{ item.category }}</li>
    <li><span>Price: </span>{{ item.price }}</li>
    <li><span>Description: </span>{{ item.description }}</li>
  </ul>
</template>

<script setup>
  import StarRating from '@/components/UI/StarRating.vue'
  import AddToFavs from '@/components/UI/AddToFavs.vue'

  const props = defineProps({
    item: Object,
    source: String,
    title: String,
    detail: String,
    price: Number,
    category: String
  })
</script>
  
<style lang="scss" scoped>
  .description {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: justify;
    margin-bottom: 40px;
    padding: 10px;
    li:nth-child(3)::after {
      content: '$';
    }
    span {
      font-weight: 600;
    }
  }
</style>