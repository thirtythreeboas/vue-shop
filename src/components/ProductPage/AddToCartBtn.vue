<template>
  <button 
    v-if="isInCart"
    @click="RemoveFromCart"
    class="add-to-favs btn"
    >
    REMOVE FROM CART
  </button>
  <button 
    v-else
    class="add-to-cart btn"
    @click="addToCart"
    
  >
    ADD TO CART
  </button>
</template>

<script setup>
  import { useShopStore } from '../../stores/shopStore'
  import { ref, onMounted } from 'vue';
  const data = useShopStore()
  let isInCart = ref(false)
  const props = defineProps({
    prod: Object
  })
  const addToCart = function() {
    isInCart.value = !isInCart.value
    data.cart.push(props.prod)
    console.log(data.cart)
  }
  
  const RemoveFromCart = function() {
    isInCart.value = !isInCart.value
    data.cart = data.cart.filter(e => e.id !== props.prod.id)
    console.log(data.cart)
  }

  onMounted(() => {
    const foundValue = data.cart.find(e => e.id === props.prod.id)
    isInCart.value = foundValue ? true : false
  })
</script>
  
<style lang="scss" scoped>
  .btn {
    position: fixed;
    bottom: 0;
    border: none;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
  }

  .add-to-cart {
    background: #4cdb58;
    &:hover {
      background: #6ce676;
    }
  }

  .add-to-favs {
    background: #dd2e2e;
    &:hover {
      background: #e05a5a;
    }
  }
</style>