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
        <a href="https://radoslavtomas.com">
          <img :src="logo" alt="logo" @mouseenter="logo = logo2" @mouseleave="logo = logo1">
        </a>
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
      logo: "/assets/img/logo-1.png",
      logo1: "/assets/img/logo-1.png",
      logo2: "/assets/img/logo-2.png"
    };
  },

  components: {
    Navigation
  }
};
</script>

#50a5a9
<style lang="scss">
body {
  margin: 0;
  min-height: 100vh;
  // background-image: linear-gradient(to top, #badec1, #93d4ef);
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
  // background-color: #bada55;
}
.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: block;
    height: 50px;
  }
  img {
    width: 50px;
  }
  span {
    font-family: "Poiret One", cursive;
    font-weight: 600;
    font-size: 1.8em;
    margin-left: 15px;

    @media (max-width: 470px) {
      font-size: 1.4em;
    }

    @media (max-width: 350px) {
      display: none;
    }
  }
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 94px);
  z-index: 1;
}

.btn {
  padding: 15px 25px;
  color: #fff;
  font-weight: 600;
  border: 1px solid darken(#78c7ca, 5%);
  border-radius: 30px;
  text-decoration: none;
  background-color: #78c7ca;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #78c7ca),
    color-stop(1, #55af83)
  );
  &:hover {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(1, #78c7ca),
      color-stop(0, #55af83)
    );
  }
}
.gradient {
  display: inline-block;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #4554a9),
    color-stop(0.5, #bb528a),
    color-stop(1, #24802e)
  );
  background: -o-linear-gradient(transparent, transparent);
  color: #434cf9;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
