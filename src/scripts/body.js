// define
// var MyComponent = Vue.extend({
//   template: '<div>A custom component!</div>'
// })

var Child = Vue.extend({ 
  template: '<div>A custom component!</div>'
})

var Parent = Vue.extend({
  template: '',
  components: {
    // <my-component> will only be available in Parent's template
    'my-component': Child
  }
})



// create a root instance
new Vue({
  el: '#example'
})






// Vue.component('home-content', {
//   template: '<h1>Were home</h1>'
// })



// new Vue({
//   el: '.main',
//   data: {
//     currentView: 'home',
//   },
//   components: {
//     home: { '<h1>Were home</h1>' },
//     about: { '<h1>We\'re at the About page</h1>'},
//     portfolio: { '<h1>We\'re at the Portfolio page<h1>'},
//     resume: { '<h1>We\'re at the Resume page</h1>'},
//     contact: { '<h1>We\'re at the Contact page </h1>'},
//     blog: { '<h1>We\'re on the Blog index page </h1>'}
//   }
// })