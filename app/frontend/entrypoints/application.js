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
import Home from "@/components/views/Home.vue";
import Navbar from "@/components/views/Navbar.vue";
import ScrollDownButton from "@/components/views/ScrollDownButton.vue";

const app = createApp()

// import (and use) the components one by one
app.component('Home', Home);
app.component('Navbar', Navbar);
app.component('ScrollDownButton', ScrollDownButton);
// // Make sure there's a <div id="vue"> on your application.html.erb
// // We're mounting vue on a div that wraps our entire application frontend
// // This means in any page, you can use any Vue component
app.mount('#vue')


// // Below is an alternative set-up, if you don't want to mount the entire layout div
// // Sometimes Vue could interfere with other JS package you're using
// // If that's the case, then mount small sections in your frontend 1 by 1 like below

// // I.e. This is just mounting Vue id="navbar" div and using Navbar component
// const nav = createApp()
// nav.component('Navbar', Navbar);
// nav.mount('#navbar')

// // I.e. This is just mounting Vue id="home" div and using Home and ScrollDownButton components
// const home = createApp()
// home.component('Home', Home);
// home.component('ScrollDownButton', ScrollDownButton);
// home.mount('#home')
