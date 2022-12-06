<template>
  <button @click="onClick" class="btn btn-primary">
     Scroll down 👇
  </button>
</template>

<script>
  export default {
    name: 'ScrollDownButton',
    props: {
      text: String
    },
    methods: {
      onClick() {
        console.log("primary button clicked")
        const el = document.getElementById('home-body')
        if (el) {
          console.log({el})
          el.scrollIntoView({behavior: "smooth"});
        }
      }
    }
  }
</script>
