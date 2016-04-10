<!-- src/components/Home.vue -->

<template>
  <div>
    <h1>Home</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello Wellos'
      }
    }
  }
</script>
<!-- 
  data: {
    primaryMenuItems: []
  },
  ready: function(){
    this.loadPrimaryMenu();
  },
  methods: {
    loadPrimaryMenu: function() {
      this.$http.get('http://wpblog.johnpotess.com/wp-json/wp-api-menus/v2/menus/2', function(data, status, request){
        if(status === 200) {
          this.primaryMenuItems = data;
          console.log(this.primaryMenu);
        }
      });
    }
  } -->