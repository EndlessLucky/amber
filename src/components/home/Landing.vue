<template>
  <header class="masthead">
    <!-- <div class="line1"></div> -->
    <!-- <div class="line2"></div> -->
    <!-- <div class="line3"></div> -->
    <div class="landing-title-container">
      <h1 class="ml2">Conectados</h1>
    </div>
    <div class="landing-content-container">
      <h1 class="ml13">Tecnología disruptiva. Innovación. Confianza</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Landing',
  mounted () {
    var textWrapper = document.querySelector('.ml2')
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

    anime.timeline({loop: false})
      .add({
        targets: '.ml2 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      })

    var textWrapperSmall = document.querySelector('.ml13')
    textWrapperSmall.innerHTML = textWrapperSmall.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

    anime.timeline({loop: false})
      .add({
        targets: '.ml13 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      })
  }
}
</script>

<style scoped>
.ml2 .letter {
  display: inline-block;
  line-height: 1em;
}
.ml13 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
