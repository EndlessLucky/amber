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
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import MobileHeader from '../layouts/MobileHeader'
import Landing from '../talentdetail/Landing'
import About from '../talentdetail/About'
import Footer from '../layouts/Footer'

export default {
  name: 'TalentDetail',
  components: {
    HeaderBlack,
    MobileHeader,
    Landing,
    About,
    Footer
  }
}
</script>

<style scoped>

</style>
