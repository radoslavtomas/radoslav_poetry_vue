<template>
  <section class="links full-height">
    <HeroImg :title="$t('links.title')" image="/assets/img/links-2.jpg"/>
    <br>
    <br>
    <div class="container">
      <div class="links-wrapper simple-text custom-bg">
        <h5>sme.sk</h5>
        <a
          target="_blank"
          href="https://mytrnava.sme.sk/c/5608088/to-ze-rozmyslam-nad-basnami-zo-mna-nerobi-lepsieho-cloveka.html"
        >{{ $t('links.sme') }}</a>

        <h5>litcentrum.sk</h5>
        <a
          target="_blank"
          href="http://www.litcentrum.sk/slovenski-spisovatelia/radoslav-tomas"
        >{{ $t('links.litcentrum') }}</a>

        <h5>martinus.sk</h5>
        <a
          target="_blank"
          href="http://blog.martinus.sk/2010/11/radoslav-tomas-poezia-nie-je-ziskova-je-to-zalezitost-mensiny"
        >{{ $t('links.martinus') }}</a>

        <h5>krajinaknih.blogspot.co.uk</h5>
        <a
          target="_blank"
          href="http://krajinaknih.blogspot.com/2016/04/statusove-hlasenia-radoslav-tomas.html"
        >{{ $t('links.krajinaknih') }}</a>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "links": {
      "title": "Links",
      "sme": "I am not better person just because I think about poetry (SK)",
      "litcentrum": "Profile in The Centre for Information on Literature",
      "martinus": "Poetry is not a business, it matters only to minority (SK)",
      "krajinaknih": "Status reports (Radoslav Tomas) (SK)"
    }
  },
  "sk": {
    "links": {
      "title": "Odkazy",
      "sme": "To, že rozmýšľam nad básňami, zo mňa nerobí lepšieho človeka",
      "litcentrum": "Profil autora",
      "martinus": "Poézia nie je zisková, je to záležitosť menšiny",
      "krajinaknih": "Poézia nie je zisková, je to záležitosť menšiny"
    }
  }
}
</i18n>

<script>
import HeroImg from "@/components/HeroImg.vue";

export default {
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
.links {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23aeaeae' fill-opacity='0.20' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
}
</style>

