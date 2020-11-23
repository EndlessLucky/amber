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
  <b-sidebar id="sidebar-right" bg-variant="dark" text-variant="light" right no-header shadow>
    <template #default="{hide}">
      <div class="sidebar-header">
        <img class="logo-img side-logo" src="../../assets/img/logo-white.svg">
        <b-button  class="sidebar-close" size="sm" @click="hide">X</b-button>
      </div>
      <div class="px-3 py-2">
        <div class="form-container">
          <div class="row input-row">
            <input class="custom-input" type="text" placeholder="Nombre y apellido"/>
          </div>
          <div class="row input-row">
            <input class="custom-input" type="text" placeholder="Correo"/>
          </div>
          <div class="row input-row option-row">
            <select class="custom-option" name="tech" id="tech">
              <option value="Tecnologias">Tecnologias</option>
              <option value="Tecnologias1">Tecnologias1</option>
            </select>
          </div>
          <div class="row input-row option-row">
            <select class="custom-option" name="position" id="position">
              <option value="Posición">Posición</option>
              <option value="Posición1">Posición1</option>
            </select>
          </div>
          <div class="row input-row">
            <div id="cvImage" class="custom-input">
              <p class="cvText">Adjuntar CV</p>
              <i class="fa fa-paperclip" aria-hidden="true"></i>
            </div>
            <input id="cvUpload" type="file"/>
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
    </template>
  </b-sidebar>
</div>
</template>

<script>
import jQuery from 'jquery'

export default {
  name: 'CV',
  mounted () {
    let $ = jQuery
    $(document).ready(function () {
      $('#cvImage').click(function (e) {
        $('#cvUpload').click()
      })
    })
  }
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
  ::placeholder{
    color: white;
  }
  .custom-input{
    color:white!important;
  }
  #cvUpload{
    display: none;
  }
  #cvImage{
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
  }
  .cvText{
    margin-bottom: 8px!important;
  }
</style>
