<template>
  <div>
    <h3>This is the homepage component</h3>
    <h6>You can find me in: <span class="px-2 py-1 bg-slate-100">{{dir}}</span></h6>

    <div class="mt-8">
      <button @click="sayHello" class="btn btn-secondary">{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      btnText: String,
    },
    data() {
      return {
        // Component's initial data
        dir: "frontend/components/views/Home.vue"
      }
    },
    mounted() {
      console.log('hello from VUE')
      console.log(111, this.btnText)
    },
    methods: {
      sayHello() {
        console.log('You clicked a Vue button 🎉')
      }
    }
  }
</script>
