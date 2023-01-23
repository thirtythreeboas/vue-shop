<template>
  <div class="error">
    <h1 class="header">
      Oops!
    </h1>
    <p class="message">
      <span>
        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
      </span>
      Something went wrong
      <span>
        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
      </span>
    </p>
    <p class="instruction">
      The page you are looking for might have been removed had its name changed or is temporarely unavailable.
    </p>
    <RouterLink class="homepage" to="/">
      GO TO HOMEPAGE
    </RouterLink>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    font-size: 80px;
    padding: 20px;
    border-bottom: 2px solid #e1d1d1;
    background: -webkit-linear-gradient(rgb(0, 168, 247), rgb(67, 41, 218));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .message {
    font-size: 25px;
    margin: 20px 0 20px 0;
    span {
      color: red;
    }
  }

  .instruction {
    text-align: center;
    max-width: 300px;
    margin-bottom: 30px;
  }

  .homepage {
    text-decoration: none;
    padding: 20px;
    color: #fff;
    background: blue;
    border-radius: 10px;
    &:hover {
      background: rgb(79, 79, 240);
    }
  }

  @media screen and (min-width: 768px) {
    .header {
      font-size: 100px;
    }

    .message {
      font-size: 50px;
      margin: 50px 0 20px 0;
    }
  }
</style>