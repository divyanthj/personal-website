<template>
  <div class='projects'>
    <project v-for='project in projects'
             v-if='!selected'
             :company='project.company'
             :dates='project.dates'
             :image-url='project.imageUrl'
             @selected='selectProject($event)'></project>
    <div class='description' v-if='selected'>
      <div class='ui button' @click='unselect'>
        Back
      </div>
      <div>
        <p v-for='paragraph in description'>
          {{paragraph}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Projects from '../../content/projects'
import ProjectItem from './project-bar'
export default {
  data() {
    return {
      projects: Projects,
      selected: null,
      description: null
    }
  },
  methods: {
    selectProject(project) {
      this.selected = project;
      this.description = this.projects.filter((project) => {
        return project.company == this.selected;
      })[0].description;
      console.log("Description", this.description);
    },
    unselect() {
      this.selected = null;
      this.description = null;
    }
  },
  components: {
    'project': ProjectItem
  }
}
</script>
<style>
.projects {
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
</style>
