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
    <Partner/>
    <Offer/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import MobileHeader from '../layouts/MobileHeader'
import Landing from '../piratas/Landing'
import About from '../piratas/About'
import DNA from '../solution/DNA'
import Partner from '../piratas/Partner'
import Offer from '../piratas/Offer'
import Footer from '../layouts/Footer'

export default {
  name: 'Piratas',
  components: {
    HeaderBlack,
    MobileHeader,
    Landing,
    About,
    DNA,
    Partner,
    Offer,
    Footer
  }
}
</script>

<style scoped>

</style>
