<template>
  <div class="books">
    <HeroImg image="/assets/img/books.jpg" :title="$t('books.title')"/>
  </div>
</template>

<i18n>
{
  "en": {
    "books": {
      "title": "Books"
    }
  },
  "sk": {
    "books": {
      "title": "Knihy"
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
          title: "Books"
        },
        sk: {
          title: "Knihy"
        }
      }
    };
  },
  components: {
    HeroImg
  }
};
</script>
