<template>
  <b-navbar class="nav-bar" toggleable="lg" type="dark" variant="info" v-bind:style="{ backgroundColor: collapseColor }">
    <b-navbar-brand href="">
      <router-link v-bind:to="{ name: 'Home' }">
        <img class="logo-img" src="../../assets/img/Logo-4.png" v-if="!isblackLogo">
        <img class="logo-img-black" src="../../assets/img/Logo[1].png" v-else>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" v-on:click="collapseNav"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="nav-item" class="ml-auto">
        <b-nav-item href="">
          <router-link v-bind:to="{ name: 'Solution' }">Soluciones</router-link>
        </b-nav-item>
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
      collapse: false,
      isblackLogo: false,
      blackLogo: '../../assets/img/Logo-4.png'
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
  },
  mounted () {
    console.log(this.$route)
    if (this.$route.name === 'Home' || this.$route.name === 'Project') {
      this.isblackLogo = false
    } else {
      this.isblackLogo = true
    }
  }
}
</script>

<style scoped>

</style>
