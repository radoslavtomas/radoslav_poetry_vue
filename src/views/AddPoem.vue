<template>
  <section class="add-poem full-height">
    <div class="container">
      <h4>Title</h4>
      <input type="text" name="title" v-model="title">
      <h4>Subtitle</h4>
      <input type="text" name="subtitle" v-model="subtitle">
      <h4>Poem</h4>
      <textarea name="poem" cols="30" rows="20" v-model="poem"></textarea>

      <button class="btn" @click="prepareText">Send to DB</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      subtitle: "",
      poem: ""
    };
  },
  methods: {
    add_paragraphs(str) {
      // Trim whitespace
      if (!str.trim()) return "";

      // Standardize newlines
      str = str.replace(/\r\n/g, "\n");
      str = str.replace(/\r/g, "\n");

      // Do the <p> magic!
      str = "<article><p>" + str.trim() + "</p></article>";
      str = str.replace(/\n{2,}/g, "</p>\n\n<p>");

      // Convert single linebreaks to <br />
      str = str.replace(/(?:\r\n|\r|\n)/g, "<br>\n");

      return str;
    },
    prepareText() {
      console.log(this.add_paragraphs(this.poem));
    }
  }
};
</script>

<style lang="scss" scoped>
input,
textarea {
  display: block;
  width: 100%;
  margin-bottom: 30px;
  padding: 5px;
}

input {
  height: 40px;
}

// .add-poem {
//   max-width: 500px;
//   margin: 0 auto;
// }
</style>