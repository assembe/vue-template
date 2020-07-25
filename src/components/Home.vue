<template>
  <div>
    <div class="text-center">
      <img src="../assets/logo.svg" alt="Assembe Logo" class="logo">
    </div>
    <h1 class="title text-h2 mt-4">Hello!</h1>
    <p class="mt-2 text--secondary text-center text-subtitle-1">Use this template for your new App build with Assembe.</p>
    <hr class="mt-10 mb-10">
    <p class="mt-2 text-center text-subtitle-1">
      Remember to correct your API URL in <code>config/assembe.js</code> in <code>apiHost</code> property. <br>
      If you need an account, please register on <a href="http://assembe.com/register" class="d-inline">assembe.com/register</a>.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

  .logo {
    width: 400px;
    max-width: 90%;
  }

</style>
