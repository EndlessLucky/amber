<template>
  <div class="about-container">
    <div class="row contact-row">
      <h1 class="contact-title">
        {{ title }}
      </h1>
      <div class="col-md-12 d-flex justify-content-center contact-btn">
        <!-- <div class="contact-line"></div> -->
        <div class="contact-btn-border">
          <span class="rwap-1">
            <a href="/contacto" class="slantButton text-white">Contactanos</a>
          </span>
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
