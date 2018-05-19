<template>
  <div>
    <div class='skills'>
      <span v-for='skill in skills'>
        <skill :value='skill.value' :name='skill.name'></skill>
      </span>
      <!-- <skill value="7.5" name="CSS3"></skill> -->
    </div>
  </div>
</template>
<script>
import Skills from '../content/skills'
import SkillBar from './skill-bar'
export default {
  data() {
    return {
      skills: Skills
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
}
</style>
