<template>
  <div>
    <Header v-if="scrollPosition < 50"/>
    <HeaderBlack v-else/>
    <Landing/>
    <About/>
    <DNA/>
    <Piratas/>
    <Project/>
    <Contact :title="contactTitle"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import HeaderBlack from '../layouts/HeaderBlack'
import Landing from '../home/Landing'
import About from '../home/About'
import DNA from '../home/DNA'
import Piratas from '../home/Piratas'
import Project from '../home/Project'
import Contact from '../home/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    HeaderBlack,
    Landing,
    About,
    DNA,
    Piratas,
    Project,
    Contact,
    Footer
  },
  data () {
    return {
      scrollPosition: null,
      contactTitle: 'Dondequiera que se encuentre en su viaje a la nube, podemos ayudarlo a desarrollar una estrategia para su transformación'
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
