<template>
  <div class='nav-bar'>
    <span v-for='section in sections'
          :class='["nav-item", {"active" : (selected == section)}]'
          @click='select($event)'
          onselectstart="return false">{{section}}</span>
  </div>
</template>
<script>
import Sections from '../content/sections'
export default {
  data() {
    return {
      sections: Sections,
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
