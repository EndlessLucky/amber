<template>
  <div>
    <HeaderBlack/>
    <About/>
    <Architect/>
    <CV/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import About from '../talent/About'
import Architect from '../talent/Architect'
import CV from '../talent/CV'
import Footer from '../layouts/Footer'

export default {
  name: 'Talent',
  components: {
    HeaderBlack,
    About,
    Architect,
    CV,
    Footer
  }
}
</script>

<style scoped>

</style>
