<template>
  <div id="app">
    <Title/>
  </div>
</template>

<script>
import Title from './components/Title.vue'   // da errore ma funziona ??

export default {
  name: 'App',
  components: {
    Title
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
