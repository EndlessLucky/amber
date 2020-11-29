<template>
<div>
  <div class="contact-info-container">
    <div class="row contact-form-row">
      <div class="col-md-6">
        <h1 class="contact-form-title">Cuéntanos en que podemos ayudarte</h1>
      </div>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <div class="row">
        <div class="col-md-6 input-col">
          <input class="form-text" v-model.trim="$v.name.$model" placeholder="Nombre y apellido"/>
          <span class="contact-form-line"></span>
          <div class="error name-require" v-if="!$v.name.required && isSubmit">Se requiere campo</div>
        </div>
        <div class="col-md-6 input-col">
          <input class="form-text" v-model.trim="$v.email.$model" placeholder="Correo"/>
          <span class="contact-form-line"></span>
          <div class="error email-require" v-if="!$v.email.required && isSubmit">Se requiere campo</div>
          <div class="error email-valid" v-if="!$v.email.email && isSubmit">Se requiere un e-mail válido</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 input-col">
          <input class="form-text" v-model.trim="$v.number.$model" placeholder="Número"/>
          <span class="contact-form-line"></span>
          <div class="error number-require" v-if="!$v.number.required && isSubmit">Se requiere campo</div>
          <div class="error number-valid" v-if="!$v.number.numeric && isSubmit">Se requiere el único número</div>
        </div>
        <div class="col-md-6 input-col">
          <input class="form-text" v-model.trim="$v.business.$model" placeholder="Tu empresa"/>
          <span class="contact-form-line"></span>
          <div class="error business-require" v-if="!$v.business.required && isSubmit">Se requiere campo</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 input-col">
          <input class="form-text" v-model.trim="$v.content.$model" placeholder="Cómo te podemos ayudar"/>
          <span class="contact-form-line"></span>
          <div class="error content-require" v-if="!$v.content.required && isSubmit">Se requiere campo</div>
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
          <a class="about-a" v-on:click="submit"><p class="about-link">Enviar</p></a>
          <div class="about-line-one"></div>
          <div class="about-line-two"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'Form',
  data () {
    return {
      errors: [],
      name: '',
      email: null,
      number: null,
      business: null,
      content: null,
      isSubmit: false
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    number: {
      required,
      numeric
    },
    business: {
      required
    },
    content: {
      required
    }
  },
  methods: {
    submit: function (event) {
      this.isSubmit = true
      if (document.querySelector('.name-require') !== null) {
        document.querySelector('.name-require').style.display = 'block'
      }
      if (document.querySelector('.email-require') !== null) {
        document.querySelector('.email-require').style.display = 'block'
      }
      if (document.querySelector('.email-valid') !== null) {
        document.querySelector('.email-valid').style.display = 'block'
      }
      if (document.querySelector('.number-require') !== null) {
        document.querySelector('.number-require').style.display = 'block'
      }
      if (document.querySelector('.number-valid') !== null) {
        document.querySelector('.number-valid').style.display = 'block'
      }
      if (document.querySelector('.business-require') !== null) {
        document.querySelector('.business-require').style.display = 'block'
      }
      if (document.querySelector('.content-require') !== null) {
        document.querySelector('.content-require').style.display = 'block'
      }

      setTimeout(function () {
        this.isSubmit = false
        if (document.querySelector('.name-require') !== null) {
          document.querySelector('.name-require').style.display = 'none'
        }
        if (document.querySelector('.email-require') !== null) {
          document.querySelector('.email-require').style.display = 'none'
        }
        if (document.querySelector('.email-valid') !== null) {
          document.querySelector('.email-valid').style.display = 'none'
        }
        if (document.querySelector('.number-require') !== null) {
          document.querySelector('.number-require').style.display = 'none'
        }
        if (document.querySelector('.number-valid') !== null) {
          document.querySelector('.number-valid').style.display = 'none'
        }
        if (document.querySelector('.business-require') !== null) {
          document.querySelector('.business-require').style.display = 'none'
        }
        if (document.querySelector('.content-require') !== null) {
          document.querySelector('.content-require').style.display = 'none'
        }
      }, 3000)
    }
  }
}
</script>

<style scoped>
  .error{
    color: red;
  }
</style>
