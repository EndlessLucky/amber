<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../marketing/Landing'
import About from '../marketing/About'
import Footer from '../layouts/Footer'

export default {
  name: 'Marketing',
  components: {
    Header,
    Landing,
    About,
    Footer
  }
}
</script>

<style scoped>

</style>
