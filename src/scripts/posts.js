window.Vue = Vue;
var vmPosts = new Vue ({
  el: '#blogListing',
  data: {
    posts: []
  },
  ready: function(){
    this.loadPosts();
  },
  methods: {
    loadPosts: function() {
      this.$http.get('http://wpblog.johnpotess.com/wp-json/wp/v2/posts', function(data, status, request){
        if(status === 200) {
          this.posts = data;
          console.log(this.posts);
        }
      });
    }
    // sweetThis: function (data) {
    //   var value = 8;

    //   // this.$set('pulledPosts.sweets', value);
    //   this.pulledPosts.push(value);

    //   console.log(this.pulledPosts);
    // }
  }
})









