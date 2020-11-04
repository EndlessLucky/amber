<template>
  <b-navbar class="nav-bar" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
        <img class="logo-img" src="../../assets/img/Logo-4.png">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Soluciones</b-nav-item>
        <b-nav-item href="#">Piratas</b-nav-item>
        <b-nav-item href="#">Talento</b-nav-item>
        <b-nav-item href="#">Proyectos</b-nav-item>
        <b-nav-item href="#">Conecta</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
