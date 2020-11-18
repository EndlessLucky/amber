<template>
  <div>
    <div class="mobile-header">
      <MobileHeader/>
    </div>
    <div class="desktop-header">
      <HeaderBlack/>
    </div>
    <About/>
    <Info/>
    <Form/>
    <Footer/>
  </div>
</template>

<script>
import HeaderBlack from '../layouts/HeaderBlack'
import MobileHeader from '../layouts/MobileHeader'
import About from '../contact/About'
import Info from '../contact/Info'
import Form from '../contact/Form'
import Footer from '../layouts/Footer'

export default {
  name: 'Contact',
  components: {
    HeaderBlack,
    MobileHeader,
    About,
    Info,
    Form,
    Footer
  }
}
</script>

<style scoped>

</style>
