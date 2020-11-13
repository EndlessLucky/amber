
<template>
  <div class="project-background">
    <div class="about-container">
      <div class="col-md-12">
        <p class="DNA-title">PROYECTOS</p>
      </div>
      <div class="row">
        <div class="col-md-6 DNA-card">
          <router-link v-bind:to="{ name: 'Marketing' }">
          <h1 class="project-title-one" @mouseover="firstOver">Latin Surf</h1>
          </router-link>
          <transition name="fade" mode="out-in">
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
          </transition>
          <h1 class="project-title-two" @mouseover="secondOver">Lennon</h1>
          <transition name="fade" mode="out-in">
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
          </transition>
          <h1 class="project-title-three" @mouseover="thirdOver">Superliga<br> CMD</h1>
          <transition name="fade" mode="out-in">
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
          </transition>
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
    firstOver: function () {
      this.isSelect = 1
    },
    secondOver: function () {
      this.isSelect = 2
    },
    thirdOver: function () {
      this.isSelect = 3
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
