<template>
  <div class="footer-background">
    <div class="about-container">
      <div class="row">
        <div class="col-md-6">
          <img class="logo-img" src="../../assets/img/logo-white.svg">
        </div>
        <div class="col-md-6 footer-content-col">
          <p class="footer-content">
            Calle Burgos 178 - San Isidro<br>
            +51 987 654 321<br>
            hola@amber.pe
          </p>
        </div>
        <div class="col-md-6 footer-btns">
          <a @mouseover="instagramOver" @mouseleave="instagramLeave">
            <i class="fa fa-instagram text-white awaer mr-4"></i>
          </a>
          <a @mouseover="linkedinOver" @mouseleave="linkedinLeave">
            <i class="fa fa-linkedin text-white awaer mr-4"></i>
          </a>
          <a @mouseover="facebookOver" @mouseleave="facebookLeave">
            <i class="fa fa-facebook-square text-white awaer mr-4"></i>
          </a>
          <a @mouseover="twitterOver" @mouseleave="twitterLeave">
            <i class="fa fa-twitter-square text-white awaer mr-4"></i>
          </a>
          <a @mouseover="youtubeOver" @mouseleave="youtubeLeave">
            <i class="fa fa-youtube awaer text-white"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      isInstagram: false,
      isLinkedin: false,
      isFacebook: false,
      isTwitter: false,
      isYoutube: false
    }
  },
  methods: {
    instagramOver: function () {
      this.isInstagram = true
      console.log(this.isInstagram)
    },
    instagramLeave: function () {
      this.isInstagram = false
      console.log(this.isInstagram)
    },
    linkedinOver: function () {
      this.isLinkedin = true
    },
    linkedinLeave: function () {
      this.isLinkedin = false
    },
    facebookOver: function () {
      this.isFacebook = true
    },
    facebookLeave: function () {
      this.isFacebook = false
    },
    twitterOver: function () {
      this.isTwitter = true
    },
    twitterLeave: function () {
      this.isTwitter = false
    },
    youtubeOver: function () {
      this.isYoutube = true
    },
    youtubeLeave: function () {
      this.isYoutube = false
    }
  }
}
</script>

<style scoped>

</style>
