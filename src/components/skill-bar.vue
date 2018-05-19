<template>
  <div class='skill'>
    <p>
      <a :href='url' target='_blank'>{{name}}</a>
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
    url: String
  }
}
</script>
<style>
  .skill {
    display: inline-block;
    padding : 5px;
    box-shadow: 1px 1px 3px #aaaaaa;
  }

  a {
    color: #4444cc;
    font-weight: bold;
  }
</style>
