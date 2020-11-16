<template>
  <div>
    <Header v-if="scrollPosition < 50"/>
    <HeaderBlack v-else/>
    <Landing/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import HeaderBlack from '../layouts/HeaderBlack'
import Landing from '../project/Landing'
import Main from '../project/Main'
import Footer from '../layouts/Footer'

export default {
  name: 'Project',
  components: {
    Header,
    HeaderBlack,
    Landing,
    Main,
    Footer
  },
  data () {
    return {
      scrollPosition: null,
      Title: 'Project'
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style scoped>

</style>
