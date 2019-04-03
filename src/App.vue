<template>
  <div id="app">
    <!-- <vue-particles
      color="#000"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>-->

    <header class="header-main">
      <div class="brand">
        <img src="./assets/img/logo-1.png" alt>
        <span>Radoslav Tomas</span>
      </div>

      <Navigation/>
    </header>

    <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  data() {
    return {
      //
    };
  },

  components: {
    Navigation
  }
};
</script>


<style lang="scss">
body {
  margin: 0;
  min-height: 100vh;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  position: relative;
}
.header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #bada55;
}
.brand {
  display: flex;
  align-items: center;
  img {
    width: 50px;
  }
  span {
    font-size: 1.8em;
  }
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
