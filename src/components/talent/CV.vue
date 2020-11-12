<template>
<div>
  <div class="about-container">
    <div class="row">
      <div class="col-md-6">
        <h1 class="solution-about-title talent-CV">No encontraste nada, escríbenos!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 about-footer">
        <a class="about-a" v-b-toggle.sidebar-right><p class="about-link">Envía tu CV</p></a>
        <div class="about-line-one"></div>
        <div class="about-line-two"></div>
      </div>
    </div>
  </div>
  <b-sidebar id="sidebar-right" bg-variant="dark" text-variant="light" right shadow>
    <div class="px-3 py-2">
      <div class="form-container">
        <div class="row input-row">
          <p class="input-title text-white">Nombre y apellido</p>
          <input class="custom-input" type="text"/>
        </div>
        <div class="row input-row">
          <p class="input-title text-white">Correo</p>
          <input class="custom-input" type="text"/>
        </div>
        <div class="row input-row">
          <select class="custom-input" name="tech" id="tech">
            <option value="Tecnologias">Tecnologias</option>
            <option value="Tecnologias1">Tecnologias1</option>
          </select>
          <input class="custom-input" type="text"/>
        </div>
        <div class="row input-row">
          <select class="custom-input" name="position" id="position">
            <option value="Posición">Posición</option>
            <option value="Posición1">Posición1</option>
          </select>
          <input class="custom-input" type="text"/>
        </div>
        <div class="row input-row">
          <p class="input-title text-white">Adjuntar CV</p>
          <input class="custom-input" type="text"/>
        </div>
        <div class="row input-row">
          <div class="col-md-12 about-footer">
            <a href="/nosotros" class="about-a"><p class="about-link">Envía tu postulación</p></a>
            <div class="about-line-one"></div>
            <div class="about-line-two"></div>
          </div>
        </div>
      </div>
    </div>
  </b-sidebar>
</div>
</template>

<script>
export default {
  name: 'CV'
}
</script>

<style scoped>
  .about-a{
    cursor: pointer;
  }
  select{
    width:81%;
    border-bottom: 0px;
  }
</style>
