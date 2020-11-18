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
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import MobileHeader from '../layouts/MobileHeader'
import Landing from '../cloud/Landing'
import About from '../cloud/About'
import Contact from '../solution/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Cloud',
  components: {
    HeaderBlack,
    MobileHeader,
    Landing,
    About,
    Contact,
    Footer
  }
}
</script>

<style scoped>

</style>
