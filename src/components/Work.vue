<!-- src/components/Home.vue -->

<template>
  <div>
    <h1>Work</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: ''
      }
    },
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