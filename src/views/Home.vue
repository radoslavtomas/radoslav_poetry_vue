<template>
  <div>
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

      <div class="main-title gradient">{{ $t("home.name") }}</div>
      <span class="sub-title">{{ $t("home.desc") }}</span>
      <span class="home-cta">
        <router-link class="btn" to="/books">Find out more</router-link>
      </span>
    </div>
    <div class="hero-landing">
      <HeroImg image="/assets/img/about.jpg"/>
    </div>
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
import HeroImg from "@/components/HeroImg.vue";

export default {
  name: "home",
  data() {
    return {
      //
    };
  },
  components: {
    HeroImg
  }
};
</script>

<style scoped lang="scss">
.home {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-title {
  font-size: 54px;
  font-weight: 600;
  padding: 70px 15px 0 15px;
  margin: 0;
  font-family: "Poiret One", cursive;
  position: relative;
  z-index: 5;
}
.sub-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  padding-top: 20px;
  font-family: "Poiret One", cursive;
  position: relative;
  z-index: 5;
}
.home-cta {
  padding-top: 70px;
  position: relative;
  z-index: 5;
}
.hero-landing {
  padding: 80px 10px 50px 10px;
  position: relative;
  z-index: 5;
}
</style>

