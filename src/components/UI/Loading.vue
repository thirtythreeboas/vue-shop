<template>
  <div ref="loading" class="loading">Loading</div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const loading = ref(null)
  let interval = 7;
  onMounted(() => {
    interval = setInterval(() => {
      if (loading.value.innerText.length - 7 ===  3) loading.value.innerHTML = 'Loading'
      else loading.value.innerText += '.'
    }, 500)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })
</script>

<style lang="scss" scoped>
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: 40px;
    transform: translate(-50%, -50%);
    width: 134px;
  }
</style>