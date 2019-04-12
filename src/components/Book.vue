<template>
  <section class="book full-height">
    <h3 id="title-mobile">
      {{ title }}
      <small>({{ year }})</small>
    </h3>
    <div class="float-wrapper clearfix">
      <div class="book-cover">
        <img class="book-cover" :src="cover" alt="Book Cover">
      </div>
      <div class="book-about">
        <h3 id="title-desktop">
          {{ title }}
          <small>({{ year }})</small>
        </h3>
        <p class="book-desc" v-html="desc"></p>
        <div class="book-cta">
          <a class="btn" href="#">{{ $t('book.pdf') }}</a>
          <a v-if="buy" class="btn" :href="buy">{{ $t('book.buy') }}</a>
        </div>
        <div class="book-poems" :class="{ center:center }">
          <span v-html="poems"></span>
        </div>
        <footer>
          <h4>{{ title }}</h4>
          <p>{{ info }}</p>
        </footer>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "book": {
      "pdf": "Download as PDF",
      "buy": "Buy in Martinus.sk"
    }
  },
  "sk": {
    "book": {
      "pdf": "Stiahni ako PDF",
      "buy": "Kúp na Martinus.sk"
    }
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      center: false
    };
  },
  props: [
    "title",
    "year",
    "cover",
    "desc",
    "poems",
    "align",
    "pdf",
    "buy",
    "info"
  ],
  beforeMount() {
    if (this.align) {
      if (this.align == "center") {
        this.center = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.book {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23aeaeae' fill-opacity='0.2'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
}

h3 {
  margin-top: 0;
}

.float-wrapper {
  max-width: 800px;
  margin: 0 auto;

  .book-cover {
    max-width: 300px;
    float: left;

    img {
      width: 100%;
    }
  }

  .book-about {
    margin-left: 25px;
    text-align: left;
    max-width: 475px;
    float: right;
    padding: 10px;
    background-color: rgba(205, 203, 211, 0.3);
    border: 1px solid #d2d2d2;
    box-shadow: 0 0px 11px rgba(0, 0, 0, 0.09), 0 1px 1px rgba(0, 0, 0, 0.09);
  }

  .book-desc {
    margin-bottom: 0;
  }

  .book-cta {
    padding: 40px 0;
    text-align: center;
    a:last-child {
      margin-left: 10px;
    }
  }

  .book-poems {
    margin-top: 30px;

    &.center {
      text-align: center;
    }
  }

  @media (max-width: 870px) {
    .book-cover,
    .book-about {
      float: none;
      margin: 0 auto;
      padding: 0 10px;
    }
  }
}

#title-mobile {
  display: none;
}

footer {
  margin-top: 50px;

  h4 {
    text-transform: uppercase;
    margin: 0;
  }
}

@media (max-width: 870px) {
  #title-desktop {
    display: none;
  }

  #title-mobile {
    display: block;
  }
}
</style>