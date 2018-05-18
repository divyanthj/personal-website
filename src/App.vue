<template>
  <div id="app">
    <img id="photo" src="./assets/IMG_3187.jpg">
    <Content msg="Divyanth Jayaraj"/>
  </div>
</template>

<script>
import Content from './components/content.vue'

export default {
  name: 'app',
  components: {
    Content
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
</style>
