<template>
  <RouterLink to="/cart" class="added-goods">
    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    <span class="counter">
      {{ cart.length }}
    </span>
  </RouterLink>
  <RouterLink to="/favorites" class="added-goods">
    <font-awesome-icon icon="fa-solid fa-heart" />
    <span class="counter">
      {{ favorites.length }}
    </span>
  </RouterLink>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { useShopStore } from '@/stores/shopStore.js'
  import { storeToRefs } from 'pinia';
  const data = useShopStore()
  const { cart, favorites } = storeToRefs(data)
</script>
  
<style lang="scss" scoped>
  .added-goods {
    position: relative;
    text-decoration: none;
    color: #cc8fe9;
    font-size: 20px;
    margin: 10px;
    padding: 0 20px;
    &:hover {
      color: #ae00ff;
    }
  }

  .counter {
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    position: absolute;
    top: -13px;
    right: -13px;
    color: #fff;
    background-color: #fa5757;
    border-radius: 50%;
    padding: 13px;
    width: 10px;
    height: 10px;
    text-align: center;
    line-height: 3px;
  }
</style>