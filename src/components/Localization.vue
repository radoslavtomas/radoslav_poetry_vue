<template>
  <div>
    <select v-model="locale">
      <option>en</option>
      <option>sk</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: "en"
    };
  },
  mounted() {
    this.locale = this.$i18n.locale;
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>

<style scoped>
</style>