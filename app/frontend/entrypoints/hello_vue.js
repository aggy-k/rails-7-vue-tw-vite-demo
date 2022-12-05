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
