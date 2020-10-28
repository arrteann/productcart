<template>
  <div id="app">
    <app-header></app-header>
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./components/shared/Header";

export default {
  name: "App",
  components: {
    "app-header": Header,
  },
};
</script>

<style lang="scss">
#app {
  width: 90%;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
