<template>
  <div class="home">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="120"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="3"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="5"
    ></vue-particles>
    <h1>
      <span class="gradient">{{ $t("home.name") }}</span>
    </h1>
    <h5>{{ $t("home.desc") }}</h5>
    <nav class="home-cta">
      <router-link class="btn" to="/books">Find out more</router-link>
    </nav>
  </div>
</template>

<i18n>
{
  "en": {
    "home": {
      "name": "Radoslav Tomas",
      "desc": "poet"
    }
  },
  "sk": {
    "home": {
      "name": "Radoslav Tomáš",
      "desc": "básnik"
    }
  }
}
</i18n>

<script>
export default {
  name: "home",
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped lang="scss">
.home {
  position: relative;
}
h1 {
  font-size: 54px;
  font-weight: 600;
  padding: 70px 15px 0 15px;
  font-family: "Poiret One", cursive;
}
h5 {
  font-size: 24px;
  font-weight: 600;
  font-family: "Poiret One", cursive;
}
.home-cta {
  margin-top: 70px;
}
</style>

