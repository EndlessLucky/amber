<template>
<div class="about-background">
  <div class="about-container">
    <div class="row">
      <div class="col-md-6">
        <h1 class="about-title">Somos Amber</h1>
      </div>
      <div class="col-md-6">
        <p class="about-content">
          Hemos estado construyendo silenciosamente los principios del desarrollo del Diseño Web y Apps.<br>
          El diseño ya no sólo significa web, móvil o social, significa interfaces, innumerables tipos de pantalla y la interacción humana real y cercana.
          <br><br>Si tiene una pantalla entonces diseñamos, desarrollamos y creamos la experiencia que sus usuarios y negocios necesitan.
          Ponemos un montón de trabajo para que esto se vea fácil, porque nos gusta lo que hacemos.
        </p>
      </div>
      <div class="col-md-6 about-footer">
        <router-link v-bind:to="{ name: 'Piratas' }">
          <p class="about-link">Conoce más</p>
        </router-link>
        <div class="about-line-one"></div>
        <div class="about-line-two"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

</style>
