
<template>
  <div class="project-background">
    <div class="about-container">
      <div class="col-md-12">
        <p class="DNA-title">PROYECTOS</p>
      </div>
      <div class="row">
        <div class="col-md-6 DNA-card">
          <router-link v-bind:to="{ name: 'Marketing' }">
          <h1 class="project-title-one" v-on:click="selectOne">Latin Surf</h1>
          </router-link>
          <div class="row" v-if="isSelect == 1">
            <div class="project-num-container">
              <p class="project-num">01</p>
              <span class="project-line-one"></span>
            </div>
            <div class="project-content-container">
              <p class="project-content">
                Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut
                labore et consertur lorem.
              </p>
            </div>
          </div>
          <h1 class="project-title-two" v-on:click="selectTwo">Lennon</h1>
          <div class="row" v-if="isSelect == 2">
            <div class="project-num-container">
              <p class="project-num">02</p>
              <span class="project-line-two"></span>
            </div>
            <div class="project-content-container">
              <p class="project-content">
                Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut
                labore et consertur lorem.
              </p>
            </div>
          </div>
          <h1 class="project-title-three" v-on:click="selectThree">Superliga<br> CMD</h1>
          <div class="row" v-if="isSelect == 3">
            <div class="project-num-container">
              <p class="project-num">03</p>
              <span class="project-line-three"></span>
            </div>
            <div class="project-content-container">
              <p class="project-content">
                Body - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut
                labore et consertur lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      isSelect: 1
    }
  },
  methods: {
    selectOne: function (event) {
      this.isSelect = 1
    },
    selectTwo: function (event) {
      this.isSelect = 2
    },
    selectThree: function (event) {
      this.isSelect = 3
    }
  }
}
</script>

<style scoped>
</style>
