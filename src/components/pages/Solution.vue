<template>
  <div>
    <Header/>
    <Landing/>
    <About/>
    <DNA/>
    <Advertise/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../solution/Landing'
import About from '../solution/About'
import DNA from '../solution/DNA'
import Advertise from '../solution/Advertise'

export default {
  name: 'Solution',
  components: {
    Header,
    Landing,
    About,
    DNA,
    Advertise
  }
}
</script>

<style scoped>

</style>
