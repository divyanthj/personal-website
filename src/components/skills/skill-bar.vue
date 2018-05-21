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
    box-shadow: 1px 1px 5px #aaaaaa;
    cursor: pointer;
    border-radius: 3px;
    margin:3px;
  }

  .skill:hover {
    /* background-color: #eeeeee; */
    box-shadow: 0px 0px 12px #aaaaaa;
    text-decoration: underline;
    font-weight: bold;
    color: #555555;
  }

  a {
    color: #4444cc;
    font-weight: bold;
  }
</style>
