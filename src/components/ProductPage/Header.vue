<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <img 
      class="image" 
      :src="src" 
      :alt="title"
    >
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    src: String
  })
</script>
  
<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .image {
    width: 200px;
    
  }
</style>