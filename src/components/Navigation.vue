<template>
  <nav id="nav-main">
    <div class="nav-links">
      <router-link v-for="link in links" :key="link.desc" :to="link.to">{{ $t(link.desc) }}</router-link>
      <Localization/>
    </div>
    <div v-if="open" class="nav-links nav-mobile">
      <a
        v-for="link in links"
        :key="link.desc"
        :href="link.to"
        @click.prevent="redirect(link.to)"
      >{{ $t(link.desc) }}</a>
      <Localization/>
    </div>
    <div class="hamburger" @click="open = !open">
      <font-awesome-icon v-if="open" icon="times" size="2x"/>
      <font-awesome-icon v-else icon="bars" size="2x"/>
    </div>
  </nav>
</template>

<i18n>
{
  "en": {
      "nav": {
        "home": "Home",
        "about": "About Me",
        "books": "Books",
        "links": "Links",
        "contact": "Contact"
    }
  },
  "sk": {
    "nav": {
        "home": "Domov",
        "about": "O mne",
        "books": "Knihy",
        "links": "Odkazy",
        "contact": "Kontakt"
    }
  }
}
</i18n>

<script>
import Localization from "@/components/Localization.vue";

export default {
  data() {
    return {
      links: [
        { to: "/", desc: "nav.home" },
        { to: "/about", desc: "nav.about" },
        { to: "/books", desc: "nav.books" },
        { to: "/links", desc: "nav.links" },
        { to: "/contact", desc: "nav.contact" }
      ],
      windowWidth: 0,
      windowHeight: 0,
      open: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);

      //Init
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    redirect(to) {
      this.$router.push(to);
      this.open = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  },
  components: {
    Localization
  }
};
</script>

<style lang="scss" scoped>
#nav-main {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 840px) {
    align-items: flex-start;
    justify-content: space-between;
  }
}
.hamburger {
  margin-left: 15px;
  cursor: pointer;
  display: none;

  @media (max-width: 840px) {
    align-items: flex-start;
    justify-content: space-between;
    display: block;
    cursor: pointer;
    z-index: 999;
  }
}
.nav-links {
  position: relative;
  display: flex;
  align-items: center;

  a {
    // font-weight: bold;
    font-size: 18px;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }

    &.router-link-exact-active {
      color: #42b983;
      text-decoration: underline;
    }
  }

  @media (max-width: 840px) {
    display: none;
  }

  &.nav-mobile {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
    background-color: #fff;

    @media (min-width: 840px) {
      display: none;
    }

    a {
      display: block;
      margin: 0 0 15px 0;
    }
  }
}
</style>