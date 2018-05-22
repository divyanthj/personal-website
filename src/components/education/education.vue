<template>
  <div class='education'>
    <div class='list' v-show='!selected'>
      <education v-for='college in education'
                @select='selectEducation'
                :degree='college.degree'
                :major='college.major'
                :university='college.university'
                :imageUrl='college.imageUrl'></education>
    </div>
    <div class='list' v-show='selected'>
      <div class='ui button' @click='unselectEducation'>
        Back
      </div>
      <p>
        Relevant Courses
      </p>
      <div class='ui list'>
        <div class='item' v-for='course in courses'>
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
      courses: []
    }
  },
  methods: {
    selectEducation(degree) {
      this.selected = degree;
      let educationDetails = {};

      educationDetails = this.education.filter((item) => {
        return item.degree == this.selected;
      })[0];

      this.courses = educationDetails.courses;
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
  font-size: 20px;
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
