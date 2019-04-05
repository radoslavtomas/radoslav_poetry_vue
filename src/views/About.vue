<template>
  <div class="about">
    <HeroImg image="/assets/img/index.jpg" :title="$t('about.title')"/>
  </div>
</template>

<i18n>
{
  "en": {
    "about": {
      "title": "About Me"
    }
  },
  "sk": {
    "about": {
      "title": "O Mne"
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
