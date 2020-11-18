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
    <GoogleMapLoader :mapConfig="mapConfig" apiKey="AIzaSyCf09qlYT8X4AIpQ92I8LhW2v12SyAhB0M"/>
  </div>
</div>
</template>

<script>
import GoogleMapLoader from '../googlemap/GoogleMapLoader'
import { mapSettings } from '../../constants/mapSettings'

export default {
  name: 'Info',
  components: {
    GoogleMapLoader
  },
  data () {
    return {
      markers: [
        {
          id: 'a',
          position: { lat: 3, lng: 101 }
        },
        {
          id: 'b',
          position: { lat: 5, lng: 99 }
        },
        {
          id: 'c',
          position: { lat: 6, lng: 97 }
        }
      ],
      lines: [
        {
          id: '1',
          path: [
            { lat: 3, lng: 101 },
            { lat: 5, lng: 99 }
          ]
        },
        {
          id: '2',
          path: [
            { lat: 5, lng: 99 },
            { lat: 6, lng: 97 }
          ]
        }
      ]
    }
  },
  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: this.mapCenter
      }
    },
    mapCenter () {
      return this.markers[1].position
    }
  }
}
</script>

<style scoped>

</style>
