<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Front End Developer
    </p>
    <navbar @select='navigate($event)'></navbar>
    <ul class='skills'>
      <li v-for='skill in skills'>
        <skill :value='skill.value' :name='skill.name'></skill>
      </li>
      <!-- <skill value="7.5" name="CSS3"></skill> -->
    </ul>
  </div>
</template>

<script>
import SkillBar from './skill-bar'
import NavBar from './navbar'
import Skills from '../content/skills'
export default {
  name: 'Content',
  data() {
    return {
      skills: Skills,
      navSelect: "Projects"
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
    'skill' : SkillBar,
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

</style>
