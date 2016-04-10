  <template>
    <div>
      <nav class="navbar navbar-default">
        <div class="container">
          <ul class="nav navbar-nav">
            <li><a v-link="'home'">Home</a></li>
            <li><a v-link="'about'">About</a></li>
            <li><a v-link="'projects'">Projects</a></li>
            <li><a v-link="'blog'">Blog</a></li>
            <li><a v-link="'contact'">Contact</a></li>
          </ul>
        </div>    
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </template>