<template>
  <div class='skill' @click='goToURL()' :title='title'>
    <p>
      {{name}}
    </p>
    <progress :value='value' max='10'></progress>
  </div>
</template>
<script>
export default {
  name : 'skill-bar',
  props : {
    name: String,
    value: String,
    url: String,
    title: String
  },
  methods: {
    goToURL() {
      window.open(this.url, '_blank');
    }
  }
}
</script>
<style>
  .skill {
    display: inline-block;
    padding : 5px;
    box-shadow: 1px 1px 3px #aaaaaa;
    cursor: pointer;
  }

  .skill:hover {
    /* background-color: #eeeeee; */
    box-shadow: 1px 1px 12px #aaaaaa;
  }

  a {
    color: #4444cc;
    font-weight: bold;
  }
</style>
