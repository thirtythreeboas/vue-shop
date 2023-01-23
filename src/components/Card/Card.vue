<template>
  <div class="card">
    <CardHeaderVue 
      :title="item.title" 
      :image="item.image"
      :category="item.category"
      :id="item.id"
    />
    <CardDescriptionVue 
      :category="item.category"
      :rating="item.rating.rate"
      :price="item.price"
    />
    <AddToCartBtnVue :item="item" />
    <AddToFavs :item="item" :position="true"/>
  </div>
</template>

<script setup>
  import CardHeaderVue from './CardHeader.vue'
  import CardDescriptionVue from './CardDescription.vue'
  import AddToCartBtnVue from '@/components/UI/AddToCartBtn.vue'
  import AddToFavs from '@/components/UI/AddToFavs.vue'

  const props = defineProps({
    item: {
      type: Object
    }
  })
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    margin: 20px;
    gap: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    user-select: none;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
</style>