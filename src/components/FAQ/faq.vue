<template>
  <div class='section'>
    <div class='ui accordion'>
      <div v-for='question in questions'>
        <div class='title'>
          {{question.q}}
        </div>
        <div class='content'>
          <p v-for='paragraph in question.a'>
            {{paragraph}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FAQ from '../../content/faq'
export default {
  mounted() {
    console.log("UI has been updated");
    $('.ui.accordion')
        .accordion()
  },
  data() {
    return {
      questions: FAQ
    }
  }
}
</script>
<style>

</style>
