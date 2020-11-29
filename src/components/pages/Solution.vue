<template>
  <div>
    <div class="mobile-header">
      <MobileHeader/>
    </div>
    <div class="desktop-header">
      <HeaderBlack/>
    </div>
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
import HeaderBlack from '../layouts/HeaderBlack'
import MobileHeader from '../layouts/MobileHeader'
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
    HeaderBlack,
    MobileHeader,
    Landing,
    About,
    DNA,
    Advertise,
    Navigation,
    Contact,
    Footer
  }
}
</script>

<style scoped>

</style>
