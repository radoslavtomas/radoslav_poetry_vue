<template>
  <div class="links">
    <HeroImg :title="$t('links.title')" image="/assets/img/links.jpg"/>
  </div>
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
