<template>
  <div class="d-flex justify-center">
    <div>
      <h1 class="title text-h2 mt-10">Hello, {{ user.name }}!</h1>
      <p class="mt-10 text--secondary text-center text-subtitle-1">
        As you can see, you are currently logged to your account.<br>
        All request made with <code>src/api/sdk.js</code> will automatically attach your authentication token.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
}
</script>

<style scoped>
h1, h2{
  font-weight: normal;
  text-align: center;
}

</style>
