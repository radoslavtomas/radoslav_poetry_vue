<template>
  <section class="books full-height">
    <HeroImg image="/assets/img/books.jpg" :title="$t('books.title')"/>

    <article class="book-preview" v-for="book in books" :key="book.id">
      <h3>
        {{ $t(book.title) }}
        <small>({{ book.year }})</small>
      </h3>
      <p>{{ $t(book.desc) }}</p>
      <img :src="book.img" :alt="$t(book.title)">
    </article>
  </section>
</template>

<i18n>
{
  "en": {
    "books": {
      "title": "Books",
      "boy": "A Boy",
      "boy_text": "My first book which I wrote when I was 17-18 years old. It received literary prize for first-published poets in Slovakia – the Ivan Krasko Prize.",
      "wolf": "Wolves' weddings",
      "wolf_text": "Wolves’ weddings are based on mythology. I work here with Greek and Biblical motifs and their relevance for current society.",
      "status": "Status reports",
      "status_text": "My latest book so far started as an experiment on social networks."
    }
  },
  "sk": {
    "books": {
      "title": "Knihy",
      "boy": "Chlapec",
      "boy_text": "Moja prvá kniha, ktorú som napísal ako 17 až 18-ročný. Získala Cenu Ivana Kraska za najlepší debut roka.",
      "wolf": "Vlčie svadby",
      "wolf_text": "Vlčie svadby vychádzajú z mytológie. Pracujem tu s gréckymi a biblickými motívmi, ktoré som sa snažil preniesť do súčasnosti.",
      "status": "Statusové hlásenia",
      "status_text": "Zatiaľ moja posledná kniha, ktorá vznikla ako hra na sociálnych sieťach."
    }
  }
}
</i18n>

<script>
import HeroImg from "@/components/HeroImg.vue";

export default {
  data() {
    return {
      books: [
        {
          id: "1",
          title: "books.status",
          year: "2011",
          desc: "books.status_text",
          img: "/assets/img/covers/status_reports_cover.png"
        },
        {
          id: "2",
          title: "books.wolf",
          year: "2009",
          desc: "books.wolf_text",
          img: "/assets/img/covers/wolves_weddings_cover.png"
        },
        {
          id: "3",
          title: "books.boy",
          year: "2005",
          desc: "books.boy_text",
          img: "/assets/img/covers/boy_cover.png"
        }
      ]
    };
  },
  components: {
    HeroImg
  }
};
</script>

<style lang="scss" scoped>
.books {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23aeaeae' fill-opacity='0.20'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>

