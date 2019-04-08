<template>
  <section class="about full-height">
    <HeroImg image="/assets/img/index.jpg" :title="$t('about.title')"/>

    <div class="container">
      <div class="text-left simple-text" v-html="$t('about.text')"></div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "about": {
      "title": "About Me",
      "text": "<p>Originally from Slovakia, I currently live in Liverpool, UK.</p><p>My latest book so far was published in 2011, it’s called <strong>Status reports (Statusové hlásenia)</strong> and it is an outcomeof an exciting play with poetry, identities and social networks.</p><p>In 2009 I published <strong>Wolves' weddings (Vlčie svadby)</strong> based on stories from mythology. My first book <strong>A boy (Chlapec)</strong> is from 2005 and received literary prize for first-published poets in Slovakia – the Ivan Krasko Prize.</p><p>Many of my poems were translated into English, German, Hungarian, Czech and Polish. Selection of my poetry appeared in 5x5 (an anthology of modern Slovak poetry).</p><p>These days I work as a <a href='http://radoslav.in' target='_blank'>webdeveloper</a>.</p>"
    }
  },
  "sk": {
    "about": {
      "title": "O Mne",
      "text": "<p>Pochádzam zo Slovenska, no momentálne žijem v Liverpoole, UK.</p><p>Zatiaľ posledná kniha mi vyšla v roku 2011, volá sa <strong>Statusové hlásenia</strong> a bola pre mňa výbornou hrou s poéziou, identitou a sociálnymi sieťami.</p><p>V roku 2009 som vydal <strong>Vlčie svadby</strong> postavené na príbehoch z mytológie. Moja prvá kniha <strong>Chlapec</strong> je z roku 2005 a získala Cenu Ivana Kraska za najlepší debut.</p><p>Mnohé moje básne boli preložené do angličtiny, nemčiny, maďarčiny, češtiny a poľštiny. Výber z mojej poézie sa objavil aj v knihe 5x5 (antológia súčasnej slovenskej poézie).</p><p>V súčasnosti pracujem ako <a href='http://radoslav.in' target='_blank'>webdeveloper</a>.</p>"
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
.about {
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23aeaeae' fill-opacity='0.12'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>

