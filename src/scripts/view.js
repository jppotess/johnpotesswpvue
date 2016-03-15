window.Vue = Vue;
var vm = new Vue ({
  el: '#blogListing',
  data: {
    posts: []
  },
  ready: function(){
    this.loadPosts();
    for each
  },
  methods: {
    loadPosts: function() {
      this.$http.get('http://wpblog.johnpotess.com/wp-json/wp/v2/posts', function(data, status, request){
        if(status === 200) {
          this.posts = data;
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









