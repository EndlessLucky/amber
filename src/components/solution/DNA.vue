<template>
  <div class="DNA-container">
    <div class="row">
      <div class="col-md-4 col-DNA">
        <div class="row DNA-img-row">
          <img class="DNA-img" src="../../assets/img/cloud_adoption.svg"/>
        </div>
        <router-link v-bind:to="{ name: 'Cloud' }">
          <h1 class="DNA-text">Diseño de aplicaciones</h1>
        </router-link>
      </div>
      <div class="col-md-4 col-DNA">
        <div class="row DNA-img-row">
          <img class="DNA-img" src="../../assets/img/data_insights.svg"/>
        </div>
        <router-link v-bind:to="{ name: 'Cloud' }">
          <h1 class="DNA-text">Soluciones Cloud</h1>
        </router-link>
      </div>
      <div class="col-md-4 col-DNA">
        <div class="row DNA-img-row">
          <img class="DNA-img" src="../../assets/img/app_modernization.svg"/>
        </div>
        <router-link v-bind:to="{ name: 'Cloud' }">
          <h1 class="DNA-text">Inteligencia de data</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DNA'
}
</script>

<style scoped>

</style>
