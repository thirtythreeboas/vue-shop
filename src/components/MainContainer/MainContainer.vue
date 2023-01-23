<template>
  <LoadingVue v-if="shop.isLoading" />
  <div class="container" v-else>
    <Card
      v-for="item in shop.data"
      :item="item"
      :key="item.id"
    />
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'  
  import { useShopStore } from '@/stores/shopStore'
  import Card from '@/components/Card/Card.vue'
  import LoadingVue from '@/components/UI/Loading.vue'
  
  const shop = useShopStore()
  
  onMounted(() => {
    shop.getRandomProducts()
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/globalContainerStyles';
</style>