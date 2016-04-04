<!-- // http://wpblog.johnpotess.com/wp-json/wp-api-menus/v2/menus/2

window.Vue = Vue;
var vmPrimaryMenu = new Vue ({
  el: 'nav.primary-navigation',
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
}) -->



<!-- window.Vue = Vue;
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
}) -->


