<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../marketing/Landing'
import About from '../marketing/About'
import Contact from '../solution/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Marketing',
  components: {
    Header,
    Landing,
    About,
    Contact,
    Footer
  }
}
</script>

<style scoped>

</style>
