# README

This Rails 7 project is generated using this template: https://github.com/IsraelDCastro/rails-vite-tailwindcss-template

Changes made in `app/frontend/entrypoints/application.js` to use Vue components in Rails view (as opposed to Vue as an SPA)

```
import "./main.scss";

// Setup vue as below to use Vue as SPA
// import { createApp } from 'vue';
// import Home from "../components/views/Home.vue";
// if (document.querySelector('#home')) {
//   const home = createApp(Home);
//   home.mount('#home');
// }


// Setup vue as below to sprinkle Vue components on rails views
import { createApp } from 'vue/dist/vue.esm-bundler';
import Home from "../components/views/Home.vue";

const app = createApp({
  data() {
    return {
      message: 'Hello Vue 3 and Rails'
    }
  }
})

// import (and use) the components one by one
app.component('Home', Home);
app.mount('[data-behavior="vue"]');
```

In `app/views/home.html.erb` call any vue component
```
<h1>Pages#home</h1>
<p>Find me in app/views/pages/home.html.erb</p>
<hr class="my-8">
<!-- <div id="home"></div> -->
<div data-behavior="vue">
  <!-- using the home vue component -->
  <home />
</div>
```
