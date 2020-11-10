<template>
  <div>
    <Header/>
    <Landing/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../project/Landing'
import Main from '../project/Main'
import Footer from '../layouts/Footer'

export default {
  name: 'Project',
  components: {
    Header,
    Landing,
    Main,
    Footer
  }
}
</script>

<style scoped>

</style>
