<template>
  <LoadingVue v-if="data.isLoading" />
  <div 
    v-else 
    class="product__page"
  >
    <HeaderVue 
      :title="singleProduct.title"
      :src="singleProduct.image"
    />
    <DescriptionVue
      :item="singleProduct"
    />
    <AddToCartBtn :item="singleProduct" :isFixed="true" />
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useShopStore } from '@/stores/shopStore'
  import LoadingVue from '@/components/UI/Loading.vue'
  import HeaderVue from './Header.vue'
  import DescriptionVue from './Description.vue'
  import AddToCartBtn from '@/components/UI/AddToCartBtn.vue'

  const route = useRoute()
  const data = useShopStore()
  const { singleProduct } = storeToRefs(data)
  
  onMounted(() => {
    const id = route.params.productId
    data.getSingleProduct(id)
  })
</script>

<style lang="scss" scoped>
  .product__page {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>