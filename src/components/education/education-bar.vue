<template>
  <div class='education-item' @click='selectEducation'>
      <div class='image'>
        <img :src='imageUrl' class='ui tiny rounded image'/>
      </div>
      <div class='degree'>
        {{degree}}
      </div>
      <div class='major'>
        {{major}}
      </div>
      <div class='university'>
        {{university}}
      </div>
  </div>
</template>
<script>
export default {
  props: {
    degree: String,
    major: String,
    imageUrl: String,
    university: String
  },
  methods: {
    selectEducation($event) {
      this.$emit('select', this.degree);
    }
  }
}
</script>
<style scoped>
.education-item {
  display: inline-block;
  padding : 5px;
  box-shadow: 1px 1px 5px #aaaaaa;
  cursor: pointer;
  border-radius: 3px;
  margin:3px;
  width: 50%;
  height: 130px;
  padding: 25px;
}

.education-item:hover {
  box-shadow: 0px 0px 12px #aaaaaa;
  text-decoration: underline;
  font-weight: bold;
  color: #555555;
}

.image {
  float: left;
  display: block;
  height: 100%;
  margin-right: 3em;
}

@media screen and (max-width: 1024px) {
  .image {
    display: none;
  }
}

@media screen and (max-width: 575px) {

  .degree {
    font-size: 20px;
  }

  .university {
    display: none;
  }
}

@media screen and (max-width: 426px) {

  .education-item {
    width: 85%;
  }

}

</style>
