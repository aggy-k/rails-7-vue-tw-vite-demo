<template>
  <div>
    <h3>This is the homepage component</h3>
    <h6>You can find me in: <span class="px-2 py-1 bg-slate-100">frontend/components/views/Home.vue</span></h6>

    <div class="mt-8">
      <button class="btn btn-primary">Test Button</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      console.log('hello from HOME')
    }
  }
</script>
