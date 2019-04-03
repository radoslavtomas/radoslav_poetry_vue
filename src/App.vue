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

    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About Me</router-link>|
      <router-link to="/books">Books</router-link>|
      <router-link to="/links">Links</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>-->

    <label for="locale">language</label>
    <select v-model="locale">
      <option>en</option>
      <option>ja</option>
    </select>

    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: "en"
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: relative;
  z-index: 999;
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
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
