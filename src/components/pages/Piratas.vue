<template>
  <div>
    <Header/>
    <Landing/>
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Landing from '../piratas/Landing'

export default {
  name: 'Piratas',
  components: {
    Header,
    Landing
  }
}
</script>

<style scoped>

</style>
