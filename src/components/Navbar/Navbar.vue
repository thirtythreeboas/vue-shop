<template>
  <nav class="nav">
    <RouterLink class="nav__item logo" to="/">HOME</RouterLink>
    <div class="nav-menu">
      <ProductBar />
      <CategoryButton />
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import CategoryButton from './CategoryButton.vue'
  import ProductBar from './ProductBar.vue';
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #fff;
    gap: 30px;
    border-bottom: 1px solid #dfdfdf;
    padding: 5px;
    z-index: 2;
  }
  
  .logo {
    text-decoration: none;
    padding: 10px;
    color: #000;
    text-align: end;
    // width: 100%;
    &:hover {
      background: #ae00ff;
      color: #fff;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
  }
</style>