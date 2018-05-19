<template>
  <div class="content">
    <h1>{{ msg }}</h1>
    <p>
      UI/UX Consultant
    </p>
    <navbar @select='navigate($event)'></navbar>
    <skills v-show='this.navSelect == "Skills"'></skills>
    <education v-show='this.navSelect == "Education"'></education>
    <projects v-show='this.navSelect == "Projects"'></projects>
  </div>
</template>

<script>
import NavBar from './navbar'
import Skills from './skills/skills'
import Education from './education/education'
import Projects from './projects/projects'
export default {
  name: 'Content',
  data() {
    return {
      navSelect: "Skills"
    }
  },
  props: {
    msg: String
  },
  methods : {
    navigate(item) {
      this.navSelect = item;
    }
  },
  components : {
    'skills' : Skills,
    'education': Education,
    'projects': Projects,
    'navbar': NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.content {
  height : 37em;
}

</style>
