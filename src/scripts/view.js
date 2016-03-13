(function() {
  var httpRequest;

  // Make the request to the WordPress API endpoint
  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      console.log("Can't make XMLHTTP instance");
      return false;
    }

    httpRequest.onreadystatechange = logContents;
    httpRequest.open('GET', 'http://wpblog.johnpotess.com/wp-json/wp/v2/posts');
    httpRequest.send();
  }

  function logContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
      } else {
        console.log('There was an error with the request.');
      }
    }
  }

})();




var dummyPosts = [
      {
        postId: 1,
        sweets: 1,
        title: "First Post",
        permalink: 'http://example.com/first-post/',
        date: '1/2/16',
        author: 'John Potess',
        content: "Ex fap organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcherirony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party helvetica organic four dollar toast est vice bitters waistcoat. Pickled post-ironic exercitation roof party master cleanse. Delectus green juice cupidatat, sint ex taxidermy mlkshk. Hoodie heirloom dolore man bun, blog scenester franzen pabst bushwick neutra. Occupy kale chips tattooed biodiesel listicle bicycle rights.kinfolk, squid bicycle rights etsy blog irony minim pop-up ut."
      },
      {
        postId: 2,
        sweets: 1,
        title: "Second Post",
        permalink: 'http://example.com/second-post/',
        date: '2/2/16',
        author: 'John Potess',
        content: "Fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami."
      },
      {
        postId: 3,
        sweets: 1,
        title: "Third Post",
        permalink: 'http://example.com/Third-post/',
        date: '3/2/16',
        author: 'John Potess',
        content: "Organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party."
      },
      {
        postId: 4,
        sweets: 1,
        title: "Fourth Post",
        permalink: 'http://example.com/first-post/',
        date: '4/2/16',
        author: 'John Potess',
        content: "Fap organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod."
      },
      {
        postId: 5,
        sweets: 1,
        title: "First Post",
        permalink: 'http://example.com/fifth-post/',
        date: '5/2/16',
        author: 'John Potess',
        content: "Esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party helvetica organic four dollar toast est vice bitters waistcoat. Pickled post-ironic exercitation roof party master cleanse. Delectus green juice cupidatat, sint ex taxidermy."
      }  
    ]


window.Vue = Vue;
var vm = new Vue ({
  el: '#blogListing',
  data: {
    pulledPosts: dummyPosts
  },
  methods: {
    sweetThis: function (data) {
      var value = 8;

      // this.$set('pulledPosts.sweets', value);
      this.pulledPosts.push(value);

      console.log(this.pulledPosts);
    }
  }
})









