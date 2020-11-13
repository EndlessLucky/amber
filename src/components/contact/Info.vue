<template>
<div>
  <div class="contact-info-container">
    <div class="row">
      <div class="col-md-6">
        <p class="contact-info-title">Dirección</p>
        <p class="contact-info-content">Av. Javier Prado Este 123 - San Isidro</p>
        <p class="contact-info-title">Teléfono</p>
        <p class="contact-info-content">+51 987 654 321</p>
        <p class="contact-info-title">Correo</p>
        <p class="contact-info-content">hola@amber.pe</p>
      </div>
    </div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  name: 'Info',
  props: {
    mapConfig: Object,
    apiKey: String
  },
  data () {
    return {
      google: null,
      map: null
    }
  },
  async mounted () {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },
  methods: {
    initializeMap () {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.mapConfig
      )
    }
  }
}
</script>

<style scoped>

</style>
