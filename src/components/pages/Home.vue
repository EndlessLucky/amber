<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <Project/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../home/Landing'
import About from '../home/About'
import Project from '../home/Project'

export default {
  name: 'Home',
  components: {
    Header,
    Landing,
    About,
    Project
  }
}
</script>

<style scoped>

</style>
