<template>
  <div class='nav-bar'>
    <span :class='["nav-item", {"active" : (selected == "Introduction")}]' @click='select($event)' onselectstart="return false">Introduction</span>
    <span :class='["nav-item", {"active" : (selected == "Projects")}]' @click='select($event)' onselectstart="return false">Projects</span>
    <span :class='["nav-item", {"active" : (selected == "Skills")}]' @click='select($event)' onselectstart="return false">Skills</span>
    <span :class='["nav-item", {"active" : (selected == "Education")}]' @click='select($event)' onselectstart="return false">Education</span>
    <span :class='["nav-item", {"active" : (selected == "FAQ")}]' @click='select($event)' onselectstart="return false">FAQ</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "Introduction"
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
.nav-bar {
  margin-bottom: 10px;
}

.nav-item {
  margin-left:30px;
  margin-right: 30px;
  padding: 10px;
  min-width: 100px;
  font-weight: bold;
  color: #aaaaaa;
  cursor: pointer;
}

.nav-item:hover {
  color: #999999;
}

.active {
  color: #666666 !important;
}
</style>
