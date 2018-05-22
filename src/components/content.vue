<template>
  <div class="content">
    <h1>{{ msg }}</h1>
    <p>
      UI/UX Consultant
    </p>
    <navbar @select='navigate($event)'></navbar>
    <router-view></router-view>
    <!-- <intro v-show='this.navSelect == "Introduction"'></intro>
    <skills v-show='this.navSelect == "Skills"'></skills>
    <education v-show='this.navSelect == "Education"'></education>
    <projects v-show='this.navSelect == "Projects"'></projects>
    <faq v-show='this.navSelect == "FAQ"'></faq> -->
  </div>
</template>

<script>
import NavBar from './navbar'
import Introduction from './introduction/introduction'
import Skills from './skills/skills'
import Education from './education/education'
import Projects from './projects/projects'
import FAQ from './FAQ/faq'
export default {
  name: 'Content',
  data() {
    return {
      navSelect: "Introduction"
    }
  },
  props: {
    msg: String
  },
  methods : {
    navigate(item) {
      this.navSelect = item;
      this.$router.push(item);
    }
  },
  components : {
    'intro': Introduction,
    'skills' : Skills,
    'education': Education,
    'projects': Projects,
    'navbar': NavBar,
    'faq': FAQ
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

.section {
  padding: 3em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  background-color: white;
  box-shadow: 1px 1px 5px #aaaaaa;
  border-radius: 10px;
  height: 85%;
  overflow: auto;
}


@media screen and (max-width: 1024px) {
  .section {
    width : 85%;
  }
}

@media screen and (max-width: 1500px) {
  .section {
    width: 75%;
  }
}

</style>
