<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <Project/>
    <Piratas/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../home/Landing'
import About from '../home/About'
import Project from '../home/Project'
import Piratas from '../home/Piratas'

export default {
  name: 'Home',
  components: {
    Header,
    Landing,
    About,
    Project,
    Piratas
  }
}
</script>

<style scoped>

</style>
