<template>
  <div class="about-container">
    <div class="col-md-12">
      <p class="DNA-title">NUESTRO ADN</p>
    </div>
    <div class="row">
      <div class="col-md-6 DNA-card">
        <router-link v-bind:to="{ name: 'Cloud' }">
          <h1 class="DNA-title-one">Cloud</h1>
          <h1 class="DNA-title-two">Adoption</h1>
        </router-link>
        <p class="about-content">
          Ayudamos a cambiar tus modos operativos y adaptarte a los nuevos entornos de trabajo Cloud.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../../assets/img/cloud_adoption.svg"/>
      </div>
    </div>
    <div class="row mobile-reverse">
      <div class="col-md-6">
        <img src="../../assets/img/data_insights.svg"/>
      </div>
      <div class="col-md-6 DNA-card">
        <h1 class="DNA-title-one">Data</h1>
        <h1 class="DNA-title-two">Insights</h1>
        <p class="about-content">
          Conocemos de cerca el poder de los datos, organice sus datos de manera eficiente.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 DNA-card">
        <h1 class="DNA-title-one">Application</h1>
        <h1 class="DNA-title-two">Modernization</h1>
        <p class="about-content">
          Modernice sus aplicaciones haciéndolas más ágiles, basadas en datos, inteligentes y orientadas a la nube.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../../assets/img/app_modernization.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'DNA',
  data () {
    return {
      isMobile: isMobile
    }
  }
}
</script>

<style scoped>

</style>
