<template>
  <Navbar />
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import { useShopStore } from './stores/shopStore';
  import Navbar from './components/Navbar/Navbar.vue'

  const shop = useShopStore()
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .app {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 60px;
  }
</style>
