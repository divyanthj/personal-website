<template>
  <div class='skill'>
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
    value: String
  }
}
</script>
<style>
  .skill {
    display: inline-block;
    padding : 5px;
    box-shadow: 1px 1px 3px #aaaaaa;
  }
</style>
