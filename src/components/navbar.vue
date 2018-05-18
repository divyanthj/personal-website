<template>
  <div class=''>
    <span :class='["nav-item", {"active" : (selected == "Projects")}]' @click='select($event)' onselectstart="return false">Projects</span>
    <span :class='["nav-item", {"active" : (selected == "Skills")}]' @click='select($event)' onselectstart="return false">Skills</span>
    <span :class='["nav-item", {"active" : (selected == "Education")}]' @click='select($event)' onselectstart="return false">Education</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null
    }
  },
  methods : {
    select(val) {
      this.selected = val.target.innerHTML;
      this.$emit("select", val.target.innerHTML)
    }
  }
}
</script>
<style>
.nav-item {
  margin-left:30px;
  margin-right: 30px;
  padding: 10px;
  min-width: 100px;
  font-weight: bold;
  color: #aaaaaa;
  cursor: pointer;
}

.active {
  color: #666666;
}
</style>
