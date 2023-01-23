<template>
  <div class="main" ref="main">
    <span 
      class="white-stars"                      
      ref="white"
    >
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </span>
    <span 
      class="yellow-stars" 
      ref="yellow"
    >
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </span>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { setRating } from '@/hooks/setRating';
  
  const props = defineProps({
    rating: Number
  })

  const white = ref(null)
  const yellow = ref(null)

  onMounted(() => {
    setRating(props.rating, white._value, yellow._value)
  })
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    font-size: 40px;
  }

  .white-stars, .yellow-stars {
    color: grey;
    display: inline-block;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .yellow-stars {
    position: absolute;
    top: 0;
    left: 0;
    color: #ff8800;
  }
</style>