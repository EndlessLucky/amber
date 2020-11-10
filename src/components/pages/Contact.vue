<template>
  <div>
    <HeaderBlack/>
    <About/>
    <Info/>
    <Form/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import About from '../contact/About'
import Info from '../contact/Info'
import Form from '../contact/Form'
import Footer from '../layouts/Footer'

export default {
  name: 'Contact',
  components: {
    HeaderBlack,
    About,
    Info,
    Form,
    Footer
  }
}
</script>

<style scoped>

</style>
