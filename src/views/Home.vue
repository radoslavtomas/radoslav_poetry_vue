<template>
  <div class="home">
    <h1>{{ $t("home") }}</h1>
  </div>
</template>

<i18n>
{
  "en": {
    "home": "Home"
  },
  "ja": {
    "home": "こんにちは"
  }
}
</i18n>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      //
    };
  },
  components: {
    // HelloWorld
  }
};
</script>
