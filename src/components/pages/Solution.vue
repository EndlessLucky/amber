<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <DNA/>
    <Advertise/>
    <Navigation/>
    <Contact :title="contactTitle"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../solution/Landing'
import About from '../solution/About'
import DNA from '../solution/DNA'
import Advertise from '../solution/Advertise'
import Navigation from '../solution/Navigation'
import Contact from '../home/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Solution',
  components: {
    Header,
    Landing,
    About,
    DNA,
    Advertise,
    Navigation,
    Contact,
    Footer
  },
  data () {
    return {
      contactTitle: 'Cuéntanos el reto y lo resolvemos'
    }
  }
}
</script>

<style scoped>

</style>
