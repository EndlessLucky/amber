<template>
  <b-navbar class="nav-bar" toggleable="lg" type="dark">
    <b-navbar-brand href="">
      <router-link v-bind:to="{ name: 'Home' }">
        <img class="logo-img" src="../../assets/img/logo-white.svg" v-if="!isblackLogo">
        <img class="logo-img-black" src="../../assets/img/logo-black.svg" v-else>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" v-on:click="collapseNav" ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav :class="{change_color: scrollPosition > 50}">
      <b-navbar-nav id="nav-item" class="ml-auto">
        <b-nav-item href="" @mouseover="solutionOver" @mouseleave="solutionLeave">
          <span class="nav-slash" v-if="solutionSlash">/</span>
          <router-link v-bind:to="{ name: 'Solution' }">Soluciones</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="piratasOver" @mouseleave="piratasLeave">
          <span class="nav-slash" v-if="piratasSlash">/</span>
          <router-link v-bind:to="{ name: 'Piratas' }">Piratas</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="talentOver" @mouseleave="talentLeave">
          <span class="nav-slash" v-if="talentSlash">/</span>
          <router-link v-bind:to="{ name: 'Talent' }">Talento</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="projectOver" @mouseleave="projectLeave">
          <span class="nav-slash" v-if="projectSlash">/</span>
          <router-link v-bind:to="{ name: 'Project' }">Proyectos</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="connectOver" @mouseleave="connectLeave">
          <span class="nav-slash" v-if="connectSlash">/</span>
          <router-link v-bind:to="{ name: 'Contact' }">Conecta</router-link>
        </b-nav-item>
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
      linkColor: 'white!important',
      solutionSlash: false,
      piratasSlash: false,
      talentSlash: false,
      projectSlash: false,
      connectSlash: false,
      scrollPosition: null
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
    },
    solutionOver: function () {
      this.solutionSlash = true
    },
    solutionLeave: function () {
      this.solutionSlash = false
    },
    piratasOver: function () {
      this.piratasSlash = true
    },
    piratasLeave: function () {
      this.piratasSlash = false
    },
    talentOver: function () {
      this.talentSlash = true
    },
    talentLeave: function () {
      this.talentSlash = false
    },
    projectOver: function () {
      this.projectSlash = true
    },
    projectLeave: function () {
      this.projectSlash = false
    },
    connectOver: function () {
      this.connectSlash = true
    },
    connectLeave: function () {
      this.connectSlash = false
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    if (this.$route.name === 'Home' || this.$route.name === 'Project') {
      this.isblackLogo = false
    } else {
      this.isblackLogo = true
    }
    if (this.$route.name === 'Piratas') {
      this.linkColor = '#131b27!important'
    }
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
<style scoped>
  .nav-link{
    color: white!important;
    margin-right: 20px;
  }
  .nav-link a{
    color: white!important;
    text-decoration: none!important;
  }
  .change_color {
    background-color: #131b27!important;
    height: 100px;
  }
</style>
