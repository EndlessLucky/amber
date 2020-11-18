<template>
  <div>
    <div class="mobile-header">
      <MobileHeader/>
    </div>
    <div class="desktop-header">
      <HeaderBlack/>
    </div>
    <About/>
    <Architect/>
    <CV/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import MobileHeader from '../layouts/MobileHeader'
import About from '../talent/About'
import Architect from '../talent/Architect'
import CV from '../talent/CV'
import Footer from '../layouts/Footer'

export default {
  name: 'Talent',
  components: {
    HeaderBlack,
    MobileHeader,
    About,
    Architect,
    CV,
    Footer
  }
}
</script>

<style scoped>

</style>
