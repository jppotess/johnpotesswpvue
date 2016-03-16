window.Vue = Vue;
var vmPages = new Vue ({
  el: '#undetermined',
  data: {
    pages: []
  },
  ready: function(){
    this.loadPages();
    this.showPageContent();
  },
  methods: {
    loadPages: function() {
      this.$http.get('http://wpblog.johnpotess.com/wp-json/wp/v2/pages', function(data, status, request){
        if(status === 200) {
          this.pages = data;
        }
      });
    },
    showPageContent: function() {
      console.log( this.pages.content.rendered);
    }
    // sweetThis: function (data) {
    //   var value = 8;

    //   // this.$set('pulledPosts.sweets', value);
    //   this.pulledPosts.push(value);

    //   console.log(this.pulledPosts);
    // }
  }
})









