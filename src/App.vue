<template>
  <div id="app">
    <img id="photo" src="../public/assets/IMG_3187.jpg">
    <Content msg="Divyanth Jayaraj"/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Content from './components/content.vue'
import Footer from './components/site-footer.vue'
export default {
  name: 'app',
  components: {
    Content,
    'site-footer' : Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* text-shadow: 0px 0px 2px #aaaaaa; */
}

#photo {
  border-radius: 50%;
  box-shadow: 1px 1px 5px #aaaaaa;
}

@media screen and (width: 480px) {
  .section {
    width : 75%;
  }
}
</style>
