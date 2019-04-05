<template>
  <section class="contact full-height">
    <HeroImg image="/assets/img/contact.jpg" :title="$t('contact.title')"/>
  </section>
</template>

<i18n>
{
  "en": {
    "contact": {
      "title": "Contact"
    }
  },
  "sk": {
    "contact": {
      "title": "Kontakt"
    }
  }
}
</i18n>

<script>
import HeroImg from "@/components/HeroImg.vue";

export default {
  data() {
    return {
      title: {
        en: {
          title: "Contact"
        },
        sk: {
          title: "Kontakt"
        }
      }
    };
  },
  components: {
    HeroImg
  }
};
</script>