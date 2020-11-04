<template>
  <b-navbar class="nav-bar" toggleable="lg" type="dark" variant="info" v-bind:style="{ backgroundColor: collapseColor }">
    <b-navbar-brand href="#">
      <img class="logo-img" src="../../assets/img/Logo-4.png">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" v-on:click="collapseNav"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nav-item" class="ml-auto">
        <b-nav-item href="#">Soluciones</b-nav-item>
        <b-nav-item href="#">Piratas</b-nav-item>
        <b-nav-item href="#">Talento</b-nav-item>
        <b-nav-item href="#">Proyectos</b-nav-item>
        <b-nav-item href="#">Conecta</b-nav-item>
      </b-navbar-nav>
      <div class="footer-2" v-if="collapse == true">
        <div class="container">
            <div class="row text-white">
              <div class="col-md-7" id="nav-footer">
                <p class="col-md-12 mb-3 font-size-style-25 mt-5 pl-0">Calle Burgos 178 - San Isidro</p>
                <p class="col-md-12 mb-3 font-size-style-25 pl-0">+51 987 654 321</p>
                <p class="col-md-12 font-size-style-25 pl-0">hola@amber.pe</p>
              </div>
              <div class="col-md-6 text-left">
                <a><i class="fab fa-instagram text-white awaer mr-4"></i></a>
                <a><i class="fab fa-linkedin-in text-white awaer mr-4"></i></a>
                <a><i class="fab fa-facebook-square text-white awaer mr-4"></i></a>
                <a><i class="fab fa-twitter-square text-white awaer mr-4"></i></a>
                <a><i class="fab fa-youtube awaer text-white"></i></a>
              </div>
            </div>
        </div>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      collapseColor: 'transparent!important',
      collapse: false
    }
  },
  methods: {
    collapseNav: function (event) {
      this.collapse = !this.collapse
      if (this.collapse) {
        this.collapseColor = '#131b27!important'
      } else {
        this.collapseColor = 'transparent!important'
      }
    }
  }
}
</script>

<style scoped>

</style>
