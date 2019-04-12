<template>
  <footer class="footer-main">
    <div class="footer-container">
      <h4>{{ $t('app.name') }} | {{ year }}</h4>
      <div class="nav-social">
        <a href="mailto:radoslav.tomas@gmail.com">
          <img src="/assets/img/M_icon.svg" alt="Mail" class="m-icon">
        </a>
        <a target="_blank" href="https://www.facebook.com/radoslav.tomas">
          <img src="/assets/img/F_icon.svg" alt="Facebook">
        </a>
      </div>
    </div>
  </footer>
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
export default {
  data() {
    return {
      year: null
    };
  },
  beforeMount() {
    const date = new Date();
    this.year = date.getFullYear();
  }
};
</script>

<style scoped lang="scss">
h4 {
  font-weight: normal;
}
.footer-main {
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(1, #78c7ca),
    color-stop(0, #55af83)
  );
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.19), 0 0px 6px rgba(0, 0, 0, 0.23);
}

.footer-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-social {
  a {
    img {
      width: auto;
      height: 25px;

      &.m-icon {
        height: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>