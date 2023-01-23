<template>
  <button 
    v-if="added"
    @click="addToCart"
    :class="isFixed ? 'remove-from-cart btn fixed' : 'remove-from-cart btn'"
  >
    REMOVE FROM CART
  </button>
  <button 
    v-else
    :class="isFixed ? 'add-to-cart btn fixed' : 'add-to-cart btn'"
    :style="{backgroundColor: color}"
    @click="addToCart"
    
  >
    ADD TO CART
  </button>
</template>

<script setup>
  import { useShopStore } from '../../stores/shopStore'
  import { ref, onMounted } from 'vue'
  import { getRandomColor } from '@/hooks/getRandomColor.js'

  const data = useShopStore()
  const color = getRandomColor()

  let added = ref(false)

  const props = defineProps({
    item: Object,
    isFixed: Boolean
  })

  const addToCart = function() {
    const isInCard = data.cart.find(e => e.id === props.item.id)
    if (!isInCard) {
      data.cart.push(props.item)
      added.value = !added.value
    } else {
      data.cart = data.cart.filter(e => e.id !== props.item.id)
      added.value = !added.value
    }
  }

  onMounted(() => {
    const foundValue = data.cart.find(e => e.id === props.item.id)
    added.value = foundValue
  })
</script>
  
<style lang="scss" scoped>
  .btn {
    border: none;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
  }
  
  .fixed {
    position: fixed;
    bottom: 0;
  }

  .add-to-cart {
    background: #4cdb58;
    &:hover {
      background: #6ce676;
    }
  }

  .remove-from-cart {
    background: #dd2e2e;
    &:hover {
      background: #e05a5a;
    }
  }
</style>