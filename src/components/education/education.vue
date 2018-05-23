courseeducationDetails.courses<template>
  <div class='section'>
    <div class='summary' v-show='!selected'>
      <education v-for='college in education'
                @select='selectEducation'
                :degree='college.degree'
                :major='college.major'
                :university='college.university'
                :imageUrl='college.imageUrl'></education>
    </div>
    <div class='details' v-show='selected'>
      <div class='ui button' @click='unselectEducation'>
        <i class='angle double left icon'></i>
        Back
      </div>
      <div class='filter'>
        <div class='ui input'>
          <input placeholder="Filter courses" v-model='filter'/>
        </div>
      </div>
      <div class='sorters'>
        <div class='ui label' @click='sort()'>
          Sort Coursework
          <i :class='{"down caret icon" : isAscending, "up caret icon" : !isAscending, "sort-pointer": true}'></i>
        </div>
      </div>
      <div class='list'>
        <div class='item' v-for='course in filteredCourses'>
          {{course}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Education from '../../content/education'
import EducationBar from './education-bar'
export default {
  data() {
    return {
      education: Education,
      selected: null,
      educationDetails : null,
      filter: '',
      isAscending: true
    }
  },
  computed: {
    filteredCourses() {
      let result = [];
      if(this.educationDetails) {
        this.educationDetails.courses.forEach((course) => {
          if(course.toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
            result.push(course);
          };
        });
        return this.filter.length > 0 ? result : this.educationDetails.courses;
      }
      return null;

    }
  },
  methods: {
    selectEducation(degree) {
      this.selected = degree;
      this.educationDetails = this.education.filter((item) => {
        return item.degree == this.selected;
      })[0];
    },
    unselectEducation() {
      this.selected = null;
    },
    sort() {
      this.filteredCourses.sort((a,b) => {
        if(a < b) {
          return (this.isAscending) ? -1 : 1;
        }

        if(a > b) {
          return (this.isAscending) ? 1 : -1;
        }
        return 0;
      });
      this.isAscending = !this.isAscending;
    }
  },
  components: {
    'education': EducationBar
  }
}
</script>
<style>
.courses {
  width: 5em;
}

.list {
  height: 12em;
  overflow: auto;
}

.sorters > .ui.label {
  text-align: left;
  cursor: pointer;
  margin-right: 2px;
  margin-top: 5px !important;
  margin-bottom: 12px !important;
  box-shadow: 1px 1px 3px #aaaaaa;
}

@media screen and (max-width: 475px) {
  .filter > div > input {
    width: 140px;
  }
}
</style>
