<template>
  <div>
    <Header/>
    <Landing/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../home/Landing'

export default {
  name: 'Home',
  components: {
    Header,
    Landing
  }
}
</script>

<style scoped>

</style>
