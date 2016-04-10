// src/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/App.vue';
import Home from './components/Home.vue';
// import BlogIndex from './components/BlogIndex.vue'
// import BlogSingle from './components/BlogSingle.vue'
import About from './components/About.vue';
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();

// Set up routing and match routes to components
router.map({
  '/home': {
    component: Home
  },
  '/about': {
    component: About
  },
  '/projects': {
    component: Projects
  },
  '/contact': {
    component: Contact
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/home'
})

// Start the app on the #app div
router.start(App, '#app')