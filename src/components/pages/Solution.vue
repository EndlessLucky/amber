<template>
  <div>
    <Header :title="Title" v-if="scrollPosition < 50"/>
    <HeaderBlack :title="Title" v-else/>
    <Landing/>
    <About/>
    <DNA/>
    <Advertise/>
    <Navigation/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import HeaderBlack from '../layouts/HeaderBlack'
import Landing from '../solution/Landing'
import About from '../solution/About'
import DNA from '../solution/DNA'
import Advertise from '../solution/Advertise'
import Navigation from '../solution/Navigation'
import Contact from '../solution/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Solution',
  components: {
    Header,
    HeaderBlack,
    Landing,
    About,
    DNA,
    Advertise,
    Navigation,
    Contact,
    Footer
  },
  data () {
    return {
      scrollPosition: null,
      Title: 'Solution'
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style scoped>

</style>
