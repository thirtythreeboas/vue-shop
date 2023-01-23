<template>
  <LoadingVue v-if="shop.isLoading" />
  <EmptyPage 
    v-else-if="shop.cart.length === 0" 
    :string="'cart'" 
  />
  <div v-else class="container">
    <CardVue
      v-for="item in shop.cart"
      :item="item"
      :key="item.id"
    />
  </div>
</template>

<script setup>
  import CardVue from '@/components/Card/Card.vue'
  import LoadingVue from '@/components/UI/Loading.vue'
  import EmptyPage from '@/components/EmptyPage/EmptyPage.vue'
  import { useShopStore } from '@/stores/shopStore'

  const shop = useShopStore()

</script>
  
<style lang="scss" scoped>
  @import '@/styles/globalContainerStyles';
</style>