<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <DNA/>
    <Piratas/>
    <Project/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../home/Landing'
import About from '../home/About'
import DNA from '../home/DNA'
import Piratas from '../home/Piratas'
import Project from '../home/Project'

export default {
  name: 'Home',
  components: {
    Header,
    Landing,
    About,
    DNA,
    Piratas,
    Project
  }
}
</script>

<style scoped>

</style>
