<template>
  <LoadingVue v-if="shop.isLoading" />
  <div v-else class="container">
    <CardVue
      v-for="item in shop.category"
      :item="item"
      :key="item.id"
    />
  </div>
</template>

<script setup>
  import CardVue from '@/components/Card/Card.vue'
  import LoadingVue from '@/components/UI/Loading.vue'
  import { useShopStore } from '@/stores/shopStore'
  import { onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const shop = useShopStore()
  const route = useRoute()

  onMounted(() => {
    shop.getProducts(route.params.category)
  })

  watch(() => route.params, () => {
    shop.getProducts(route.params.category)
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/globalContainerStyles';
</style>