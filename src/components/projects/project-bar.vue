<template>
  <div class='project' @click='selectProject'>
    <img :src='imageUrl' class='ui tiny rounded image'/>
    <!-- <p>{{company}}</p> -->
    <!-- <p>{{dates}}</p> -->
  </div>
</template>
<script>
export default {
  props: {
    company: String,
    dates: String,
    imageUrl: String
  },
  methods: {
    selectProject() {
      this.$emit('selected', this.company);
    }
  }
}
</script>
<style>
.project{
  display: inline-block;
  padding : 5px;
  box-shadow: 1px 1px 5px #aaaaaa;
  cursor: pointer;
  border-radius: 3px;
  margin:3px;
  width: 150px;
  height: 100px;
  padding: 25px;
}

img {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
