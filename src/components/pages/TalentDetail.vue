<template>
  <div>
    <HeaderBlack/>
    <Landing/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import Landing from '../talentdetail/Landing'
import About from '../talentdetail/About'
import Footer from '../layouts/Footer'

export default {
  name: 'TalentDetail',
  components: {
    HeaderBlack,
    Landing,
    About,
    Footer
  }
}
</script>

<style scoped>

</style>
