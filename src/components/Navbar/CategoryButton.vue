<template>
  <div class="nav__items">
    <button class="dropdown__button" @click.stop="showMenu">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <Transition name="dropdown">
        <div 
          class="dropdown" 
          v-show="isDisplayed"
        >
          <RouterLink
            v-for="category in data.categories" 
            :to="`/category/${category}`"
            class="nav__item link"
            @click="showMenu"
          >
            {{ category.toUpperCase() }}
          </RouterLink>
        </div>
      </Transition>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { onMounted, onUnmounted, Transition, ref } from 'vue'
  import { useShopStore } from '@/stores/shopStore'

  const data = useShopStore()

  let isDisplayed = ref(false)

  const showMenu = function() {
    isDisplayed.value = !isDisplayed.value
  }

  const hideMenu = function() {
    if (isDisplayed.value) isDisplayed.value = false
  }

  onMounted(() => {
    document.addEventListener('click', hideMenu)
  })

  onUnmounted(() => {
    document.removeEventListener('click', hideMenu)
  })
</script>

<style lang="scss" scoped>
  .nav__items, .dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .nav__items {
    position: relative;
    white-space: nowrap;
    margin-left: 10px;
  }

  .dropdown__button {
    font-size: 30px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    margin: 0 10px;
    transition: transform .5s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .dropdown {
    position: absolute;
    top: 48px;
    font-size: 15px;
    background-color: #ece3e3;
    border: 2px solid #562052;
    opacity: 0.9;
    z-index: 1;
  }

  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 0.3s ease-out;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  .nav__item {
    text-decoration: none;
    padding: 10px;
    color: #000;
    text-align: end;
    width: 100%;
    &:hover {
      background: #ae00ff;
      color: #fff;
    }
  }
</style>