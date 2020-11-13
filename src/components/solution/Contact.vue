<template>
  <div class="about-container">
    <div class="row contact-row">
      <h1 class="contact-title">
        Cuéntanos el reto y<br> lo resolvemos
      </h1>
      <div class="col-md-12 d-flex justify-content-center contact-btn">
        <div class="col-md-6 contact-btn-col">
          <div class="contact-btn-border">
            <div class="contact-line"></div>
            <span class="rwap-1">
              <router-link v-bind:to="{ name: 'Contact' }">
                <a class="slantButton text-white">Contactanos</a>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['title']
}
</script>

<style scoped>

</style>
