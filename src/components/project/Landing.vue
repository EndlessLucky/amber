<template>
  <div class="project-background project-page">
    <div class="project-container">
      <div class="row">
        <div class="col-md-6 DNA-card">
          <!-- <router-link v-bind:to="{ name: 'Marketing' }"> -->
          <h1 class="project-page-one" v-on:click="selectOne">Latin Surf</h1>
          <!-- </router-link> -->
          <transition name="fade" mode="out-in">
          <div class="row project-page-row" v-if="isSelect == 1">
            <div class="project-num-container">
              <p class="project-num">01</p>
              <span class="project-page-line-one"></span>
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
          <h1 class="project-page-two" v-on:click="selectTwo">Lennon</h1>
          <transition name="fade" mode="out-in">
          <div class="row project-page-row" v-if="isSelect == 2">
            <div class="project-num-container">
              <p class="project-num">02</p>
              <span class="project-page-line-two"></span>
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
          <h1 class="project-page-two" v-on:click="selectThree">Superliga CMD</h1>
          <transition name="fade" mode="out-in">
          <div class="row project-page-row" v-if="isSelect == 3">
            <div class="project-num-container">
              <p class="project-num">03</p>
              <span class="project-page-line-three"></span>
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
  name: 'Landing',
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
