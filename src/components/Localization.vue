<template>
  <div>
    <select class="localization" v-model="locale">
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

    // reset locale if it was changed in other instances
    this.$root.$on("localeChanged", val => (this.locale = val));
  },
  methods: {
    setLocale(val) {
      this.locale = val;
    }
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;

      // reset locale if it was changed in other instances
      this.$root.$emit("localeChanged", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.localization {
  padding: 4px;
  border-radius: 22px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }
}
</style>