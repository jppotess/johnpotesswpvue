<!-- src/components/Home.vue -->

<template>
    <div>
      <h1>{{ content.title.rendered }}</h1>
      {{{ content.content.rendered }}}
    </div>
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
        this.$http.get('http://wpblog.johnpotess.com/wp-json/wp/v2/pages/15').then(function(response){
            this.content.push = response.data;
        });
      }
    }

  } 
</script>

