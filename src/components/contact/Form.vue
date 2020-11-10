<template>
<div>
  <div class="contact-info-container">
    <div class="row contact-form-row">
      <div class="col-md-6">
        <h1 class="contact-form-title">Cuéntanos en que podemos ayudarte</h1>
      </div>
    </div>
    <div class="row contact-input-row">
      <div class="col-md-6">
        <p class="contact-info-content">Nombre y apellido</p>
        <input type="text"/>
      </div>
      <div class="col-md-6">
        <p class="contact-info-content">Correo</p>
        <input type="text"/>
      </div>
    </div>
    <div class="row contact-input-row">
      <div class="col-md-6">
        <p class="contact-info-content">Número</p>
        <input type="text"/>
      </div>
      <div class="col-md-6">
        <p class="contact-info-content">Tu empresa</p>
        <input type="text"/>
      </div>
    </div>
    <div class="row contact-input-row">
      <div class="col-md-6">
        <p class="contact-info-content">Cómo te podemos ayudar</p>
        <input type="text"/>
      </div>
    </div>
    <div class="row contact-button-row">
      <div class="col-md-6 about-footer">
        <a href="/nosotros" class="about-a"><p class="about-link">Enviar</p></a>
        <div class="about-line-one"></div>
        <div class="about-line-two"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>

</style>
