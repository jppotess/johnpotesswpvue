<!-- src/components/Home.vue -->

<template>
  <div class="container">
    <h1>Hello There</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: ''
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('http://wpblog.johnpotess.com/wp-json/wp-api-menus/v2/menus/2', (data) => 
            this.menuItems = data;
          )
          .error((err) => console.log(err))
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