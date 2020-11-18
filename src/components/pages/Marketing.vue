<template>
  <div>
    <div class="mobile-header">
      <MobileHeader/>
    </div>
    <div class="desktop-header">
      <Header v-if="scrollPosition < 50"/>
      <HeaderBlack v-else/>
    </div>
    <Landing/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import HeaderBlack from '../layouts/HeaderBlack'
import MobileHeader from '../layouts/MobileHeader'
import Landing from '../marketing/Landing'
import About from '../marketing/About'
import Contact from '../solution/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Marketing',
  components: {
    Header,
    HeaderBlack,
    MobileHeader,
    Landing,
    About,
    Contact,
    Footer
  },
  data () {
    return {
      scrollPosition: null
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
