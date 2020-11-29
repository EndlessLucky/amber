<template>
  <b-navbar class="nav-bar" toggleable="lg" type="dark" v-bind:style="{backgroundColor: collapseColor}">
    <b-navbar-brand href="">
      <router-link v-bind:to="{ name: 'Home' }">
        <img class="logo-img" src="../../assets/img/logo-white.svg" v-if="!isblackLogo">
        <img class="logo-img-black" src="../../assets/img/logo-black.svg" v-else>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" v-on:click="collapseNav" ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav :class="{change_color: scrollPosition > 50}">
      <b-navbar-nav id="nav-item" class="ml-auto">
        <b-nav-item  href="" @mouseover="solutionOver" @mouseleave="solutionLeave">
          <router-link v-bind:to="{ name: 'Solution' }">Soluciones</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="piratasOver" @mouseleave="piratasLeave">
          <router-link v-bind:to="{ name: 'Piratas' }">Piratas</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="talentOver" @mouseleave="talentLeave">
          <router-link v-bind:to="{ name: 'Talent' }">Talento</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="projectOver" @mouseleave="projectLeave">
          <router-link v-bind:to="{ name: 'Project' }">Proyectos</router-link>
        </b-nav-item>
        <b-nav-item href="#" @mouseover="connectOver" @mouseleave="connectLeave">
          <router-link v-bind:to="{ name: 'Contact' }">Conecta</router-link>
        </b-nav-item>
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
                <a><i class="fa fa-linkedin text-white awaer mr-4"></i></a>
                <a><i class="fa fa-linkedin text-white awaer mr-4"></i></a>
                <a><i class="fa fa-facebook-square text-white awaer mr-4"></i></a>
                <a><i class="fa fa-twitter-square text-white awaer mr-4"></i></a>
                <a><i class="fa fa-youtube awaer text-white"></i></a>
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
  name: 'Header',
  data () {
    return {
      collapseColor: 'transparent!important',
      collapse: false,
      isblackLogo: false,
      linkColor: 'white!important',
      scrollPosition: null,
      activeLeft: '0px',
      initLeft: '0px',
      colorLeft: 'black',
      initColorLeft: 'black',
      isMobile: isMobile
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
      this.activeLeft = '45px'
      this.colorLeft = '#FD6B21'
    },
    solutionLeave: function () {
      this.activeLeft = this.initLeft
      this.colorLeft = this.initColorLeft
    },
    piratasOver: function () {
      this.activeLeft = '175px'
      this.colorLeft = '#FD6B21'
    },
    piratasLeave: function () {
      this.activeLeft = this.initLeft
      this.colorLeft = this.initColorLeft
    },
    talentOver: function () {
      this.activeLeft = '305px'
      this.colorLeft = '#FD6B21'
    },
    talentLeave: function () {
      this.activeLeft = this.initLeft
      this.colorLeft = this.initColorLeft
    },
    projectOver: function () {
      this.activeLeft = '430px'
      this.colorLeft = '#FD6B21'
    },
    projectLeave: function () {
      this.activeLeft = this.initLeft
      this.colorLeft = this.initColorLeft
    },
    connectOver: function () {
      this.activeLeft = '565px'
      this.colorLeft = '#FD6B21'
    },
    connectLeave: function () {
      this.activeLeft = this.initLeft
      this.colorLeft = this.initColorLeft
    },
    updateScroll () {
      switch (this.$route.name) {
        case 'Solution':
          this.solutionLeave()
          break
        case 'Project':
          this.projectLeave()
          break
      }
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    if (this.$route.name === 'Solution') {
      this.isblackLogo = true
    } else {
      this.isblackLogo = false
    }

    switch (this.$route.name) {
      case 'Home':
        this.initLeft = '0px'
        this.initColorLeft = 'black'
        break
      case 'Solution':
        this.initLeft = '45px'
        this.initColorLeft = '#FD6B21'
        break
      case 'Piratas':
        this.initLeft = '175px'
        this.initColorLeft = '#FD6B21'
        break
      case 'Talent':
        this.initLeft = '305px'
        this.initColorLeft = '#FD6B21'
        break
      case 'Project':
        this.initLeft = '430px'
        this.initColorLeft = '#FD6B21'
        break
      case 'Contact':
        this.initLeft = '565px'
        this.initColorLeft = '#FD6B21'
        break
    }
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
<style scoped>
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
  .change_color {
    background-color: #131b27!important;
    height: 50px;
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
