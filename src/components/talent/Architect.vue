<template>
<div>
  <div class="DNA-container">
    <div class="row talent-architect-row">
      <router-link v-bind:to="{ name: 'TalentDetail' }">
        <div class="col-md-12 talent-architect-col-left">
          <div class="row">
            <div class="talent-architect-content-left">
              <h1 class="talent-architect-title">Arquitecto Big Data</h1>
            </div>
            <div class="talent-architect-content-right">
              <img class="talent-architect-img" src="../../assets/img/talent-bg2.svg"/>
            </div>
          </div>
        </div>
      </router-link>
      <div class="col-md-4 talent-architect-col-right">
        <div class="row">
          <div class="talent-architect-content-left">
            <h1 class="talent-architect-title">Arquitecto Big Data</h1>
          </div>
          <div class="talent-architect-content-right">
            <img class="talent-architect-img" src="../../assets/img/talent-bg3.svg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Architect'
}
</script>

<style scoped>

</style>
