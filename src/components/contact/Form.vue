<template>
<div>
  <div class="contact-info-container">
    <div class="row contact-form-row">
      <div class="col-md-6">
        <h1 class="contact-form-title">Cuéntanos en que podemos ayudarte</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <input class="form-text" type="text" placeholder="Nombre y apellido"/>
      </div>
      <div class="col-md-6">
        <input class="form-text" type="text" placeholder="Correo"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <input class="form-text" type="text" placeholder="Número"/>
      </div>
      <div class="col-md-6">
        <input class="form-text" type="text" placeholder="Tu empresa"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <input class="form-text" type="text" placeholder="Cómo te podemos ayudar"/>
      </div>
    </div>
    <div class="row contact-input-row">
      <div class="col-md-12 accept-col">
        <input type="checkbox" name="custom_field" id="contact-form-check">
        <label class="contact-check-text" for="contact-form-check">
          Acepto los tratamientos de datos indicados en la política de privacidad*
        </label>
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
