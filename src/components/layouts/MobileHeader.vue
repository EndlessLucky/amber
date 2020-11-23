<template>
  <b-navbar class="nav-bar" toggleable="lg" type="dark" v-bind:style="{backgroundColor: collapseColor, height: collapseHeight}" :class="{change_color: scrollPosition > 50}">
    <b-navbar-brand href="">
      <router-link v-bind:to="{ name: 'Home' }">
        <img class="logo-img-black" src="../../assets/img/logo-black.svg" v-if="isblackLogo && scrollPosition < 50 && !this.collapse">
        <img class="logo-img" src="../../assets/img/logo-white.svg" v-else>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" v-on:click="collapseNav">
      <template #default="{ expanded }">
        <b-button v-if="expanded"  class="sidebar-close" size="sm">X</b-button>
        <button v-else type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"
          aria-expanded="false" aria-controls="nav-collapse" style="overflow-anchor: none; outline: none;">
          <span class="navbar-toggler-icon" v-if="isWhiteToggle"></span>
          <span class="navbar-toggler-icon-orange" v-else></span>
        </button>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav >
      <b-navbar-nav id="nav-item" class="ml-auto">
        <b-nav-item v-if="routeName != 'Solution'">
          <router-link v-bind:to="{ name: 'Solution' }" >Soluciones</router-link>
        </b-nav-item>
        <p class="nav-text" v-else>Soluciones</p>
        <b-nav-item href="#" v-if="routeName != 'Piratas'">
          <router-link v-bind:to="{ name: 'Piratas' }">Piratas</router-link>
        </b-nav-item>
        <p class="nav-text" v-else>Piratas</p>
        <b-nav-item href="#" v-if="routeName != 'Talent'">
          <router-link v-bind:to="{ name: 'Talent' }">Talento</router-link>
        </b-nav-item>
        <p class="nav-text" v-else>Talento</p>
        <b-nav-item href="#" v-if="routeName != 'Project'">
          <router-link v-bind:to="{ name: 'Project' }">Proyectos</router-link>
        </b-nav-item>
        <p class="nav-text" v-else>Proyectos</p>
        <b-nav-item href="#" v-if="routeName != 'Contact'">
          <router-link v-bind:to="{ name: 'Contact' }">Conecta</router-link>
        </b-nav-item>
        <p class="nav-text" v-else>Conecta</p>
        <div id="header-active-section-flag" v-bind:style="{left: activeLeft, backgroundColor: colorLeft}"></div>
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
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'MobileHeader',
  data () {
    return {
      collapseColor: 'transparent',
      collapse: false,
      isblackLogo: false,
      linkColor: 'white!important',
      scrollPosition: null,
      activeLeft: '0px',
      initLeft: '0px',
      colorLeft: 'black',
      initColorLeft: 'black',
      isMobile: isMobile,
      isWhiteToggle: true,
      collapseHeight: '80px',
      routeName: 'Home'
    }
  },
  methods: {
    collapseNav: function (event) {
      this.collapse = !this.collapse
      if (this.collapse) {
        this.collapseColor = '#131b27!important'
        this.collapseHeight = '100%'
      } else {
        this.collapseColor = 'transparent'
        this.collapseHeight = '80px'
      }
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    this.routeName = this.$route.name

    if (this.$route.name === 'Home' || this.$route.name === 'Project' || this.$route.name === 'Marketing') {
      this.isblackLogo = false
    } else {
      this.isblackLogo = true
    }
    if (this.$route.name === 'Home' || this.$route.name === 'Solution' || this.$route.name === 'Piratas' || this.$route.name === 'Project' || this.$route.name === 'Marketing') {
      this.isWhiteToggle = true
    } else {
      this.isWhiteToggle = false
    }
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
<style scoped>
  .navbar-toggler-icon{
    width: 22px;
    height: 9px;
  }
  .navbar-toggler-icon-orange{
    width: 22px;
    height: 9px;
  }
  .nav-link{
    width: 110px;
    padding-left: 0px;
    padding-right: 0px;
    color: white!important;
    margin-right: 20px;
  }
  .nav-link a{
    color: white!important;
    text-decoration: none!important;
  }
  .nav-text{
    height: 46px;
    color: white!important;
  }
  .nav-bar{
    background-color: transparent!important;
    top:0px!important;
    text-align: center;
    font-size: 20px;
  }
  #nav-collapse{
    margin-top: 60px;
  }
  .nav-item{
    margin-bottom: 20px;
  }
  .nav-link{
    margin: auto!important;
  }
  .change_color {
    background-color: #131b27!important;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .nav-link:hover a{
    transform: translateX(10px);
    transition: all .3s ease;
  }
</style>
