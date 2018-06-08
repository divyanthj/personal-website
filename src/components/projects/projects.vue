<template>
  <div class='section'>
    <div class='project-list' v-if='!selected'>
      <project v-for='project in projects'
               v-if='!selected'
               :company='project.company'
               :dates='project.dates'
               :title='project.dates'
               :image-url='project.imageUrl'
               @selected='selectProject($event)'></project>
    </div>

    <div class='details' v-if='selected'>
      <div class='ui button back' @click='unselect'>
        <i class='angle double left icon'></i>
        Back
      </div>
      <div class='description'>
        <p>
          ({{dates}})
        </p>
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
      description: null,
      dates: null
    }
  },
  methods: {
    selectProject(project) {
      this.selected = project;
      let projectData = {};

      projectData = this.projects.filter((project) => {
        return project.company == this.selected;
      })[0];

      this.description = projectData.description;
      this.dates = projectData.dates;

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



.description, .project-list {
  overflow-y:auto;
  height: 20em;
  margin:12px;
  padding-left: 60px;
  padding-right: 60px;
}

.project-list {
  height: 24em;
}



@media screen and (max-width: 547px) {
  .description, .project-list {
    padding-left: 2px;
    padding-right: 2px;
  }
}

@media screen and (max-width: 400px) {
  .description {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
