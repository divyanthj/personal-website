<template>
  <div id='footer'>

    <span v-for='social in socials' class='socials'>
      <a :href='social.url' target='_blank' :title="social.tooltip">
        <img :src='social.icon' class='logos'/>
      </a>
    </span>

  </div>
</template>
<script>
import Socials from '../content/socials'
export default {
  data() {
    console.log("In footer");
    return {
      socials: Socials
    }
  }
}
</script>
<style>

#footer {
  margin-top: 75px;
}

.socials {
  margin-left: 20px;
}

.logos {
  height: 96px;
  width: 96px;
}
</style>
