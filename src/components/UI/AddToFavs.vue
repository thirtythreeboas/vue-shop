<template>
  <div 
    class="favorite"
    :class="position ? 'card-element' : 'product-page'"
    @click="addToFavs"
  > 
    <font-awesome-icon v-if="added" icon="fa-solid fa-heart" />
    <font-awesome-icon v-else icon="fa-regular fa-heart" />
  </div>
</template>

<script setup>
  import { useShopStore } from '../../stores/shopStore'
  import { ref, onMounted } from 'vue';
  const data = useShopStore()
  const added = ref(false)
  const props = defineProps({
    item: Object,
    position: Boolean
  })

  const addToFavs = function() {
    const isInFavs = data.favorites.find(e => e.id === props.item.id)
    if (!isInFavs) {
      data.favorites.push(props.item)
      added.value = !added.value
    } else {
      data.favorites = data.favorites.filter(e => e.id !== props.item.id)
      added.value = !added.value
    }
  }

  onMounted(() => {
    const foundValue = data.favorites.find(e => e.id === props.item.id)
    added.value = foundValue
  })
</script>
  
<style lang="scss" scoped>
  .favorite {
    font-size: 25px;
    color: #e76363;
  }
  
  .card-element {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .product-page {
    position: absolute;
    right: 15px;
  }
</style>