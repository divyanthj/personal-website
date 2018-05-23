<template>
  <div class='section'>

    <div class='skill-content'>
      <div class='filter'>
        <div class='ui input'>
          <input placeholder="Filter skills" v-model='filter'/>
        </div>
      </div>

      <div class='sorters'>
        <div class='ui label sorter' @click='sort("name")'>
          Sort by Name
          <i :class='{"down caret icon" : isAscending, "up caret icon" : !isAscending, "sort-pointer" : true}' v-if='sortCriteria == "name"'></i>
        </div>
        <div class='ui label sorter' @click='sort("value")'  unselectable="on">
          Sort by Skill
          <i :class='{"down caret icon" : isAscending, "up caret icon" : !isAscending, "sort-pointer" : true}' v-if='sortCriteria == "value"'></i>
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
      filter: '',
      isAscending: true,
      sortCriteria: ''
    }
  },
  methods : {
    sort(criteria) {
      this.sortCriteria = criteria;
      this.filteredSkills.sort((a,b) => {
        if(a[criteria].toLowerCase() < b[criteria].toLowerCase()) {
          return (this.isAscending) ? -1 : 1;
        }

        if(a[criteria].toLowerCase() > b[criteria].toLowerCase()) {
          return (this.isAscending) ? 1 : -1;
        }

        return 0;
      });
      this.isAscending = !this.isAscending;
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
.skill-list {
  margin:12px;
  height: 14em;
  overflow: auto;
}

.filter {
  display: block;
  margin: 20px;
  margin-top:0px;
}

.filter > input {
  outline:none;
}

.sorters {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
}

.sorter {
  text-align: left;
  cursor: pointer;
  width: 120px;
  margin-right: 2px;
  margin-top: 5px !important;
  box-shadow: 1px 1px 3px #aaaaaa;
}

.sort-pointer {
  margin-left: 10px !important;
  margin-right: 0px !important;
  float: right;
}

.skill-content {
  height: 90%;
}

@media screen and (max-width: 475px) {
  .filter > div > input {
    width: 140px;
  }
}
</style>
