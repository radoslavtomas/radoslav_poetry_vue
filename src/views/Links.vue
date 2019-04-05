<template>
  <section class="links full-height">
    <HeroImg :title="$t('links.title')" image="/assets/img/links-2.jpg"/>
  </section>
</template>

<i18n>
{
  "en": {
    "links": {
      "title": "Links"
    }
  },
  "sk": {
    "links": {
      "title": "Odkazy"
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
