<template>
  <div>

    <div class='skills'>
      <div class='filter'>
        <div class='ui input'>
          <input placeholder="Filter skills" v-model='filter'/>
        </div>
      </div>

      <div class='skill-list'>
        <span v-for='skill in filteredSkills'>
          <skill :value='skill.value' :name='skill.name' :url='skill.url' :title='skill.title'></skill>
        </span>
      </div>

      <!-- <skill value="7.5" name="CSS3"></skill> -->
    </div>
  </div>
</template>
<script>
import Skills from '../../content/skills'
import SkillBar from './skill-bar'
export default {
  data() {
    return {
      skills: Skills,
      filter: ''
    }
  },
  computed: {
    filteredSkills() {
      let result = [];
      this.skills.forEach((skill) => {
        if(skill.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
          result.push(skill);
        };
      });
      return this.filter.length > 0 ? result : this.skills;
    }
  },
  components: {
    'skill': SkillBar
  }
}
</script>
<style>
.skills {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 3em;
  width: 50%;
  background-color: white;
  box-shadow: 1px 1px 5px #aaaaaa;
  height: 85%;
  border-radius: 10px;
}

.skill-list {
  overflow-y:auto;
  height: 20em;
  margin:12px;
}

.filter {
  display: block;
  margin: 20px;
}

.filter > input {
  outline:none;
}
</style>
