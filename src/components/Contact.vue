<!-- src/components/Home.vue -->

<template>
    <h1>{{ content.title.rendered }}</h1>
    {{{ content.content.rendered }}}
</template>

<script>
  export default {
    data() {
      return {
        content: []
      }
    },


    ready: function(){
      this.loadContent();
    },

    methods: {
      loadContent: function() {
        this.$http.get('http://wpblog.johnpotess.com/wp-json/wp/v2/pages/10').then(function(response){
            this.content = response.data;
            console.log(response.data);
        });
      }
    }

  } 
</script>

