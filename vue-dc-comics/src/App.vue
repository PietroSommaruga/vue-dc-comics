<template>
  <div id="app">
    <header-box/>
    <jumbotron/>
    <Main/>
    <blue-bar/>
    <Footer/>
    <Social-Footer/>
  </div>
</template>

<script>
import HeaderBox from './components/HeaderBox.vue'
import Jumbotron from './components/Jumbotron.vue'
import Main from './components/Main.vue'
import BlueBar from './components/BlueBar.vue'
import Footer from './components/Footer.vue'
import SocialFooter from './components/SocialFooter.vue'

export default {
  name: 'App',
  components: {
    HeaderBox,
    Jumbotron,
    Main,
    BlueBar,
    Footer,
    SocialFooter,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import './style/common.scss'
</style>
