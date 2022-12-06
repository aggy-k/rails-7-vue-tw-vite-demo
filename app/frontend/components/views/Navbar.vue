<template>
  <nav class="px-8 py-4 flex flex-wrap items-center fixed top-0 inset-x-0"
    :class="colorClasses"
    style="transition: 0.5s background-color ease;">
    <div class="text-center text-xl font-semibold mb-0">
      {{ title }}
      <!-- Rails 7 + Vue + Tailwind with Vite 🎉 -->
    </div>
    <ul class="ml-auto flex space-x-4">
      <li v-for="(menu, index) in menus" :key="index">
        <a :href="menu.url" class="hover:text-sky-600 font-medium">{{menu.text}}</a>
      </li>
    </ul>
    </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    props: [ 'title' ],
    data() {
      return {
        // initial class
        colorClasses: 'text-gray-600 bg-white shadow-xl',
        baseUrl: "http://localhost:3000",
        path: '',
        menus: [
            { url: '/', text: 'Home' },
            { url: '/about', text: 'About us' },
            { url: '/blog', text: 'Blog' },
            { url: '/contact', text: 'Contact' },
          ]
      }
    },
    mounted() {
      console.log(111, window.location.pathname)

      const path = window.location.pathname
      this.path = path;
      if (path == '/') {
        this.colorClasses = 'text-white'
        window.addEventListener("scroll", this.updateNavbar)
      }
    },
    methods: {
      updateNavbar() {
        if (window.scrollY >= window.innerHeight) {
          this.colorClasses = 'text-gray-600 bg-white shadow-xl'
        } else {
          // console.log(222)
          this.colorClasses = 'text-white'
        }
      }
    }
  }
</script>
