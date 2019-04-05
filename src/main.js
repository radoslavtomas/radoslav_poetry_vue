import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faBars, faTimes]);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueParticles from "vue-particles";
Vue.use(VueParticles);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

// Create VueI18n instance with options
let i18n = new VueI18n({
  locale: "en",
  messages: {
    en: {}
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
