<template>
  <div id="app">
    <header class="header-main" :class="page">
      <div class="brand">
        <a href="https://radoslavtomas.com">
          <img :src="logo" alt="logo" @mouseenter="logo = logo2" @mouseleave="logo = logo1">
        </a>
        <span>{{ $t('app.name') }}</span>
      </div>

      <Navigation/>
    </header>

    <router-view/>

    <Footer/>
  </div>
</template>

<i18n>
{
  "en": {
    "app": {
      "name": "Radoslav Tomas"
    }
  },
  "sk": {
    "app": {
      "name": "Radoslav Tomáš"
    }
  }
}
</i18n>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      logo: "/assets/img/logo-1.png",
      logo1: "/assets/img/logo-1.png",
      logo2: "/assets/img/logo-2.png",
      page: ""
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchPath();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchPath"
  },
  methods: {
    fetchPath() {
      let path = this.$route.path.split("/")[1];
      this.page = path ? path : "home";
    }
  },
  components: {
    Navigation,
    Footer
  }
};
</script>

#50a5a9
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poiret+One|Fira+Sans:400,500");
::selection {
  background: #f1de7c;
}
*,
html {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}
section {
  padding-top: 50px;
  background-color: #ffffff;
}
.full-height {
  position: relative;
  min-height: calc(100vh - 140px);
}
#app {
  font-family: "Fira Sans", sans-serif;
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
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0px 11px rgba(0, 0, 0, 0.09), 0 1px 1px rgba(0, 0, 0, 0.09);
  &.home {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #56b085),
      color-stop(0.5, #d6d69e),
      color-stop(1, #78c7c9)
    );
  }
  &.about {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #79b2d6),
      color-stop(0.5, #d4da6b),
      color-stop(1, #93f9ea)
    );
  }
  &.books {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #f4dbab),
      color-stop(0.5, #f4b4bd),
      color-stop(1, #cac8cf)
    );
  }
  &.links {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #ef4252),
      color-stop(0.5, #bfc3c5),
      color-stop(1, #eaac84)
    );
  }
  &.contact {
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #e4dd9e),
      color-stop(0.5, #a7cab8),
      color-stop(1, #efa7ca)
    );
  }
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
.container {
  margin: 0 auto;
  max-width: 550px;
  padding: 10px;
}
.text-left {
  text-align: left;
}
.simple-text {
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin-block-start: 1.2em;
    margin-block-end: 1.2em;
  }

  a {
    color: #b969a0;
    &:hover {
      color: darken(#b969a0, 5%);
    }
  }
}
</style>
