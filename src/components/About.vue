<!-- src/components/Home.vue -->

<template>
  <div>
    <h1>About</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'You\'re viewing the about page'
      }
    }
  } 
</script>