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

<style scoped lang="scss">
.contact {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h10v10H0V10zM10 0h10v10H10V0z' fill='%23aeaeae' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
