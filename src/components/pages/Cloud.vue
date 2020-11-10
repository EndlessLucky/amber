<template>
  <div>
    <HeaderBlack/>
    <Landing/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import Landing from '../cloud/Landing'
import About from '../cloud/About'
import Contact from '../solution/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Cloud',
  components: {
    HeaderBlack,
    Landing,
    About,
    Contact,
    Footer
  }
}
</script>

<style scoped>

</style>
