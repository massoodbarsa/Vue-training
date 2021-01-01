<template>
  <div>
    <div class="slider" v-for="(color, index) in slider" :key="color">
      <transition name="fade">
        <div v-if="currentSlide === index" :class="color">{{ color }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      slider: ["slider1", "slider2", "slider3"],
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.currentSlide === 2) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style  lang="scss" scoped>
.slider {
  top: 20px;
  width: 95vw;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
}
.slider1 {
  background-color: blue;
  height: 350px;
  position: absolute;
  width: inherit;
  color: aliceblue;
  font-size: 2rem;
  padding-top: 2rem;
}
.slider2 {
  @extend .slider1;
  background-color: red;
}
.slider3 {
  @extend .slider2;
  background-color: green;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>