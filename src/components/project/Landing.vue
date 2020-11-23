<template>
  <div class="project-background project-page">
    <div class="project-container">
      <div class="row">
        <div class="col-md-6 DNA-card">
          <!-- <router-link v-bind:to="{ name: 'Marketing' }"> -->
          <h1 class="project-page-one" v-on:click="selectOne" v-bind:style="{fontSize: fontSize1}">Latin Surf</h1>
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
          <h1 class="project-page-two" v-on:click="selectTwo" v-bind:style="{fontSize: fontSize2}">Lennon</h1>
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
          <h1 class="project-page-two" v-on:click="selectThree" v-bind:style="{fontSize: fontSize3}">Superliga CMD</h1>
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
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'Landing',
  data () {
    return {
      isSelect: 1,
      isMobile: isMobile,
      fontSize1: '66px',
      fontSize2: '22px',
      fontSize3: '22px'
    }
  },
  methods: {
    selectOne: function (event) {
      this.isSelect = 1
      if (this.isMobile) {
        this.fontSize1 = '36px!important'
      } else {
        this.fontSize1 = '66px'
      }
      this.fontSize2 = '22px'
      this.fontSize3 = '22px'
    },
    selectTwo: function (event) {
      this.isSelect = 2
      this.fontSize1 = '22px'
      if (this.isMobile) {
        this.fontSize2 = '36px!important'
      } else {
        this.fontSize2 = '66px'
      }
      this.fontSize3 = '22px'
    },
    selectThree: function (event) {
      this.isSelect = 3
      this.fontSize1 = '22px'
      this.fontSize2 = '22px'
      if (this.isMobile) {
        this.fontSize3 = '36px!important'
      } else {
        this.fontSize3 = '66px'
      }
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
