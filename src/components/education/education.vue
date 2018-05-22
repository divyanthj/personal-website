courseeducationDetails.courses<template>
  <div class='education'>
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
      filter: ''
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
    }
  },
  components: {
    'education': EducationBar
  }
}
</script>
<style>
.education {
  padding: 3em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  background-color: white;
  box-shadow: 1px 1px 5px #aaaaaa;
  border-radius: 10px;
  height: 85%;
}

.courses {
  width: 5em;
}
</style>
