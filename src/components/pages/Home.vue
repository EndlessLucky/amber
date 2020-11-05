<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <DNA/>
    <Piratas/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../home/Landing'
import About from '../home/About'
import DNA from '../home/DNA'
import Piratas from '../home/Piratas'
import Project from '../home/Project'
import Contact from '../home/Contact'
import Footer from '../layouts/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Landing,
    About,
    DNA,
    Piratas,
    Project,
    Contact,
    Footer
  }
}
</script>

<style scoped>

</style>
